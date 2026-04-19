-- 0002_services_seed.sql
-- Seeds service_categories + services to match lib/services-data.ts
-- Safe to re-run: uses INSERT ... ON CONFLICT to upsert by slug.

insert into public.service_categories (slug, label, eyebrow, hero_title, hero_tagline, order_index)
values
    ('core', 'Core Services', '01 / Core Services',
     'The Foundation Every Real Estate Agency Needs',
     'Lead capture, CRM, and follow-up systems — the backbone that stops deals slipping through the cracks.',
     1),
    ('ai', 'AI Integrations', '02 / AI Integrations',
     'AI That Works While You Sleep',
     'Large-language-model integrations, voice agents, and intelligent automations that replace the busywork of a real estate agency.',
     2),
    ('custom', 'Custom Solutions', '03 / Custom Solutions',
     'When Off-the-Shelf Won''t Cut It',
     'Mobile apps, web platforms, internal tools, and deep integrations — built end-to-end for your real estate operation.',
     3)
on conflict (slug) do update set
    label        = excluded.label,
    eyebrow      = excluded.eyebrow,
    hero_title   = excluded.hero_title,
    hero_tagline = excluded.hero_tagline,
    order_index  = excluded.order_index;

-- Core Services
with c as (select id from public.service_categories where slug = 'core')
insert into public.services (category_id, slug, title, short_desc, long_desc, features, icon_key, order_index)
select c.id, v.slug, v.title, v.short_desc, v.long_desc, v.features, v.icon_key, v.order_index
from c, (values
    ('email-systems',   'Email & Lead Inbox Systems',
     'Every inquiry captured, tagged, and routed from a single inbox.',
     'We build a central inbox that pulls leads from portals, ads, websites, and WhatsApp into one place — with auto-tagging, scoring, and routing to the right agent within seconds.',
     array['Multi-source lead capture','Auto-tagging & scoring','SLA alerts','Unified agent view'],
     'Mail', 1),
    ('whatsapp-chat',   'WhatsApp & Chat Automation',
     '24/7 AI on WhatsApp that qualifies leads and books viewings.',
     'AI-powered WhatsApp bots that respond instantly, qualify intent, share property details, and schedule viewings — even at 2am. Built specifically for real estate conversations.',
     array['Instant auto-replies','Lead qualification flow','Viewing scheduler','Handoff to human agents'],
     'MessageSquare', 2),
    ('crm-setup',       'CRM Setup & Optimization',
     'Your CRM, configured around how your team actually works.',
     'We design and deploy a real estate CRM (HubSpot, Zoho, or custom) with your exact pipeline stages, custom fields, automations, and reporting baked in from day one.',
     array['Pipeline design','Data migration','Custom fields & views','Team onboarding'],
     'Database', 3),
    ('follow-ups',      'Automated Follow-Up Sequences',
     '7-touch drip sequences that nurture leads without manual work.',
     'Multi-channel follow-up sequences (email + WhatsApp + SMS) that run automatically based on lead behaviour — so no opportunity goes cold.',
     array['Behaviour-based triggers','Multi-channel drips','Deal-stalled alerts','Re-engagement flows'],
     'Workflow', 4)
) as v(slug, title, short_desc, long_desc, features, icon_key, order_index)
on conflict (category_id, slug) do update set
    title = excluded.title, short_desc = excluded.short_desc, long_desc = excluded.long_desc,
    features = excluded.features, icon_key = excluded.icon_key, order_index = excluded.order_index;

-- AI Integrations
with c as (select id from public.service_categories where slug = 'ai')
insert into public.services (category_id, slug, title, short_desc, long_desc, features, icon_key, order_index)
select c.id, v.slug, v.title, v.short_desc, v.long_desc, v.features, v.icon_key, v.order_index
from c, (values
    ('ai-voice-agent',  'AI Voice Agents',
     '24/7 phone agents that qualify and book — indistinguishable from human.',
     'Voice AI that answers incoming calls, qualifies leads, books viewings, and hands off warm prospects to your agents — trained on your specific real estate stock and tone.',
     array['Natural voice conversations','Real-time qualification','Calendar integration','Seamless human handoff'],
     'Phone', 1),
    ('gpt-assistants',  'GPT-Powered Sales Assistants',
     'Custom LLM assistants trained on your property inventory.',
     'A private GPT-style assistant your team queries for deal info, comparables, objection handling, and listing write-ups — grounded in your real property data.',
     array['Trained on your inventory','Listing copy generation','Instant comparables','Objection playbooks'],
     'Bot', 2),
    ('smart-routing',   'Smart Lead Routing',
     'AI that assigns leads to the agent most likely to close.',
     'Routing engine that scores agents on historical close rates, language, geography, and price band — then auto-assigns each incoming lead for maximum conversion.',
     array['Performance-based routing','Language matching','Price-band specialization','Live re-routing'],
     'Zap', 3),
    ('analytics-ai',    'AI Analytics & Forecasting',
     'Predictive pipeline forecasting and agent-level insights.',
     'Machine-learning models that forecast pipeline closure, spot agent underperformance, and flag leads at risk of going cold — before it happens.',
     array['Pipeline forecasts','Agent scorecards','At-risk lead alerts','Revenue predictions'],
     'BarChart3', 4)
) as v(slug, title, short_desc, long_desc, features, icon_key, order_index)
on conflict (category_id, slug) do update set
    title = excluded.title, short_desc = excluded.short_desc, long_desc = excluded.long_desc,
    features = excluded.features, icon_key = excluded.icon_key, order_index = excluded.order_index;

-- Custom Solutions
with c as (select id from public.service_categories where slug = 'custom')
insert into public.services (category_id, slug, title, short_desc, long_desc, features, icon_key, order_index)
select c.id, v.slug, v.title, v.short_desc, v.long_desc, v.features, v.icon_key, v.order_index
from c, (values
    ('mobile-apps',     'Mobile Applications',
     'iOS & Android apps for agents in the field and clients on the move.',
     'Native and cross-platform mobile apps — for agents managing deals on the road, or for buyers browsing inventory with AR-style property tours.',
     array['Native iOS & Android','Agent field apps','Client-facing apps','Offline-first architecture'],
     'Smartphone', 1),
    ('web-platforms',   'Custom Web Platforms',
     'Portals, deal rooms, and listing sites built to your spec.',
     'Full-stack web builds — investor portals, off-market deal rooms, premium listing sites with live 3D tours, agent extranets, and anything in between.',
     array['Investor portals','Off-market deal rooms','Listing platforms','Agent extranets'],
     'Globe', 2),
    ('internal-tools',  'Internal Tools & Dashboards',
     'Commission calcs, inventory trackers, and ops dashboards.',
     'The boring but revenue-critical internal stuff: commission calculators, contract generators, compliance trackers, inventory managers, ops dashboards.',
     array['Commission calculators','Contract generators','Inventory trackers','Ops dashboards'],
     'Wrench', 3),
    ('integrations',    'Deep System Integrations',
     'Connect everything: CRMs, portals, phones, payments, ads.',
     'We integrate CRMs with portals (Bayut, Property Finder, Dubizzle), phone systems, payment gateways, ad platforms, and accounting — into one coherent data flow.',
     array['Portal sync','Call tracking','Payment webhooks','Ad platform pipes'],
     'Link2', 4)
) as v(slug, title, short_desc, long_desc, features, icon_key, order_index)
on conflict (category_id, slug) do update set
    title = excluded.title, short_desc = excluded.short_desc, long_desc = excluded.long_desc,
    features = excluded.features, icon_key = excluded.icon_key, order_index = excluded.order_index;
