"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 90;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const tabs = [
    { label: "WBG Leistungsmodule & Technologie", href: "#what-we-do" },
    { label: "KI-Rechenzentren", href: "#industries" },
    { label: "Agentische KI im Systems Engineering", href: "#solutions" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/data-center.png"
          alt="KI-Rechenzentrum mit Wide-Bandgap-Leistungselektronik"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay over entire image */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main content area — takes up the full screen minus the tab bar */}
      <div className="relative z-10 flex-1 flex items-center pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left glass panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 bg-[#1d3040]/85 backdrop-blur-sm rounded-xl p-10 sm:p-14"
          >
            {/* Logo row */}
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/images/v-signet-transparent.png"
                alt="VEROTERA Signet"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-display text-white text-lg font-bold tracking-widest uppercase">
                VEROTERA
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Advanced Semiconductor Technologies
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-white/80 mb-4">
              Wide-Bandgap at the Core
            </p>

            {/* Tagline */}
            <p className="text-sm text-white/70 leading-relaxed mb-8">
              Ihr Technologie- und Systempartner für WBG-Leistungsmodule der nächsten Generation. Entdecken Sie die umfassende Systemkompetenz für die elektrifizierte Welt.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => scrollTo("#what-we-do")}
              className="inline-block bg-brand-cyan text-brand-navy font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-brand-cyan/90 hover:shadow-[0_0_20px_rgba(34,184,207,0.4)]"
            >
              Mehr erfahren
            </button>
          </motion.div>

          {/* Right side — intentionally empty, background image shows through */}
          <div className="hidden lg:block lg:col-span-6" />
        </div>
      </div>

      {/* Tab navigation bar — pinned to bottom of section */}
      <div className="relative z-10 bg-brand-navy/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => scrollTo(tab.href)}
                className="px-6 py-4 text-sm text-white/70 hover:text-white border-b-2 border-transparent hover:border-brand-cyan transition-all duration-200 whitespace-nowrap"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
