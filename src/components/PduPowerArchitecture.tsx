"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type DiagramNode = {
  name: string;
  sub?: string;
  tag?: string;
  accent?: "emerald";
};

type Copy = {
  utilityTitle: string;
  utilityRange: string;
  utilityNodes: DiagramNode[];
  utilityOutlook: string;
  facilityTitle: string;
  facilityRange: string;
  facilityFeed: string;
  facilityNodes: DiagramNode[];
  rackTitle: string;
  rackRange: string;
  busbar: string;
  hotSwap: string;
  smartPduName: string;
  smartPduSub: string;
  smartPduTag: string;
  stepDownLabel: string;
  polLabel: string;
  polStages: { voltage?: string; name: string }[];
  caption: string;
};

const COPY: Record<Lang, Copy> = {
  de: {
    utilityTitle: "Utility Grid",
    utilityRange: "13,8 – 35 kV AC → 800 VDC",
    utilityNodes: [
      { name: "Power Transformer" },
      { name: "SST", sub: "Solid-State-Transformer" },
      { name: "On-Prem-Gen", sub: "Diesel-/Gas-Generator" },
      { name: "Renewables", sub: "Wind-, Solar-Power", accent: "emerald" },
    ],
    utilityOutlook: "Outlook „ALL-DC-Grid“",
    facilityTitle: "Facility Level",
    facilityRange: "13,8 – 35 kV AC → 800 VDC",
    facilityFeed: "HV PDU",
    facilityNodes: [
      {
        name: "PDU",
        sub: "Power Distribution Board: Protection, Metering, Fusing, Monitoring",
        tag: "Power Distribution Unit",
      },
      { name: "PLSS", sub: "Power Link Substation System", tag: "DC-DC" },
      { name: "HV PSU", sub: "Power Supply", tag: "AC-DC" },
      { name: "BESS/BBU", sub: "Energy Storage", tag: "DC-DC" },
    ],
    rackTitle: "Compute Rack Level",
    rackRange: "800 VDC → 54/48 VDC → PoL",
    busbar: "800 VDC Busbar",
    hotSwap: "Hot Swap",
    smartPduName: "Smart PDU",
    smartPduSub: "Full-GaN DC-DC Wandler",
    smartPduTag: "Full-GaN",
    stepDownLabel: "54/48 VDC",
    polLabel: "PoL Stages",
    polStages: [
      { name: "IBC" },
      { voltage: "12/6 VDC", name: "VRM" },
      { voltage: "0,7–1,0 VDC", name: "GPU" },
    ],
    caption: "Full-GaN DC-DC Wandler – Wide-Bandgap at the Core",
  },
  en: {
    utilityTitle: "Utility Grid",
    utilityRange: "13.8 – 35 kV AC → 800 VDC",
    utilityNodes: [
      { name: "Power Transformer" },
      { name: "SST", sub: "Solid-state transformer" },
      { name: "On-Prem-Gen", sub: "Diesel/gas generator" },
      { name: "Renewables", sub: "Wind & solar power", accent: "emerald" },
    ],
    utilityOutlook: "Outlook “ALL-DC grid”",
    facilityTitle: "Facility Level",
    facilityRange: "13.8 – 35 kV AC → 800 VDC",
    facilityFeed: "HV PDU",
    facilityNodes: [
      {
        name: "PDU",
        sub: "Power distribution board: protection, metering, fusing, monitoring",
        tag: "Power Distribution Unit",
      },
      { name: "PLSS", sub: "Power Link Substation System", tag: "DC-DC" },
      { name: "HV PSU", sub: "Power supply", tag: "AC-DC" },
      { name: "BESS/BBU", sub: "Energy storage", tag: "DC-DC" },
    ],
    rackTitle: "Compute Rack Level",
    rackRange: "800 VDC → 54/48 VDC → PoL",
    busbar: "800 VDC Busbar",
    hotSwap: "Hot Swap",
    smartPduName: "Smart PDU",
    smartPduSub: "Full-GaN DC-DC converter",
    smartPduTag: "Full-GaN",
    stepDownLabel: "54/48 VDC",
    polLabel: "PoL Stages",
    polStages: [
      { name: "IBC" },
      { voltage: "12/6 VDC", name: "VRM" },
      { voltage: "0.7–1.0 VDC", name: "GPU" },
    ],
    caption: "Full-GaN DC-DC Converter – Wide-Bandgap at the Core",
  },
};

const pop = (delay: number) => ({
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.5, delay },
});

function NodeCard({ node }: { node: DiagramNode }) {
  const accentBorder = node.accent === "emerald" ? "border-brand-emerald/30" : "border-brand-navy/8";
  const tagColor = node.accent === "emerald" ? "text-brand-emerald" : "text-brand-cyan";
  return (
    <div className={`rounded-xl border ${accentBorder} bg-white px-4 py-3 shadow-sm`}>
      <div className="flex items-center justify-between gap-2">
        <span className="font-display text-sm font-bold text-brand-navy leading-tight">{node.name}</span>
        {node.tag && (
          <span className={`text-[9px] font-bold uppercase tracking-wider ${tagColor} shrink-0 text-right`}>
            {node.tag}
          </span>
        )}
      </div>
      {node.sub && (
        <p className="font-sans text-xs text-brand-navy/55 leading-relaxed mt-0.5">{node.sub}</p>
      )}
    </div>
  );
}

function LevelHeader({ title, range }: { title: string; range: string }) {
  return (
    <div className="text-center mb-4">
      <h3 className="font-display text-base font-bold text-brand-navy leading-tight">{title}</h3>
      <p className="font-sans text-xs font-semibold text-brand-cyan mt-1">{range}</p>
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center shrink-0 text-brand-cyan py-1 lg:py-0 lg:px-0.5">
      <ArrowRight className="hidden lg:block w-5 h-5" />
      <ArrowDown className="block lg:hidden w-5 h-5" />
    </div>
  );
}

function FlowStep() {
  return (
    <div aria-hidden="true" className="flex justify-center py-1">
      <ArrowDown className="w-4 h-4 text-brand-cyan" />
    </div>
  );
}

/**
 * Pattern-J diagram: the 800 VDC power path of the AI data center
 * (utility grid → facility level → compute rack level), rebuilt from the
 * customer's architecture slide in the landing-page design language.
 */
export default function PduPowerArchitecture() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Level 1: Utility Grid */}
        <motion.div
          {...pop(0)}
          className="flex-1 rounded-2xl border border-brand-navy/8 bg-surface-light p-5"
        >
          <LevelHeader title={t.utilityTitle} range={t.utilityRange} />
          <div className="space-y-3">
            {t.utilityNodes.map((node) => (
              <NodeCard key={node.name} node={node} />
            ))}
          </div>
          <p className="font-sans text-xs font-semibold text-brand-navy/50 text-center mt-4">
            {t.utilityOutlook}
          </p>
        </motion.div>

        <Connector />

        {/* Level 2: Facility Level */}
        <motion.div
          {...pop(0.12)}
          className="flex-1 rounded-2xl border border-brand-navy/8 bg-surface-light p-5"
        >
          <LevelHeader title={t.facilityTitle} range={t.facilityRange} />
          <div className="rounded-xl border border-brand-blue/25 bg-brand-blue/10 px-4 py-2.5 text-center mb-3">
            <span className="font-display text-sm font-bold text-brand-navy">{t.facilityFeed}</span>
          </div>
          <div className="space-y-3">
            {t.facilityNodes.map((node) => (
              <NodeCard key={node.name} node={node} />
            ))}
          </div>
        </motion.div>

        <Connector />

        {/* Level 3: Compute Rack Level */}
        <motion.div
          {...pop(0.24)}
          className="flex-1 rounded-2xl border border-brand-navy/8 bg-surface-light p-5"
        >
          <LevelHeader title={t.rackTitle} range={t.rackRange} />

          {/* 800 VDC busbar */}
          <div className="rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-2.5 text-center">
            <span className="font-display text-sm font-bold text-brand-navy">{t.busbar}</span>
          </div>

          <FlowStep />

          {/* Hot swap */}
          <div className="flex justify-center">
            <span className="rounded-full border border-brand-navy/8 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy/60 shadow-sm">
              {t.hotSwap}
            </span>
          </div>

          <FlowStep />

          {/* Smart PDU (highlighted) */}
          <div className="rounded-xl border border-brand-cyan/40 bg-white px-4 py-3 shadow-[0_4px_24px_rgba(16,166,226,0.12)]">
            <div className="flex items-center justify-between gap-2">
              <span className="font-display text-sm font-bold text-brand-navy leading-tight">
                {t.smartPduName}
              </span>
              <span className="text-[9px] font-bold uppercase tracking-wider text-brand-cyan shrink-0">
                {t.smartPduTag}
              </span>
            </div>
            <p className="font-sans text-xs text-brand-navy/55 leading-relaxed mt-0.5">{t.smartPduSub}</p>
          </div>

          {/* Step-down */}
          <div className="flex items-center justify-center gap-2 py-1.5" aria-hidden="true">
            <ArrowDown className="w-4 h-4 text-brand-cyan" />
            <span className="font-sans text-[10px] font-semibold text-brand-navy/50">{t.stepDownLabel}</span>
          </div>

          {/* PoL stages */}
          <div className="rounded-xl border border-brand-navy/8 bg-white p-3 shadow-sm">
            <p className="text-[9px] font-bold uppercase tracking-wider text-brand-navy/50 text-center mb-2">
              {t.polLabel}
            </p>
            <div className="flex items-center justify-center gap-1.5 flex-wrap">
              {t.polStages.map((stage) => (
                <div key={stage.name} className="flex items-center gap-1.5">
                  {stage.voltage && (
                    <div className="flex flex-col items-center px-0.5" aria-hidden="true">
                      <span className="font-sans text-[9px] font-semibold text-brand-navy/50 whitespace-nowrap">
                        {stage.voltage}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
                    </div>
                  )}
                  <span className="rounded-lg border border-brand-navy/8 bg-surface-light px-3 py-2 font-display text-xs font-bold text-brand-navy">
                    {stage.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <p className="font-sans text-sm text-brand-navy/40 text-center mt-8">{t.caption}</p>
    </div>
  );
}
