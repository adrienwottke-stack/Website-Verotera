"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Quote } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    headlineA: string;
    headlineB: string;
    intro: string;
    founderRole: string;
    founderFact1: string;
    founderFact2: string;
    quote: string;
  }
> = {
  de: {
    eyebrow: "Bewiesene Erfolgsbilanz",
    headlineA: "Zahlen sprechen lauter",
    headlineB: "als Technologie-Schlagworte",
    intro:
      "Wir fokussieren uns auf messbare Engineering-Leistungen. Unser Team hat aktiv Elektronik weltweit für industrielle Stromnetze und sicherheitskritische Plattformen entwickelt, simuliert, zertifiziert und eingesetzt.",
    founderRole: "Gründer & Geschäftsführer",
    founderFact1: "25+ Jahre Halbleiterinnovation",
    founderFact2: "Wide-Bandgap (SiC/GaN) Experte",
    quote:
      "„Bei VEROTERA haben wir ein Team geformt, das die Lücke zwischen Halbleiterphysik und industriellem OEM-Einsatz überbrückt. Unser Ziel ist es, die Fragmentierung der Branche zu durchbrechen und integrierte, hocheffiziente und zertifizierte Lösungen anzubieten, die die globale Elektrifizierung beschleunigen. Keine generischen Slogans – nur zuverlässige Hochleistungshardware, die durch maßgeschneiderte KI-Modellierungswerkzeuge schneller entwickelt wird.“",
  },
  en: {
    eyebrow: "Proven Track Record",
    headlineA: "Numbers speak louder",
    headlineB: "than technology buzzwords",
    intro:
      "We focus on measurable engineering results. Our team has actively developed, simulated, certified and deployed electronics worldwide for industrial power grids and safety-critical platforms.",
    founderRole: "Founder & Managing Director",
    founderFact1: "25+ years of semiconductor innovation",
    founderFact2: "Wide-bandgap (SiC/GaN) expert",
    quote:
      "“At VEROTERA we have built a team that bridges the gap between semiconductor physics and industrial OEM deployment. Our goal is to break through the industry's fragmentation and offer integrated, highly efficient, certified solutions that accelerate global electrification. No generic slogans — just reliable high-performance hardware, developed faster with tailor-made AI modeling tools.”",
  },
};

export default function StatsSection() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white border-t border-brand-blue/10 overflow-hidden">
      {/* Decorative blurred background lights */}
      <div className="absolute bottom-0 right-0 w-[440px] h-[440px] bg-brand-blue/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <BrandWatermark position="top-right" tint="blue" size={480} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* Left Area: Section Header (#90: Kennzahlen-Raster entfernt) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
              {t.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
              {t.headlineA} <br className="hidden sm:inline" />
              {t.headlineB}
            </h2>
            <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed">
              {t.intro}
            </p>
          </div>

          {/* Right Area: Founder Spotlight */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[500px] p-6 sm:p-8 rounded-3xl border border-brand-navy/8 bg-white shadow-sm relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan" />

              <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
                {/* Founder Photo */}
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-surface-light border border-brand-navy/8 shrink-0">
                  <Image
                    src="/images/aly-mashaly-founder-2.png"
                    alt="Aly Mashaly - VEROTERA Founder"
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>

                {/* Role Titles */}
                <div className="text-center sm:text-left">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
                    Aly Mashaly
                  </h3>
                  <p className="font-sans text-xs text-brand-cyan font-semibold uppercase tracking-wider mb-2.5">
                    {t.founderRole}
                  </p>

                  <div className="flex flex-col gap-1.5 items-center sm:items-start text-xs text-brand-navy/50">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />
                      {t.founderFact1}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-cyan" />
                      {t.founderFact2}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative p-6 rounded-2xl bg-surface-light border border-brand-navy/8">
                <Quote className="absolute top-4 left-4 w-10 h-10 text-brand-cyan/5 pointer-events-none" />
                <p className="font-sans text-sm text-brand-navy/60 italic leading-relaxed relative z-10">
                  {t.quote}
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
