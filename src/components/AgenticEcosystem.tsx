"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import BrandWatermark from "./BrandWatermark";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const COPY: Record<
  Lang,
  {
    sectionEyebrow: string;
    lead: string;
    imageAlt: string;
    title: string;
    eyebrow: string;
    intro: string;
    bullets: string[];
    closing: string;
  }
> = {
  de: {
    sectionEyebrow: "Collaborative Intelligence – ein neuro-symbolischer Ansatz",
    lead:
      "Die KI erweitert das Ingenieururteil – Von der Empfehlung zur belegten Entscheidungsgrundlage – nachvollziehbar und reproduzierbar.",
    imageAlt: "Agentische KI im Systems Engineering",
    title: "Human-in-the-Loop by design",
    eyebrow: "Lösungen",
    intro:
      "VEROTERA strukturiert die folgenreichste Entscheidung der frühen Entwicklungsphase: die Wide-Bandgap-Technologieauswahl – bewertet, begründet und auf ihre Quellen zurückführbar.",
    bullets: [
      "Schnellere und zuverlässigere Systementwicklung",
      "Nahtlose Zusammenarbeit zwischen Teams und Technologien",
      "Adaptive Modelle, die aus Daten und Kontext lernen",
      "Eine klare Brücke zwischen Innovation und Umsetzung",
      "On-Prem: Maximale Datensicherheit & DSGVO",
    ],
    closing:
      "Unsere Lösungen verwandeln Komplexität in Klarheit – sie beschleunigen Innovation und erschließen die kollektive Intelligenz von Engineering-Organisationen.",
  },
  en: {
    sectionEyebrow: "Collaborative Intelligence – a neurosymbolic approach",
    lead:
      "AI extends engineering judgment – turning a recommendation into a documented basis for decisions: traceable and reproducible.",
    imageAlt: "Agentic AI in systems engineering",
    title: "Human-in-the-Loop by design",
    eyebrow: "Solutions",
    intro:
      "VEROTERA brings structure to the most consequential decision of the early development phase: the Wide-Bandgap technology choice – assessed, justified and traceable to its sources.",
    bullets: [
      "Faster, more reliable system development",
      "Seamless collaboration across teams and technologies",
      "Adaptive models that learn from data and context",
      "A clear bridge between innovation and execution",
      "On-prem: maximum data security & GDPR compliance",
    ],
    closing:
      "Our solutions turn complexity into clarity — accelerating innovation and unlocking the collective intelligence of engineering organizations.",
  },
};

/**
 * Slide 12 — Agentic AI Ecosystem Architecture.
 * White section with a centered header above an image-left / navy-panel-right
 * split, following the WhyVerotera navy-panel idiom with green-check bullets.
 */
export default function AgenticEcosystem() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <BrandWatermark position="bottom-left" tint="navy" size={480} opacity={0.045} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Centered header */}
        <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
            {t.sectionEyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
            {t.lead}
          </h2>
        </Reveal>

        {/* Split: image left, navy panel right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <Reveal className="lg:col-span-6">
            <div className="relative h-full min-h-[320px] lg:min-h-[480px] rounded-2xl overflow-hidden border border-brand-navy/8">
              <Image
                src="/images/agentic-ai-system.png"
                alt={t.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          {/* Text panel */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="lg:pl-10 h-full flex flex-col justify-center py-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-8 leading-tight">
                {t.title}
              </h3>

              <span className="text-brand-blue text-xs font-bold uppercase tracking-wider block mb-3">
                {t.eyebrow}
              </span>
              <p className="text-brand-navy/70 text-sm sm:text-base leading-relaxed mb-6">
                {t.intro}
              </p>

              <ul className="space-y-3 list-none m-0 p-0 mb-8">
                {t.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-emerald shrink-0 mt-0.5" />
                    <span className="text-brand-navy/80 text-sm sm:text-base">{b}</span>
                  </li>
                ))}
              </ul>

              <p className="text-brand-navy/60 text-sm leading-relaxed italic">
                {t.closing}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
