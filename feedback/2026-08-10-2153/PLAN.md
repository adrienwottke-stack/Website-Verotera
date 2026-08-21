# Umsetzungsplan — Runde 2026-08-10-2153

Zuordnung aller 53 Punkte aus [FEEDBACK.md](FEEDBACK.md).

Grundlage: Kommentartext + Screenshot (der gestrichelte Rahmen markiert das Zielelement) +
Abgleich mit der Quelldatei. Kein Code geändert.

---

## Stand 2026-08-15 — Durchgang 2 abgeschlossen

Der Kunde hat am **14.08.** direkt im Pastel-Board auf **21 von 22** Rückfragen geantwortet.
Die Triage unten stammt vom 11.08. und beschreibt den Stand **vor** diesen Antworten; sie bleibt
als Nachweis stehen. Was daraufhin gebaut wurde, steht in [UMSETZUNG.md](UMSETZUNG.md)
Abschnitt 5, was noch offen ist in [RUECKFRAGEN-KUNDE.md](RUECKFRAGEN-KUNDE.md).

| | Punkte |
|---|---|
| ✅ Durch die Antworten umgesetzt (18 Commits) | #83, #88, #89, #90, #92, #93, #94, #96, #97, #102, #117, #162, #170, #175, #176, #177, #178, #179, #180 |
| ✅ Erledigt, weil die Datei doch im Repo lag | #78, #166 (und damit #93/#94) |
| ✅ Ohne Änderung bestätigt | #82, #86, #87, #164 |
| ⚠️ Umgesetzt unter Annahme, Bestätigung offen | #89 (GaN-Trend-2), #90 (Überschrift), #92 (Sektionsdopplung), #176 (Seite bleibt) |
| ✅ Abgeschlossen, im Board auf `resolved` | #177 — Annahmen am 2026-08-21 abgenickt, Karriere-Stellentitel ausdrücklich unstrittig |
| 🔴 Unbeantwortet, blockiert zwei Seiten | **#169** |
| ⬜ Datei fehlt weiterhin | #109, #167 |
| ⬜ Altlasten Vorrunde, weiterhin ohne Antwort | #91, #95, #100, #112, #133–#141, #160, Tippfehler-Regel |

Prüfnachweis: `pruefung.json` → **150 Prüfungen, 0 Abweichungen**, `npm run lint` und
`npm run build` grün.

---

## Das Wichtigste zuerst: 46 der 53 Punkte sind nicht neu

Diese Runde ist **kein neuer Feedback-Stand**, sondern zu großen Teilen ein erneuter Export
derselben Pastel-Kommentare wie in Runde [2026-08-01-2052](../2026-08-01-2052/FEEDBACK.md).

| | Punkte |
|---|---|
| Schon in der Vorrunde enthalten | **46** |
| Wirklich neu (erst nach dem 2026-08-01 kommentiert) | **7** — #170, #171, #172, #173, #174, #175, #176 |

Und, entscheidender:

> **27 der 53 Punkte sind am 2026-08-02 bereits im Code umgesetzt worden** — einzeln committet und
> im Arbeitsverzeichnis stichprobenhaft verifiziert (`AUTO_MS = 5000`, „Smart PDU"-Satz weg,
> „Human-in-the-Loop by design" drin, Sektion 4 der RPD-Seite weg, IEA-Quelle weg usw.).

Alle 27 stammen aus dem Zeitraum 24.–31.07., also **vor** der Umsetzung. Sie stehen nur deshalb
wieder im Export, weil sie in Pastel nie auf „resolved" gesetzt wurden. Keiner der neuen
Kommentare (03.08. / 07.08.) widerspricht einer der Umsetzungen.

**Zwei Dinge sind vor der nächsten Runde zu klären:**

1. Wer hakt die erledigten Kommentare in Pastel ab? Sonst kommt derselbe Stapel in jeder Runde
   erneut zurück und die Liste wird nie kürzer.
2. Sieht der Kunde den aktuellen Stand überhaupt? Der Review läuft auf
   `website-verotera.vercel.app`. Die Umsetzungen liegen auf `origin/main`, wurden aber lokal nie
   nachgezogen — bitte einmal gegenprüfen, dass Vercel den Stand von `main` ausliefert.

---

## Kategorien

| Kategorie | Bedeutung | Anzahl |
|---|---|---|
| **UMSETZBAR** | Datei und Änderung sind klar | **26** |
| **ENTSCHEIDUNG** | fachliche/inhaltliche Frage, die du oder der Kunde klären muss | **19** |
| **ASSET_FEHLT** | braucht ein Bild/eine Datei, die nicht im Repo liegt | **5** |
| **HINFÄLLIG** | Antwort im Thread hebt den Punkt auf | **2** |
| **UNKLAR** | Text + Screenshot reichen nicht zur Identifikation | **1** |
| | **Summe** | **53** |

Die Kategorie beschreibt die **Natur** des Punktes, unabhängig davon, ob er schon umgesetzt ist.
Der Umsetzungsstand steht in der Spalte `Stand`:

- ✅ = am 2026-08-02 umgesetzt und verifiziert
- ⚠️ = umgesetzt, aber unter einer Annahme, die noch bestätigt werden muss
- ⬜ = nicht angefasst

**Nur 4 Punkte der ganzen Runde sind offene, sofort machbare Arbeit:** #171–#174.

## Dateikürzel

| Kürzel | Pfad |
|---|---|
| `GAN` | `src/app/[lang]/solutions/technology-spotlight-gallium-nitride/page.tsx` |
| `SIC` | `src/app/[lang]/solutions/technology-spotlight-silicium-carbide/page.tsx` |
| `WBG` | `src/app/[lang]/solutions/wbg-power-modules/page.tsx` |
| `RPD` | `src/app/[lang]/solutions/rack-power-distribution/page.tsx` |
| `AAE` | `src/app/[lang]/solutions/agentic-ai-engineering/page.tsx` |

---

## Seite `/` (Landing Page) — 34 Punkte

| Nr | Kategorie | Datei / Stelle | Sprache | Stand | Begründung |
|---|---|---|---|---|---|
| #75 | **ENTSCHEIDUNG** | `ValueStatement.tsx` → `IMAGE_SOURCES`, seitenweit | — | ⬜ | „Bildstil nicht einheitlich" ist Kritik ohne Zielvorgabe — es muss erst feststehen, welcher Stil gilt. |
| #76 | UMSETZBAR | `Hero.tsx` → `AUTO_MS` (Z. 80) | n/a (Konstante) | ✅ | Auto-Rotation 6500 → 5000 ms. |
| #77 | UMSETZBAR | `Hero.tsx` → Controls-Bar | n/a (Layout) | ✅ | Feste Pfeil-Buttons links/rechts vom Bild ab `lg:`. |
| #78 | **ASSET_FEHLT** | `ValueStatement.tsx` → `IMAGE_SOURCES` (5 Kacheln) | — | ⬜ | `aa_data_center_new`, `aa_emobilit_new`, `aa_hydrogen_new`, `aa_renewable_new`, `aa_robotics_new` liegen nur in SharePoint. |
| #79 | UMSETZBAR | `Hero.tsx` → `SLIDES.*[2].title` | beides | ✅ | „AI-Enhanced WBG Semiconductor Engineering", DE+EN identisch. |
| #80 | UMSETZBAR | `Hero.tsx` → `SLIDES.*[2].subtitle` | beides | ✅ | Neuer Sub-Header in DE und EN geliefert. |
| #81 | UMSETZBAR | `Hero.tsx` → `SLIDES.*[2].text` | beides | ✅ | Neue Value Proposition in DE und EN geliefert. |
| #82 | **HINFÄLLIG** | `WhyVerotera.tsx` → `panelTitle` | — | ⬜ | Betrifft dieselbe Sektion wie #87; die dortige Thread-Antwort („bewusst englisch, akzeptables Stilmittel") deckt den Fall mit ab. |
| #83 | **ENTSCHEIDUNG** | `WhyVerotera.tsx` → `badges[0].description` | — | ⬜ | „Botschaft muss geändert werden" ohne Ersatztext. |
| #84 | UMSETZBAR | `Hero.tsx` → `SLIDES.*[1].text` | beides | ✅ | Smart-PDU-Satz ersatzlos entfernt. |
| #85 | UMSETZBAR | `Hero.tsx` → `SLIDES.*[0].text` | beides | ✅ | Zweiter Satz „Vom Chip bis zum System …" entfernt. |
| #86 | **ENTSCHEIDUNG** | `ValueStatement.tsx` → `closing` | — | ⚠️ | Kunde stellt frei „entweder hier weglassen oder unten entfernen" — umgesetzt wurde die obere Variante; die Wahl ist unbestätigt. |
| #87 | **HINFÄLLIG** | `WhyVerotera.tsx` → `panelMeta` | — | ⬜ | Explizite Thread-Antwort von Thorsten Sigges (28.07.): bewusst englisch, bleibt. |
| #88 | **ENTSCHEIDUNG** | `WhyVerotera.tsx` → Badge-Grid | — | ⬜ | Rahmen sitzt nur auf Karte 1, Text sagt „dieser Abschnitt" — Umfang offen, dazu das „evtl.". |
| #89 | **ENTSCHEIDUNG** | `ElectrifiedWorld.tsx` → `source` | — | ⚠️ | Rechtefrage zur IEA-Zitierung, die der Kunde selbst offen lässt; entfernt wurde nur die Landingpage-Stelle (Konflikt 1). |
| #90 | **ENTSCHEIDUNG** | `StatsSection.tsx` → `stats[0..3]` | — | ⬜ | Rahmen nur auf Karte „100+", Text spricht von „diese Zahlen" (Plural) und ist als Meinung formuliert. |
| #98 | UMSETZBAR | `FeaturesAgenticAI.tsx` → `teaser` | beides | ✅ | „Früher. Belegbar. Belastbar." / „Earlier. Documented. Dependable." |
| #99 | UMSETZBAR | `FeaturesAgenticAI.tsx` → `headline` | beides | ✅ | „Technologieentscheidungen in der Konzeptphase", DE+EN. |
| #100 | UMSETZBAR | `FeaturesAgenticAI.tsx` → `body` | beides | ✅ | Tippfehler still korrigiert; EN-Einleitungssatz bewusst nicht ins DE übernommen (offene Rückfrage). |
| #101 | UMSETZBAR | `VModelFunnel.tsx` → SVG-Label | beides | ✅ | „Agentic AI" → „AI-Enhanced Engineering", zweizeilig gesetzt. |
| #102 | **ENTSCHEIDUNG** | `VModelFunnel.tsx` → rechte V-Seite | — | ⚠️ | Kunde bietet zwei Varianten an und markiert sie als optional; umgesetzt wurde „visuell zurücknehmen". |
| #103 | UMSETZBAR | `AgenticEcosystem.tsx` → Eyebrow | beides | ✅ | Neuer Key `sectionEyebrow`, vorher hartkodiert und einsprachig. |
| #104 | UMSETZBAR | `AgenticEcosystem.tsx` → `lead` (H2) | beides | ✅ | „Die KI erweitert das Ingenieururteil …", DE+EN. |
| #105 | UMSETZBAR | `AgenticEcosystem.tsx` → `title` + `sub` | beides | ✅ | Titel „Human-in-the-Loop by design", Key `sub` komplett entfernt. |
| #106 | UMSETZBAR | `AgenticEcosystem.tsx` → `intro` | beides | ✅ | Tippfehler `ist sources` → `its sources` korrigiert. |
| #107 | UMSETZBAR | `AgenticEcosystem.tsx` → `bullets` | beides | ✅ | 5 → 4 Punkte, DE+EN, drei Tippfehler korrigiert. |
| #108 | UMSETZBAR | `AgenticEcosystem.tsx` → `closing` | beides | ✅ | „So wird aus einer riskanten Frühentscheidung …", DE+EN. |
| #109 | **ASSET_FEHLT** | `AgenticEcosystem.tsx` → `<Image src="/images/agentic-ai-system.png">` | — | ⬜ | `aa-engineering-core` liegt in SharePoint, nicht in `public/images/`. |
| #110 | UMSETZBAR | `Header.tsx` → `NAV` Lösungen-Dropdown | beides | ✅ | Umbenennung in beiden Sprach-Arrays. |
| #161 | UMSETZBAR | `WhyVerotera.tsx` → `badges[3]` + Icons/Highlights | beides | ✅ | Vierte Karte entfernt, Grid auf `md:grid-cols-3`, `Zap`-Import weg. |
| #162 | **ENTSCHEIDUNG** | `Footer.tsx` → `support` | — | ⚠️ | „Nur eine der drei reicht" sagt nicht, welche bleibt; entfernt wurde der doppelte Footer-Link, Header-Dubletten stehen noch. |
| #163 | UMSETZBAR | `Footer.tsx` → `resources.links[3]` | beides | ✅ | Footer-Link „Patente"/„Patents" entfernt. |
| #164 | **ENTSCHEIDUNG** | `AdvancedPackaging.tsx` → ganze Sektion | — | ⬜ | „Sollte anders dargestellt werden" ohne Zielform. |
| #166 | **ASSET_FEHLT** | `WbgModuleSolutions.tsx` → `<Image src="/images/chip-fabrication.png">` | — | ⬜ | `aa-wafer-dies-sic.png` liegt nicht im Repo. |

**Zwischensumme:** 20 UMSETZBAR · 9 ENTSCHEIDUNG · 3 ASSET_FEHLT · 2 HINFÄLLIG · 0 UNKLAR
**Stand:** 20 ✅ · 4 ⚠️ · 10 ⬜ — **keine offene machbare Arbeit auf dieser Seite.**

---

## Seite `/solutions/technology-spotlight-gallium-nitride` — 5 Punkte

Die einzige Seite mit neuer, sofort machbarer Arbeit. #171–#174 sind vier Sektions-Löschungen
nach demselben Muster: der Rahmen sitzt jeweils auf der Eyebrow, gemeint ist die Sektion bis zur
nächsten Eyebrow. Ausgelassen wurde bewusst „Trend 2" (800-VDC-Rack mit CTA auf die VEROTERA-PDU)
— das stützt die Begründung „nur VEROTERA relevante Beiträge".

| Nr | Kategorie | Datei / Stelle | Sprache | Stand | Begründung |
|---|---|---|---|---|---|
| #169 | **ENTSCHEIDUNG** | `GAN` + `SIC` (ganze Seiten) + 6 Verweisstellen | — | ⬜ | Wie bei #97 offen, ob gelöscht oder nur entlinkt wird — mit SEO- und Redirect-Folgen. |
| #171 | UMSETZBAR | `GAN` JSX 963–1028 + COPY 216–250 (de) / 516–550 (en) + Typ 78–88 | beides | ✅ | Rahmen auf „TREND 1 · FRAUNHOFER IAF" = Sektion „Vertikale GaN Power-ICs", reine Fremdquelle. |
| #172 | UMSETZBAR | `GAN` JSX 1104–1152 + COPY 288–325 / 588–625 + Typ 100–106 | beides | ✅ | Rahmen auf „TREND 3 · EPC" = Sektion „GaN in humanoider Robotik" (3 Karten). |
| #173 | UMSETZBAR | `GAN` JSX 1154–1195 + COPY 326–357 / 626–657 + Typ 107–113 | beides | ✅ | Rahmen auf „MARKTSTRUKTUR" = Sektion „Marktstruktur & Ökosystem-Konsolidierung". |
| #174 | UMSETZBAR | `GAN` JSX 1232–1277 + COPY 398–435 / 698–735 + Typ 120–127 | beides | ✅ | Rahmen auf „AUSBLICK & TECHNOLOGIE-ROADMAP" = Sektion „Von der Technologieverheißung zur Produktionsrealität". |

**Zwischensumme:** 4 UMSETZBAR · 1 ENTSCHEIDUNG

> **Achtung, Reihenfolge:** #171–#174 löschen Sektionen **innerhalb** der Seite, die #169 als
> Ganzes streichen will. Wird #169 als „löschen" beantwortet, sind #171–#174 hinfällig — die
> Arbeit wäre umsonst. Deshalb: **erst #169 klären, dann #171–#174 umsetzen.**

Nach den Löschungen werden folgende Importe verwaist (sonst ESLint-Fehler):
`ArrowDown` (#171), `Bot`/`Radar`/`Cpu` + `ROBOTICS_ICONS` (#172), `CheckCircle2` (#174).

---

## Seite `/solutions/wbg-power-modules` — 5 Punkte

| Nr | Kategorie | Datei / Stelle | Sprache | Stand | Begründung |
|---|---|---|---|---|---|
| #91 | **ENTSCHEIDUNG** | `WBG` → `/images/sic-gan-car.png` | — | ⬜ | „Bildstil wie auf der Landingpage" trägt nicht, solange dort #75 selbst offen ist. |
| #92 | **ENTSCHEIDUNG** | `WBG` → `COPY.*.s2Body` | — | ⬜ | „Text ändern" ohne Ersatztext und ohne Angabe, was stört. |
| #93 | **ENTSCHEIDUNG** | `WBG` → `/images/power-module-ai-fol-2.png` | — | ⬜ | „Bild ändern" ohne Angabe, was das neue Bild zeigen soll. |
| #94 | **ASSET_FEHLT** | `WBG` → `/images/power-electronics-emobility-automotive.png` | — | ⬜ | Änderung ist konkret (seitliche Pins weg), braucht aber eine retuschierte Datei — die Pins sind ins PNG eingebrannt. |
| #95 | **ENTSCHEIDUNG** | `Footer.tsx` → `https://www.linkedin.com/company/verotera` (+ `seo.ts` `sameAs`) | — | ⬜ | Markup ist korrekt, der Slug offenbar falsch; die richtige URL muss vom Kunden kommen. Wirkt global, nicht nur auf dieser Seite. |

**Zwischensumme:** 4 ENTSCHEIDUNG · 1 ASSET_FEHLT — **kein Punkt durch uns blockiert.**

---

## Seite `/solutions/rack-power-distribution` — 3 Punkte

| Nr | Kategorie | Datei / Stelle | Sprache | Stand | Begründung |
|---|---|---|---|---|---|
| #165 | UMSETZBAR | `RPD` → `s2Cards[0].text` (de) + EN-Pendant | **DE geliefert, EN selbst übersetzt** | ✅ | Text lag nur auf Deutsch vor; EN nach SKELETON.md §0.4 selbst übersetzt. `text` ist jetzt ein Absatz-Array. |
| #167 | **ASSET_FEHLT** | `RPD` → `PduPowerArchitecture.tsx` | — | ⬜ | „Blockdiagramm aus der PPT" — die PPT liegt nicht im Repo (`Kunden Input/` enthält keine). |
| #168 | UMSETZBAR | `RPD` → Sektion 4 „800 VDC vs. AC/DC" | beides | ✅ | Sektion inkl. `s4*`-COPY, `S4_ICONS` und verwaister Importe entfernt. |

**Zwischensumme:** 2 UMSETZBAR · 1 ASSET_FEHLT

---

## Seite `/resources/patents` — 2 Punkte

| Nr | Kategorie | Datei / Stelle | Sprache | Stand | Begründung |
|---|---|---|---|---|---|
| #96 | **ENTSCHEIDUNG** | `resources/patents/page.tsx` → `heroSubtitle` u. a. | — | ⬜ | Sachfrage, ob KI-Systems-Engineering wirklich patentiert wird — nur der Kunde weiß das. |
| #97 | **ENTSCHEIDUNG** | `resources/patents/` + `sitemap.ts` + `site-map` | — | ⬜ | „Erstmal weglassen" lässt offen, ob Route gelöscht oder nur entlinkt wird; Löschung ohne Redirect erzeugt 404 auf indexierten URLs. |

**Zwischensumme:** 2 ENTSCHEIDUNG. Der Footer-Link ist über #163 schon weg; #96 erledigt sich mit,
falls #97 „löschen" lautet.

---

## Seite `/solutions/agentic-ai-engineering` — 1 Punkt

Von 50 Punkten der Vorrunde ist genau einer übrig.

| Nr | Kategorie | Datei / Stelle | Sprache | Stand | Begründung |
|---|---|---|---|---|---|
| #117 | **ENTSCHEIDUNG** | `AAE` → `intro.pipeline[0..3]` | beides | ⚠️ | Die vier Labels sind in DE und EN geliefert und eingebaut — der Kommentar verlangt zusätzlich eine gestalterische Aufwertung des Process-Flows und richtet die Frage ausdrücklich an dich („Adrien: Hast Du eine Idee?"). Ohne gewählte Variante bleibt der Punkt offen. |

**Zwischensumme:** 1 ENTSCHEIDUNG

---

## Seite `/solutions/technology-spotlight-silicium-carbide` — 1 Punkt

| Nr | Kategorie | Datei / Stelle | Sprache | Stand | Begründung |
|---|---|---|---|---|---|
| #170 | **UNKLAR** | Verdacht: `SIC` JSX 676–724 + COPY 162–200 / 342–380 | — | ⬜ | `screens/170.jpg` ist ein CSS-loser Roh-Render **ohne** gestrichelten Rahmen; der Pin sitzt neben „Bandlücke: 3,3 eV", was inhaltlich nicht zum Kommentar über News passt. |

**Zwischensumme:** 1 UNKLAR — der einzige Punkt der Runde, der sich nicht identifizieren lässt.

Zwei Lesarten, beide plausibel:

- **(a)** gemeint ist der Abschnitt „Berichtet in Bodo's Power Systems / Schlüsseltrends" (JSX 676–724)
  — das ist stilistisch exakt das Gegenstück zu #171/#172, und #171 sagt fünf Minuten später
  „**Auch** diesen Teil löschen", setzt also einen Vorgänger voraus.
- **(b)** gemeint ist die ganze SiC-Seite als „News-Beitrag in diesem Stil".

(a) geht als Arbeitshypothese in die Rückfrage — **nicht blind umsetzen.**

---

## Seite `/news` — 1 Punkt

| Nr | Kategorie | Datei / Stelle | Sprache | Stand | Begründung |
|---|---|---|---|---|---|
| #175 | **ENTSCHEIDUNG** | `src/app/[lang]/news/` + `src/data/news.ts` + 4 Verweisstellen | beides | ⬜ | Auf Seitenebene eindeutig; offen ist nur „löschen vs. ‚vorerst' entlinken" und was `/news` und `/en/news` danach ausliefern (404 oder Redirect). |

**Zwischensumme:** 1 ENTSCHEIDUNG

Was mit muss, wenn entschieden ist:

| Datei | Stelle |
|---|---|
| `src/app/[lang]/news/page.tsx` | ganzes Verzeichnis, enthält nur diese Datei |
| `src/data/news.ts` | wird nur von der News-Seite und `NewsInsights.tsx` importiert |
| `src/components/Header.tsx` | Z. 51 (DE) / Z. 91 (EN), Top-Level-Nav, gilt auch mobil |
| `src/app/[lang]/site-map/page.tsx` | Z. 23 (DE) / Z. 81 (EN) |
| `src/app/sitemap.ts` | Z. 20 |
| `src/components/NewsInsights.tsx` | **toter Code** — wird nirgends gerendert, kann mit weg |

Der Footer enthält **keinen** News-Link. Die Landingpage zeigt **keinen** News-Teaser — #175 hat
dort also keine sichtbare Auswirkung.

---

## Seite `/applications/hydrogen` — 1 Punkt

| Nr | Kategorie | Datei / Stelle | Sprache | Stand | Begründung |
|---|---|---|---|---|---|
| #176 | **ENTSCHEIDUNG** | `src/app/[lang]/applications/hydrogen/page.tsx` + Nav/Sitemap/News | beides | ⬜ | Die Seite ist eindeutig, aber „das Thema Grüner Wasserstoff" steht auch in `about`, `ValueStatement`, `WhyVerotera`, auf der SiC-Seite und in den SEO-Keywords — wie weit gestrippt wird, muss ein Mensch entscheiden. |

**Zwischensumme:** 1 ENTSCHEIDUNG

**Harter Kern** (stirbt mit der Route): `applications/hydrogen/page.tsx` · `Header.tsx` Z. 32/72 ·
`site-map` Z. 43/101 · `sitemap.ts` Z. 16 · News-Eintrag `news.ts` 45–55/110–120 ·
`public/images/hydrogen-aem-electrolyzer.jpg` wird verwaist.

**Nicht automatisch betroffen — das ist die eigentliche Frage:** `ValueStatement.tsx` Z. 26/39
(Text + Bild), `WhyVerotera.tsx` Z. 29/58, `about/page.tsx` (eigene Karte „Green Hydrogen"),
der ganze Wasserstoff-Abschnitt der SiC-Seite, sowie die Keywords in `layout.tsx` und `page.tsx`.
`public/images/green-hydrogen.png` bleibt an vier weiteren Stellen in Benutzung.

---

## Summen

### Pro Kategorie

| Kategorie | Anzahl | Nummern |
|---|---|---|
| **UMSETZBAR** | **26** | #76, #77, #79, #80, #81, #84, #85, #98, #99, #100, #101, #103, #104, #105, #106, #107, #108, #110, #161, #163, #165, #168, **#171, #172, #173, #174** |
| **ENTSCHEIDUNG** | **19** | #75, #83, #86, #88, #89, #90, #91, #92, #93, #95, #96, #97, #102, #117, #162, #164, #169, #175, #176 |
| **ASSET_FEHLT** | **5** | #78, #94, #109, #166, #167 |
| **HINFÄLLIG** | **2** | #82, #87 |
| **UNKLAR** | **1** | #170 |
| | **53** | |

### Pro Seite

| Seite | Punkte | UMSETZBAR | ENTSCHEIDUNG | ASSET_FEHLT | HINFÄLLIG | UNKLAR |
|---|---|---|---|---|---|---|
| `/` (Landing Page) | 34 | 20 | 9 | 3 | 2 | 0 |
| `/solutions/wbg-power-modules` | 5 | 0 | 4 | 1 | 0 | 0 |
| `/solutions/technology-spotlight-gallium-nitride` | 5 | 4 | 1 | 0 | 0 | 0 |
| `/solutions/rack-power-distribution` | 3 | 2 | 0 | 1 | 0 | 0 |
| `/resources/patents` | 2 | 0 | 2 | 0 | 0 | 0 |
| `/solutions/agentic-ai-engineering` | 1 | 0 | 1 | 0 | 0 | 0 |
| `/solutions/technology-spotlight-silicium-carbide` | 1 | 0 | 0 | 0 | 0 | 1 |
| `/news` | 1 | 0 | 1 | 0 | 0 | 0 |
| `/applications/hydrogen` | 1 | 0 | 1 | 0 | 0 | 0 |
| **Summe** | **53** | **26** | **19** | **5** | **2** | **1** |

### Pro Umsetzungsstand

| Stand | Anzahl | Nummern |
|---|---|---|
| ✅ umgesetzt und verifiziert | **26** | #76, #77, #79, #80, #81, #84, #85, #98, #99, #100, #101, #103, #104, #105, #106, #107, #108, #110, #161, #163, #165, #168 + **#171–#174 (am 2026-08-11 in dieser Runde umgesetzt)** |
| ⚠️ umgesetzt unter einer Annahme | **5** | #86, #89, #102, #117, #162 |
| ⬜ offen, **blockiert** | **22** | 14 × ENTSCHEIDUNG, 5 × ASSET_FEHLT, 2 × HINFÄLLIG, 1 × UNKLAR |

> **Update 2026-08-11:** #171–#174 wurden auf ausdrückliche Anweisung umgesetzt, obwohl #169
> (Seiten löschen oder entlinken?) noch offen ist. Wird #169 mit „löschen" beantwortet, sind die
> vier Commits obsolet — sie kosten dann nichts, die Seite verschwindet ohnehin. In FEEDBACK.md
> sind alle 26 UMSETZBAR-Punkte abgehakt (22 davon stammen aus der Vorrunde 2026-08-01-2052).

---

## Konflikte und Abhängigkeiten

1. **#169 → #171–#174** — die vier Sektions-Löschungen liegen in der Seite, die #169 komplett
   streichen will. Erst #169 klären, sonst ist die Arbeit umsonst. Dasselbe gilt für #170 auf der
   SiC-Seite.
2. **#175 → #169 / #170 / #176** — verschwindet `/news`, verschwinden auch die News-Teaser, die auf
   GaN-, SiC- und Hydrogen-Seite verlinken. Das entschärft die Redirect-Frage bei allen dreien.
   Reihenfolge: **#175 zuerst entscheiden.**
3. **#89 ↔ #165** — #89 will die IEA-Zitierung sicherheitshalber raus, der mit #165 eingebaute Text
   zitiert ausdrücklich „Die Internationale Energieagentur". IEA steht jetzt noch in `RPD` und in
   `applications/automotive-emobility`. Muss einheitlich entschieden werden.
4. **#75 ↔ #78 ↔ #91 ↔ #93 ↔ #166** — fünf Punkte zum selben Thema Bildstil, von zwei Reviewern.
   Nur als ein Paket mit einer Stilentscheidung lösbar.
5. **#96 ↔ #97** — verschwindet die Patent-Seite, erledigt sich die Patentaussage mit.
6. **#95 wirkt global** — die LinkedIn-URL steht in `Footer.tsx` und `seo.ts`, also auf jeder Seite,
   obwohl der Punkt unter `/solutions/wbg-power-modules` einsortiert ist.
7. **#176 ↔ #169** — der Wasserstoff-Abschnitt der SiC-Seite fällt nur mit, wenn #169 „löschen" lautet.

---

## Was jetzt zu tun ist

**Ohne Rückfrage machbar (4 Punkte):** #171, #172, #173, #174 — ✅ **erledigt am 2026-08-11** (auf Anweisung vor der #169-Antwort; siehe Update oben).

**Antwort nötig (14 Punkte):** #75, #83, #88, #90, #91, #92, #93, #95, #96, #97, #164, #169, #175, #176
Davon sind #169, #175, #176 neu und blockieren jeweils weitere Punkte — sie zuerst.

**Datei nötig (5 Punkte):** #78, #94, #109, #166, #167

**Nur zur Bestätigung (5 Punkte):** #86, #89, #102, #117, #162 — umgesetzt, aber unter einer Annahme.

**Zurückgestellt (2 Punkte):** #82, #87 — durch die Thread-Antwort erledigt.

**Nicht identifizierbar (1 Punkt):** #170 — Screenshot enthält keinen Rahmen, Rückfrage nötig.

Die ausformulierten Rückfragen der Vorrunde zu den 46 übernommenen Punkten stehen weiterhin in
[../2026-08-01-2052/RUECKFRAGEN-KUNDE.md](../2026-08-01-2052/RUECKFRAGEN-KUNDE.md) und sind
unverändert gültig. Neu zu formulieren sind nur die Rückfragen zu #170, #175 und #176.
