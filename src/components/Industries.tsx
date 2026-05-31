"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Car, Sun, Server } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Automotive / E-Mobility",
      icon: Car,
      description: "Efficient, safe power electronics for electric vehicles. Enabling longer range, faster charging cycles, and highly compact powertrains.",
      image: "https://verotera.com/images/automotive-trucks.png",
      metric: "Up to 30% reduction in weight",
      tag: "ISO 26262 Certified",
    },
    {
      title: "Renewable Energy",
      icon: Sun,
      description: "Highly efficient power conversion systems for solar, wind energy, and commercial grid storage, minimizing grid coupling losses.",
      image: "https://verotera.com/images/electromobility-chip.png",
      metric: "99.2% inverter efficiency",
      tag: "Grid-Compliant Design",
    },
    {
      title: "Data Centers",
      icon: Server,
      description: "High-density, thermal-optimized power delivery modules for next-gen high-performance AI supercomputers and cloud architectures.",
      image: "https://verotera.com/images/advanced-control.png",
      metric: "4x increase in power density",
      tag: "Thermal Optimized",
    },
  ];

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[#020617] overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute right-0 top-1/4 w-[350px] h-[350px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
            Target Industries
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
            Built for the industries driving electrification
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed">
            Standard power electronics cannot cope with modern energy efficiency demands. VEROTERA bridges the gap between semiconductor physics and industrial OEM deployment.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative h-[480px] rounded-2xl overflow-hidden border border-white/5 bg-brand-navy/60 group shadow-2xl flex flex-col justify-end p-8"
            >
              {/* Background Image with Dark Overlays */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={ind.image}
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
                    <ind.icon className="w-5 h-5" />
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
                      Verified Benchmark
                    </span>
                    <span className="font-display text-sm font-semibold text-brand-emerald">
                      {ind.metric}
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
