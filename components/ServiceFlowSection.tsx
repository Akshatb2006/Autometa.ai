"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { PhoneCall, Search, Building2, ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Step = {
    num: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    bullets: string[];
};

const steps: Step[] = [
    {
        num: "01",
        title: "Discovery Call",
        desc: "A free 30-minute video call with a senior engineer — no sales pitch. We map what's breaking in your real estate ops and where AI can pay for itself fastest.",
        icon: <PhoneCall size={28} />,
        bullets: ["30-min video strategy call", "Ops snapshot + quick-wins", "No obligation, ever"],
    },
    {
        num: "02",
        title: "System Audit",
        desc: "Same-day audit of your CRM, lead pipeline, follow-ups, and agent workflows. We map every lead journey and pinpoint exactly where revenue leaks.",
        icon: <Search size={28} />,
        bullets: ["Full stack audit", "Gap analysis + ROI projection", "Tailored automation roadmap"],
    },
    {
        num: "03",
        title: "System Visit & Build",
        desc: "We visit your team, align with agents, and start building. In 14 days you've got a live AI-powered real estate system — tested, trained, and deployed.",
        icon: <Building2 size={28} />,
        bullets: ["On-site team alignment", "14-day deployment", "Agent training + handoff"],
    },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function FlowCard({
    step,
    index,
    total,
    scrollYProgress,
    isMobile,
}: {
    step: Step;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
    isMobile: boolean;
}) {
    const segment = 1 / total;
    const start = index * segment;
    const end = (index + 1) * segment;
    const mid = start + segment * 0.5;

    const opacity = useTransform(
        scrollYProgress,
        [Math.max(0, start - 0.05), start + 0.05, end - 0.05, Math.min(1, end + 0.05)],
        [0.15, 1, 1, 0.15]
    );
    const scale = useTransform(
        scrollYProgress,
        [Math.max(0, start - 0.05), mid, Math.min(1, end + 0.05)],
        [0.95, 1, 0.95]
    );

    return (
        <motion.div
            style={{
                opacity: isMobile ? 1 : opacity,
                scale: isMobile ? 1 : scale,
                willChange: "transform, opacity",
            }}
        >
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "auto 1fr",
                    gap: isMobile ? 16 : 28,
                    alignItems: "center",
                    padding: isMobile ? "1.5rem" : "2rem 2.25rem",
                    background: "var(--surface-solid)",
                    border: "1px solid var(--border)",
                    borderRadius: 20,
                    boxShadow: "0 1px 2px rgba(10,14,24,0.02), 0 12px 36px rgba(10,14,24,0.06)",
                }}
            >
                <div
                    style={{
                        width: isMobile ? 64 : 88,
                        height: isMobile ? 64 : 88,
                        borderRadius: isMobile ? 18 : 22,
                        background: "linear-gradient(135deg, #0A0E18 0%, #0066FF 130%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        boxShadow: "0 10px 28px rgba(0,102,255,0.28)",
                        flexShrink: 0,
                    }}
                >
                    {step.icon}
                </div>
                <div>
                    <div
                        style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            color: "var(--accent)",
                            letterSpacing: "0.12em",
                            fontFamily: "'JetBrains Mono', monospace",
                            textTransform: "uppercase",
                            marginBottom: 10,
                        }}
                    >
                        Step / {step.num}
                    </div>
                    <h3
                        className="font-display"
                        style={{
                            fontSize: isMobile ? "1.45rem" : "1.85rem",
                            fontWeight: 700,
                            letterSpacing: "-0.025em",
                            color: "var(--text)",
                            lineHeight: 1.12,
                            marginBottom: 10,
                        }}
                    >
                        {step.title}
                    </h3>
                    <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 14 }}>
                        {step.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                        {step.bullets.map((b) => (
                            <span key={b} className="tag" style={{ fontSize: "0.78rem" }}>
                                {b}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ServiceFlowSection() {
    const isMobile = useIsMobile();
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const lineHeight = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "100%"]);

    return (
        <section id="service-flow" style={{ padding: isMobile ? "5rem 0" : "6.5rem 0", position: "relative" }}>
            <div className="container-wide">
                <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 3rem" }}>
                    <motion.span
                        className="section-eyebrow"
                        style={{ justifyContent: "center" }}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease }}
                    >
                        <Sparkles size={14} /> From Call to Live System
                    </motion.span>
                    <motion.h2
                        className="font-display"
                        style={{
                            fontSize: "clamp(2.1rem, 4.2vw, 3.2rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.035em",
                            color: "var(--text)",
                            lineHeight: 1.08,
                            marginBottom: 12,
                        }}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.08, ease }}
                    >
                        Three Steps From <span className="gradient-text">Discovery</span> to Deployment
                    </motion.h2>
                    <motion.p
                        style={{ fontSize: "1.08rem", color: "var(--text-muted)", lineHeight: 1.65 }}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15, ease }}
                    >
                        A smooth flow that starts with a 30-min call and ends with a fully deployed real estate AI stack.
                    </motion.p>
                </div>

                <div
                    ref={containerRef}
                    style={{
                        position: "relative",
                        maxWidth: 920,
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: isMobile ? 18 : 32,
                    }}
                >
                    {!isMobile && (
                        <>
                            <div
                                style={{
                                    position: "absolute",
                                    left: 43,
                                    top: 44,
                                    bottom: 44,
                                    width: 2,
                                    background: "var(--border)",
                                    borderRadius: 2,
                                }}
                            />
                            <motion.div
                                style={{
                                    position: "absolute",
                                    left: 43,
                                    top: 44,
                                    height: lineHeight,
                                    width: 2,
                                    background: "var(--gradient-primary)",
                                    borderRadius: 2,
                                }}
                            />
                        </>
                    )}
                    {steps.map((step, i) => (
                        <FlowCard
                            key={step.num}
                            step={step}
                            index={i}
                            total={steps.length}
                            scrollYProgress={scrollYProgress}
                            isMobile={isMobile}
                        />
                    ))}
                </div>

                <motion.div
                    style={{ textAlign: "center", marginTop: "3rem" }}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease }}
                >
                    <a
                        href="#book-audit"
                        className="btn-primary cta-glow-btn"
                        style={{ position: "relative" }}
                    >
                        Book a Strategy Call <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
