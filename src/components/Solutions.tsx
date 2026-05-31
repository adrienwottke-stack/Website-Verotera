"use client";

import { motion } from "framer-motion";
import { Cpu, Settings, BrainCircuit, CheckCircle2 } from "lucide-react";

export default function Solutions() {
  const pillars = [
    {
      title: "WBG Power Modules",
      icon: Cpu,
      accent: "cyan",
      colorClass: "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/20",
      glowClass: "group-hover:border-brand-cyan/30 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]",
      description: "Wide-bandgap (SiC/GaN) power modules engineered for peak power densities, minimal switching losses, and outstanding thermal characteristics. Perfectly pre-packaged for fast module-to-system scale integration.",
      specs: [
        "Advanced SiC & GaN die placement",
        "High thermal conductivity packaging",
        "Substantially reduced switching losses",
        "Up to 200°C junction operation capability",
      ],
    },
    {
      title: "Systems Engineering",
      icon: Settings,
      accent: "blue",
      colorClass: "text-brand-blue bg-brand-blue/10 border-brand-blue/20",
      glowClass: "group-hover:border-brand-blue/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]",
      description: "We handle the complete development of certified hardware systems. From dynamic use-case analysis to layout design, functional safety modeling, compliance certification, and system testing.",
      specs: [
        "ISO 26262 (ASIL-D) & IEC 61508 compliance",
        "High-density system integration (Inverters)",
        "Hardware-in-the-loop (HIL) validation",
        "Integrated hardware cybersecurity layers",
      ],
    },
    {
      title: "AI Solutions",
      icon: BrainCircuit,
      accent: "emerald",
      colorClass: "text-brand-emerald bg-brand-emerald/10 border-brand-emerald/20",
      glowClass: "group-hover:border-brand-emerald/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]",
      description: "Our proprietary AI agents work alongside hardware design engineers. We utilize generative modeling to optimize thermal vias, compute structural integrity, and validate circuits in seconds, not weeks.",
      specs: [
        "Automated layout & cooling optimization",
        "Generative circuit safety modeling",
        "Early physical behavior simulation",
        "Intelligent hardware lifecycle analytics",
      ],
    },
  ];

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-[#050b18] border-y border-white/5 overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

      {/* Decorative blurred lighting spots */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-emerald/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
            Product Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            What you get from VEROTERA
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
            We provide full-stack engineering support across three foundational axes, ensuring your electrified hardware performs perfectly and launches faster.
          </p>
        </div>

        {/* Pillars Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex flex-col justify-between p-8 rounded-2xl border border-white/5 bg-brand-navy/60 backdrop-blur-md transition-all duration-300 group ${pillar.glowClass}`}
            >
              <div>
                {/* Header Icon */}
                <div className={`p-4 rounded-2xl border w-fit mb-8 transition-colors duration-300 ${pillar.colorClass}`}>
                  <pillar.icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-slate-300 leading-relaxed mb-8">
                  {pillar.description}
                </p>
              </div>

              {/* Specifications checklist */}
              <div className="border-t border-white/5 pt-6 mt-6">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">
                  Key Specs & Outputs
                </span>
                <ul className="space-y-3.5">
                  {pillar.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        pillar.accent === "cyan" ? "text-brand-cyan" :
                        pillar.accent === "blue" ? "text-brand-blue" : "text-brand-emerald"
                      }`} />
                      <span className="font-sans text-xs text-slate-300 leading-normal">
                        {spec}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
