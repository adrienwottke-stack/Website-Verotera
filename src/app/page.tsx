import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExplainSection from "@/components/ExplainSection";
import Industries from "@/components/Industries";
import Solutions from "@/components/Solutions";
import WhyVerotera from "@/components/WhyVerotera";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan">
      {/* Dynamic Sticky Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* 10-Second Flowchart Key Explainer */}
        <ExplainSection />

        {/* Industries Section */}
        <Industries />

        {/* 3 Pillars Solution Section */}
        <Solutions />

        {/* Why VEROTERA Core Advantage Section */}
        <WhyVerotera />

        {/* Stats, Patented Metrics & Founder Feature */}
        <StatsSection />

        {/* Contact Form with simulated API success feedback */}
        <ContactSection />
      </main>

      {/* Corporate Footer with statutory legal segments */}
      <Footer />
    </div>
  );
}
