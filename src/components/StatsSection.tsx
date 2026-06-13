"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Quote } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

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
      label: "Entwickelte Produkte",
      value: 100,
      suffix: "+",
    },
    {
      label: "Kunden weltweit",
      value: 1500,
      suffix: "+",
    },
    {
      label: "Jahre Expertise",
      value: 25,
      suffix: "+",
    },
    {
      label: "Patente in Halbleitertechnologie",
      value: 18,
      suffix: "+",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-white border-t border-brand-blue/10 overflow-hidden">
      {/* Decorative blurred background lights */}
      <div className="absolute bottom-0 right-0 w-[440px] h-[440px] bg-brand-blue/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <BrandWatermark position="top-right" tint="blue" size={480} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Area: Stats Counts */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
              Bewiesene Erfolgsbilanz
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-6">
              Zahlen sprechen lauter <br className="hidden sm:inline" />
              als Technologie-Schlagworte
            </h2>
            <p className="font-sans text-base text-brand-navy/60 leading-relaxed mb-12">
              Wir fokussieren uns auf messbare Engineering-Leistungen. Unser Team hat aktiv Elektronik weltweit für industrielle Stromnetze und sicherheitskritische Plattformen entwickelt, simuliert, zertifiziert und eingesetzt.
            </p>

            {/* Grid of numbers */}
            <div className="grid grid-cols-2 gap-8">
              {statsList.map((stat) => (
                <div key={stat.label} className="p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                  <div className="mb-2">
                    <SafeCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-semibold text-brand-navy/50">
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
              className="w-full max-w-[500px] p-6 sm:p-8 rounded-3xl border border-brand-navy/8 bg-white shadow-sm relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan" />
              
              <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
                {/* Founder Photo */}
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-surface-light border border-brand-navy/8 shrink-0">
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
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
                    Aly Mashaly
                  </h3>
                  <p className="font-sans text-xs text-brand-cyan font-semibold uppercase tracking-wider mb-2.5">
                    Gründer & Geschäftsführer
                  </p>

                  <div className="flex flex-col gap-1.5 items-center sm:items-start text-xs text-brand-navy/50">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />
                      25+ Jahre Halbleiterinnovation
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-cyan" />
                      Wide-Bandgap (SiC/GaN) Experte
                    </span>
                  </div>
                </div>
              </div>

              {/* Quote Block */}
              <div className="relative p-6 rounded-2xl bg-surface-light border border-brand-navy/8">
                <Quote className="absolute top-4 left-4 w-10 h-10 text-brand-cyan/5 pointer-events-none" />
                <p className="font-sans text-sm text-brand-navy/60 italic leading-relaxed relative z-10">
                  „Bei VEROTERA haben wir ein Team geformt, das die Lücke zwischen Halbleiterphysik und industriellem OEM-Einsatz überbrückt. Unser Ziel ist es, die Fragmentierung der Branche zu durchbrechen und integrierte, hocheffiziente und zertifizierte Lösungen anzubieten, die die globale Elektrifizierung beschleunigen. Keine generischen Slogans – nur zuverlässige Hochleistungshardware, die durch maßgeschneiderte KI-Modellierungswerkzeuge schneller entwickelt wird."
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
