"use client";

import { useState } from "react";
import { Zap, RefreshCcw, Cable, Cpu, Server, ArrowRight, ArrowDown } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type Node = {
  id: string;
  label: string;
  icon: typeof Zap;
  caption: string;
  specs: { k: string; v: string }[];
  detail: string;
};

const NODES: Record<Lang, Node[]> = {
  de: [
    {
      id: "grid",
      label: "Stromnetz (AC)",
      icon: Zap,
      caption: "480 VAC Einspeisung",
      specs: [
        { k: "Eingang", v: "3-phasig 480 VAC" },
        { k: "Funktion", v: "Netzanbindung" },
      ],
      detail:
        "Dreiphasige Mittelspannungseinspeisung aus dem Versorgungsnetz. Ausgangspunkt der Energieverteilung im KI-Rechenzentrum.",
    },
    {
      id: "sst",
      label: "SST / Gleichrichter",
      icon: RefreshCcw,
      caption: "98,5 % Wirkungsgrad (GaN)",
      specs: [
        { k: "Wirkungsgrad", v: "98,5 %" },
        { k: "Technologie", v: "GaN-Bauelemente" },
        { k: "Wandlung", v: "AC → 800 V DC" },
      ],
      detail:
        "Der Solid-State-Transformer (SST) wandelt die Netz-Wechselspannung mit GaN-Bauelementen in eine 800-V-Gleichspannung um – bei 98,5 % Wirkungsgrad und drastisch reduziertem Bauvolumen gegenüber Netzfrequenz-Transformatoren.",
    },
    {
      id: "bus",
      label: "800 V DC-Bus",
      icon: Cable,
      caption: "Verlustarmes Backbone",
      specs: [
        { k: "Spannung", v: "800 V DC" },
        { k: "Vorteil", v: "−40 % I²R-Verluste" },
      ],
      detail:
        "Das 800-V-DC-Backbone verteilt Energie verlustarm im Rack. Die höhere Busspannung senkt den Strom und damit die I²R-Verluste in den Stromschienen deutlich gegenüber klassischen 48-V-Architekturen.",
    },
    {
      id: "pdu",
      label: "Smart PDU",
      icon: Cpu,
      caption: "Aktives Lastmanagement",
      specs: [
        { k: "Telemetrie", v: "Echtzeit pro Kanal" },
        { k: "Schutz", v: "Solid-State Breaker" },
        { k: "Steuerung", v: "Aktives Lastmanagement" },
      ],
      detail:
        "Die Smart Power Distribution Unit überwacht jeden Ausgangskanal in Echtzeit, priorisiert Lasten dynamisch und schaltet über Solid-State-Breaker sicher ab – ohne mechanischen Verschleiß und mit vollständiger Telemetrie.",
    },
    {
      id: "gpu",
      label: "GPU-Shelves",
      icon: Server,
      caption: "48 V / 12 V Point-of-Load",
      specs: [
        { k: "Ausgang", v: "48 V / 12 V" },
        { k: "Last", v: "KI-Beschleuniger" },
      ],
      detail:
        "Kompakte Point-of-Load-Wandler setzen die 800 V direkt am GPU-Shelf auf 48 V / 12 V um und versorgen die KI-Beschleuniger mit maximaler Leistungsdichte bei minimalem Verteilungsverlust.",
    },
  ],
  en: [
    {
      id: "grid",
      label: "Utility Grid (AC)",
      icon: Zap,
      caption: "480 VAC feed",
      specs: [
        { k: "Input", v: "3-phase 480 VAC" },
        { k: "Function", v: "Grid connection" },
      ],
      detail:
        "Three-phase medium-voltage feed from the utility grid — the starting point of power distribution in the AI data center.",
    },
    {
      id: "sst",
      label: "SST / Rectifier",
      icon: RefreshCcw,
      caption: "98.5% efficiency (GaN)",
      specs: [
        { k: "Efficiency", v: "98.5%" },
        { k: "Technology", v: "GaN devices" },
        { k: "Conversion", v: "AC → 800 V DC" },
      ],
      detail:
        "The solid-state transformer (SST) converts grid AC into 800 V DC using GaN devices — at 98.5% efficiency and a drastically smaller footprint than line-frequency transformers.",
    },
    {
      id: "bus",
      label: "800 V DC Bus",
      icon: Cable,
      caption: "Low-loss backbone",
      specs: [
        { k: "Voltage", v: "800 V DC" },
        { k: "Benefit", v: "−40% I²R losses" },
      ],
      detail:
        "The 800 V DC backbone distributes power through the rack with minimal loss. The higher bus voltage lowers current — cutting I²R losses in the busbars significantly compared with classic 48 V architectures.",
    },
    {
      id: "pdu",
      label: "Smart PDU",
      icon: Cpu,
      caption: "Active load management",
      specs: [
        { k: "Telemetry", v: "Real-time per channel" },
        { k: "Protection", v: "Solid-state breakers" },
        { k: "Control", v: "Active load management" },
      ],
      detail:
        "The smart power distribution unit monitors every output channel in real time, prioritizes loads dynamically and disconnects safely via solid-state breakers — with no mechanical wear and full telemetry.",
    },
    {
      id: "gpu",
      label: "GPU Shelves",
      icon: Server,
      caption: "48 V / 12 V point-of-load",
      specs: [
        { k: "Output", v: "48 V / 12 V" },
        { k: "Load", v: "AI accelerators" },
      ],
      detail:
        "Compact point-of-load converters step the 800 V down to 48 V / 12 V right at the GPU shelf, powering the AI accelerators with maximum power density and minimal distribution loss.",
    },
  ],
};

const UI: Record<Lang, { eyebrow: string; title: string; hint: string }> = {
  de: {
    eyebrow: "Interaktives Diagramm",
    title: "Der Leistungspfad im KI-Rechenzentrum",
    hint: "Klicken Sie auf einen Knoten, um die technischen Daten der jeweiligen Stufe anzuzeigen.",
  },
  en: {
    eyebrow: "Interactive Diagram",
    title: "The power path in the AI data center",
    hint: "Click a node to see the technical data for each stage.",
  },
};

export default function PduFlowchart() {
  const lang = useLang();
  const nodes = NODES[lang];
  const ui = UI[lang];
  const [activeId, setActiveId] = useState<string>("sst");
  const active = nodes.find((n) => n.id === activeId) ?? nodes[0];

  return (
    <div className="rounded-3xl border border-brand-navy/8 bg-surface-light p-6 sm:p-10">
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

      {/* Flow nodes */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-2">
        {nodes.map((node, i) => {
          const isActive = node.id === activeId;
          return (
            <div key={node.id} className="flex flex-col lg:flex-row items-center lg:flex-1">
              <button
                type="button"
                onClick={() => setActiveId(node.id)}
                aria-pressed={isActive}
                className={`w-full flex flex-col items-center text-center gap-2 px-4 py-5 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 ${
                  isActive
                    ? "bg-brand-navy text-white border-brand-navy shadow-lg scale-[1.03]"
                    : "bg-white text-brand-navy border-brand-navy/10 hover:border-brand-cyan/40 hover:shadow-md"
                }`}
              >
                <span
                  className={`p-2.5 rounded-xl border ${
                    isActive
                      ? "bg-brand-cyan/20 border-brand-cyan/40 text-brand-cyan"
                      : "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan"
                  }`}
                >
                  <node.icon className="w-5 h-5" />
                </span>
                <span className="font-display text-sm font-bold leading-tight">{node.label}</span>
                <span
                  className={`text-[11px] font-medium ${isActive ? "text-brand-cyan" : "text-brand-navy/50"}`}
                >
                  {node.caption}
                </span>
              </button>

              {/* Connector */}
              {i < nodes.length - 1 && (
                <span className="text-brand-cyan/60 my-1 lg:my-0 lg:mx-1 shrink-0">
                  <ArrowRight className="hidden lg:block w-5 h-5" />
                  <ArrowDown className="block lg:hidden w-5 h-5" />
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="mt-8 rounded-2xl border border-brand-navy/10 bg-white p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
            <active.icon className="w-5 h-5" />
          </span>
          <h4 className="font-display text-lg font-bold text-brand-navy">{active.label}</h4>
        </div>
        <p className="text-sm text-brand-navy/65 leading-relaxed mb-5">{active.detail}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {active.specs.map((s) => (
            <div key={s.k} className="rounded-xl bg-surface-light border border-brand-navy/8 px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/45 block mb-0.5">
                {s.k}
              </span>
              <span className="font-display text-sm font-semibold text-brand-navy">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
