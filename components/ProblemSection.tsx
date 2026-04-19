"use client";

import { motion } from "framer-motion";
import {
    Clock,
    Database,
    MessageSquareOff,
    EyeOff,
    Cog,
    TrendingDown,
} from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Pain = {
    num: string;
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    desc: string;
    stat: string;
    statLabel: string;
    accent: string;
};

const painPoints: Pain[] = [
    {
        num: "01",
        icon: <Clock size={28} />,
        title: "Slow response, lost deals",
        subtitle: "The 5-minute rule is broken",
        desc: "Real estate leads that aren't contacted in 5 minutes are 21× less likely to convert. Most agencies respond in hours — competitors close those deals.",
        stat: "72%",
        statLabel: "of leads go unresponded within 1 hour",
        accent: "#0066FF",
    },
    {
        num: "02",
        icon: <Database size={28} />,
        title: "Leads scattered everywhere",
        subtitle: "WhatsApp, calls, spreadsheets, DMs",
        desc: "Without a centralized pipeline, leads fall through cracks. Real estate agents waste hours reconciling contacts. Hot prospects go cold.",
        stat: "$12K+",
        statLabel: "deal value lost every month per agent",
        accent: "#00A3FF",
    },
    {
        num: "03",
        icon: <MessageSquareOff size={28} />,
        title: "Missed follow-ups",
        subtitle: "Manual work can't scale",
        desc: "Your team forgets to follow up. Leads that needed 7 touches only got 2. Revenue leaks quietly — you only notice at quarter-end.",
        stat: "48%",
        statLabel: "of salespeople never follow up after first contact",
        accent: "#0066FF",
    },
    {
        num: "04",
        icon: <EyeOff size={28} />,
        title: "Zero visibility on agents",
        subtitle: "You can't improve what you can't see",
        desc: "Who's calling? Who's closing? Without tracking, top performers go unrecognized and bottom performers drag the pipeline down.",
        stat: "3 in 5",
        statLabel: "agency owners can't track agent performance",
        accent: "#00A3FF",
    },
    {
        num: "05",
        icon: <Cog size={28} />,
        title: "Manual work eats the day",
        subtitle: "Your team is a human API",
        desc: "Real estate agents spend 60% of their day on admin: copying data, scheduling, same emails, same docs. That's 60% of payroll burned on bot-worthy work.",
        stat: "10+ hrs",
        statLabel: "per week wasted on repetitive tasks",
        accent: "#0066FF",
    },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];
const vp = { once: true, amount: 0.2 as const };

function PainCard({ p, index, isMobile }: { p: Pain; index: number; isMobile: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.6, delay: 0.05, ease }}
            style={{
                width: "100%",
                maxWidth: isMobile ? "100%" : 780,
                margin: "0 auto",
            }}
        >
            <div
                style={{
                    background: "var(--surface-solid)",
                    border: "1px solid var(--border)",
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 1px 2px rgba(10,14,24,0.02), 0 8px 24px rgba(10,14,24,0.04)",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
                        minHeight: isMobile ? "auto" : 280,
                    }}
                >
                    {/* TEXT */}
                    <div style={{ padding: isMobile ? "1.75rem" : "2rem 2.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 18 }}>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                                <span
                                    style={{
                                        fontSize: "0.72rem",
                                        fontWeight: 700,
                                        color: p.accent,
                                        letterSpacing: "0.08em",
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    PROBLEM / {p.num}
                                </span>
                            </div>
                            <h3
                                className="font-display"
                                style={{
                                    fontSize: isMobile ? "1.4rem" : "1.75rem",
                                    fontWeight: 700,
                                    color: "var(--text)",
                                    letterSpacing: "-0.025em",
                                    lineHeight: 1.15,
                                    marginBottom: 8,
                                }}
                            >
                                {p.title}
                            </h3>
                            <p style={{ fontSize: "0.95rem", color: p.accent, fontWeight: 600, marginBottom: 12 }}>
                                {p.subtitle}
                            </p>
                            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                                {p.desc}
                            </p>
                        </div>

                        <div
                            style={{
                                padding: "0.85rem 1rem",
                                background: "var(--bg-alt)",
                                borderRadius: 12,
                                border: `1px solid ${p.accent}33`,
                                display: "flex",
                                alignItems: "center",
                                gap: 14,
                            }}
                        >
                            <TrendingDown size={20} style={{ color: p.accent, flexShrink: 0 }} />
                            <div>
                                <div
                                    className="font-display"
                                    style={{
                                        fontSize: "1.65rem",
                                        fontWeight: 800,
                                        color: p.accent,
                                        lineHeight: 1,
                                        letterSpacing: "-0.03em",
                                        marginBottom: 2,
                                    }}
                                >
                                    {p.stat}
                                </div>
                                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.4 }}>
                                    {p.statLabel}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* IMAGE / VISUAL */}
                    {!isMobile && (
                        <div
                            style={{
                                position: "relative",
                                background: `radial-gradient(circle at 30% 30%, ${p.accent}18 0%, transparent 65%), var(--bg-alt)`,
                                borderLeft: "1px solid var(--border-subtle)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage: `radial-gradient(circle, ${p.accent}10 1px, transparent 1px)`,
                                    backgroundSize: "22px 22px",
                                    opacity: 0.7,
                                }}
                            />
                            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                                <div
                                    style={{
                                        width: 110,
                                        height: 110,
                                        borderRadius: "50%",
                                        background: `${p.accent}0f`,
                                        border: `1px dashed ${p.accent}66`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 12px",
                                        color: p.accent,
                                    }}
                                >
                                    <div style={{ transform: "scale(2.2)" }}>{p.icon}</div>
                                </div>
                                <div
                                    style={{
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        color: "var(--text-faint)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    Real Estate Pain · {p.num}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProblemSection() {
    const isMobile = useIsMobile();

    return (
        <section id="problem" style={{ position: "relative" }}>
            <div className="container-wide" style={{ padding: isMobile ? "4.5rem 1rem 2rem" : "6rem 0 3rem" }}>
                <div style={{ maxWidth: 780 }}>
                    <motion.span
                        className="section-eyebrow"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={{ duration: 0.5, ease }}
                    >
                        The Problem
                    </motion.span>
                    <motion.h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(2.2rem, 4.4vw, 3.5rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.035em",
                            color: "var(--text)",
                            lineHeight: 1.08,
                            marginBottom: 14,
                        }}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={{ duration: 0.55, delay: 0.08, ease }}
                    >
                        Problems That Cost Real Estate Companies a{" "}
                        <span className="gradient-text">Huge Price</span>...
                    </motion.h2>
                    <motion.p
                        style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: 620 }}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={vp}
                        transition={{ duration: 0.5, delay: 0.15, ease }}
                    >
                        Broken systems aren&apos;t just frustrating — they quietly drain revenue every day. Scroll to reveal each one.
                    </motion.p>
                </div>

                {/* Cards – simple vertical stack with scroll-reveal */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: isMobile ? 20 : 28,
                        marginTop: isMobile ? 32 : 48,
                    }}
                >
                    {painPoints.map((p, i) => (
                        <PainCard key={p.num} p={p} index={i} isMobile={isMobile} />
                    ))}
                </div>
            </div>
        </section>
    );
}
