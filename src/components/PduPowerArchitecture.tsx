"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowBigDown, ArrowBigRight, ArrowDown, ArrowLeftRight, ArrowRight, UtilityPole } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type UtilityNode = {
  name: string;
  sub?: string;
  accent?: "emerald";
};

type FacilityNode = {
  label: string;
  name: string;
  conv: string;
};

type PolStage = {
  voltage?: string;
  name: string;
  tone: "emerald" | "cyan";
};

type Copy = {
  utilityTitle: string;
  utilityRange: string;
  utilityNodes: UtilityNode[];
  utilityOutlookLabel: string;
  utilityOutlookValue: string;
  facilityTitle: string;
  facilityRange: string;
  facilityFeed: string;
  pduLabel: string;
  pduName: string;
  pduBoardTitle: string;
  pduBoardDesc: string;
  facilityNodes: FacilityNode[];
  rackTitle: string;
  rackRange: string;
  busbar: string;
  hotSwap: string;
  smartPduName: string;
  smartPduSub: string;
  smartPduTag: string;
  stepDownLabel: string;
  polLabel: string;
  polStages: PolStage[];
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
    utilityOutlookLabel: "Outlook",
    utilityOutlookValue: "„ALL-DC-Grid“",
    facilityTitle: "Facility Level",
    facilityRange: "13,8 – 35 kV AC → 800 VDC",
    facilityFeed: "HV PDU",
    pduLabel: "Power Distribution Unit",
    pduName: "PDU",
    pduBoardTitle: "Power Distribution Board",
    pduBoardDesc: "Protection, Metering, Fusing, Monitoring",
    facilityNodes: [
      { label: "Power Link Substation System", name: "PLSS", conv: "DC-DC" },
      { label: "Power Supply", name: "HV PSU", conv: "AC-DC" },
      { label: "Energy Storage", name: "BESS/BBU", conv: "DC-DC" },
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
      { name: "IBC", tone: "emerald" },
      { voltage: "12/6 VDC", name: "VRM", tone: "emerald" },
      { voltage: "0,7–1,0 VDC", name: "GPU", tone: "cyan" },
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
    utilityOutlookLabel: "Outlook",
    utilityOutlookValue: "“ALL-DC grid”",
    facilityTitle: "Facility Level",
    facilityRange: "13.8 – 35 kV AC → 800 VDC",
    facilityFeed: "HV PDU",
    pduLabel: "Power Distribution Unit",
    pduName: "PDU",
    pduBoardTitle: "Power distribution board",
    pduBoardDesc: "Protection, metering, fusing, monitoring",
    facilityNodes: [
      { label: "Power Link Substation System", name: "PLSS", conv: "DC-DC" },
      { label: "Power supply", name: "HV PSU", conv: "AC-DC" },
      { label: "Energy storage", name: "BESS/BBU", conv: "DC-DC" },
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
      { name: "IBC", tone: "emerald" },
      { voltage: "12/6 VDC", name: "VRM", tone: "emerald" },
      { voltage: "0.7–1.0 VDC", name: "GPU", tone: "cyan" },
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

function PanelHeader({ title, range, dark }: { title: string; range: string; dark?: boolean }) {
  return (
    <div className="text-center mb-5">
      <h3 className={`font-display text-base font-bold leading-tight ${dark ? "text-white" : "text-brand-navy"}`}>
        {title}
      </h3>
      <p className="font-sans text-xs font-semibold text-brand-cyan mt-1">{range}</p>
    </div>
  );
}

/** Vertical rail on desktop (HV PDU feed / 800 VDC busbar), horizontal strip on mobile. */
function BusRail({ label, tone }: { label: string; tone: "navy" | "cyan" }) {
  const toneClasses =
    tone === "cyan"
      ? "bg-brand-cyan shadow-[0_0_24px_rgba(16,166,226,0.35)]"
      : "bg-brand-navy";
  return (
    <div className={`flex items-center justify-center rounded-lg px-3 py-2 lg:px-2 lg:py-4 shrink-0 ${toneClasses}`}>
      <span className="font-display text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180">
        {label}
      </span>
    </div>
  );
}

function UtilityNodeCard({ node }: { node: UtilityNode }) {
  const emerald = node.accent === "emerald";
  return (
    <div
      className={`relative overflow-hidden rounded-xl border bg-white px-4 py-2.5 shadow-sm ${
        emerald ? "border-brand-emerald/40" : "border-brand-navy/8"
      }`}
    >
      {emerald && (
        <>
          {/* Weiße Basis + Emerald-Schleier = flächig hellgrüne Kachel wie auf der Folie,
              ohne dass der dunkle Panel-Hintergrund durchscheint. */}
          <span aria-hidden="true" className="absolute inset-0 bg-brand-emerald/15" />
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-brand-emerald" />
        </>
      )}
      <span className="relative font-display text-sm font-bold text-brand-navy leading-tight">{node.name}</span>
      {node.sub && (
        <p className="relative font-sans text-xs text-brand-navy/55 leading-relaxed mt-0.5">{node.sub}</p>
      )}
    </div>
  );
}

/** Facility converter box with its AC-DC/DC-DC strip and the bidirectional busbar coupling. */
function FacilityNodeCard({ node }: { node: FacilityNode }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <div className="flex-1 min-w-0">
        <p className="font-sans text-[10px] font-semibold text-brand-navy/55 mb-1">{node.label}</p>
        <div className="rounded-xl border border-brand-navy/8 bg-white shadow-sm overflow-hidden">
          <div className="px-3 py-2">
            <span className="font-display text-sm font-bold text-brand-navy leading-tight">{node.name}</span>
          </div>
          <div className="border-t border-brand-navy/8 bg-brand-blue/10 px-3 py-1 text-center">
            <span className="text-[9px] font-bold uppercase tracking-wider text-brand-blue">{node.conv}</span>
          </div>
        </div>
      </div>
      <ArrowLeftRight aria-hidden="true" className="w-4 h-4 text-brand-cyan shrink-0 rotate-90 lg:rotate-0" />
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center shrink-0 text-brand-cyan py-1 lg:py-0">
      <ArrowBigRight className="hidden lg:block w-9 h-9 fill-current" strokeWidth={1} />
      <ArrowBigDown className="block lg:hidden w-9 h-9 fill-current" strokeWidth={1} />
    </div>
  );
}

/**
 * Pattern-J diagram: the customer's PPT block diagram of the 800 VDC power path
 * (utility grid → facility level → compute rack level), rebuilt 1:1 in topology —
 * dark utility panel with grid pylon, light facility panel with HV-PDU rail,
 * navy rack panel with 800 VDC busbar rail — restyled in the brand tokens.
 */
export default function PduPowerArchitecture() {
  const lang = useLang();
  const t = COPY[lang];

  return (
    <div>
      <div className="flex flex-col lg:flex-row items-stretch gap-3">
        {/* Level 1: Utility Grid (dark teal panel, PPT: pylon + source stack) */}
        <motion.div {...pop(0)} className="flex-1 rounded-2xl bg-brand-navy-light p-5 shadow-sm flex flex-col">
          <PanelHeader dark title={t.utilityTitle} range={t.utilityRange} />
          <div className="flex gap-4 flex-1">
            <div className="hidden sm:flex items-center justify-center shrink-0">
              <UtilityPole aria-hidden="true" className="w-16 h-28 text-white/25" strokeWidth={1.25} />
            </div>
            <div className="flex-1 space-y-3">
              {t.utilityNodes.map((node) => (
                <UtilityNodeCard key={node.name} node={node} />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p className="font-sans text-xs text-white/60">{t.utilityOutlookLabel}</p>
            <p className="font-display text-sm font-bold text-white">{t.utilityOutlookValue}</p>
          </div>
        </motion.div>

        <Connector />

        {/* Level 2: Facility Level (light panel, PPT: HV-PDU rail + PDU + converter column) */}
        <motion.div
          {...pop(0.12)}
          className="flex-[1.25] rounded-2xl border border-brand-cyan/20 bg-brand-cyan/10 p-5 flex flex-col"
        >
          <PanelHeader title={t.facilityTitle} range={t.facilityRange} />
          <div className="flex flex-col lg:flex-row gap-3 flex-1">
            <BusRail label={t.facilityFeed} tone="navy" />

            {/* PDU + distribution board */}
            <div className="flex-1 flex flex-col justify-center min-w-0">
              <p className="font-sans text-[10px] font-semibold text-brand-navy/55 mb-1">{t.pduLabel}</p>
              <div className="rounded-xl border border-brand-navy/8 bg-white px-3 py-3 shadow-sm text-center">
                <span className="font-display text-sm font-bold text-brand-navy">{t.pduName}</span>
              </div>
              <div className="mt-3">
                <p className="font-sans text-[11px] font-bold text-brand-navy/75">{t.pduBoardTitle}</p>
                <p className="font-sans text-[11px] text-brand-navy/60 leading-relaxed">{t.pduBoardDesc}</p>
              </div>
            </div>

            {/* PDU → HV PSU feed */}
            <div aria-hidden="true" className="flex items-center justify-center text-brand-cyan">
              <ArrowRight className="hidden lg:block w-4 h-4" />
              <ArrowDown className="block lg:hidden w-4 h-4" />
            </div>

            {/* Converters coupled to the 800 VDC busbar */}
            <div className="flex-[1.15] flex flex-col justify-between gap-3 min-w-0">
              {t.facilityNodes.map((node) => (
                <FacilityNodeCard key={node.name} node={node} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Level 3: Compute Rack Level (navy panel, PPT: busbar rail + hot swap + Smart PDU + PoL) */}
        <motion.div {...pop(0.24)} className="flex-[1.1] rounded-2xl bg-brand-navy p-5 shadow-sm flex flex-col">
          <PanelHeader dark title={t.rackTitle} range={t.rackRange} />
          <div className="flex flex-col lg:flex-row gap-3 flex-1">
            <BusRail label={t.busbar} tone="cyan" />

            <div className="flex-1 flex flex-col min-w-0">
              {/* Busbar → hot swap */}
              <div className="flex items-center gap-2">
                <ArrowRight aria-hidden="true" className="hidden lg:block w-4 h-4 text-brand-cyan shrink-0" />
                <ArrowDown aria-hidden="true" className="block lg:hidden w-4 h-4 text-brand-cyan shrink-0" />
                <span className="rounded-lg border border-white/10 bg-brand-navy-light px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white">
                  {t.hotSwap}
                </span>
              </div>

              <div aria-hidden="true" className="flex justify-center py-1.5">
                <ArrowDown className="w-4 h-4 text-brand-cyan" />
              </div>

              {/* Smart PDU (highlighted, with brand signet as in the PPT) */}
              <div className="rounded-xl border border-brand-cyan/40 bg-white px-4 py-3 shadow-[0_4px_24px_rgba(16,166,226,0.25)]">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="flex items-center justify-center bg-brand-navy rounded-md p-1 shrink-0">
                      <Image
                        src="/images/v-signet-transparent.png"
                        alt="VEROTERA Signet"
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    </span>
                    <span className="font-display text-sm font-bold text-brand-navy leading-tight">
                      {t.smartPduName}
                    </span>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-cyan shrink-0">
                    {t.smartPduTag}
                  </span>
                </div>
                <p className="font-sans text-xs text-brand-navy/55 leading-relaxed mt-1">{t.smartPduSub}</p>
              </div>

              {/* Step-down to PoL */}
              <div aria-hidden="true" className="flex items-center justify-center gap-2 py-2">
                <ArrowDown className="w-4 h-4 text-brand-cyan" />
                <span className="font-sans text-[10px] font-semibold text-white/60">{t.stepDownLabel}</span>
              </div>

              {/* PoL stages: IBC → VRM → GPU */}
              <div className="mt-auto">
                <p className="text-[9px] font-bold uppercase tracking-wider text-white/50 text-center mb-2">
                  {t.polLabel}
                </p>
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  {t.polStages.map((stage) => (
                    <div key={stage.name} className="flex items-center gap-1.5">
                      {stage.voltage && (
                        <div className="flex flex-col items-center px-0.5" aria-hidden="true">
                          <span className="font-sans text-[9px] font-semibold text-white/60 whitespace-nowrap">
                            {stage.voltage}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />
                        </div>
                      )}
                      <span
                        className={`rounded-lg border px-3 py-2 font-display text-xs font-bold text-white ${
                          stage.tone === "cyan"
                            ? "border-brand-cyan/40 bg-brand-cyan/20"
                            : "border-brand-emerald/40 bg-brand-emerald/15"
                        }`}
                      >
                        {stage.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="font-sans text-sm text-brand-navy/40 text-center mt-8">{t.caption}</p>
    </div>
  );
}
