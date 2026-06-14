# VEROTERA Website — Handoff / Statusbericht (Stand: 2026-06-14)

> Zweck: Übergabe in ein neues Claude-Code-Kontextfenster. Enthält **IST-Zustand**
> (was aktuell im Code existiert) und **SOLL-Zustand** (aus der Kunden-CSV
> `Kunden Input/Design/SEO_Metadata_VEROTERA_DE(SEO Metadata).csv`) sowie das **Delta**.

---

## 0. Tech-Stack & projektkritische Eigenheiten (UNBEDINGT beachten)

- **Next.js 16** (App Router, `src/app/`, statisch), **React 19**, **Tailwind CSS 4**, **framer-motion**, **lucide-react** (Icons), `next/image`, `next/link`.
- **AGENTS.md-Regel:** Dies ist *nicht* das Standard-Next.js. Vor dem Schreiben von Code die relevante Doku in `node_modules/next/dist/docs/` lesen. Deprecation-Hinweise beachten.
- **KRITISCHER BUG:** `framer-motion` **`AnimatePresence` Exit-Animationen feuern in diesem React-19-Build NICHT**.
  - `mode="wait"` → neues Kind mountet nie (Inhalt friert ein).
  - Default-Mode → "exitende" Elemente stapeln sich im DOM.
  - **Lösung/Pattern:** Crossfades über **gestapelte Elemente mit CSS-Opacity** (`transition-opacity` + `opacity-100/0`); Enter-Transitions über **keyed `motion.div` nur mit `initial`/`animate`** (kein `AnimatePresence`). Referenz: `src/components/Hero.tsx`.
- **`preview_screenshot` stockt** auf dieser Site (Animationen settlen nie) → vor dem Screenshot alle Intervalle clearen + `*{transition:none!important;animation:none!important;}` injizieren.
- **Brand-Design:** weiße Basis, dezenter Brand-Blau-Wash + V-Signet-Motiv. Tailwind-Tokens: `brand-navy`, `brand-cyan`, `brand-emerald`, `surface-light`; Utility-Klassen `glass-panel`, `glass-panel-hover`. Wiederverwendbare Bausteine: `PageHero` (eyebrow + icon + title + subtitle), `Reveal` (Scroll-Entrance), `BrandWatermark`.
- **Content-Seiten-Muster:** `Header` → `<main>` → `PageHero` → `<section>` mit `glass-panel`-Karten → `Footer`. Navigation als Daten-Arrays in `Header.tsx` / `Footer.tsx`.
- **Sprache:** aktuell **nur Deutsch**. DE/EN-i18n ist **bewusst aufgeschoben** (siehe Delta).

---

## 1. IST-ZUSTAND (aktuell im Code, committet als `f6ff9ec`)

### 1.1 Vorhandene Routen (`src/app/**/page.tsx`)

**Homepage**
- `/` — `src/app/page.tsx`

**Solutions**
- `/solutions` (Index)
- `/solutions/wbg-power-modules`
- `/solutions/rack-power-distribution`
- `/solutions/agentic-ai-engineering`
- `/solutions/technology-spotlight-gallium-nitride`
- `/solutions/technology-spotlight-silicium-carbide`

**Applications**
- `/applications/automotive-emobility`
- `/applications/hydrogen`

**Unternehmen / Sonstiges**
- `/about`
- `/contacts`
- `/careers`
- `/login`
- `/ethics-compliance`  *(neu)*
- `/news`  *(neu)*
- `/site-map`

**Resources** *(alle neu, Platzhalterinhalt)*
- `/resources/product-documentation`
- `/resources/quality-certifications`
- `/resources/warranty`
- `/resources/patents`

**Legal**
- `/legal/imprint`
- `/legal/privacy-policy`
- `/legal/terms-of-use`
- `/legal/accessibility`

**SEO-Infrastruktur** *(neu)*
- `/sitemap.xml` → `src/app/sitemap.ts` (23 URLs, mit Prioritäten)
- `/robots.txt` → `src/app/robots.ts` (Allow `/`, Disallow `/login` + `/monitoring`, Sitemap-URL, host `https://verotera.com`)

### 1.2 Header-Navigation (`src/components/Header.tsx`)

7 Top-Level-Items, Reihenfolge: **Lösungen · Applikationen · Support · Über uns · News · Karriere · Kontakt**.
Desktop-Breakpoint auf `lg:` umgestellt (7 Items passen ab `md` sonst nicht).
Rechts: dekorativer „DE | EN"-Umschalter + „My VEROTERA Login" (`/login`).

Daten-Arrays:
- `SOLUTIONS` (Dropdown): WBG-Leistungsmodule, Rack Power Distribution, Agentische KI im Systems Engineering, Spotlight GaN, Spotlight SiC.
- `APPLICATIONS` (Dropdown): WBG Leistungsmodule & Technologie → `/solutions/wbg-power-modules`, AI Data Center → `/solutions/rack-power-distribution`, Automotive & E-Mobilität → `/applications/automotive-emobility`, Grüner Wasserstoff → `/applications/hydrogen`.
- `SUPPORT` (Dropdown): Technische Unterstützung → `/contacts`, Kontakte → `/contacts`.
- `ABOUT` (Dropdown): Über VEROTERA → `/about`, Company Contacts → `/contacts`, Führungsteam → `/about#leadership`, Ethik & Compliance → `/ethics-compliance`.
- `News` → `/news`, `Karriere` → `/careers`, `Kontakt` → `/contacts` (Direktlinks).
- **Wichtig:** Dropdown-`<li>` nutzen `key={leaf.label}` (nicht `href`), weil mehrere Leaves auf `/contacts` zeigen (sonst React-Duplicate-Key-Fehler).

### 1.3 Footer (`src/components/Footer.tsx`)

- `RESOURCE_LINKS` (Spalte „Ressourcen"): Produktdokumentation, Qualität & Zertifizierungen, Garantie, Patente, Site Map → `/resources/*` bzw. `/site-map`.
- `SUPPORT_LINKS` (Spalte „Support"): Technische Unterstützung → `/contacts`, Kontakt → `/contacts`.
- `CORPORATE_LINKS` (Spalte „Corporate"): Über VEROTERA → `/about`, Karriere → `/careers`, Ethik & Compliance → `/ethics-compliance` *(zuvor fälschlich `/legal/privacy-policy` — korrigiert)*.
- `LEGAL_LINKS` (Bottom-Bar): Impressum, Datenschutzerklärung, Nutzungsbedingungen, Barrierefreiheitserklärung → `/legal/*`.
- Links: Logo + Tagline „YOUR GOAL. OUR TECH. ONE VISION." + LinkedIn (ext.).

### 1.4 Homepage-Sektionen (`src/app/page.tsx`, Reihenfolge)

`Hero` → `ExplainSection` → `Industries` → `Solutions` → `WhyVerotera` → `StatsSection` → `ContactSection` → **`NewsInsights`** *(neu)* → `Footer`.

- **`Hero.tsx`** = 3-Slide-Carousel (Auto-Rotation 6500 ms, Pause bei Hover/Focus/reduced-motion, Prev/Next, Indikatoren). Slides → „Discover more":
  1. `robotics-production.png` → `/solutions/wbg-power-modules`
  2. `data-center.png` → `/solutions/rack-power-distribution`
  3. `agentic-ai.png` → `/solutions/agentic-ai-engineering`
  Umgesetzt **ohne** `AnimatePresence` (CSS-Opacity-Crossfade + keyed `motion.div`).
- **`NewsInsights.tsx`** (id `#news`, weiße Section): zeigt die 3 `featured`-Einträge aus `src/data/news.ts`, CTA „Alle News ansehen" → `/news`.

### 1.5 Daten (`src/data/news.ts`)

`NewsItem`-Typ + `NEWS_ITEMS` (6 Artikel, neueste zuerst; kein CMS). `featured: true` für die 3 Homepage-Karten: agentic-ai-engineering, automotive-emobility, hydrogen. „Read more" verlinkt aktuell auf die jeweilige Solution-/Application-Seite.

### 1.6 SEO-Metadaten (Meta-`title` ≤ 60, `description` ≤ 155; sichtbare H1 unverändert)

| Route | Meta-`title` (aktuell gesetzt) |
|---|---|
| `/solutions/wbg-power-modules` | Innovative Wide-Bandgap Semiconductor Solutions |
| `/solutions/rack-power-distribution` | Wide-Bandgap Technology for the Future of AI Data Centers |
| `/solutions/agentic-ai-engineering` | How Agentic AI Accelerates SiC & GaN Engineering |
| `/solutions/technology-spotlight-gallium-nitride` | GaN in AI Data Center Power Distribution |
| `/solutions/technology-spotlight-silicium-carbide` | SiC – Power Semiconductor of the Electrification Age |
| `/applications/automotive-emobility` | Advancing Technologies for Zero-Emission e-Mobility |
| `/about` | About VEROTERA – Wide-Bandgap Semiconductor Modules |
| `/` (Homepage) | unverändert (CSV-Wert > 60 Z. & inkonsistent) |

### 1.7 Verifikationsstand

`tsc --noEmit` sauber · alle neuen Routen + `/sitemap.xml` + `/robots.txt` HTTP 200 · 0 Konsolen-Fehler auf frischem Server · Hero-Slider funktional (Indikator-Klick + Auto-Rotation) · Desktop-Screenshot bestätigt 7-Item-Nav.

---

## 2. SOLL-ZUSTAND (Kunden-CSV)

> Quelle: `Kunden Input/Design/SEO_Metadata_VEROTERA_DE(SEO Metadata).csv`.
> Pflichtspalten: URL, H1, Meta Title (≤60), Meta Description (≤155), Primary Keyword, CTA.
> **Hinweis:** Die CSV verwendet `/de`- und `/en`-Präfixe (= i18n) sowie teils
> inkonsistente Slugs (`/loesungen/…`, `/lösungen/…`, `/applikationen/…`). Im IST
> wurden die **realen englischen Slugs** (`/solutions/…`, `/applications/…`) ohne
> Sprachpräfix verwendet (i18n aufgeschoben).

### 2.1 Header-Navigation (SOLL)

- **Lösungen:** WBG-Leistungsmodule · Stromverteilereinheit – Rack PDU · Agentische KI im Systems Engineering
- **Applikationen:** WBG Leistungsmodule & Technologie · AI Data Center · Automotive / E-Mobility · Grüner Wasserstoff
- **Support:** Technische Unterstützung · Kontakte  *(alle → Kontaktformular)*
- **Über uns:** Über VEROTERA · Company Contacts · Führungsteam · Ethik & Compliance · Start Your Career *(später)* · Investor Relations *(später)*
- **News:** Neuigkeiten & Einblicke
- **Karriere:** Start Your Career
- **Contact Us:** Contacts
- **Search:** tbd  ·  **My VEROTERA Login:** tbd  ·  **Language:** DE/EN (Deutsch / Global-English)

### 2.2 Footer (SOLL)

- **Folgen Sie uns:** LinkedIn (ext.: `https://www.linkedin.com/company/verotera/`)
- **Resources:** Product Documentation · Quality Policy & Certifications · Warranty Information · Patents · Site Map (`/site-map`)
- **Support:** Technische Unterstützung · Kontakt (→ `/contacts`, CTA „Send a Message" → `#form`)
- **Corporate:** Über VEROTERA · Karriere · Ethik & Compliance
- **AGBs (Legal):** Impressum · Datenschutz und Cookie-Richtlinie · Nutzungsbedingungen · Barrierefreiheitserklärung
- **coming later:** Investor Relations

### 2.3 Homepage-Aufbau (SOLL — vertikal gestapelte Sektionen)

1. **Hero Section** — H1 „Advanced Semiconductor Technologies / Wide-Bandgap at the Core". Horizontaler **3-Slide-Bild-Slider**:
   - Discover more (1) → `/solutions/wbg-power-modules` (Bild: robotics-production)
   - Discover more (2) → `/solutions/rack-power-distribution` (Bild: data-center)
   - Discover more (3) → `/solutions/agentic-ai-engineering` (Bild: agentic-ai)
2. **Benefits Section** — H1 „Your Goals. Our Tech. One Vision."; Discover more (4) → `/solutions/wbg-power-modules` (Bilder: wafer-production, sic-wafer).
3. **Technology Section** — CTA „Get started" → Kontakt. Enthält Technologie-Karten:
   - GaN: Learn more (1) → `/solutions/technology-spotlight-gallium-nitride`
   - SiC: Learn more (2) → `/solutions/technology-spotlight-silicium-carbide`
   - Smart PDU: Learn more (3) → `/solutions/rack-power-distribution`
   - Elektrifizierung Nutzfahrzeuge: Learn more (4) → `/applications/automotive-emobility` (Bild: emobility-automotive)
   - Elektrifizierung Nutzfahrzeuge: Learn more (5) → `/applications/automotive-emobility` (Bild: electrified-bus)
4. **Features Section** — H1 „Agentische KI im Systems Engineering"; Discover more (5) → `/solutions/agentic-ai-engineering`.
5. **News Section** — H1 „News & Insights"; Meta „News & Insights I VEROTERA". 3 Karten:
   - Read more (1) → `/applications/automotive-emobility`
   - Read more (2) → `/applications/hydrogen`
   - Read more (3) → `/solutions/agentic-ai-engineering`
6. **Footer Section**

### 2.4 Seiten & SEO (SOLL — Auszug aus CSV)

| Seite (real) | H1 (sichtbar) | Meta Title (CSV, ≤60 — ggf. gekürzt) |
|---|---|---|
| `/` | Advanced Semiconductor Technologies / Wide-Bandgap at the Core | (CSV-Wert > 60, inkonsistent) |
| `/solutions/wbg-power-modules` | High-Efficiency Power Module Solutions for a Sustainable Future | Innovative Wide-Bandgap Semiconductor Solutions |
| `/solutions/rack-power-distribution` | AI Data Center – Rack Power Distribution Unit (PDU) | Wide-Bandgap technology is shaping the future of AI Data Center |
| `/solutions/agentic-ai-engineering` | Agentic AI in Systems Engineering | How Agentic AI accelerates SiC & GaN Engineering |
| `/solutions/technology-spotlight-gallium-nitride` | Technologie Spotlight Galliumnitrid (GaN) | GaN in AI data center power distribution |
| `/solutions/technology-spotlight-silicium-carbide` | Technologie Spotlight Siliziumkarbid (SiC) | SiC is becoming the power semiconductor of the electrification age |
| `/applications/automotive-emobility` | Electrification of Commercial Vehicles – Next Gen Drive Technology | Advancing Technologies for Zero-Emission e-Mobility |
| `/applications/hydrogen` | (—) | Efficient Power Electronics for Green Hydrogen |
| `/about` | About VEROTERA | About Us – [VEROTERA] Innovative Wide-Bandgap Semiconductor Modules |
| `/careers` | Your Career at the Core of WBG Innovation | Erfahren Sie mehr über die Karriere-Möglichkeiten bei VEROTERA |
| `/contacts` | (—) | Contact Us – [VEROTERA] |

CTA-Ziele in der CSV teils `/about/contact` und `#form` (Kontaktformular). IST nutzt `/contacts`.

### 2.5 Bewusst „später"/„tbd" in der CSV

- **Investor Relations** (Über uns + Footer „coming later")
- **Start Your Career** als eigener Über-uns-Unterpunkt
- **Search** (Header) — „tbd"
- **My VEROTERA Login** — „tbd"
- **DE/EN-Sprachumschalter** funktional (i18n)

---

## 3. DELTA / OFFENE PUNKTE (SOLL vs. IST)

### 3.1 Bewusst aufgeschoben (mit Kunde abgestimmt)
- **DE/EN-i18n:** `/de` + `/en` Routen, Übersetzungen, funktionaler Umschalter, EN-Metadaten. Umschalter ist aktuell rein **dekorativ**. → eigene Phase.
- **Search** (Header) und **Investor Relations** — CSV „tbd"/„später".
- **Inhalte** für `/ethics-compliance`, `/news`, `/resources/*` sind **Platzhalter** bis finaler Kundentext / echte Artikel vorliegen.

### 3.2 Abweichungen IST gegenüber wörtlicher CSV (bewusst)
- **Slugs:** real `/solutions/*` & `/applications/*` (englisch, ohne `/de`-Präfix) statt der gemischten CSV-Slugs `/loesungen/…`, `/lösungen/…`, `/applikationen/…`.
- **Applikationen WBG & AI Data Center:** verlinken als **Alias** auf die Solution-Seiten (`/solutions/wbg-power-modules`, `/solutions/rack-power-distribution`) — exakt wie in CSV-Notes vorgesehen („still an internal link to the same page").
- **Kontakt-CTAs:** IST nutzt `/contacts` statt `/about/contact` / `#form`.
- **Meta-Titles** wurden auf ≤ 60 Zeichen gekürzt, wo CSV-Werte länger waren (rack-power-distribution, technology-spotlight-silicium-carbide, about).
- **Homepage-Sektionsreihenfolge:** IST hat zusätzliche Bestandssektionen (ExplainSection, Industries, Solutions, WhyVerotera, StatsSection, ContactSection) zwischen Hero und News. CSV-Kernreihenfolge (Hero → Benefits → Technology → Features → News → Footer) ist als Teilmenge enthalten; News steht korrekt zuletzt vor dem Footer.

### 3.3 Optional / noch nicht umgesetzt
- **`next.config.ts` `rewrites()`** für wörtliche CSV-URLs (`/applications/power-conversion` → `/solutions/wbg-power-modules`, `/applications/ai-data-center` → `/solutions/rack-power-distribution`). Nav verlinkt ohnehin direkt — nur relevant, falls die wörtlichen URLs extern auflösen müssen.
- **`/about#leadership`** Anker: prüfen, ob im `/about`-Seiteninhalt ein `id="leadership"`-Abschnitt existiert (Header „Führungsteam" verlinkt dorthin).
- **Company Contacts** (Über uns) zeigt auf `/contacts` (keine eigene Detailseite — CSV „später").

---

## 4. Mögliche nächste Schritte (nicht angefangen)

1. **DE/EN-i18n-Architektur** planen & umsetzen (größter offener Block).
2. **Echte Inhalte** für News-Artikel, Ethics & Compliance, Resources einpflegen, sobald Kundentext da ist.
3. `/about` um `id="leadership"`-Abschnitt ergänzen (für Header-Anker).
4. Optional `rewrites()` für wörtliche CSV-URLs.
5. Search + Investor Relations + Login-Funktionalität (alle CSV „tbd"/„später").

---

*Letzter Commit: `f6ff9ec` — „feat: align website to customer SEO/sitemap CSV specification" (22 Dateien, +1016/−73).*
