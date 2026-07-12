# VEROTERA — Subpage-Skelett v2.0 (Landing-Page-Idiom)

**Zweck:** Content (z. B. aus einer PowerPoint) in ein festes visuelles Skelett gießen.
Der Content-Input bestimmt **Reihenfolge und Inhalt** der Sektionen — dieses Dokument bestimmt
**ausnahmslos** Schriften, Größen, Farben, Abstände, Anordnung und Stil.

Quelle: Destillat der Landing Page (`src/app/[lang]/page.tsx` + Komponenten), Stand 2026-07.
Dieses Dokument ist die **maßgebliche Vorlage**; `DESIGN.md` (v2.0) ergänzt nur Minimal-Seiten
(Legal) und den Umgang mit Bestandsseiten im alten v1-Stil.

---

## 0. Workflow: Content-Input → Seite (für ein frisches Kontextfenster)

1. **Content-Input lesen** (PPTX/Markdown/Stichpunkte). Jede Folie / jeder Block = eine Sektion,
   in exakt der gelieferten Reihenfolge. Nichts umsortieren, nichts weglassen, nichts dazuerfinden.
2. **Pro Block das passende Pattern wählen** (Mapping-Tabelle in §7). Der Input liefert den Text,
   das Pattern liefert das Markup.
3. **Seite bauen** unter `src/app/[lang]/<route>/page.tsx` nach dem Seitenrahmen in §1
   (Server Component, `COPY: Record<Lang, …>` mit `de` + `en`, `META` + `buildMetadata`).
4. **Immer beide Sprachen** (de/en) füllen. Fehlt die Übersetzung im Input → selbst sauber übersetzen.
5. **Bilder:** vorhandene aus `public/images/` verwenden, wenn thematisch passend. Neue Bilder immer
   unter **neuem Dateinamen** ablegen (nie bestehende überschreiben — Browser-Cache).
6. **Verifizieren:** `npx tsc --noEmit`. Keinen zweiten Dev-Server starten (Port 3001 ist hart
   verdrahtet, geteilter `.next`-Ordner) — der Nutzer prüft in seiner laufenden Live-Ansicht.
7. Ggf. Link in `Header.tsx`-Navigation / Footer / `site-map` ergänzen, wenn die Seite neu ist.

---

## 1. Seitenrahmen (Pflicht-Boilerplate)

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { /* lucide-Icons */ } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import BrandWatermark from "@/components/BrandWatermark";
import ContactSection from "@/components/ContactSection";
import { hasLang, localePath, type Lang } from "@/lib/i18n";
import { buildMetadata, type PageMeta } from "@/lib/seo";

const COPY: Record<Lang, { /* alle Texte der Seite */ }> = { de: {…}, en: {…} };
const META: Record<Lang, PageMeta> = { de: {…}, en: {…} };

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = hasLang(lang) ? lang : "de";
  return buildMetadata(l, "/<route>", META[l]);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang: Lang = hasLang(rawLang) ? rawLang : "de";
  const t = COPY[lang];

  return (
    <div className="flex flex-col min-h-screen bg-white text-brand-navy antialiased">
      <Header />
      <main className="flex-grow">
        <PageHero eyebrow={t.heroEyebrow} icon={IconName} title={t.heroTitle} subtitle={t.heroSubtitle} width="wide" />
        {/* … Sektionen in Content-Reihenfolge … */}
      </main>
      <Footer />
    </div>
  );
}
```

- Interaktives (Hover-State, Framer Motion, Flip-Cards) in eine eigene `"use client"`-Komponente
  auslagern; die Page selbst bleibt Server Component. Client-Komponenten holen die Sprache via
  `useLang()` aus `@/components/LangProvider`.
- Interne Links immer `localePath(lang, "/pfad")`.
- **Jede Seite endet mit CTA:** `<ContactSection />` (Standard) oder CTA-Block (Pattern H).

---

## 2. Design-Tokens

### Farben (definiert in `src/app/globals.css` `@theme` — keine Freestyle-Hexcodes!)

| Token | Hex | Verwendung |
|---|---|---|
| `brand-navy` | `#234554` | Headlines, Fließtext-Basis, dunkle Sektionen/Panels |
| `brand-cyan` | `#10A6E2` | Eyebrows/Teaser, Icons, Stats, Checks, Links/Hover, CTA-Akzent |
| `brand-blue` | `#2e86c1` | Zweit-Akzent für Stats, Watermark-Tint "blue", Orbs |
| `brand-emerald` | `#10b981` | Erfolgs-/Check-Akzente (sparsam) |
| `brand-navy-light` | `#2d5a6e` | Bildflächen auf Navy-Sektionen |
| `surface-light` | `#edf2f8` | PageHero, Kontrast-Sektionen, Bild-Platzhalterflächen |
| `#020617` | slate-950 | Nur: Bild-Overlay-Gradients + Text auf Cyan-Buttons |

Text-Opazitäten auf Weiß: Headline `text-brand-navy` · Body `text-brand-navy/60`–`/70` ·
Card-Beschreibung `/60`–`/65` · Meta/Quelle `/40`–`/55` · Labels `/50`.
Auf Navy: Headline `text-white` · Body `text-white/70`–`/80` · Meta `text-white/50`.
Borders hell: `border-brand-navy/8` (Standard) · `/15` (Inputs). Auf Navy: `border-white/10`.

### Schriften (geladen in `src/app/[lang]/layout.tsx`)

- `font-display` = **Work Sans** (300–800) → alle Headlines, Stats/Zahlen, Buttons
- `font-sans` = **Inter** (300–700) → Body, Labels, Meta, alles andere

---

## 3. Typografie-Rezepte (exakte Klassen — 1:1 übernehmen)

| Element | Klassen |
|---|---|
| **H1** (nur PageHero) | `font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy leading-tight` |
| **Teaser/Eyebrow** (über jedem H2; kurzes Label ODER ganzer Teaser-Satz) | `text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block` |
| **H2** (Sektions-Headline) | `font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight` (+ `mb-6` wenn Body folgt) |
| **Body/Lead** (unter H2) | `font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto` |
| **Closing-Satz** (fettes Fazit im Header-Block) | `font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed max-w-3xl mx-auto` |
| **Großes Fazit** (eigene Zeile am Sektionsende) | `font-display text-2xl sm:text-3xl font-bold text-brand-navy text-center max-w-4xl mx-auto leading-snug` |
| **H3** (Panel-/Split-Titel) | `font-display text-2xl sm:text-3xl font-bold text-brand-navy leading-tight` |
| **H3 klein** (Card-Titel) | `font-display text-base font-bold text-brand-navy leading-tight` (in großen Cards `text-lg`) |
| **Sub-Eyebrow** (in Split-Text, gedeckt) | `text-xs font-bold uppercase tracking-wider text-brand-navy/40` |
| **Absatz** (Split-/Card-Fließtext) | `font-sans text-sm sm:text-base text-brand-navy/70 leading-relaxed` |
| **Card-Beschreibung** | `font-sans text-sm text-brand-navy/60 leading-relaxed` |
| **Meta/Quelle** | `font-sans text-sm text-brand-navy/40` bzw. `text-xs text-brand-navy/55` |
| **Subtag** (Mini-Label in Cards) | `text-[9px] font-bold text-brand-navy tracking-wider uppercase` |
| **Mega-Stat** (eine Riesenzahl) | `font-display text-7xl sm:text-8xl font-extrabold text-brand-cyan leading-none` |
| **Stat groß** (KPI-Reihe) | `font-display text-5xl sm:text-6xl font-extrabold text-brand-blue` (Alternative: `text-brand-cyan`) |
| **Stat mittel** (Counter/Spalten) | `font-display text-4xl sm:text-5xl font-extrabold text-brand-cyan` (Counter-Variante: `text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue`) |

**Pro Sektion genau EIN Stat-Akzent-Farbton** (cyan ODER blue ODER Gradient), nicht mischen.

---

## 4. Sektions-Anatomie

### Wrapper (jede Sektion)

```tsx
<section className="relative py-24 sm:py-32 bg-white overflow-hidden">
  {/* optional: BrandWatermark + Orb, siehe §5 */}
  <div className="max-w-7xl mx-auto px-6 relative z-10">…</div>
</section>
```

- **Weiße Basis.** Der Rhythmus entsteht durch Watermarks/Orbs und Navy-Akzent-Sektionen —
  nicht durch Grau-Wechsel. `bg-surface-light` nur für: PageHero, ContactSection, max. eine
  Kontrast-Sektion pro Seite (dann `border-y border-brand-navy/8`).
- **Navy-Emphasis-Sektion** (max. 1× pro Seite, für den wichtigsten Block):
  `relative py-20 sm:py-28 bg-brand-navy overflow-hidden` + weiße Watermark (`tint="light"`, opacity 0.06).
- Padding-Standard `py-24 sm:py-32`; dichte Folgesektionen/Navy `py-20 sm:py-28`; Schluss-CTA `py-16`.
- Container: `max-w-7xl mx-auto px-6` (Standard) · `max-w-5xl` (reiner Lesetext) ·
  `max-w-4xl` (zentrierter Statement-/Kontakt-Content) · `max-w-3xl` (Schluss-CTA).

### Sektions-Header — das Teaser→Headline→Body-Schema (Pflicht für jede Sektion)

```tsx
<Reveal className="text-center max-w-4xl mx-auto mb-14 sm:mb-16">
  <span className="text-xs font-bold uppercase tracking-widest text-brand-cyan mb-4 block">{t.eyebrow}</span>
  <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy leading-tight mb-6">{t.headline}</h2>
  <p className="font-sans text-base sm:text-lg text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">{t.body}</p>
  {/* optional: */}
  <p className="font-sans text-base sm:text-lg font-semibold text-brand-navy leading-relaxed max-w-3xl mx-auto mt-6">{t.closing}</p>
</Reveal>
```

Ohne Body: `mb-6` am H2 weglassen. Der Teaser darf ein ganzer Satz sein
(„Die Welt wird elektrisch – mit beispielloser Geschwindigkeit.").

---

## 5. Wiederkehrende Bausteine

### Dekoration (Sektionshintergrund; sparsam, max. 1 Watermark + 1 Orb pro Sektion)

```tsx
<BrandWatermark position="top-right" tint="blue" size={460} opacity={0.05} />
// tints: "navy" | "blue" (helle Sektionen, opacity 0.045–0.05), "light" (Navy-Sektionen, 0.06)
// Ecken über die Seite hinweg abwechseln: top-right → bottom-left → top-right …

<div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-cyan/[0.07] rounded-full blur-[110px] pointer-events-none" />
// Varianten: bg-brand-blue/[0.05], blur-[110px]–[140px], Größe 420–480px
```

### Card (Standard-Karte, ersetzt `.glass-panel` auf neuen Seiten)

```tsx
<div className="p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm">…</div>
// klickbar/interaktiv zusätzlich:
// "group transition-all duration-300 hover:border-brand-cyan/40 hover:shadow-[0_4px_24px_rgba(16,166,226,0.12)] hover:-translate-y-0.5"
```

### Icon-Chip (vor Card-Titeln; Icons ausschließlich lucide-react, w-3.5/w-4/w-5)

```tsx
<div className="p-2.5 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan">
  <Icon className="w-5 h-5" />
</div>
```

### Bild (immer Next `<Image fill>` in gerahmtem Container)

```tsx
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-navy/8 bg-surface-light shadow-sm">
  <Image src="/images/…" alt={t.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
</div>
// Radius: rounded-xl (kleine Kacheln) · rounded-2xl (Standard) · rounded-3xl (große Panels)
// Freigestellte Grafiken: object-contain + p-6 im Container, aspect-[16/10]
```

### Checkliste

```tsx
<li className="flex items-start gap-2.5">
  <Check className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
  <span className="font-sans text-sm text-brand-navy/70">{item}</span>
</li>
// Auf Navy: CheckCircle2 + text-white/80. Grid: grid sm:grid-cols-2 gap-3 (oder space-y-3 einspaltig)
```

### Buttons

```tsx
// Primär auf hell:
<Link href={localePath(lang, "/contacts")} className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-brand-navy text-white font-semibold text-sm hover:bg-brand-navy/90 transition-colors">{label} <ArrowRight className="w-4 h-4" /></Link>
// Primär auf Navy-Sektion:
className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-brand-cyan text-white font-semibold text-sm hover:bg-brand-cyan/90 transition-all"
```

### Motion (nur diese zwei Idiome)

- `<Reveal delay={i * 0.12}>` um jeden Header-Block und jede Card — Stagger-Schritt **0.12 s**
  (dichte Grids: 0.05–0.1). Reveal = fade + rise (y 24, 0.6 s, once).
- Card-Pop (Client-Komponente): `initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true, margin:"-50px"}} transition={{duration:0.5, delay:i*0.12}}`.
- **Kein `AnimatePresence`/exit** — Exit-Animationen feuern in diesem React-19-Build nicht.
  Zustandswechsel per CSS-Crossfade (opacity) oder gekeyten `motion.div`s lösen.

---

## 6. Pattern-Katalog (Content wird in genau diese Formen gegossen)

Jedes Pattern beginnt mit dem Sektions-Wrapper (§4) und — außer B0/H — dem Sektions-Header (§4).

**A — Statement** *(Mission/Vision, reine Textbotschaft)*
Nur der Header-Block (Teaser→Headline→Body→Closing), `text-center max-w-4xl`.
Optional darunter Bildleiste: `mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5`,
Kacheln `relative aspect-[4/3] rounded-xl border border-brand-navy/8 bg-surface-light overflow-hidden`.

**B — Split Bild ↔ Text** *(Bild + erklärender Text)*
`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`; Bild `lg:col-span-5` bzw. `-6`
(`min-h-[260px] lg:min-h-[480px] rounded-2xl`), Text `lg:col-span-7` bzw. `-6`:
Sub-Eyebrow → H3 (`font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-6`) → Absätze
(`text-brand-navy/70 text-sm sm:text-base leading-relaxed mb-4`) → optional Checkliste.
Bildseite über die Seite hinweg abwechseln: rechts → links → rechts. Alternativ die fertige
`<SplitFeature image alt imageSide eyebrow title body bullets />`-Komponente (in `space-y-24` stapeln).

**C — Icon-Card-Grid** *(3–4 gleichwertige Punkte/Vorteile)*
`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6` (bei 3: `md:grid-cols-3`).
Card (§5) mit: Kopfzeile `flex items-center gap-3 mb-4` aus Icon-Chip + Card-H3
(hover: `group-hover:text-brand-cyan transition-colors`) → optional Subtag → Beschreibung.
Bei 2×2 mit längeren Texten: `glass-panel glass-panel-hover p-8 flex gap-5 items-start`-Variante.

**D — Stat-Spalten** *(Zahlen mit Kontext, 3–4 Spalten)*
`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8` (bei 3: `md:grid-cols-3 gap-12 sm:gap-16`),
Spalte `flex flex-col items-center text-center`: H3 (`font-display text-base font-semibold leading-snug mb-6 min-h-[3rem]`)
→ Stat mittel/groß → Label (`font-sans text-base text-brand-navy/70`) → Beschreibung.
Optional großes Fazit darunter (`mt-16 sm:mt-20`, Typo §3 „Großes Fazit").

**E — Mega-Stat** *(EINE Kernzahl als Botschaft)*
Zentriert: Teaser → H2 (`mb-10`) → Mega-Stat (`mb-6`) → Stat-Label
(`font-display text-3xl sm:text-4xl font-bold text-brand-navy mb-3`) → Quelle
(`font-sans text-sm text-brand-navy/40 mb-4`) → Body (`max-w-2xl mx-auto`).

**F — Navy-Flip-Cards / dunkle Bild-Kacheln** *(2–4 Themen mit Bild + Zahl, Client-Komponente)*
Desktop `hidden md:grid grid-cols-2 gap-6`, Karte `h-72` mit 3D-Flip (Vorderseite: Bild +
Gradient `from-[#020617]/80 via-[#020617]/25 to-transparent` + weißer `font-display text-2xl sm:text-3xl font-bold`-Titel;
Rückseite: `bg-[#234554]` + Cyan-Streifen `absolute left-0 w-1 bg-brand-cyan` + Stat
`font-display text-5xl font-extrabold text-brand-cyan` + `text-xs text-white/50`-Label + Divider
`w-10 h-px bg-white/20` + Titel/Body weiß). Mobil: Snap-Carousel `flex gap-4 overflow-x-auto snap-x snap-mandatory`, Karten `w-[85vw]`.
Referenz: `src/components/ElectrifiedWorldCards.tsx`.

**G — Navy-Emphasis-Split** *(wichtigster Block der Seite, max. 1×)*
Navy-Wrapper (§4) + Split wie B, aber: Sub-Eyebrow `text-white/50`, H3 `text-white`,
Body `text-white/70`, Checks `CheckCircle2 text-brand-cyan` + `text-white/80`,
Bildrahmen `border-white/10 bg-brand-navy-light rounded-3xl shadow-lg`.
Optional CTA-Bar darunter: `mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6`
mit H3 weiß + Sub `text-white/60` + Cyan-Button.

**H — Schluss-CTA** *(Seitenende, falls nicht `<ContactSection />`)*
`<section className="py-16 bg-white border-t border-brand-navy/8">` →
`max-w-3xl mx-auto px-6 text-center`: H2 (`text-2xl sm:text-3xl mb-4`) → Body
(`text-brand-navy/60 mb-8`) → Navy-Button. (Auf `bg-surface-light` wenn davor Weiß.)

**I — Stats + Spotlight-Card** *(Zahlen + Person/Zitat)*
`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center`. Links (`lg:col-span-6`):
Header linksbündig (ohne `text-center`) + `grid grid-cols-2 gap-8` aus Cards mit Counter
(Gradient-Stat) + Label `text-xs sm:text-sm font-semibold text-brand-navy/50`. Rechts:
Card `max-w-[500px] p-6 sm:p-8 rounded-3xl` mit Akzentlinie
`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-cyan`,
Foto `w-28 h-28 rounded-2xl`, Name/Rolle, Zitat-Block `p-6 rounded-2xl bg-surface-light border border-brand-navy/8`
mit `text-sm text-brand-navy/60 italic`. Referenz: `src/components/StatsSection.tsx`.

**J — Interaktiv/Diagramm** *(Modelle, Charts, Flowcharts)*
Header-Block + Custom-Client-Komponente in `max-w-7xl`. Farblogik: Flächen weiß/surface-light,
Linien `border-brand-navy/8`, aktive Zustände cyan. Referenzen: `VModelInteractive.tsx`, `AgenticEcosystem.tsx`.

---

## 7. Mapping: Content-Input (Folie) → Pattern

| Folien-Inhalt sieht aus wie… | Pattern |
|---|---|
| Titel + Untertitel der Seite (Deckblatt/erste Folie) | **PageHero** (eyebrow = Thema, icon passend, `width="wide"`) |
| Reines Statement / Mission / These, evtl. Bildreihe | **A** |
| Bild/Foto + erklärender Absatz | **B** (Bildseite alternieren) |
| 3–4 gleichgewichtige Punkte/Features/Vorteile | **C** |
| Mehrere Zahlen mit je einer Aussage | **D** |
| Eine dominante Kennzahl („+40 %") | **E** |
| 2–4 Marktsegmente/Themen mit Bild + Zahl | **F** |
| Der zentrale Pitch/USP der Seite | **G** |
| Menschen, Track-Record, Zitat | **I** |
| Prozess/Modell/Architektur-Diagramm | **J** |
| Aufzählung von Leistungen/Deliverables | Checkliste in **B** oder **G** |
| „Kontaktieren Sie uns" / letzte Folie | **`<ContactSection />`** oder **H** |

Faustregeln: Folien-Titel → H2, Folien-Kicker/Obertitel → Teaser, erster Absatz → Body,
fett Markiertes/Fazit → Closing. Lange Folien ggf. in zwei Sektionen teilen (Header-Sektion + Grid-Sektion) — aber Reihenfolge beibehalten.

---

## 8. Verbindliche Regeln (Kurzfassung)

1. Jede Sektion folgt **Teaser → Headline → Body** (§4). Teaser immer cyan, uppercase, tracking-widest.
2. **Weiße Basis**; surface-light nur PageHero/Kontakt/max. 1 Kontrastsektion; Navy max. 1× (Pattern G). Nie zwei gleiche Nicht-Weiß-Hintergründe hintereinander.
3. Nur Tokens aus §2 — keine Freestyle-Farben. Einzige erlaubte Roh-Hexwerte: `#020617` (Overlays/Buttontext), `#234554` als `bg-[#234554]` in Flip-Cards.
4. `font-display` (Work Sans) für Headlines/Stats/Buttons, `font-sans` (Inter) für alles andere. Typo-Rezepte aus §3 exakt übernehmen — keine neuen Größen erfinden.
5. `py-24 sm:py-32` Standard-Sektionspadding; Container `max-w-7xl mx-auto px-6`.
6. `<Reveal>` auf jeden Header-Block und jede Card, Stagger 0.12 s. Kein AnimatePresence-Exit.
7. Bilder immer gerahmt (rounded + `border border-brand-navy/8`), `<Image fill>` mit `sizes`. Neue Bilddateien nie unter bestehendem Namen speichern.
8. Icons nur lucide-react. Icon-Chips nach §5.
9. Jede Seite: `PageHero` am Anfang, `ContactSection`/CTA am Ende, beide Sprachen, `buildMetadata`.
10. Vor Abgabe: `npx tsc --noEmit` grün; keinen zweiten Dev-Server starten.

---

## 9. Referenz-Implementierungen (bei Unklarheit dort nachschlagen)

| Pattern | Datei |
|---|---|
| Seitenrahmen + G + H | `src/app/[lang]/solutions/wbg-power-modules/page.tsx` |
| A (+ Bildleiste) | `src/components/ValueStatement.tsx` |
| Header + B + C | `src/components/WhyVerotera.tsx`, `src/components/WbgModuleSolutions.tsx` |
| D | `src/components/AdvancedPackaging.tsx`, `src/components/EfficiencyDemand.tsx` |
| E | `src/components/ElectrifiedWorld.tsx` |
| F | `src/components/ElectrifiedWorldCards.tsx` |
| I | `src/components/StatsSection.tsx` |
| Kontakt-Schluss | `src/components/ContactSection.tsx` |
| Hero/Watermark/Reveal/Split | `PageHero.tsx`, `BrandWatermark.tsx`, `Reveal.tsx`, `SplitFeature.tsx` |
