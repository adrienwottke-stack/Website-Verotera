"use client";

import { useState } from "react";
import { useLang } from "@/components/LangProvider";

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

// English hover captions (tile titles are already English); "Testphase" also
// gets an English label.
const EN_OVERRIDES: Record<string, { detail: string; lines?: string[] }> = {
  pi: { detail: "AI-assisted ideation and innovation screening at project start." },
  sra: { detail: "Automated extraction and validation of system requirements." },
  ucd: { detail: "Use cases incl. safety & security goals, derived model-based." },
  rs: { detail: "Complete, conflict-free specification via an engineering knowledge graph." },
  sad: { detail: "Topology and architecture exploration with AI design agents." },
  eol: { detail: "Sustainable end-of-life: recycling and re-use strategy." },
  om: { detail: "Predictive maintenance across the entire operating life." },
  pq: { detail: "Performance and reliability qualification per AEC-Q / IEC." },
  vv: { detail: "Verification & validation against the specification — 100% coverage." },
  testphase: { lines: ["Test Phase"], detail: "Double-pulse and load tests pre-qualified virtually." },
  she: { detail: "Co-design of software and hardware in one continuous flow." },
  md: { detail: "Mechanical and thermal design optimized parametrically." },
  ir: { detail: "Integration and release with automated qualification." },
};

// Signet sits in the widest (top) part of the central notch so the
// "Agentic AI" lockup never overlaps the surrounding tiles.
const SIGNET: Pt = [476, 74];

// Phase connection nodes:
//   N0 (PI): midpoint of top edge (pts[0]↔pts[1]) — arc arrives from above
//   N1–N4:   midpoint of inner edge (pts[1]↔pts[2]) — paths arrive from the right
const NODES: Pt[] = LEFT.map((t, i) => i === 0
  ? [(t.pts[0][0] + t.pts[1][0]) / 2, t.pts[0][1]] as Pt
  : [(t.pts[1][0] + t.pts[2][0]) / 2, (t.pts[1][1] + t.pts[2][1]) / 2] as Pt
);

const Sx = SIGNET[0];
const Sy = SIGNET[1];

/* N0 (Product Innovation): wide arc that sweeps above all tiles then lands at the
 * tile centre. Control points sit at y = -44 (above the viewBox top row) so the
 * arc floats clearly over the diagram — requires the expanded viewBox below. */
const [n0x, n0y] = NODES[0];
const N0_PATH = `M ${n0x.toFixed(1)} ${n0y.toFixed(1)} C ${(n0x + 90).toFixed(1)} -44 ${(Sx - 90).toFixed(1)} -44 ${Sx} ${Sy}`;

/* N1–N4: gentle inward-curved cubic bezier from each tile centroid → signet.
 * Paths are rendered before tiles, so the in-tile segment is auto-hidden. */
const convPath = ([nx, ny]: Pt): string => {
  const dx = Sx - nx, dy = Sy - ny;
  const dist = Math.hypot(dx, dy);
  const px = -dy / dist, py = dx / dist; // perpendicular toward open notch
  const bend = Math.min(26, dist * 0.10);
  const cp1x = nx + dx * 0.33 + px * bend;
  const cp1y = ny + dy * 0.33 + py * bend;
  const cp2x = Sx - dx * 0.33 + px * bend;
  const cp2y = Sy - dy * 0.33 + py * bend;
  return `M ${nx.toFixed(1)} ${ny.toFixed(1)} C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)} ${cp2x.toFixed(1)} ${cp2y.toFixed(1)} ${Sx} ${Sy}`;
};

const ALL_PATHS = [N0_PATH, ...NODES.slice(1).map(convPath)];

export default function VModelFunnel() {
  const lang = useLang();
  const tiles =
    lang === "en" ? TILES.map((t) => ({ ...t, ...EN_OVERRIDES[t.id] })) : TILES;
  const [hovered, setHovered] = useState<string | null>(null);
  const activeTile = tiles.find((t) => t.id === hovered) ?? null;
  const [acx, acy] = activeTile ? centroid(activeTile.pts) : [0, 0];
  // place caption above the tile, but below it for the very top rows
  const above = acy > 150;

  return (
    <div className="relative w-full select-none">
      <svg
        viewBox={`0 -50 ${VB_W} ${VB_H + 50}`}
        className="w-full h-auto"
        role="img"
        aria-label={
          lang === "en"
            ? "Interactive V-model of the development cycle with agentic AI"
            : "Interaktives V-Modell des Entwicklungszyklus mit agentischer KI"
        }
      >
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
          {/* Individual paths: each left-arm tile centre → Agentic AI signet */}
          {ALL_PATHS.map((d, i) => (
            <path key={i} id={`vm-path-${i}`} d={d} />
          ))}
          <style>{`
            @keyframes vm-flow { to { stroke-dashoffset: -14; } }
          `}</style>
        </defs>

        {/* Individual glowing paths — rendered BEFORE tiles so in-tile portions tuck cleanly under */}
        <g style={{ pointerEvents: "none" }}>
          {ALL_PATHS.map((d, i) => (
            <g key={`pathline-${i}`}>
              <path d={d} fill="none" stroke="#22d3ee" strokeWidth="12" opacity="0.06" filter="url(#vm-glow)" strokeLinecap="round" />
              <path d={d} fill="none" stroke="#22d3ee" strokeWidth="4" opacity="0.16" filter="url(#vm-glow)" strokeLinecap="round" />
              <path d={d} fill="none" stroke="#22d3ee" strokeWidth="1.7" strokeDasharray="8 6" strokeLinecap="round" opacity="0.72"
                style={{ animation: "vm-flow 1.0s linear infinite" }} />
            </g>
          ))}
        </g>

        {/* Tiles — hovered one is rendered last so it sits on top */}
        {[...tiles.filter((t) => t.id !== hovered), ...tiles.filter((t) => t.id === hovered)].map((t) => {
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
              <animateMotion dur="2.2s" begin={`${i * 0.44}s`} repeatCount="indefinite" keyPoints="1;0" keyTimes="0;1" calcMode="linear">
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
          className="pointer-events-none absolute z-20 w-[230px] rounded-xl border border-brand-navy/10 bg-white px-4 py-3 shadow-lg transition-opacity duration-200"
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
