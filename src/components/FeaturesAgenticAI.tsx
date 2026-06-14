"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bot, Workflow, ShieldCheck, GitBranch } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

const CAPABILITIES = [
  { icon: Bot, label: "Autonome KI-Agenten statt passiver Copiloten" },
  { icon: Workflow, label: "MBSE-gestützte Architektur über den gesamten V-Zyklus" },
  { icon: GitBranch, label: "Human-in-the-Loop bei jeder kritischen Entscheidung" },
  { icon: ShieldCheck, label: "Sichere, abgeschottete Engineering-Umgebung" },
];

export default function FeaturesAgenticAI() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Decorative blurred background light */}
      <div className="absolute left-1/4 top-0 w-[420px] h-[420px] bg-brand-cyan/[0.06] rounded-full blur-[130px] pointer-events-none" />
      <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-brand-navy/8 shadow-lg bg-brand-navy"
        >
          {/* Left: Navy content panel */}
          <div className="relative p-10 sm:p-14 flex flex-col justify-center bg-gradient-to-br from-brand-navy to-[#0b1b2b]">
            <span className="text-brand-cyan text-xs font-bold uppercase tracking-widest mb-4 block">
              Features · KI-Engineering
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
              Agentische KI im Systems Engineering
            </h2>
            <p className="font-sans text-base text-white/70 leading-relaxed mb-8">
              Der Wandel von passiven KI-Assistenten hin zu autonomen Agenten, die
              komplexe, mehrstufige Engineering-Aufgaben eigenständig planen, abwägen
              und ausführen – und damit die Entwicklung von SiC- und GaN-Systemen
              spürbar beschleunigen.
            </p>

            <ul className="space-y-3 mb-10 list-none m-0 p-0">
              {CAPABILITIES.map((cap) => (
                <li key={cap.label} className="flex items-start gap-3">
                  <span className="mt-0.5 p-1.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                    <cap.icon className="w-4 h-4" />
                  </span>
                  <span className="font-sans text-sm text-white/80 leading-relaxed">
                    {cap.label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/solutions/agentic-ai-engineering"
                className="inline-flex items-center justify-center gap-2 bg-brand-cyan text-brand-navy font-semibold px-6 py-3 rounded-lg text-sm hover:bg-brand-cyan/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,184,207,0.4)]"
              >
                Discover more
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/10 hover:border-white/40 transition-colors duration-200"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/agentic-ai-system.png"
              alt="Agentische KI im Systems Engineering"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle left-edge gradient to blend into the navy panel on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-navy/60 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
