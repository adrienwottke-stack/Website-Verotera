import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import SroObject from "@/components/SroObject";
import ContactSection from "@/components/ContactSection";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const LAYER_ICONS = [Workflow, Network, BrainCircuit, ShieldCheck, Bot];

const COPY: Record<
  Lang,
  {
    heroEyebrow: string;
    heroTitle: string;
    heroSubtitle: string;
    intro: {
      eyebrow: string;
      headline: string;
      body: string;
      pipeline: string[];
      cta: string;
    };
    hitl: {
      eyebrow: string;
      headline: string;
      body: string;
      title: string;
      paragraphs: string[];
      imageAlt: string;
    };
    architecture: {
      eyebrow: string;
      headline: string;
      body: string;
      layers: { tag: string; title: string; text: string }[];
    };
    lifecycle: {
      eyebrow: string;
      headline: string;
      body: string;
      steps: { step: string; title: string; text: string }[];
      gates: string[];
    };
    vmodel: {
      eyebrow: string;
      headline: string;
      body: string;
      statement: string;
    };
  }
> = {
  de: {
    heroEyebrow: "AI-Enhanced WBG Semiconductor Engineering",
    heroTitle: "Agentische KI im Systems Engineering",
    heroSubtitle:
      "Die Begründung entsteht aus Regeln und Standards, nicht im Sprachmodell – jede Bewertung ist auf ihre Herleitung zurückführbar.",
    intro: {
      eyebrow: "Vom Kontext zum Konzept",
      headline:
        "Wie wird aus einer Anforderung eine belegte Technologieentscheidung?",
      body: "Die Technologiebewertung läuft in vier klar abgegrenzten Schritten ab: vom strukturierten Kontext über die abgeleiteten Bewertungskriterien und die Bewertung der Optionen samt Risiken bis zum System Design Concept. Der Ablauf ist iterativ und in jedem Schritt nachvollziehbar. Die Entscheidungsverantwortung bleibt beim Menschen.",
      pipeline: [
        "Kontext erfassen",
        "Kriterien ableiten",
        "Optionen & Risiken",
        "System Design Concept",
      ],
      cta: "Kontakt aufnehmen",
    },
    hitl: {
      eyebrow: "Human-in-the-Loop",
      headline: "Entscheidungen brauchen Nachvollziehbarkeit",
      body: "Wir liefern die Grundlage, nicht das Urteil. Das System trifft keine Technologieentscheidung – es ist nicht dafür ausgelegt. Es liefert bewertete Optionen, offengelegte Annahmen und eine Risikoübersicht: Entscheidungsgrundlagen, keine Entscheidung. Die Wahl trifft der Ingenieur, der sie verantwortet – und weil jede Bewertung auf ihre Regeln und Quellen zurückführbar ist, kann er sie prüfen, hinterfragen und vor einem Review vertreten.",
      title: "Der Mensch bleibt stets zentral",
      paragraphs: [
        "Collaborative Intelligence bedeutet nicht, dem Menschen Arbeit abzunehmen, sondern ihm eine Entscheidung zu geben, die er verantworten kann.",
      ],
      imageAlt: "Agentische KI im Systems Engineering",
    },
    architecture: {
      eyebrow: "Engineering Core",
      headline: "Ein neuro-symbolischer Kern – auditierbar von Grund auf.",
      body: "Der Kern besteht aus fünf Verantwortungsbereichen, die ein Prinzip teilen: Interpretation und Herleitung sind getrennt. Das Sprachmodell versteht den Kontext, aber die nachvollziehbare Begründung entsteht im Wissensgraph und in den Regeln – nicht im Modell verborgen.",
      layers: [
        {
          tag: "01",
          title: "Orchestrierung",
          text: "Verantwortlich für den Ablauf: zerlegt die Aufgabe in Teilschritte, leitet jeden Schritt an den zuständigen Bereich und führt den Zustand des Workflows – welcher Schritt läuft, was offen ist, was entschieden wurde. Sie koordiniert, ohne selbst zu bewerten.",
        },
        {
          tag: "02",
          title: "Wissensgraph",
          text: "Das auditierbare Substrat des Kerns: Domänenwissen, Regeln und Normen als strukturierter, relationaler Graph statt loser Dokumente. Hier liegt die nachvollziehbare Herleitung – referenzierbar und präziser als reine Embedding-Similarity.",
        },
        {
          tag: "03",
          title: "Interpretation",
          text: "Interpretiert und normalisiert die Eingaben, legt implizite Annahmen und Zielkonflikte offen und plant die mehrstufige Bewertung. Das Modell versteht den Kontext; die Herleitung selbst liefert der Wissensgraph.",
        },
        {
          tag: "04",
          title: "Absicherung",
          text: "Belastbarkeit statt Plausibilität: prüft die Ergebnisse gegen Evidenz, hinterlegte Regeln und definierte Prüfkriterien. Was die Prüfung nicht besteht, wird markiert und eskaliert – keine ungeprüfte Ausgabe.",
        },
        {
          tag: "05",
          title: "Agent",
          text: "Der WBG-Agent führt die Bewertung aus: wendet die Regeln an, prüft Constraints und durchläuft den Zyklus aus Planung, Werkzeugaufruf, Prüfung und Iteration. Jeder Schritt bleibt an Orchestrierung und Regelwerk gebunden.",
        },
      ],
    },
    lifecycle: {
      eyebrow: "Time-to-Market",
      headline:
        "Time-to-Market entscheidet sich in der Konzeptphase – nicht am Ende.",
      body: "Je später eine Technologieentscheidung revidiert werden muss, desto teurer wird sie – in Redesign-Schleifen, Requalifizierung und verlorener Zeit. Der Engineering Core sichert die SiC/GaN-Entscheidung schon früh ab: nachvollziehbar begründet, mit offengelegten Risiken. Das verkürzt nicht einen einzelnen Arbeitsschritt, sondern verhindert die Umwege, die die Time-to-Market wirklich kosten.",
      steps: [
        {
          step: "01",
          title: "Technologieklassen",
          text: "Si, SiC und GaN als strukturierte Klassen mit ihren Eigenschaften und Einsatzgrenzen – nicht als Datenblatt, sondern als vergleichbare, referenzierbare Objekte.",
        },
        {
          step: "02",
          title: "Funktionsblöcke",
          text: "Wiederkehrende Bausteine der Leistungselektronik – Gate-Treiber, Kühlpfad, Filter – als definierte Blöcke mit Schnittstellen und Randbedingungen.",
        },
        {
          step: "03",
          title: "Topologien",
          text: "Schaltungstopologien als eigenständige Objekte, mit ihren Spannungsstressfaktoren und Eignungsgrenzen – die Brücke zwischen Technologiewahl und Architektur.",
        },
        {
          step: "04",
          title: "Regeln",
          text: "Kodierte Ingenieurslogik: Bedingungen, die Technologien, Topologien und Anforderungen verknüpfen – prüfbar, versioniert, nachvollziehbar.",
        },
        {
          step: "05",
          title: "Parametrische Modelle",
          text: "Physikalische Zusammenhänge als parametrische Objekte – getrennt von den Regeln, sodass Berechnung und Entscheidungslogik nicht vermischt werden.",
        },
        {
          step: "06",
          title: "Anforderungen",
          text: "Zielgrößen und Randbedingungen als strukturierte Objekte – normalisiert, auf Zielkonflikte geprüft und mit den übrigen Bausteinen verknüpft.",
        },
      ],
      gates: [
        "Human-in-the-Loop Gates",
        "Audit-Ready Traceability",
        "Continuous Knowledge Capture",
      ],
    },
    vmodel: {
      eyebrow: "Structured Requirement Object",
      headline:
        "Physik begründet, Evidenz validiert, Ingenieursregeln führen – und Collaborative Intelligence macht das Ergebnis nachvollziehbar.",
      body: "Ein maschinenlesbares Artefakt, das die bewertete Entscheidung samt Herleitung, Annahmen und Risiken trägt – in kanonischer Form, aus der sich Exportsichten wie ReqIF oder SysML ableiten.",
      statement:
        "Die kanonische Form ist maßgeblich. SysML und ReqIF sind Exportsichten. Herleitung, Eskalation und Provenance sind in keinem Zielformat nativ abbildbar – nur die kanonische Form trägt sie vollständig.",
    },
  },
  en: {
    heroEyebrow: "AI-Enhanced WBG Semiconductor Engineering",
    heroTitle: "Agentic AI in Systems Engineering",
    heroSubtitle:
      "The justification comes from rules and standards, not from the language model — every assessment is traceable to its derivation.",
    intro: {
      eyebrow: "From Context to Concept",
      headline:
        "How does a requirement become an evidence-based technology decision?",
      body: "The technology assessment runs in four clearly defined steps: from structured context, through the derived evaluation criteria and the assessment of the options and their risks, to the System Design Concept. The process is iterative and traceable at every step. Decision responsibility remains with the engineer.",
      pipeline: [
        "Understand the context",
        "Derive criteria",
        "Options & Risks",
        "System Design Concept",
      ],
      cta: "Get in contact",
    },
    hitl: {
      eyebrow: "Human-in-the-Loop",
      headline: "Decisions need traceability",
      body: "We provide the basis, not the decision. The system makes no technology decision – it is not built to. It delivers assessed options, disclosed assumptions and a risk overview. The choice is made by the engineer, who is accountable for it – and because every assessment is traceable to its rules and sources, it can be examined, challenged and defended in review.",
      title: "The human remains central",
      paragraphs: [
        "Collaborative Intelligence does not mean taking work off people's hands – it means giving them a decision they can stand behind.",
      ],
      imageAlt: "Agentic AI in systems engineering",
    },
    architecture: {
      eyebrow: "Engineering Core",
      headline: "A neurosymbolic core – auditable by design.",
      body: "The core consists of five areas of responsibility that share one principle: interpretation and derivation are kept apart. The language model understands the context, but the traceable justification is built in the knowledge graph and the rules – not hidden inside the model.",
      layers: [
        {
          tag: "01",
          title: "Orchestration",
          text: "Responsible for the flow: breaks the task into steps, routes each step to the relevant area, and maintains the state of the workflow – which step is running, what is open, what has been decided. It coordinates without assessing anything itself.",
        },
        {
          tag: "02",
          title: "Knowledge Graph",
          text: "The auditable substrate of the core: domain knowledge, rules and standards held as a structured, relational graph rather than loose documents. This is where the traceable derivation lives – referenceable and more precise than embedding similarity alone.",
        },
        {
          tag: "03",
          title: "Interpretation",
          text: "Interprets and normalizes the inputs, surfaces implicit assumptions and conflicting objectives, and plans the multi-step assessment. The model understands the context; the derivation itself comes from the knowledge graph.",
        },
        {
          tag: "04",
          title: "Assurance",
          text: "Substantiated, not merely plausible: checks the results against evidence, encoded rules and defined acceptance criteria. Anything that fails the check is flagged and escalated – no unchecked output.",
        },
        {
          tag: "05",
          title: "Agent",
          text: "The WBG agent carries out the assessment: applies the rules, checks constraints, and runs the cycle of planning, tool call, verification and iteration. Every step stays bound to the orchestration and the rule set.",
        },
      ],
    },
    lifecycle: {
      eyebrow: "Time-to-Market",
      headline:
        "Time-to-market is decided in the concept phase – not at the end.",
      body: "The later a technology decision has to be reversed, the more it costs – in redesign loops, requalification and lost time. The Engineering Core de-risks the SiC/GaN decision early: with traceable justification and disclosed risks. It doesn't shorten a single task – it prevents the detours that truly cost time-to-market.",
      steps: [
        {
          step: "01",
          title: "Technology Classes",
          text: "Si, SiC and GaN as structured classes with their properties and application limits – not a datasheet, but comparable, referenceable objects.",
        },
        {
          step: "02",
          title: "Functional Blocks",
          text: "Recurring building blocks of power electronics – gate driver, cooling path, filter – as defined blocks with interfaces and constraints.",
        },
        {
          step: "03",
          title: "Topologies",
          text: "Circuit topologies as objects in their own right, with their voltage stress factors and suitability limits – the bridge between technology choice and architecture.",
        },
        {
          step: "04",
          title: "Rules",
          text: "Encoded engineering logic: conditions that link technologies, topologies and requirements – checkable, versioned, traceable.",
        },
        {
          step: "05",
          title: "Parametric Models",
          text: "Physical relationships as parametric objects – kept separate from the rules, so that calculation and decision logic are not intermixed.",
        },
        {
          step: "06",
          title: "Requirements",
          text: "Target values and constraints as structured objects – normalized, checked for conflicting objectives, and linked to the other building blocks.",
        },
      ],
      gates: [
        "Human-in-the-Loop Gates",
        "Audit-Ready Traceability",
        "Continuous Knowledge Capture",
      ],
    },
    vmodel: {
      eyebrow: "Structured Requirement Object",
      headline:
        "Engineering truth is established by physics, validated by evidence, governed by engineering rules, and communicated through Collaborative Intelligence.",
      body: "A machine-readable artifact that carries the assessed decision together with its derivation, assumptions and risks – in a canonical form from which export views such as ReqIF or SysML are derived.",
      statement:
        "The canonical form is authoritative. SysML and ReqIF are export views. Derivation, escalation and provenance cannot be represented natively in any target format – only the canonical form carries them in full.",
    },
  },
};

const META: Record<Lang, PageMeta> = {
  de: {
    title: "How Agentic AI Accelerates SiC & GaN Engineering",
    description:
      "Agentic AI ecosystem architecture: shift from passive AI copilots to autonomous agents that reason, plan and act to deliver complex engineering outcomes.",
    keywords: [
      "ai-driven systems engineering",
      "human-in-the-loop",
      "ai-agents",
      "MBSE",
      "LLMs",
      "secure environment",
    ],
  },
  en: {
    title: "How Agentic AI Accelerates SiC & GaN Engineering",
    description:
      "Agentic AI ecosystem architecture: shift from passive AI copilots to autonomous agents that reason, plan and act to deliver complex engineering outcomes.",
    keywords: [
      "ai-driven systems engineering",
      "human-in-the-loop",
      "ai-agents",
      "MBSE",
      "LLMs",
      "secure environment",
    ],
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
          eyebrow={t.heroEyebrow}
          icon={BrainCircuit}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          width="wide"
        />

        {/* Slide 22 — Pattern A: Statement + Pipeline + CTA */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={480} opacity={0.045} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.intro.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.intro.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.intro.body}
              </p>
            </Reveal>

            <Reveal delay={0.12} className="mt-12">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {t.intro.pipeline.map((step, i) => (
                  <span key={step} className="flex items-center gap-3">
                    <span className="inline-flex items-center px-4 py-2 rounded-full border border-brand-navy/8 bg-white shadow-sm font-sans text-sm font-semibold text-brand-navy/70">
                      {step}
                    </span>
                    {i < t.intro.pipeline.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-brand-cyan shrink-0" />
                    )}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.24} className="mt-12 text-center">
              <Link
                href={localePath(lang, "/contacts")}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors"
              >
                {t.intro.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Slide 23 (oben) — Pattern B: Human-in-the-Loop / MBSE */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.hitl.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.hitl.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.hitl.body}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-6 lg:order-2">
                <div className="relative min-h-[260px] lg:min-h-[480px] h-full rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm">
                  <Image
                    src="/images/agentic-ai-engineering.png"
                    alt={t.hitl.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6 lg:order-1">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-6">
                  {t.hitl.title}
                </h3>
                {t.hitl.paragraphs.map((p) => (
                  <p
                    key={p}
                    className="font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed mb-4"
                  >
                    {p}
                  </p>
                ))}
              </Reveal>
            </div>
          </div>
        </section>

        {/* Slide 23 (unten) — Pattern J: Architektur-Stack L1–L4 */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.architecture.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.architecture.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.architecture.body}
              </p>
            </Reveal>

            <div className="max-w-4xl mx-auto">
              {t.architecture.layers.map((layer, i) => {
                const Icon = LAYER_ICONS[i];
                return (
                  <div key={layer.title}>
                    <Reveal delay={i * 0.12}>
                      <div className="p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm flex gap-5 items-start">
                        <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-brand-navy/40 block mb-1">
                            {layer.tag}
                          </span>
                          <h3 className="font-display text-lg font-bold text-brand-navy leading-tight mb-2">
                            {layer.title}
                          </h3>
                          <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                            {layer.text}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                    {i < t.architecture.layers.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ChevronDown className="w-5 h-5 text-brand-cyan" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Slide 24 — Pattern C: Agentic Product Development Lifecycle */}
        <section className="relative py-24 sm:py-32 bg-surface-light border-y border-brand-navy/8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.lifecycle.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.lifecycle.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.lifecycle.body}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.lifecycle.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center font-display text-sm font-bold text-brand-cyan shrink-0">
                        {s.step}
                      </span>
                      <h3 className="font-display text-base font-bold text-brand-navy leading-tight">
                        {s.title}
                      </h3>
                    </div>
                    <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.12} className="mt-12">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {t.lifecycle.gates.map((gate) => (
                  <span key={gate} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0" />
                    <span className="font-sans text-sm text-brand-navy/70">{gate}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Slide 25 — Pattern J: Interaktives V-Modell */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.vmodel.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.vmodel.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.vmodel.body}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <SroObject lang={lang} />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="font-display text-2xl sm:text-3xl font-bold text-brand-navy text-center max-w-4xl mx-auto leading-snug mt-16 sm:mt-20">
                {t.vmodel.statement}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Kontakt-Schluss */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
