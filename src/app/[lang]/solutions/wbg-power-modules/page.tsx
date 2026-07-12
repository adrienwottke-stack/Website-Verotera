import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Cpu, ArrowRight, Zap, Thermometer, Layers, CheckCircle2, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const CARD_ICONS = [Zap, Cpu, Thermometer, Layers];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    s1Eyebrow: string;
    s1Title: string;
    s1Sub: string;
    s1Body: string;
    s1ImageAlt: string;
    cards: { title: string; text: string }[];
    s2Body: string;
    s2SolutionsTitle: string;
    s2Bullets: string[];
    s2ImageAlt: string;
    ctaBarTitle: string;
    ctaBarSub: string;
    ctaBarButton: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  }
> = {
  de: {
    heroEyebrow: "WBG-Leistungsmodule",
    heroTitle: "Hocheffiziente WBG Leistungsmodullösungen für eine nachhaltige Zukunft",
    heroSubtitle: "Vom Chip bis zum System – Technologiekompetenz für die elektrifizierte Welt.",
    s1Eyebrow: "Kooperation & Entwicklung",
    s1Title: "Technologie- & Systempartner",
    s1Sub: "Innovative WBG-Halbleiterlösungen der nächsten Generation",
    s1Body:
      "VEROTERA begleitet Kunden von den frühesten Entwicklungsphasen an und co-entwickelt WBG Leistungsmodullösungen der nächsten Generation. Wir agieren über den gesamten Stack und entwickeln Technologien, die den tatsächlichen Anforderungen und Randbedingungen moderner Applikationen entsprechen.",
    s1ImageAlt: "SiC & GaN Wide-Bandgap Semiconductor Applications in Vehicles",
    cards: [
      { title: "Höhere Effizienz", text: "Minimierte Schaltverluste für optimale Energieeinsparung." },
      { title: "Hohe Leistungsdichte", text: "Reduzierte Baugröße und geringeres Gewicht für platzkritische Systeme." },
      { title: "Überlegene thermische Performance", text: "Optimierte Wärmepfade für zuverlässigen Hochleistungsbetrieb." },
      { title: "Integrationsoptimiert", text: "Maßgeschneiderte Konfigurationen für nahtlosen Einsatz auf Systemebene." },
    ],
    s2Body:
      "Wir vernetzen globale Fachkompetenz aus Leistungselektronik, WBG-Technologien und Systemapplikationen – für fundierte Engineering-Entscheidungen mit hoher Sicherheit. Unsere Lösungen verwandeln Komplexität in Klarheit: Sie beschleunigen Innovation und erschließen die kollektive Intelligenz von Engineering-Organisationen.",
    s2SolutionsTitle: "Lösungen",
    s2Bullets: [
      "Tiefe WBG-Halbleitertechnologie Expertise",
      "Fortschrittliches Engineering für SiC/GaN-basierte Leistungssysteme",
      "Ausgeprägte Anwendungs- und Systemkompetenz",
      "Zugang zu erfahrenen R&D Experten aus vielfältigen Fachdisziplinen",
      "Neutrale, technologiegetriebene Beratungsrolle",
    ],
    s2ImageAlt: "Elektrifizierter Bus / Nutzfahrzeug Technologie",
    ctaBarTitle: "Ihr Projekt. Unsere Expertise. Ein Ziel.",
    ctaBarSub: "Von der ersten Anforderung bis zur fertigen Lösung – wir sind Ihr Technologiepartner.",
    ctaBarButton: "Projekt starten",
    ctaTitle: "Benötigen Sie Expertenunterstützung für Ihre WBG-Halbleiterlösung?",
    ctaBody:
      "Unsere Applikations- und Technologieexperten unterstützen Sie bei Auslegung, Validierung und Aufbau von SiC- und GaN-Lösungen, die exakt auf Ihre Systemanforderungen zugeschnitten sind.",
    ctaButton: "Jetzt starten",
  },
  en: {
    heroEyebrow: "WBG Power Modules",
    heroTitle: "Highly efficient WBG power module solutions for a sustainable future",
    heroSubtitle: "From chip to system — technology expertise for the electrified world.",
    s1Eyebrow: "Cooperation & Development",
    s1Title: "Technology & System Partner",
    s1Sub: "Innovative next-generation WBG semiconductor solutions",
    s1Body:
      "VEROTERA accompanies customers from the earliest development stages and co-develops next-generation WBG power module solutions. We operate across the full stack, engineering technologies that match the actual requirements and constraints of modern applications.",
    s1ImageAlt: "SiC & GaN wide-bandgap semiconductor applications in vehicles",
    cards: [
      { title: "Higher Efficiency", text: "Minimized switching losses for optimal energy savings." },
      { title: "High Power Density", text: "Reduced size and weight for space-critical systems." },
      { title: "Superior Thermal Performance", text: "Optimized thermal paths for reliable high-power operation." },
      { title: "Integration-Optimized", text: "Tailored configurations for seamless system-level deployment." },
    ],
    s2Body:
      "We connect global expertise in power electronics, WBG technologies and system applications — for well-founded engineering decisions with high confidence. Our solutions turn complexity into clarity: they accelerate innovation and unlock the collective intelligence of engineering organizations.",
    s2SolutionsTitle: "Solutions",
    s2Bullets: [
      "Deep WBG semiconductor technology expertise",
      "Advanced engineering for SiC/GaN-based power systems",
      "Strong application and system competence",
      "Access to experienced R&D experts across many disciplines",
      "A neutral, technology-driven advisory role",
    ],
    s2ImageAlt: "Electrified bus / commercial vehicle technology",
    ctaBarTitle: "Your Project. Our Expertise. One Goal.",
    ctaBarSub: "From the first requirement to the finished solution — we are your technology partner.",
    ctaBarButton: "Start your project",
    ctaTitle: "Need expert support for your WBG semiconductor solution?",
    ctaBody:
      "Our application and technology experts support you in designing, validating and building SiC and GaN solutions tailored exactly to your system requirements.",
    ctaButton: "Get started",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Innovative Wide-Bandgap Semiconductor Solutions",
    description:
      "VEROTERA operates across the full stack – from chip physics to complete systems, designing technologies for the real needs of modern applications.",
    keywords: ["wide bandgap semiconductors", "SiC modules", "GaN technology"],
  },
  en: {
    title: "Innovative Wide-Bandgap Semiconductor Solutions",
    description:
      "VEROTERA operates across the full stack – from chip physics to complete systems, designing technologies for the real needs of modern applications.",
    keywords: ["wide bandgap semiconductors", "SiC modules", "GaN technology"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/solutions/wbg-power-modules", META[l]);
}

export default async function WbgPowerModulesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = hasLang(rawLang) ? rawLang : "de";
  const t = COPY[lang];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />      <main className="flex-grow">
        <PageHero
          eyebrow={t.heroEyebrow}
          icon={Cpu}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Section 1: Technologie- & Systempartner */}
        <section className="py-20 sm:py-28 bg-white border-b border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">

            {/* Title & Subtitle block */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                {t.s1Eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy leading-tight">
                {t.s1Title}
              </h2>
              <p className="text-brand-navy/60 mt-3 text-base sm:text-lg">
                {t.s1Sub}
              </p>
            </div>

            {/* Split layout (Row 1) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
              <Reveal>
                <div className="text-left space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40">
                      Advanced Semiconductor Technologies
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
                      Wide-Bandgap at the Core
                    </h3>
                  </div>
                  <p className="font-sans text-base sm:text-lg text-brand-navy/65 leading-relaxed">
                    {t.s1Body}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/sic-gan-car.png"
                      alt={t.s1ImageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* 4 Cards Grid (Row 2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.cards.map((card, i) => {
                const Icon = CARD_ICONS[i];
                return (
                  <Reveal key={card.title} delay={0.1 + i * 0.05}>
                    <div className="glass-panel glass-panel-hover p-8 flex gap-5 items-start">
                      <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-display text-lg font-bold text-brand-navy mb-2">{card.title}</h4>
                        <p className="text-sm text-brand-navy/65 leading-relaxed">
                          {card.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </section>

        {/* Section 2: Ihr Projekt. Unsere Expertise. Ein Ziel. */}
        <section className="relative py-20 sm:py-28 bg-brand-navy overflow-hidden">
          {/* Decorative watermark */}
          <div
            aria-hidden="true"
            className="v-watermark absolute z-0 top-0 left-0"
            style={{
              width: 420,
              height: 420,
              opacity: 0.06,
              backgroundColor: "#ffffff",
              transform: "translate(-25%, -25%) scaleX(-1)",
            }}
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <Reveal>
                <div className="text-left space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                      Advanced Semiconductor Technologies
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      Wide-Bandgap at the Core
                    </h3>
                  </div>
                  <p className="font-sans text-base text-white/70 leading-relaxed">
                    {t.s2Body}
                  </p>

                  {/* Bullets */}
                  <div className="space-y-4 pt-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-brand-cyan">{t.s2SolutionsTitle}</h4>
                    <ul className="space-y-3 list-none p-0 m-0">
                      {t.s2Bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                          <span className="font-sans text-sm sm:text-base text-white/80">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-brand-navy-light shadow-lg flex items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/emobility-automotive.png"
                      alt={t.s2ImageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            {/* CTA bar below the split */}
            <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {t.ctaBarTitle}
                </h3>
                <p className="text-white/60 mt-2 text-base">
                  {t.ctaBarSub}
                </p>
              </div>
              <Link
                href={localePath(lang, "/contacts")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-cyan text-white font-semibold text-sm hover:bg-brand-cyan/90 transition-all shrink-0 focus:outline-none focus:ring-2 focus:ring-white/40"
              >
                {t.ctaBarButton} <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-brand-navy/60 mb-8">
              {t.ctaBody}
            </p>
            <Link
              href={localePath(lang, "/contacts")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
            >
              {t.ctaButton} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
