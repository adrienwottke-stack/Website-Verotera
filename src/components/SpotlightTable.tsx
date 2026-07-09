"use client";

import { useState } from "react";
import { Thermometer, Zap, Gauge, Coins } from "lucide-react";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type ColId = "si" | "sic" | "gan";

type Row = {
  id: string;
  metric: string;
  values: Record<ColId, string>;
};

const COLS: Record<Lang, { id: ColId; label: string; sub: string }[]> = {
  de: [
    { id: "si", label: "Silizium (Si)", sub: "Referenz" },
    { id: "sic", label: "Siliziumkarbid (SiC)", sub: "Wide-Bandgap" },
    { id: "gan", label: "Galliumnitrid (GaN)", sub: "Wide-Bandgap" },
  ],
  en: [
    { id: "si", label: "Silicon (Si)", sub: "Reference" },
    { id: "sic", label: "Silicon Carbide (SiC)", sub: "Wide bandgap" },
    { id: "gan", label: "Gallium Nitride (GaN)", sub: "Wide bandgap" },
  ],
};

const ROWS: Record<Lang, Row[]> = {
  de: [
    { id: "bandgap", metric: "Bandgap", values: { si: "1,1 eV", sic: "3,3 eV", gan: "3,4 eV" } },
    { id: "field", metric: "Kritische Feldstärke", values: { si: "0,3 MV/cm", sic: "~3,0 MV/cm", gan: "~3,3 MV/cm" } },
    { id: "mobility", metric: "Elektronenmobilität", values: { si: "~1.400 cm²/Vs", sic: "~950 cm²/Vs", gan: "~2.000 cm²/Vs" } },
    { id: "qrr", metric: "Reverse Recovery (QRR)", values: { si: "Hoch", sic: "Niedrig", gan: "Null" } },
    { id: "thermal", metric: "Wärmeleitfähigkeit", values: { si: "1,5 W/cmK", sic: "4,9 W/cmK", gan: "1,5 W/cmK" } },
    { id: "voltage", metric: "Max. Spannung (komm.)", values: { si: "~900 V", sic: "bis 3,3 kV", gan: "650 V (1,2 kV)" } },
    { id: "tj", metric: "Max. Sperrschichttemp. Tj", values: { si: "~150 °C", sic: "175 °C (→200)", gan: "bis ~200 °C" } },
    { id: "cost", metric: "Substratkosten", values: { si: "~$0,1/cm²", sic: "~$7/cm²", gan: "~$1/cm² (on-Si)" } },
  ],
  en: [
    { id: "bandgap", metric: "Bandgap", values: { si: "1.1 eV", sic: "3.3 eV", gan: "3.4 eV" } },
    { id: "field", metric: "Critical field strength", values: { si: "0.3 MV/cm", sic: "~3.0 MV/cm", gan: "~3.3 MV/cm" } },
    { id: "mobility", metric: "Electron mobility", values: { si: "~1,400 cm²/Vs", sic: "~950 cm²/Vs", gan: "~2,000 cm²/Vs" } },
    { id: "qrr", metric: "Reverse recovery (QRR)", values: { si: "High", sic: "Low", gan: "Zero" } },
    { id: "thermal", metric: "Thermal conductivity", values: { si: "1.5 W/cmK", sic: "4.9 W/cmK", gan: "1.5 W/cmK" } },
    { id: "voltage", metric: "Max. voltage (comm.)", values: { si: "~900 V", sic: "up to 3.3 kV", gan: "650 V (1.2 kV)" } },
    { id: "tj", metric: "Max. junction temp. Tj", values: { si: "~150 °C", sic: "175 °C (→200)", gan: "up to ~200 °C" } },
    { id: "cost", metric: "Substrate cost", values: { si: "~$0.1/cm²", sic: "~$7/cm²", gan: "~$1/cm² (on-Si)" } },
  ],
};

type Query = {
  id: string;
  label: string;
  icon: typeof Zap;
  rows: string[];
  winner: ColId;
};

const QUERIES: Record<Lang, Query[]> = {
  de: [
    { id: "temp", label: "Hochtemperatur-Leistung", icon: Thermometer, rows: ["tj", "thermal"], winner: "sic" },
    { id: "switching", label: "Hohe Schaltfrequenz", icon: Zap, rows: ["qrr", "field", "mobility"], winner: "gan" },
    { id: "voltage", label: "Hochspannung", icon: Gauge, rows: ["voltage", "field"], winner: "sic" },
    { id: "cost", label: "Kosteneffizienz", icon: Coins, rows: ["cost"], winner: "si" },
  ],
  en: [
    { id: "temp", label: "High-temperature performance", icon: Thermometer, rows: ["tj", "thermal"], winner: "sic" },
    { id: "switching", label: "High switching frequency", icon: Zap, rows: ["qrr", "field", "mobility"], winner: "gan" },
    { id: "voltage", label: "High voltage", icon: Gauge, rows: ["voltage", "field"], winner: "sic" },
    { id: "cost", label: "Cost efficiency", icon: Coins, rows: ["cost"], winner: "si" },
  ],
};

const UI: Record<Lang, { eyebrow: string; hint: string; highlighted: string; strongest: string }> = {
  de: {
    eyebrow: "Interaktive Parametermatrix",
    hint: "Wählen Sie eine Anforderung, um die relevanten Parameter und die jeweils stärkste Technologie hervorzuheben.",
    highlighted: "Hervorgehoben: stärkste Technologie für",
    strongest: "",
  },
  en: {
    eyebrow: "Interactive Parameter Matrix",
    hint: "Select a requirement to highlight the relevant parameters and the strongest technology for it.",
    highlighted: "Highlighted: strongest technology for",
    strongest: "",
  },
};

export default function SpotlightTable() {
  const lang = useLang();
  const cols = COLS[lang];
  const rows = ROWS[lang];
  const queries = QUERIES[lang];
  const ui = UI[lang];
  const [activeQuery, setActiveQuery] = useState<string | null>(null);
  const query = queries.find((q) => q.id === activeQuery) ?? null;

  const isRowHighlighted = (rowId: string) => (query ? query.rows.includes(rowId) : false);
  const isWinnerCell = (rowId: string, col: ColId) =>
    query ? query.rows.includes(rowId) && query.winner === col : false;

  return (
    <div className="rounded-3xl border border-brand-navy/8 bg-surface-light p-6 sm:p-10">
      <div className="mb-6 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-2 block">
          {ui.eyebrow}
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-navy">
          Si vs. SiC vs. GaN
        </h3>
        <p className="text-sm text-brand-navy/55 mt-2">
          {ui.hint}
        </p>
      </div>

      {/* Query toggles */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {queries.map((q) => {
          const active = q.id === activeQuery;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setActiveQuery(active ? null : q.id)}
              aria-pressed={active}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 ${
                active
                  ? "bg-brand-cyan text-brand-navy border-brand-cyan shadow-sm"
                  : "bg-white text-brand-navy/70 border-brand-navy/15 hover:border-brand-cyan/40 hover:text-brand-navy"
              }`}
            >
              <q.icon className="w-3.5 h-3.5" />
              {q.label}
            </button>
          );
        })}
      </div>

      {/* Matrix */}
      <div className="overflow-x-auto rounded-2xl border border-brand-navy/8 bg-white">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-surface-light border-b border-brand-navy/8">
              <th className="p-4 font-semibold text-brand-navy uppercase tracking-wider text-xs">Parameter</th>
              {cols.map((c) => (
                <th key={c.id} className="p-4">
                  <span className="block font-display font-bold text-brand-navy">{c.label}</span>
                  <span className="block text-[10px] font-medium uppercase tracking-wider text-brand-navy/40">
                    {c.sub}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-navy/8">
            {rows.map((row) => {
              const rowHi = isRowHighlighted(row.id);
              return (
                <tr
                  key={row.id}
                  className={`transition-colors duration-300 ${rowHi ? "bg-brand-cyan/[0.06]" : ""}`}
                >
                  <td className="p-4 font-medium text-brand-navy">{row.metric}</td>
                  {cols.map((c) => {
                    const winner = isWinnerCell(row.id, c.id);
                    return (
                      <td
                        key={c.id}
                        className={`p-4 transition-colors duration-300 ${
                          winner
                            ? "bg-brand-cyan/20 font-bold text-brand-navy"
                            : rowHi
                              ? "text-brand-navy/80"
                              : "text-brand-navy/60"
                        }`}
                      >
                        {row.values[c.id]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {query && (
        <p className="mt-4 text-center text-xs text-brand-navy/55">
          {ui.highlighted}{" "}
          <span className="font-semibold text-brand-navy">{query.label}</span>.
        </p>
      )}
    </div>
  );
}
