"use client";

import { useState } from "react";

/* ---------------------------------------------------------------------------
 * Interactive, fully vector V-model funnel (replaces the former raster PNG).
 * Crisp at any resolution; each phase tile magnifies on hover ("Lupe") and
 * fades in a short detail caption.
 * ------------------------------------------------------------------------- */

const VB_W = 1100;
const VB_H = 520;
const CX = VB_W / 2;
const TILEH = 56;
const SLOPE = 0.76; // horizontal shift per vertical unit along the V diagonal (steeper = wider top notch)
const DX = SLOPE * TILEH; // lean of an arm parallelogram from top to bottom edge

const inner = (y: number) => 409 + SLOPE * (y - 108);
const outer = (y: number) => inner(y) - 234;

type Pt = [number, number];

const NAVY = "#234554";
const NAVY_HI = "#2f5d72";
const BLUE = "#45b1e1";
const BLUE_HI = "#5ec4ef";

type Tile = {
  id: string;
  lines: string[];
  sub?: string;
  detail: string;
  pts: Pt[];
  fill: string;
  fillHi: string;
  text: string; // text colour
};

const centroid = (pts: Pt[]): Pt => [
  pts.reduce((s, p) => s + p[0], 0) / pts.length,
  pts.reduce((s, p) => s + p[1], 0) / pts.length,
];
const mirror = (pts: Pt[]): Pt[] => pts.map(([x, y]) => [VB_W - x, y] as Pt);
const toStr = (pts: Pt[]) => pts.map((p) => p.join(",")).join(" ");

/** Left-arm parallelogram leaning right, following the V diagonal. */
function arm(oxt: number, ixt: number, yt: number): Pt[] {
  const yb = yt + TILEH;
  return [
    [oxt, yt],
    [ixt, yt],
    [ixt + DX, yb],
    [oxt + DX, yb],
  ];
}

/** Centred trunk band (symmetric trapezoid) narrowing toward the point. */
function trunk(yt: number): Pt[] {
  const yb = yt + TILEH;
  const ot = outer(yt);
  const ob = outer(yb);
  return [
    [ot, yt],
    [VB_W - ot, yt],
    [VB_W - ob, yb],
    [ob, yb],
  ];
}

// ── Left arm (specification — navy, white text) ────────────────────────────
const LEFT: Omit<Tile, "fill" | "fillHi" | "text">[] = [
  { id: "pi", lines: ["Product Innovation", "Ideation"], detail: "KI-gestützte Ideenfindung und Innovations-Screening zum Projektstart.", pts: arm(8, 166, 40) },
  { id: "sra", lines: ["System Requirements", "Analysis"], detail: "Automatisierte Extraktion und Validierung der Systemanforderungen.", pts: arm(176, 350, 40) },
  { id: "ucd", lines: ["Use Case Definition"], sub: "Safety & Security", detail: "Use-Cases inkl. Safety- & Security-Zielen modellbasiert abgeleitet.", pts: arm(outer(108), inner(108), 108) },
  { id: "rs", lines: ["Requirements Specification"], detail: "Vollständige, konfliktfreie Spezifikation per Engineering-Knowledge-Graph.", pts: arm(outer(178), inner(178), 178) },
  { id: "sad", lines: ["System Architecture Design"], detail: "Topologie- und Architektur-Exploration mit KI-Design-Agenten.", pts: arm(outer(248), inner(248), 248) },
];

// ── Right arm (validation — blue, navy text) — mirror of the left arm ──────
const RIGHT_LABELS: { id: string; lines: string[]; detail: string }[] = [
  { id: "eol", lines: ["EoL"], detail: "Nachhaltiges End-of-Life: Recycling- und Re-Use-Strategie." },
  { id: "om", lines: ["Operation &", "Maintenance"], detail: "Predictive Maintenance über den gesamten Betrieb." },
  { id: "pq", lines: ["Performance Qualification"], detail: "Performance- und Zuverlässigkeits-Qualifikation nach AEC-Q / IEC." },
  { id: "vv", lines: ["Verification & Validation"], detail: "Verifikation & Validierung gegen die Spezifikation – 100 % Coverage." },
  { id: "testphase", lines: ["Testphase"], detail: "Doppelpuls- und Lasttests virtuell vorqualifiziert." },
];

// ── Bottom trunk (realisation — blue, navy text) ───────────────────────────
const TRUNK: Omit<Tile, "fill" | "fillHi" | "text">[] = [
  { id: "she", lines: ["Software-, Hardware-Engineering"], detail: "Co-Design von Software und Hardware in einem durchgängigen Flow.", pts: trunk(312) },
  { id: "md", lines: ["Mechanical Design"], detail: "Mechanik- und Thermik-Design parametrisch optimiert.", pts: trunk(376) },
  { id: "ir", lines: ["Integration & Release"], detail: "Integration und Release mit automatisierter Qualifikation.", pts: trunk(440) },
];

const TILES: Tile[] = [
  ...LEFT.map((t) => ({ ...t, fill: NAVY, fillHi: NAVY_HI, text: "#ffffff" })),
  ...RIGHT_LABELS.map((r, i) => ({
    ...r,
    pts: mirror(LEFT[i].pts),
    fill: BLUE,
    fillHi: BLUE_HI,
    text: NAVY,
  })),
  ...TRUNK.map((t) => ({ ...t, fill: BLUE, fillHi: BLUE_HI, text: NAVY })),
];

// Signet sits in the widest (top) part of the central notch so the
// "Agentic AI" lockup never overlaps the surrounding tiles.
const SIGNET: Pt = [476, 74];

// "Agent thread": glowing nodes at each left-arm phase (inner-edge midpoints),
// connected by one calm line that the signet feeds into.
const NODES: Pt[] = LEFT.map((t) => [
  (t.pts[1][0] + t.pts[2][0]) / 2,
  (t.pts[1][1] + t.pts[2][1]) / 2,
]);
const PI = NODES[0];
const SRA = NODES[1];
const SAD = NODES[4];
// pi → (rounded corner at sra) → straight diagonal down through ucd/rs → sad
const THREAD = `M ${PI[0]} ${PI[1]} L ${SRA[0] - 8} ${SRA[1]} Q ${SRA[0]} ${SRA[1]} ${SRA[0] + 9} ${SRA[1] + 12} L ${SAD[0]} ${SAD[1]}`;
// short feed from the signet into the thread
const FEED = `M ${SRA[0]} ${SRA[1]} Q ${(SRA[0] + SIGNET[0]) / 2} ${SRA[1] + 2} ${SIGNET[0] - 26} ${SIGNET[1] + 2}`;

/**
 * Cubic-bezier arc from a left-arm node → Agentic AI signet.
 * Routes through y=8 (above all tiles) via the far-left of the diagram,
 * so the in-tile portion is hidden by tile polygons (rendered on top)
 * and only the clean outer arc + top sweep + notch descent are visible.
 */
const convPath = ([nx, ny]: Pt): string => {
  const arcY = 8;                          // above tile row (tiles start y=40)
  const cp1x = Math.max(15, nx * 0.28);   // pull hard left, proportional to x
  const cp2x = SIGNET[0] - 80;            // approach signet from upper-left
  return `M ${nx} ${ny} C ${cp1x} ${arcY} ${cp2x} ${arcY} ${SIGNET[0]} ${SIGNET[1]}`;
};

export default function VModelFunnel() {
  const [hovered, setHovered] = useState<string | null>(null);
  const activeTile = TILES.find((t) => t.id === hovered) ?? null;
  const [acx, acy] = activeTile ? centroid(activeTile.pts) : [0, 0];
  // place caption above the tile, but below it for the very top rows
  const above = acy > 150;

  return (
    <div className="relative w-full select-none">
      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full h-auto" role="img" aria-label="Interaktives V-Modell des Entwicklungszyklus mit agentischer KI">
        <defs>
          <filter id="vm-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <filter id="pkt-glow" x="-250%" y="-250%" width="600%" height="600%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Convergence paths: each left-arm node → Agentic AI signet */}
          {NODES.map((node, i) => (
            <path key={i} id={`vm-path-${i}`} d={convPath(node)} />
          ))}
          <style>{`
            @keyframes vm-flow { to { stroke-dashoffset: -14; } }
          `}</style>
        </defs>

        {/* Path lines — rendered UNDER tiles so in-tile portions are hidden */}
        <g style={{ pointerEvents: "none" }}>
          {NODES.map(([nx, ny], i) => {
            const d = convPath([nx, ny]);
            return (
              <g key={`pathline-${i}`}>
                <path d={d} fill="none" stroke="#22d3ee" strokeWidth="12" opacity="0.06" filter="url(#vm-glow)" strokeLinecap="round" />
                <path d={d} fill="none" stroke="#22d3ee" strokeWidth="4" opacity="0.16" filter="url(#vm-glow)" strokeLinecap="round" />
                <path d={d} fill="none" stroke="#22d3ee" strokeWidth="1.7" strokeDasharray="8 6" strokeLinecap="round" opacity="0.72"
                  style={{ animation: "vm-flow 1.0s linear infinite" }} />
              </g>
            );
          })}
        </g>

        {/* Tiles — hovered one is rendered last so it sits on top */}
        {[...TILES.filter((t) => t.id !== hovered), ...TILES.filter((t) => t.id === hovered)].map((t) => {
          const [cx, cy] = centroid(t.pts);
          const isHover = t.id === hovered;
          const scale = isHover ? 1.06 : 1;
          return (
            <g
              key={t.id}
              transform={`translate(${cx} ${cy}) scale(${scale}) translate(${-cx} ${-cy})`}
              style={{
                transition: "transform .25s ease",
                cursor: "pointer",
                filter: isHover ? "drop-shadow(0 8px 16px rgba(15,41,66,.35))" : "none",
              }}
              onMouseEnter={() => setHovered(t.id)}
              onMouseLeave={() => setHovered((h) => (h === t.id ? null : h))}
            >
              <polygon
                points={toStr(t.pts)}
                fill={isHover ? t.fillHi : t.fill}
                stroke={isHover ? "#22d3ee" : "rgba(255,255,255,.85)"}
                strokeWidth={isHover ? 2.5 : 1.5}
                style={{ transition: "fill .2s ease, stroke .2s ease" }}
              />
              {t.lines.map((ln, i) => {
                const lineCount = t.lines.length + (t.sub ? 1 : 0);
                const startY = cy - ((lineCount - 1) * 17) / 2 + 5;
                return (
                  <text
                    key={i}
                    x={cx}
                    y={startY + i * 17}
                    textAnchor="middle"
                    fill={t.text}
                    fontSize="15"
                    fontWeight="600"
                    fontFamily="var(--font-sans, system-ui, sans-serif)"
                  >
                    {ln}
                  </text>
                );
              })}
              {t.sub && (
                <text
                  x={cx}
                  y={cy - ((t.lines.length + 1 - 1) * 17) / 2 + 5 + t.lines.length * 17}
                  textAnchor="middle"
                  fill={t.text}
                  fontSize="11"
                  opacity="0.8"
                  fontFamily="var(--font-sans, system-ui, sans-serif)"
                >
                  {t.sub}
                </text>
              )}
            </g>
          );
        })}

        {/* Dots + nodes + signet glow — rendered OVER tiles */}
        <g style={{ pointerEvents: "none" }}>
          {/* Convergence pulse at signet */}
          <circle cx={SIGNET[0]} cy={SIGNET[1]} r="14" fill="#22d3ee" opacity="0">
            <animate attributeName="r" values="10;32" dur="2.0s" repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1" keyTimes="0;1" />
            <animate attributeName="opacity" values="0.14;0" dur="2.0s" repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1" keyTimes="0;1" />
          </circle>

          {/* Traveling data-packet dots — follow full arc path */}
          {NODES.map(([, ], i) => (
            <circle key={`dot-${i}`} r="3.4" fill="#22d3ee" filter="url(#pkt-glow)">
              <animateMotion dur="2.2s" begin={`${i * 0.44}s`} repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
                <mpath href={`#vm-path-${i}`} />
              </animateMotion>
              <animate attributeName="opacity" values="0;0.95;0.95;0" keyTimes="0;0.08;0.88;1" dur="2.2s" begin={`${i * 0.44}s`} repeatCount="indefinite" />
            </circle>
          ))}

          {/* Node ping rings + glowing cores */}
          {NODES.map(([x, y], i) => (
            <g key={`node-${i}`}>
              <circle cx={x} cy={y} r="5" fill="none" stroke="#22d3ee" strokeWidth="1">
                <animate attributeName="r" values="5;26" dur="2.6s" begin={`${i * 0.52}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1" keyTimes="0;1" />
                <animate attributeName="opacity" values="0.6;0" dur="2.6s" begin={`${i * 0.52}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1" keyTimes="0;1" />
                <animate attributeName="stroke-width" values="1.5;0.3" dur="2.6s" begin={`${i * 0.52}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1" keyTimes="0;1" />
              </circle>
              <circle cx={x} cy={y} r="5" fill="none" stroke="#22d3ee" strokeWidth="1.5">
                <animate attributeName="r" values="5;14" dur="1.8s" begin={`${i * 0.52 + 0.35}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1" keyTimes="0;1" />
                <animate attributeName="opacity" values="0.55;0" dur="1.8s" begin={`${i * 0.52 + 0.35}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.3 0 0.7 1" keyTimes="0;1" />
              </circle>
              <circle cx={x} cy={y} r="10" fill="#22d3ee" opacity="0.28" filter="url(#vm-glow)" />
              <circle cx={x} cy={y} r="5" fill="#22d3ee" />
              <circle cx={x} cy={y} r="2" fill="#ffffff" />
            </g>
          ))}
        </g>

        {/* Central brand V-signet + Agentic AI label — kept inside the open notch */}
        <image href="/images/v-signet-transparent.png" x={SIGNET[0] - 28} y={SIGNET[1] - 28} width="56" height="56" />
        <text x={SIGNET[0] + 38} y={SIGNET[1] + 8} fontSize="25" fontStyle="italic" fontWeight="800" fontFamily="var(--font-display, system-ui, sans-serif)">
          <tspan fill={NAVY}>Agentic </tspan>
          <tspan fill={BLUE}>AI</tspan>
        </text>
      </svg>

      {/* Hover detail caption (HTML overlay, positioned at the active tile) */}
      {activeTile && (
        <div
          className="pointer-events-none absolute z-20 w-[230px] rounded-xl border border-brand-navy/10 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm transition-opacity duration-200"
          style={{
            left: `${(acx / VB_W) * 100}%`,
            top: `${(acy / VB_H) * 100}%`,
            transform: `translate(-50%, ${above ? "calc(-100% - 14px)" : "14px"})`,
          }}
        >
          <p className="font-display text-sm font-bold text-brand-navy leading-snug m-0">
            {activeTile.lines.join(" ")}
            {activeTile.sub ? ` · ${activeTile.sub}` : ""}
          </p>
          <p className="font-sans text-xs text-brand-navy/60 leading-relaxed mt-1 mb-0">
            {activeTile.detail}
          </p>
        </div>
      )}
    </div>
  );
}
