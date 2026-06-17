"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";

const COLUMNS = [
  {
    title: "Das Potenzial der Chips wird nicht voll ausgeschöpft",
    stat: "bis zu 30%",
    label: "Effizienzsteigerung",
    description: "Advanced Packaging optimiert elektrische Pfade und parasitäre Effekte",
  },
  {
    title: "Mangelhaftes Wärmemanagement",
    stat: "+20–30%",
    label: "Längere Lebensdauer",
    description: "Eigenentwickeltes thermisches Design",
  },
  {
    title: "Schwingungen bei der Parallelschaltung",
    stat: "bis zu 50%",
    label: "EMI-Reduzierung",
    description: "Innovative Gate-Ansteuerungstechnik",
  },
  {
    title: "Lange Entwicklungszyklen",
    stat: "30%",
    label: "Kürzere Markteinführungszeit",
    description: "Standardisierte modulare Advanced Packaging Plattform",
  },
];

export default function AdvancedPackaging() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Decorative blurred background light */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[480px] h-[480px] bg-brand-blue/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <BrandWatermark position="bottom-left" tint="navy" size={480} opacity={0.045} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header (centered) */}
        <Reveal className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
          <span className="text-lg font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
            Das volle Potenzial von SiC &amp; GaN ausschöpfen
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-navy mb-6">
            Advanced Packaging
          </h2>
          <p className="font-sans text-lg sm:text-xl text-brand-navy/70 leading-relaxed mb-8">
            Das fehlende Bindeglied zwischen Chip-Potenzial und Leistung in der Praxis
          </p>
          <p className="font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed">
            Unsere innovativen Lösungen für Advanced Packaging adressieren vier grundlegende
            Herausforderungen moderner Leistungshalbleitertechnologie:
          </p>
        </Reveal>

        {/* 4-column Challenge / Stat grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {COLUMNS.map((col, index) => (
            <Reveal
              key={col.title}
              delay={index * 0.12}
              className="flex flex-col items-center text-center"
            >
              {/* Challenge title */}
              <h3 className="font-display text-base font-semibold text-brand-navy leading-snug mb-6 min-h-[3rem] flex items-center justify-center">
                {col.title}
              </h3>

              {/* Big cyan stat */}
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand-cyan leading-none mb-3">
                {col.stat}
              </span>

              {/* Label under stat */}
              <span className="font-sans text-base text-brand-navy/70 mb-7">
                {col.label}
              </span>

              {/* VEROTERA logo lockup badge */}
              <div className="inline-flex items-center gap-2 bg-brand-navy rounded-lg px-3 py-2 mb-7">
                <Image
                  src="/images/v-signet-transparent.png"
                  alt="VEROTERA Signet"
                  width={24}
                  height={24}
                  className="object-contain h-5 w-5"
                />
                <Image
                  src="/images/verotera-wordmark.png"
                  alt="VEROTERA"
                  width={824}
                  height={95}
                  className="object-contain h-3.5 w-auto"
                />
              </div>

              {/* Description */}
              <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                {col.description}
              </p>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
