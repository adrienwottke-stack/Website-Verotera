"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import { localePath, type Lang } from "@/lib/i18n";

type Slide = {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  text: string;
  ctaHref: string;
};

const SLIDES: Record<Lang, Slide[]> = {
  de: [
    {
      image: "/images/robotics-production.png",
      alt: "Halbleiterfertigung mit Robotik",
      title: "Advanced Semiconductor Technologies",
      subtitle: "Wide-Bandgap at the Core",
      text: "Hocheffiziente WBG Leistungsmodullösungen für eine nachhaltige Zukunft\nVom Chip bis zum System – Technologiekompetenz für die elektrifizierte Welt.",
      ctaHref: "/solutions/wbg-power-modules",
    },
    {
      image: "/images/data-center.png",
      alt: "KI-Rechenzentrum mit Wide-Bandgap-Leistungselektronik",
      title: "AI Data Center – Rack Power Distribution",
      subtitle: "SiC/GaN Technologie maximiert Effizienz und Leistungsdichte",
      text: "Smart PDU – Leistungskonvertierung im Herz des 800 VDC Rack.\nFull-GaN DC-DC Wandler.",
      ctaHref: "/solutions/rack-power-distribution",
    },
    {
      image: "/images/agentic-ai.png",
      alt: "Agentische KI im Systems Engineering",
      title: "Agentic AI in Systems Engineering",
      subtitle: "Autonome Agenten für SiC & GaN",
      text: "Von Copiloten zu autonomen Agenten, die komplexe Engineering-Aufgaben planen und beschleunigen.",
      ctaHref: "/solutions/agentic-ai-engineering",
    },
  ],
  en: [
    {
      image: "/images/robotics-production.png",
      alt: "Semiconductor manufacturing with robotics",
      title: "Advanced Semiconductor Technologies",
      subtitle: "Wide-Bandgap at the Core",
      text: "Highly efficient WBG power module solutions for a sustainable future.\nFrom chip to system — technology expertise for the electrified world.",
      ctaHref: "/solutions/wbg-power-modules",
    },
    {
      image: "/images/data-center.png",
      alt: "AI data center with wide-bandgap power electronics",
      title: "AI Data Center – Rack Power Distribution",
      subtitle: "SiC/GaN technology maximizes efficiency and power density",
      text: "Smart PDU — power conversion at the heart of the 800 VDC rack.\nFull-GaN DC-DC converters.",
      ctaHref: "/solutions/rack-power-distribution",
    },
    {
      image: "/images/agentic-ai.png",
      alt: "Agentic AI in systems engineering",
      title: "Agentic AI in Systems Engineering",
      subtitle: "Autonomous agents for SiC & GaN",
      text: "From copilots to autonomous agents that plan and accelerate complex engineering tasks.",
      ctaHref: "/solutions/agentic-ai-engineering",
    },
  ],
};

const UI: Record<Lang, { cta: string; prev: string; next: string }> = {
  de: { cta: "Mehr erfahren", prev: "Vorheriger Slide", next: "Nächster Slide" },
  en: { cta: "Learn more", prev: "Previous slide", next: "Next slide" },
};

const AUTO_MS = 5000;

export default function Hero() {
  const lang = useLang();
  const slides = SLIDES[lang];
  const ui = UI[lang];
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + count) % count),
    [count],
  );

  // Auto-rotation — paused on hover/focus and when the user prefers reduced motion.
  useEffect(() => {
    if (paused) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTO_MS);
    return () => clearInterval(id);
  }, [count, index, paused]);

  const active = slides[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="VEROTERA Highlights"
      className="sticky top-0 h-screen w-full flex flex-col overflow-hidden z-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Full-bleed background images — stacked, crossfaded via CSS opacity */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, i) => (
          <div
            key={slide.ctaHref}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        {/* Dark overlay over entire image */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main content area */}
      <div className="relative z-10 flex-1 flex items-center pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-6 bg-[#1d3040]/85 backdrop-blur-sm rounded-xl p-10 sm:p-14"
          >
            {/* Logo row */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/v-signet-transparent.png"
                  alt="VEROTERA Signet"
                  width={48}
                  height={48}
                  className="object-contain h-6 w-6 scale-150"
                />
                <Image
                  src="/images/verotera-wordmark.png"
                  alt="VEROTERA"
                  width={824}
                  height={95}
                  className="object-contain h-4 w-auto"
                />
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {active.title}
            </h1>

            <p className="text-lg text-white/80 mb-4">{active.subtitle}</p>

            <p className="text-sm text-white/70 leading-relaxed mb-8 whitespace-pre-line">{active.text}</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={localePath(lang, active.ctaHref)}
                className="btn-brand-gradient inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-lg"
              >
                {ui.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Right side — intentionally empty, background image shows through */}
          <div className="hidden lg:block lg:col-span-6" />
        </div>
      </div>

      {/* Controls bar — pinned to bottom of section */}
      <div className="relative z-10 bg-brand-navy/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4 gap-4">
          {/* Slide indicators */}
          <div className="flex items-center gap-3">
            {slides.map((slide, i) => (
              <button
                key={slide.ctaHref}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}: ${slide.subtitle}`}
                aria-current={i === index ? "true" : undefined}
                className="group py-2 focus:outline-none"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-9 bg-brand-cyan" : "w-4 bg-white/30 group-hover:bg-white/55"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label={ui.prev}
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label={ui.next}
              className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
