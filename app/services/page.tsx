"use client";

import Link from "next/link";
import { ArrowRight, Boxes, Sparkles, Cog } from "lucide-react";
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

            {/* 3 Category Boxes */}
            <section style={{ padding: isMobile ? "2rem 0 5rem" : "3rem 0 7rem" }}>
                <div className="container-wide">
                    <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 20 : 28 }}>
                        {serviceCategories.map((cat) => {
                            const isCore = cat.slug === "core";
                            return (
                                <Link
                                    key={cat.slug}
                                    href={`/services/${cat.slug}`}
                                    className="glass-card"
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "0.85fr 1.15fr",
                                        gap: 0,
                                        padding: 0,
                                        overflow: "hidden",
                                        textDecoration: "none",
                                        color: "inherit",
                                        minHeight: isCore ? (isMobile ? "auto" : 280) : isMobile ? "auto" : 220,
                                    }}
                                >
                                    {/* Visual side */}
                                    <div
                                        style={{
                                            position: "relative",
                                            background:
                                                cat.slug === "core"
                                                    ? "linear-gradient(135deg, rgba(0,102,255,0.10) 0%, rgba(0,163,255,0.06) 100%)"
                                                    : cat.slug === "ai"
                                                        ? "linear-gradient(135deg, rgba(0,163,255,0.08) 0%, rgba(0,102,255,0.04) 100%)"
                                                        : "linear-gradient(135deg, rgba(10,14,24,0.04) 0%, rgba(0,102,255,0.06) 100%)",
                                            borderRight: isMobile ? "none" : "1px solid var(--border-subtle)",
                                            borderBottom: isMobile ? "1px solid var(--border-subtle)" : "none",
                                            padding: isMobile ? "2rem" : "2.5rem",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            gap: 20,
                                            minHeight: isMobile ? 160 : "auto",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: isCore ? 72 : 58,
                                                height: isCore ? 72 : 58,
                                                borderRadius: isCore ? 18 : 14,
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
                                        <div
                                            style={{
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                color: "var(--accent)",
                                                letterSpacing: "0.12em",
                                                textTransform: "uppercase",
                                                fontFamily: "'JetBrains Mono', monospace",
                                            }}
                                        >
                                            {cat.eyebrow}
                                        </div>
                                    </div>

                                    {/* Content side */}
                                    <div
                                        style={{
                                            padding: isMobile ? "1.75rem 1.75rem 2rem" : isCore ? "2.75rem 3rem" : "2.25rem 2.75rem",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            gap: 14,
                                        }}
                                    >
                                        <h2
                                            className="font-display"
                                            style={{
                                                fontSize: isCore
                                                    ? isMobile
                                                        ? "1.8rem"
                                                        : "clamp(2rem, 3.4vw, 2.7rem)"
                                                    : isMobile
                                                        ? "1.5rem"
                                                        : "clamp(1.7rem, 2.6vw, 2.1rem)",
                                                fontWeight: 700,
                                                color: "var(--text)",
                                                letterSpacing: "-0.03em",
                                                lineHeight: 1.1,
                                            }}
                                        >
                                            {cat.label}
                                        </h2>
                                        <p
                                            style={{
                                                fontSize: isCore ? "1.1rem" : "1rem",
                                                color: "var(--text-muted)",
                                                lineHeight: 1.6,
                                            }}
                                        >
                                            {cat.heroTagline}
                                        </p>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                                            {cat.subServices.slice(0, 4).map((s) => (
                                                <span
                                                    key={s.slug}
                                                    className="tag"
                                                    style={{ fontSize: "0.74rem" }}
                                                >
                                                    {s.title}
                                                </span>
                                            ))}
                                        </div>
                                        <span
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 6,
                                                fontSize: "0.92rem",
                                                fontWeight: 700,
                                                color: "var(--accent)",
                                                marginTop: 6,
                                            }}
                                        >
                                            Explore {cat.label}
                                            <ArrowRight size={15} />
                                        </span>
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
