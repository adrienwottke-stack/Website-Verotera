# Central Master Instructions for Autonomous Website Implementation

This document serves as the single source of truth for the autonomous implementation of the subpages, statutory pages, and interactive components of the VEROTERA website.

**To start, run this command in your terminal:**
`claude "Read CLAUDE_AUTONOMOUS_INSTRUCTIONS.md and implement all tasks autonomously. Create all pages, build all interactive diagrams, configure all SEO metadata, run compiler and linter checks after each phase, and resolve any errors autonomously until all tasks are complete."`

---

## 🤖 Rules of Engagement for the Autonomous Agent
1. **Style Continuity:** Do NOT modify the existing Landing Page sections (Hero, Benefits, Solutions-Grid, Explain-Flowchart, News, and Form). Instead, use their design (fonts, white/slate alternating backgrounds, brand-navy `#234554` for dark details/cards/footers, and brand-cyan `#22b8cf` for buttons/active states/hover indicators) as the exact styling blueprint.
2. **ESLint & TypeScript Safety:**
   - Always escape single quotes (`'`) as `&apos;` and double quotes (`"`) as `&quot;` in raw JSX text nodes.
   - Do not leave unused imports or variables, as they will break `npm run lint`.
   - **CRITICAL:** Use Next.js 15 App Router conventions (`src/app/page.tsx`, `export default function Page()`). Do not use legacy Pages Router conventions.
3. **Sequential Execution:** Implement the tasks phase by phase. After completing a page or component, immediately run:
   `npm run lint` and `npm run build`
   If any errors or warning occur, debug and fix them immediately before moving to the next task.
4. **Issue Tracking:** Reference the corresponding GitHub Issue number in your commits or work logs if possible (e.g. "Closes #18").

---

## 🗺️ Phase-by-Phase Implementation Specifications

### 🗂️ Phase 1: Structural Setup & Main Navigation

#### 1. Global Layout Configuration (Issue #15)
- **Target File:** `src/app/layout.tsx`
- **Objective:** Configure HTML settings and base SEO metadata.
- **Actions:**
  - Set `<html lang="de">`.
  - Configure global metadata fields:
    * Title: `VEROTERA | Next-Gen Leistungselektronik & KI-Systeme`
    * Description: `VEROTERA wandelt Wide-Bandgap (SiC/GaN) Halbleiterchips in hocheffiziente Leistungsmodule und komplett zertifizierte Systeme um.`
    * Keywords: `Leistungselektronik, Wide-Bandgap, Halbleiter, SiC, GaN, Netzteile, KI-Rechenzentren, Elektromobilität, Grüner Wasserstoff`

#### 2. Navigation Header Dropdowns (Issue #16)
- **Target File:** `src/components/Header.tsx`
- **Objective:** Support dropdown menus for the navigation headers.
- **Actions:**
  - Modify the navigation structure to support accordion/dropdown submenus:
    * **"Lösungen" Dropdown Links:**
      - WBG-Leistungsmodule -> `/solutions/wbg-power-modules`
      - Rack Power Distribution -> `/solutions/rack-power-distribution`
      - Agentische KI im Systems Engineering -> `/solutions/agentic-ai-engineering`
      - Spotlight: Galliumnitrid (GaN) -> `/solutions/technology-spotlight-gallium-nitride`
      - Spotlight: Siliziumkarbid (SiC) -> `/solutions/technology-spotlight-silicium-carbide`
    * **"Applikationen" Dropdown Links:**
      - Automotive & E-Mobilität -> `/applications/automotive-emobility`
      - Grüner Wasserstoff -> `/applications/hydrogen`
    * **"Über uns" Link:** `/about`
    * **"Karriere" Link:** `/careers`
    * **"Kontakt" Link:** `/contacts`
  - Style dropdowns with clean white background, thin border, shadow, and brand-cyan `#22b8cf` hover effects. Ensure mobile drawer menu renders accordions cleanly.

#### 3. Footer Menus & Legal Routing (Issue #17)
- **Target File:** `src/components/Footer.tsx`
- **Objective:** Style and structure footer columns and links.
- **Actions:**
  - Background: Solid brand-navy `#234554` (`bg-[#234554]`).
  - Left column: White VEROTERA Logo, tagline, and LinkedIn link.
  - Column 2: RESSOURCEN (Produktdokumentation, Site Map -> `/site-map`)
  - Column 3: SUPPORT (Supportanfrage stellen -> `/contacts`, Technische Unterstützung)
  - Column 4: CORPORATE (Über VEROTERA -> `/about`, Karriere -> `/careers`, Ethik & Compliance -> `/legal/privacy-policy`)
  - Bottom bar legal links:
    * Impressum -> `/legal/imprint`
    * Datenschutzerklärung -> `/legal/privacy-policy`
    * Nutzungsbedingungen -> `/legal/terms-of-use`
    * Barrierefreiheitserklärung -> `/legal/accessibility`

---

### 🗂️ Phase 2: Statutory Pages & Cleanups (Issues #18 to #22)

#### 1. Impressum (Issue #18)
- **Target File:** `src/app/legal/imprint/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Impressum - [VEROTERA]`
  * Description: `Impressum und rechtliche Angaben der VEROTERA GmbH.`
  * Keywords: `Impressum, Legal, VEROTERA`
- **Content:**
  * Heading (h1): `Impressum`
  * Angabe gemäß § 5 TMG:
    VEROTERA GmbH, Böhlerstraße 1, 40667 Meerbusch.
    Vertreten durch den Geschäftsführer: Aly Mashaly.
    E-Mail: info@verotera.com
    Registergericht: Amtsgericht Neuss, Registernummer: HRB 24862.

#### 2. Datenschutzerklärung (Issue #19)
- **Target File:** `src/app/legal/privacy-policy/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Datenschutzerklärung - [VEROTERA]`
  * Description: `Datenschutzerklärung und Cookie-Richtlinie der VEROTERA GmbH.`
  * Keywords: `Datenschutz, DSGVO, Cookies, Cookie-Richtlinie`
- **Content:** Load and render the full text from `Kunden Input/Privacy/VEROTERA_Privacy_Cookie_Policy_text.md`. Structure with sections, tables, and nested lists.

#### 3. Nutzungsbedingungen (Issue #20)
- **Target File:** `src/app/legal/terms-of-use/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Nutzungsbedingungen - [VEROTERA]`
  * Description: `Nutzungsbedingungen für die Website der VEROTERA GmbH.`
  * Keywords: `Nutzungsbedingungen, Terms of Use, Website-Regeln`
- **Content:** Load and render the full text from `Kunden Input/Privacy/VEROTERA_Terms_of_Use_v2_text.md`.

#### 4. Barrierefreiheitserklärung (Issue #21)
- **Target File:** `src/app/legal/accessibility/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Barrierefreiheitserklärung - [VEROTERA]`
  * Description: `Erklärung zur Barrierefreiheit der VEROTERA Website.`
  * Keywords: `Barrierefreiheit, Accessibility`
- **Content:** Text stating commitment to WCAG 2.1 level AA compliance, detailing optimization efforts, and providing contact info for barrier reporting.

#### 5. Alt-Routen Deletion & 301 Redirects (Issue #22)
- **Actions:**
  - Delete directories: `src/app/impressum/`, `src/app/privacy-policy/`, `src/app/cookie-policy/`.
  - Open `next.config.ts` and configure permanent redirects:
    * `/impressum` -> `/legal/imprint`
    * `/privacy-policy` -> `/legal/privacy-policy`
    * `/cookie-policy` -> `/legal/privacy-policy`

---

### 🗂️ Phase 3: Solutions Detail Pages & Diagrams (Issues #29 to #33)

#### 1. WBG-Leistungsmodule (Issue #29)
- **Target File:** `src/app/solutions/wbg-power-modules/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `High-Efficiency Power Module Solutions for a Sustainable Future`
  * Description: `VEROTERA operates across the full stack – from chip physics to complete systems – and design technologies that reflect the actual needs and constraints of modern applications`
  * Keywords: `wide bandgap semiconductors, SiC modules, GaN technology`
- **Content:** Alternating layout sections explaining VeroCore SiC modules, VeroCore GaN modules, low-inductance packaging, and integrated sensor telemetry.

#### 2. Smart PDU / Rack PDU Page (Issue #30)
- **Target File:** `src/app/solutions/rack-power-distribution/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `AI Data Center – Rack Power Distribution Unit (PDU)`
  * Description: `The Full-GaN DC/DC converter represents a key enabling technology for the Power Shelf, replacing conventional silicon MOSFETs with Gallium Nitride (GaN) devices`
  * Keywords: `rack power distribution unit, AI data center, power shelf`
- **Content:** Explanations of 800V DC power distribution grids, power shelf efficiency, active load management. Imports and renders the `<PduFlowchart />` diagram.

#### 3. Interactive PDU Flowchart Component (Issue #31)
- **Target File:** `src/components/PduFlowchart.tsx` [NEW]
- **Details:** Interactive SVG or flexbox flowchart showcasing power path: Grid (AC) -> SST -> 800V DC Bus -> Smart PDU -> GPU Shelves. Clicking on nodes displays detailed tooltip specs (e.g. "SST: 98.5% efficiency using GaN devices").

#### 4. Agentic AI in Systems Engineering Page (Issue #32)
- **Target File:** `src/app/solutions/agentic-ai-engineering/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Agentic AI in Systems Engineering`
  * Description: `Agentic AI Ecosystem Architecture - Shift from passive AI assistants (copilots) to autonomous agents that reason, plan, and act to deliver complex, multi-step engineering outcomes.`
  * Keywords: `ai-driven systems engineering, agentic AI, semiconductor simulation`
- **Content:** In-depth text from `Kunden Input/Technology Spotlight/verotera_agentic_ai_systems_engineering_text.md`. Imports and renders `<VModelInteractive />` diagram.

#### 5. Interactive V-Model Diagram Component (Issue #33)
- **Target File:** `src/components/VModelInteractive.tsx` [NEW]
- **Details:** Interactive V-model diagram. Users click engineering phases (Requirements, Simulation, Layout, Thermal, Verification) to see mock terminal logs of which specialized autonomous AI agent (Spec Agent, Sim Agent, Thermal Agent) accelerates that phase.

---

### 🗂️ Phase 4: Technology Spotlights & Parameter Matrix (Issues #34 to #36)

#### 1. Galliumnitrid Spotlight (Issue #34)
- **Target File:** `src/app/solutions/technology-spotlight-gallium-nitride/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Technologie Spotlight Galliumnitrid (GaN)`
  * Description: `GaN in AI data center power distribution: NVIDIA's 800 VDC rack architecture is a structural inflection point for GaN.`
  * Keywords: `gallium nitride - GaN, NVIDIA 800V DC rack, high speed switching`
- **Content:** Renders full text from `Kunden Input/Technology Spotlight/GaN_Technology_Spotlight_text.md`. Embeds the `<SpotlightTable />` matrix.

#### 2. Siliziumkarbid Spotlight (Issue #35)
- **Target File:** `src/app/solutions/technology-spotlight-silicium-carbide/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Technologie Spotlight Siliziumkarbid (SiC)`
  * Description: `SiC: The Wide-Bandgap Platform Driving Efficiency in Electric Vehicles, Solar Energy, and Green Hydrogen – From Device to System`
  * Keywords: `silicium carbide - SiC, traction inverter, hydrogen converters`
- **Content:** Renders full text from `Kunden Input/Technology Spotlight/SiC_Technology_Spotlight_text.md`. Embeds the `<SpotlightTable />` matrix.

#### 3. Interactive Spotlight Compare Matrix (Issue #36)
- **Target File:** `src/components/SpotlightTable.tsx` [NEW]
- **Details:** Comparison matrix table comparing Silicon (Si) vs Silicon Carbide (SiC) vs Gallium Nitride (GaN) parameters (Bandgap, Critical Field, Mobility, Qrr, Cost). Clicking query toggles (e.g., "Highlight high-temperature performance") highlights corresponding columns/rows.

---

### 🗂️ Phase 5: Applications Detail Pages (Issues #37 & #38)

#### 1. Automotive & E-Mobilität (Issue #37)
- **Target File:** `src/app/applications/automotive-emobility/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Electrification of Commercial Vehicles – Next Gen Drive Technology`
  * Description: `Silicon Carbide (SiC) and Gallium Nitride (GaN) are accelerating the transition to electrified commercial vehicles`
  * Keywords: `powertrain, aux-inverter, onboard-charging, commercial vehicles, TCO`
- **Content:** Focuses on commercial vehicle powertrains, megawatt charging systems, auxiliary inverter efficiency, and TCO reduction using SiC modules.

#### 2. Grüner Wasserstoff (Issue #38)
- **Target File:** `src/app/applications/hydrogen/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Efficient Power Electronics for Green Hydrogen`
  * Description: `The efficiency of green hydrogen production hinges on power electronics. Wide-bandgap semiconductors increase efficiency and power density`
  * Keywords: `power electronics, green hydrogen, electrolyzers, DC-DC converter`
- **Content:** Details on electrolysis grid coupling, high-frequency DC-DC converters, reduction of harmonic losses in PEM/AEM electrolyzers.

---

### 🗂️ Phase 6: Corporate Pages (Issues #39 to #41)

#### 1. Über VEROTERA (Issue #39)
- **Target File:** `src/app/about/page.tsx`
- **SEO Metadata:**
  * Title: `About Us - [VEROTERA] Innovative Wide-Bandgap Semiconductor Modules`
  * Description: `VEROTERA's advanced WBG power modules are engineered to deliver unmatched performance, enabling smarter, more efficient systems across e-mobility, renewable-energy, and data centers.`
  * Keywords: `Über VEROTERA, Aly Mashaly, Vision, Mission, WBG Halbleiter`
- **Content:** Update with texts from `Kunden Input/Vision and Mission/VEROTERA_Vision_Goals_Website_DE_EN (1)_text.md`. Include leadership profiles (Aly Mashaly) and company history.

#### 2. Karriere (Issue #40)
- **Target File:** `src/app/careers/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Your Career at the Core of WBG Innovation`
  * Description: `Erfahren Sie mehr über die Karriere-Möglichkeiten bei VEROTERA`
  * Keywords: `Karriere bei VEROTERA, Jobs Meerbusch, Halbleiter Stellen`
- **Content:** German introduction to team culture. Lists 3 mock jobs: "Senior System Engineer", "AI Developer - Agentic Systems", "Working Student - Semiconductor Simulation".

#### 3. Kontakt (Issue #41)
- **Target File:** `src/app/contacts/page.tsx` [NEW]
- **SEO Metadata:**
  * Title: `Contact Us - [VEROTERA]`
  * Description: `Send us a message and we'll get back to you as soon as possible.`
  * Keywords: `Kontakt VEROTERA, Support, Office Meerbusch`
- **Content:** Office details on the left (Meerbusch, Böhlerstraße 1) and simulated contact form on the right (translating inputs/labels).

---

### 🗂️ Phase 7: Verification & Auditing (Issues #42 & #43)
- **Linter Check (Issue #42):** Run `npm run lint` and `npm run build` to verify compiling. Zero warnings/errors allowed.
- **SEO & Links Audit (Issue #43):**
  - Verify every page has exactly one `<h1>`.
  - Ensure meta tags match this table exactly.
  - Click all nav/footer links to verify no 404 or broken paths exist.
