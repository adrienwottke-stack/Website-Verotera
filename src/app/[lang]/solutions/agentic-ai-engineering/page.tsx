import type { Metadata } from "next";
import Link from "next/link";
import { BrainCircuit, ArrowRight, Layers, Users, Database, Network } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import VModelInteractive from "@/components/VModelInteractive";
import SplitFeature from "@/components/SplitFeature";
import Reveal from "@/components/Reveal";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const LAYER_ICONS = [Network, Users, Layers, Database];

const COPY: Record<
  Lang,
  {
    heroTitle: string;
    heroSubtitle: string;
    metrics: { value: string; label: string }[];
    layersTitle: string;
    layers: { tag: string; text: string }[];
    feature: { alt: string; eyebrow: string; title: string; body: string[]; bullets: string[] };
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  }
> = {
  de: {
    heroTitle: "Agentische KI im Systems Engineering",
    heroSubtitle:
      "Der Wechsel von passiven KI-Assistenten (Copilots) hin zu autonomen Agenten, die schlussfolgern, planen und handeln, um komplexe, mehrstufige Engineering-Ergebnisse zu liefern – Cognitive Orchestration für SiC- und GaN-Leistungselektronik.",
    metrics: [
      { value: "10×", label: "schnellere Technologieauswahl" },
      { value: "60 %", label: "weniger Simulationsschleifen" },
      { value: "100 %", label: "auditierbare Nachvollziehbarkeit" },
    ],
    layersTitle: "Vier Schichten der Cognitive Orchestration",
    layers: [
      {
        tag: "Orchestration Layer",
        text: "Ein LLM-basierter Orchestrator zerlegt Engineering-Aufgaben in Teilziele, verteilt sie an Spezialagenten, überwacht den Fortschritt und löst Konflikte zwischen konkurrierenden Designvorgaben.",
      },
      {
        tag: "Specialist Agent Pool",
        text: "Domänenagenten für Simulationssteuerung, Datenblatt-Parsing, Topologie-Synthese, Compliance-Prüfung und parametrische Designraum-Exploration – parallel in nebenläufigen Pipelines.",
      },
      {
        tag: "Tool & Knowledge Layer",
        text: "RAG-gestützter Zugriff auf Engineering-Standards (IEC, JEDEC, AEC-Q), Simulations-APIs (SPICE, FEM), Komponentendatenbanken und proprietäre Designbibliotheken.",
      },
      {
        tag: "Memory & Context Store",
        text: "Vektor-Stores und ein Engineering-Knowledge-Graph speichern Designhistorie, Fehlermodi, Trade-off-Entscheidungen und Materialeigenschaften – für projektübergreifendes Lernen.",
      },
    ],
    feature: {
      alt: "Agentischer Produktentwicklungs-Lebenszyklus",
      eyebrow: "Lifecycle",
      title: "Wochen zu Tagen – parallel statt sequenziell",
      body: [
        "Agentenbasierte Systeme komprimieren SiC/GaN-Designzyklen von Wochen auf Tage, indem sie Technologiebewertung, Moduldesign und Topologie-Exploration parallel ausführen und sequenzielle Expertenworkflows ablösen.",
        "An jedem Engineering-Gate – von den Anforderungen bis zur Qualifizierung – bleiben Human-in-the-Loop-Freigaben, volle Auditierbarkeit und kontinuierliche Feedback-Schleifen erhalten.",
      ],
      bullets: [
        "Multikriterielle SiC-vs.-GaN-Bewertung",
        "Autonome Moduloptimierung gegen IEC/JEDEC",
        "Co-Simulation von Topologien & EMI",
        "Knowledge-Graph für WBG-Engineering",
      ],
    },
    ctaTitle: "Engineering Excellence Driven by Agentic AI",
    ctaBody: "Erfahren Sie, wie unsere Agentenarchitektur Ihre Leistungselektronik-Entwicklung beschleunigt.",
    ctaButton: "Gespräch vereinbaren",
  },
  en: {
    heroTitle: "Agentic AI in Systems Engineering",
    heroSubtitle:
      "The shift from passive AI assistants (copilots) to autonomous agents that reason, plan and act to deliver complex, multi-stage engineering outcomes — cognitive orchestration for SiC and GaN power electronics.",
    metrics: [
      { value: "10×", label: "faster technology selection" },
      { value: "60%", label: "fewer simulation loops" },
      { value: "100%", label: "auditable traceability" },
    ],
    layersTitle: "Four layers of cognitive orchestration",
    layers: [
      {
        tag: "Orchestration Layer",
        text: "An LLM-based orchestrator breaks engineering tasks into sub-goals, delegates them to specialist agents, monitors progress and resolves conflicts between competing design requirements.",
      },
      {
        tag: "Specialist Agent Pool",
        text: "Domain agents for simulation control, datasheet parsing, topology synthesis, compliance checking and parametric design-space exploration — running in parallel, concurrent pipelines.",
      },
      {
        tag: "Tool & Knowledge Layer",
        text: "RAG-based access to engineering standards (IEC, JEDEC, AEC-Q), simulation APIs (SPICE, FEM), component databases and proprietary design libraries.",
      },
      {
        tag: "Memory & Context Store",
        text: "Vector stores and an engineering knowledge graph capture design history, failure modes, trade-off decisions and material properties — enabling learning across projects.",
      },
    ],
    feature: {
      alt: "Agentic product development lifecycle",
      eyebrow: "Lifecycle",
      title: "Weeks to days — parallel instead of sequential",
      body: [
        "Agent-based systems compress SiC/GaN design cycles from weeks to days by running technology assessment, module design and topology exploration in parallel — replacing sequential expert workflows.",
        "At every engineering gate — from requirements to qualification — human-in-the-loop approvals, full auditability and continuous feedback loops remain in place.",
      ],
      bullets: [
        "Multi-criteria SiC vs. GaN assessment",
        "Autonomous module optimization against IEC/JEDEC",
        "Co-simulation of topologies & EMI",
        "Knowledge graph for WBG engineering",
      ],
    },
    ctaTitle: "Engineering Excellence Driven by Agentic AI",
    ctaBody: "Find out how our agent architecture accelerates your power electronics development.",
    ctaButton: "Schedule a conversation",
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "How Agentic AI Accelerates SiC & GaN Engineering",
    description:
      "Shift from passive AI copilots to autonomous agents that reason, plan, and act to deliver complex, multi-step engineering outcomes.",
    keywords: ["ai-driven systems engineering", "agentic AI", "semiconductor simulation"],
  },
  en: {
    title: "How Agentic AI Accelerates SiC & GaN Engineering",
    description:
      "Shift from passive AI copilots to autonomous agents that reason, plan, and act to deliver complex, multi-step engineering outcomes.",
    keywords: ["ai-driven systems engineering", "agentic AI", "semiconductor simulation"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/solutions/agentic-ai-engineering", META[l]);
}

export default async function AgenticAiEngineeringPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Lang = hasLang(rawLang) ? rawLang : "de";
  const t = COPY[lang];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="AI Systems Engineering"
          icon={BrainCircuit}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Metrics */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {t.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.1}>
                <div className="text-center rounded-2xl border border-brand-navy/8 bg-surface-light py-8 px-4">
                  <div className="font-display text-4xl font-bold text-brand-cyan mb-1">{m.value}</div>
                  <div className="text-sm text-brand-navy/60">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Ecosystem architecture */}
        <section className="py-16 sm:py-20 bg-surface-light border-y border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
                Agentic AI Ecosystem Architecture
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                {t.layersTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.layers.map((l, i) => {
                const Icon = LAYER_ICONS[i];
                return (
                  <Reveal key={l.tag} delay={i * 0.08}>
                    <div className="glass-panel glass-panel-hover h-full p-7 flex gap-4">
                      <span className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan h-fit shrink-0">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40 block mb-1">
                          L{i + 1}
                        </span>
                        <h3 className="font-display text-base font-bold text-brand-navy mb-2">{l.tag}</h3>
                        <p className="text-sm text-brand-navy/60 leading-relaxed">{l.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interactive V-Model */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <VModelInteractive />
          </div>
        </section>

        {/* Narrative */}
        <section className="py-16 sm:py-24 bg-surface-light border-t border-brand-navy/8">
          <div className="max-w-7xl mx-auto px-6">
            <SplitFeature
              image="/images/agentic-ai-engineering.png"
              alt={t.feature.alt}
              imageSide="right"
              eyebrow={t.feature.eyebrow}
              title={t.feature.title}
              body={t.feature.body}
              bullets={t.feature.bullets}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              {t.ctaTitle}
            </h2>
            <p className="text-brand-navy/60 mb-8">
              {t.ctaBody}
            </p>
            <Link
              href={localePath(lang, "/contacts")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
            >
              {t.ctaButton} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
