import type { Metadata } from "next";
import Image from "next/image";
import { Server, BrainCircuit, Leaf, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import ContactSection from "@/components/ContactSection";
import PduPowerArchitecture from "@/components/PduPowerArchitecture";
import { hasLang, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const S2_ICONS = [BrainCircuit, Leaf, Zap];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    s1Teaser: string;
    s1Headline: string;
    s1SubEyebrow: string;
    s1Title: string;
    s1Body: string;
    s1ImageAlt: string;
    s2Teaser: string;
    s2Headline: string;
    s2Cards: { title: string; text: string[] }[];
    s2ImageAlt: string;
    s3Teaser: string;
    s3Headline: string;
    s3Body: string;
  }
> = {
  de: {
    heroEyebrow: "Stromverteilereinheit – Smart PDU",
    heroTitle: "AI Data Center – Rack Power Distribution Unit (PDU)",
    heroSubtitle: "800 VDC Architektur für die künftige Generation von KI-Rechenzentren.",
    s1Teaser: "Sustainable AI Data Center",
    s1Headline: "Wide-Bandgap SiC/GaN-Technologie gestaltet die Zukunft moderner KI-Rechenzentren.",
    s1SubEyebrow: "Lösungen",
    s1Title: "Full-GaN DC-DC Wandler",
    s1Body:
      "Der Full-GaN DC/DC-Wandler steht für eine Schlüsseltechnologie im Bereich der Stromverteilereinheit auf Rack-Ebene. Er ersetzt konventionelle Silizium-MOSFETs durch Galliumnitrid-Schaltelemente auf Primär- und Sekundärseite und erreicht damit die Effizienz- und Leistungsdichteziele, die zukünftige 800-VDC-Rack-Architekturen erfordern.",
    s1ImageAlt: "KI-Rechenzentrum auf Rack-Ebene mit Power Shelfs und Power Distribution Units",
    s2Teaser: "Integration von Wide-Bandgap-Halbleitern in das KI-Ökosystem",
    s2Headline: "GaN & 800 VDC Rack Power Architektur",
    s2Cards: [
      {
        title: "KI",
        text: [
          "Künstliche Intelligenz verändert nahezu alle Branchen in einem noch nie dagewesenen Tempo – und die Rechenzentren, die diese Revolution antreiben, wachsen ebenso rasant. Während das Training früherer, kleinerer KI-Modelle noch dem Jahresverbrauch von rund 100 bis 200 Haushalten entsprach, ziehen moderne KI-Trainingscluster heute dauerhaft 100 bis 300 Megawatt Leistung – das entspricht dem Strombedarf von zehntausenden Haushalten. Einzelne neue Rechenzentrumsprojekte erreichen sogar Leistungen von 300 bis 500 Megawatt, was dem Verbrauch mittelgroßer Städte mit mehreren hunderttausend Einwohnern gleichkommt.",
          "Da KI-Workloads in allen Sektoren zunehmen, wird der kumulierte Einfluss auf die globalen Energiesysteme immer deutlicher. Große Rechenzentrumsbetreiber sind für einen Großteil dieses Wachstums verantwortlich und investieren weltweit Milliardenbeträge in neue, KI-optimierte Infrastruktur. Prognosen gehen davon aus, dass der weltweite Stromverbrauch von Rechenzentren von 415 Terawattstunden im Jahr 2024 auf rund 945 Terawattstunden bis 2030 ansteigen wird – eine Verdopplung, die vor allem durch den Ausbau KI-spezifischer Rechenkapazitäten getrieben wird.",
        ],
      },
      {
        title: "Nachhaltige KI",
        text: [
          "Die zentrale Herausforderung ist nicht nur das schiere Ausmaß – sondern die Effizienz. In konventionellen KI-Rechenzentrumsarchitekturen durchläuft Energie mehrere Wandlungsstufen zwischen dem Versorgungsnetz und dem Prozessor, mit kumulierten Verlusten von 14 bis 18 Prozent. Bei Rack-Leistungsniveaus von nahezu einem Megawatt entspricht das Hunderten von Kilowatt verschwendeter Energie pro Rack – direkt übersetzt in CO₂-Emissionen und Kühlinfrastruktur.",
        ],
      },
      {
        title: "800 VDC Architektur",
        text: [
          "Der Übergang zur 800-VDC-Rack-Verteilung verändert diese Gleichung grundlegend. Durch die Bereitstellung von Hochspannungsgleichstrom von der Anlagenebene bis zum Rack werden die Wandlungsstufen von vier oder fünf auf drei reduziert – die Gesamtverluste sinken auf rund 5 bis 6 Prozent. Im Mittelpunkt dieser Architektur steht die Smart PDU – ein Full-GaN DC/DC-Wandler mit einem Wirkungsgrad von 98 % und mehr, speziell entwickelt für 800-VDC-Rack-Infrastrukturen und darauf ausgelegt, hochdichte KI-Rechenleistung technisch realisierbar und energetisch verantwortungsvoll zu machen.",
        ],
      },
    ],
    s2ImageAlt: "KI-Rechenzentrum-Infrastruktur – Stromversorgungskette vom Transformator bis zum Compute Rack",
    s3Teaser: "800 VDC → 54/48 VDC → Point-of-Load",
    s3Headline: "Vom Utility Grid bis zum Compute Rack Level",
    s3Body:
      "Der Leistungspfad der 800-VDC-Architektur über alle drei Ebenen: vom Versorgungsnetz über das Facility Level bis zur Smart PDU im Compute Rack.",
  },
  en: {
    heroEyebrow: "Rack Power Distribution – Smart PDU",
    heroTitle: "AI Data Center – Rack Power Distribution Unit (PDU)",
    heroSubtitle: "800 VDC architecture for the next generation of AI data centers.",
    s1Teaser: "Sustainable AI Data Center",
    s1Headline: "Wide-bandgap SiC/GaN technology is shaping the future of modern AI data centers.",
    s1SubEyebrow: "Solutions",
    s1Title: "Full-GaN DC-DC Converter",
    s1Body:
      "The Full-GaN DC/DC converter represents a key enabling technology for rack-level power distribution. It replaces conventional silicon MOSFETs with gallium nitride switches on both the primary and secondary side — achieving the efficiency and power-density targets that future 800 VDC rack architectures demand.",
    s1ImageAlt: "AI data center at rack level with power shelves and power distribution units",
    s2Teaser: "Integrating wide-bandgap semiconductors into the AI ecosystem",
    s2Headline: "GaN & 800 VDC Rack Power Architecture",
    s2Cards: [
      {
        title: "AI",
        text: [
          "Artificial intelligence is transforming nearly every industry at an unprecedented pace — and the data centers powering this revolution are growing just as rapidly. Where training earlier, smaller AI models equated to the annual consumption of roughly 100 to 200 households, today's AI training clusters draw 100 to 300 megawatts continuously — the electricity demand of tens of thousands of households. Individual new data center projects even reach 300 to 500 megawatts, comparable to the consumption of mid-sized cities with several hundred thousand inhabitants.",
          "As AI workloads increase across all sectors, the cumulative impact on global energy systems becomes ever more apparent. Large data center operators account for much of this growth, investing billions worldwide in new, AI-optimized infrastructure. Projections indicate that global data center electricity consumption will rise from 415 terawatt-hours in 2024 to around 945 terawatt-hours by 2030 — a doubling driven above all by the build-out of AI-specific compute capacity.",
        ],
      },
      {
        title: "Sustainable AI",
        text: [
          "The central challenge is not just sheer scale — it is efficiency. In conventional AI data center architectures, energy passes through multiple conversion stages between the utility grid and the processor, with cumulative losses of 14 to 18 percent. At rack power levels approaching one megawatt, that equates to hundreds of kilowatts of wasted energy per rack — translating directly into CO₂ emissions and cooling infrastructure.",
        ],
      },
      {
        title: "800 VDC Architecture",
        text: [
          "The transition to 800 VDC rack distribution fundamentally changes this equation. By delivering high-voltage direct current from the facility level to the rack, conversion stages are reduced from four or five to three — total losses fall to around 5 to 6 percent. At the heart of this architecture is the Smart PDU — a Full-GaN DC/DC converter with 98%+ efficiency, purpose-built for 800 VDC rack infrastructures and designed to make high-density AI compute technically feasible and energetically responsible.",
        ],
      },
    ],
    s2ImageAlt: "AI data center infrastructure — power chain from transformer to compute rack",
    s3Teaser: "800 VDC → 54/48 VDC → Point of Load",
    s3Headline: "From the utility grid to the compute rack level",
    s3Body:
      "The power path of the 800 VDC architecture across all three levels: from the utility grid through the facility level to the Smart PDU in the compute rack.",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Wide-Bandgap Technology for the Future of AI Data Centers",
    description:
      "Der Full-GaN DC/DC-Wandler ist die Schlüsseltechnologie des Power Shelf: GaN ersetzt Silizium-MOSFETs in 800-VDC-Rack-Architekturen.",
    keywords: ["rack power distribution unit", "AI data center", "Full-GaN DC-DC Converter"],
  },
  en: {
    title: "Wide-Bandgap Technology for the Future of AI Data Centers",
    description:
      "The Full-GaN DC/DC converter is a key enabling technology for the Power Shelf, replacing silicon MOSFETs with Gallium Nitride (GaN) devices.",
    keywords: ["rack power distribution unit", "AI data center", "Full-GaN DC-DC converter"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/solutions/rack-power-distribution", META[l]);
}

export default async function RackPowerDistributionPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = hasLang(rawLang) ? rawLang : "de";
  const t = COPY[lang];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow={t.heroEyebrow}
          icon={Server}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Section 1 — Pattern B: Full-GaN DC-DC Wandler (Folie 17) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.s1Teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.s1Headline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 mb-2 block">
                  {t.s1SubEyebrow}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-6">
                  {t.s1Title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed">
                  {t.s1Body}
                </p>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6">
                <div className="relative min-h-[260px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm">
                  <Image
                    src="/images/ai-data-center-header-left.png"
                    alt={t.s1ImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 2 — Pattern C: GaN & 800 VDC Rack Power Architektur (Folien 18+19) */}
        <section className="relative py-24 sm:py-32 bg-surface-light border-y border-brand-navy/8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.s2Teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.s2Headline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.s2Cards.map((card, i) => {
                const Icon = S2_ICONS[i];
                return (
                  <Reveal key={card.title} delay={i * 0.12} className="h-full">
                    <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-base font-bold text-brand-navy leading-tight">
                          {card.title}
                        </h3>
                      </div>
                      {card.text.map((p) => (
                        <p
                          key={p}
                          className="font-sans text-sm text-brand-navy/60 leading-relaxed mb-4 last:mb-0"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.12} className="mt-14">
              <div className="relative aspect-[16/10] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-brand-navy/8 bg-white shadow-sm flex items-center justify-center p-6">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/ai-data-center-infrastructure.png"
                    alt={t.s2ImageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Section 3 — Pattern J: 800-VDC-Leistungsarchitektur (Folie 20) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.045} />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.s3Teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.s3Headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.s3Body}
              </p>
            </Reveal>

            <PduPowerArchitecture />
          </div>
        </section>

        {/* Seitenabschluss — ContactSection (Standard-CTA) */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
