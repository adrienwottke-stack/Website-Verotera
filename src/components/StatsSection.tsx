"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Quote } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function SafeCounter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const statsList = [
    {
      label: "Products Developed",
      value: 100,
      suffix: "+",
    },
    {
      label: "Customers Worldwide",
      value: 1500,
      suffix: "+",
    },
    {
      label: "Years of Expertise",
      value: 25,
      suffix: "+",
    },
    {
      label: "Patents in Semiconductor Tech",
      value: 18,
      suffix: "+",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#050b18] border-t border-white/5 overflow-hidden">
      {/* Background glowing spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-brand-cyan/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Area: Stats Counts */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
              Proven Track Record
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Numbers speak louder <br className="hidden sm:inline" />
              than tech buzzwords
            </h2>
            <p className="font-sans text-base text-slate-300 leading-relaxed mb-12">
              We focus on measurable engineering achievements. Our team has actively designed, simulated, certified, and deployed electronics globally across industrial grids and safety-critical platforms.
            </p>

            {/* Grid of numbers */}
            <div className="grid grid-cols-2 gap-8">
              {statsList.map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl border border-white/5 bg-brand-navy/30">
                  <div className="mb-2">
                    <SafeCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Area: Founder Spotlight */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[500px] p-6 sm:p-8 rounded-3xl border border-brand-cyan/10 bg-brand-navy/60 glass-panel shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan" />
              
              <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
                {/* Founder Photo */}
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shrink-0">
                  <Image
                    src="https://verotera.com/images/aly-mashaly-founder-2.png"
                    alt="Aly Mashaly - VEROTERA Founder"
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>

                {/* Role Titles */}
                <div className="text-center sm:text-left">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    Aly Mashaly
                  </h3>
                  <p className="font-sans text-xs text-brand-cyan font-semibold uppercase tracking-wider mb-2.5">
                    Founder & Managing Director
                  </p>
                  
                  <div className="flex flex-col gap-1.5 items-center sm:items-start text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />
                      25+ Years in Semiconductor Innovation
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-cyan" />
                      Wide-Bandgap (SiC/GaN) Expert
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative p-6 rounded-2xl bg-brand-navy-light/40 border border-white/5">
                <Quote className="absolute top-4 left-4 w-10 h-10 text-brand-cyan/5 pointer-events-none" />
                <p className="font-sans text-sm text-slate-300 italic leading-relaxed relative z-10">
                  \"At VEROTERA, we formed a team that bridges the gap between semiconductor physics and industrial OEM deployment. Our goal is to cut through the industry fragmentation and offer integrated, highly efficient, and certified solutions that expedite global electrification. No generic slogans - just reliable, high-performance hardware engineered faster via custom AI modeling tools.\""
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
