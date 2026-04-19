import Navbar from "@/components/Navbar";
import BookAuditSection from "@/components/BookAuditSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata = {
    title: "Book a Free Audit — Autometa AI",
    description:
        "Book a free real estate systems audit with Autometa AI. 30-minute strategy call, same-day response, no obligation.",
};

export default function BookAuditPage() {
    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "hidden" }}>
            <Navbar />
            <div style={{ paddingTop: "2.5rem" }}>
                <BookAuditSection />
            </div>
            <Footer />
            <FloatingContact />
        </main>
    );
}
