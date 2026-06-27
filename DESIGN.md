# VEROTERA — Design Guideline v1.0

Verbindliche Struktur-, Typografie-, Farb- und Layout-Regeln für alle Subpages.  
**Gilt für jede neue Seite ohne Ausnahme.**

---

## 1. Seitenstruktur (Template)

Jede Subpage folgt exakt diesem vertikalen Aufbau:

```
<Header />                        — sticky, bg-navy, immer
<PageHero />                      — Eyebrow + H1 + Subtitle, bg-surface-light
Sektion A: Highlights/Karten      — bg-white, py-16 sm:py-20
Sektion B: Visualisierung/Detail  — bg-surface-light border-y, py-16 sm:py-20
Sektion C: SplitFeature (Bild↔Text) — bg-white, py-20 sm:py-28
Sektion D: CTA-Block              — bg-surface-light border-t, py-16
<Footer />                        — bg-navy, immer
```

**Minimale Seite** (z.B. Legal): Header → PageHero → Fließtext → Footer  
**Erweiterbar**: Weitere Sektionen immer im Wechsel white ↔ surface-light einbauen.

---

## 2. Hintergrundwechsel (Pflicht)

| Reihenfolge | Klasse | Border |
|-------------|--------|--------|
| PageHero | `bg-surface-light` | `border-b border-brand-navy/8` |
| Sektion A | `bg-white` | — |
| Sektion B | `bg-surface-light` | `border-y border-brand-navy/8` |
| Sektion C | `bg-white` | — |
| Sektion D (CTA) | `bg-surface-light` | `border-t border-brand-navy/8` |

**Regel: Nie zwei gleiche Hintergründe hintereinander.**

---

## 3. Farben

| Token | Hex | Verwendung |
|-------|-----|-----------|
| `text-brand-navy` | #234554 | Alle Headlines, Labels |
| `text-brand-navy/65` | #234554 @ 65% | Body-Text |
| `text-brand-navy/60` | #234554 @ 60% | Subtitles, Leads, Card-Desc |
| `text-brand-navy/55` | #234554 @ 55% | Meta, Captions |
| `border-brand-navy/8` | #234554 @ 8% | Alle Borders |
| `text-brand-cyan` | #22b8cf | Eyebrows, Icons, CTAs, Hover |
| `text-brand-emerald` | #10b981 | Check-Icons, Mission-Akzente |
| `bg-surface-light` | #edf2f8 | Alternierende Sektionen |

Keine Freestyle-Hex-Codes in Komponenten — ausschließlich diese Tokens.

---

## 4. Typografie

| Element | Tailwind-Klassen |
|---------|-----------------|
| **H1** (PageHero) | `font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy` |
| **H2** (Section) | `font-display text-2xl sm:text-3xl font-bold text-brand-navy` |
| **H3** (Card-Titel) | `font-display text-base lg:text-lg font-bold text-brand-navy` |
| **Eyebrow** | `font-sans text-xs font-bold uppercase tracking-widest text-brand-cyan` |
| **Lead / Subtitle** | `font-sans text-base sm:text-lg leading-relaxed text-brand-navy/60` |
| **Body** | `font-sans text-sm sm:text-base leading-relaxed text-brand-navy/65` |
| **Meta / Small** | `font-sans text-xs text-brand-navy/55` |

- `font-display` = Work Sans (Headlines)  
- `font-sans` = Inter (alles andere)

---

## 5. Positionierung / Layout

| Kontext | Klassen |
|---------|---------|
| Weiter Container (Karten, SplitFeature) | `max-w-7xl mx-auto px-6` |
| Schmaler Container (Fließtext, Checklisten) | `max-w-5xl mx-auto px-6` |
| CTA-Block (zentriert) | `max-w-3xl mx-auto px-6 text-center` |
| Section-Padding Standard | `py-16 sm:py-20` |
| Section-Padding Groß (SplitFeature) | `py-20 sm:py-28` |
| Karten-Grid | `grid grid-cols-1 md:grid-cols-3 gap-6` |
| Zwei-Spalten | `grid grid-cols-1 lg:grid-cols-2 gap-8` |
| Zwischen SplitFeatures | `space-y-24` |
| Card-Padding klein | `p-7` |
| Card-Padding groß | `p-8 sm:p-10` |

---

## 6. Komponenten

| Komponente | Wann nutzen |
|------------|------------|
| `<PageHero />` | Jede Subpage — props: eyebrow, title, subtitle, icon, width |
| `<SplitFeature />` | Bild ↔ Text alternierend, imageSide wechselt: right → left → right |
| `.glass-panel` | Alle Karten, niemals eigene border/shadow |
| `.glass-panel-hover` | Immer zusätzlich, wenn Karte klickbar/interaktiv |
| `<Reveal />` | Auf alle Karten (delay gestaffelt: 0, 0.07, 0.14...) |
| `<BrandWatermark />` | PageHero und wichtige Sektionen, tint="blue", opacity 0.05 |
| `<ContactSection />` | Standard-Seitenabschluss; alternativ CTA-Block (Muster E) |
| `<Header />` / `<Footer />` | Immer, keine Anpassungen |

Icons: ausschließlich **lucide-react**, Größen w-3.5 / w-4 / w-5 / w-6.

---

## 7. Sektionsmuster (Kurzreferenz)

**A — Karten-Grid** (bg-white): 3 glass-panel Karten, Icon + H3 + Text, grid cols-1→3  
**B — Vision/Mission** (bg-white): 2 glass-panel Karten, farbiger Top-Stripe (cyan = Vision, emerald = Mission)  
**C — SplitFeature** (bg-white): Bild ↔ Text wechselnd, Eyebrow + H2 + Body + Bullets  
**D — Checkliste** (bg-surface-light): CheckCircle2 (emerald) + Text, max-w-5xl  
**E — CTA-Block** (bg-surface-light): zentriert, H2 + Lead + Button bg-brand-navy  
**F — Interaktiver Block** (bg-surface-light): Diagramm/Chart/Modell, max-w-7xl  

---

## 8. Verbindliche Regeln

1. **Hintergrund alterniert** — white ↔ surface-light, nie doppelt hintereinander
2. **Jede Sektion hat eine Eyebrow** — cyan, uppercase, tracking-widest, über dem H2
3. **Zwei Max-Width-Stufen** — 7xl für visuelle Inhalte, 5xl für Lesetexte
4. **Keine Freestyle-Farben** — nur definierte Tokens
5. **Schriften trennen** — font-display für Headlines, font-sans für alles andere
6. **Alle Karten = .glass-panel** — kein eigenes Styling
7. **Jede Seite endet mit CTA** — `<ContactSection />` oder CTA-Block Muster E
8. **`<Reveal />` auf alle Karten** — gestaffelter delay
9. **SplitFeature-Bilder wechseln** — right → left → right, nie zweimal gleich
10. **Eyebrow kommt vor H2**, immer mit `mb-2` Abstand
