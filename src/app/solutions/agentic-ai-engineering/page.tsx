import type { Metadata } from "next";
import Link from "next/link";
import { BrainCircuit, ArrowRight, Layers, Users, Database, Network } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import VModelInteractive from "@/components/VModelInteractive";
import SplitFeature from "@/components/SplitFeature";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "How Agentic AI Accelerates SiC & GaN Engineering",
  description:
    "Shift from passive AI copilots to autonomous agents that reason, plan, and act to deliver complex, multi-step engineering outcomes.",
  keywords: ["ai-driven systems engineering", "agentic AI", "semiconductor simulation"],
};

const layers = [
  {
    tag: "Orchestration Layer",
    icon: Network,
    text: "Ein LLM-basierter Orchestrator zerlegt Engineering-Aufgaben in Teilziele, verteilt sie an Spezialagenten, überwacht den Fortschritt und löst Konflikte zwischen konkurrierenden Designvorgaben.",
  },
  {
    tag: "Specialist Agent Pool",
    icon: Users,
    text: "Domänenagenten für Simulationssteuerung, Datenblatt-Parsing, Topologie-Synthese, Compliance-Prüfung und parametrische Designraum-Exploration – parallel in nebenläufigen Pipelines.",
  },
  {
    tag: "Tool & Knowledge Layer",
    icon: Layers,
    text: "RAG-gestützter Zugriff auf Engineering-Standards (IEC, JEDEC, AEC-Q), Simulations-APIs (SPICE, FEM), Komponentendatenbanken und proprietäre Designbibliotheken.",
  },
  {
    tag: "Memory & Context Store",
    icon: Database,
    text: "Vektor-Stores und ein Engineering-Knowledge-Graph speichern Designhistorie, Fehlermodi, Trade-off-Entscheidungen und Materialeigenschaften – für projektübergreifendes Lernen.",
  },
];

const metrics = [
  { value: "10×", label: "schnellere Technologieauswahl" },
  { value: "60 %", label: "weniger Simulationsschleifen" },
  { value: "100 %", label: "auditierbare Nachvollziehbarkeit" },
];

export default function AgenticAiEngineeringPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />

      <main className="flex-grow">
        <PageHero
          eyebrow="AI Systems Engineering"
          icon={BrainCircuit}
          title="Agentische KI im Systems Engineering"
          subtitle="Der Wechsel von passiven KI-Assistenten (Copilots) hin zu autonomen Agenten, die schlussfolgern, planen und handeln, um komplexe, mehrstufige Engineering-Ergebnisse zu liefern – Cognitive Orchestration für SiC- und GaN-Leistungselektronik."
          width="wide"
        />

        {/* Metrics */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
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
                Vier Schichten der Cognitive Orchestration
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {layers.map((l, i) => (
                <Reveal key={l.tag} delay={i * 0.08}>
                  <div className="glass-panel glass-panel-hover h-full p-7 flex gap-4">
                    <span className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan h-fit shrink-0">
                      <l.icon className="w-5 h-5" />
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
              ))}
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
              alt="Agentischer Produktentwicklungs-Lebenszyklus"
              imageSide="right"
              eyebrow="Lifecycle"
              title="Wochen zu Tagen – parallel statt sequenziell"
              body={[
                "Agentenbasierte Systeme komprimieren SiC/GaN-Designzyklen von Wochen auf Tage, indem sie Technologiebewertung, Moduldesign und Topologie-Exploration parallel ausführen und sequenzielle Expertenworkflows ablösen.",
                "An jedem Engineering-Gate – von den Anforderungen bis zur Qualifizierung – bleiben Human-in-the-Loop-Freigaben, volle Auditierbarkeit und kontinuierliche Feedback-Schleifen erhalten.",
              ]}
              bullets={[
                "Multikriterielle SiC-vs.-GaN-Bewertung",
                "Autonome Moduloptimierung gegen IEC/JEDEC",
                "Co-Simulation von Topologien & EMI",
                "Knowledge-Graph für WBG-Engineering",
              ]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white border-t border-brand-navy/8">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-4">
              Engineering Excellence Driven by Agentic AI
            </h2>
            <p className="text-brand-navy/60 mb-8">
              Erfahren Sie, wie unsere Agentenarchitektur Ihre Leistungselektronik-Entwicklung
              beschleunigt.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
            >
              Gespräch vereinbaren <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
