"use client";

import { motion } from "framer-motion";
import { Layers, ShieldAlert, Workflow, Zap } from "lucide-react";

export default function WhyVerotera() {
  const badges = [
    {
      title: "Full Stack",
      icon: Layers,
      highlight: "Chip-to-System",
      description: "We understand the entire stack. From semiconductor solid-state physics to thermal grease interfaces and industrial vehicle mounting.",
    },
    {
      title: "System-Level",
      icon: ShieldAlert,
      highlight: "Safety & Compliance",
      description: "Our engineering targets optimal system cost, functional safety (ISO 26262), and overall efficiency, rather than just isolated module optimizations.",
    },
    {
      title: "Industry Bridge",
      icon: Workflow,
      highlight: "OEM Alignment",
      description: "We act as the direct physical bridge, translating cutting-edge raw wafer innovations into ready-to-deploy, rugged packages for Tier-1 OEMs.",
    },
    {
      title: "Fast Execution",
      icon: Zap,
      highlight: "AI-Driven Timelines",
      description: "By using our custom generative AI design agents, we simulate physics and validate circuit safety layouts in hours, cutting prototyping time in half.",
    },
  ];

  return (
    <section id="why-verotera" className="relative py-24 sm:py-32 bg-[#020617] overflow-hidden">
      {/* Background decoration grid */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Descriptive Narrative */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
              Our Core Edge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-tight">
              One team, from chip physics to complete system
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Most power electronics companies are highly fragmented. They either build semiconductor chips or design systems. They don't talk to each other.
            </p>
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              <strong>VEROTERA does both.</strong> This full-stack, cohesive understanding lets us cut expensive integration cycles, drastically shorten thermal validation loops, and deliver higher overall power efficiencies. We build the physical and engineering bridge between semiconductor raw material innovation and real-world electrification demand.
            </p>

            {/* Premium Diagram Box representing the bridge */}
            <div className="p-6 rounded-2xl border border-white/5 bg-brand-navy-light/40 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                VEROTERA Ecosystem
              </div>
              <span className="text-xs font-semibold text-brand-cyan tracking-wider uppercase block mb-3">
                The Conventional Gap vs Our Bridge
              </span>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
                  <span className="font-sans text-xs text-slate-400">
                    Traditional Chip Maker: <em>\"Here is the raw wafer chip. Good luck packaging it.\"</em>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
                  <span className="font-sans text-xs text-slate-400">
                    Traditional OEM Designer: <em>\"We bought a module, but thermal matching failed under load.\"</em>
                  </span>
                </div>
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan shrink-0 animate-pulse" />
                  <span className="font-sans text-xs text-brand-cyan font-medium">
                    VEROTERA: Unified chip, packaging, thermal model, safety codes, and custom enclosure.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Badges Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="p-6 rounded-2xl border border-white/5 bg-brand-navy/60 glass-panel-hover group relative overflow-hidden"
              >
                {/* Header Row */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan/30 transition-all duration-300">
                    <badge.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-brand-cyan transition-colors duration-300">
                    {badge.title}
                  </h3>
                </div>

                {/* Subtag */}
                <span className="text-[9px] font-bold text-brand-emerald tracking-wider uppercase block mb-3">
                  {badge.highlight}
                </span>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
