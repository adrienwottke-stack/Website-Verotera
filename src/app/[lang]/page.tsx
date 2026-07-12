import type { Metadata } from "next";
import { hasLang, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueStatement from "@/components/ValueStatement";
import WhyVerotera from "@/components/WhyVerotera";
import AdvancedPackaging from "@/components/AdvancedPackaging";
import ElectrifiedWorld from "@/components/ElectrifiedWorld";
import ElectrifiedWorldCards from "@/components/ElectrifiedWorldCards";
import EfficiencyDemand from "@/components/EfficiencyDemand";
import WbgModuleSolutions from "@/components/WbgModuleSolutions";
import FeaturesAgenticAI from "@/components/FeaturesAgenticAI";
import AgenticEcosystem from "@/components/AgenticEcosystem";
import StatsSection from "@/components/StatsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const META: Record<Lang, PageMeta> = {
  de: {
    title: "VEROTERA | Next-Gen Leistungselektronik & KI-Systeme",
    description:
      "VEROTERA wandelt Wide-Bandgap (SiC/GaN) Halbleiterchips in hocheffiziente Leistungsmodule und komplett zertifizierte Systeme um.",
    keywords: [
      "Leistungselektronik",
      "Wide-Bandgap",
      "Halbleiter",
      "SiC",
      "GaN",
      "Netzteile",
      "KI-Rechenzentren",
      "Elektromobilität",
      "Grüner Wasserstoff",
    ],
  },
  en: {
    title: "VEROTERA | Next-Gen Power Electronics & AI Systems",
    description:
      "VEROTERA turns wide-bandgap (SiC/GaN) semiconductor chips into highly efficient power modules and fully certified systems.",
    keywords: [
      "Power electronics",
      "Wide bandgap",
      "Semiconductors",
      "SiC",
      "GaN",
      "Power supplies",
      "AI data centers",
      "E-mobility",
      "Green hydrogen",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/", META[l]);
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-brand-navy antialiased selection:bg-brand-cyan/30 selection:text-brand-cyan">
      {/* Dynamic Sticky Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* Slide 2 — Hero */}
        <Hero />

        {/* All content below scrolls over the sticky Hero */}
        <div className="relative z-10">
          {/* Slide 3 — Advanced Semiconductors. Applied Engineering. Sustainable Impact. */}
          <ValueStatement />

          {/* Slide 4+5 — Your Goal / Collaborative Intelligence + 4 Value Cards */}
          <WhyVerotera />

          {/* Slide 6 — Advanced Packaging */}
          <AdvancedPackaging />

          {/* Slide 7 — The Electrified World (+40%) */}
          <ElectrifiedWorld />

          {/* Slide 8 — Electrified World detail cards */}
          <ElectrifiedWorldCards />

          {/* Slide 9 — Effizienzanforderung (+300 / -60 / -40) */}
          <EfficiencyDemand />

          {/* Slide 10 — Hocheffiziente WBG Leistungsmodullösungen */}
          <WbgModuleSolutions />

          {/* Slide 11 — Agentische KI / V-Modell */}
          <FeaturesAgenticAI />

          {/* Slide 12 — Agentic AI Ecosystem Architecture */}
          <AgenticEcosystem />

          {/* Slide 13 — Stats + Founder */}
          <StatsSection />

          {/* Slide 14 — Kontakt */}
          <ContactSection />
        </div>
      </main>

      {/* Slide 15 — Corporate Footer */}
      <Footer />
    </div>
  );
}
