"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Award, Briefcase, Check, GraduationCap, Quote, Target } from "lucide-react";
import BrandWatermark from "./BrandWatermark";
import Reveal from "./Reveal";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const GROUP_ICONS = [Briefcase, Award, GraduationCap, Target];

const COPY: Record<
  Lang,
  {
    eyebrow: string;
    headline: string;
    bio1: string;
    bio2: string;
    stats: { label: string; value: number; suffix: string }[];
    founderRole: string;
    founderFact1: string;
    founderFact2: string;
    quoteLabel: string;
    quote: string;
    photoAlt: string;
    groups: { title: string; items: string[] }[];
  }
> = {
  de: {
    eyebrow: "Führungsteam",
    headline: "Erfahrene Führungspersönlichkeiten treiben Innovation in der Halbleitertechnologie voran",
    bio1:
      "Mit über 25 Jahren wegweisender Erfahrung in der Leistungselektronik und Halbleitertechnologie ist Aly Mashaly eine anerkannte Führungspersönlichkeit in der Entwicklung nachhaltiger Hochleistungslösungen. Er hat mehr als 100 Produkte entwickelt und über 1.000 Kunden weltweit betreut. Seine Arbeit hat maßgeblich zur Weiterentwicklung von Wide-Bandgap-Halbleitertechnologien beigetragen – und er verfügt über eine nachgewiesene Erfolgsbilanz bei der Leitung komplexer Großprojekte mit Umsätzen im Milliardenbereich.",
    bio2:
      "Als Gründer und CEO von VEROTERA verbindet er tiefe technische Expertise mit ausgeprägtem unternehmerischem Denken. Seine strategische Vision konzentriert sich auf die Lösung zentraler Herausforderungen in der Elektromobilität, bei erneuerbaren Energien und in der Industrie – getrieben von einem Bekenntnis zu ökologischer Verantwortung und Engineering-Exzellenz.",
    stats: [
      { label: "Entwickelte & eingeführte Produkte", value: 100, suffix: "+" },
      { label: "Kunden weltweit", value: 1500, suffix: "+" },
      { label: "Jahre Branchenerfahrung", value: 25, suffix: "+" },
      { label: "Patente in der Halbleitertechnologie", value: 18, suffix: "+" },
    ],
    founderRole: "Gründer & CEO",
    founderFact1: "Experte für WBG-Halbleiter",
    founderFact2: "Pionier im KI-gestützten Systems Engineering",
    quoteLabel: "Führungsphilosophie",
    quote:
      "„Innovation in der Halbleitertechnologie erfordert nicht nur technische Expertise, sondern auch ein tiefes Verständnis von Marktanforderungen und nachhaltigen Praktiken. Bei VEROTERA verbinden wir jahrzehntelange Branchenerfahrung mit modernsten KI-gestützten Engineering-Methoden – um Lösungen zu entwickeln, die die Zukunft der Elektromobilität, erneuerbarer Energien und industrieller Anwendungen gestalten. Unser Anspruch geht über Technologie hinaus – wir bauen eine nachhaltige Zukunft, in der Effizienz und ökologische Verantwortung Hand in Hand gehen.“",
    photoAlt: "Aly Mashaly – Gründer & CEO von VEROTERA",
    groups: [
      {
        title: "Berufliche Exzellenz",
        items: [
          "25+ Jahre Branchenerfahrung",
          "Experte für WBG-Halbleiter",
          "Pionier im KI-gestützten Systems Engineering",
          "Globale Geschäftsentwicklung",
        ],
      },
      {
        title: "Innovationsbilanz",
        items: [
          "100+ entwickelte und eingeführte Produkte",
          "1.500 Kunden weltweit gewonnen",
          "Mehrere Patente in der Halbleitertechnologie",
          "Branchenanerkennung für nachhaltige Innovation",
        ],
      },
      {
        title: "Technische Expertise",
        items: [
          "Design von Leistungselektronik",
          "Packaging-Technologien",
          "Standards der funktionalen Sicherheit",
          "Entwicklung nachhaltiger Technologien",
        ],
      },
      {
        title: "Strategische Vision",
        items: [
          "Globale Marktexpansion",
          "M&A-Strategieentwicklung",
          "Technologie-Roadmap-Planung",
          "Nachhaltige Geschäftspraktiken",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Leadership Team",
    headline: "Experienced leaders driving innovation in semiconductor technology",
    bio1:
      "With more than 25 years of pioneering experience in power electronics and semiconductor technology, Aly Mashaly is a recognized leader in the development of sustainable high-performance solutions. He has developed more than 100 products and served over 1,000 customers worldwide. His work has contributed significantly to the advancement of wide-bandgap semiconductor technologies — with a proven track record of leading complex large-scale projects with revenues in the billions.",
    bio2:
      "As founder and CEO of VEROTERA, he combines deep technical expertise with strong entrepreneurial thinking. His strategic vision focuses on solving key challenges in e-mobility, renewable energy and industry — driven by a commitment to environmental responsibility and engineering excellence.",
    stats: [
      { label: "Products developed & launched", value: 100, suffix: "+" },
      { label: "Customers worldwide", value: 1500, suffix: "+" },
      { label: "Years of industry experience", value: 25, suffix: "+" },
      { label: "Semiconductor technology patents", value: 18, suffix: "+" },
    ],
    founderRole: "Founder & CEO",
    founderFact1: "Expert in WBG semiconductors",
    founderFact2: "Pioneer in AI-assisted systems engineering",
    quoteLabel: "Leadership Philosophy",
    quote:
      "“Innovation in semiconductor technology requires not only technical expertise but also a deep understanding of market needs and sustainable practices. At VEROTERA we combine decades of industry experience with state-of-the-art AI-assisted engineering methods — to develop solutions that shape the future of e-mobility, renewable energy and industrial applications. Our ambition goes beyond technology — we are building a sustainable future in which efficiency and environmental responsibility go hand in hand.”",
    photoAlt: "Aly Mashaly — Founder & CEO of VEROTERA",
    groups: [
      {
        title: "Professional Excellence",
        items: [
          "25+ years of industry experience",
          "Expert in WBG semiconductors",
          "Pioneer in AI-assisted systems engineering",
          "Global business development",
        ],
      },
      {
        title: "Innovation Track Record",
        items: [
          "100+ products developed and launched",
          "1,500 customers won worldwide",
          "Multiple semiconductor technology patents",
          "Industry recognition for sustainable innovation",
        ],
      },
      {
        title: "Technical Expertise",
        items: [
          "Power electronics design",
          "Packaging technologies",
          "Functional safety standards",
          "Sustainable technology development",
        ],
      },
      {
        title: "Strategic Vision",
        items: [
          "Global market expansion",
          "M&A strategy development",
          "Technology roadmap planning",
          "Sustainable business practices",
        ],
      },
    ],
  },
};

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
    <span
      ref={ref}
      className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue"
    >
      {count}
      {suffix}
    </span>
  );
}

/**
 * About page — leadership block (Pattern I: stats + founder spotlight card,
 * plus the four credential groups from the customer input below).
 */
export default function AboutLeadership() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <section id="leadership" className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[440px] h-[440px] bg-brand-blue/[0.05] rounded-full blur-[130px] pointer-events-none" />
      <BrandWatermark position="bottom-left" tint="blue" size={480} opacity={0.05} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Left: header + bio + stat counters */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed mb-5">
                {t.bio1}
              </p>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed mb-12">
                {t.bio2}
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-8">
              {t.stats.map((stat) => (
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

          {/* Right: founder spotlight card */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-[500px] p-6 sm:p-8 rounded-3xl border border-brand-navy/8 bg-white shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan" />

              <div className="flex flex-col sm:flex-row gap-6 items-center mb-6">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-surface-light border border-brand-navy/8 shrink-0">
                  <Image
                    src="/images/aly-mashaly-founder-2.png"
                    alt={t.photoAlt}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-1">
                    Aly Mashaly
                  </h3>
                  <p className="font-sans text-xs text-brand-cyan font-semibold uppercase tracking-wider mb-2.5">
                    {t.founderRole}
                  </p>

                  <div className="flex flex-col gap-1.5 items-center sm:items-start text-xs text-brand-navy/50">
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />
                      {t.founderFact1}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-brand-cyan" />
                      {t.founderFact2}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative p-6 rounded-2xl bg-surface-light border border-brand-navy/8">
                <Quote className="absolute top-4 left-4 w-10 h-10 text-brand-cyan/5 pointer-events-none" />
                <span className="text-[9px] font-bold text-brand-navy tracking-wider uppercase mb-2 block relative z-10">
                  {t.quoteLabel}
                </span>
                <p className="font-sans text-sm text-brand-navy/60 italic leading-relaxed relative z-10">
                  {t.quote}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Credential groups (slide 48) */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.groups.map((group, i) => {
            const Icon = GROUP_ICONS[i];
            return (
              <Reveal key={group.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-brand-navy leading-tight">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 list-none m-0 p-0">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="font-sans text-sm text-brand-navy/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
