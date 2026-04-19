"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Quote, MapPin, CheckCircle2, Calendar, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getCaseStudy, caseStudies } from "@/lib/case-studies-data";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CaseStudyDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const study = getCaseStudy(slug);
    const isMobile = useIsMobile();

    if (!study) notFound();

    const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 2);

    const phases = [
        { label: "Problem", text: study.problem },
        { label: "Discovery", text: study.discovery },
        { label: "Design", text: study.design },
        { label: "Execution", text: study.execution },
    ];

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: isMobile ? "5rem 0 2rem" : "7rem 0 3rem", position: "relative" }}>
                <div className="mesh-bg" />
                <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
                    <Link
                        href="/case-studies"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            marginBottom: 20,
                        }}
                    >
                        <ArrowLeft size={14} /> All Case Studies
                    </Link>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
                        <span className="tag">{study.industry}</span>
                        <span
                            className="tag"
                            style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
                        >
                            <MapPin size={11} /> {study.location}
                        </span>
                        <span
                            className="tag"
                            style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
                        >
                            <Calendar size={11} /> {study.timeline}
                        </span>
                    </div>
                    <h1
                        className="font-display"
                        style={{
                            fontSize: "clamp(2.2rem, 4.8vw, 3.6rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.04em",
                            color: "var(--text)",
                            lineHeight: 1.08,
                            marginBottom: 18,
                            maxWidth: 880,
                        }}
                    >
                        {study.client}
                    </h1>
                    <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: 760 }}>
                        {study.summary}
                    </p>
                </div>
            </section>

            {/* Headline metrics */}
            <section style={{ padding: isMobile ? "1rem 0 3rem" : "1rem 0 4rem" }}>
                <div className="container-wide">
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : `repeat(${study.results.length}, 1fr)`,
                            gap: 14,
                        }}
                    >
                        {study.results.map((r, i) => (
                            <motion.div
                                key={r.metric}
                                className="glass-card"
                                style={{ padding: "1.5rem 1.5rem 1.6rem" }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                            >
                                <div
                                    style={{
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        color: "var(--text-faint)",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        fontFamily: "'JetBrains Mono', monospace",
                                        marginBottom: 10,
                                    }}
                                >
                                    {r.metric}
                                </div>
                                <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                                    <span
                                        style={{
                                            fontSize: "0.95rem",
                                            color: "var(--text-faint)",
                                            textDecoration: "line-through",
                                        }}
                                    >
                                        {r.before}
                                    </span>
                                    <ArrowRight size={14} style={{ color: "var(--accent)" }} />
                                    <span
                                        className="font-display gradient-text"
                                        style={{ fontSize: "1.85rem", fontWeight: 800, letterSpacing: "-0.03em" }}
                                    >
                                        {r.after}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Narrative phases */}
            <section style={{ padding: "1rem 0 4rem" }}>
                <div className="container-wide">
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16 }}>
                        {phases.map((p, i) => (
                            <motion.div
                                key={p.label}
                                className="glass-card"
                                style={{ padding: isMobile ? "1.5rem" : "1.85rem 2rem" }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: i * 0.05, ease }}
                            >
                                <div
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        marginBottom: 10,
                                        fontSize: "0.7rem",
                                        fontWeight: 700,
                                        color: "var(--accent)",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: 28,
                                            height: 28,
                                            borderRadius: 9,
                                            background: "var(--tag-bg)",
                                            border: "1px solid var(--tag-border)",
                                            color: "var(--accent)",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: "0.72rem",
                                        }}
                                    >
                                        0{i + 1}
                                    </span>
                                    {p.label}
                                </div>
                                <p style={{ fontSize: "0.98rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>{p.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stack */}
            <section style={{ padding: "1rem 0 4rem" }}>
                <div className="container-wide">
                    <div
                        className="glass-card"
                        style={{
                            padding: isMobile ? "1.75rem" : "2rem 2.25rem",
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "auto 1fr",
                            gap: 20,
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                width: 52,
                                height: 52,
                                borderRadius: 14,
                                background: "var(--tag-bg)",
                                border: "1px solid var(--tag-border)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--accent)",
                            }}
                        >
                            <Layers size={22} />
                        </div>
                        <div>
                            <div
                                style={{
                                    fontSize: "0.7rem",
                                    fontWeight: 700,
                                    color: "var(--text-faint)",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    marginBottom: 8,
                                }}
                            >
                                Stack & Tools
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {study.stackTags.map((t) => (
                                    <span key={t} className="tag">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section style={{ padding: "2rem 0 5rem" }}>
                <div className="container-wide">
                    <div
                        className="glass-card"
                        style={{
                            padding: isMobile ? "2rem 1.5rem" : "3rem 3rem",
                            position: "relative",
                            overflow: "hidden",
                            maxWidth: 880,
                            margin: "0 auto",
                            background: `radial-gradient(circle at 20% 20%, ${study.accent}12 0%, transparent 55%), var(--surface-solid)`,
                        }}
                    >
                        <Quote size={42} style={{ color: study.accent, opacity: 0.25, marginBottom: 18 }} />
                        <blockquote
                            style={{
                                fontSize: isMobile ? "1.2rem" : "1.5rem",
                                color: "var(--text)",
                                lineHeight: 1.55,
                                fontWeight: 500,
                                letterSpacing: "-0.01em",
                                marginBottom: 22,
                            }}
                        >
                            &ldquo;{study.testimonial.quote}&rdquo;
                        </blockquote>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 14,
                            }}
                        >
                            <div
                                style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 14,
                                    background: `linear-gradient(135deg, ${study.accent}, ${study.accent}80)`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                    fontSize: "1.15rem",
                                    fontWeight: 800,
                                    fontFamily: "'Space Grotesk', sans-serif",
                                }}
                            >
                                {study.testimonial.author
                                    .split(" ")
                                    .map((w) => w[0])
                                    .slice(0, 2)
                                    .join("")}
                            </div>
                            <div>
                                <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)" }}>
                                    {study.testimonial.author}
                                </div>
                                <div style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>{study.testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "3rem 0 5rem", background: "var(--bg-alt)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="container-wide" style={{ textAlign: "center", maxWidth: 640 }}>
                    <h2 className="font-display" style={{ fontSize: "clamp(1.7rem, 3vw, 2.2rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.03em", marginBottom: 12 }}>
                        Want results like <span className="gradient-text">{study.client}</span>?
                    </h2>
                    <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 22 }}>
                        Book a free real estate systems audit and we&apos;ll show you exactly where your pipeline is leaking.
                    </p>
                    <Link href="/book-audit" className="btn-primary cta-glow-btn" style={{ position: "relative" }}>
                        Book a Free Audit <CheckCircle2 size={16} />
                    </Link>
                </div>
            </section>

            {/* Related */}
            <section style={{ padding: "4rem 0 5rem" }}>
                <div className="container-wide">
                    <h3
                        className="font-display"
                        style={{
                            fontSize: "clamp(1.4rem, 2.4vw, 1.8rem)",
                            fontWeight: 700,
                            color: "var(--text)",
                            letterSpacing: "-0.025em",
                            textAlign: "center",
                            marginBottom: 24,
                        }}
                    >
                        More <span className="gradient-text">Stories</span>
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 16 }}>
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                href={`/case-studies/${r.slug}`}
                                className="glass-card"
                                style={{
                                    padding: "1.5rem 1.75rem",
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 14,
                                }}
                            >
                                <div>
                                    <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", marginBottom: 6 }}>
                                        {r.industry}
                                    </div>
                                    <div className="font-display" style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>
                                        {r.client}
                                    </div>
                                </div>
                                <ArrowRight size={18} style={{ color: "var(--accent)" }} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingContact />
        </main>
    );
}
