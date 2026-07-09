"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, ShieldAlert, Workflow, Zap } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const BADGE_ICONS = [Layers, ShieldAlert, Workflow, Zap];
const BADGE_HIGHLIGHTS = ["Full Stack", "System-Level", "Industry Bridge", "Fast Execution"];

const COPY: Record<
  Lang,
  {
    headline: string;
    body: string;
    imageAlt: string;
    panelEyebrow: string;
    panelTitle: string;
    panelMeta: string;
    panelBody: string;
    badges: { title: string; description: string }[];
  }
> = {
  de: {
    headline:
      "Wir gestalten den industriellen Wandel mit innovativen Wide-Bandgap-Halbleiter-Packaging-Technologien.",
    body:
      "VEROTERAs fortschrittliche WBG-Leistungsmodule sind darauf ausgelegt, höchste Leistung zu liefern – für intelligentere und effizientere Systeme in KI-Rechenzentren, E-Mobilität, erneuerbaren Energien, grünem Wasserstoff oder der Industrie-Automation.",
    imageAlt: "Collaborative Intelligence – Menschen und Präzision in der WBG-Fertigung",
    panelEyebrow: "Innovative Wide-Bandgap Halbleitermodule",
    panelTitle: "Collaborative Intelligence",
    panelMeta: "Powered by People and Precision – Connecting Global Expertise",
    panelBody:
      "Wir gestalten die Zukunft des Engineerings durch intelligente Zusammenarbeit zwischen Menschen, Systemen und künstlicher Intelligenz – mit adaptiven, resilienten und nachhaltigen Lösungen, die mit ihrer Umgebung wachsen.",
    badges: [
      {
        title: "Vom Chip bis zum System",
        description:
          "Wir verstehen den gesamten Stack. Von der Halbleiterphysik bis zur Wärmeleitmasse und industriellen Fahrzeugmontage.",
      },
      {
        title: "Tiefes Systemverständnis",
        description:
          "Unser Engineering zielt auf optimale Systemkosten, funktionale Sicherheit (ISO 26262) und Gesamteffizienz – nicht nur auf isolierte Moduloptimierungen.",
      },
      {
        title: "Brücke zwischen Nachfrage & Innovation",
        description:
          "Wir fungieren als direkte physische Brücke und übersetzen modernste Wafer-Innovationen in einsatzbereite, robuste Pakete für Tier-1-OEMs.",
      },
      {
        title: "Beschleunigte Entwicklungszyklen mit KI",
        description:
          "Mit unseren KI-Design-Agenten simulieren wir Physik und validieren Schaltkreis-Sicherheitslayouts in Stunden – und halbieren die Prototypisierungszeit.",
      },
    ],
  },
  en: {
    headline:
      "We shape the industrial transformation with innovative wide-bandgap semiconductor packaging technologies.",
    body:
      "VEROTERA's advanced WBG power modules are engineered to deliver peak performance — enabling smarter, more efficient systems in AI data centers, e-mobility, renewable energy, green hydrogen and industrial automation.",
    imageAlt: "Collaborative intelligence — people and precision in WBG manufacturing",
    panelEyebrow: "Innovative Wide-Bandgap Semiconductor Modules",
    panelTitle: "Collaborative Intelligence",
    panelMeta: "Powered by People and Precision – Connecting Global Expertise",
    panelBody:
      "We shape the future of engineering through intelligent collaboration between people, systems and artificial intelligence — with adaptive, resilient and sustainable solutions that grow with their environment.",
    badges: [
      {
        title: "From Chip to System",
        description:
          "We understand the entire stack — from semiconductor physics to thermal interface materials and industrial vehicle assembly.",
      },
      {
        title: "Deep System Understanding",
        description:
          "Our engineering targets optimal system cost, functional safety (ISO 26262) and overall efficiency — not just isolated module optimizations.",
      },
      {
        title: "Bridging Demand & Innovation",
        description:
          "We act as a direct physical bridge, translating cutting-edge wafer innovations into deployment-ready, rugged packages for tier-1 OEMs.",
      },
      {
        title: "AI-Accelerated Development Cycles",
        description:
          "Our AI design agents simulate physics and validate circuit safety layouts in hours — cutting prototyping time in half.",
      },
    ],
  },
};

export default function WhyVerotera() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <section id="why-verotera" className="relative py-24 sm:py-32 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header — Teaser → Headline → Body */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
            Your Goal. Our Tech. One Vision.
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
            {t.headline}
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
            {t.body}
          </p>
        </div>

        {/* Split Panel: Image (left) + Navy Box (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">

          {/* Left: Image */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[460px] rounded-2xl overflow-hidden border border-brand-navy/8">
              <Image
                src="/images/wafer-production.jpg"
                alt={t.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center lg:pl-10">
            <div>
              <span className="text-brand-blue text-xs font-bold uppercase tracking-widest mb-3 block">
                {t.panelEyebrow}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-2 leading-tight">
                {t.panelTitle}
              </h3>
              <p className="text-brand-navy/60 text-sm mb-8">
                {t.panelMeta}
              </p>

              <p className="text-brand-navy/70 text-sm leading-relaxed">
                {t.panelBody}
              </p>
            </div>
          </div>

        </div>

        {/* 4 Advantage Badges (CSV: Full Stack / System-Level / Industry Bridge / Fast Execution) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.badges.map((badge, index) => {
            const Icon = BADGE_ICONS[index];
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm group relative overflow-hidden"
              >
                {/* Header Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/30 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-brand-navy group-hover:text-brand-cyan transition-colors duration-300 leading-tight">
                    {badge.title}
                  </h3>
                </div>

                {/* Subtag */}
                <span className="text-[9px] font-bold text-brand-navy tracking-wider uppercase block mb-3">
                  {BADGE_HIGHLIGHTS[index]}
                </span>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-brand-navy/60 leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
