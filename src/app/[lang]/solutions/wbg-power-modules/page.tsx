import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Cpu, Layers, Thermometer, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const CARD_ICONS = [Zap, Cpu, Thermometer, Layers];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    /* Sektion 1 — Folie 14 */
    s1Teaser: string;
    s1Title: string;
    s1Body: string;
    s1SubEyebrow: string;
    s1SplitTitle: string;
    s1Paragraphs: string[];
    s1Closing: string;
    s1ImageAlt: string;
    /* Sektion 2 — Folie 15 */
    s2Teaser: string;
    s2Title: string;
    s2SubEyebrow: string;
    s2SplitTitle: string;
    s2Body: string;
    s2ImageAlt: string;
    cards: { title: string; text: string }[];
    /* Sektion 3 — Folie 16 */
    s3SubEyebrow: string;
    s3Title: string;
    s3Body: string;
    s3SolutionsLabel: string;
    s3Bullets: string[];
    s3ImageAlt: string;
    /* Schluss-CTA — Folie 16 (Ende) */
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  }
> = {
  de: {
    heroEyebrow: "WBG-Leistungsmodule",
    heroTitle: "Hocheffiziente WBG Leistungsmodullösungen für eine nachhaltige Zukunft",
    heroSubtitle: "Vom Chip bis zum System – Technologiekompetenz für die elektrifizierte Welt.",

    s1Teaser: "Advanced Semiconductor Technologies",
    s1Title: "Innovative Wide-Bandgap-Halbleiterlösungen",
    s1Body:
      "VEROTERA steht für ein neues Verständnis von WBG-Halbleitertechnologie: präzise, systemdurchdacht und konsequent auf reale Anwendungen ausgerichtet. Unser Team vereint jahrelange Praxiserfahrung aus Wechselrichterentwicklung, Halbleiterdesign und Systemintegration – und denkt stets vom Gesamtsystem her.",
    s1SubEyebrow: "Wide-Bandgap at the Core",
    s1SplitTitle: "Die Brücke zwischen Nachfrage und Innovation",
    s1Paragraphs: [
      "Von fortschrittlichen WBG-Technologien über innovative Packaging-Lösungen bis hin zu hocheffizienten Gesamtsystemen – wir entwickeln Lösungen, die nicht nur technisch überzeugen, sondern in der Praxis den Unterschied machen.",
      "Diese einzigartige Positionierung ermöglicht es, Integrationskosten zu senken, Entwicklungszyklen zu beschleunigen und höhere Systemeffizienz zu liefern. Mit starken Branchennetzwerken und ausgewiesener Glaubwürdigkeit in der OEM- und Halbleiterwelt bauen wir die Brücke zwischen Nachfrage und Innovation – für eine schnelle Validierung, strategische Partnerschaften und eine zielgerichtete Markteinführung.",
    ],
    s1Closing:
      "VEROTERA entwickelt in Deutschland die Leistungshalbleiterlösungen, die Europa für die Elektrifizierung von Mobilität und Industrie braucht. SiC und GaN sind keine Importware – sie sind unsere Kerntechnologie: entwickelt hier, skaliert für Europa.",
    s1ImageAlt:
      "Halbleiter-Wafer in der Fertigung – Ausgangspunkt der WBG-Leistungselektronik",

    s2Teaser: "Innovative WBG-Halbleiterlösungen der nächsten Generation",
    s2Title: "Technologie- & Systempartner",
    s2SubEyebrow: "Advanced Semiconductor Technologies",
    s2SplitTitle: "Wide-Bandgap at the Core",
    s2Body:
      "Wir bündeln globales Fachwissen aus den Bereichen Leistungselektronik, WBG-Technologien und Systemanwendungen, um fundierte technische Entscheidungen zu ermöglichen. Unsere Lösungen verwandeln Komplexität in Klarheit – sie beschleunigen Innovationen und erschließen die kollektive Intelligenz von Entwicklungsabteilungen.",
    s2ImageAlt:
      "SiC- und GaN-Leistungsmodule im Elektrofahrzeug – Traktionswechselrichter, Onboard-Charger und DC-DC-Wandler",
    cards: [
      { title: "Höhere Effizienz", text: "Minimierte Schaltverluste für optimale Energieeinsparung." },
      { title: "Hohe Leistungsdichte", text: "Reduzierte Baugröße und geringeres Gewicht für platzkritische Systeme." },
      { title: "Überlegene thermische Performance", text: "Optimierte Wärmepfade für zuverlässigen Hochleistungsbetrieb." },
      { title: "Integrationsoptimiert", text: "Maßgeschneiderte Konfigurationen für nahtlosen Einsatz auf Systemebene." },
    ],

    s3SubEyebrow: "Advanced Semiconductor Technologies",
    s3Title: "Wide-Bandgap at the Core",
    s3Body:
      "Wir vernetzen globale Fachkompetenz aus Leistungselektronik, WBG-Technologien und Systemapplikationen – für fundierte Engineering-Entscheidungen mit hoher Sicherheit. Unsere Lösungen verwandeln Komplexität in Klarheit: Sie beschleunigen Innovation und erschließen die kollektive Intelligenz von Engineering-Organisationen.",
    s3SolutionsLabel: "Lösungen",
    s3Bullets: [
      "Tiefe WBG-Halbleitertechnologie Expertise",
      "Fortschrittliches Engineering für SiC/GaN-basierte Leistungssysteme",
      "Ausgeprägte Anwendungs- und Systemkompetenz",
      "Zugang zu erfahrenen R&D Experten aus vielfältigen Fachdisziplinen",
      "Neutrale, technologiegetriebene Beratungsrolle",
    ],
    s3ImageAlt:
      "Leistungselektronik für die E-Mobilität – WBG-Leistungsmodul, Elektrofahrzeug und elektrifizierter Bus",

    ctaTitle: "Ihr Projekt. Unsere Expertise. Ein Ziel.",
    ctaBody: "Von der ersten Anforderung bis zur fertigen Lösung – wir sind Ihr Technologiepartner.",
    ctaButton: "Projekt starten",
  },
  en: {
    heroEyebrow: "WBG Power Modules",
    heroTitle: "High-Efficiency Power Module Solutions for a Sustainable Future",
    heroSubtitle: "From chip to system — technology expertise for the electrified world.",

    s1Teaser: "Advanced Semiconductor Technologies",
    s1Title: "Innovative Wide-Bandgap Semiconductor Solutions",
    s1Body:
      "VEROTERA stands for a new understanding of WBG semiconductor technology: precise, system-minded and consistently focused on real applications. Our team combines years of hands-on experience in inverter development, semiconductor design and system integration — and always thinks from the complete system.",
    s1SubEyebrow: "Wide-Bandgap at the Core",
    s1SplitTitle: "Bridging Demand and Innovation",
    s1Paragraphs: [
      "From advanced WBG technologies and innovative packaging solutions to highly efficient complete systems — we develop solutions that are not only technically convincing, but make a real difference in practice.",
      "This unique positioning makes it possible to lower integration costs, accelerate development cycles and deliver higher system efficiency. With strong industry networks and proven credibility in the OEM and semiconductor world, we build the bridge between demand and innovation — for fast validation, strategic partnerships and a targeted market launch.",
    ],
    s1Closing:
      "VEROTERA develops in Germany the power semiconductor solutions Europe needs for the electrification of mobility and industry. SiC and GaN are not imported goods — they are our core technology: developed here, scaled for Europe.",
    s1ImageAlt:
      "Semiconductor wafer in fabrication — the starting point of WBG power electronics",

    s2Teaser: "Innovative next-generation WBG semiconductor solutions",
    s2Title: "Technology & System Partner",
    s2SubEyebrow: "Advanced Semiconductor Technologies",
    s2SplitTitle: "Wide-Bandgap at the Core",
    s2Body:
      "We connect global domain expertise across power electronics, WBG technologies, and system applications to enable high confidence engineering decisions. Our solutions turn complexity into clarity – accelerating innovation and unlocking the collective intelligence of engineering organizations.",
    s2ImageAlt:
      "SiC and GaN power modules in an electric vehicle — traction inverter, onboard charger and DC-DC converter",
    cards: [
      { title: "Higher Efficiency", text: "Minimized switching losses for optimal energy savings." },
      { title: "High Power Density", text: "Reduced size and weight for space-critical systems." },
      { title: "Superior Thermal Performance", text: "Optimized thermal paths for reliable high-power operation." },
      { title: "Integration-Optimized", text: "Tailored configurations for seamless system-level deployment." },
    ],

    s3SubEyebrow: "Advanced Semiconductor Technologies",
    s3Title: "Wide-Bandgap at the Core",
    s3Body:
      "We connect global expertise in power electronics, WBG technologies and system applications — for well-founded engineering decisions with high confidence. Our solutions turn complexity into clarity: they accelerate innovation and unlock the collective intelligence of engineering organizations.",
    s3SolutionsLabel: "Solutions",
    s3Bullets: [
      "Deep WBG semiconductor technology expertise",
      "Advanced engineering for SiC/GaN-based power systems",
      "Strong application and system competence",
      "Access to experienced R&D experts across many disciplines",
      "A neutral, technology-driven advisory role",
    ],
    s3ImageAlt:
      "Power electronics for e-mobility — WBG power module, electric car and electrified bus",

    ctaTitle: "Your Project. Our Expertise. One Goal.",
    ctaBody: "From the first requirement to the finished solution — we are your technology partner.",
    ctaButton: "Start your project",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Innovative Wide-Bandgap Semiconductor Solutions",
    description:
      "VEROTERA operates across the full stack – from chip physics to complete systems, designing technologies for the real needs of modern applications.",
    keywords: ["wide bandgap semiconductors", "strategic partnership", "innovation", "electrified world"],
  },
  en: {
    title: "Innovative Wide-Bandgap Semiconductor Solutions",
    description:
      "VEROTERA operates across the full stack – from chip physics to complete systems, designing technologies for the real needs of modern applications.",
    keywords: ["wide bandgap semiconductors", "strategic partnership", "innovation", "electrified world"],
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
      <Header />
      <main className="flex-grow">
        {/* Folie 14 (Deckblatt) — PageHero */}
        <PageHero
          eyebrow={t.heroEyebrow}
          icon={Cpu}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Sektion 1 — Folie 14 · Pattern B: Split Bild ↔ Text */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.045} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.s1Teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.s1Title}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.s1Body}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 mb-3 block">
                  {t.s1SubEyebrow}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-6">
                  {t.s1SplitTitle}
                </h3>
                {t.s1Paragraphs.map((paragraph, i) => (
                  <p key={i} className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
                <p className="font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed mt-6">
                  {t.s1Closing}
                </p>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-5">
                <div className="relative min-h-[260px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm">
                  <Image
                    src="/images/power-module-ai-fol-2.png"
                    alt={t.s1ImageAlt}
                    fill
                    className="object-cover object-left"
                    sizes="(max-width: 1024px) 300vw, 1280px"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Sektion 2 — Folie 15 · Header + Pattern B (Split) + Pattern C (Icon-Card-Grid) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.s2Teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.s2Title}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-6 lg:order-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 mb-3 block">
                  {t.s2SubEyebrow}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-6">
                  {t.s2SplitTitle}
                </h3>
                <p className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed">
                  {t.s2Body}
                </p>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6 lg:order-1">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-navy/8 bg-white shadow-sm p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/sic-gan-car.png"
                      alt={t.s2ImageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.cards.map((card, i) => {
                const Icon = CARD_ICONS[i];
                return (
                  <Reveal key={card.title} delay={i * 0.1} className="h-full">
                    <div className="group h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_4px_24px_rgba(16,166,226,0.12)] hover:-translate-y-0.5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-base font-bold text-brand-navy leading-tight group-hover:text-brand-cyan transition-colors">
                          {card.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sektion 3 — Folie 16 · Pattern G: Navy-Emphasis-Split */}
        <section className="relative py-20 sm:py-28 bg-brand-navy overflow-hidden">
          <BrandWatermark position="bottom-left" tint="light" size={460} opacity={0.06} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50 mb-3 block">
                  {t.s3SubEyebrow}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-6">
                  {t.s3Title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-8">
                  {t.s3Body}
                </p>

                <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                  {t.s3SolutionsLabel}
                </span>
                <ul className="space-y-3 list-none m-0 p-0">
                  {t.s3Bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-white/80">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-brand-navy-light shadow-lg">
                  <Image
                    src="/images/power-electronics-emobility-automotive.png"
                    alt={t.s3ImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Folie 16 (Ende) · Pattern H: Schluss-CTA */}
        <section className="py-16 bg-white border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy leading-tight mb-4">
                {t.ctaTitle}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed mb-8">
                {t.ctaBody}
              </p>
              <Link
                href={localePath(lang, "/contacts")}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
              >
                {t.ctaButton} <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
