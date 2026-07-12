# VEROTERA — Design Guideline v2.0

**Die verbindliche Bau-Vorlage für alle Subpages ist [`SKELETON.md`](SKELETON.md)** (Landing-Page-Idiom,
Teaser→Headline→Body-Schema). Dort stehen Tokens, Typografie-Rezepte, Sektions-Anatomie,
Pattern-Katalog und der Content-Input-Workflow. Dieses Dokument ergänzt nur, was dort nicht steht.

v1.0 dieses Dokuments ist obsolet. Die wichtigsten Änderungen gegenüber v1.0:

| v1.0 (alt) | v2.0 / SKELETON.md (gilt) |
|---|---|
| Hintergrund-Pflichtwechsel white ↔ surface-light | Weiße Basis; Rhythmus über Watermarks/Orbs; surface-light nur PageHero/Kontakt/max. 1 Kontrastsektion; Navy-Emphasis max. 1× |
| Sektionspadding `py-16 sm:py-20` | `py-24 sm:py-32` (dicht/Navy: `py-20 sm:py-28`) |
| Karten = `.glass-panel` | Inline-Card: `p-6 rounded-2xl border border-brand-navy/8 bg-white shadow-sm` |
| Reveal-Stagger 0.07 s | 0.12 s |
| `brand-cyan` = #22b8cf | `brand-cyan` = **#10A6E2** (#22b8cf ist `brand-cyan-end`, nur im Gradient) |
| H2 `text-2xl sm:text-3xl` | H2 `text-3xl sm:text-4xl` (2xl/3xl nur für Split-H3 / Schluss-CTA / großes Fazit) |

---

## Minimale Seite (Legal, Imprint, Privacy o. ä.)

Header → PageHero (`width="narrow"`) → eine Fließtext-Sektion → Footer.

```tsx
<section className="py-16 sm:py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6 space-y-8">
    {/* H3-Blöcke: font-display text-lg font-bold text-brand-navy mb-2
        + Absätze: font-sans text-sm sm:text-base text-brand-navy/65 leading-relaxed */}
  </div>
</section>
```

Kein Pflicht-CTA, keine Dekoration — Lesbarkeit vor Inszenierung.

---

## Bestandsseiten (v1.0-Stil)

Viele existierende Subpages nutzen noch `.glass-panel`, alternierende Hintergründe und das alte
Padding. Das ist **kein Fehler, der nebenbei "mitgefixt" wird**:

- Neue Seiten und neue Sektionen → immer SKELETON.md.
- Bestehende Seiten nur auf das v2-Idiom heben, wenn der Auftrag genau das ist (Redesign),
  dann die ganze Seite konsistent umstellen — nicht einzelne Sektionen mischen.
- `.glass-panel` / `.glass-panel-hover` (globals.css) bleiben für Bestandsseiten definiert.
