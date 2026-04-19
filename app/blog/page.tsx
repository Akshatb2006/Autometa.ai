"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/useIsMobile";
import { blogPosts } from "@/lib/blog-data";

const categories = ["All", "Lead Management", "Automation", "CRM", "AI", "Operations"];

export default function BlogPage() {
    const isMobile = useIsMobile();
    const [activeCategory, setActiveCategory] = useState("All");

    const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
    const rest = blogPosts.filter((p) => p.slug !== featured.slug);
    const filtered = activeCategory === "All" ? rest : rest.filter((p) => p.category === activeCategory);

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: "8rem 0 3rem", position: "relative" }}>
                <div className="mesh-bg" />
                <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 720 }}>
                    <span className="section-eyebrow">Real Estate Blog</span>
                    <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.08, marginBottom: 16 }}>
                        Insights for <span className="gradient-text">Real Estate Teams</span>
                    </h1>
                    <p style={{ fontSize: "1rem", color: "var(--text-subtle)", lineHeight: 1.75 }}>
                        Practical guides, system blueprints, and automation strategies for modern real estate operations.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section style={{ padding: "0 0 2rem" }}>
                <div className="container-wide">
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                        {categories.map((cat) => {
                            const active = cat === activeCategory;
                            return (
                                <motion.button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    whileHover={{ scale: 1.04 }}
                                    style={{
                                        padding: "0.5rem 1rem",
                                        borderRadius: 10,
                                        border: active ? "1px solid var(--accent)" : "1px solid var(--border)",
                                        background: active ? "var(--tag-bg)" : "transparent",
                                        color: active ? "var(--accent)" : "var(--text-muted)",
                                        fontSize: "0.8rem",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        transition: "all 0.25s",
                                    }}
                                >
                                    {cat}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            <section style={{ padding: "1rem 0 3rem" }}>
                <div className="container-wide">
                    <Link
                        href={`/blog/${featured.slug}`}
                        style={{ textDecoration: "none", color: "inherit", display: "block" }}
                    >
                        <motion.div
                            style={{
                                padding: 0,
                                overflow: "hidden",
                                borderRadius: 22,
                                border: "1px solid var(--border)",
                                background: "var(--surface-solid)",
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr",
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.35 }}
                        >
                            <div
                                style={{
                                    minHeight: isMobile ? 220 : "auto",
                                    background: featured.heroGradient,
                                    position: "relative",
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
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 18,
                                        left: 18,
                                        display: "flex",
                                        gap: 8,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: "0.62rem",
                                            fontWeight: 700,
                                            color: "#fff",
                                            background: "rgba(0,0,0,0.38)",
                                            backdropFilter: "blur(8px)",
                                            padding: "4px 10px",
                                            borderRadius: 6,
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            fontFamily: "'JetBrains Mono', monospace",
                                        }}
                                    >
                                        Featured
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.62rem",
                                            fontWeight: 700,
                                            color: "#fff",
                                            background: "rgba(0,0,0,0.38)",
                                            backdropFilter: "blur(8px)",
                                            padding: "4px 10px",
                                            borderRadius: 6,
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            fontFamily: "'JetBrains Mono', monospace",
                                        }}
                                    >
                                        {featured.category}
                                    </span>
                                </div>
                            </div>
                            <div style={{ padding: isMobile ? "1.75rem" : "2.25rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: 14 }}>
                                <h2 className="font-display" style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                                    {featured.title}
                                </h2>
                                <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: 1.65 }}>{featured.excerpt}</p>
                                <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: "0.78rem", color: "var(--text-faint)" }}>
                                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                                        <Clock size={12} /> {featured.readTime}
                                    </span>
                                    <span>{featured.date}</span>
                                    <span className="gradient-text" style={{ fontWeight: 700, marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 4 }}>
                                        Read article <ArrowRight size={12} />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </section>

            {/* Posts Grid */}
            <section style={{ padding: "1rem 0 6rem" }}>
                <div className="container-wide">
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
                        {filtered.map((post, i) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <motion.div
                                    className="glass-card"
                                    style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -4 }}
                                    transition={{ delay: i * 0.05, duration: 0.35 }}
                                >
                                    <div
                                        style={{
                                            height: 140,
                                            background: post.heroGradient,
                                            position: "relative",
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                backgroundImage:
                                                    "radial-gradient(circle at 30% 30%, rgba(0,163,255,0.25) 0%, transparent 55%), radial-gradient(circle at 75% 70%, rgba(0,102,255,0.22) 0%, transparent 50%)",
                                            }}
                                        />
                                        <span
                                            style={{
                                                position: "absolute",
                                                top: 14,
                                                left: 14,
                                                fontSize: "0.62rem",
                                                fontWeight: 700,
                                                color: "#fff",
                                                background: "rgba(0,0,0,0.35)",
                                                backdropFilter: "blur(8px)",
                                                padding: "4px 9px",
                                                borderRadius: 6,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                                fontFamily: "'JetBrains Mono', monospace",
                                            }}
                                        >
                                            {post.category}
                                        </span>
                                    </div>
                                    <div style={{ padding: "1.3rem 1.35rem 1.45rem", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.015em", lineHeight: 1.3 }}>
                                            {post.title}
                                        </h3>
                                        <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, flex: 1 }}>{post.excerpt}</p>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--border)" }}>
                                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                                <span style={{ fontSize: "0.7rem", color: "var(--text-faint)", display: "flex", alignItems: "center", gap: 4 }}>
                                                    <Clock size={11} /> {post.readTime}
                                                </span>
                                                <span style={{ fontSize: "0.7rem", color: "var(--text-faint)" }}>{post.date}</span>
                                            </div>
                                            <ArrowRight size={14} style={{ color: "var(--accent)" }} />
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
