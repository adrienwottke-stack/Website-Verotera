"use client";

import { useState } from "react";
import { FileSearch, LayoutGrid, Activity, Thermometer, CheckCircle2, Terminal } from "lucide-react";

type Phase = {
  id: string;
  step: string;
  label: string;
  icon: typeof FileSearch;
  agent: string;
  arm: "left" | "bottom" | "right";
  logs: string[];
};

const PHASES: Phase[] = [
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
      "→ 142 Constraints extrahiert",
      "→ Mapping auf Engineering-Knowledge-Graph",
      "✓ Spezifikation validiert (0 Konflikte)",
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
      "→ Busbar-Routing optimiert (parasitär < 5 nH)",
      "→ Kriechstrecken-/Luftstrecken-Check: OK",
      "✓ Layout-Kandidat #3 ausgewählt",
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
      "→ Generiere Stimulus-Vektoren (240)",
      "→ Doppelpuls-Test @ 800 V / 600 A",
      "→ Schaltverluste: −62 % vs. Si-IGBT",
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
      "→ Sperrschichttemperatur Tj: 168 °C",
      "→ Kühlkörper-Layout angepasst",
      "✓ Tj < 175 °C Grenzwert eingehalten",
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
      "→ AEC-Q & IEC 60747 Coverage: 100 %",
      "→ Compliance-Dokumentation generiert",
      "→ Offene Zuverlässigkeitsrisiken: 0",
      "✓ Freigabe-Paket erstellt",
    ],
  },
];

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
  const [activeId, setActiveId] = useState<string>("requirements");
  const active = PHASES.find((p) => p.id === activeId) ?? PHASES[0];
  const left = PHASES.filter((p) => p.arm === "left");
  const bottom = PHASES.filter((p) => p.arm === "bottom");
  const right = PHASES.filter((p) => p.arm === "right");

  return (
    <div className="font-display rounded-3xl border border-brand-navy/8 bg-surface-light p-6 sm:p-10">
      <div className="mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
          Interaktives V-Modell
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
          Autonome KI-Agenten je Engineering-Phase
        </h3>
        <p className="text-sm text-brand-navy/55 mt-2">
          Wählen Sie eine Phase, um zu sehen, welcher spezialisierte Agent sie beschleunigt.
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
