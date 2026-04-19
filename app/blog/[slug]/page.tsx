"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, Bot, Sparkles, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { useIsMobile } from "@/hooks/useIsMobile";
import { getBlogPost, blogPosts } from "@/lib/blog-data";

type ChatMsg = { role: "user" | "agent"; text: string };

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const post = getBlogPost(slug);
    const isMobile = useIsMobile();

    const [messages, setMessages] = useState<ChatMsg[]>([
        {
            role: "agent",
            text:
                "Hey — I&apos;m the Autometa agent trained on this post. Ask me anything about applying it to your real estate operations.",
        },
    ]);
    const [input, setInput] = useState("");
    const [thinking, setThinking] = useState(false);

    if (!post) notFound();

    const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

    const suggestions = [
        "Summarise this for my sales manager",
        "How would this apply to a 10-agent brokerage?",
        "What&apos;s the first thing I should automate?",
    ];

    const send = (textArg?: string) => {
        const text = (textArg ?? input).trim();
        if (!text) return;
        setMessages((m) => [...m, { role: "user", text }]);
        setInput("");
        setThinking(true);
        // Placeholder: wire to your LLM endpoint when the agent backend is ready.
        setTimeout(() => {
            setMessages((m) => [
                ...m,
                {
                    role: "agent",
                    text:
                        "Great question — I&apos;ll have a full answer once the live agent is wired up. In the meantime, book a free audit and a human will walk you through the specifics for your agency.",
                },
            ]);
            setThinking(false);
        }, 900);
    };

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: isMobile ? "5rem 0 2rem" : "7rem 0 3rem", position: "relative" }}>
                <div className="mesh-bg" />
                <div className="container-wide" style={{ position: "relative", zIndex: 1, maxWidth: 860 }}>
                    <Link
                        href="/blog"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            color: "var(--text-muted)",
                            textDecoration: "none",
                            marginBottom: 18,
                        }}
                    >
                        <ArrowLeft size={14} /> All Articles
                    </Link>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                        <span className="tag">{post.category}</span>
                        <span className="tag" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                            <Clock size={11} /> {post.readTime}
                        </span>
                        <span className="tag">{post.date}</span>
                    </div>
                    <h1
                        className="font-display"
                        style={{
                            fontSize: "clamp(2.2rem, 4.8vw, 3.4rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.04em",
                            color: "var(--text)",
                            lineHeight: 1.1,
                            marginBottom: 18,
                        }}
                    >
                        {post.title}
                    </h1>
                    <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20 }}>
                        {post.excerpt}
                    </p>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            paddingTop: 18,
                            borderTop: "1px solid var(--border)",
                        }}
                    >
                        <div
                            style={{
                                width: 46,
                                height: 46,
                                borderRadius: 12,
                                background: "var(--gradient-primary)",
                                color: "#fff",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: 800,
                                fontFamily: "'Space Grotesk', sans-serif",
                            }}
                        >
                            {post.author.name
                                .split(" ")
                                .map((w) => w[0])
                                .slice(0, 2)
                                .join("")}
                        </div>
                        <div>
                            <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)" }}>{post.author.name}</div>
                            <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{post.author.role}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero art */}
            <section style={{ padding: "0 0 2rem" }}>
                <div className="container-wide" style={{ maxWidth: 980 }}>
                    <div
                        style={{
                            aspectRatio: "16 / 7",
                            background: post.heroGradient,
                            borderRadius: 22,
                            position: "relative",
                            overflow: "hidden",
                            border: "1px solid var(--border)",
                            boxShadow: "0 12px 48px rgba(10,14,24,0.08)",
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
                    </div>
                </div>
            </section>

            {/* Body + AI chat widget */}
            <section style={{ padding: "2rem 0 4rem" }}>
                <div className="container-wide" style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.5fr 1fr", gap: isMobile ? 28 : 40, maxWidth: 1080 }}>
                    <article style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                        {post.body.map((p, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: i * 0.04, ease }}
                                style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.85 }}
                                dangerouslySetInnerHTML={{ __html: p }}
                            />
                        ))}
                        <div
                            style={{
                                marginTop: 10,
                                display: "flex",
                                gap: 8,
                                flexWrap: "wrap",
                                paddingTop: 20,
                                borderTop: "1px solid var(--border)",
                            }}
                        >
                            {post.tags.map((t) => (
                                <span key={t} className="tag" style={{ fontSize: "0.78rem" }}>
                                    #{t}
                                </span>
                            ))}
                        </div>
                    </article>

                    {/* AI Agent Sidebar */}
                    <aside
                        style={{
                            position: isMobile ? "static" : "sticky",
                            top: isMobile ? undefined : 100,
                            alignSelf: "start",
                        }}
                    >
                        <div
                            style={{
                                background: "var(--surface-solid)",
                                border: "1px solid var(--border)",
                                borderRadius: 20,
                                overflow: "hidden",
                                boxShadow: "0 1px 2px rgba(10,14,24,0.02), 0 12px 40px rgba(10,14,24,0.06)",
                            }}
                        >
                            <div
                                style={{
                                    padding: "1rem 1.1rem",
                                    background: "linear-gradient(135deg, #0A0E18 0%, #0066FF 130%)",
                                    color: "#fff",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 10,
                                }}
                            >
                                <div
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: 10,
                                        background: "rgba(255,255,255,0.18)",
                                        border: "1px solid rgba(255,255,255,0.25)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Bot size={18} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: "0.88rem", fontWeight: 700, letterSpacing: "-0.01em" }}>
                                        Ask the Autometa Agent
                                    </div>
                                    <div style={{ fontSize: "0.72rem", opacity: 0.85 }}>Trained on this post &middot; Real estate only</div>
                                </div>
                                <span
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 4,
                                        fontSize: "0.62rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        padding: "3px 8px",
                                        background: "rgba(255,255,255,0.18)",
                                        borderRadius: 6,
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    <Sparkles size={10} /> Beta
                                </span>
                            </div>

                            <div
                                style={{
                                    padding: "1rem 1.1rem",
                                    maxHeight: 340,
                                    overflowY: "auto",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 10,
                                    background: "var(--bg-alt)",
                                }}
                            >
                                <AnimatePresence initial={false}>
                                    {messages.map((m, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            style={{
                                                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                                                maxWidth: "86%",
                                                padding: "0.65rem 0.85rem",
                                                background: m.role === "user" ? "var(--accent)" : "var(--surface-solid)",
                                                color: m.role === "user" ? "#fff" : "var(--text)",
                                                border: m.role === "user" ? "none" : "1px solid var(--border)",
                                                borderRadius: 12,
                                                borderBottomRightRadius: m.role === "user" ? 4 : 12,
                                                borderBottomLeftRadius: m.role === "user" ? 12 : 4,
                                                fontSize: "0.88rem",
                                                lineHeight: 1.55,
                                            }}
                                            dangerouslySetInnerHTML={{ __html: m.text }}
                                        />
                                    ))}
                                </AnimatePresence>
                                {thinking && (
                                    <div style={{ alignSelf: "flex-start", fontSize: "0.78rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                                        <Sparkles size={12} /> thinking…
                                    </div>
                                )}
                            </div>

                            <div style={{ padding: "0.85rem 1rem 1rem", borderTop: "1px solid var(--border)" }}>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
                                    {suggestions.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => send(s)}
                                            style={{
                                                fontSize: "0.72rem",
                                                padding: "0.35rem 0.65rem",
                                                background: "var(--tag-bg)",
                                                border: "1px solid var(--tag-border)",
                                                color: "var(--tag-text)",
                                                borderRadius: 8,
                                                cursor: "pointer",
                                                fontWeight: 600,
                                            }}
                                            dangerouslySetInnerHTML={{ __html: s }}
                                        />
                                    ))}
                                </div>
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        send();
                                    }}
                                    style={{ display: "flex", gap: 6 }}
                                >
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask the agent..."
                                        style={{
                                            flex: 1,
                                            padding: "0.7rem 0.85rem",
                                            background: "var(--surface-muted)",
                                            border: "1px solid var(--border)",
                                            borderRadius: 10,
                                            fontSize: "0.88rem",
                                            color: "var(--text)",
                                            outline: "none",
                                        }}
                                    />
                                    <button
                                        type="submit"
                                        aria-label="Send"
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 10,
                                            background: "var(--accent)",
                                            color: "#fff",
                                            border: "none",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <Send size={15} />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div style={{ marginTop: 16, padding: "1rem 1.1rem", background: "var(--surface-muted)", borderRadius: 14, border: "1px solid var(--border-subtle)" }}>
                            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
                                Want the real thing?
                            </div>
                            <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.55, marginBottom: 10 }}>
                                Book a free real estate systems audit. We&apos;ll map your pipeline and show exactly where to start.
                            </p>
                            <Link href="/book-audit" className="btn-primary" style={{ width: "100%", fontSize: "0.85rem", padding: "0.65rem 1rem", justifyContent: "center" }}>
                                Book a Free Audit <ArrowRight size={13} />
                            </Link>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Related */}
            <section style={{ padding: "3rem 0 6rem", background: "var(--bg-alt)", borderTop: "1px solid var(--border-subtle)" }}>
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
                        Keep <span className="gradient-text">Reading</span>
                    </h3>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
                        {related.map((r) => (
                            <Link
                                key={r.slug}
                                href={`/blog/${r.slug}`}
                                className="glass-card"
                                style={{
                                    padding: 0,
                                    overflow: "hidden",
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <div style={{ height: 120, background: r.heroGradient, position: "relative" }}>
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            backgroundImage:
                                                "radial-gradient(circle at 30% 30%, rgba(0,163,255,0.25) 0%, transparent 55%)",
                                        }}
                                    />
                                </div>
                                <div style={{ padding: "1.1rem 1.2rem 1.3rem", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                                    <span
                                        style={{
                                            fontSize: "0.68rem",
                                            fontWeight: 700,
                                            color: "var(--accent)",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            fontFamily: "'JetBrains Mono', monospace",
                                        }}
                                    >
                                        {r.category}
                                    </span>
                                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.015em", lineHeight: 1.3 }} dangerouslySetInnerHTML={{ __html: r.title }} />
                                    <span style={{ marginTop: "auto", fontSize: "0.78rem", color: "var(--text-faint)" }}>{r.readTime}</span>
                                </div>
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
