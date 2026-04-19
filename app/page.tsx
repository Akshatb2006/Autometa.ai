import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BookAuditSection from "@/components/BookAuditSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceFlowSection from "@/components/ServiceFlowSection";
import ResultsSection from "@/components/ResultsSection";
import CourseVideoSection from "@/components/CourseVideoSection";
import ResourceHubTeaser from "@/components/ResourceHubTeaser";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import LeadCapturePopup from "@/components/LeadCapturePopup";
import EntryVideoPopup from "@/components/EntryVideoPopup";

export default function Home() {
    return (
        <main style={{ minHeight: "100vh", background: "var(--bg)", color: "var(--text)", overflowX: "clip", position: "relative" }}>
            <div style={{ position: "relative", zIndex: 1 }}>
                <Navbar />
                <HeroSection />
                <BookAuditSection />
                <ProblemSection />
                <ServicesSection />
                <ServiceFlowSection />
                <ResultsSection />
                <CourseVideoSection />
                <ResourceHubTeaser />
                <CTASection />
                <Footer />
            </div>
            <FloatingContact />
            <LeadCapturePopup />
            <EntryVideoPopup />
        </main>
    );
}
