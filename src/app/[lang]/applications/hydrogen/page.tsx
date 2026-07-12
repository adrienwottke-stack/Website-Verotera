import type { Metadata } from "next";
import Image from "next/image";
import { Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import ContactSection from "@/components/ContactSection";
import { hasLang, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    s1Teaser: string;
    s1Headline: string;
    s1Body: string;
    s1ImageAlt: string;
    pubEyebrow: string;
    pubTitle: string;
    pubBody: string;
    pubMeta: string;
  }
> = {
  de: {
    heroEyebrow: "Grüner Wasserstoff",
    heroTitle: "Effiziente Leistungselektronik aus NRW für grünen Wasserstoff",
    heroSubtitle: "Wide-Bandgap-Halbleiter steigern Effizienz und Leistungsdichte.",
    s1Teaser: "Eine Schlüsseltechnologie in der DC-Leistungskonvertierung für Elektrolyseure",
    s1Headline: "Wide-Bandgap-Halbleiter von VEROTERA",
    s1Body:
      "Die Effizienz der grünen Wasserstoffproduktion hängt maßgeblich von der Leistungselektronik ab. Wide-Bandgap-Halbleiter steigern Effizienz und Leistungsdichte – und bilden damit die technologische Grundlage für skalierbare Elektrolysesysteme.",
    s1ImageAlt: "AEM-Elektrolyseur in Container-Bauweise für die grüne Wasserstoffproduktion",
    pubEyebrow: "Fachbeitrag",
    pubTitle: "„Effiziente Leistungselektronik aus NRW für grünen Wasserstoff“",
    pubBody:
      "Wie Wide-Bandgap-Halbleiter Wirkungsgrad und Leistungsdichte in der Elektrolyse erhöhen: VEROTERA im NMWP-Magazin „Wasserstoff für den Strukturwandel in NRW – Technologien, Anwendungen und Wertschöpfung“.",
    pubMeta: "NMWP-Magazin · Heft 17 · Cluster NMWP.NRW",
  },
  en: {
    heroEyebrow: "Green Hydrogen",
    heroTitle: "Efficient power electronics from NRW for green hydrogen",
    heroSubtitle: "Wide-bandgap semiconductors increase efficiency and power density.",
    s1Teaser: "A key technology in DC power conversion for electrolyzers",
    s1Headline: "Wide-bandgap semiconductors from VEROTERA",
    s1Body:
      "The efficiency of green hydrogen production hinges on power electronics. Wide-bandgap semiconductors increase efficiency and power density — forming the technological foundation for scalable electrolysis systems.",
    s1ImageAlt: "Containerized AEM electrolyzer for green hydrogen production",
    pubEyebrow: "Featured Article",
    pubTitle: "“Efficient power electronics from NRW for green hydrogen”",
    pubBody:
      "How wide-bandgap semiconductors raise efficiency and power density in electrolysis: VEROTERA in the NMWP magazine “Wasserstoff für den Strukturwandel in NRW” (Hydrogen for structural change in NRW — technologies, applications and value creation).",
    pubMeta: "NMWP magazine · Issue 17 · NMWP.NRW cluster",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Efficient Power Electronics for Green Hydrogen",
    description:
      "The efficiency of green hydrogen production hinges on power electronics. Wide-bandgap semiconductors increase efficiency and power density.",
    keywords: [
      "power electronics",
      "green hydrogen",
      "electrolyzers",
      "DC power conversion",
      "wide-bandgap semiconductors",
    ],
  },
  en: {
    title: "Efficient Power Electronics for Green Hydrogen",
    description:
      "The efficiency of green hydrogen production hinges on power electronics. Wide-bandgap semiconductors increase efficiency and power density.",
    keywords: [
      "power electronics",
      "green hydrogen",
      "electrolyzers",
      "DC power conversion",
      "wide-bandgap semiconductors",
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
  return buildMetadata(l, "/applications/hydrogen", META[l]);
}

export default async function HydrogenPage({
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
        {/* Folie 38 — Deckblatt */}
        <PageHero
          eyebrow={t.heroEyebrow}
          icon={Droplets}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Folie 39 — Pattern B: Split Bild ↔ Text */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="blue" size={460} opacity={0.05} />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Sektions-Header: Teaser → Headline → Body */}
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.s1Teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.s1Headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.s1Body}
              </p>
            </Reveal>

            {/* Split: AEM-Elektrolyseur links ↔ Fachbeitrag rechts */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-6">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hydrogen-aem-electrolyzer.jpg"
                      alt={t.s1ImageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40">
                  {t.pubEyebrow}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mt-2 mb-6">
                  {t.pubTitle}
                </h3>
                <p className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed mb-4">
                  {t.pubBody}
                </p>
                <p className="font-sans text-sm text-brand-navy/40">{t.pubMeta}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Schluss-CTA */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
