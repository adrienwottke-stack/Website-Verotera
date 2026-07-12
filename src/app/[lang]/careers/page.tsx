import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, MapPin, Clock, ArrowRight, Lightbulb, Users, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import ContactSection from "@/components/ContactSection";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const VALUE_ICONS = [Lightbulb, Users, Rocket];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    cultureEyebrow: string;
    cultureTitle: string;
    cultureBody: string;
    values: { title: string; text: string }[];
    jobsEyebrow: string;
    jobsTitle: string;
    apply: string;
    initiativeA: string;
    initiativeB: string;
    jobs: { title: string; type: string; location: string; description: string }[];
  }
> = {
  de: {
    heroEyebrow: "Karriere",
    heroTitle: "Ihre Karriere im Kern der WBG-Innovation",
    heroSubtitle:
      "Werden Sie Teil eines Teams, das die Brücke zwischen Halbleiterphysik und realer Elektrifizierung baut – mit Wide-Bandgap-Technologie und agentischer KI.",
    cultureEyebrow: "Unsere Kultur",
    cultureTitle: "Engineering Excellence, gemeinsam vorangetrieben",
    cultureBody:
      "Bei VEROTERA verbinden wir technische Tiefe mit echtem Gestaltungsspielraum. Wir suchen Menschen, die anspruchsvolle Probleme lieben, eigenverantwortlich arbeiten und Lust haben, die nächste Generation der Leistungselektronik mitzugestalten.",
    values: [
      {
        title: "Deep-Tech mit Wirkung",
        text: "Wir arbeiten an der Schnittstelle von Halbleiterphysik, Leistungselektronik und agentischer KI – an Technologien, die die Elektrifizierung real beschleunigen.",
      },
      {
        title: "Kleines Team, große Hebel",
        text: "Flache Hierarchien, kurze Wege und echte Verantwortung ab dem ersten Tag. Ihre Ideen prägen unsere Produkte direkt mit.",
      },
      {
        title: "Lernen & Wachsen",
        text: "Modernste Engineering-Werkzeuge, KI-gestützte Workflows und ein Umfeld, in dem technische Tiefe und Neugier gefördert werden.",
      },
    ],
    jobsEyebrow: "Karriere bei VEROTERA",
    jobsTitle: "Offene Stellen",
    apply: "Jetzt bewerben",
    initiativeA: "Keine passende Stelle dabei? Wir freuen uns über Initiativbewerbungen an",
    initiativeB: ".",
    jobs: [
      {
        title: "Senior System Engineer",
        type: "Vollzeit",
        location: "Meerbusch (NRW) / hybrid",
        description:
          "Sie verantworten die Auslegung und Validierung kompletter WBG-Leistungssysteme – von der Topologie über das Moduldesign bis zur funktionalen Sicherheit nach ISO 26262.",
      },
      {
        title: "AI Developer – Agentic Systems",
        type: "Vollzeit",
        location: "Meerbusch (NRW) / remote",
        description:
          "Sie entwickeln unsere Agentic-AI-Ecosystem-Architektur weiter: Orchestrierung von Spezialagenten, RAG über Engineering-Standards und Knowledge-Graphs für die Leistungselektronik.",
      },
      {
        title: "Working Student – Semiconductor Simulation",
        type: "Werkstudent:in",
        location: "Meerbusch (NRW)",
        description:
          "Sie unterstützen unser Team bei SPICE-/FEM-Simulationen, der Auswertung thermischer Modelle und der Aufbereitung von Designdaten für SiC- und GaN-Bauelemente.",
      },
    ],
  },
  en: {
    heroEyebrow: "Careers",
    heroTitle: "Your Career at the Core of WBG Innovation",
    heroSubtitle:
      "Join a team building the bridge between semiconductor physics and real-world electrification — with wide-bandgap technology and agentic AI.",
    cultureEyebrow: "Our Culture",
    cultureTitle: "Engineering excellence, driven together",
    cultureBody:
      "At VEROTERA we combine technical depth with real creative freedom. We look for people who love hard problems, work independently and want to help shape the next generation of power electronics.",
    values: [
      {
        title: "Deep tech with impact",
        text: "We work at the intersection of semiconductor physics, power electronics and agentic AI — on technologies that genuinely accelerate electrification.",
      },
      {
        title: "Small team, big leverage",
        text: "Flat hierarchies, short paths and real responsibility from day one. Your ideas directly shape our products.",
      },
      {
        title: "Learn & grow",
        text: "State-of-the-art engineering tools, AI-assisted workflows and an environment that rewards technical depth and curiosity.",
      },
    ],
    jobsEyebrow: "Careers at VEROTERA",
    jobsTitle: "Open Positions",
    apply: "Apply now",
    initiativeA: "No matching role? We welcome unsolicited applications at",
    initiativeB: ".",
    jobs: [
      {
        title: "Senior System Engineer",
        type: "Full-time",
        location: "Meerbusch (NRW) / hybrid",
        description:
          "You own the design and validation of complete WBG power systems — from topology and module design to functional safety per ISO 26262.",
      },
      {
        title: "AI Developer – Agentic Systems",
        type: "Full-time",
        location: "Meerbusch (NRW) / remote",
        description:
          "You evolve our agentic AI ecosystem architecture: orchestrating specialist agents, RAG over engineering standards and knowledge graphs for power electronics.",
      },
      {
        title: "Working Student – Semiconductor Simulation",
        type: "Working student",
        location: "Meerbusch (NRW)",
        description:
          "You support our team with SPICE/FEM simulations, evaluating thermal models and preparing design data for SiC and GaN devices.",
      },
    ],
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "Karriere-Möglichkeiten bei VEROTERA",
    description:
      "Gestalten Sie Ihre Karriere bei VEROTERA mit und entwickeln Sie fortschrittliche SiC- und GaN-Halbleiterlösungen für effiziente Leistungselektronik.",
    keywords: ["Karriere bei VEROTERA", "Jobs Meerbusch", "Halbleiter Stellen"],
  },
  en: {
    title: "Career Opportunities at VEROTERA",
    description:
      "Shape your career at VEROTERA and help develop advanced SiC and GaN semiconductor solutions for efficient, high-performance power electronics.",
    keywords: ["Careers at VEROTERA", "Jobs Meerbusch", "Semiconductor positions"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/careers", META[l]);
}

export default async function CareersPage({
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
          icon={Briefcase}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Culture — Pattern C (Icon-Card-Grid) */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />
          <div
            className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.cultureEyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.cultureTitle}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.cultureBody}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.values.map((v, i) => {
                const Icon = VALUE_ICONS[i];
                return (
                  <Reveal key={v.title} delay={i * 0.12} className="h-full">
                    <div className="group h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_4px_24px_rgba(16,166,226,0.12)] hover:-translate-y-0.5">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-base font-bold text-brand-navy leading-tight group-hover:text-brand-cyan transition-colors">
                          {v.title}
                        </h3>
                      </div>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{v.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open positions — Card-Liste (C-Variante) */}
        <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={460} opacity={0.045} />
          <div
            className="absolute top-0 right-0 w-[420px] h-[420px] bg-brand-blue/[0.05] rounded-full blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.jobsEyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.jobsTitle}
              </h2>
            </Reveal>

            <div className="space-y-6">
              {t.jobs.map((job, i) => (
                <Reveal key={job.title} delay={i * 0.12}>
                  <div className="group p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_4px_24px_rgba(16,166,226,0.12)] hover:-translate-y-0.5 flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-brand-navy leading-tight mb-3 group-hover:text-brand-cyan transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-3">
                        <span className="inline-flex items-center gap-1.5 font-sans text-xs text-brand-navy/55">
                          <Clock className="w-3.5 h-3.5 text-brand-cyan" />
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 font-sans text-xs text-brand-navy/55">
                          <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                          {job.location}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{job.description}</p>
                    </div>
                    <Link
                      href={localePath(lang, "/contacts")}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors shrink-0"
                    >
                      {t.apply} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={t.jobs.length * 0.12}>
              <p className="mt-12 text-center font-sans text-sm text-brand-navy/55">
                {t.initiativeA}{" "}
                <a href="mailto:info@verotera.com" className="text-brand-cyan hover:underline">
                  info@verotera.com
                </a>
                {t.initiativeB}
              </p>
            </Reveal>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
