"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, ShieldCheck, Sparkles, ArrowDown } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

export default function ExplainSection() {
  const flowSteps = [
    {
      step: "01",
      title: "Chip-Verkapselung",
      icon: Layers,
      highlight: "SiC & GaN",
      description: "Wir verkapseln fortschrittliche Siliziumkarbid- (SiC) und Galliumnitrid- (GaN) Halbleiterchips direkt in robuste Mikropakete – für maximale thermische und elektrische Leistung.",
    },
    {
      step: "02",
      title: "Leistungsmodule",
      icon: Cpu,
      highlight: "Wide-Bandgap",
      description: "Diese Pakete werden in hochdichte Wide-Bandgap-Leistungsmodule integriert. Sie beherrschen extreme Spannungen, liefern höhere Effizienz, laufen kühler und sind deutlich kompakter.",
    },
    {
      step: "03",
      title: "Komplettsysteme",
      icon: ShieldCheck,
      highlight: "Zertifiziert & Einsatzbereit",
      description: "Wir integrieren die Leistungsmodule in vollständige, anwendungsfertige Leistungssysteme (z. B. Wechselrichter) inkl. funktionaler Sicherheit (ISO 26262, IEC 61508) und Cybersicherheit.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const arrowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.4 } },
  };

  return (
    <section id="what-we-do" className="relative py-24 sm:py-32 bg-white border-y border-brand-blue/10 overflow-hidden">
      {/* Decorative blurred background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-cyan/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-brand-blue/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <BrandWatermark position="bottom-right" tint="blue" size={460} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block"
          >
            Die 10-Sekunden-Zusammenfassung
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-6"
          >
            Was wir in 10 Sekunden tun
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed"
          >
            Alles Elektrische muss Energie umwandeln und steuern. Wir entwickeln und bauen die Hochleistungsmodule und zertifizierten Systeme, die genau das leisten – mit weniger Energieverlust, weniger Gewicht und deutlich schnellerer Entwicklung.
          </motion.p>
        </div>

        {/* The Flowchart Area wrapped in the AI acceleration bracket */}
        <div className="relative p-6 sm:p-12 rounded-3xl border border-dashed border-brand-cyan/20 bg-surface-light">
          
          {/* AI Bracket Header Tag */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-1.5 rounded-full border border-brand-emerald/30 bg-brand-navy/90 text-brand-emerald text-xs font-semibold tracking-wider uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-brand-emerald" />
            <span>Beschleunigt durch KI-Engineering-Tools</span>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-11 gap-6 lg:gap-2 items-center"
          >
            {/* Step 1: Chip Packaging */}
            <motion.div variants={cardVariants} className="lg:col-span-3 h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-brand-navy/8 bg-white shadow-sm relative overflow-hidden group">
              {/* Card Accent Top Glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="font-display text-4xl font-bold text-brand-navy/15 group-hover:text-brand-cyan/25 transition-colors duration-300">
                    {flowSteps[0].step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{flowSteps[0].title}</h3>
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan mb-4 border border-brand-cyan/25">
                  {flowSteps[0].highlight}
                </span>
                <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                  {flowSteps[0].description}
                </p>
              </div>
            </motion.div>

            {/* Desktop Connective Arrow 1 */}
            <motion.div variants={arrowVariants} className="hidden lg:flex lg:col-span-1 justify-center items-center">
              <div className="relative w-full flex items-center justify-center">
                <svg className="w-12 h-6" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 12 L 42 12" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="40,6 48,12 40,18" fill="#2dd4bf" />
                </svg>
                {/* Flowing particle animation */}
                <motion.div
                  animate={{ left: ["0%", "85%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#2dd4bf]"
                  style={{ top: "9px" }}
                />
              </div>
            </motion.div>

            {/* Mobile Connective Arrow 1 */}
            <div className="flex lg:hidden justify-center py-2">
              <div className="relative h-10 flex flex-col items-center">
                <ArrowDown className="w-6 h-6 text-brand-cyan animate-bounce" />
              </div>
            </div>

            {/* Step 2: Power Modules */}
            <motion.div variants={cardVariants} className="lg:col-span-3 h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-brand-navy/8 bg-white shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="font-display text-4xl font-bold text-brand-navy/15 group-hover:text-brand-blue/25 transition-colors duration-300">
                    {flowSteps[1].step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{flowSteps[1].title}</h3>
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-brand-blue/10 text-brand-blue mb-4 border border-brand-blue/25">
                  {flowSteps[1].highlight}
                </span>
                <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                  {flowSteps[1].description}
                </p>
              </div>
            </motion.div>

            {/* Desktop Connective Arrow 2 */}
            <motion.div variants={arrowVariants} className="hidden lg:flex lg:col-span-1 justify-center items-center">
              <div className="relative w-full flex items-center justify-center">
                <svg className="w-12 h-6" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 12 L 42 12" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                  <polygon points="40,6 48,12 40,18" fill="#3b82f6" />
                </svg>
                <motion.div
                  animate={{ left: ["0%", "85%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                  className="absolute w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_8px_#3b82f6]"
                  style={{ top: "9px" }}
                />
              </div>
            </motion.div>

            {/* Mobile Connective Arrow 2 */}
            <div className="flex lg:hidden justify-center py-2">
              <div className="relative h-10 flex flex-col items-center">
                <ArrowDown className="w-6 h-6 text-brand-blue animate-bounce" />
              </div>
            </div>

            {/* Step 3: Complete Systems */}
            <motion.div variants={cardVariants} className="lg:col-span-3 h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-brand-navy/8 bg-white shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="font-display text-4xl font-bold text-brand-navy/15 group-hover:text-brand-cyan/25 transition-colors duration-300">
                    {flowSteps[2].step}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{flowSteps[2].title}</h3>
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan mb-4 border border-brand-cyan/25">
                  {flowSteps[2].highlight}
                </span>
                <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                  {flowSteps[2].description}
                </p>
              </div>
            </motion.div>

          </motion.div>

          {/* AI Bracket Footer Text block */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center p-4 rounded-xl bg-brand-emerald/5 border border-brand-emerald/10 text-center sm:text-left">
            <div className="p-2.5 rounded-lg bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald shrink-0">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <p className="font-sans text-xs sm:text-sm text-brand-navy/60 max-w-2xl leading-relaxed">
              <strong>Der KI-Vorteil:</strong> Maßgeschneiderte KI-Modellierungsalgorithmen wirken auf allen drei Ebenen. Anstelle von traditionellem Trial-and-Error-Prototyping automatisieren unsere Software-Agenten Designregeln, wählen optimale Kühllayouts und validieren thermische Eigenschaften – das halbiert die Entwicklungszeit.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
