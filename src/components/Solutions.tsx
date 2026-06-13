"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BrandWatermark from "./BrandWatermark";

const solutions = [
  {
    category: "Technologie Spotlight",
    title: "Gallium Nitride (GaN)",
    image: "/images/GaN.png",
    href: "/solutions#gan",
  },
  {
    category: "Technologie Spotlight",
    title: "Silicium Carbide (SiC)",
    image: "/images/SiC.png",
    href: "/solutions#sic",
  },
  {
    category: "KI-Rechenzentren",
    title: "Rack Power Distribution Unit Smart PDU",
    image: "/images/ai-data-center-rack.png",
    href: "/solutions#ai-datacenter",
  },
  {
    category: "Automotive",
    title: "Power Train – Antriebsstrang",
    image: "/images/sic-gan-car.png",
    href: "/solutions#automotive",
  },
  {
    category: "E-Mobility",
    title: "Elektrifizierung von Nutzfahrzeugen",
    image: "/images/electric-truck.png",
    href: "/solutions#emobility",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* Decorative blurred background lights */}
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-brand-cyan/[0.06] rounded-full blur-[120px] pointer-events-none" />
      <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-3 block">
            Lösungen & Technologien
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-5">
            Von der Anwendungsanforderung zur systemgerechten WBG-Halbleiterlösung
          </h2>
          <p className="font-sans text-base text-brand-navy/60">
            SiC und GaN – für jede Applikation die richtige Lösung.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-brand-navy/10 bg-white shadow-sm hover:shadow-md hover:border-brand-cyan/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 rounded-t-2xl overflow-hidden bg-surface-light">
                <Image
                  src={sol.image}
                  alt={sol.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cyan mb-1">
                  {sol.category}
                </span>
                <h3 className="font-display text-sm font-bold text-brand-navy mb-4 leading-snug flex-1">
                  {sol.title}
                </h3>
                <a
                  href={sol.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-cyan text-brand-navy text-xs font-semibold hover:bg-brand-cyan/90 transition-colors duration-200 w-full justify-center"
                >
                  Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-base text-brand-navy/70 mb-2 font-medium">
            Benötigen Sie Expertenunterstützung, um innovative WBG-Technologie in anwendungsreife Systemlösungen zu überführen?
          </p>
          <p className="text-sm text-brand-navy/50 mb-6 max-w-2xl mx-auto">
            Unsere Applikations- und Technologieexperten unterstützen Sie bei Auslegung, Validierung und Aufbau von SiC- und GaN-Lösungen, die exakt auf Ihre Systemanforderungen zugeschnitten sind.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors">
            Jetzt starten <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
