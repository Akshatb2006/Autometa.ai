-- 0001_services.sql
-- Services CMS schema. Three tables:
--   service_categories — top-level buckets (core / ai / custom)
--   services          — sub-services rendered on /services/[category]
--   admin_users       — whitelist of phone numbers allowed to access /admin
--
-- RLS strategy:
--   - Public can SELECT service_categories and services (so the public site renders)
--   - Only authenticated users whose phone is in admin_users can INSERT/UPDATE/DELETE
--   - admin_users is admin-only; managed via SQL or service-role key

create extension if not exists "pgcrypto";

-- ───────────────────────────────────────────────
-- service_categories
-- ───────────────────────────────────────────────
create table if not exists public.service_categories (
    id            uuid primary key default gen_random_uuid(),
    slug          text unique not null,
    label         text not null,
    eyebrow       text not null,
    hero_title    text not null,
    hero_tagline  text not null,
    order_index   int not null default 0,
    created_at    timestamptz not null default now(),
    updated_at    timestamptz not null default now()
);

-- ───────────────────────────────────────────────
-- services
-- ───────────────────────────────────────────────
create table if not exists public.services (
    id            uuid primary key default gen_random_uuid(),
    category_id   uuid not null references public.service_categories(id) on delete cascade,
    slug          text not null,
    title         text not null,
    short_desc    text not null,
    long_desc     text not null,
    features      text[] not null default '{}',
    icon_key      text not null default 'CheckCircle2',
    image_url     text,
    video_url     text,
    order_index   int not null default 0,
    created_at    timestamptz not null default now(),
    updated_at    timestamptz not null default now(),
    unique (category_id, slug)
);

create index if not exists services_category_idx on public.services(category_id);

-- ───────────────────────────────────────────────
-- admin_users — phone-based whitelist
-- ───────────────────────────────────────────────
create table if not exists public.admin_users (
    id          uuid primary key default gen_random_uuid(),
    phone       text unique not null,
    name        text,
    created_at  timestamptz not null default now()
);

-- ───────────────────────────────────────────────
-- updated_at trigger
-- ───────────────────────────────────────────────
create or replace function public.set_updated_at() returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

drop trigger if exists trg_service_categories_updated on public.service_categories;
create trigger trg_service_categories_updated
    before update on public.service_categories
    for each row execute function public.set_updated_at();

drop trigger if exists trg_services_updated on public.services;
create trigger trg_services_updated
    before update on public.services
    for each row execute function public.set_updated_at();

-- ───────────────────────────────────────────────
-- RLS
-- ───────────────────────────────────────────────
alter table public.service_categories enable row level security;
alter table public.services           enable row level security;
alter table public.admin_users        enable row level security;

-- Public read
drop policy if exists "public read categories" on public.service_categories;
create policy "public read categories"
    on public.service_categories for select
    using (true);

drop policy if exists "public read services" on public.services;
create policy "public read services"
    on public.services for select
    using (true);

-- Admin write (authenticated user whose phone is in admin_users)
create or replace function public.is_admin() returns boolean as $$
    select exists (
        select 1 from public.admin_users au
        where au.phone = coalesce(
            (auth.jwt() ->> 'phone'),
            ''
        )
    );
$$ language sql stable;

drop policy if exists "admin write categories" on public.service_categories;
create policy "admin write categories"
    on public.service_categories for all
    using (public.is_admin())
    with check (public.is_admin());

drop policy if exists "admin write services" on public.services;
create policy "admin write services"
    on public.services for all
    using (public.is_admin())
    with check (public.is_admin());

-- admin_users itself: no public access, manage via service_role only
drop policy if exists "admin self-read" on public.admin_users;
create policy "admin self-read"
    on public.admin_users for select
    using (public.is_admin());
