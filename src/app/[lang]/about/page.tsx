import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Eye, Rocket, Target, MapPin, Quote, CheckCircle2, Server, Car, Sun, Factory, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { hasLang, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const IMPACT_ICONS = [Server, Car, Sun, Factory, Droplets];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroSubtitle: string;
    visionTitle: string;
    visionBody: string;
    missionTitle: string;
    missionBody: string;
    objectivesTitle: string;
    objectives: string[];
    whyEyebrow: string;
    whyTitle: string;
    whyBody: string;
    impactEyebrow: string;
    impactTitle: string;
    impactAreas: { title: string; text: string }[];
    leadershipTitle: string;
    leadershipLead: string;
    founderQuote: string;
    experienceTitle: string;
    experienceBody: string;
    credentials: string[];
    rdTitle: string;
    rdBody: string;
    rdBadge: string;
  }
> = {
  de: {
    heroEyebrow: "Über VEROTERA",
    heroSubtitle:
      "VEROTERA entwickelt und ermöglicht fortschrittliche WBG-Leistungselektronik für anspruchsvolle Elektrifizierungsanwendungen. Durch die Verbindung von SiC/GaN-Technologien, innovativem Packaging und agentischer KI schlagen wir die Brücke zwischen technologischer Komplexität und industrieller Umsetzung.",
    visionTitle: "Unsere Vision",
    visionBody:
      "Unsere Vision ist es, ein globaler Deep-Tech-Enabler für Wide-Bandgap-Leistungselektronik und agentische KI-gestützte Engineering-Systeme zu werden. Wir sehen Wide-Bandgap-Technologien als Kernbaustein für eine effizientere, resilientere und elektrifizierte industrielle Zukunft.",
    missionTitle: "Unsere Mission",
    missionBody:
      "VEROTERA verbindet SiC- und GaN-Technologien, innovatives Packaging und eine Agentic AI Ecosystem Architecture. Ziel ist es, komplexe Entwicklungsaufgaben in der Leistungselektronik schneller, nachvollziehbarer und systematischer zu lösen. Cognitive Orchestration bildet dabei den methodischen Kern.",
    objectivesTitle: "Unsere Ziele",
    objectives: [
      "Leistungsdichte erhöhen und Bauraum auf Systemebene reduzieren.",
      "Wirkungsgrad steigern und thermische Verlustleistung minimieren.",
      "Zuverlässigkeit, Nachvollziehbarkeit und Zertifizierbarkeit von WBG-Lösungen stärken.",
      "Entwicklungszyklen durch agentische KI, strukturierte Wissensmodelle und Human-in-the-Loop-Prozesse beschleunigen.",
      "Europäische und globale Wertschöpfung in kritischen Elektrifizierungsanwendungen unterstützen.",
    ],
    whyEyebrow: "Warum es relevant ist",
    whyTitle: "Integration entscheidet über die nächste Phase der Elektrifizierung",
    whyBody:
      "Die nächste Phase der Elektrifizierung wird nicht allein durch bessere Halbleiter entschieden, sondern durch deren erfolgreiche Integration in leistungsfähige Systeme. AI Data Centers, E-Mobility, Renewable Energy und Industrial Electrification erhöhen die Anforderungen an Effizienz, Kompaktheit, thermische Beherrschbarkeit und Verfügbarkeit. Wide-Bandgap-Technologien sind dafür ein zentraler Enabler – sie benötigen aber tiefes Packaging-, Applikations- und Systemverständnis.",
    impactEyebrow: "Wo wir Wirkung erzeugen",
    impactTitle: "Anwendungsfelder & Systemnutzen",
    impactAreas: [
      { title: "AI Data Centers", text: "Kompakte und effiziente Stromversorgungsarchitekturen für Hochleistungsrechenzentren." },
      { title: "E-Mobility", text: "Robuste WBG-Leistungselektronik für elektrische Antriebs- und Ladeinfrastrukturen." },
      { title: "Renewable Energy", text: "Effiziente Umrichterlösungen für Wind, Solar und Energiespeicher." },
      { title: "Industrial Electrification", text: "Höhere Leistungsdichte und Zuverlässigkeit für die industrielle Automatisierung." },
      { title: "Green Hydrogen", text: "Effiziente Leistungselektronik für Elektrolyseur-Systeme und DC-basierte Energiepfade." },
    ],
    leadershipTitle: "Pionierarbeit in der Leistungselektronik",
    leadershipLead:
      "Expertengeführtes Halbleiterdesign und Systems Engineering mit jahrzehntelanger technischer Erfahrung für globale OEMs.",
    founderQuote:
      "„Wir haben VEROTERA gegründet, um die Fragmentierung heutiger Hardware-Entwicklungspipelines aufzubrechen. Indem wir physikalische Halbleitereigenschaften direkt mit Zertifizierungsanforderungen verknüpfen, entwickeln wir maßgeschneiderte Leistungslösungen mit deutlich kürzeren Entwicklungszyklen.“",
    experienceTitle: "Gründer- & Führungserfahrung",
    experienceBody:
      "Aly Mashaly ist ein international anerkannter Experte für die Entwicklung hochdichter, energieeffizienter Leistungsmodule. Im Laufe seiner Karriere hat er F&E-Initiativen mit signifikanten Umsätzen vorangetrieben und strategische Partnerschaften zwischen Tier-1-Halbleiterunternehmen und globalen Automotive- und Netz-OEMs koordiniert.",
    credentials: [
      "25+ Jahre Erfahrung in der WBG-Leistungselektronik",
      "Entwickler von 100+ System-Produkten",
      "Experte für funktionale Sicherheit (ISO 26262, IEC 61508)",
      "Pionier des KI-gestützten Systems Engineering",
    ],
    rdTitle: "R&D-Center Meerbusch (NRW), Deutschland",
    rdBody:
      "Im Hightech-Korridor Deutschlands – Entwicklung und Verifikation von Leistungselektronik der nächsten Generation.",
    rdBadge: "Strategischer EU-Hub",
  },
  en: {
    heroEyebrow: "About VEROTERA",
    heroSubtitle:
      "VEROTERA develops and enables advanced WBG power electronics for demanding electrification applications. By combining SiC/GaN technologies, innovative packaging and agentic AI, we bridge the gap between technological complexity and industrial execution.",
    visionTitle: "Our Vision",
    visionBody:
      "Our vision is to become a global deep-tech enabler for wide-bandgap power electronics and agentic AI-powered engineering systems. We see wide-bandgap technologies as a core building block of a more efficient, more resilient and electrified industrial future.",
    missionTitle: "Our Mission",
    missionBody:
      "VEROTERA combines SiC and GaN technologies, innovative packaging and an agentic AI ecosystem architecture. The goal: solving complex power electronics development tasks faster, more traceably and more systematically. Cognitive orchestration is the methodical core.",
    objectivesTitle: "Our Goals",
    objectives: [
      "Increase power density and reduce system-level footprint.",
      "Raise efficiency and minimize thermal losses.",
      "Strengthen the reliability, traceability and certifiability of WBG solutions.",
      "Accelerate development cycles through agentic AI, structured knowledge models and human-in-the-loop processes.",
      "Support European and global value creation in critical electrification applications.",
    ],
    whyEyebrow: "Why it matters",
    whyTitle: "Integration decides the next phase of electrification",
    whyBody:
      "The next phase of electrification will not be decided by better semiconductors alone, but by their successful integration into high-performance systems. AI data centers, e-mobility, renewable energy and industrial electrification keep raising the bar for efficiency, compactness, thermal control and availability. Wide-bandgap technologies are a key enabler — but they demand deep packaging, application and system expertise.",
    impactEyebrow: "Where we create impact",
    impactTitle: "Application Fields & System Benefits",
    impactAreas: [
      { title: "AI Data Centers", text: "Compact, efficient power supply architectures for high-performance data centers." },
      { title: "E-Mobility", text: "Rugged WBG power electronics for electric drive and charging infrastructure." },
      { title: "Renewable Energy", text: "Efficient converter solutions for wind, solar and energy storage." },
      { title: "Industrial Electrification", text: "Higher power density and reliability for industrial automation." },
      { title: "Green Hydrogen", text: "Efficient power electronics for electrolyzer systems and DC-based energy paths." },
    ],
    leadershipTitle: "Pioneering work in power electronics",
    leadershipLead:
      "Expert-led semiconductor design and systems engineering with decades of technical experience for global OEMs.",
    founderQuote:
      "“We founded VEROTERA to break up the fragmentation of today's hardware development pipelines. By linking physical semiconductor properties directly with certification requirements, we build tailor-made power solutions with significantly shorter development cycles.”",
    experienceTitle: "Founder & Leadership Experience",
    experienceBody:
      "Aly Mashaly is an internationally recognized expert in developing high-density, energy-efficient power modules. Over the course of his career he has driven R&D initiatives with significant revenues and coordinated strategic partnerships between tier-1 semiconductor companies and global automotive and grid OEMs.",
    credentials: [
      "25+ years of experience in WBG power electronics",
      "Developer of 100+ system products",
      "Functional safety expert (ISO 26262, IEC 61508)",
      "Pioneer of AI-assisted systems engineering",
    ],
    rdTitle: "R&D Center Meerbusch (NRW), Germany",
    rdBody:
      "Located in Germany's high-tech corridor — developing and verifying next-generation power electronics.",
    rdBadge: "Strategic EU hub",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "About VEROTERA – Wide-Bandgap Semiconductor Modules",
    description:
      "VEROTERA's advanced WBG power modules deliver unmatched performance for smarter, more efficient systems across e-mobility, renewable energy and data centers.",
    keywords: ["Über VEROTERA", "Aly Mashaly", "Vision", "Mission", "WBG Halbleiter"],
  },
  en: {
    title: "About VEROTERA – Wide-Bandgap Semiconductor Modules",
    description:
      "VEROTERA's advanced WBG power modules deliver unmatched performance for smarter, more efficient systems across e-mobility, renewable energy and data centers.",
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
  const { lang } = await params;
  const t = COPY[hasLang(lang) ? lang : "de"];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow={t.heroEyebrow}
          icon={Compass}
          title={
            <>
              Advanced Semiconductor Technologies.
              <br />
              <span className="text-brand-cyan">Wide-Bandgap at the Core.</span>
            </>
          }
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Vision & Mission */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Reveal>
              <div className="glass-panel h-full p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
                <div className="p-4 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">{t.visionTitle}</h2>
                <p className="font-sans text-brand-navy/65 leading-relaxed">
                  {t.visionBody}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-panel h-full p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-emerald to-transparent" />
                <div className="p-4 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald w-fit mb-6">
                  <Rocket className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-4">{t.missionTitle}</h2>
                <p className="font-sans text-brand-navy/65 leading-relaxed">
                  {t.missionBody}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-16 sm:py-20 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <Target className="w-6 h-6 text-brand-cyan" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">{t.objectivesTitle}</h2>
            </div>
            <ul className="space-y-4 list-none m-0 p-0">
              {t.objectives.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="text-brand-navy/70">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why it matters */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
              {t.whyEyebrow}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-5">
              {t.whyTitle}
            </h2>
            <p className="text-brand-navy/65 leading-relaxed">
              {t.whyBody}
            </p>
          </div>
        </section>

        {/* Impact areas */}
        <section className="py-16 sm:py-20 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                {t.impactEyebrow}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                {t.impactTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.impactAreas.map((a, i) => {
                const Icon = IMPACT_ICONS[i];
                return (
                  <Reveal key={a.title} delay={i * 0.07}>
                    <div className="glass-panel glass-panel-hover h-full p-7">
                      <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-base font-bold text-brand-navy mb-2">{a.title}</h3>
                      <p className="text-sm text-brand-navy/60 leading-relaxed">{a.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                Leadership
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-3">
                {t.leadershipTitle}
              </h2>
              <p className="text-brand-navy/60">
                {t.leadershipLead}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Founder card */}
              <div className="lg:col-span-5">
                <div className="glass-panel p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue" />
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative w-32 h-32 rounded-3xl overflow-hidden bg-surface-light border border-brand-navy/10 mb-4">
                      <Image
                        src="/images/aly-mashaly-founder-2.png"
                        alt="Aly Mashaly – Founder & CEO"
                        fill
                        className="object-cover"
                        sizes="128px"
                      />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-brand-navy mb-1">Aly Mashaly</h3>
                    <p className="font-sans text-xs text-brand-cyan font-bold uppercase tracking-wider">
                      Founder &amp; CEO
                    </p>
                  </div>
                  <div className="relative p-6 rounded-2xl bg-surface-light border border-brand-navy/8">
                    <Quote className="absolute top-3 left-3 w-9 h-9 text-brand-cyan/10 pointer-events-none" />
                    <p className="font-sans text-sm text-brand-navy/70 italic leading-relaxed relative z-10">
                      {t.founderQuote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="font-display text-2xl font-bold text-brand-navy">
                  {t.experienceTitle}
                </h3>
                <p className="font-sans text-brand-navy/65 leading-relaxed">
                  {t.experienceBody}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.credentials.map((c) => (
                    <div key={c} className="flex items-start gap-2.5 rounded-xl border border-brand-navy/8 bg-surface-light px-5 py-4">
                      <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-navy/70">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* R&D location */}
        <section className="py-16 bg-surface-light border-t border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-panel p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="p-3.5 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-1">
                    {t.rdTitle}
                  </h3>
                  <p className="font-sans text-sm text-brand-navy/55">
                    {t.rdBody}
                  </p>
                </div>
              </div>
              <span className="px-5 py-2 rounded-full border border-brand-navy/10 bg-white text-xs text-brand-navy/60 font-semibold uppercase tracking-wider shrink-0">
                {t.rdBadge}
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
