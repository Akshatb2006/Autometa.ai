"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Target, Eye, Lightbulb, Users, Shield, Zap, Instagram, Linkedin, Youtube, Twitter, Play, Rocket, Sparkles, Building2, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/useIsMobile";

const values = [
    { icon: <Target size={22} />, title: "Results-Driven", desc: "We measure success by the impact on your real estate operations — hours saved, leads converted, revenue grown." },
    { icon: <Shield size={22} />, title: "Reliability", desc: "Systems that work 24/7 without breaking. We build for stability, not just speed." },
    { icon: <Lightbulb size={22} />, title: "Innovation", desc: "We stay ahead of the curve with the latest in AI, automation, and real estate technology." },
    { icon: <Users size={22} />, title: "Partnership", desc: "We don't just deliver and leave. We partner with your team for ongoing optimization and growth." },
    { icon: <Zap size={22} />, title: "Simplicity", desc: "Complex problems, simple solutions. We design systems your agents will actually use." },
    { icon: <Eye size={22} />, title: "Transparency", desc: "Clear communication, honest timelines, and full visibility into every step of the process." },
];

const journey = [
    {
        year: "2022",
        title: "The Founding Insight",
        desc: "Working with UAE brokerages, we kept seeing the same problem: great agents losing deals to broken lead handling. We decided to fix the pipe, not just the copy.",
        icon: <Sparkles size={22} />,
    },
    {
        year: "2023",
        title: "First Five Agencies",
        desc: "We built lead management systems and WhatsApp AI for five early partners. Average response time dropped from hours to under 2 minutes.",
        icon: <Rocket size={22} />,
    },
    {
        year: "2024",
        title: "AI + Automation Platform",
        desc: "Launched our opinionated real estate stack — CRM schema, AI voice agents, WhatsApp qualification, and ops dashboards as a repeatable playbook.",
        icon: <Zap size={22} />,
    },
    {
        year: "2025",
        title: "40+ Teams on the System",
        desc: "Scaled across the UAE and GCC. From boutique brokerages to multi-project developers — all running on the same automated real estate operating system.",
        icon: <Building2 size={22} />,
    },
    {
        year: "2026",
        title: "The Real Estate OS",
        desc: "Expanding into custom mobile apps, investor portals, and AI agents purpose-built for property operations. One platform, every channel.",
        icon: <Globe size={22} />,
    },
];

const socials = [
    {
        handle: "@autometa.ai",
        platform: "Instagram",
        icon: <Instagram size={18} />,
        href: "https://instagram.com",
        gradient: "linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #515bd4 100%)",
        description: "Short clips from client deployments, UAE real estate ops tips, and weekly AI-agent showcases.",
    },
    {
        handle: "Autometa AI",
        platform: "LinkedIn",
        icon: <Linkedin size={18} />,
        href: "https://linkedin.com",
        gradient: "linear-gradient(135deg, #0077B5 0%, #0066FF 100%)",
        description: "Long-form case studies and weekly essays on building AI-powered real estate systems.",
    },
    {
        handle: "Autometa",
        platform: "YouTube",
        icon: <Youtube size={18} />,
        href: "https://youtube.com",
        gradient: "linear-gradient(135deg, #FF0000 0%, #CC0000 100%)",
        description: "Full walkthroughs of our CRM builds, WhatsApp AI demos, and system teardowns.",
    },
    {
        handle: "@autometaai",
        platform: "X / Twitter",
        icon: <Twitter size={18} />,
        href: "https://twitter.com",
        gradient: "linear-gradient(135deg, #0A0E18 0%, #0066FF 100%)",
        description: "Daily takes on AI in real estate and quick product updates — follow for the live build logs.",
    },
];

export default function AboutPage() {
    const isMobile = useIsMobile();
    const journeyRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: journeyRef,
        offset: ["start end", "end start"],
    });
    const lineHeight = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <Navbar />

            {/* Hero */}
            <section style={{ padding: "8rem 0 4rem", position: "relative" }}>
                <div className="mesh-bg" />
                <div className="container-wide" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 680 }}>
                    <span className="section-eyebrow">About Us</span>
                    <h1 className="font-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)", fontWeight: 700, letterSpacing: "-0.04em", color: "var(--text)", lineHeight: 1.08, marginBottom: 16 }}>
                        Building the <span className="gradient-text">Operating System</span> for Real Estate
                    </h1>
                    <p style={{ fontSize: "1rem", color: "var(--text-subtle)", lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
                        We&apos;re a team of system architects, automation engineers, and AI specialists obsessed with making real estate operations run effortlessly.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section style={{ padding: "4rem 0" }}>
                <div className="container-wide">
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 20 }}>
                        <motion.div className="glass-card" style={{ padding: "2.5rem 2rem" }}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                            <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--tag-bg)", border: "1px solid var(--tag-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 16 }}>
                                <Target size={24} />
                            </div>
                            <h2 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>Our Mission</h2>
                            <p style={{ fontSize: "0.95rem", color: "var(--text-subtle)", lineHeight: 1.8 }}>
                                To empower every real estate team with intelligent systems and automation — so they can stop chasing tasks and start closing deals. We believe no lead should be lost to a broken process.
                            </p>
                        </motion.div>

                        <motion.div className="glass-card" style={{ padding: "2.5rem 2rem" }}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                            <div style={{ width: 48, height: 48, borderRadius: 14, background: "var(--tag-bg)", border: "1px solid var(--tag-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 16 }}>
                                <Eye size={24} />
                            </div>
                            <h2 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", marginBottom: 12 }}>Our Vision</h2>
                            <p style={{ fontSize: "0.95rem", color: "var(--text-subtle)", lineHeight: 1.8 }}>
                                A world where every real estate operation runs like a well-oiled machine — automated, intelligent, and scalable. Where technology handles the repetitive work and humans focus on what they do best: building relationships and closing deals.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section style={{ padding: "4rem 0" }}>
                <div className="container-wide" style={{ maxWidth: 720 }}>
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <span className="section-eyebrow">Our Story</span>
                        <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1, marginBottom: 20 }}>
                            Born From <span className="gradient-text">Real Problems</span>
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <p style={{ fontSize: "0.95rem", color: "var(--text-subtle)", lineHeight: 1.8 }}>
                                We started Autometa after seeing the same problem across dozens of real estate teams: talented agents losing deals not because of skill, but because of broken systems. Leads slipping through cracks. Follow-ups forgotten. Hours wasted on manual data entry.
                            </p>
                            <p style={{ fontSize: "0.95rem", color: "var(--text-subtle)", lineHeight: 1.8 }}>
                                We knew there was a better way. By combining deep real estate industry knowledge with cutting-edge automation and AI, we&apos;ve built systems that actually work — systems that capture every lead, automate every follow-up, and give teams full visibility into their pipeline.
                            </p>
                            <p style={{ fontSize: "0.95rem", color: "var(--text-subtle)", lineHeight: 1.8 }}>
                                Today, we work with brokerages, property management companies, and real estate developers across the industry — helping them turn chaotic operations into scalable, automated systems.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Expertise */}
            <section style={{ padding: "4rem 0" }}>
                <div className="container-wide">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                        <span className="section-eyebrow">Expertise</span>
                        <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1 }}>
                            What We <span className="gradient-text">Bring</span>
                        </h2>
                    </motion.div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 16 }}>
                        {[
                            { title: "System Architecture", desc: "Deep expertise in designing end-to-end operational systems for real estate businesses of all sizes." },
                            { title: "AI & Automation", desc: "Specialists in AI integrations, workflow automation, and intelligent lead management systems." },
                            { title: "Real Estate Domain", desc: "We understand the industry — from lead generation and CRM workflows to compliance and closing processes." },
                        ].map((item, i) => (
                            <motion.div key={item.title} className="glass-card" style={{ padding: "2rem 1.5rem" }}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{["🏗️", "🤖", "🏠"][i]}</div>
                                <h3 className="font-display" style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>{item.title}</h3>
                                <p style={{ fontSize: "0.85rem", color: "var(--text-subtle)", lineHeight: 1.7 }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section style={{ padding: "4rem 0" }}>
                <div className="container-wide">
                    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                        <span className="section-eyebrow">Values</span>
                        <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1 }}>
                            What We <span className="gradient-text">Stand For</span>
                        </h2>
                    </motion.div>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: 12 }}>
                        {values.map((v, i) => (
                            <motion.div key={v.title} className="glass-card" style={{ padding: "1.5rem" }}
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}>
                                <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--tag-bg)", border: "1px solid var(--tag-border)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 12 }}>
                                    {v.icon}
                                </div>
                                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{v.title}</h3>
                                <p style={{ fontSize: "0.85rem", color: "var(--text-subtle)", lineHeight: 1.7 }}>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Journey — scroll-driven timeline */}
            <section style={{ padding: isMobile ? "4rem 0" : "5rem 0" }}>
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ textAlign: "center", marginBottom: "3rem", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}
                    >
                        <span className="section-eyebrow">Our Journey</span>
                        <h2 className="font-display" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.7rem)", fontWeight: 700, letterSpacing: "-0.035em", color: "var(--text)", lineHeight: 1.1, marginBottom: 12 }}>
                            From Broken Spreadsheets to a <span className="gradient-text">Real Estate OS</span>
                        </h2>
                        <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                            Four years of building, breaking, and re-architecting real estate operations — here&apos;s how we got here.
                        </p>
                    </motion.div>

                    <div ref={journeyRef} style={{ position: "relative", maxWidth: 880, margin: "0 auto" }}>
                        {!isMobile && (
                            <>
                                <div
                                    style={{
                                        position: "absolute",
                                        left: 29,
                                        top: 30,
                                        bottom: 30,
                                        width: 2,
                                        background: "var(--border)",
                                        borderRadius: 2,
                                    }}
                                />
                                <motion.div
                                    style={{
                                        position: "absolute",
                                        left: 29,
                                        top: 30,
                                        width: 2,
                                        height: lineHeight,
                                        background: "var(--gradient-primary)",
                                        borderRadius: 2,
                                    }}
                                />
                            </>
                        )}
                        <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 20 : 26 }}>
                            {journey.map((j, i) => (
                                <motion.div
                                    key={j.year}
                                    initial={{ opacity: 0, y: 26 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: isMobile ? "1fr" : "auto 1fr",
                                        gap: isMobile ? 14 : 28,
                                        alignItems: "flex-start",
                                        position: "relative",
                                        zIndex: 1,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: 18,
                                            background: "var(--surface-solid)",
                                            border: "1px solid var(--border)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--accent)",
                                            boxShadow: "0 6px 24px rgba(10,14,24,0.08)",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {j.icon}
                                    </div>
                                    <div
                                        className="glass-card"
                                        style={{
                                            padding: isMobile ? "1.25rem" : "1.5rem 1.75rem",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "0.7rem",
                                                fontWeight: 700,
                                                color: "var(--accent)",
                                                letterSpacing: "0.12em",
                                                textTransform: "uppercase",
                                                fontFamily: "'JetBrains Mono', monospace",
                                                marginBottom: 6,
                                            }}
                                        >
                                            {j.year}
                                        </div>
                                        <h3
                                            className="font-display"
                                            style={{
                                                fontSize: "1.25rem",
                                                fontWeight: 700,
                                                color: "var(--text)",
                                                letterSpacing: "-0.02em",
                                                marginBottom: 6,
                                            }}
                                        >
                                            {j.title}
                                        </h3>
                                        <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                                            {j.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Social handles */}
            <section style={{ padding: isMobile ? "3rem 0" : "4rem 0", background: "var(--bg-alt)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{ textAlign: "center", marginBottom: "2.5rem", maxWidth: 680, marginLeft: "auto", marginRight: "auto" }}
                    >
                        <span className="section-eyebrow">Follow the Build</span>
                        <h2 className="font-display" style={{ fontSize: "clamp(1.75rem, 3.4vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--text)", lineHeight: 1.1, marginBottom: 10 }}>
                            Where We <span className="gradient-text">Post Daily</span>
                        </h2>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                            Behind-the-scenes of every real estate AI deployment, plus raw build logs and product teardowns.
                        </p>
                    </motion.div>

                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)", gap: 14 }}>
                        {socials.map((s, i) => (
                            <motion.a
                                key={s.platform}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer noopener"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                whileHover={{ y: -4 }}
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
                                <div
                                    style={{
                                        height: 110,
                                        background: s.gradient,
                                        position: "relative",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        padding: "1rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            backgroundImage: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.22) 0%, transparent 60%)",
                                        }}
                                    />
                                    <div
                                        style={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: 12,
                                            background: "rgba(0,0,0,0.3)",
                                            backdropFilter: "blur(8px)",
                                            border: "1px solid rgba(255,255,255,0.15)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#fff",
                                            position: "relative",
                                        }}
                                    >
                                        {s.icon}
                                    </div>
                                </div>
                                <div style={{ padding: "1rem 1.1rem 1.25rem" }}>
                                    <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace", marginBottom: 4 }}>
                                        {s.platform}
                                    </div>
                                    <div className="font-display" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.015em", marginBottom: 6 }}>
                                        {s.handle}
                                    </div>
                                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.55 }}>{s.description}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Video teaser row */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.55 }}
                        className="glass-card"
                        style={{
                            marginTop: 22,
                            padding: 0,
                            overflow: "hidden",
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr",
                        }}
                    >
                        <div
                            style={{
                                minHeight: 240,
                                background: "linear-gradient(135deg, #0A0E18 0%, #0066FF 130%)",
                                position: "relative",
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
                            <div
                                style={{
                                    width: 78,
                                    height: 78,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.96)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 16px 48px rgba(0,102,255,0.45)",
                                    position: "relative",
                                }}
                            >
                                <Play size={28} fill="var(--accent)" color="var(--accent)" style={{ marginLeft: 3 }} />
                            </div>
                        </div>
                        <div style={{ padding: isMobile ? "1.5rem" : "2rem 2.25rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10 }}>
                            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'JetBrains Mono', monospace" }}>Founder Story · 3 min</span>
                            <h3 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                                Why we built Autometa for real estate — in 3 minutes
                            </h3>
                            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                                A short founder clip on what we saw in UAE real estate that nobody else was solving — and how we turned it into a repeatable platform.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "4rem 0 6rem" }}>
                <div className="container-wide" style={{ textAlign: "center" }}>
                    <div className="glass-card" style={{ padding: isMobile ? "2.5rem 1.5rem" : "3.5rem 3rem", maxWidth: 640, margin: "0 auto" }}>
                        <h2 className="font-display" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.03em" }}>
                            Let&apos;s Build Your <span className="gradient-text">System</span>
                        </h2>
                        <p style={{ fontSize: "0.95rem", color: "var(--text-subtle)", lineHeight: 1.7, marginBottom: 24 }}>
                            Ready to transform your operations? Let&apos;s talk.
                        </p>
                        <a href="/book-audit" className="btn-primary cta-glow-btn" style={{ position: "relative" }}>Book a Free Audit <ArrowRight size={14} /></a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
