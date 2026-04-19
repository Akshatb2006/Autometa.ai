"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import {
    Clock,
    Video,
    ShieldCheck,
    CheckCircle2,
    CalendarDays,
    ArrowRight,
    Zap,
    Users,
} from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const vp = { once: true, amount: 0.15 as const };

const trustPoints = [
    {
        icon: <Video size={18} />,
        title: "30-min video strategy call",
        desc: "Face-to-face with a senior engineer — not a sales rep.",
    },
    {
        icon: <Clock size={18} />,
        title: "Same-day response",
        desc: "We audit your real estate systems the day we speak.",
    },
    {
        icon: <ShieldCheck size={18} />,
        title: "No obligation",
        desc: "Walk away with a plan. Engage only if it's a fit.",
    },
];

const deliverables = [
    "Full audit of your current lead pipeline & CRM",
    "Bottlenecks costing you deals — identified",
    "A tailored AI + automation roadmap",
    "Quick-win scripts you can run in week one",
];

const stats = [
    { value: "200+", label: "Audits completed" },
    { value: "14 days", label: "Avg. deployment" },
    { value: "3.2×", label: "Lead conversion lift" },
];

export default function BookAuditSection() {
    const isMobile = useIsMobile();

    useEffect(() => {
        (async () => {
            const cal = await getCalApi({ namespace: "discovery" });
            cal("ui", {
                cssVarsPerTheme: {
                    light: {
                        "cal-brand": "#0066FF",
                        "cal-brand-emphasis": "#0052CC",
                        "cal-brand-text": "#FFFFFF",
                        "cal-text": "#0A0E18",
                        "cal-text-emphasis": "#0A0E18",
                        "cal-text-muted": "#55606E",
                        "cal-text-subtle": "#8A93A1",
                        "cal-bg": "#FFFFFF",
                        "cal-bg-emphasis": "#F7F8FA",
                        "cal-bg-muted": "#F2F4F7",
                        "cal-border": "rgba(10,14,24,0.08)",
                        "cal-border-subtle": "rgba(10,14,24,0.04)",
                    },
                    dark: {
                        "cal-brand": "#0066FF",
                        "cal-brand-emphasis": "#00A3FF",
                    },
                },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section
            id="book-audit"
            style={{
                padding: isMobile ? "4rem 0" : "6rem 0",
                position: "relative",
                background: "var(--bg-alt)",
                borderTop: "1px solid var(--border-subtle)",
                borderBottom: "1px solid var(--border-subtle)",
            }}
        >
            <div className="container-wide">
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "0.95fr 1.05fr",
                        gap: isMobile ? "2.5rem" : "3.5rem",
                        alignItems: "start",
                    }}
                >
                    {/* LEFT — Copy */}
                    <div>
                        <motion.span
                            className="section-eyebrow"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={{ duration: 0.6, ease }}
                        >
                            Book Your Audit
                        </motion.span>

                        <motion.h2
                            className="font-display"
                            style={{
                                fontSize: "clamp(2.1rem, 4.2vw, 3.2rem)",
                                fontWeight: 700,
                                letterSpacing: "-0.035em",
                                color: "var(--text)",
                                lineHeight: 1.08,
                                marginBottom: 16,
                            }}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={{ duration: 0.7, delay: 0.1, ease }}
                        >
                            Get a <span className="gradient-text">Free Audit</span> of Your Real Estate Systems
                        </motion.h2>

                        <motion.p
                            style={{
                                fontSize: "1.1rem",
                                color: "var(--text-muted)",
                                lineHeight: 1.65,
                                marginBottom: 28,
                                maxWidth: 520,
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={{ duration: 0.6, delay: 0.2, ease }}
                        >
                            Pick a time that works for you. We&apos;ll look at your pipeline,
                            CRM, and follow-ups — and show you exactly where automation pays for
                            itself in the first 30 days.
                        </motion.p>

                        {/* Trust points */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
                            {trustPoints.map((tp, i) => (
                                <motion.div
                                    key={tp.title}
                                    style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                                    initial={{ opacity: 0, x: -12 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={vp}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease }}
                                >
                                    <div
                                        style={{
                                            flexShrink: 0,
                                            width: 40,
                                            height: 40,
                                            borderRadius: 10,
                                            background: "var(--tag-bg)",
                                            border: "1px solid var(--tag-border)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--accent)",
                                        }}
                                    >
                                        {tp.icon}
                                    </div>
                                    <div>
                                        <div
                                            style={{
                                                fontSize: "1rem",
                                                fontWeight: 700,
                                                color: "var(--text)",
                                                letterSpacing: "-0.01em",
                                                marginBottom: 2,
                                            }}
                                        >
                                            {tp.title}
                                        </div>
                                        <div style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                                            {tp.desc}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Deliverables */}
                        <motion.div
                            style={{
                                padding: "1.25rem 1.4rem",
                                background: "var(--surface-solid)",
                                border: "1px solid var(--border)",
                                borderRadius: 14,
                            }}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp}
                            transition={{ duration: 0.6, delay: 0.55, ease }}
                        >
                            <div
                                style={{
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    color: "var(--text-faint)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    marginBottom: 12,
                                }}
                            >
                                What You&apos;ll Leave With
                            </div>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                                {deliverables.map((item) => (
                                    <li
                                        key={item}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: 10,
                                            fontSize: "0.95rem",
                                            color: "var(--text-secondary)",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        <CheckCircle2
                                            size={17}
                                            style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* RIGHT — CTA Card with Cal.com popup trigger */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={{ duration: 0.7, delay: 0.25, ease }}
                        style={{
                            position: "relative",
                            background: "var(--surface-solid)",
                            border: "1px solid var(--border)",
                            borderRadius: 18,
                            overflow: "hidden",
                            boxShadow: "0 8px 32px rgba(10,14,24,0.06), 0 1px 2px rgba(10,14,24,0.02)",
                        }}
                    >
                        {/* Top gradient banner */}
                        <div
                            style={{
                                background: "linear-gradient(135deg, #0A0E18 0%, #0066FF 140%)",
                                padding: isMobile ? "2rem 1.5rem" : "2.5rem 2rem",
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage:
                                        "radial-gradient(circle at 30% 30%, rgba(0,163,255,0.28) 0%, transparent 55%), radial-gradient(circle at 75% 70%, rgba(0,102,255,0.25) 0%, transparent 50%)",
                                }}
                            />
                            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                                <div
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 14,
                                        background: "rgba(255,255,255,0.15)",
                                        backdropFilter: "blur(12px)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 16px",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                    }}
                                >
                                    <CalendarDays size={26} color="#fff" />
                                </div>
                                <h3
                                    className="font-display"
                                    style={{
                                        fontSize: "1.4rem",
                                        fontWeight: 700,
                                        color: "#fff",
                                        letterSpacing: "-0.02em",
                                        marginBottom: 6,
                                    }}
                                >
                                    Schedule Your Discovery Call
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.92rem",
                                        color: "rgba(255,255,255,0.75)",
                                        lineHeight: 1.5,
                                        maxWidth: 340,
                                        margin: "0 auto",
                                    }}
                                >
                                    Choose a date &amp; time — the full booking calendar opens instantly.
                                </p>
                            </div>
                        </div>

                        {/* Body */}
                        <div style={{ padding: isMobile ? "1.5rem" : "2rem" }}>
                            {/* Stats row */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, 1fr)",
                                    gap: 12,
                                    marginBottom: 24,
                                }}
                            >
                                {stats.map((s) => (
                                    <div
                                        key={s.label}
                                        style={{
                                            textAlign: "center",
                                            padding: "12px 8px",
                                            background: "var(--tag-bg)",
                                            border: "1px solid var(--tag-border)",
                                            borderRadius: 10,
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "1.2rem",
                                                fontWeight: 800,
                                                color: "var(--accent)",
                                                letterSpacing: "-0.02em",
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            {s.value}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "0.7rem",
                                                color: "var(--text-faint)",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                                letterSpacing: "0.04em",
                                                marginTop: 2,
                                            }}
                                        >
                                            {s.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Feature bullets */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                                {[
                                    { icon: <Zap size={15} />, text: "Instant confirmation — no back-and-forth" },
                                    { icon: <Users size={15} />, text: "Meet with a senior systems engineer" },
                                    { icon: <Clock size={15} />, text: "30 minutes, zero obligation" },
                                ].map((f) => (
                                    <div
                                        key={f.text}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 10,
                                            fontSize: "0.9rem",
                                            color: "var(--text-muted)",
                                        }}
                                    >
                                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>{f.icon}</span>
                                        {f.text}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button — triggers Cal.com popup */}
                            <button
                                data-cal-namespace="discovery"
                                data-cal-link="autometaai/automata-ai-discovery-call"
                                data-cal-config='{"layout":"month_view"}'
                                className="btn-primary"
                                style={{
                                    width: "100%",
                                    fontSize: "1.05rem",
                                    padding: "1rem 2rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 8,
                                    cursor: "pointer",
                                }}
                            >
                                <CalendarDays size={18} />
                                Pick a Time
                                <ArrowRight size={16} />
                            </button>

                            <p
                                style={{
                                    textAlign: "center",
                                    fontSize: "0.78rem",
                                    color: "var(--text-faint)",
                                    marginTop: 12,
                                    lineHeight: 1.5,
                                }}
                            >
                                Free · No credit card · Cancel anytime
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
