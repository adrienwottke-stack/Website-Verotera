import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  CircuitBoard,
  Database,
  GitBranch,
  Layers,
  Network,
  Scale,
  Share2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import VModelInteractive from "@/components/VModelInteractive";
import ContactSection from "@/components/ContactSection";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const LAYER_ICONS = [Network, Bot, Layers, Database];
const TOOL_ICONS = [Scale, CircuitBoard, GitBranch, Share2];

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
    };
    wbg: {
      eyebrow: string;
      headline: string;
      body: string;
      stats: { value: string; label: string }[];
      moduleAlt: string;
      emobilityAlt: string;
      tools: { title: string; text: string }[];
    };
    roadmap: {
      eyebrow: string;
      headline: string;
      steps: { step: string; title: string; text: string }[];
    };
    solutions: {
      subEyebrow: string;
      title: string;
      body: string;
      intro: string;
      bullets: string[];
      closing: string;
      imageAlt: string;
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
        "Als Human-in-the-Loop trifft der Mensch die finalen Entscheidungen, steuert den Prozess aktiv und prägt die Qualität der Ergebnisse maßgeblich durch sein Fachwissen und Urteilsvermögen.",
      ],
      imageAlt: "Agentische KI im Systems Engineering",
    },
    architecture: {
      eyebrow: "Agentic AI Ecosystem Architecture",
      headline: "Von der Orchestrierung zum institutionellen Gedächtnis",
      layers: [
        {
          tag: "Layer 01",
          title: "Orchestrierungsschicht",
          text: "Ein LLM-basierter kognitiver Orchestrator zerlegt Engineering-Aufgaben in Teilziele, weist Spezialagenten zu, überwacht den Fortschritt und löst Konflikte zwischen konkurrierenden Design-Anforderungen.",
        },
        {
          tag: "Layer 02",
          title: "Spezialisierter KI-Agenten-Pool",
          text: "Fachspezifische KI-Agenten für Simulationssteuerung, Datenblattanalyse, Topologiesynthese, Compliance-Prüfung und parametrische Designraum-Exploration – parallel in simultanen Pipelines. Funktionale Sicherheits- und Cybersecurity-Agenten prüfen automatisch gegen IEC 61508, ISO 26262 (ASIL) sowie IEC 62443 und ISO/SAE 21434 – und kennzeichnen sicherheitskritische Zielkonflikte, unvollständige FMEA-Abdeckung und Cybersecurity-Risiken an jedem Lifecycle-Gate.",
        },
        {
          tag: "Layer 03",
          title: "Tool- & Knowledge-Schicht",
          text: "RAG-gestützte Recherche über Engineering-Standards (IEC, JEDEC, AEC-Q …), Simulations-APIs (SPICE, FEM, Polarion …), Komponentendatenbanken (SAP-Stammdaten) und proprietäre Design-Bibliotheken.",
        },
        {
          tag: "Layer 04",
          title: "Memory- & Kontext-Speicher",
          text: "Vektorspeicher und Engineering-Wissensgraph sichern Designhistorie, Fehlermodi, Trade-off-Entscheidungen und Materialeigenschaften – für projektübergreifendes Lernen und institutionelles Gedächtnis.",
        },
      ],
    },
    lifecycle: {
      eyebrow: "Agentic Product Development Lifecycle",
      headline:
        "Kollaborative Systemintelligenz beschleunigt die Produktentwicklung – von der Anforderung bis zur Marktreife",
      body: "Moderne agentische KI-Systeme wandeln sich durch Large Language Models (LLMs) und Reinforcement Learning von einfachen, reaktiven Chatbots zu autonom handelnden Agenten. Diese Kombination löst komplexe, mehrstufige Probleme, indem Sprachverständnis mit gezielter Handlungsplanung und kontinuierlicher Optimierung verknüpft wird.",
      steps: [
        {
          step: "01",
          title: "Anforderungen & Kontext",
          text: "Der KI-Agent analysiert Normen, Vorschriften und Spezifikationen. Automatisierte Extraktion von Randbedingungen und ontologisches Mapping in den Engineering-Wissensgraph.",
        },
        {
          step: "02",
          title: "Technologieauswahl",
          text: "Multikriterielle Agentenauswertung von SiC vs. GaN: Anwendung, Spannungsklasse, Schaltfrequenz, Tj-Grenzwerte, Kosten, Reifegrad. Automatisierte Shortlist mit nachvollziehbarer Begründung.",
        },
        {
          step: "03",
          title: "Architektur & Topologie",
          text: "Der KI-Agent exploriert Wandler-Topologien (LLC, DAB, 3-Level-NPC, CHB) und Antriebsstrangarchitekturen. Parallele Co-Optimierung von Verlusten, EMV und Leistungsdichte.",
        },
        {
          step: "04",
          title: "WBG Power Module Design",
          text: "Autonomes Co-Design von Gate-Treiber, Stromschiene, Wärmeübergang und Packaging. KI-Agenten iterieren über Parasiten-Extraktion, Kriechstreckenprüfung und thermische FEM.",
        },
        {
          step: "05",
          title: "Simulation & Validierung",
          text: "LLM-orchestrierte SPICE/FEM-Schleifen. KI-Agenten generieren Stimulusvektoren, interpretieren Ergebnisse, kennzeichnen Abweichungen von der Spezifikation und schlagen autonom Korrekturmaßnahmen vor.",
        },
        {
          step: "06",
          title: "Qualifikation & Freigabe",
          text: "KI-gestützte Qualifikationsmatrix (AEC-Q, IEC 60747). Agenten prüfen die Testabdeckung, generieren Compliance-Dokumentation und kennzeichnen offene Zuverlässigkeitsrisiken – Review & Approval bleibt beim Menschen.",
        },
      ],
      gates: [
        "Human-in-the-Loop Gates",
        "Audit-Ready Traceability",
        "Continuous Knowledge Capture",
      ],
    },
    vmodel: {
      eyebrow: "Agentische KI im V-Modell",
      headline: "Schneller. Präziser. Besser.",
      body: "Produktentwicklung mit agentischer KI: Orchestrierte Intelligenz begleitet jede Phase des V-Modells – von der Use-Case-Definition über Safety & Security, Design-Exploration und Systemarchitektur bis zu Verifikation, Validierung und Release.",
    },
    wbg: {
      eyebrow: "SiC & GaN Leistungselektronik",
      headline: "Wie agentische KI das SiC- & GaN-Engineering beschleunigt",
      body: "Agentenbasierte Systeme komprimieren SiC/GaN-Designzyklen von Wochen auf Tage – Technologiebewertung, Moduldesign und Topologie-Exploration laufen parallel statt in sequenziellen Expertenworkflows.",
      stats: [
        { value: "10×", label: "schnellere Technologieauswahl" },
        { value: "60 %", label: "weniger Simulationsschleifen" },
      ],
      moduleAlt: "GaN-Leistungsmodul für hocheffiziente Leistungselektronik",
      emobilityAlt: "SiC- und GaN-Anwendungen in der E-Mobilität",
      tools: [
        {
          title: "Technologieauswahl (SiC vs. GaN)",
          text: "Automatisierter Multikriterien-Vergleich: Spannungsklasse (650 V–10 kV), Schaltfrequenz, Tj-Grenzwerte, Gate-Drive-Komplexität, Avalanche-Festigkeit, Kosten und Verfügbarkeit – als nachvollziehbare Entscheidungsmatrix entlang der Applikationsziele.",
        },
        {
          title: "Power Module Design",
          text: "Simultane autonome Optimierung von Gate-Treiber, DCB-Layout, Wärmeübergang, Verguss und Verbindungstechnik gegen IEC/JEDEC-Standards – Kriech- und Luftstrecken-Verletzungen, parasitäre Induktivitäts-Hotspots und thermische Engpässe werden in Echtzeit erkannt.",
        },
        {
          title: "System-Topologien",
          text: "Multi-Agenten-Co-Simulation von LLC-Resonanz-, DAB-, Bridgeless-PFC-, 3-Level-NPC- und CHB-Topologien – automatisiertes Verlust-Benchmarking, THD-Prognose und EMV-Vorprüfung gegen CISPR/EN 55032 in einem einzigen Agenten-Loop.",
        },
        {
          title: "Knowledge Graph für WBG-Engineering",
          text: "Ein strukturierter Engineering-Wissensgraph verknüpft Bauteilparameter, Anwendungsdomänen, Qualifikationsdaten, Fehlermodi, Lieferanten-Roadmaps und Materialeigenschaften – für fundiertes, kontextbewusstes Agenten-Reasoning.",
        },
      ],
    },
    roadmap: {
      eyebrow: "Strategische Roadmap",
      headline: "Agentische KI im WBG-Engineering einführen",
      steps: [
        {
          step: "01",
          title: "Pilot: KI-gestützte Technologieauswahl",
          text: "Ein begrenztes Multi-Agenten-System für das SiC/GaN-Shortlisting einer Produktfamilie einführen. Time-to-Decision, Abdeckung und Akzeptanz im Engineering messen, bevor skaliert wird.",
        },
        {
          step: "02",
          title: "Fundament: Engineering-Wissensgraph",
          text: "Strukturiertes Wissen ist der Treibstoff agentischer KI: eine WBG-Ontologie verknüpft Bauteilparameter, Anforderungen, Qualifikationsstandards (AEC-Q, IEC), Materialdaten und Fehlermodi – die gemeinsame Datenschicht aller Agenten.",
        },
        {
          step: "03",
          title: "Skalieren: Agentischer Entwicklungs-Lifecycle",
          text: "KI-Agenten an jedem Systems-Engineering-Gate verankern – von den Anforderungen bis zur Qualifikation – mit Human-in-the-Loop-Freigaben, vollständiger Auditierbarkeit und kontinuierlichen Feedback-Schleifen.",
        },
        {
          step: "04",
          title: "Operationalisieren: Kognitive Orchestrierung",
          text: "Eine persistente Orchestrierungsschicht koordiniert Spezialagenten über alle Engineering-Domänen hinweg – elektrisch, thermisch, mechanisch, Compliance – mit geteiltem Kontext und Gedächtnis.",
        },
      ],
    },
    solutions: {
      subEyebrow: "Lösungen",
      title: "Smarter Design Decisions",
      body: "Vom passiven KI-Assistenten zum autonomen Agenten – der zielgerichtet plant, entscheidet und komplexe, mehrstufige Engineering-Ergebnisse liefert.",
      intro:
        "VEROTERA stellt KI-gestützte Methoden, intelligente Agenten und modellbasierte Frameworks bereit – und ermöglicht damit:",
      bullets: [
        "Schnellere und zuverlässigere Systementwicklung",
        "Nahtlose Zusammenarbeit zwischen Teams und Technologien",
        "Adaptive Modelle, die aus Daten und Kontext lernen",
        "Eine klare Brücke zwischen Innovation und Umsetzung",
        "On-Prem: Maximale Datensicherheit & DSGVO",
      ],
      closing:
        "Unsere Lösungen verwandeln Komplexität in Klarheit – sie beschleunigen Innovation und erschließen die kollektive Intelligenz von Engineering-Organisationen.",
      imageAlt: "KI-gestützte Systems-Engineering-Plattform",
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
        "As the human-in-the-loop, the engineer makes the final decisions, actively steers the process and decisively shapes the quality of the results through expertise and judgement.",
      ],
      imageAlt: "Agentic AI in systems engineering",
    },
    architecture: {
      eyebrow: "Agentic AI Ecosystem Architecture",
      headline: "From orchestration to institutional memory",
      layers: [
        {
          tag: "Layer 01",
          title: "Orchestration Layer",
          text: "An LLM-based cognitive orchestrator decomposes engineering tasks into sub-goals, assigns specialist agents, monitors progress and resolves conflicts between competing design constraints.",
        },
        {
          tag: "Layer 02",
          title: "Specialist Agent Pool",
          text: "Domain-specific AI agents for simulation control, datasheet analysis, topology synthesis, compliance checking and parametric design-space exploration — running concurrently in parallel pipelines. Functional-safety and cybersecurity agents check automatically against IEC 61508, ISO 26262 (ASIL) as well as IEC 62443 and ISO/SAE 21434 — flagging safety-critical trade-offs, incomplete FMEA coverage and cybersecurity risks at every lifecycle gate.",
        },
        {
          tag: "Layer 03",
          title: "Tool & Knowledge Layer",
          text: "RAG-powered retrieval across engineering standards (IEC, JEDEC, AEC-Q …), simulation APIs (SPICE, FEM, Polarion …), component databases (SAP master data) and proprietary design libraries.",
        },
        {
          tag: "Layer 04",
          title: "Memory & Context Store",
          text: "Vector stores and an engineering knowledge graph persist design history, failure modes, trade-off decisions and material properties — enabling cross-project learning and institutional memory.",
        },
      ],
    },
    lifecycle: {
      eyebrow: "Agentic Product Development Lifecycle",
      headline:
        "Collaborative system intelligence accelerates product development — from requirement to market readiness",
      body: "Powered by large language models (LLMs) and reinforcement learning, modern agentic AI systems evolve from simple, reactive chatbots into autonomously acting agents. This combination solves complex, multi-step problems by linking language understanding with targeted action planning and continuous optimisation.",
      steps: [
        {
          step: "01",
          title: "Requirements & Context",
          text: "The AI agent mines standards, regulations and specifications. Automated constraint extraction and ontology mapping into the engineering knowledge graph.",
        },
        {
          step: "02",
          title: "Technology Selection",
          text: "Multi-criteria agent evaluation of SiC vs. GaN: application, voltage class, switching frequency, Tj limits, cost, maturity. An automated shortlist with traceable rationale.",
        },
        {
          step: "03",
          title: "Architecture & Topology",
          text: "The AI agent explores converter topologies (LLC, DAB, 3-level NPC, CHB) and drive-train architectures. Parallel co-optimisation of losses, EMI and power density.",
        },
        {
          step: "04",
          title: "WBG Power Module Design",
          text: "Autonomous co-design of gate driver, busbar, thermal interface and packaging. AI agents iterate on parasitic extraction, creepage checks and thermal FEM.",
        },
        {
          step: "05",
          title: "Simulation & Validation",
          text: "LLM-orchestrated SPICE/FEM loops. AI agents generate stimulus vectors, interpret results, flag deviations from specification and autonomously propose corrective actions.",
        },
        {
          step: "06",
          title: "Qualification & Release",
          text: "AI-assisted qualification matrix (AEC-Q, IEC 60747). Agents cross-check test coverage, generate compliance documentation and flag open reliability risks — review & approval stays with the human.",
        },
      ],
      gates: [
        "Human-in-the-Loop Gates",
        "Audit-Ready Traceability",
        "Continuous Knowledge Capture",
      ],
    },
    vmodel: {
      eyebrow: "Agentic AI across the V-model",
      headline: "Faster. More precise. Better.",
      body: "Product development with agentic AI: orchestrated intelligence supports every phase of the V-model — from use-case definition, safety & security and design exploration to system architecture, verification, validation and release.",
    },
    wbg: {
      eyebrow: "SiC & GaN Power Electronics",
      headline: "How agentic AI accelerates SiC & GaN engineering",
      body: "Agent-based systems compress SiC/GaN design cycles from weeks to days — technology evaluation, module design and topology exploration run in parallel instead of sequential expert workflows.",
      stats: [
        { value: "10×", label: "faster technology selection" },
        { value: "60%", label: "fewer simulation loops" },
      ],
      moduleAlt: "GaN power module for high-efficiency power electronics",
      emobilityAlt: "SiC and GaN applications in e-mobility",
      tools: [
        {
          title: "Technology Selection (SiC vs. GaN)",
          text: "Automated multi-objective comparison: voltage class (650 V–10 kV), switching frequency, Tj limits, gate-drive complexity, avalanche rating, cost and availability — a traceable decision matrix aligned with application targets.",
        },
        {
          title: "Power Module Design",
          text: "Concurrent autonomous optimisation of gate driver, DCB layout, thermal interface, encapsulant and interconnects against IEC/JEDEC standards — detecting creepage/clearance violations, parasitic inductance hotspots and thermal bottlenecks in real time.",
        },
        {
          title: "System Topologies",
          text: "Multi-agent co-simulation explores LLC resonant, DAB, bridgeless PFC, 3-level NPC and cascaded H-bridge topologies — automated loss benchmarking, THD prediction and EMI pre-screening against CISPR/EN 55032 in a single agent loop.",
        },
        {
          title: "Knowledge Graph for WBG Engineering",
          text: "A structured engineering knowledge graph links device parameters, application domains, qualification data, failure modes, supplier roadmaps and material properties — grounded, context-aware reasoning for every agent.",
        },
      ],
    },
    roadmap: {
      eyebrow: "Strategic Roadmap",
      headline: "Deploying agentic AI in WBG power electronics engineering",
      steps: [
        {
          step: "01",
          title: "Pilot: AI-Assisted Technology Selection",
          text: "Deploy a bounded multi-agent system for SiC/GaN shortlisting on one product family. Measure time-to-decision, coverage and engineer acceptance before scaling.",
        },
        {
          step: "02",
          title: "Foundation: Engineering Knowledge Graph",
          text: "Structured knowledge is the fuel of agentic AI: a WBG ontology links device parameters, requirements, qualification standards (AEC-Q, IEC), material data and failure modes — the shared data layer for all agents.",
        },
        {
          step: "03",
          title: "Scale: Agentic Development Lifecycle",
          text: "Embed AI agents at every systems engineering gate — from requirements through qualification — with human-in-the-loop approvals, full auditability and continuous feedback loops.",
        },
        {
          step: "04",
          title: "Operationalise: Cognitive Orchestration",
          text: "A persistent orchestration layer coordinates specialist agents across all engineering domains — electrical, thermal, mechanical, compliance — with shared context and memory.",
        },
      ],
    },
    solutions: {
      subEyebrow: "Solutions",
      title: "Smarter Design Decisions",
      body: "From passive AI assistant to autonomous agent — one that plans purposefully, makes decisions and delivers complex, multi-stage engineering outcomes.",
      intro:
        "VEROTERA provides AI-powered methods, intelligent agents and model-based frameworks — enabling:",
      bullets: [
        "Faster, more reliable system development",
        "Seamless collaboration across teams and technologies",
        "Adaptive models that learn from data and context",
        "A clear bridge between innovation and execution",
        "On-prem: maximum data security & GDPR compliance",
      ],
      closing:
        "Our solutions turn complexity into clarity — accelerating innovation and unlocking the collective intelligence of engineering organizations.",
      imageAlt: "AI-powered systems engineering platform",
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
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.architecture.headline}
              </h2>
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
              <VModelInteractive />
            </Reveal>
          </div>
        </section>

        {/* Spotlight — Pattern B/D + C: Agentic AI im WBG-Halbleiterprozess */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <BrandWatermark position="bottom-left" tint="navy" size={480} opacity={0.045} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.wbg.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">
                {t.wbg.headline}
              </h2>
              <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
                {t.wbg.body}
              </p>
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
              <Reveal className="lg:col-span-6">
                <div className="grid gap-4">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm flex items-center justify-center p-6">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/power-module-gan-white.png"
                        alt={t.wbg.moduleAlt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm">
                    <Image
                      src="/images/emobility-automotive.png"
                      alt={t.wbg.emobilityAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  {t.wbg.stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center text-center">
                      <span className="font-display text-5xl sm:text-6xl font-extrabold text-brand-cyan mb-3">
                        {stat.value}
                      </span>
                      <span className="font-sans text-base text-brand-navy/70">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.wbg.tools.map((tool, i) => {
                const Icon = TOOL_ICONS[i];
                return (
                  <Reveal key={tool.title} delay={i * 0.1}>
                    <div className="h-full p-6 sm:p-8 rounded-2xl border border-brand-navy/8 bg-white shadow-sm flex gap-5 items-start">
                      <div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-brand-navy leading-tight mb-2">
                          {tool.title}
                        </h3>
                        <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">
                          {tool.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Spotlight — Pattern C: Strategische Roadmap */}
        <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-brand-blue/[0.05] rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">
                {t.roadmap.eyebrow}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight">
                {t.roadmap.headline}
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.roadmap.steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div className="h-full p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">
                    <span className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center font-display text-sm font-bold text-brand-cyan mb-4">
                      {s.step}
                    </span>
                    <h3 className="font-display text-base font-bold text-brand-navy leading-tight mb-2">
                      {s.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-navy/60 leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Slide 26 — Pattern G: Navy-Emphasis-Split (Lösungen) */}
        <section className="relative py-20 sm:py-28 bg-brand-navy overflow-hidden">
          <BrandWatermark position="top-right" tint="light" size={460} opacity={0.06} />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-3">
                  {t.solutions.subEyebrow}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight mb-6">
                  {t.solutions.title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-4">
                  {t.solutions.body}
                </p>
                <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                  {t.solutions.intro}
                </p>
                <ul className="space-y-3 list-none m-0 p-0 mb-8">
                  {t.solutions.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                      <span className="font-sans text-sm text-white/80">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-sm sm:text-base font-semibold text-white leading-relaxed">
                  {t.solutions.closing}
                </p>
              </Reveal>

              <Reveal delay={0.12} className="lg:col-span-6">
                <div className="relative min-h-[280px] lg:min-h-[460px] h-full rounded-3xl overflow-hidden border border-white/10 bg-brand-navy-light shadow-lg">
                  <Image
                    src="/images/ai-systems-gui.jpg"
                    alt={t.solutions.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Kontakt-Schluss */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
