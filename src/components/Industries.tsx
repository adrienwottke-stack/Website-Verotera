"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Car, Sun, Server } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const INDUSTRY_ICONS = [Car, Sun, Server];
const INDUSTRY_IMAGES = [
  "/images/emobility-automotive.png",
  "/images/green-hydrogen.png",
  "/images/ai-data-center-infrastructure.png",
];

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    headline: string;
    lead: string;
    benchmark: string;
    industries: { title: string; description: string; metric: string; tag: string }[];
  }
> = {
  de: {
    eyebrow: "Zielindustrien",
    headline: "Gebaut für die Industrien, die die Elektrifizierung vorantreiben",
    lead:
      "Standard-Leistungselektronik kann die modernen Energieeffizienzanforderungen nicht erfüllen. VEROTERA schließt die Lücke zwischen Halbleiterphysik und industriellem OEM-Einsatz.",
    benchmark: "Verifizierter Benchmark",
    industries: [
      {
        title: "Automotive / E-Mobilität",
        description:
          "Effiziente, sichere Leistungselektronik für Elektrofahrzeuge. Ermöglicht größere Reichweite, schnellere Ladezyklen und kompaktere Antriebsstränge.",
        metric: "Bis zu 30% Gewichtsreduktion",
        tag: "ISO 26262 Zertifiziert",
      },
      {
        title: "Erneuerbare Energien",
        description:
          "Hocheffiziente Leistungswandlungssysteme für Solar-, Windenergie und Netzstromversorgung – mit minimierten Koppelungsverlusten.",
        metric: "99,2% Wechselrichter-Wirkungsgrad",
        tag: "Netz-konformes Design",
      },
      {
        title: "KI-Rechenzentren",
        description:
          "Hochdichte, thermisch-optimierte Leistungsmodule für KI-Supercomputer und Cloud-Architekturen der nächsten Generation.",
        metric: "4-fache Leistungsdichte",
        tag: "Thermisch Optimiert",
      },
    ],
  },
  en: {
    eyebrow: "Target Industries",
    headline: "Built for the industries driving electrification",
    lead:
      "Standard power electronics cannot meet today's energy-efficiency requirements. VEROTERA closes the gap between semiconductor physics and industrial OEM deployment.",
    benchmark: "Verified benchmark",
    industries: [
      {
        title: "Automotive / E-Mobility",
        description:
          "Efficient, safe power electronics for electric vehicles — enabling longer range, faster charging cycles and more compact drivetrains.",
        metric: "Up to 30% weight reduction",
        tag: "ISO 26262 certified",
      },
      {
        title: "Renewable Energy",
        description:
          "Highly efficient power conversion systems for solar, wind and grid power — with minimized coupling losses.",
        metric: "99.2% inverter efficiency",
        tag: "Grid-compliant design",
      },
      {
        title: "AI Data Centers",
        description:
          "High-density, thermally optimized power modules for AI supercomputers and next-generation cloud architectures.",
        metric: "4× power density",
        tag: "Thermally optimized",
      },
    ],
  },
};

export default function Industries() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-surface-light overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <BrandWatermark position="bottom-left" tint="navy" size={500} opacity={0.045} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
            {t.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-6">
            {t.headline}
          </h2>
          <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed">
            {t.lead}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.industries.map((ind, index) => {
            const Icon = INDUSTRY_ICONS[index];
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative h-[480px] rounded-2xl overflow-hidden border border-brand-navy/8 bg-white group shadow-lg flex flex-col justify-end p-8"
              >
                {/* Background Image with Dark Overlays */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={INDUSTRY_IMAGES[index]}
                    alt={ind.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:blur-[1px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Radial and Linear gradients for crisp text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/40 via-[#020617]/70 to-[#020617] opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
                </div>

                {/* Glowing Corner Accents */}
                <div className="absolute inset-0 z-10 border border-brand-cyan/0 group-hover:border-brand-cyan/20 rounded-2xl pointer-events-none transition-colors duration-300" />

                {/* Card Contents */}
                <div className="relative z-10 flex flex-col h-full justify-between">

                  {/* Top Badge Info */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-brand-cyan group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/20 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-sm group-hover:bg-brand-cyan/5 group-hover:border-brand-cyan/25 group-hover:text-brand-cyan transition-colors duration-300">
                      {ind.tag}
                    </span>
                  </div>

                  {/* Bottom Details */}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                      {ind.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed mb-6">
                      {ind.description}
                    </p>

                    {/* Custom Industrial Metric Box */}
                    <div className="p-4 rounded-xl bg-brand-navy-light/60 border border-white/5 backdrop-blur-sm">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">
                        {t.benchmark}
                      </span>
                      <span className="font-display text-sm font-semibold text-brand-emerald">
                        {ind.metric}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
