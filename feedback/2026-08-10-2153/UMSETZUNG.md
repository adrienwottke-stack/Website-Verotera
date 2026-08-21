# Umsetzungsprotokoll — Runde 2026-08-10-2153

Was am Code passiert ist. Die fachlichen Rückfragen an den Kunden stehen in
[FEEDBACK.md](FEEDBACK.md) (Abschnitt „Rueckfragen an den Kunden"), die Triage der 53 Punkte in
[PLAN.md](PLAN.md). Dieses Dokument beantwortet nur: **welche Datei wurde warum wie geändert.**

Stand 2026-08-15 · **Durchgang 2 (nach den Kundenantworten vom 14.08.) ist in Abschnitt 5
protokolliert.** Der Text bis dahin beschreibt den ersten Durchgang vom 11.08.

Stand 2026-08-11 · 26 von 53 Punkten abgehakt · 27 offen (alle blockiert, keiner bei uns).

> **Kontext:** 46 der 53 Punkte sind ein Re-Export der Vorrunde
> [2026-08-01-2052](../2026-08-01-2052/FEEDBACK.md). 22 davon waren bereits am 2026-08-02
> umgesetzt — sie wurden in dieser Runde nur verifiziert und abgehakt, ohne Code-Änderung
> (Protokoll dazu: [../2026-08-01-2052/UMSETZUNG.md](../2026-08-01-2052/UMSETZUNG.md)).
> **Neu gebaut wurde in dieser Runde ausschließlich auf der GaN-Spotlight-Seite: #171–#174.**

---

## 1. Überblick

Geänderte Dateien dieser Runde:

```
src/app/[lang]/solutions/technology-spotlight-gallium-nitride/page.tsx   -530 Zeilen (1286 → 756)
```

**Ein Commit pro Punkt**, Format `feedback(2026-08-10-2153): #NR kurzbeschreibung`.
Nicht gepusht, nicht deployed.

| Commit | Punkt | Kurzbeschreibung |
|---|---|---|
| `a5c1816` | #171 | Sektion Trend 1 Vertikale GaN Power-ICs entfernt *(enthält zusätzlich den Import der Runde: FEEDBACK.md, PLAN.md, 53 Screenshots)* |
| `9293317` | #172 | Sektion Trend 3 GaN in humanoider Robotik entfernt |
| `1bbd282` | #173 | Sektion Marktstruktur & Ökosystem-Konsolidierung entfernt |
| `71eef0d` | #174 | Sektion Ausblick & Technologie-Roadmap entfernt |
| `c2c78f5` | — | 22 bereits in Vorrunde umgesetzte Punkte abgehakt, PLAN.md-Status nachgezogen |

---

## 2. `/solutions/technology-spotlight-gallium-nitride` (#171–#174)

Vier Sektionen entfernt — alle vier sind reine Fremdquellen-Beiträge (Bodo's Power Systems,
Yole Group u. a.) ohne VEROTERA-Bezug; Begründung des Kunden: „wir platzieren nur VEROTERA
relevante Beiträge." **„Trend 2" (800-VDC-Rack mit CTA auf die VEROTERA Rack-PDU) bleibt bewusst
stehen** — er war im Feedback ausgelassen und trägt den einzigen VEROTERA-Bezug der Seite.

### Vorher → nachher (Sektionsfolge)

| # | Sektion (COPY-Key) | Stand |
|---|---|---|
| 1 | Globaler Markt (`market`) | bleibt |
| 2 | Anwendungsprofil (`profile`) | bleibt |
| 3 | Physikalische Grundlagen (`physics`) | bleibt |
| 4 | Parametermatrix (`matrix` + `SpotlightTable`) | bleibt |
| 5 | Trend 1 · Vertikale GaN Power-ICs (`trend1`) | **entfernt (#171)** |
| 6 | Trend 2 · 800-VDC-Rack (`trend2`, Navy + CTA) | bleibt |
| 7 | Trend 3 · Humanoide Robotik (`trend3`) | **entfernt (#172)** |
| 8 | Marktstruktur & Konsolidierung (`consolidation`) | **entfernt (#173)** |
| 9 | Entscheidende Vorteile (`advantages`) | bleibt |
| 10 | Ausblick & Roadmap (`roadmap`) | **entfernt (#174)** |
| — | ContactSection | bleibt |

### Pro Punkt entfernt

Je Punkt dieselben vier Bausteine: JSX-Sektion, DE-COPY-Block, EN-COPY-Block, Typ-Block im
`COPY`-Record — plus die dadurch verwaisten lucide-Importe:

| Punkt | Verwaiste Importe/Konstanten mit entfernt |
|---|---|
| #171 | `ArrowDown` (einzige Verwendung: Schichtaufbau-Diagramm) |
| #172 | `Bot`, `Radar`, `Cpu` + Konstante `ROBOTICS_ICONS` |
| #173 | — (BrandWatermark bleibt, wird von Sektionen 1/3/6 weiter genutzt) |
| #174 | `CheckCircle2` (einzige Verwendung: Phasen-Checklisten) |

`Check`, `ArrowRight`, `ChevronRight`, `Atom` usw. bleiben — sie werden von den verbleibenden
Sektionen verwendet (geprüft per Grep über die ganze Datei vor jeder Löschung).

### Verifikation

- `npx tsc --noEmit` nach jedem der vier Commits grün.
- Kein Dev-Server gestartet (Projektregel: Port 3001 fest vergeben, geteilter `.next`-Ordner) —
  Sichtprüfung bitte in der laufenden Live-Ansicht.
- Screenshots 171–174 vor der Umsetzung geprüft: Der gestrichelte Rahmen saß jeweils auf der
  Sektions-Eyebrow; „diesen Teil" wurde als die Sektion bis zur nächsten Eyebrow gelesen —
  gestützt dadurch, dass die vier Marker streng von oben nach unten laufen und Trend 2 bewusst
  ausgelassen wurde.

### Bewusste Nebenwirkungen (kein Fehler, aber sichtbar)

- **Sektions-Kommentare im JSX behalten ihre alte Nummerierung** (1–4, 6, 9) — bewusst nicht
  renummeriert, um die Diffs klein zu halten.
- Nach dem Wegfall der Roadmap folgt auf „Entscheidende Vorteile" (`bg-surface-light`) direkt
  die ContactSection (ebenfalls surface-light). Beide sind durch `border-y` getrennt; falls das
  optisch stört, wäre das eine eigene kleine Design-Entscheidung.
- Die Seite endet inhaltlich jetzt auf den Vorteilen — Quelle-Zeilen der gelöschten Sektionen
  (Yole, Bodo's, EPC …) sind mit weg.

---

## 3. Abgehakt ohne Code-Änderung (`c2c78f5`)

Die 22 Punkte #76, #77, #79, #80, #81, #84, #85, #98, #99, #100, #101, #103, #104, #105, #106,
#107, #108, #110, #161, #163, #165, #168 waren am 2026-08-02 in der Vorrunde umgesetzt worden und
standen nur deshalb wieder im Export, weil sie in Pastel nie auf „resolved" gesetzt wurden.

Vor dem Abhaken wurde jeder Punkt einzeln im Arbeitsverzeichnis gegengeprüft (Grep auf den
jeweils gelieferten Zieltext bzw. das entfernte Element) — alle 22 vorhanden. Zusätzlich in
diesem Commit: PLAN.md-Statustabellen auf den neuen Stand gezogen.

**Nicht abgehakt trotz vorhandener Umsetzung:** #86, #89, #102, #117, #162 — sie sind in
[PLAN.md](PLAN.md) als ⚠️ „umgesetzt unter einer Annahme" geführt; die Annahme muss der Kunde
erst bestätigen (Fragen dazu: [../2026-08-01-2052/RUECKFRAGEN-KUNDE.md](../2026-08-01-2052/RUECKFRAGEN-KUNDE.md), Abschnitt 4).

---

## 4. Was nach Durchgang 1 offen blieb

Alle 27 offenen Punkte waren blockiert — 14 × ENTSCHEIDUNG, 5 × ASSET_FEHLT, 2 × HINFÄLLIG,
1 × UNKLAR (#170), dazu die ⚠️-Bestätigungen. Die Rückfragen dazu wurden am 14.08. als Replies
in Pastel gestellt und dort beantwortet — siehe Abschnitt 5.

---

# 5. Durchgang 2 — nach den Kundenantworten vom 14.08.

Thorsten Sigges hat am 14.08. zwischen 08:47 und 13:09 auf **21 von 22** Rückfragen geantwortet.
Damit wurden 18 Punkte umsetzbar; vier weitere („Datei fehlt") erledigten sich, weil die Dateien
bereits im Repo unter `Kunden Input/Bilder/` lagen.

## 5.1 Commits

Ein Commit pro Punkt, Format `feedback(2026-08-10-2153): #NR kurzbeschreibung`.
Nicht gepusht, nicht deployed.

| Commit | Punkt | Kurzbeschreibung |
|---|---|---|
| `26a63ee` | #83/#88 | erste Karte „Vom Chip bis zum System" entfernt |
| `f85a4ab` | #90 | alle vier Kennzahlen der Track-Record-Sektion entfernt |
| `3efbd01` | #102 | untere Trunk-Kacheln der V-Grafik visuell zurückgenommen |
| `417b02f` | #78/#166 | neue Kundenbilder eingebaut |
| `e948e29` | #178–#180 | drei Ressourcen-Links im Footer entfernt |
| `3109700` | #162 | Support-Dropdown aus dem Kopfmenü entfernt |
| `ffffa33` | #92 | Absatz unter „Wide-Bandgap at the Core" neu getextet |
| `ef810b9` | #93/#94 | zwei Bilder auf der WBG-Seite ersetzt |
| `6b00cb3` | #96 | Patentseite auf Halbleiter/Module und Packaging reduziert |
| `2b051fd` | #97 | Patentseite entlinkt und auf noindex gesetzt |
| `f99c913` | #175 | News-Bereich entlinkt und auf noindex gesetzt |
| `838a761` | #176 | Thema Grüner Wasserstoff überall entfernt |
| `9a3d7a5` | #89 | IEA-Nennungen neutral umformuliert |
| `4f324c5` | #170 | Quellen und Firmennamen von der SiC-Seite entfernt |
| `70959b6` | #89 | Quellen und Firmennamen von der GaN-Seite entfernt |
| `b0737db` | #175/#89 | NVIDIA aus den News-Teasern entfernt |
| `2737cbf` | #177 | Begriff „Agentic AI" entfernt, Route umbenannt |
| `d35da00` | #117 | Process-Flow als nummerierte Prozessleiste |

Zeilenbilanz über alle 18 Commits: **33 Dateien, +193 / −491 Zeilen**, dazu sieben neue
Bilddateien in `public/images/`.

## 5.2 Was pro Datei passiert ist

| Datei | Punkte | Änderung |
|---|---|---|
| `components/WhyVerotera.tsx` | #83/#88, #176 | Erste Badge-Karte entfernt (JSX-Array DE+EN, `BADGE_ICONS`, `BADGE_HIGHLIGHTS`, verwaister `Layers`-Import); Raster 3 → 2 Spalten mit `max-w-4xl`. Wasserstoff aus der Aufzählung. |
| `components/StatsSection.tsx` | #90 | Kennzahlen-Raster, `stats`-Feld (Typ + DE + EN), Komponente `SafeCounter` und die Hooks `useEffect/useState/useRef/useInView` entfernt. Linke Spalte trägt nur noch den Header. |
| `components/VModelFunnel.tsx` | #102, #177 | `muted: true` auch auf die drei `TRUNK`-Kacheln; Bildbeschreibung ohne „agentische KI". |
| `components/ValueStatement.tsx` | #78, #176 | Fünf Mission-Kacheln auf die neuen `aa_*_new`-Dateien; Wasserstoff-Kachel entfernt, Raster 5 → 4 Spalten. |
| `components/WbgModuleSolutions.tsx` | #166 | `chip-fabrication.png` → `aa-wafer-dies-sic.png`. |
| `components/Footer.tsx` | #178–#180 | Drei Ressourcen-Links entfernt (DE+EN). |
| `components/Header.tsx` | #162, #175, #176, #177 | Support-Dropdown, News-Punkt und Wasserstoff-Punkt entfernt; Lösungs-Link auf die neue Route. |
| `components/Hero.tsx` | #177 | CTA-Ziel und Bild-Alt auf den neuen Namen. |
| `solutions/wbg-power-modules/page.tsx` | #92, #93, #94 | Neuer Absatz DE+EN wörtlich übernommen; zwei Bilder getauscht. |
| `resources/patents/page.tsx` | #96, #97 | Aussage zum KI-Systems-Engineering an vier Stellen entfernt (Hero-Unterzeile, Intro, dritte Karte, Meta-Description), Raster 3 → 2; `noindex`. |
| `news/page.tsx`, `applications/hydrogen/page.tsx` | #175, #176 | `noindex`. |
| `lib/seo.ts` | #97, #175, #176 | Neues optionales `PageMeta.noindex` → setzt `robots: { index:false, follow:false }`. |
| `app/sitemap.ts` | #97, #175, #176, #177 | Drei Routen entfernt (mit Begründungskommentar), eine umbenannt. |
| `site-map/page.tsx` | #97, #175, #176, #177 | Vier Einträge entfernt bzw. umbenannt, DE+EN. |
| `about/page.tsx` | #176, #177 | Karte „Green Hydrogen" (+ `Droplets`-Import), Wasserstoff im Fließtext; „Agentic AI" ersetzt. |
| `careers/page.tsx` | #177 | Vier Nennungen ersetzt, inkl. Stellentitel. |
| `technology-spotlight-silicium-carbide/page.tsx` | #170, #176 | Sektion „Schlüsseltrends" komplett entfernt (JSX, DE, EN, Typ, `TREND_ICONS`, drei Icon-Importe); alle Quellenzeilen; Roadmap auf PV/Speicher umgestellt. **−192 Zeilen.** |
| `technology-spotlight-gallium-nitride/page.tsx` | #89 | Alle Quellenzeilen und Hersteller-Zuschreibungen; Trend 2 auf technische Bezeichnungen. |
| `rack-power-distribution`, `automotive-emobility` | #89 | IEA neutral umformuliert, Zahlen unverändert. |
| `data/news.ts` | #175, #176, #177 | Wasserstoff-Beitrag entfernt, NVIDIA raus, Engineering-Core-Teaser umbenannt. |
| `next.config.ts` | #177 | Permanente Weiterleitung `/solutions/agentic-ai-engineering` → `/solutions/deterministic-engineering-core`, DE und EN. |
| `app/[lang]/layout.tsx`, `app/[lang]/page.tsx` | #176 | SEO-Stichwort „Grüner Wasserstoff" / „Green hydrogen". |

**Verzeichnis-Umbenennung:** `src/app/[lang]/solutions/agentic-ai-engineering` →
`…/deterministic-engineering-core` per `git mv`, damit die History erhalten bleibt.

## 5.3 Verifikation

- `npx tsc --noEmit` nach jedem Commit grün.
- `npm run lint` → 0 Fehler. Eine Warnung (`CX` unbenutzt in `VModelFunnel.tsx`) bestand vorher
  schon und gehört nicht zu dieser Runde.
- `npm run build` grün; alle Routen prerendern in **beiden** Sprachen, die neue Route ist dabei.
- `node <skill>/scripts/verify-runde.mjs feedback/2026-08-10-2153/pruefung.json`
  → **150 Prüfungen, 0 Abweichungen** (11 Routen × DE/EN, Produktionsbuild auf Port 3002).
- Prozessleiste (#117) im Browser gegen die Geometrie geprüft: Desktop vier Kreise auf einer
  Linie (x 300 → 972 bei y 937, Beschriftung darunter), Mobil untereinander gestapelt.
  Keine Konsolenfehler.

Vier Abweichungen im ersten Prüflauf waren **Manifest-Fehler, keine Code-Fehler** — die
Suchbegriffe „Vom Chip bis zum System", „Schlüsselparameter" und „Band gap" kommen auf der Seite
in anderer Form vor. Nach Korrektur der Suchbegriffe grün.

## 5.4 Bewusste Nebenwirkungen

- **Die Ressourcen-Spalte im Footer enthält nur noch „Site Map".** Die drei Seiten dahinter
  existieren weiter und sind über die Site-Map erreichbar — bewusst nicht zusätzlich auf
  `noindex` gesetzt, weil das nicht gefragt war (Rückfrage gestellt).
- **`aa-wafer-dies-sic.png` erscheint zweimal** (Startseite #166 und WBG-Seite #93). Vom Kunden
  ausdrücklich als Zwischenlösung akzeptiert.
- **Die Überschrift „Zahlen sprechen lauter als Technologie-Schlagworte" steht ohne Zahlen da**
  (#90). Nicht eigenmächtig umformuliert — Rückfrage gestellt.
- **Zwei Sektionen der WBG-Seite heißen jetzt fast gleich** (#92) — Rückfrage gestellt.
- **Der Seitentitel der Engineering-Core-Seite ist in beiden Sprachen englisch.** Das war schon
  vorher so (der gelieferte Meta-Titel war englisch) und wurde nicht verändert.
- **Tote Komponenten nicht angefasst:** `Industries.tsx`, `ExplainSection.tsx`, `Solutions.tsx`
  und `NewsInsights.tsx` werden nirgends importiert. Sie enthalten noch Wasserstoff- bzw.
  News-Strings, rendern aber nicht. Aufräumen wäre eine eigene Aufgabe.
- **Sektions-Kommentare im JSX behalten ihre alte Nummerierung** — wie in Durchgang 1.

## 5.5 Was offen bleibt

| Kategorie | Punkte |
|---|---|
| Unbeantwortet, blockiert Arbeit an zwei Seiten | **#169** |
| Umgesetzt unter Annahme, warten auf Bestätigung | #89 (GaN-Trend-2), #176 (Seite bleibt bestehen), #90 (Überschrift), #92 (Sektionsdopplung) |
| Abgeschlossen, Board auf `resolved` (2026-08-21) | #177 — Slug, EN-Titel und die Begriffe außerhalb der Seite bleiben wie umgesetzt |
| Datei fehlt | #109, #167 |
| Altlasten Vorrunde, weiterhin ohne Antwort | #91 (Ersatzbild), #95 (LinkedIn-URL), #100, #112, #133–#141, #160, Tippfehler-Regel |

Kundenfassung: [RUECKFRAGEN-KUNDE.md](RUECKFRAGEN-KUNDE.md).
