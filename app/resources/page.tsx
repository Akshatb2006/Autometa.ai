"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Mail,
    Phone,
    FileText,
    Layout,
    Workflow,
    BookOpen,
    Lock,
    Download,
    ShieldCheck,
    Sparkles,
    CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/useIsMobile";
import { supabase } from "@/lib/supabase/client";

type Resource = {
    slug: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
    category: string;
    gradient: string;
    pages: string;
};

const resources: Resource[] = [
    {
        slug: "follow-up-templates",
        icon: <FileText size={22} />,
        title: "Email & WhatsApp Follow-Up Templates",
        desc: "24 battle-tested message sequences used by top UAE real estate teams — copy, paste, adapt.",
        category: "Templates",
        gradient: "linear-gradient(135deg, #0066FF 0%, #00CFFF 100%)",
        pages: "24 templates",
    },
    {
        slug: "lead-pipeline-blueprint",
        icon: <Layout size={22} />,
        title: "Lead Management System Blueprint",
        desc: "Step-by-step Notion blueprint for building a centralized real estate lead capture and routing system.",
        category: "Blueprint",
        gradient: "linear-gradient(135deg, #0A0E18 0%, #0066FF 140%)",
        pages: "Notion template",
    },
    {
        slug: "7day-automation",
        icon: <Workflow size={22} />,
        title: "7-Day Automation Workflow",
        desc: "A plug-and-play automation recipe for the first week of every real estate lead — across WhatsApp, email, and SMS.",
        category: "Workflow",
        gradient: "linear-gradient(135deg, #00A3FF 0%, #66F2FF 100%)",
        pages: "12 workflows",
    },
    {
        slug: "crm-playbook",
        icon: <BookOpen size={22} />,
        title: "CRM Setup Playbook",
        desc: "The exact CRM playbook we use to configure HubSpot, Zoho, and custom CRMs for real estate agencies.",
        category: "Playbook",
        gradient: "linear-gradient(135deg, #0066FF 0%, #0A0E18 110%)",
        pages: "40+ pages",
    },
    {
        slug: "agent-dashboard-template",
        icon: <Layout size={22} />,
        title: "Agent Performance Dashboard Template",
        desc: "Track agent KPIs, conversion rates, and real estate pipeline health with this ready-to-use Retool template.",
        category: "Template",
        gradient: "linear-gradient(135deg, #66F2FF 0%, #0066FF 100%)",
        pages: "Retool + Metabase",
    },
    {
        slug: "pm-automation-guide",
        icon: <Workflow size={22} />,
        title: "Property Management Automation Guide",
        desc: "Automate maintenance requests, rent collection, and tenant communications — tested across 200+ UAE units.",
        category: "Guide",
        gradient: "linear-gradient(135deg, #0A0E18 0%, #00A3FF 130%)",
        pages: "30+ pages",
    },
];

export default function ResourcesPage() {
    const [step, setStep] = useState<"gate" | "otp" | "unlocked">("gate");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const isMobile = useIsMobile();

    // If the user already has an active Supabase session, skip the gate.
    useEffect(() => {
        let cancelled = false;
        supabase.auth.getSession().then(({ data }) => {
            if (!cancelled && data.session) setStep("unlocked");
        });
        return () => {
            cancelled = true;
        };
    }, []);

    const sendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        if (!email.includes("@") || !phone.trim()) {
            setError("Please enter a valid email and phone number.");
            return;
        }
        setLoading(true);
        const { error: err } = await supabase.auth.signInWithOtp({
            phone: phone.trim(),
            options: { data: { email: email.trim() } },
        });
        setLoading(false);
        if (err) {
            setError(err.message);
            return;
        }
        setStep("otp");
    };

    const verifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        const { error: err } = await supabase.auth.verifyOtp({
            phone: phone.trim(),
            token: code.trim(),
            type: "sms",
        });
        setLoading(false);
        if (err) {
            setError(err.message);
            return;
        }
        setStep("unlocked");
    };

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: "8rem 0 3rem", position: "relative" }}>
                <div className="mesh-bg" />
                <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 720 }}>
                    <span className="section-eyebrow">Real Estate Playbooks</span>
                    <h1
                        className="font-display"
                        style={{
                            fontSize: "clamp(2rem, 4.6vw, 3.4rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.04em",
                            color: "var(--text)",
                            lineHeight: 1.08,
                            marginBottom: 14,
                        }}
                    >
                        Free <span className="gradient-text">Playbooks & Templates</span>
                    </h1>
                    <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                        The exact systems, automation recipes, and playbooks we use to build real estate AI stacks — unlocked with a 30-second sign-up.
                    </p>
                </div>
            </section>

            {/* Gate / Unlock */}
            <section style={{ padding: "2rem 0 6rem" }}>
                <div className="container-wide">
                    <AnimatePresence mode="wait">
                        {step === "gate" && (
                            <motion.div
                                key="gate"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -18 }}
                                style={{ maxWidth: 520, margin: "0 auto" }}
                            >
                                <div className="glass-card" style={{ padding: isMobile ? "2rem 1.5rem" : "2.75rem 2.5rem", textAlign: "center" }}>
                                    <div
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 18,
                                            background: "var(--tag-bg)",
                                            border: "1px solid var(--tag-border)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--accent)",
                                            margin: "0 auto 18px",
                                        }}
                                    >
                                        <Lock size={26} />
                                    </div>
                                    <h2 className="font-display" style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 8 }}>
                                        Create an account to unlock
                                    </h2>
                                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 22 }}>
                                        We verify with a quick phone OTP so only real estate operators get in. No password, no spam.
                                    </p>

                                    <form onSubmit={sendOtp} style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
                                        <div style={{ position: "relative" }}>
                                            <Mail size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-faint)" }} />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@company.com"
                                                required
                                                style={{
                                                    width: "100%",
                                                    padding: "0.85rem 0.85rem 0.85rem 2.5rem",
                                                    background: "var(--surface-muted)",
                                                    border: "1px solid var(--border)",
                                                    borderRadius: 12,
                                                    color: "var(--text)",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                }}
                                            />
                                        </div>
                                        <div style={{ position: "relative" }}>
                                            <Phone size={16} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-faint)" }} />
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+971 50 000 0000"
                                                required
                                                style={{
                                                    width: "100%",
                                                    padding: "0.85rem 0.85rem 0.85rem 2.5rem",
                                                    background: "var(--surface-muted)",
                                                    border: "1px solid var(--border)",
                                                    borderRadius: 12,
                                                    color: "var(--text)",
                                                    fontSize: "0.95rem",
                                                    outline: "none",
                                                }}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="btn-primary cta-glow-btn"
                                            style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "1rem", position: "relative", opacity: loading ? 0.7 : 1 }}
                                        >
                                            {loading ? "Sending code..." : "Send OTP & unlock"} <ArrowRight size={15} />
                                        </button>
                                    </form>

                                    <div
                                        style={{
                                            marginTop: 18,
                                            padding: "0.75rem 0.9rem",
                                            background: "var(--surface-muted)",
                                            border: "1px solid var(--border-subtle)",
                                            borderRadius: 10,
                                            fontSize: "0.8rem",
                                            color: "var(--text-muted)",
                                            lineHeight: 1.55,
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: 10,
                                            textAlign: "left",
                                        }}
                                    >
                                        <ShieldCheck size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                                        <span>We only use your phone number to verify you&apos;re real. We never sell data and you can delete your account anytime.</span>
                                    </div>

                                    {error && (
                                        <div
                                            style={{
                                                marginTop: 12,
                                                padding: "0.65rem 0.85rem",
                                                background: "rgba(220,38,38,0.06)",
                                                border: "1px solid rgba(220,38,38,0.2)",
                                                color: "#b91c1c",
                                                borderRadius: 10,
                                                fontSize: "0.85rem",
                                                textAlign: "left",
                                            }}
                                        >
                                            {error}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {step === "otp" && (
                            <motion.div
                                key="otp"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -18 }}
                                style={{ maxWidth: 460, margin: "0 auto" }}
                            >
                                <div className="glass-card" style={{ padding: isMobile ? "2rem 1.5rem" : "2.5rem", textAlign: "center" }}>
                                    <div
                                        style={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: 16,
                                            background: "var(--tag-bg)",
                                            border: "1px solid var(--tag-border)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--accent)",
                                            margin: "0 auto 16px",
                                        }}
                                    >
                                        <Sparkles size={22} />
                                    </div>
                                    <h2 className="font-display" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 6 }}>
                                        Enter the 6-digit code
                                    </h2>
                                    <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.55, marginBottom: 20 }}>
                                        Sent to <strong style={{ color: "var(--text)" }}>{phone}</strong>. Should arrive in a few seconds.
                                    </p>
                                    <form onSubmit={verifyOtp} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            value={code}
                                            onChange={(e) => setCode(e.target.value)}
                                            placeholder="123456"
                                            maxLength={6}
                                            required
                                            style={{
                                                width: "100%",
                                                padding: "1rem",
                                                textAlign: "center",
                                                fontSize: "1.15rem",
                                                letterSpacing: "0.35em",
                                                fontFamily: "'JetBrains Mono', monospace",
                                                background: "var(--surface-muted)",
                                                border: "1px solid var(--border)",
                                                borderRadius: 12,
                                                color: "var(--text)",
                                                outline: "none",
                                            }}
                                        />
                                        <button
                                            type="submit"
                                            disabled={loading || code.length < 4}
                                            className="btn-primary cta-glow-btn"
                                            style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "1rem", position: "relative", opacity: loading || code.length < 4 ? 0.7 : 1 }}
                                        >
                                            {loading ? "Verifying..." : "Verify & unlock"} <ArrowRight size={15} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setStep("gate");
                                                setCode("");
                                                setError(null);
                                            }}
                                            style={{
                                                fontSize: "0.85rem",
                                                color: "var(--text-muted)",
                                                background: "transparent",
                                                border: "none",
                                                cursor: "pointer",
                                                padding: "0.5rem",
                                            }}
                                        >
                                            Use a different number
                                        </button>
                                    </form>
                                    {error && (
                                        <div
                                            style={{
                                                marginTop: 12,
                                                padding: "0.65rem 0.85rem",
                                                background: "rgba(220,38,38,0.06)",
                                                border: "1px solid rgba(220,38,38,0.2)",
                                                color: "#b91c1c",
                                                borderRadius: 10,
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            {error}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {step === "unlocked" && (
                            <motion.div
                                key="unlocked"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 8,
                                        marginBottom: 28,
                                        padding: "0.75rem 1rem",
                                        background: "var(--tag-bg)",
                                        border: "1px solid var(--tag-border)",
                                        borderRadius: 12,
                                        maxWidth: 420,
                                        margin: "0 auto 28px",
                                    }}
                                >
                                    <CheckCircle2 size={18} style={{ color: "var(--accent)" }} />
                                    <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--accent)" }}>You&apos;re in — every playbook is unlocked.</span>
                                </div>

                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                                        gap: 18,
                                    }}
                                >
                                    {resources.map((r, i) => (
                                        <motion.div
                                            key={r.slug}
                                            className="glass-card"
                                            style={{
                                                padding: 0,
                                                overflow: "hidden",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.06 }}
                                        >
                                            <div
                                                style={{
                                                    height: 140,
                                                    background: r.gradient,
                                                    position: "relative",
                                                    display: "flex",
                                                    alignItems: "flex-end",
                                                    padding: "1.1rem",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        inset: 0,
                                                        backgroundImage: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2) 0%, transparent 60%)",
                                                    }}
                                                />
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        top: 14,
                                                        left: 14,
                                                        fontSize: "0.65rem",
                                                        fontWeight: 700,
                                                        color: "#fff",
                                                        background: "rgba(0,0,0,0.35)",
                                                        backdropFilter: "blur(8px)",
                                                        padding: "4px 9px",
                                                        borderRadius: 6,
                                                        letterSpacing: "0.08em",
                                                        textTransform: "uppercase",
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                    }}
                                                >
                                                    {r.category}
                                                </div>
                                                <div
                                                    style={{
                                                        width: 46,
                                                        height: 46,
                                                        borderRadius: 12,
                                                        background: "rgba(0,0,0,0.35)",
                                                        backdropFilter: "blur(8px)",
                                                        border: "1px solid rgba(255,255,255,0.15)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        color: "#fff",
                                                        position: "relative",
                                                    }}
                                                >
                                                    {r.icon}
                                                </div>
                                            </div>
                                            <div style={{ padding: "1.25rem 1.3rem 1.4rem", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                                                <h3
                                                    className="font-display"
                                                    style={{ fontSize: "1.08rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.015em", lineHeight: 1.25 }}
                                                >
                                                    {r.title}
                                                </h3>
                                                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>
                                                    {r.desc}
                                                </p>
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--border)" }}>
                                                    <span
                                                        style={{
                                                            fontSize: "0.72rem",
                                                            color: "var(--text-faint)",
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontWeight: 600,
                                                        }}
                                                    >
                                                        {r.pages}
                                                    </span>
                                                    <button
                                                        className="btn-secondary"
                                                        style={{ fontSize: "0.78rem", padding: "0.5rem 0.85rem" }}
                                                    >
                                                        <Download size={13} /> Download
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            <Footer />
        </main>
    );
}
