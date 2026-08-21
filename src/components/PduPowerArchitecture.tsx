"use client";

import { motion } from "framer-motion";
import { ArrowBigDown, ArrowBigRight } from "lucide-react";
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
    polLabel: "PoL stages",
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
    polLabel: "PoL stages",
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
      <h3 className={`font-display text-lg font-bold leading-tight ${dark ? "text-white" : "text-brand-navy"}`}>
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
      : "bg-brand-navy-light";
  return (
    <div className={`flex items-center justify-center rounded-lg px-3 py-2 lg:px-2 lg:py-4 shrink-0 ${toneClasses}`}>
      <span className="font-display text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap lg:[writing-mode:vertical-rl] lg:rotate-180">
        {label}
      </span>
    </div>
  );
}

/** Stylised lattice transmission tower, as on the customer's slide. */
function PylonGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 140"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
    >
      <path d="M40 0v12M34 12h12M14 140 34 12M66 140 46 12" />
      <path d="M6 32h68M10 32v9M70 32v9" />
      <path d="M14 58h52M18 58v8M62 58v8" />
      <path d="M27 62 53 86M53 62 27 86M22 92 58 120M58 92 22 120" />
    </svg>
  );
}

/** Fat double-headed coupling arrow (node ↔ busbar), like the slide's block arrows. */
function FatArrowLR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 26 14" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.5 0 0 7l6.5 7v-4h13v4L26 7 19.5 0v4h-13V0z" />
    </svg>
  );
}

function UtilityNodeCard({ node }: { node: UtilityNode }) {
  const emerald = node.accent === "emerald";
  return (
    <div
      className={`relative overflow-hidden rounded-lg border bg-white px-4 py-2.5 shadow-sm text-center ${
        emerald ? "border-brand-emerald/50" : "border-brand-navy/15"
      }`}
    >
      {emerald && (
        /* Weiße Basis + Emerald-Schleier = flächig hellgrüne Kachel wie auf der Folie. */
        <span aria-hidden="true" className="absolute inset-0 bg-brand-emerald/20" />
      )}
      <span className="relative font-display text-sm font-bold text-brand-navy leading-tight">{node.name}</span>
      {node.sub && (
        <p className="relative font-sans text-xs text-brand-navy/60 leading-snug mt-0.5">{node.sub}</p>
      )}
    </div>
  );
}

/** Facility converter box with its AC-DC/DC-DC strip and the bidirectional busbar coupling. */
function FacilityNodeCard({ node }: { node: FacilityNode }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <div className="flex-1 min-w-0 text-center">
        <p className="font-sans text-[10px] font-semibold text-brand-navy/60 mb-1">{node.label}</p>
        <div className="rounded-lg border border-brand-navy/15 bg-white shadow-sm overflow-hidden">
          <div className="px-3 py-2">
            <span className="font-display text-sm font-bold text-brand-navy leading-tight">{node.name}</span>
          </div>
          <div className="border-t border-brand-navy/10 bg-brand-blue/15 px-3 py-1">
            <span className="text-[10px] font-bold tracking-wide text-brand-navy/70">{node.conv}</span>
          </div>
        </div>
      </div>
      <FatArrowLR className="w-6 h-3.5 text-brand-cyan shrink-0 rotate-90 lg:rotate-0" />
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
 * dark utility panel with grid pylon, light-blue facility panel with HV-PDU rail,
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
          <div className="flex gap-4 flex-1 items-center">
            <div className="hidden sm:block shrink-0">
              <PylonGraphic className="w-20 h-36 text-white/30" />
            </div>
            <div className="flex-1 space-y-3 min-w-0">
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

        {/* Level 2: Facility Level (light-blue panel, PPT: HV-PDU rail + PDU + converter column) */}
        <motion.div
          {...pop(0.12)}
          className="flex-[1.2] rounded-2xl border border-brand-cyan/25 bg-brand-cyan/20 p-5 flex flex-col"
        >
          <PanelHeader title={t.facilityTitle} range={t.facilityRange} />
          <div className="flex flex-col lg:flex-row gap-3 flex-1">
            <BusRail label={t.facilityFeed} tone="navy" />

            {/* PDU + distribution board */}
            <div className="flex-1 flex flex-col justify-center min-w-0 text-center">
              <p className="font-sans text-[10px] font-semibold text-brand-navy/60 mb-1">{t.pduLabel}</p>
              <div className="rounded-lg border border-brand-navy/15 bg-white px-3 py-3.5 shadow-sm">
                <span className="font-display text-sm font-bold text-brand-navy">{t.pduName}</span>
              </div>
              <div className="mt-4">
                <p className="font-sans text-[11px] font-bold text-brand-navy/80">{t.pduBoardTitle}</p>
                <p className="font-sans text-[11px] text-brand-navy/60 leading-relaxed">{t.pduBoardDesc}</p>
              </div>
            </div>

            {/* PDU → HV PSU feed */}
            <div aria-hidden="true" className="flex items-center justify-center text-brand-cyan">
              <ArrowBigRight className="hidden lg:block w-6 h-6 fill-current" strokeWidth={1} />
              <ArrowBigDown className="block lg:hidden w-6 h-6 fill-current" strokeWidth={1} />
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
        <motion.div {...pop(0.24)} className="flex-[1.2] rounded-2xl bg-brand-navy p-5 shadow-sm flex flex-col">
          <PanelHeader dark title={t.rackTitle} range={t.rackRange} />
          <div className="flex flex-col lg:flex-row gap-3 flex-1">
            <BusRail label={t.busbar} tone="cyan" />

            <div className="flex-1 flex flex-col min-w-0">
              {/* Busbar → hot swap */}
              <div className="flex items-center gap-2 text-brand-cyan">
                <ArrowBigRight aria-hidden="true" className="hidden lg:block w-6 h-6 fill-current shrink-0" strokeWidth={1} />
                <ArrowBigDown aria-hidden="true" className="block lg:hidden w-6 h-6 fill-current shrink-0" strokeWidth={1} />
                <span className="rounded-lg border border-white/10 bg-brand-navy-light px-3.5 py-2 font-display text-xs font-bold text-white">
                  {t.hotSwap}
                </span>
              </div>

              {/* Stretchy connector: fills the panel height like the slide's long arrow */}
              <div aria-hidden="true" className="flex-1 min-h-6 flex items-center justify-center py-1">
                <ArrowBigDown className="w-6 h-6 fill-current text-brand-cyan" strokeWidth={1} />
              </div>

              {/* Smart PDU (highlighted, brand signet next to the name as on the slide) */}
              <div className="rounded-xl border border-brand-cyan/40 bg-white px-4 py-3 shadow-[0_4px_24px_rgba(16,166,226,0.25)]">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-display text-base font-bold text-brand-navy leading-tight">
                      {t.smartPduName}
                    </span>
                    <span
                      aria-hidden="true"
                      className="v-watermark inline-block shrink-0"
                      style={{ width: 20, height: 20, backgroundColor: "var(--color-brand-cyan)" }}
                    />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-brand-cyan shrink-0">
                    {t.smartPduTag}
                  </span>
                </div>
                <p className="font-sans text-xs text-brand-navy/55 leading-relaxed mt-1">{t.smartPduSub}</p>
              </div>

              {/* Stretchy step-down to PoL */}
              <div aria-hidden="true" className="flex-1 min-h-6 flex items-center justify-center gap-2 py-1">
                <ArrowBigDown className="w-5 h-5 fill-current text-brand-cyan" strokeWidth={1} />
                <span className="font-sans text-[10px] font-semibold text-white/70">{t.stepDownLabel}</span>
              </div>

              {/* PoL stages: IBC → VRM → GPU (light chips with dark text, as on the slide) */}
              <div>
                <p className="font-display text-sm font-semibold text-white/85 text-center mb-2">{t.polLabel}</p>
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  {t.polStages.map((stage) => (
                    <div key={stage.name} className="flex items-center gap-1.5">
                      {stage.voltage && (
                        <div className="flex flex-col items-center px-0.5" aria-hidden="true">
                          <span className="font-sans text-[9px] font-semibold text-white/70 whitespace-nowrap">
                            {stage.voltage}
                          </span>
                          <ArrowBigRight className="w-5 h-5 fill-current text-brand-cyan" strokeWidth={1} />
                        </div>
                      )}
                      <span
                        className={`relative overflow-hidden rounded-lg border bg-white px-3.5 py-2 font-display text-xs font-bold text-brand-navy ${
                          stage.tone === "cyan" ? "border-brand-cyan/50" : "border-brand-emerald/50"
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={`absolute inset-0 ${
                            stage.tone === "cyan" ? "bg-brand-cyan/20" : "bg-brand-emerald/20"
                          }`}
                        />
                        <span className="relative">{stage.name}</span>
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
