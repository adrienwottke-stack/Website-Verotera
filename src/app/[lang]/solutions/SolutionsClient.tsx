"use client";

import { motion } from "framer-motion";
import { Cpu, Settings, BrainCircuit, ShieldAlert, Sparkles, Check, TableProperties, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLocalePath } from "@/components/LangProvider";

export default function SolutionsClient() {
  const p = useLocalePath();
  const comparisonData = [
    { metric: "Max Switching Frequency", silicon: "10 - 20 kHz", wbg: "100 - 500+ kHz", impact: "Reduces size of inductors/capacitors by 4x" },
    { metric: "Operating Junction Temp", silicon: "150°C max", wbg: "200°C+", impact: "Simplifies cooling grids & reduces weight" },
    { metric: "Switching Power Loss", silicon: "Baseline", wbg: "Up to 75% reduction", impact: "Boosts overall system efficiency to 99.2%" },
    { metric: "Voltage Handling Density", silicon: "Medium", wbg: "Extremely High (SiC)", impact: "Supports 800V+ automotive platforms easily" },
    { metric: "Design validation time", silicon: "4 - 8 weeks", wbg: "Hours (AI optimized)", impact: "Halves prototyping costs & iterations" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 antialiased">
      <Header />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background mesh glows */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-emerald/5 blur-[150px] pointer-events-none" />

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 mb-8 text-left">
          <Link
            href={p("/")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/5 hover:bg-brand-cyan/10 hover:border-brand-cyan/20 text-slate-300 hover:text-brand-cyan transition-all duration-300 font-sans text-xs font-semibold uppercase tracking-wider group focus:outline-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Page Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Cpu className="w-3.5 h-3.5" />
            Core Solutions Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Deep Technical Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-emerald">
              High-Power Electrification
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-slate-300 max-w-3xl leading-relaxed"
          >
            We don&apos;t offer generic templates or standalone hardware components. We provide fully integrated power modules, certified system development, and AI design optimization.
          </motion.p>
        </section>

        {/* Section 1: WBG Power Modules */}
        <section id="power-modules" className="max-w-7xl mx-auto px-6 mb-28 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                  <Cpu className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">WBG Power Modules</h2>
              </div>
              <p className="font-sans text-slate-300 leading-relaxed">
                Silicon Carbide (SiC) and Gallium Nitride (GaN) are wide-bandgap (WBG) materials that outperform conventional silicon in power conversion. The challenge is packaging these high-density semiconductor chips to withstand extreme thermal stresses and operate without parasitic inductance.
              </p>
              <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
                VEROTERA designs and constructs custom modules. By implementing proprietary package-level die layouts, thin-film thermal layers, and direct copper bindings, we ensure your semiconductor module handles higher switching frequencies, runs cooler, and operates in space-constrained enclosures.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Custom layout geometries for SiC/GaN dies</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">High junction temperature capability (200°C+)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Ultra-low stray inductance package design</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Direct integration compatibility at system level</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] aspect-square rounded-3xl border border-white/5 bg-brand-navy-card p-6 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  Thermal Model
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-brand-cyan uppercase tracking-wider mb-2">Technical Blueprint</h4>
                  <p className="font-sans text-xs text-slate-400">Low thermal resistance substrate layer coupled with active cooling bindings.</p>
                </div>
                {/* Custom simulated graphic element of a module layer stack */}
                <div className="space-y-2 py-4">
                  <div className="h-8 rounded-lg bg-brand-cyan/20 border border-brand-cyan/30 flex items-center justify-between px-3 text-[10px] text-brand-cyan font-mono">
                    <span>Die Layer: SiC / GaN</span>
                    <span>T_junction: 200°C</span>
                  </div>
                  <div className="h-8 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-between px-3 text-[10px] text-brand-blue font-mono">
                    <span>Substrate: AlN Ceramic</span>
                    <span>R_th: 0.15 K/W</span>
                  </div>
                  <div className="h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between px-3 text-[10px] text-slate-400 font-mono">
                    <span>Baseplate: Direct Copper</span>
                    <span>thickness: 3.0 mm</span>
                  </div>
                </div>
                <span className="text-[10px] text-brand-emerald font-semibold uppercase tracking-wider block">
                  ✔ Tested for stray inductance &lt; 5 nH
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Systems Engineering */}
        <section id="systems-engineering" className="max-w-7xl mx-auto px-6 mb-28 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-last lg:order-first flex justify-center">
              <div className="w-full max-w-[420px] aspect-square rounded-3xl border border-white/5 bg-brand-navy-card p-8 flex flex-col justify-between text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  ASIL-D Standard
                </div>
                <div className="p-3.5 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald w-fit mb-4">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white mb-2">Safety Certification Ready</h4>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We structure our systems layouts and control software directly in accordance with **ISO 26262 (ASIL-D)** and **IEC 61508** from day one.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-4 mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                    HIL simulation validation passed
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-brand-emerald shrink-0" />
                    Embedded cyber-threat protection active
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 text-left space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Systems Engineering</h2>
              </div>
              <p className="font-sans text-slate-300 leading-relaxed">
                Integrating efficient semiconductor packages is only half the battle. They must function reliably within a system architecture. Our team bridges this gap, developing complete, certifiable systems designed for traction inverters, solar converters, and grid battery chargers.
              </p>
              <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
                We design and validate the complete hardware package: custom PCBs, gating drivers, system control code, cooling plates, and mechanical enclosures. This end-to-end management guarantees system matching and resolves mismatch errors early.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Automotive traction inverter designs</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Functional safety (ISO 26262 ASIL-D)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Hardware-in-the-loop (HIL) testing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Integrated system cybersecurity layers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: AI Solutions */}
        <section id="ai-solutions" className="max-w-7xl mx-auto px-6 mb-28 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">AI Solutions</h2>
              </div>
              <p className="font-sans text-slate-300 leading-relaxed">
                Traditional hardware engineering relies on trial-and-error loops that delay production timelines. At VEROTERA, we bypass this fragmentation by integrating AI modeling directly into the hardware design pipeline.
              </p>
              <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
                Our custom software agents automate component routing and optimize thermal via coordinates in seconds. Rather than waiting weeks for mock tests, our models simulate thermal behavior under active voltage profiles to predict physical faults early, significantly reducing development cycles.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Generative layout &amp; thermal via pathing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Thermal modeling and physics simulation</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">Early stage hardware behavior analytics</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-sm text-slate-300">AI-driven component matching parameters</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[420px] aspect-square rounded-3xl border border-white/5 bg-brand-navy-card p-6 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 p-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  AI Design Engine
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-brand-blue/30 bg-brand-navy/60 text-brand-blue text-xs font-semibold w-fit">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  AI Optimization Agent Active
                </div>
                
                {/* Visual flowchart list representing optimization */}
                <div className="space-y-2 text-left my-4">
                  <div className="text-[10px] text-slate-400 font-mono">1. Parse input specs ➔ SUCCESS</div>
                  <div className="text-[10px] text-slate-400 font-mono">2. Calculate stray inductances ➔ 4.2 nH</div>
                  <div className="text-[10px] text-brand-cyan font-mono">3. Optimize thermal via path ➔ COMPLETE (12s)</div>
                  <div className="text-[10px] text-brand-emerald font-mono">4. Safety compliance report generated</div>
                </div>

                <div className="p-4 rounded-xl bg-brand-blue/5 border border-brand-blue/10 text-xs text-slate-300 leading-normal text-left">
                  <strong>Validation Speed:</strong> Reduced traditional simulation wait time from 4 days to 45 seconds with 98.7% layout accuracy.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Comparison Table */}
        <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl border border-white/5 bg-brand-navy-card text-left">
            <div className="flex items-center gap-3 mb-6">
              <TableProperties className="w-6 h-6 text-brand-cyan" />
              <h2 className="font-display text-2xl font-bold text-white">Silicon vs. Wide-Bandgap (SiC/GaN)</h2>
            </div>
            <p className="font-sans text-sm text-slate-300 mb-8 leading-relaxed max-w-3xl">
              Compare how next-generation WBG materials, optimized through VEROTERA&apos;s packaging and systems design, outperform traditional silicon components in target high-power applications.
            </p>

            {/* Table wrapper */}
            <div className="overflow-x-auto border border-white/5 rounded-2xl">
              <table className="w-full text-left font-sans text-xs sm:text-sm">
                <thead>
                  <tr className="bg-brand-navy-light/60 border-b border-white/5 text-slate-300 font-semibold uppercase tracking-wider">
                    <th className="p-4">Technical Parameter</th>
                    <th className="p-4">Traditional Silicon</th>
                    <th className="p-4 text-brand-cyan">VEROTERA WBG (SiC/GaN)</th>
                    <th className="p-4 text-slate-400">System Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {comparisonData.map((row) => (
                    <tr key={row.metric} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium">{row.metric}</td>
                      <td className="p-4 text-slate-400">{row.silicon}</td>
                      <td className="p-4 text-brand-cyan font-semibold">{row.wbg}</td>
                      <td className="p-4 text-brand-emerald">{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
