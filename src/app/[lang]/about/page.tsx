import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Car,
  CheckCircle2,
  Cog,
  Compass,
  Factory,
  Layers,
  Leaf,
  MapPin,
  Network,
  Rocket,
  Server,
  Sun,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import ContactSection from "@/components/ContactSection";
import AboutLeadership from "@/components/AboutLeadership";
import { hasLang, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const PILLAR_ICONS = [Layers, Cog, Network, Rocket];
const VALUE_ICONS = [Users, Award, Leaf];
const IMPACT_ICONS = [Server, Car, Sun, Factory];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    s1Teaser: string;
    s1Title: string;
    s1SubEyebrow: string;
    s1SubTitle: string;
    s1P1: string;
    s1P2: string;
    s1ImageAlt: string;
    valuesTeaser: string;
    valuesTitle: string;
    pillars: { title: string; text: string }[];
    values: { title: string; subtag: string; text: string }[];
    visionTeaser: string;
    visionTitle: string;
    visionBody: string;
    visionClosing: string;
    missionTeaser: string;
    missionTitle: string;
    missionBody: string;
    goalsLabel: string;
    goals: string[];
    missionImageAlt: string;
    whyTeaser: string;
    whyTitle: string;
    whyBody: string;
    whyClosing: string;
    impactTeaser: string;
    impactTitle: string;
    impactAreas: { title: string; text: string }[];
    rdTitle: string;
    rdBody: string;
    rdBadge: string;
  }
> = {
  de: {
    heroEyebrow: "Wide-Bandgap at the Core",
    heroTitle: "About VEROTERA",
    heroSubtitle:
      "VEROTERA entwickelt Wide-Bandgap-Halbleitertechnologien mit tiefem Systemverständnis – für eine effizientere, nachhaltigere Welt. Durch die Verbindung von SiC/GaN-Technologien, innovativem Packaging und agentischer KI schaffen wir eine Brücke zwischen technologischer Komplexität und industrieller Umsetzung.",
    s1Teaser: "Collaborative Intelligence",
    s1Title: "Innovative Wide-Bandgap Halbleitermodule",
    s1SubEyebrow: "Applikationen",
    s1SubTitle: "Powered by People and Precision – Connecting Global Expertise",
    s1P1:
      "VEROTERAs fortschrittliche WBG-Leistungsmodule sind darauf ausgelegt, höchste Leistung zu liefern – für intelligentere und effizientere Systeme in KI-Rechenzentren, E-Mobilität, erneuerbaren Energien und der industriellen Automatisierung.",
    s1P2:
      "Wir gestalten die Zukunft des Engineerings durch intelligente Zusammenarbeit zwischen Menschen, Systemen und künstlicher Intelligenz – mit adaptiven, resilienten und nachhaltigen Lösungen, die mit ihrer Umgebung wachsen.",
    s1ImageAlt: "Wide-Bandgap SiC-Leistungsmodul für fortschrittliche Leistungselektronik",
    valuesTeaser: "Unsere Werte",
    valuesTitle: "Die WBG-Halbleiterrevolution gestaltet eine nachhaltige Zukunft",
    pillars: [
      { title: "Full Stack", text: "Von der Bauelemente-Physik bis zum Gesamtsystem." },
      { title: "System-Level", text: "Tiefes Verständnis realer Anwendungsanforderungen." },
      { title: "Industry Bridge", text: "Wir verbinden Nachfrage mit Innovation." },
      { title: "Fast Execution", text: "Beschleunigte Entwicklungszyklen und Validierung." },
    ],
    values: [
      {
        title: "Collaborative Intelligence",
        subtag: "Unser Arbeitsansatz",
        text: "Gemeinsames Problemlösen, das menschliche Expertise durch funktionsübergreifende Teams und vertrauensvolle Partnerschaften bereichert.",
      },
      {
        title: "Engineering Excellence",
        subtag: "Unser Antrieb",
        text: "Zuverlässige Lösungen durch Transparenz, Integrität und validiertes Engineering.",
      },
      {
        title: "Sustainability",
        subtag: "Unsere Verantwortung",
        text: "Technologien entwickeln, die eine dekarbonisierte, resiliente Zukunft aktiv ermöglichen.",
      },
    ],
    visionTeaser: "Unsere Vision",
    visionTitle:
      "Ein globaler Deep-Tech-Enabler für Wide-Bandgap-Leistungselektronik und agentische KI-gestützte Engineering-Systeme",
    visionBody:
      "Wir wollen fortschrittliche Halbleitertechnologien in reale, skalierbare und zertifizierbare Anwendungen überführen. Wide-Bandgap-Technologien sehen wir als Kernbaustein für eine effizientere, resilientere und elektrifizierte industrielle Zukunft.",
    visionClosing:
      "Engineering Excellence Driven by Agentic AI – unser Anspruch, technologische Tiefe mit intelligent orchestrierten Engineering-Prozessen zu verbinden.",
    missionTeaser: "Unsere Mission",
    missionTitle: "Komplexe Entwicklungsaufgaben schneller, nachvollziehbarer und systematischer lösen",
    missionBody:
      "VEROTERA verbindet SiC- und GaN-Technologien, innovatives Packaging und eine Agentic AI Ecosystem Architecture. Cognitive Orchestration bildet dabei den methodischen Kern: Wissen, Expertenagenten, Engineering-Workflows und Entscheidungslogik werden in einer kontrollierten Architektur zusammengeführt.",
    goalsLabel: "Unsere Ziele",
    goals: [
      "Leistungsdichte erhöhen und Bauraum auf Systemebene reduzieren.",
      "Wirkungsgrad steigern und thermische Verlustleistung minimieren.",
      "Zuverlässigkeit, Nachvollziehbarkeit und Zertifizierbarkeit von WBG-Lösungen stärken.",
      "Entwicklungszyklen durch agentische KI, strukturierte Wissensmodelle und Human-in-the-Loop-Prozesse beschleunigen.",
      "Europäische und globale Wertschöpfung in kritischen Elektrifizierungsanwendungen unterstützen.",
    ],
    missionImageAlt: "Agentic AI Ecosystem – KI-gestütztes Systems Engineering bei VEROTERA",
    whyTeaser: "Warum es relevant ist",
    whyTitle: "Integration entscheidet über die nächste Phase der Elektrifizierung",
    whyBody:
      "Die nächste Phase der Elektrifizierung wird nicht allein durch bessere Halbleiter entschieden, sondern durch deren erfolgreiche Integration in leistungsfähige Systeme. AI Data Centers, E-Mobility, Renewable Energy und Industrial Electrification erhöhen die Anforderungen an Effizienz, Kompaktheit, thermische Beherrschbarkeit und Verfügbarkeit.",
    whyClosing:
      "Wide-Bandgap-Technologien sind dafür ein zentraler Enabler – sie benötigen aber tiefes Packaging-, Applikations- und Systemverständnis.",
    impactTeaser: "Wo wir Wirkung erzeugen",
    impactTitle: "Anwendungsfelder & Systemnutzen",
    impactAreas: [
      {
        title: "AI Data Centers",
        text: "Kompakte und effiziente Stromversorgungsarchitekturen für Hochleistungsrechenzentren.",
      },
      {
        title: "E-Mobility",
        text: "Robuste WBG-Leistungselektronik für elektrische Antriebs- und Ladeinfrastrukturen.",
      },
      {
        title: "Renewable Energy",
        text: "Effiziente Umrichterlösungen für Wind, Solar und Energiespeicher.",
      },
      {
        title: "Industrial Electrification",
        text: "Höhere Leistungsdichte und Zuverlässigkeit für die industrielle Automatisierung.",
      },
    ],
    rdTitle: "R&D-Center Meerbusch (NRW), Deutschland",
    rdBody:
      "Im Hightech-Korridor Deutschlands – Entwicklung und Verifikation von Leistungselektronik der nächsten Generation.",
    rdBadge: "Strategischer EU-Hub",
  },
  en: {
    heroEyebrow: "Wide-Bandgap at the Core",
    heroTitle: "About VEROTERA",
    heroSubtitle:
      "VEROTERA develops wide-bandgap semiconductor technologies with deep system understanding — for a more efficient, more sustainable world. By combining SiC/GaN technologies, innovative packaging and agentic AI, we bridge technological complexity and industrial implementation.",
    s1Teaser: "Collaborative Intelligence",
    s1Title: "Innovative Wide-Bandgap Semiconductor Modules",
    s1SubEyebrow: "Applications",
    s1SubTitle: "Powered by People and Precision — Connecting Global Expertise",
    s1P1:
      "VEROTERA's advanced WBG power modules are engineered to deliver peak performance — for smarter, more efficient systems in AI data centers, e-mobility, renewable energy and industrial automation.",
    s1P2:
      "We shape the future of engineering through intelligent collaboration between people, systems and artificial intelligence — with adaptive, resilient and sustainable solutions that grow with their environment.",
    s1ImageAlt: "Wide-bandgap semiconductor SiC power module for advanced power electronics",
    valuesTeaser: "Our Values",
    valuesTitle: "The WBG semiconductor revolution is shaping a sustainable future",
    pillars: [
      { title: "Full Stack", text: "From device physics to the complete system." },
      { title: "System-Level", text: "Deep understanding of real application requirements." },
      { title: "Industry Bridge", text: "We connect demand with innovation." },
      { title: "Fast Execution", text: "Accelerated development cycles and validation." },
    ],
    values: [
      {
        title: "Collaborative Intelligence",
        subtag: "How we work",
        text: "Collaborative problem-solving that enriches human expertise through cross-functional teams and trusted partnerships.",
      },
      {
        title: "Engineering Excellence",
        subtag: "What drives us",
        text: "Reliable solutions through transparency, integrity and validated engineering.",
      },
      {
        title: "Sustainability",
        subtag: "Our responsibility",
        text: "Developing technologies that actively enable a decarbonized, resilient future.",
      },
    ],
    visionTeaser: "Our Vision",
    visionTitle:
      "A global deep-tech enabler for wide-bandgap power electronics and agentic AI-assisted engineering systems",
    visionBody:
      "We aim to translate advanced semiconductor technologies into real, scalable and certifiable applications. We see wide-bandgap technologies as a core foundation for a more efficient, resilient and electrified industrial future.",
    visionClosing:
      "Engineering Excellence Driven by Agentic AI — our ambition to combine technological depth with intelligently orchestrated engineering processes.",
    missionTeaser: "Our Mission",
    missionTitle: "Solving complex development tasks faster, more systematically and with higher traceability",
    missionBody:
      "VEROTERA combines SiC and GaN technologies, innovative packaging and an Agentic AI Ecosystem Architecture. Cognitive Orchestration forms the methodological core: knowledge, expert agents, engineering workflows and decision logic are brought together within a controlled architecture.",
    goalsLabel: "Our Objectives",
    goals: [
      "Increase power density and reduce system-level space requirements.",
      "Improve efficiency and minimize thermal losses.",
      "Strengthen reliability, traceability and certifiability of WBG-based solutions.",
      "Accelerate development cycles through agentic AI, structured knowledge models and human-in-the-loop processes.",
      "Support European and global value creation in critical electrification applications.",
    ],
    missionImageAlt: "Agentic AI ecosystem — AI-assisted systems engineering at VEROTERA",
    whyTeaser: "Why It Matters",
    whyTitle: "Integration decides the next phase of electrification",
    whyBody:
      "The next phase of electrification will not be defined by better semiconductors alone, but by their successful integration into high-performance systems. AI data centers, e-mobility, renewable energy and industrial electrification are raising the bar for efficiency, compactness, thermal control and availability.",
    whyClosing:
      "Wide-bandgap technologies are a central enabler — but they require deep packaging, application and system expertise.",
    impactTeaser: "Where We Create Impact",
    impactTitle: "Application Fields & System Benefits",
    impactAreas: [
      {
        title: "AI Data Centers",
        text: "Compact and efficient power supply architectures for high-performance data centers.",
      },
      {
        title: "E-Mobility",
        text: "Robust WBG power electronics for electric drivetrain and charging infrastructure.",
      },
      {
        title: "Renewable Energy",
        text: "Efficient converter solutions for wind, solar and energy storage.",
      },
      {
        title: "Industrial Electrification",
        text: "Higher power density and reliability for industrial automation.",
      },
    ],
    rdTitle: "R&D Center Meerbusch (NRW), Germany",
    rdBody:
      "Located in Germany's high-tech corridor — developing and verifying next-generation power electronics.",
    rdBadge: "Strategic EU hub",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "About Us – VEROTERA Wide-Bandgap Semiconductor Modules",
    description:
      "VEROTERA's advanced WBG power modules deliver unmatched performance for smarter, more efficient systems in e-mobility, renewable energy and data centers.",
    keywords: ["Über VEROTERA", "Aly Mashaly", "Vision", "Mission", "WBG Halbleiter"],
  },
  en: {
    title: "About Us – VEROTERA Wide-Bandgap Semiconductor Modules",
    description:
      "VEROTERA's advanced WBG power modules deliver unmatched performance for smarter, more efficient systems in e-mobility, renewable energy and data centers.",
    keywords: ["About VEROTERA", "Aly Mashaly", "Vision", "Mission", "WBG semiconductors"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/about", META[l]);
}

export default async function AboutPage({
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
          icon={Compass}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Slide 40 — Innovative WBG modules (Pattern B: split image/text) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.045} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.s1Teaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.s1Title}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-6">
                <div className="relative min-h-[260px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm">
                  <Image
                    src="/images/power-module-sic.png"
                    alt={t.s1ImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 block">
                      {t.s1SubEyebrow}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight">
                      {t.s1SubTitle}
                    </h3>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed">
                    {t.s1P1}
                  </p>
                  <p className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed">
                    {t.s1P2}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Slide 41 — Values (Pattern C: pillar row + value cards) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.valuesTeaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.valuesTitle}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.pillars.map((pillar, i) => {
                const Icon = PILLAR_ICONS[i];
                return (
                  <Reveal key={pillar.title} delay={i * 0.08}>
                    <div className="p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-base font-bold text-brand-navy leading-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{pillar.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {t.values.map((value, i) => {
                const Icon = VALUE_ICONS[i];
                return (
                  <Reveal key={value.title} delay={0.12 + i * 0.12}>
                    <div className="p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-base font-bold text-brand-navy leading-tight">
                          {value.title}
                        </h3>
                      </div>
                      <span className="text-[9px] font-bold text-brand-navy tracking-wider uppercase mb-2 block">
                        {value.subtag}
                      </span>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{value.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision (Pattern A: statement, contrast section) */}
        <section className="relative py-24 sm:py-32 bg-surface-light border-y border-brand-navy/8 overflow-hidden">
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.visionTeaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.visionTitle}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.visionBody}
              </p>
              <p className="font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed max-w-3xl mx-auto mt-6">
                {t.visionClosing}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Mission + Objectives (Pattern G: navy emphasis split) */}
        <section className="relative py-20 sm:py-28 bg-brand-navy overflow-hidden">
          <BrandWatermark position="bottom-left" tint="light" size={460} opacity={0.06} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.missionTeaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6">
                {t.missionTitle}
              </h2>
              <p className="font-sans text-base sm:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
                {t.missionBody}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-brand-cyan mb-5">
                  {t.goalsLabel}
                </h3>
                <ul className="space-y-3 list-none m-0 p-0">
                  {t.goals.map((goal) => (
                    <li key={goal} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-white/80">{goal}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6">
                <div className="relative min-h-[260px] lg:min-h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-brand-navy-light shadow-lg">
                  <Image
                    src="/images/agentic-ai-system.png"
                    alt={t.missionImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why it matters (Pattern A: statement) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[440px] h-[440px] bg-brand-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.whyTeaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.whyTitle}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.whyBody}
              </p>
              <p className="font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed max-w-3xl mx-auto mt-6">
                {t.whyClosing}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Impact areas (Pattern C: icon card grid) */}
        <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.impactTeaser}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.impactTitle}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.impactAreas.map((area, i) => {
                const Icon = IMPACT_ICONS[i];
                return (
                  <Reveal key={area.title} delay={i * 0.08}>
                    <div className="p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-base font-bold text-brand-navy leading-tight">
                          {area.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{area.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Slides 42-43 — Leadership (Pattern I + credential groups) */}
        <AboutLeadership />

        {/* R&D location (carried over from the previous page version) */}
        <section className="py-16 bg-white border-t border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="p-6 sm:p-8 rounded-2xl border border-brand-navy/8 bg-white shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-brand-navy leading-tight mb-1">
                      {t.rdTitle}
                    </h3>
                    <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{t.rdBody}</p>
                  </div>
                </div>
                <span className="px-5 py-2 rounded-full border border-brand-navy/8 bg-surface-light text-xs text-brand-navy/55 font-semibold uppercase tracking-wider shrink-0">
                  {t.rdBadge}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
