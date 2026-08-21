"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Layers, Sparkles, ArrowRight } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import { useLang, useLocalePath } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const OUTCOME_ICONS = [TrendingUp, Layers, Sparkles];

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    headlineA: string;
    headlineB: string;
    lead: string;
    cta: string;
    outcomes: { segment: string; value: string; label: string; description: string }[];
  }
> = {
  de: {
    eyebrow: "Was es bringt",
    headlineA: "Mehr Effizienz. Weniger Gewicht.",
    headlineB: "Schnellere Entwicklung.",
    lead:
      "Standard-Silizium-Leistungselektronik bremst moderne Systeme aus. OEMs in E-Mobilität, KI-Rechenzentren und erneuerbaren Energien stoßen an Effizienz-, Gewichts- und Entwicklungsgrenzen. Unsere Wide-Bandgap-Systeme verschieben diese Grenzen – messbar:",
    cta: "Use Case besprechen",
    outcomes: [
      {
        segment: "E-Mobilität · Rechenzentren",
        value: "99,2 %",
        label: "Wechselrichter-Wirkungsgrad",
        description:
          "Weniger Verlust durch Wide-Bandgap → mehr Reichweite und niedrigere Betriebskosten.",
      },
      {
        segment: "Automotive · Data Center",
        value: "4×",
        label: "Leistungsdichte",
        description:
          "Mehr Leistung auf weniger Raum und Gewicht → kompaktere Antriebe und Power Shelves.",
      },
      {
        segment: "Engineering unter Termindruck",
        value: "−50 %",
        label: "Entwicklungszeit",
        description:
          "KI-gestütztes Engineering → schneller vom Konzept zum zertifizierten System, früher am Markt.",
      },
    ],
  },
  en: {
    eyebrow: "What you gain",
    headlineA: "More efficiency. Less weight.",
    headlineB: "Faster development.",
    lead:
      "Standard silicon power electronics hold modern systems back. OEMs in e-mobility, AI data centers and renewable energy keep hitting efficiency, weight and development limits. Our wide-bandgap systems push those limits — measurably:",
    cta: "Discuss your use case",
    outcomes: [
      {
        segment: "E-Mobility · Data Centers",
        value: "99.2%",
        label: "Inverter efficiency",
        description:
          "Lower losses through wide bandgap → more range and lower operating costs.",
      },
      {
        segment: "Automotive · Data Center",
        value: "4×",
        label: "Power density",
        description:
          "More power in less space and weight → more compact drives and power shelves.",
      },
      {
        segment: "Engineering under deadline pressure",
        value: "−50%",
        label: "Development time",
        description:
          "AI-assisted engineering → from concept to certified system faster, to market earlier.",
      },
    ],
  },
};

export default function ExplainSection() {
  const lang = useLang();
  const p = useLocalePath();
  const t = COPY[lang];

  return (
    <section id="what-we-do" className="relative py-24 sm:py-32 bg-white border-y border-brand-blue/10 overflow-hidden">
      {/* Decorative static blurred background lights (no animation loops) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-cyan/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-brand-blue/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <BrandWatermark position="bottom-right" tint="blue" size={460} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block"
          >
            {t.eyebrow}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-6"
          >
            {t.headlineA}<br className="hidden sm:inline" /> {t.headlineB}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed"
          >
            {t.lead}
          </motion.p>
        </div>

        {/* Outcome trio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.outcomes.map((item, index) => {
            const Icon = OUTCOME_ICONS[index];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
                className="group p-8 rounded-2xl border border-brand-navy/8 bg-white shadow-sm hover:shadow-md hover:border-brand-cyan/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top accent glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start justify-between gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-navy/50 bg-brand-navy/5 border border-brand-navy/10 rounded-full px-2.5 py-1 text-right leading-tight">
                    {item.segment}
                  </span>
                </div>

                <div className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue mb-2">
                  {item.value}
                </div>
                <h3 className="font-display text-base font-bold text-brand-navy mb-3">
                  {item.label}
                </h3>
                <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Soft CTA */}
        <div className="mt-14 text-center">
          <Link
            href={p("/#contact")}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
          >
            {t.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
