"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, ShieldAlert, Workflow, Zap } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

export default function WhyVerotera() {
  const badges = [
    {
      title: "Vom Chip bis zum System",
      icon: Layers,
      highlight: "Full Stack",
      description: "Wir verstehen den gesamten Stack. Von der Halbleiterphysik bis zur Wärmeleitmasse und industriellen Fahrzeugmontage.",
    },
    {
      title: "Tiefes Systemverständnis",
      icon: ShieldAlert,
      highlight: "System-Level",
      description: "Unser Engineering zielt auf optimale Systemkosten, funktionale Sicherheit (ISO 26262) und Gesamteffizienz – nicht nur auf isolierte Moduloptimierungen.",
    },
    {
      title: "Brücke zwischen Nachfrage & Innovation",
      icon: Workflow,
      highlight: "Industry Bridge",
      description: "Wir fungieren als direkte physische Brücke und übersetzen modernste Wafer-Innovationen in einsatzbereite, robuste Pakete für Tier-1-OEMs.",
    },
    {
      title: "Beschleunigte Entwicklungszyklen mit KI",
      icon: Zap,
      highlight: "Fast Execution",
      description: "Mit unseren KI-Design-Agenten simulieren wir Physik und validieren Schaltkreis-Sicherheitslayouts in Stunden – und halbieren die Prototypisierungszeit.",
    },
  ];

  return (
    <section id="why-verotera" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Decorative blurred background lights */}
      <div className="absolute right-0 top-1/4 w-[420px] h-[420px] bg-brand-blue/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <BrandWatermark position="bottom-left" tint="navy" size={480} opacity={0.045} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Split Panel: Navy Box (left) + Image (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

          {/* Left: Navy Content Box */}
          <div className="lg:col-span-6">
            <div className="bg-brand-navy rounded-2xl p-10 sm:p-14 h-full flex flex-col justify-between">
              {/* V-Signet Logo */}
              <div className="mb-6">
                <Image
                  src="/images/v-signet-transparent.png"
                  alt="VEROTERA Signet"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>

              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                  Nachhaltigen Einfluss schaffen – langfristig erfolgreich sein.
                </h2>
                <p className="text-white/70 text-sm mb-6">
                  Technologie- und Systempartner für WBG-Leistungsmodule der nächsten Generation
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  VEROTERAs fortschrittliche WBG-Leistungsmodule sind darauf ausgelegt, höchste Leistung zu liefern – für intelligentere und effizientere Systeme in KI-Rechenzentren, im Bereich des grünen Wasserstoffs, der E-Mobilität, erneuerbarer Energien und industrieller Automatisierung.
                </p>

                <span className="text-brand-cyan text-xs font-bold uppercase tracking-wider mb-2 block">
                  Lösungen
                </span>
                <p className="text-white font-bold text-lg mb-8">
                  VeroCore X → VeroCore SiC – VeroCore GaN
                </p>

                <a
                  href="/solutions"
                  className="inline-flex items-center gap-2 bg-brand-cyan text-brand-navy font-semibold px-6 py-3 rounded-lg text-sm hover:bg-brand-cyan/90 transition-colors duration-200"
                >
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-6">
            <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/our-tech.png"
                alt="VEROTERA Technologie"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>

        {/* 4 Advantage Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
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
                  <badge.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-brand-navy group-hover:text-brand-cyan transition-colors duration-300 leading-tight">
                  {badge.title}
                </h3>
              </div>

              {/* Subtag */}
              <span className="text-[9px] font-bold text-brand-emerald tracking-wider uppercase block mb-3">
                {badge.highlight}
              </span>

              {/* Description */}
              <p className="font-sans text-xs sm:text-sm text-brand-navy/60 leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
