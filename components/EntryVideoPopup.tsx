"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ArrowRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "autometa-entry-popup-seen";
const OPEN_DELAY_MS = 1200;

export default function EntryVideoPopup() {
    const [visible, setVisible] = useState(false);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        if (sessionStorage.getItem(STORAGE_KEY)) return;
        const t = setTimeout(() => setVisible(true), OPEN_DELAY_MS);
        return () => clearTimeout(t);
    }, []);

    const dismiss = useCallback(() => {
        setVisible(false);
        sessionStorage.setItem(STORAGE_KEY, "1");
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") dismiss();
        };
        if (visible) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [visible, dismiss]);

    return (
        <AnimatePresence>
            {visible && (
                    <motion.div
                        key="entry-video-popup"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={dismiss}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(10,14,24,0.55)",
                            backdropFilter: "blur(8px)",
                            WebkitBackdropFilter: "blur(8px)",
                            zIndex: 10000,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                    <motion.div
                        initial={{ scale: 0.94, y: 24 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.94, y: 24 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        style={{
                            width: "min(720px, 94vw)",
                            background: "var(--surface-solid)",
                            border: "1px solid var(--border)",
                            borderRadius: 22,
                            overflow: "hidden",
                            boxShadow: "0 40px 90px rgba(10,14,24,0.22), 0 0 60px rgba(0,102,255,0.12)",
                        }}
                    >
                        {/* Close */}
                        <button
                            onClick={dismiss}
                            aria-label="Close"
                            style={{
                                position: "absolute",
                                top: 14,
                                right: 14,
                                width: 34,
                                height: 34,
                                borderRadius: "50%",
                                background: "rgba(255,255,255,0.9)",
                                border: "1px solid var(--border)",
                                color: "var(--text)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                zIndex: 3,
                                backdropFilter: "blur(8px)",
                            }}
                        >
                            <X size={16} />
                        </button>

                        {/* Video placeholder */}
                        <div
                            style={{
                                position: "relative",
                                aspectRatio: "16/9",
                                background:
                                    "linear-gradient(135deg, #0A0E18 0%, #0066FF 140%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                            }}
                            onClick={() => setPlaying(true)}
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
                                {!playing ? (
                                    <>
                                        <motion.div
                                            style={{
                                                width: 78,
                                                height: 78,
                                                borderRadius: "50%",
                                                background: "rgba(255,255,255,0.96)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                margin: "0 auto 12px",
                                                boxShadow: "0 12px 48px rgba(0,102,255,0.45)",
                                            }}
                                            whileHover={{ scale: 1.06 }}
                                            whileTap={{ scale: 0.96 }}
                                        >
                                            <Play size={28} fill="var(--accent)" color="var(--accent)" style={{ marginLeft: 3 }} />
                                        </motion.div>
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
                                            2 min · Autometa for Real Estate
                                        </div>
                                    </>
                                ) : (
                                    /* Replace this placeholder with a real <video> / <iframe> once the file arrives */
                                    <div
                                        style={{
                                            padding: "0 2rem",
                                            fontSize: "0.95rem",
                                            opacity: 0.85,
                                            fontWeight: 500,
                                        }}
                                    >
                                        Video coming soon — we&apos;ll drop the real walkthrough here.
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Body */}
                        <div style={{ padding: "1.75rem 1.9rem 1.9rem", textAlign: "center" }}>
                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "4px 10px",
                                    background: "var(--tag-bg)",
                                    border: "1px solid var(--tag-border)",
                                    borderRadius: 6,
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    color: "var(--tag-text)",
                                    letterSpacing: "0.06em",
                                    textTransform: "uppercase",
                                    fontFamily: "'JetBrains Mono', monospace",
                                    marginBottom: 12,
                                }}
                            >
                                <Sparkles size={10} /> 2 min walkthrough
                            </div>
                            <h3
                                className="font-display"
                                style={{
                                    fontSize: "1.6rem",
                                    fontWeight: 700,
                                    color: "var(--text)",
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.2,
                                    marginBottom: 10,
                                }}
                            >
                                See how we rebuild real estate agencies in 14 days
                            </h3>
                            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 22, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
                                Watch how our AI-powered real estate lead systems capture every inquiry, follow up
                                automatically, and book more viewings — end to end.
                            </p>

                            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
                                <a
                                    href="#book-audit"
                                    onClick={dismiss}
                                    className="btn-primary cta-glow-btn"
                                    style={{ fontSize: "1rem", padding: "0.95rem 1.9rem", fontWeight: 700, position: "relative" }}
                                >
                                    Book a Free Audit <ArrowRight size={15} />
                                </a>
                                <button
                                    onClick={dismiss}
                                    className="btn-secondary"
                                    style={{ fontSize: "0.92rem", padding: "0.85rem 1.6rem" }}
                                >
                                    Keep browsing
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    </motion.div>
            )}
        </AnimatePresence>
    );
}
