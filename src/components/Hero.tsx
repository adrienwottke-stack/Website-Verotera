"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Cpu } from "lucide-react";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 90;
      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute inset-0 z-0">
        {/* Large glowing cyan sphere */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/15 blur-[100px] pointer-events-none"
        />
        {/* Large glowing blue/purple sphere */}
        <motion.div
          animate={{
            x: [0, -45, 30, 0],
            y: [0, 35, -25, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none"
        />
      </div>

      {/* Decorative SVG Circuit Tracks */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M -100 200 L 300 200 L 400 300 L 900 300 L 1000 400 M 1000 400 L 1400 400"
            fill="none"
            stroke="url(#circuit-gradient-1)"
            strokeWidth="1.5"
            className="circuit-line"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 1600 800 L 1200 800 L 1100 700 L 600 700 L 500 600 L -100 600"
            fill="none"
            stroke="url(#circuit-gradient-2)"
            strokeWidth="1.5"
            className="circuit-line"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="circuit-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="circuit-gradient-2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="1" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Cpu className="w-3.5 h-3.5" />
            Advanced Power Electronics · AI Engineered
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6"
          >
            The power electronics <br />
            behind an{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan bg-[size:200%] animate-[pulse_6s_ease-in-out_infinite]">
              electrified world.
            </span>
          </motion.h1>

          {/* Subline - Radically clear explaining what VEROTERA does */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10"
          >
            VEROTERA turns next-generation semiconductor chips (Silicon Carbide / SiC & Gallium Nitride / GaN) into highly efficient power modules and complete, certified systems - making electric vehicles, renewable energy, and data centers more efficient. And we use AI tools to build them faster.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={(e) => handleScroll(e, "#what-we-do")}
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-display text-base font-semibold tracking-wide text-[#020617] bg-brand-cyan hover:bg-brand-cyan/90 transition-all duration-300 shadow-[0_0_20px_rgba(45,212,191,0.25)] hover:shadow-[0_0_30px_rgba(45,212,191,0.45)] transform hover:-translate-y-0.5"
            >
              See what we build
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={(e) => handleScroll(e, "#contact")}
              className="flex items-center justify-center px-8 py-3.5 rounded-full font-display text-base font-semibold tracking-wide text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-0.5"
            >
              Talk to us
            </button>
          </motion.div>
        </div>

        {/* Visual Semiconductor Wafer Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden glass-panel border border-brand-cyan/20 p-2 shadow-2xl group">
            {/* Inner rotating tech layout decoration border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/10 via-transparent to-brand-blue/15 pointer-events-none z-10" />

            {/* Glowing corner brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-cyan/40 pointer-events-none" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-brand-cyan/40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-brand-cyan/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-cyan/40 pointer-events-none" />

            {/* Main Image */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900/50">
              <Image
                src="https://verotera.com/images/wafer.png"
                alt="VEROTERA Silicon Carbide Semiconductor Wafer"
                fill
                priority
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60" />
            </div>

            {/* Status overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-brand-navy/90 border border-white/5 backdrop-blur-md">
              <span className="flex h-2.5 w-2.5 rounded-full bg-brand-cyan animate-ping" />
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">Active Packaging Node</span>
                <span className="text-xs text-white font-medium">SiC / GaN Wide-Bandgap Module</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
