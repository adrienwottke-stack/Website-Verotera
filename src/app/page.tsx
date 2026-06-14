import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExplainSection from "@/components/ExplainSection";
import Industries from "@/components/Industries";
import Solutions from "@/components/Solutions";
import WhyVerotera from "@/components/WhyVerotera";
import FeaturesAgenticAI from "@/components/FeaturesAgenticAI";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import NewsInsights from "@/components/NewsInsights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan">
      {/* Dynamic Sticky Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Hero Section (CSV: Hero) */}
        <Hero />

        {/* 10-Second Flowchart Key Explainer */}
        <ExplainSection />

        {/* Benefits Section (CSV: Your Goals. Our Tech. One Vision.) */}
        <WhyVerotera />

        {/* Technology Section (CSV: GaN / SiC / Smart PDU / Automotive) */}
        <Solutions />

        {/* Industries / Applications proof */}
        <Industries />

        {/* Features Section (CSV: Agentische KI im Systems Engineering) */}
        <FeaturesAgenticAI />

        {/* Stats, Patented Metrics & Founder Feature */}
        <StatsSection />

        {/* Contact Form — primary conversion block */}
        <ContactSection />

        {/* News & Insights Section (CSV: News, last before footer) */}
        <NewsInsights />
      </main>

      {/* Corporate Footer with statutory legal segments */}
      <Footer />
    </div>
  );
}
