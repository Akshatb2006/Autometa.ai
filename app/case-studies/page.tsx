"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Users, BarChart3, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/useIsMobile";
import { caseStudies } from "@/lib/case-studies-data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const snapMetrics = [
    { value: "10+", label: "Hours Saved / Week", icon: <Clock size={18} /> },
    { value: "3x", label: "Lead Conversion Lift", icon: <TrendingUp size={18} /> },
    { value: "100%", label: "Pipeline Visibility", icon: <BarChart3 size={18} /> },
    { value: "50+", label: "Real Estate Teams", icon: <Users size={18} /> },
];

export default function CaseStudiesPage() {
    const cardsRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        if (!cardsRef.current) return;
        const cards = cardsRef.current.querySelectorAll(".case-card");
        gsap.set(cards, { opacity: 0, y: 30 });
        ScrollTrigger.batch(cards, {
            onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", overwrite: true }),
            start: "top 90%",
        });
        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: "8rem 0 4rem", position: "relative" }}>
                <div className="mesh-bg" />
                <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 680 }}>
                    <span className="section-eyebrow">Real Estate Case Studies</span>
                    <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.08, marginBottom: 16 }}>
                        Real Results from <span className="gradient-text">Real Systems</span>
                    </h1>
                    <p style={{ fontSize: "1rem", color: "var(--text-subtle)", lineHeight: 1.75 }}>
                        See how we&apos;ve helped real estate teams fix broken workflows and dramatically improve performance.
                    </p>
                </div>
            </section>

            {/* Results Snapshot */}
            <section style={{ padding: "2rem 0 4rem" }}>
                <div className="container-wide">
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: 12 }}>
                        {snapMetrics.map((m) => (
                            <div key={m.label} className="glass-card" style={{ padding: "1.5rem", textAlign: "center" }}>
                                <div style={{ color: "var(--accent)", marginBottom: 8, display: "flex", justifyContent: "center" }}>{m.icon}</div>
                                <div className="font-display gradient-text" style={{ fontSize: "1.75rem", fontWeight: 800, letterSpacing: "-0.03em" }}>{m.value}</div>
                                <div style={{ fontSize: "0.75rem", color: "var(--text-faint)", fontWeight: 500, marginTop: 4 }}>{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Cards */}
            <section style={{ padding: "2rem 0 4rem" }}>
                <div ref={cardsRef} className="container-wide" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 20 }}>
                    {caseStudies.map((cs) => (
                        <Link
                            key={cs.slug}
                            href={`/case-studies/${cs.slug}`}
                            className="case-card glass-card"
                            style={{
                                padding: 0,
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                textDecoration: "none",
                                color: "inherit",
                            }}
                        >
                            <div
                                style={{
                                    aspectRatio: "16 / 9",
                                    position: "relative",
                                    background: `linear-gradient(135deg, ${cs.accent}33 0%, rgba(10,14,24,0.88) 100%)`,
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        backgroundImage: `radial-gradient(circle at 25% 25%, ${cs.accent}55 0%, transparent 55%), radial-gradient(circle at 75% 75%, rgba(0,102,255,0.35) 0%, transparent 50%)`,
                                    }}
                                />
                                <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 8, flexWrap: "wrap" }}>
                                    <span
                                        style={{
                                            fontSize: "0.65rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            color: "#fff",
                                            background: "rgba(0,0,0,0.35)",
                                            backdropFilter: "blur(8px)",
                                            borderRadius: 6,
                                            padding: "4px 9px",
                                            fontFamily: "'JetBrains Mono', monospace",
                                        }}
                                    >
                                        {cs.industry}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.65rem",
                                            fontWeight: 600,
                                            color: "#fff",
                                            background: "rgba(0,0,0,0.35)",
                                            backdropFilter: "blur(8px)",
                                            borderRadius: 6,
                                            padding: "4px 9px",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 4,
                                        }}
                                    >
                                        <MapPin size={10} /> {cs.location}
                                    </span>
                                </div>
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 14,
                                        left: 14,
                                        right: 14,
                                        color: "#fff",
                                    }}
                                >
                                    <div
                                        className="font-display"
                                        style={{
                                            fontSize: "1.25rem",
                                            fontWeight: 700,
                                            letterSpacing: "-0.02em",
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {cs.client}
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: "1.4rem 1.4rem 1.5rem", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{cs.summary}</p>
                                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                                    {cs.results.slice(0, 2).map((r) => (
                                        <div
                                            key={r.metric}
                                            style={{
                                                flex: 1,
                                                minWidth: 100,
                                                padding: "0.55rem 0.75rem",
                                                background: "var(--tag-bg)",
                                                border: "1px solid var(--tag-border)",
                                                borderRadius: 10,
                                            }}
                                        >
                                            <div style={{ fontSize: "0.65rem", color: "var(--text-faint)", fontWeight: 600, marginBottom: 2 }}>{r.metric}</div>
                                            <div className="gradient-text" style={{ fontSize: "1rem", fontWeight: 800 }}>{r.after}</div>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--border)" }}>
                                    <span style={{ fontSize: "0.72rem", color: "var(--text-faint)", fontFamily: "'JetBrains Mono', monospace" }}>{cs.timeline}</span>
                                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--accent)", display: "inline-flex", alignItems: "center", gap: 4 }}>
                                        Read story <ArrowRight size={13} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Approach */}
            <section style={{ padding: "4rem 0" }}>
                <div className="container-wide" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <span className="section-eyebrow">Our Approach</span>
                        <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1, marginBottom: 12 }}>
                            We Build <span className="gradient-text">Real Estate Systems</span>, Not Just Tools
                        </h2>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-subtle)", lineHeight: 1.7, marginBottom: 28 }}>
                            Tools are commodities. What matters is how they connect, automate, and work together as a real estate operating system. That&apos;s what we build.
                        </p>
                        <a href="/book-audit" className="btn-primary">Book a Free Audit <ArrowRight size={14} /></a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
