"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

type Course = {
    id: string;
    title: string;
    desc: string;
    duration: string;
    tag: string;
    gradient: string;
    videoUrl?: string;
};

const courses: Course[] = [
    {
        id: "crm-foundations",
        title: "Real Estate CRM Foundations",
        desc: "The exact CRM structure we build for UAE agencies — pipeline stages, data fields, and the automations that keep it clean.",
        duration: "12 min",
        tag: "Course · 01",
        gradient: "linear-gradient(135deg, #0A0E18 0%, #0066FF 120%)",
    },
    {
        id: "whatsapp-ai",
        title: "WhatsApp AI for Real Estate Leads",
        desc: "How we build WhatsApp bots that qualify leads, answer property questions, and book viewings — 24/7.",
        duration: "9 min",
        tag: "Course · 02",
        gradient: "linear-gradient(135deg, #0066FF 0%, #00CFFF 120%)",
    },
    {
        id: "lead-scoring",
        title: "AI Lead Scoring in Under 10 Minutes",
        desc: "A walkthrough of how we score and route real estate leads using behaviour signals, intent, and budget band.",
        duration: "8 min",
        tag: "Course · 03",
        gradient: "linear-gradient(135deg, #00A3FF 0%, #66F2FF 120%)",
    },
    {
        id: "ops-dashboards",
        title: "Pipeline Ops Dashboards",
        desc: "Live dashboards brokerage owners use to see agent performance, at-risk deals, and weekly revenue forecasts.",
        duration: "11 min",
        tag: "Course · 04",
        gradient: "linear-gradient(135deg, #0A0E18 0%, #00A3FF 120%)",
    },
];

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function CourseVideoSection() {
    const isMobile = useIsMobile();
    const [activeId, setActiveId] = useState(courses[0].id);
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const active = courses.find((c) => c.id === activeId) ?? courses[0];

    useEffect(() => {
        // Whenever active course changes, reset playing state and pause video
        setPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [activeId]);

    const togglePlay = () => {
        const el = videoRef.current;
        if (!el) {
            setPlaying((p) => !p);
            return;
        }
        if (playing) {
            el.pause();
            setPlaying(false);
        } else {
            el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        }
    };

    return (
        <section id="courses" style={{ padding: isMobile ? "5rem 0" : "6.5rem 0", position: "relative", background: "var(--bg-alt)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
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
                        <GraduationCap size={14} /> Free Courses
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
                        Watch How <span className="gradient-text">Real Estate AI</span> Actually Works
                    </motion.h2>
                    <motion.p
                        style={{ fontSize: "1.08rem", color: "var(--text-muted)", lineHeight: 1.65 }}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15, ease }}
                    >
                        Short, focused walkthroughs from our team — pick one to start, and the previous video pauses automatically.
                    </motion.p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.3fr 0.7fr", gap: isMobile ? 20 : 24, alignItems: "start" }}>
                    {/* Player */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease }}
                        style={{
                            background: "var(--surface-solid)",
                            border: "1px solid var(--border)",
                            borderRadius: 20,
                            overflow: "hidden",
                            boxShadow: "0 1px 2px rgba(10,14,24,0.02), 0 12px 32px rgba(10,14,24,0.06)",
                        }}
                    >
                        <div
                            onClick={togglePlay}
                            style={{
                                position: "relative",
                                aspectRatio: "16/9",
                                background: active.gradient,
                                cursor: "pointer",
                                overflow: "hidden",
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
                            {active.videoUrl && (
                                <video
                                    ref={videoRef}
                                    src={active.videoUrl}
                                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                                    onPlay={() => setPlaying(true)}
                                    onPause={() => setPlaying(false)}
                                    onEnded={() => setPlaying(false)}
                                />
                            )}
                            <AnimatePresence mode="wait">
                                {!playing && (
                                    <motion.div
                                        key={`overlay-${active.id}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        style={{
                                            position: "absolute",
                                            inset: 0,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 14,
                                            color: "#fff",
                                            textAlign: "center",
                                            padding: "0 2rem",
                                        }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.08 }}
                                            whileTap={{ scale: 0.94 }}
                                            style={{
                                                width: 82,
                                                height: 82,
                                                borderRadius: "50%",
                                                background: "rgba(255,255,255,0.96)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: "0 16px 54px rgba(0,102,255,0.45)",
                                            }}
                                        >
                                            <Play size={30} fill="var(--accent)" color="var(--accent)" style={{ marginLeft: 4 }} />
                                        </motion.div>
                                        <div
                                            style={{
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                letterSpacing: "0.12em",
                                                textTransform: "uppercase",
                                                fontFamily: "'JetBrains Mono', monospace",
                                                opacity: 0.9,
                                            }}
                                        >
                                            {active.tag} · {active.duration}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            {playing && (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        togglePlay();
                                    }}
                                    aria-label="Pause"
                                    style={{
                                        position: "absolute",
                                        bottom: 18,
                                        right: 18,
                                        width: 42,
                                        height: 42,
                                        borderRadius: "50%",
                                        background: "rgba(255,255,255,0.92)",
                                        border: "none",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "var(--accent)",
                                    }}
                                >
                                    <Pause size={18} fill="var(--accent)" />
                                </button>
                            )}
                        </div>

                        <div style={{ padding: isMobile ? "1.5rem" : "1.75rem 2rem" }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={active.id + "-info"}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                                        <span
                                            style={{
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                color: "var(--accent)",
                                                letterSpacing: "0.08em",
                                                fontFamily: "'JetBrains Mono', monospace",
                                            }}
                                        >
                                            {active.tag}
                                        </span>
                                        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.78rem", color: "var(--text-muted)" }}>
                                            <Clock size={12} /> {active.duration}
                                        </span>
                                    </div>
                                    <h3
                                        className="font-display"
                                        style={{
                                            fontSize: isMobile ? "1.35rem" : "1.55rem",
                                            fontWeight: 700,
                                            letterSpacing: "-0.02em",
                                            color: "var(--text)",
                                            lineHeight: 1.2,
                                            marginBottom: 8,
                                        }}
                                    >
                                        {active.title}
                                    </h3>
                                    <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                                        {active.desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    {/* Course list */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        {courses.map((c) => {
                            const isActive = c.id === activeId;
                            return (
                                <motion.button
                                    key={c.id}
                                    onClick={() => setActiveId(c.id)}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, ease }}
                                    style={{
                                        textAlign: "left",
                                        background: isActive ? "var(--tag-bg)" : "var(--surface-solid)",
                                        border: `1px solid ${isActive ? "var(--accent)" : "var(--border)"}`,
                                        borderRadius: 14,
                                        padding: "1rem 1.1rem",
                                        cursor: "pointer",
                                        transition: "border-color 0.25s, background 0.25s",
                                        display: "flex",
                                        gap: 12,
                                        alignItems: "center",
                                    }}
                                >
                                    <div
                                        style={{
                                            flexShrink: 0,
                                            width: 42,
                                            height: 42,
                                            borderRadius: 12,
                                            background: c.gradient,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#fff",
                                        }}
                                    >
                                        <Play size={16} fill="#fff" />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontSize: "0.68rem", fontWeight: 700, color: isActive ? "var(--accent)" : "var(--text-faint)", letterSpacing: "0.08em", fontFamily: "'JetBrains Mono', monospace" }}>
                                            {c.tag} · {c.duration}
                                        </div>
                                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em", lineHeight: 1.3, marginTop: 2 }}>
                                            {c.title}
                                        </div>
                                    </div>
                                    <ArrowRight size={14} style={{ color: isActive ? "var(--accent)" : "var(--text-faint)", flexShrink: 0 }} />
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
