"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowLeft,
    Mail,
    MessageSquare,
    Database,
    Workflow,
    Phone,
    Bot,
    Zap,
    BarChart3,
    Smartphone,
    Globe,
    Wrench,
    Link2,
    Play,
    CheckCircle2,
    Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getCategory, serviceCategories } from "@/lib/services-data";

const iconMap: Record<string, React.ReactNode> = {
    Mail: <Mail size={22} />,
    MessageSquare: <MessageSquare size={22} />,
    Database: <Database size={22} />,
    Workflow: <Workflow size={22} />,
    Phone: <Phone size={22} />,
    Bot: <Bot size={22} />,
    Zap: <Zap size={22} />,
    BarChart3: <BarChart3 size={22} />,
    Smartphone: <Smartphone size={22} />,
    Globe: <Globe size={22} />,
    Wrench: <Wrench size={22} />,
    Link2: <Link2 size={22} />,
};

export default function ServiceCategoryPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const category = getCategory(slug);
    const isMobile = useIsMobile();
    const [activeIdx, setActiveIdx] = useState(0);

    if (!category) notFound();

    const active = category.subServices[activeIdx];

    // Sibling categories for quick-switcher at the bottom
    const others = serviceCategories.filter((c) => c.slug !== category.slug);

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <Navbar />

            {/* Hero with human persona */}
            <section style={{ padding: isMobile ? "5rem 0 2.5rem" : "7rem 0 3.5rem", position: "relative" }}>
                <div className="mesh-bg" />
                <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
                    <Link
                        href="/services"
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
                        <ArrowLeft size={14} /> All Services
                    </Link>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr", gap: 36, alignItems: "center" }}>
                        <div>
                            <span className="section-eyebrow">{category.eyebrow}</span>
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
                                {category.heroTitle}
                            </h1>
                            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 22 }}>
                                {category.heroTagline}
                            </p>
                            <Link href="#book-audit" className="btn-primary cta-glow-btn" style={{ position: "relative" }}>
                                Book a Free Audit <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Human persona illustration */}
                        {!isMobile && (
                            <motion.div
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                style={{ position: "relative" }}
                            >
                                <div
                                    style={{
                                        position: "relative",
                                        aspectRatio: "1 / 1",
                                        maxWidth: 460,
                                        marginLeft: "auto",
                                        background: "linear-gradient(135deg, rgba(0,102,255,0.08) 0%, rgba(0,163,255,0.04) 100%)",
                                        borderRadius: 28,
                                        border: "1px solid var(--border)",
                                        overflow: "hidden",
                                        boxShadow: "0 20px 60px rgba(10,14,24,0.06)",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            backgroundImage: "radial-gradient(circle, rgba(0,102,255,0.10) 1px, transparent 1px)",
                                            backgroundSize: "22px 22px",
                                            opacity: 0.6,
                                        }}
                                    />
                                    {/* Persona silhouette */}
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 190,
                                                height: 190,
                                                borderRadius: "50%",
                                                background: "linear-gradient(135deg, #0A0E18 0%, #0066FF 120%)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: "0 24px 60px rgba(0,102,255,0.35)",
                                            }}
                                        >
                                            <Users size={78} color="#fff" strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    {/* Speech bubble */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 16, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        style={{
                                            position: "absolute",
                                            top: "14%",
                                            right: "6%",
                                            maxWidth: 210,
                                            padding: "0.9rem 1.1rem",
                                            background: "#FFFFFF",
                                            border: "1px solid var(--border)",
                                            borderRadius: 18,
                                            borderBottomRightRadius: 4,
                                            boxShadow: "0 10px 30px rgba(10,14,24,0.08)",
                                            fontSize: "0.88rem",
                                            color: "var(--text)",
                                            fontWeight: 500,
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        Hi — want me to walk you through our {category.label.toLowerCase()}?
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: -14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        style={{
                                            position: "absolute",
                                            bottom: "12%",
                                            left: "8%",
                                            padding: "0.6rem 0.85rem",
                                            background: "var(--accent)",
                                            color: "#fff",
                                            borderRadius: 14,
                                            borderBottomLeftRadius: 4,
                                            fontSize: "0.82rem",
                                            fontWeight: 600,
                                            boxShadow: "0 10px 24px rgba(0,102,255,0.3)",
                                        }}
                                    >
                                        Yes, show me →
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </section>

            {/* Sub-services picker + detail panel */}
            <section style={{ padding: isMobile ? "2rem 0 4rem" : "3rem 0 6rem" }}>
                <div className="container-wide">
                    {/* Picker row */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile
                                ? "repeat(2, 1fr)"
                                : `repeat(${category.subServices.length}, 1fr)`,
                            gap: 10,
                            marginBottom: 28,
                        }}
                    >
                        {category.subServices.map((s, i) => {
                            const isActive = i === activeIdx;
                            return (
                                <button
                                    key={s.slug}
                                    onClick={() => setActiveIdx(i)}
                                    style={{
                                        textAlign: "left",
                                        padding: isMobile ? "0.85rem 1rem" : "1rem 1.15rem",
                                        background: isActive ? "var(--tag-bg)" : "var(--surface-solid)",
                                        border: `1px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
                                        borderRadius: 12,
                                        cursor: "pointer",
                                        color: isActive ? "var(--accent)" : "var(--text)",
                                        transition: "all 0.25s",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 8,
                                        minHeight: 64,
                                    }}
                                >
                                    <span
                                        style={{
                                            color: isActive ? "var(--accent)" : "var(--text-muted)",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                        }}
                                    >
                                        {iconMap[s.iconKey] ?? <CheckCircle2 size={20} />}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.88rem",
                                            fontWeight: 700,
                                            letterSpacing: "-0.01em",
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {s.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Detail panel */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
                            gap: 0,
                            background: "var(--surface-solid)",
                            border: "1px solid var(--border)",
                            borderRadius: 20,
                            overflow: "hidden",
                            boxShadow: "0 1px 2px rgba(10,14,24,0.02), 0 12px 36px rgba(10,14,24,0.05)",
                            minHeight: 420,
                        }}
                    >
                        {/* Left: copy */}
                        <div style={{ padding: isMobile ? "1.75rem" : "2.5rem 2.75rem", display: "flex", flexDirection: "column", gap: 18, justifyContent: "center" }}>
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 10,
                                    fontSize: "0.72rem",
                                    fontWeight: 700,
                                    color: "var(--accent)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                            >
                                <span
                                    style={{
                                        width: 34,
                                        height: 34,
                                        borderRadius: 10,
                                        background: "var(--tag-bg)",
                                        border: "1px solid var(--tag-border)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--accent)",
                                    }}
                                >
                                    {iconMap[active.iconKey] ?? <CheckCircle2 size={18} />}
                                </span>
                                Service {String(activeIdx + 1).padStart(2, "0")} / {String(category.subServices.length).padStart(2, "0")}
                            </div>
                            <h2
                                className="font-display"
                                style={{
                                    fontSize: isMobile ? "1.6rem" : "clamp(1.8rem, 2.8vw, 2.3rem)",
                                    fontWeight: 700,
                                    color: "var(--text)",
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.12,
                                }}
                            >
                                {active.title}
                            </h2>
                            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                                {active.longDesc}
                            </p>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                                {active.features.map((f) => (
                                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                                        <CheckCircle2 size={16} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 3 }} />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: 8 }}>
                                <Link
                                    href="/book-audit"
                                    className="btn-primary"
                                    style={{ fontSize: "0.92rem", padding: "0.75rem 1.5rem" }}
                                >
                                    Book a Free Audit <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Right: visual slot (image/video when uploaded) */}
                        <div
                            style={{
                                position: "relative",
                                background:
                                    "linear-gradient(135deg, rgba(0,102,255,0.10) 0%, rgba(0,163,255,0.04) 100%)",
                                borderLeft: isMobile ? "none" : "1px solid var(--border-subtle)",
                                borderTop: isMobile ? "1px solid var(--border-subtle)" : "none",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: isMobile ? "2rem" : "2rem",
                                minHeight: isMobile ? 240 : "auto",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(0,102,255,0.12) 1px, transparent 1px)",
                                    backgroundSize: "22px 22px",
                                    opacity: 0.5,
                                }}
                            />
                            <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                                {active.videoUrl ? (
                                    <video
                                        src={active.videoUrl}
                                        controls
                                        style={{ maxWidth: "100%", borderRadius: 16, boxShadow: "0 12px 36px rgba(10,14,24,0.12)" }}
                                    />
                                ) : active.imageUrl ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={active.imageUrl}
                                        alt={active.title}
                                        style={{ maxWidth: "100%", borderRadius: 16, boxShadow: "0 12px 36px rgba(10,14,24,0.12)" }}
                                    />
                                ) : (
                                    <div
                                        style={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: "50%",
                                            background: "rgba(255,255,255,0.7)",
                                            border: "1px dashed var(--accent)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--accent)",
                                            margin: "0 auto 14px",
                                            backdropFilter: "blur(8px)",
                                        }}
                                    >
                                        <Play size={32} fill="var(--accent)" />
                                    </div>
                                )}
                                <div
                                    style={{
                                        fontSize: "0.72rem",
                                        fontWeight: 700,
                                        color: "var(--text-faint)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.12em",
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    {active.videoUrl || active.imageUrl ? active.title : "Video / visual coming soon"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explanatory video block */}
            <section style={{ padding: isMobile ? "3rem 0" : "4rem 0" }}>
                <div className="container-wide">
                    <div
                        style={{
                            background: "var(--surface-solid)",
                            border: "1px solid var(--border)",
                            borderRadius: 22,
                            overflow: "hidden",
                            boxShadow: "0 1px 2px rgba(10,14,24,0.02), 0 16px 48px rgba(10,14,24,0.06)",
                        }}
                    >
                        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr" }}>
                            <div
                                style={{
                                    position: "relative",
                                    aspectRatio: isMobile ? "16/9" : "auto",
                                    background: "linear-gradient(135deg, #0A0E18 0%, #0066FF 140%)",
                                    minHeight: isMobile ? "auto" : 320,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
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
                                <div style={{ position: "relative", zIndex: 1, textAlign: "center", color: "#fff" }}>
                                    <div
                                        style={{
                                            width: 84,
                                            height: 84,
                                            borderRadius: "50%",
                                            background: "rgba(255,255,255,0.96)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto 14px",
                                            boxShadow: "0 16px 48px rgba(0,102,255,0.45)",
                                        }}
                                    >
                                        <Play size={30} fill="var(--accent)" color="var(--accent)" style={{ marginLeft: 3 }} />
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "0.72rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            fontFamily: "'JetBrains Mono', monospace",
                                            opacity: 0.85,
                                        }}
                                    >
                                        Explainer · {category.label}
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    padding: isMobile ? "1.75rem" : "2.25rem 2.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    gap: 12,
                                }}
                            >
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
                                    Why it matters
                                </div>
                                <h3
                                    className="font-display"
                                    style={{
                                        fontSize: isMobile ? "1.4rem" : "1.7rem",
                                        fontWeight: 700,
                                        color: "var(--text)",
                                        letterSpacing: "-0.025em",
                                        lineHeight: 1.18,
                                    }}
                                >
                                    A 2-minute walkthrough of our {category.label.toLowerCase()} for real estate
                                </h3>
                                <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                                    A quick video from our team showing how these systems come together in a real agency deployment — lead capture, automation, and the AI in action.
                                </p>
                                <div>
                                    <Link href="#book-audit" className="btn-secondary" style={{ fontSize: "0.9rem" }}>
                                        Book a call to go deeper <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other categories */}
            <section style={{ padding: "3rem 0 6rem", background: "var(--bg-alt)", borderTop: "1px solid var(--border-subtle)" }}>
                <div className="container-wide">
                    <h3
                        className="font-display"
                        style={{
                            fontSize: "clamp(1.4rem, 2.4vw, 1.8rem)",
                            fontWeight: 700,
                            color: "var(--text)",
                            letterSpacing: "-0.025em",
                            marginBottom: 22,
                            textAlign: "center",
                        }}
                    >
                        Explore Other <span className="gradient-text">Services</span>
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
                        {others.map((o) => (
                            <Link
                                key={o.slug}
                                href={`/services/${o.slug}`}
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
                                        {o.eyebrow}
                                    </div>
                                    <div className="font-display" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>
                                        {o.label}
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
