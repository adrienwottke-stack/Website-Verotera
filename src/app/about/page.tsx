"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Compass, Eye, Rocket, MapPin, Award, GraduationCap, Quote, CheckCircle2, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const leadershipSpecs = [
    { category: "Innovation Track Record", items: ["100+ products developed and launched", "1500+ customers acquired globally", "Multiple patents in semiconductor technology", "Industry recognition for sustainable innovation"] },
    { category: "Professional Excellence", items: ["25+ years industry experience", "Expert in WBG semiconductors", "AI-driven systems engineering pioneer", "International market development"] },
    { category: "Technical Expertise", items: ["Power electronics design", "Advanced packaging technologies", "Functional safety standards (ISO 26262, IEC 61508)", "Sustainable technology development"] },
    { category: "Strategic Vision", items: ["Global market expansion", "Technology roadmap planning", "OEM & semiconductor partnership building", "Sustainable business practices"] }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-100 antialiased">
      <Header />

      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background decorative mesh glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/5 blur-[150px] pointer-events-none" />

        {/* Hero Banner Section */}
        <section className="max-w-7xl mx-auto px-6 mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Compass className="w-3.5 h-3.5" />
            About VEROTERA GmbH
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Bridging the gap between <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue">
              Semiconductor Physics & System Demand
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-lg text-slate-300 max-w-3xl leading-relaxed"
          >
            VEROTERA is a next-generation semiconductor company driven by deep system-level understanding. We operate across the full stack — from solid-state physics to certified subsystems — designing technologies that reflect the actual constraints of modern electrification.
          </motion.p>
        </section>

        {/* Vision & Mission Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl border border-white/5 bg-brand-navy-card backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />
            <div className="p-4 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan w-fit mb-8">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="font-sans text-slate-300 leading-relaxed">
              We envision a future where sustainable mobility, high-compute data centers, and clean industrial energy grids thrive through cutting-edge, energy-efficient power electronics. By bridging the gap between chip layouts and system architectures, we aim to deliver wide-bandgap (SiC/GaN) technologies that minimize efficiency drops where it matters most, building a cleaner, smarter, and more secure world.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl border border-white/5 bg-brand-navy-card backdrop-blur-md relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-emerald/30 to-transparent" />
            <div className="p-4 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald w-fit mb-8">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="font-sans text-slate-300 leading-relaxed">
              At VEROTERA, we drive structural innovation across automotive, renewables, and compute grids. We do this by delivering advanced packaging systems, functional safety validation (ISO 26262), and robust cybersecurity layers — accelerated by custom AI simulation software. Operating from our NRW development hub in Germany, we align semiconductor materials with real OEM requirements to compress time-to-market.
            </p>
          </motion.div>
        </section>

        {/* Strategic Infrastructure Callout */}
        <section className="max-w-7xl mx-auto px-6 mb-28">
          <div className="p-6 sm:p-8 rounded-3xl border border-white/5 bg-brand-navy-light/40 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="p-3.5 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-1">R&D Center Meerbusch (NRW), Germany</h3>
                <p className="font-sans text-sm text-slate-400">Positioned in Germany's high-tech corridor, driving next-generation power electronics design and verification.</p>
              </div>
            </div>
            <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-slate-300 font-semibold uppercase tracking-wider shrink-0">
              Strategic EU Hub
            </div>
          </div>
        </section>

        {/* Founder & CEO Leadership Deep-Dive */}
        <section id="leadership" className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
              Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Pioneering Power Electronics
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed">
              Expert-led semiconductor design and systems engineering, bringing decades of technical validation to global OEMs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Founder Card Info */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[440px] p-6 sm:p-8 rounded-3xl border border-brand-cyan/15 bg-brand-navy/60 glass-panel shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-blue" />
                
                <div className="flex flex-col items-center text-center mb-6">
                  {/* Photo */}
                  <div className="relative w-32 h-32 rounded-3xl overflow-hidden bg-slate-800 border border-white/10 mb-4 shadow-inner">
                    <Image
                      src="https://verotera.com/images/aly-mashaly-founder-2.png"
                      alt="Aly Mashaly - Founder & CEO"
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">Aly Mashaly</h3>
                  <p className="font-sans text-xs text-brand-cyan font-bold uppercase tracking-wider mb-4">
                    Founder & CEO
                  </p>
                  <div className="flex flex-col gap-2 items-center text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 justify-center">
                      <GraduationCap className="w-4 h-4 text-brand-cyan" />
                      25+ Years WBG Power Electronics Innovation
                    </span>
                    <span className="flex items-center gap-1.5 justify-center">
                      <Award className="w-4 h-4 text-brand-cyan" />
                      Developer of 100+ System-Level Products
                    </span>
                  </div>
                </div>

                <div className="relative p-6 rounded-2xl bg-brand-navy-light/60 border border-white/5 text-left">
                  <Quote className="absolute top-4 left-4 w-10 h-10 text-brand-cyan/5 pointer-events-none" />
                  <p className="font-sans text-xs sm:text-sm text-slate-300 italic leading-relaxed relative z-10">
                    "We established VEROTERA to cut through the fragmentation in current hardware development pipelines. By aligning physical solid-state characteristics directly with certification guidelines, we build custom power solutions with significantly lower development cycles. We bring engineering execution back to the forefront."
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Track Record Spec Grid */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="prose prose-invert max-w-none">
                <h3 className="font-display text-2xl font-bold text-white mb-4">Founder & Executive Experience</h3>
                <p className="font-sans text-slate-300 leading-relaxed mb-6">
                  Aly Mashaly is an internationally recognized leader in developing high-density, energy-efficient power modules. Over his career, he has driven R&amp;D efforts yielding multi-billion-dollar revenues and coordinated strategic partnerships between Tier-1 semiconductor firms and global automotive/grid OEMs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {leadershipSpecs.map((spec) => (
                  <div key={spec.category} className="p-6 rounded-2xl border border-white/5 bg-brand-navy-card hover:border-brand-cyan/20 transition-all duration-300">
                    <h4 className="font-display text-sm font-bold text-brand-cyan uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                      {spec.category}
                    </h4>
                    <ul className="space-y-3">
                      {spec.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-emerald shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-slate-300 leading-normal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Focus Section */}
        <section className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl border border-white/5 bg-brand-navy-card overflow-hidden relative text-left">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
            
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
              Application Scope
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
              Target Markets & Integration Verticals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-cyan font-semibold">
                  <ChevronRight className="w-4 h-4" />
                  <span>Automotive Electrification</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Engineered modules for EV propulsion systems, onboard chargers (OBC), and auxiliary power systems. Incorporating full ASIL-D structural safety parameters.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-cyan font-semibold">
                  <ChevronRight className="w-4 h-4" />
                  <span>Renewables & Storage</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Power conversion architectures for photovoltaic string inverters, battery management systems (BMS), and grid coupling filters.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-cyan font-semibold">
                  <ChevronRight className="w-4 h-4" />
                  <span>Industrial Computations</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
                  High-current power supplies for high-density AI computer racks, active filter networks, and smart process automation grids.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
