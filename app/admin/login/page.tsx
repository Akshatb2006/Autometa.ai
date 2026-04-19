"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { ArrowRight, Lock } from "lucide-react";

export default function AdminLoginPage() {
    const router = useRouter();
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState<"phone" | "otp">("phone");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const sendOtp = async () => {
        setError(null);
        setLoading(true);
        const { error } = await supabase.auth.signInWithOtp({ phone });
        setLoading(false);
        if (error) {
            setError(error.message);
            return;
        }
        setStep("otp");
    };

    const verifyOtp = async () => {
        setError(null);
        setLoading(true);
        const { error } = await supabase.auth.verifyOtp({
            phone,
            token: code,
            type: "sms",
        });
        setLoading(false);
        if (error) {
            setError(error.message);
            return;
        }
        router.push("/admin/services");
    };

    return (
        <main
            style={{
                minHeight: "100vh",
                background: "var(--bg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
            }}
        >
            <div
                style={{
                    width: "min(420px, 100%)",
                    background: "var(--surface-solid)",
                    border: "1px solid var(--border)",
                    borderRadius: 18,
                    padding: "2.25rem 2rem",
                    boxShadow: "0 12px 40px rgba(10,14,24,0.08)",
                }}
            >
                <div
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: "var(--tag-bg)",
                        border: "1px solid var(--tag-border)",
                        color: "var(--accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 18,
                    }}
                >
                    <Lock size={20} />
                </div>
                <h1
                    className="font-display"
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        letterSpacing: "-0.025em",
                        color: "var(--text)",
                        marginBottom: 6,
                    }}
                >
                    Admin Sign In
                </h1>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: 22, lineHeight: 1.55 }}>
                    {step === "phone"
                        ? "Enter the phone number registered to your admin account. We'll send a one-time code."
                        : `We sent a code to ${phone}. Enter it below.`}
                </p>

                {step === "phone" ? (
                    <>
                        <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            placeholder="+971 50 000 0000"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "0.85rem 1rem",
                                fontSize: "0.98rem",
                                border: "1px solid var(--border)",
                                borderRadius: 10,
                                background: "var(--surface-muted)",
                                color: "var(--text)",
                                marginBottom: 14,
                                outline: "none",
                            }}
                        />
                        <button
                            onClick={sendOtp}
                            disabled={loading || !phone.trim()}
                            className="btn-primary"
                            style={{ width: "100%", justifyContent: "center", opacity: loading || !phone.trim() ? 0.6 : 1 }}
                        >
                            {loading ? "Sending..." : "Send Code"} <ArrowRight size={15} />
                        </button>
                    </>
                ) : (
                    <>
                        <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }}>
                            One-Time Code
                        </label>
                        <input
                            type="text"
                            inputMode="numeric"
                            placeholder="123456"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "0.85rem 1rem",
                                fontSize: "1.1rem",
                                letterSpacing: "0.3em",
                                textAlign: "center",
                                fontFamily: "'JetBrains Mono', monospace",
                                border: "1px solid var(--border)",
                                borderRadius: 10,
                                background: "var(--surface-muted)",
                                color: "var(--text)",
                                marginBottom: 14,
                                outline: "none",
                            }}
                        />
                        <button
                            onClick={verifyOtp}
                            disabled={loading || code.length < 4}
                            className="btn-primary"
                            style={{ width: "100%", justifyContent: "center", opacity: loading || code.length < 4 ? 0.6 : 1 }}
                        >
                            {loading ? "Verifying..." : "Verify & Continue"} <ArrowRight size={15} />
                        </button>
                        <button
                            onClick={() => {
                                setStep("phone");
                                setCode("");
                                setError(null);
                            }}
                            style={{
                                width: "100%",
                                marginTop: 10,
                                padding: "0.6rem",
                                background: "transparent",
                                border: "none",
                                color: "var(--text-muted)",
                                fontSize: "0.88rem",
                                cursor: "pointer",
                            }}
                        >
                            Use a different number
                        </button>
                    </>
                )}

                {error && (
                    <div
                        style={{
                            marginTop: 14,
                            padding: "0.7rem 0.9rem",
                            background: "rgba(220,38,38,0.06)",
                            border: "1px solid rgba(220,38,38,0.2)",
                            color: "#b91c1c",
                            borderRadius: 10,
                            fontSize: "0.88rem",
                        }}
                    >
                        {error}
                    </div>
                )}

                <div
                    style={{
                        marginTop: 22,
                        padding: "0.75rem 0.9rem",
                        background: "var(--surface-muted)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: 10,
                        fontSize: "0.78rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.55,
                    }}
                >
                    Admin access requires your phone number to be in <code style={{ fontFamily: "'JetBrains Mono', monospace" }}>admin_users</code> AND an SMS provider configured in the Supabase dashboard.
                </div>
            </div>
        </main>
    );
}
