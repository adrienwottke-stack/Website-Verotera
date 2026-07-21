"use client";

import { useState } from "react";
import { FileSearch, LayoutGrid, Activity, Thermometer, CheckCircle2, Terminal } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type Phase = {
  id: string;
  step: string;
  label: string;
  icon: typeof FileSearch;
  agent: string;
  arm: "left" | "bottom" | "right";
  logs: string[];
};

const PHASES: Record<Lang, Phase[]> = {
  de: [
    {
      id: "requirements",
      step: "01",
      label: "Anforderungen",
      icon: FileSearch,
      agent: "Spec Agent",
      arm: "left",
      logs: [
        "$ spec-agent --parse-standards",
        "→ Lade IEC 60747, AEC-Q101, JEDEC …",
        "→ Constraints extrahiert und klassifiziert",
        "→ Mapping auf Engineering-Knowledge-Graph",
        "✓ Spezifikation validiert",
      ],
    },
    {
      id: "layout",
      step: "02",
      label: "Layout & Topologie",
      icon: LayoutGrid,
      agent: "Layout Agent",
      arm: "left",
      logs: [
        "$ layout-agent --synthesize",
        "→ Topologie-Exploration: LLC, DAB, 3L-NPC",
        "→ Busbar-Routing auf minimale Parasitäten optimiert",
        "→ Kriechstrecken-/Luftstrecken-Check: OK",
        "✓ Layout-Kandidat ausgewählt",
      ],
    },
    {
      id: "simulation",
      step: "03",
      label: "Simulation",
      icon: Activity,
      agent: "Sim Agent",
      arm: "bottom",
      logs: [
        "$ sim-agent --run spice+fem",
        "→ Generiere Stimulus-Vektoren",
        "→ Doppelpuls-Tests über den Arbeitsbereich",
        "→ Schaltverluste gegen Zielwerte bewertet",
        "✓ Keine Abweichung von der Spezifikation",
      ],
    },
    {
      id: "thermal",
      step: "04",
      label: "Thermik",
      icon: Thermometer,
      agent: "Thermal Agent",
      arm: "right",
      logs: [
        "$ thermal-agent --fem-solve",
        "→ Verlustleistungs-Mapping geladen",
        "→ Sperrschichttemperatur Tj ermittelt",
        "→ Kühlkörper-Layout angepasst",
        "✓ Tj-Grenzwert eingehalten",
      ],
    },
    {
      id: "verification",
      step: "05",
      label: "Verifikation",
      icon: CheckCircle2,
      agent: "Verify Agent",
      arm: "right",
      logs: [
        "$ verify-agent --qualification-matrix",
        "→ AEC-Q & IEC 60747 Coverage geprüft",
        "→ Compliance-Dokumentation generiert",
        "→ Zuverlässigkeitsrisiken bewertet und dokumentiert",
        "✓ Freigabe-Paket erstellt",
      ],
    },
  ],
  en: [
    {
      id: "requirements",
      step: "01",
      label: "Requirements",
      icon: FileSearch,
      agent: "Spec Agent",
      arm: "left",
      logs: [
        "$ spec-agent --parse-standards",
        "→ Loading IEC 60747, AEC-Q101, JEDEC …",
        "→ Constraints extracted and classified",
        "→ Mapped onto engineering knowledge graph",
        "✓ Specification validated",
      ],
    },
    {
      id: "layout",
      step: "02",
      label: "Layout & Topology",
      icon: LayoutGrid,
      agent: "Layout Agent",
      arm: "left",
      logs: [
        "$ layout-agent --synthesize",
        "→ Topology exploration: LLC, DAB, 3L-NPC",
        "→ Busbar routing optimized for minimal parasitics",
        "→ Creepage/clearance check: OK",
        "✓ Layout candidate selected",
      ],
    },
    {
      id: "simulation",
      step: "03",
      label: "Simulation",
      icon: Activity,
      agent: "Sim Agent",
      arm: "bottom",
      logs: [
        "$ sim-agent --run spice+fem",
        "→ Generating stimulus vectors",
        "→ Double-pulse tests across the operating range",
        "→ Switching losses evaluated against targets",
        "✓ No deviation from specification",
      ],
    },
    {
      id: "thermal",
      step: "04",
      label: "Thermal",
      icon: Thermometer,
      agent: "Thermal Agent",
      arm: "right",
      logs: [
        "$ thermal-agent --fem-solve",
        "→ Power-loss mapping loaded",
        "→ Junction temperature Tj determined",
        "→ Heatsink layout adjusted",
        "✓ Tj limit maintained",
      ],
    },
    {
      id: "verification",
      step: "05",
      label: "Verification",
      icon: CheckCircle2,
      agent: "Verify Agent",
      arm: "right",
      logs: [
        "$ verify-agent --qualification-matrix",
        "→ AEC-Q & IEC 60747 coverage reviewed",
        "→ Compliance documentation generated",
        "→ Reliability risks assessed and documented",
        "✓ Release package created",
      ],
    },
  ],
};

const UI: Record<Lang, { eyebrow: string; title: string; hint: string }> = {
  de: {
    eyebrow: "Interaktives V-Modell",
    title: "Autonome KI-Agenten je Engineering-Phase",
    hint: "Wählen Sie eine Phase, um zu sehen, welcher spezialisierte Agent sie beschleunigt.",
  },
  en: {
    eyebrow: "Interactive V-Model",
    title: "Autonomous AI agents for every engineering phase",
    hint: "Select a phase to see which specialized agent accelerates it.",
  },
};

function PhaseButton({
  phase,
  active,
  onClick,
}: {
  phase: Phase;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl border text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 ${
        active
          ? "bg-brand-navy text-white border-brand-navy shadow-lg"
          : "bg-white text-brand-navy border-brand-navy/10 hover:border-brand-cyan/40 hover:shadow-md"
      }`}
    >
      <span
        className={`p-2 rounded-lg border shrink-0 ${
          active ? "bg-brand-cyan/20 border-brand-cyan/40 text-brand-cyan" : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
        }`}
      >
        <phase.icon className="w-4 h-4" />
      </span>
      <span className="min-w-0">
        <span className={`block text-[10px] font-bold uppercase tracking-widest ${active ? "text-brand-cyan" : "text-brand-navy/40"}`}>
          Phase {phase.step}
        </span>
        <span className="block font-display text-sm font-bold leading-tight">{phase.label}</span>
      </span>
    </button>
  );
}

export default function VModelInteractive() {
  const lang = useLang();
  const phases = PHASES[lang];
  const ui = UI[lang];
  const [activeId, setActiveId] = useState<string>("requirements");
  const active = phases.find((p) => p.id === activeId) ?? phases[0];
  const left = phases.filter((p) => p.arm === "left");
  const bottom = phases.filter((p) => p.arm === "bottom");
  const right = phases.filter((p) => p.arm === "right");

  return (
    <div className="font-display rounded-3xl border border-brand-navy/8 bg-surface-light p-6 sm:p-10">
      <div className="mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
          {ui.eyebrow}
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
          {ui.title}
        </h3>
        <p className="text-sm text-brand-navy/55 mt-2">
          {ui.hint}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* V silhouette */}
        <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10">
          {/* Left descending arm */}
          <div className="space-y-4">
            {left.map((p, i) => (
              <div key={p.id} style={{ marginTop: i === 0 ? 0 : undefined }}>
                <PhaseButton phase={p} active={p.id === activeId} onClick={() => setActiveId(p.id)} />
              </div>
            ))}
          </div>
          {/* Right ascending arm */}
          <div className="space-y-4 flex flex-col justify-end">
            {right.map((p) => (
              <PhaseButton key={p.id} phase={p} active={p.id === activeId} onClick={() => setActiveId(p.id)} />
            ))}
          </div>
          {/* Bottom vertex */}
          <div className="col-span-2 px-6 sm:px-16 -mt-2">
            {bottom.map((p) => (
              <PhaseButton key={p.id} phase={p} active={p.id === activeId} onClick={() => setActiveId(p.id)} />
            ))}
          </div>
        </div>

        {/* Terminal */}
        <div className="rounded-2xl border border-brand-navy/15 bg-brand-navy overflow-hidden shadow-lg">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <span className="ml-3 flex items-center gap-1.5 text-[11px] font-mono text-white/60">
              <Terminal className="w-3.5 h-3.5" />
              {active.agent}
            </span>
          </div>
          <div className="p-5 font-mono text-xs leading-relaxed min-h-[180px]">
            {active.logs.map((line, i) => (
              <div
                key={i}
                className={
                  line.startsWith("✓")
                    ? "text-brand-emerald"
                    : line.startsWith("$")
                      ? "text-brand-cyan"
                      : "text-white/70"
                }
              >
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
