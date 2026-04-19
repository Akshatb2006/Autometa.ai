"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Boxes, Sparkles, Cog, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { useIsMobile } from "@/hooks/useIsMobile";
import { serviceCategories } from "@/lib/services-data";

const iconMap: Record<string, React.ReactNode> = {
    core: <Boxes size={34} />,
    ai: <Sparkles size={34} />,
    custom: <Cog size={34} />,
};

const howItWorks = [
    { num: "01", title: "Discovery", desc: "Free 30-min call to understand your real estate operations and goals." },
    { num: "02", title: "Audit", desc: "We map your workflows and identify exactly where revenue leaks." },
    { num: "03", title: "Design", desc: "Tailored blueprint — CRM, automations, AI integrations, custom builds." },
    { num: "04", title: "Build & Deploy", desc: "End-to-end build, integration, launch, and team training." },
    { num: "05", title: "Optimize", desc: "Ongoing monitoring, optimization, and new feature rollouts." },
];

export default function ServicesPage() {
    const isMobile = useIsMobile();
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: isMobile ? "5rem 0 3rem" : "7rem 0 4rem", position: "relative" }}>
                <div className="mesh-bg" />
                <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 780, margin: "0 auto" }}>
                    <span className="section-eyebrow" style={{ justifyContent: "center" }}>Our Services</span>
                    <h1
                        className="font-display"
                        style={{
                            fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.04em",
                            color: "var(--text)",
                            lineHeight: 1.08,
                            marginBottom: 18,
                        }}
                    >
                        We Mainly Offer <span className="gradient-text">3 Types</span> of Services
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 28 }}>
                        Core Services, AI Integrations, and Custom Solutions — each purpose-built for real estate agencies.
                    </p>
                    <Link href="/book-audit" className="btn-primary">
                        Book Audit <ArrowRight size={15} />
                    </Link>
                </div>
            </section>

            {/* 3 Category Boxes — rich hover */}
            <section style={{ padding: isMobile ? "2rem 0 5rem" : "3rem 0 7rem" }}>
                <div className="container-wide">
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 20 }}>
                        {serviceCategories.map((cat) => {
                            const isHover = hovered === cat.slug;
                            return (
                                <Link
                                    key={cat.slug}
                                    href={`/services/${cat.slug}`}
                                    onMouseEnter={() => setHovered(cat.slug)}
                                    onMouseLeave={() => setHovered(null)}
                                    style={{
                                        position: "relative",
                                        display: "block",
                                        textDecoration: "none",
                                        color: "inherit",
                                        background: "var(--surface-solid)",
                                        border: `1px solid ${isHover ? "var(--accent)" : "var(--border)"}`,
                                        borderRadius: 20,
                                        padding: isMobile ? "2rem 1.75rem" : "2.25rem 2rem",
                                        overflow: "hidden",
                                        transition: "border-color 0.35s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s",
                                        transform: isHover ? "translateY(-6px)" : "translateY(0)",
                                        boxShadow: isHover
                                            ? "0 24px 60px rgba(0,102,255,0.18), 0 2px 6px rgba(10,14,24,0.06)"
                                            : "0 1px 2px rgba(10,14,24,0.02), 0 8px 28px rgba(10,14,24,0.04)",
                                        minHeight: isMobile ? "auto" : 360,
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            opacity: isHover ? 1 : 0.55,
                                        }}
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            background: `radial-gradient(circle at 30% 20%, ${
                                                cat.slug === "core"
                                                    ? "rgba(0,102,255,0.10)"
                                                    : cat.slug === "ai"
                                                        ? "rgba(0,163,255,0.10)"
                                                        : "rgba(102,242,255,0.08)"
                                            } 0%, transparent 55%)`,
                                            pointerEvents: "none",
                                        }}
                                    />
                                    <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 16, height: "100%" }}>
                                        <div
                                            style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius: 16,
                                                background: "var(--tag-bg)",
                                                border: "1px solid var(--tag-border)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--accent)",
                                            }}
                                        >
                                            {iconMap[cat.slug]}
                                        </div>
                                        <div>
                                            <div
                                                style={{
                                                    fontSize: "0.7rem",
                                                    fontWeight: 700,
                                                    color: "var(--accent)",
                                                    letterSpacing: "0.12em",
                                                    textTransform: "uppercase",
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    marginBottom: 8,
                                                }}
                                            >
                                                {cat.eyebrow}
                                            </div>
                                            <h2
                                                className="font-display"
                                                style={{
                                                    fontSize: "1.5rem",
                                                    fontWeight: 700,
                                                    color: "var(--text)",
                                                    letterSpacing: "-0.025em",
                                                    lineHeight: 1.15,
                                                    marginBottom: 8,
                                                }}
                                            >
                                                {cat.label}
                                            </h2>
                                            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                                                {cat.heroTagline}
                                            </p>
                                        </div>

                                        {/* Reveal on hover: full sub-service list */}
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: isHover ? "auto" : 0,
                                                opacity: isHover ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <div
                                                style={{
                                                    padding: "0.85rem 1rem",
                                                    background: "var(--surface-muted)",
                                                    borderRadius: 12,
                                                    border: "1px solid var(--border-subtle)",
                                                    marginTop: 4,
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        fontSize: "0.68rem",
                                                        fontWeight: 700,
                                                        color: "var(--text-faint)",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        marginBottom: 8,
                                                    }}
                                                >
                                                    Included in {cat.label}
                                                </div>
                                                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                                                    {cat.subServices.map((s) => (
                                                        <li
                                                            key={s.slug}
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                gap: 8,
                                                                fontSize: "0.85rem",
                                                                color: "var(--text-secondary)",
                                                                lineHeight: 1.4,
                                                            }}
                                                        >
                                                            <CheckCircle2 size={14} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 3 }} />
                                                            <span>{s.title}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>

                                        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10 }}>
                                            <span
                                                style={{
                                                    fontSize: "0.88rem",
                                                    fontWeight: 700,
                                                    color: "var(--accent)",
                                                    display: "inline-flex",
                                                    alignItems: "center",
                                                    gap: 6,
                                                }}
                                            >
                                                Explore {cat.label}
                                                <ArrowRight size={14} style={{ transform: isHover ? "translateX(4px)" : "none", transition: "transform 0.3s" }} />
                                            </span>
                                            <span style={{ fontSize: "0.72rem", color: "var(--text-faint)", fontFamily: "'JetBrains Mono', monospace" }}>
                                                {cat.subServices.length} services
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section style={{ padding: isMobile ? "3rem 0" : "4rem 0", background: "var(--bg-alt)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="container-wide">
                    <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
                        <span className="section-eyebrow" style={{ justifyContent: "center" }}>How It Works</span>
                        <h2
                            className="font-display"
                            style={{
                                fontSize: "clamp(2rem, 3.8vw, 2.8rem)",
                                fontWeight: 700,
                                letterSpacing: "-0.03em",
                                color: "var(--text)",
                                lineHeight: 1.1,
                            }}
                        >
                            Step by <span className="gradient-text">Step</span>
                        </h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 14 : 8, alignItems: "stretch", justifyContent: "center" }}>
                        {howItWorks.map((step, i) => (
                            <div key={step.num} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                                <div
                                    style={{
                                        flex: 1,
                                        padding: "1.4rem 1.25rem",
                                        background: "var(--surface-solid)",
                                        border: "1px solid var(--border)",
                                        borderRadius: 14,
                                        textAlign: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            color: "var(--accent)",
                                            fontFamily: "'JetBrains Mono', monospace",
                                            letterSpacing: "0.08em",
                                            marginBottom: 8,
                                        }}
                                    >
                                        STEP {step.num}
                                    </div>
                                    <h4 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
                                        {step.title}
                                    </h4>
                                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
                                        {step.desc}
                                    </p>
                                </div>
                                {i < howItWorks.length - 1 && !isMobile && (
                                    <ArrowRight size={18} style={{ color: "var(--accent)", margin: "0 6px", flexShrink: 0 }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section style={{ padding: "5rem 0 6rem" }}>
                <div className="container-wide" style={{ textAlign: "center" }}>
                    <div className="glass-card" style={{ padding: isMobile ? "2.5rem 1.5rem" : "3.5rem 3rem", maxWidth: 640, margin: "0 auto" }}>
                        <h2 className="font-display" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)", fontWeight: 700, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.03em" }}>
                            Ready to <span className="gradient-text">Scale?</span>
                        </h2>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 24 }}>
                            Book a free audit and see exactly how we can streamline your real estate operations.
                        </p>
                        <Link href="/book-audit" className="btn-primary">
                            Book Audit <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingContact />
        </main>
    );
}
