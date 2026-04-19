"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import type { Session } from "@supabase/supabase-js";
import { LogOut, Plus, Edit3, Loader2 } from "lucide-react";

type Category = {
    id: string;
    slug: string;
    label: string;
    eyebrow: string;
};

type Service = {
    id: string;
    category_id: string;
    slug: string;
    title: string;
    short_desc: string;
    icon_key: string;
    image_url: string | null;
    video_url: string | null;
    order_index: number;
};

export default function AdminServicesPage() {
    const router = useRouter();
    const [session, setSession] = useState<Session | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    const loadData = useCallback(async () => {
        const [{ data: cats }, { data: svs }] = await Promise.all([
            supabase.from("service_categories").select("id,slug,label,eyebrow").order("order_index"),
            supabase.from("services").select("id,category_id,slug,title,short_desc,icon_key,image_url,video_url,order_index").order("order_index"),
        ]);
        setCategories(cats ?? []);
        setServices(svs ?? []);
    }, []);

    useEffect(() => {
        supabase.auth.getSession().then(async ({ data }) => {
            const s = data.session;
            setSession(s);
            if (!s) {
                router.replace("/admin/login");
                return;
            }
            // Check admin status via is_admin() RPC side-effect: attempt a privileged call
            const { data: adminRow } = await supabase
                .from("admin_users")
                .select("id")
                .eq("phone", s.user.phone ?? "")
                .maybeSingle();
            setIsAdmin(Boolean(adminRow));
            await loadData();
            setLoading(false);
        });
    }, [loadData, router]);

    const signOut = async () => {
        await supabase.auth.signOut();
        router.replace("/admin/login");
    };

    if (loading) {
        return (
            <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)" }}>
                <Loader2 size={28} style={{ color: "var(--accent)" }} className="animate-spin" />
            </main>
        );
    }

    if (!session) return null;

    if (isAdmin === false) {
        return (
            <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", background: "var(--bg)" }}>
                <div style={{ maxWidth: 480, textAlign: "center" }}>
                    <h1 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 12, color: "var(--text)" }}>
                        Not authorized
                    </h1>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: 20, lineHeight: 1.6 }}>
                        Your phone isn&apos;t in the admin whitelist. Ask a super-admin to add{" "}
                        <code style={{ fontFamily: "'JetBrains Mono', monospace" }}>{session.user.phone}</code> to the{" "}
                        <code style={{ fontFamily: "'JetBrains Mono', monospace" }}>admin_users</code> table.
                    </p>
                    <button onClick={signOut} className="btn-secondary">Sign out</button>
                </div>
            </main>
        );
    }

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)" }}>
            {/* Top bar */}
            <header
                style={{
                    borderBottom: "1px solid var(--border)",
                    padding: "1rem 2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "var(--surface-solid)",
                }}
            >
                <div>
                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>
                        Admin · Services CMS
                    </div>
                    <div className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>
                        Autometa AI
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{session.user.phone}</span>
                    <button
                        onClick={signOut}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "0.55rem 0.9rem",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            background: "transparent",
                            border: "1px solid var(--border)",
                            borderRadius: 10,
                            color: "var(--text-muted)",
                            cursor: "pointer",
                        }}
                    >
                        <LogOut size={14} /> Sign out
                    </button>
                </div>
            </header>

            <section style={{ padding: "2.5rem 2rem", maxWidth: 1180, margin: "0 auto" }}>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28, gap: 16 }}>
                    <div>
                        <h1 className="font-display" style={{ fontSize: "1.8rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.03em", marginBottom: 6 }}>
                            Manage Services
                        </h1>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                            Edit the content rendered on the public Services pages. Create and edit flows are stubbed — ask us to enable when ready.
                        </p>
                    </div>
                    <button
                        disabled
                        title="Create flow coming in next pass"
                        className="btn-primary"
                        style={{ opacity: 0.55, cursor: "not-allowed" }}
                    >
                        <Plus size={15} /> New Service
                    </button>
                </div>

                {categories.map((cat) => {
                    const items = services.filter((s) => s.category_id === cat.id);
                    return (
                        <div key={cat.id} style={{ marginBottom: 28 }}>
                            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'JetBrains Mono', monospace" }}>
                                    {cat.eyebrow}
                                </div>
                                <h2 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>
                                    {cat.label}
                                </h2>
                                <Link
                                    href={`/services/${cat.slug}`}
                                    target="_blank"
                                    style={{ marginLeft: "auto", fontSize: "0.82rem", color: "var(--accent)", fontWeight: 600 }}
                                >
                                    View public page ↗
                                </Link>
                            </div>
                            <div
                                style={{
                                    border: "1px solid var(--border)",
                                    borderRadius: 14,
                                    overflow: "hidden",
                                    background: "var(--surface-solid)",
                                }}
                            >
                                {items.length === 0 ? (
                                    <div style={{ padding: "1.25rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
                                        No sub-services yet.
                                    </div>
                                ) : (
                                    items.map((s, i) => (
                                        <div
                                            key={s.id}
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "60px 1fr auto",
                                                gap: 16,
                                                alignItems: "center",
                                                padding: "0.9rem 1.1rem",
                                                borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)",
                                            }}
                                        >
                                            <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-faint)", fontFamily: "'JetBrains Mono', monospace" }}>
                                                #{String(s.order_index).padStart(2, "0")}
                                            </div>
                                            <div>
                                                <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>
                                                    {s.title}
                                                </div>
                                                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                                                    {s.short_desc}
                                                </div>
                                            </div>
                                            <button
                                                disabled
                                                title="Edit flow coming in next pass"
                                                style={{
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                    padding: "0.5rem 0.8rem",
                                                    background: "transparent",
                                                    border: "1px solid var(--border)",
                                                    borderRadius: 8,
                                                    color: "var(--text-muted)",
                                                    fontSize: "0.82rem",
                                                    cursor: "not-allowed",
                                                    opacity: 0.55,
                                                }}
                                            >
                                                <Edit3 size={13} /> Edit
                                            </button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}
