# Umsetzungsplan — Runde 2026-08-01-2052

Zuordnung aller 95 Punkte aus [FEEDBACK.md](FEEDBACK.md).

Grundlage: Kommentartext + Screenshot (der gestrichelte Rahmen im Pastel-Screenshot markiert
das Zielelement) + Abgleich mit der Quelldatei. Alle 95 Screenshots wurden ausgewertet.

> **Die Tabellen unten sind die ursprüngliche Analyse** (Stand: kein Code geändert). Was seitdem
> passiert ist, steht in „Status der Runde" direkt darunter und in den `Status`-Blöcken je Seite.

## Kategorien

| Kategorie | Bedeutung | Anzahl |
|---|---|---|
| **UMSETZBAR** | Datei und Änderung sind klar | **70** |
| **ASSET_FEHLT** | braucht ein Bild/eine Datei, die nicht im Repo liegt | **6** |
| **ENTSCHEIDUNG** | fachliche/inhaltliche Frage, die du oder der Kunde klären muss | **17** |
| **UNKLAR** | Text + Screenshot reichen nicht zur Identifikation | **0** |
| **HINFÄLLIG** | Antwort im Thread hebt den Punkt auf | **2** |

Kein einziger Punkt bleibt UNKLAR — der Rahmen im Screenshot war überall eindeutig.
Der Aufwand steckt woanders: **17 Punkte brauchen erst eine Antwort**, bevor sie angefasst werden können.

## Dateikürzel

| Kürzel | Pfad |
|---|---|
| `AAE` | `src/app/[lang]/solutions/agentic-ai-engineering/page.tsx` |
| `RPD` | `src/app/[lang]/solutions/rack-power-distribution/page.tsx` |
| `WBG` | `src/app/[lang]/solutions/wbg-power-modules/page.tsx` |
| `VMI` | `src/components/VModelInteractive.tsx` — **gelöscht mit #147**, ersetzt durch `src/components/SroObject.tsx` |

---

## Status der Runde (Stand 2026-08-02)

**76 von 95 Punkten sind abgehakt und committet, 19 sind offen.** Umgesetzt wurde nur, was
eindeutig war; kein Punkt wurde geraten.

Die Runde ist auf drei Dokumente verteilt — jedes hat genau eine Aufgabe:

| Datei | Inhalt |
|---|---|
| [FEEDBACK.md](FEEDBACK.md) | Die 95 Kundenkommentare mit Screenshot-Pfad und Abhak-Status; unten die ausformulierten Rückfragen zum Einfügen ins Pastel-Canvas |
| **PLAN.md** (dieses Dokument) | Einordnung jedes Punktes, Zählstand, Konflikte, offene Entscheidungen |
| [UMSETZUNG.md](UMSETZUNG.md) | Protokoll auf Code-Ebene: welche Datei wurde warum wie geändert, wie wurde verifiziert |

| Seite | Punkte | abgehakt | offen | offene Nummern |
|---|---|---|---|---|
| `/solutions/agentic-ai-engineering` | 50 | 48 | 2 | #112, #160 |
| `/` (Landing Page) | 34 | 26 | 8 | #75, #78, #83, #88, #90, #109, #164, #166 |
| `/solutions/wbg-power-modules` | 5 | 0 | 5 | #91, #92, #93, #94, #95 |
| `/solutions/rack-power-distribution` | 3 | 2 | 1 | #167 |
| `/resources/patents` | 2 | 0 | 2 | #96, #97 |
| `/solutions/technology-spotlight-gallium-nitride` | 1 | 0 | 1 | #169 |
| **Summe** | **95** | **76** | **19** | |

Die 19 offenen Punkte teilen sich in zwei Gruppen — beide liegen beim Kunden, nicht bei uns:

| Grund | Anzahl | Nummern |
|---|---|---|
| **ENTSCHEIDUNG** — braucht eine Antwort | 13 | #75, #83, #88, #90, #91, #92, #93, #95, #96, #97, #112, #164, #169 |
| **ASSET_FEHLT** — braucht eine Datei | 6 | #78, #94, #109, #160, #166, #167 |

Von den ursprünglich 17 ENTSCHEIDUNG-Punkten sind vier inzwischen entschieden und umgesetzt
(#86, #89, #102, #162) — jeweils unter einer dokumentierten Annahme, die noch gegengeprüft
werden sollte. Details unten unter „Rückfragen an den Kunden".

### Wo die fertig formulierten Rückfragen liegen

Beide Blöcke stehen in [FEEDBACK.md](FEEDBACK.md) und sind zum Einfügen ins Pastel-Canvas gedacht:

| Abschnitt in FEEDBACK.md | Umfang | Sprache |
|---|---|---|
| „Rueckfragen an den Kunden" → `Seite /` | #75, #78, #83, #88, #90, #109, #164, #166 + vier Annahmen (#86, #89, #102, #162) | DE |
| „Rueckfragen ausserhalb der Landingpage" | #112, #113/#116/#120/#123, #117, #133–#141, #160, #91, #92, #93, #95, #165, #96, #97, #169 | DE + EN |

Ohne eigene Rückfrage sind bisher **#94** (retuschiertes Modul-Bild ohne seitliche Pins) und
**#167** (Blockdiagramm aus der PPT) — beide brauchen schlicht eine Datei.

---

## Seite `/solutions/agentic-ai-engineering` — 50 Punkte

Diese Seite wird faktisch komplett neu betextet. Die Sektionsreihenfolge im Code
(`intro` → `hitl` → `architecture` → `lifecycle` → `vmodel` → `wbg` → `roadmap` → `solutions`)
bleibt erhalten, drei Sektionen entfallen (`wbg`, `roadmap`, `solutions`).

| Nr | Kategorie | Datei / Stelle | Sprache | Begründung |
|---|---|---|---|---|
| #111 | UMSETZBAR | `AAE` → `heroEyebrow` | beides | Eyebrow-Pill „AI Systems Engineering" wird zum gelieferten englischen Begriff (in DE + EN identisch). |
| #112 | **ENTSCHEIDUNG** | `AAE` → `heroTitle` | — | Derselbe String wie #111 auf die H1 → Eyebrow und Überschrift wären wortgleich; einer von beiden braucht einen anderen Text. |
| #113 | UMSETZBAR | `AAE` → `heroSubtitle` | beides | Neuer Sub-Headline-Text liegt in DE und EN vor. |
| #114 | UMSETZBAR | `AAE` → `intro.eyebrow` | beides | „Vom Kontext zum Konzept" / „From Context to Concept" ersetzt den alten Eyebrow. |
| #115 | UMSETZBAR | `AAE` → `intro.headline` | beides | Neue Frage-Headline liegt in DE und EN vor. |
| #116 | UMSETZBAR | `AAE` → `intro.body` | beides | Neuer Body-Text liegt in DE und EN vor. |
| #117 | UMSETZBAR | `AAE` → `intro.pipeline[0..3]` | beides | Alle vier Pipeline-Labels sind in DE und EN geliefert; die zusätzlich gewünschte Design-Aufwertung ist eine offene Frage an dich (→ Rückfragen). |
| #118 | UMSETZBAR | `AAE` → `hitl.headline` | beides | „Entscheidungen brauchen Nachvollziehbarkeit" / „Decisions need traceability". |
| #119 | UMSETZBAR *(No-Op)* | `AAE` → `hitl.eyebrow` | beides | Steht bereits auf „Human-in-the-Loop" in DE und EN — nur abhaken, keine Code-Änderung. |
| #120 | UMSETZBAR | `AAE` → `hitl.body` | beides | Neuer Text in DE und EN vorhanden (Tippfehler → Rückfragen). |
| #121 | UMSETZBAR | `AAE` → `hitl.subEyebrow` | beides | Rahmen liegt exakt auf „MODEL-BASED SYSTEMS ENGINEERING", Anweisung ist „entfernen". |
| #122 | UMSETZBAR *(No-Op)* | `AAE` → `hitl.title` | beides | Rahmen auf „Der Mensch bleibt stets zentral", Anweisung „bleibt" — nur abhaken. |
| #123 | UMSETZBAR | `AAE` → `hitl.paragraphs[0]` | beides | Ersatztext in DE und EN geliefert (Tippfehler → Rückfragen). |
| #124 | UMSETZBAR | `AAE` → `hitl.paragraphs[1]` | beides | Zweiter Absatz wird ersatzlos gestrichen. |
| #125 | UMSETZBAR | `AAE` → `architecture.eyebrow` | beides | Eyebrow wird zu „Engineering Core" (DE/EN identisch). |
| #126 | UMSETZBAR | `AAE` → `architecture.headline` | beides | Neue Headline liegt in DE und EN vor. |
| #127 | UMSETZBAR | `AAE` → neuer Key `architecture.body` | beides | Text liegt vor; die Sektion hat bisher keinen Body — neuer COPY-Key + `<p>` unter der H2 (+ `mb-6` an der H2). |
| #128 | UMSETZBAR | `AAE` → `architecture.layers[0]` | beides | Tag/Titel/Text komplett ersetzt („01 — Orchestrierung"), DE und EN geliefert. |
| #129 | UMSETZBAR | `AAE` → `architecture.layers[1]` | beides | Ersetzt durch „02 — Wissensgraph", DE und EN geliefert. |
| #130 | UMSETZBAR | `AAE` → `architecture.layers[2]` | beides | Ersetzt durch „03 — Interpretation", DE und EN geliefert. |
| #131 | UMSETZBAR | `AAE` → `architecture.layers[3]` | beides | Ersetzt durch „04 — Absicherung", DE und EN geliefert. |
| #132 | UMSETZBAR | `AAE` → neues `architecture.layers[4]` + `LAYER_ICONS` (Z. 28) | beides | Fünfter Bereich „05 — Agent" wird ergänzt; `LAYER_ICONS` hat nur 4 Einträge und braucht ein fünftes lucide-Icon, sonst ist `Icon` undefined. |
| #133 | UMSETZBAR | `AAE` → `lifecycle.eyebrow` | beides | Eyebrow wird zu „Time-to-Market" (DE/EN identisch). |
| #134 | UMSETZBAR | `AAE` → `lifecycle.headline` | beides | Neue Headline liegt in DE und EN vor. |
| #135 | UMSETZBAR | `AAE` → `lifecycle.body` | beides | Neuer Body-Text liegt in DE und EN vor. |
| #136 | UMSETZBAR | `AAE` → `lifecycle.steps[0]` | beides | Karte 01 wird zu „Technologieklassen", DE und EN geliefert (→ Rückfrage zur Sektionslogik). |
| #137 | UMSETZBAR | `AAE` → `lifecycle.steps[1]` | beides | Karte 02 wird zu „Funktionsblöcke", DE und EN geliefert. |
| #138 | UMSETZBAR | `AAE` → `lifecycle.steps[2]` | beides | Karte 03 wird zu „Topologien", DE und EN geliefert. |
| #139 | UMSETZBAR | `AAE` → `lifecycle.steps[3]` | beides | Karte 04 wird zu „Regeln", DE und EN geliefert. |
| #140 | UMSETZBAR | `AAE` → `lifecycle.steps[4]` | beides | Karte 05 wird zu „Parametrische Modelle", DE und EN geliefert. |
| #141 | UMSETZBAR | `AAE` → `lifecycle.steps[5]` | beides | Karte 06 wird zu „Anforderungen", DE und EN geliefert. |
| #142 | UMSETZBAR | `AAE` → ganze `wbg`-Sektion (Z. 721–801) + `COPY.*.wbg` + `TOOL_ICONS` | beides | „Diesen Bereich löschen" — Rahmen sitzt auf dem Eyebrow, gemeint ist die komplette Sektion inkl. 2 Bilder, 2 Stats und 4 Tool-Cards. |
| #143 | UMSETZBAR | `AAE` → ganze `roadmap`-Sektion (Z. 803–833) + `COPY.*.roadmap` | beides | „Auch diesen Bereich löschen" — komplette Roadmap-Sektion mit den 4 Schritten entfällt. |
| #144 | UMSETZBAR | `AAE` → `vmodel.eyebrow` | beides | Eyebrow wird zu „Structured Requirement Object" (DE/EN identisch). |
| #145 | UMSETZBAR | `AAE` → `vmodel.headline` | beides | Neue Headline liegt in DE und EN vor. |
| #146 | UMSETZBAR | `AAE` → `vmodel.body` | beides | Neuer Body-Text liegt in DE und EN vor. |
| #147 | UMSETZBAR | `AAE` Z. 716 + neue Komponente statt `VMI` | beides | Design ist vorgegeben (abgerundete Rechtecke wie bisher), Inhalt kommt aus #151–#156 + #157 — Sammelanweisung, identisch mit #150. |
| #148 | UMSETZBAR | `VMI` → `UI[lang].eyebrow` (Z. 177/182) | beides | Widget-Eyebrow „Interaktives V-Modell" wird zu „SRO als maschinenlesbarer Export", DE und EN geliefert. |
| #149 | UMSETZBAR | `VMI` → `UI[lang].title` (Z. 178/183) | beides | Widget-Titel wird zu „Die Entscheidung als vollständiges, verlustfreies Objekt", DE und EN geliefert. |
| #150 | UMSETZBAR | wie #147 | beides | Reine Sammelanweisung („hier die 6 Elemente 01–06 einfügen"); Inhalt folgt in #151–#156. |
| #151 | UMSETZBAR | neues SRO-Element 01 | beides | „Anforderungen" — Headline + Text + Feldliste in DE und EN geliefert. |
| #152 | UMSETZBAR | neues SRO-Element 02 | beides | „Kandidaten & Herleitung" — vollständig in DE und EN geliefert. |
| #153 | UMSETZBAR | neues SRO-Element 03 | beides | „Offene Entscheidungen" — vollständig in DE und EN geliefert. |
| #154 | UMSETZBAR | neues SRO-Element 04 | beides | „Eskalation an den Menschen" — vollständig in DE und EN geliefert. |
| #155 | UMSETZBAR | neues SRO-Element 05 | beides | „Annahmen" — vollständig in DE und EN geliefert. |
| #156 | UMSETZBAR | neues SRO-Element 06 | beides | „Provenance" — vollständig in DE und EN geliefert. |
| #157 | UMSETZBAR | `VMI` → Terminal-Mock (Kopfzeile + Body) | beides | „Grafik beibehalten, anderer Inhalt": dunkles Terminal-Fenster bleibt, oben nur „SRO", darunter das gelieferte JSON; Bildunterschrift in DE und EN geliefert. |
| #158 | UMSETZBAR | neues Statement unter dem SRO-Block | beides | Abschluss-Statement liegt in DE und EN vor. |
| #159 | UMSETZBAR | `AAE` → ganze `solutions`-Navy-Sektion (Z. 835–880) + `COPY.*.solutions` | beides | „Auch diesen Bereich entfernen" — komplette Navy-Sektion inkl. Bild `ai-systems-gui.jpg` entfällt. |
| #160 | **ASSET_FEHLT** | — | — | Verweist auf ein Word-Dokument in SharePoint, das nicht im Repo liegt; ohne die Datei ist weder der gemeinte „Bereich" noch der Volltext prüfbar (kein Rahmen im Screenshot). |

**Zwischensumme:** 48 UMSETZBAR · 1 ENTSCHEIDUNG · 1 ASSET_FEHLT

**Status 2026-08-02:** Alle 48 UMSETZBAR-Punkte sind umgesetzt, in FEEDBACK.md abgehakt und
committet (`feedback(2026-08-01-2052): #NR …`). Offen bleiben #112 (ENTSCHEIDUNG) und
#160 (ASSET_FEHLT). Umbauten über die reine Textänderung hinaus:

- `LAYER_ICONS` neu belegt (`Workflow, Network, BrainCircuit, ShieldCheck, Bot`) für fünf Bereiche.
- Neuer COPY-Key `architecture.body` + `<p>` unter der H2 (#127); `hitl.subEyebrow` gestrichen (#121).
- Drei Sektionen entfernt (#142 `wbg`, #143 `roadmap`, #159 `solutions`) inkl. COPY-Blöcke,
  `TOOL_ICONS` und verwaister lucide-Importe.
- `VModelInteractive.tsx` gelöscht und durch die neue Server-Komponente
  `src/components/SroObject.tsx` ersetzt (#147/#150): sechs abgerundete Karten 01–06 plus
  JSON-Rechteck in der bisherigen Terminal-Optik, Kopfzeile nur noch „SRO".
- Neuer COPY-Key `vmodel.statement` für das Abschluss-Statement (#158).
- **#117 nur textlich umgesetzt** — die gewünschte gestalterische Aufwertung des Process-Flows
  ist eine offene Frage an Adrien (Rückfrage 3).
- **#133–#141 wie geliefert umgesetzt**, der Widerspruch aus Konflikt 2 (Header „Time-to-Market"
  über den sechs Wissensgraph-Bausteinen) besteht damit im Code — Rückfrage 2 bleibt offen.
- Tippfehler der gelieferten EN-Texte still korrigiert (`assessemnt`, `assessement`, `ist`→`its`,
  `stanf`→`stand`, `people´s hand`→`people's hands`) — konsistent zur Landing-Page-Runde.

---

## Seite `/` (Landing Page) — 34 Punkte

| Nr | Kategorie | Datei / Stelle | Sprache | Begründung |
|---|---|---|---|---|
| #75 | **ENTSCHEIDUNG** | `ValueStatement.tsx` → `IMAGE_SOURCES`, seitenweit | — | „Bildstil nicht einheitlich" ist eine Kritik ohne Zielvorgabe — es muss erst feststehen, welcher Stil gilt (hängt mit #78, #91, #93, #166 zusammen). |
| #76 | ✅ ERLEDIGT | `Hero.tsx` → `AUTO_MS` (Z. 80) | n/a (Konstante) | Umgesetzt: 6500 ms → 5000 ms. Commit `1a9405f`. |
| #77 | ✅ ERLEDIGT | `Hero.tsx` → Controls-Bar (Z. 196–237) | n/a (Layout) | Umgesetzt: neue fixe Pfeil-Buttons links/rechts vom Bild (nur `lg:`+), Leisten-Pfeile bleiben für kleinere Breakpoints. Commit `6a6d737`. |
| #78 | **ASSET_FEHLT** | `ValueStatement.tsx` → `IMAGE_SOURCES` (5 Kacheln) | — | Die genannten Dateien `aa_data_center_new`, `aa_emobilit_new`, `aa_hydrogen_new`, `aa_renewable_new`, `aa_robotics_new` liegen nicht in `public/images/`. |
| #79 | ✅ ERLEDIGT | `Hero.tsx` → `SLIDES.de[2].title` + `SLIDES.en[2].title` | beides | Umgesetzt: „AI-Enhanced WBG Semiconductor Engineering". Commit `c7c748f`. |
| #80 | ✅ ERLEDIGT | `Hero.tsx` → `SLIDES.*[2].subtitle` | beides | Umgesetzt: „Collaborative Intelligence …" DE+EN. Commit `6c984fd`. |
| #81 | ✅ ERLEDIGT | `Hero.tsx` → `SLIDES.*[2].text` | beides | Umgesetzt: „Technologiepfade früh bewerten …" DE+EN. Commit `3da3272`. |
| #82 | **HINFÄLLIG** | `WhyVerotera.tsx` → `panelTitle` | — | Betrifft „Collaborative Intelligence" in derselben Sektion wie #87; die Thread-Antwort dort („bewusst englisch, akzeptables Stilmittel, findet sich an anderen Stellen auch") deckt den Fall ab — im Zweifel nicht umsetzen. |
| #83 | **ENTSCHEIDUNG** | `WhyVerotera.tsx` → `badges[0].description` | — | „Botschaft muss geändert werden" ohne Ersatztext — der neue Text muss vom Kunden kommen. |
| #84 | ✅ ERLEDIGT | `Hero.tsx` → `SLIDES.*[1].text` (Zeile 1) | beides | Umgesetzt: Smart-PDU-Satz entfernt, „Full-GaN DC-DC Wandler." bleibt einzige Zeile. Commit `d503c8d`. |
| #85 | ✅ ERLEDIGT | `Hero.tsx` → `SLIDES.*[0].text` (Zeile 2) | beides | Umgesetzt: zweiter Satz „Vom Chip bis zum System …" entfernt. Commit `1a40842`. |
| #86 | **ENTSCHEIDUNG** | `ValueStatement.tsx` → `closing` | — | Kunde stellt frei „entweder hier weglassen oder unten entfernen" — es muss entschieden werden, welche der beiden Stellen geht (die Dublette unten ist nicht eindeutig benannt). |
| #87 | **HINFÄLLIG** | `WhyVerotera.tsx` → `panelMeta` | — | Explizite Thread-Antwort von Thorsten Sigges (2026-07-28): bewusst englisch, bleibt so. |
| #88 | **ENTSCHEIDUNG** | `WhyVerotera.tsx` → `badges[0]` bzw. Badge-Grid | — | Rahmen sitzt nur auf dem Titel von Card 1, der Text sagt „dieser **Abschnitt** evtl. komplett entfernen" — Umfang (eine Karte / alle vier / ganze Sektion) und das „evtl." sind offen. |
| #89 | **ENTSCHEIDUNG** | `ElectrifiedWorld.tsx` → `source` (Z. 15/21) | — | Rechtefrage zur IEA-Zitierung, die der Kunde selbst offen lässt („ich weiß nicht, ob wir dürfen"); betrifft außerdem `RPD` und `applications/automotive-emobility`. |
| #90 | **ENTSCHEIDUNG** | `StatsSection.tsx` → `stats[0..3]` | — | Rahmen umschließt nur die Karte „100+", der Text spricht von „diese Zahlen" (Plural) und ist als Meinung formuliert — Umfang muss geklärt werden. |
| #98 | ✅ ERLEDIGT | `FeaturesAgenticAI.tsx` → `teaser` | beides | Umgesetzt: „Früher. Belegbar. Belastbar." / „Earlier. Documented. Dependable." Commit `c9fd9df`. |
| #99 | ✅ ERLEDIGT | `FeaturesAgenticAI.tsx` → `headline` | beides | Umgesetzt: „Technologieentscheidungen in der Konzeptphase" DE+EN. Commit `2ca8f9d`. |
| #100 | ✅ ERLEDIGT | `FeaturesAgenticAI.tsx` → `body` | beides | Umgesetzt, Tippfehler stillschweigend korrigiert (`remeians`→remains, `aSystem`→a System). EN-Einleitungssatz ("impact of decisions is highest…") bewusst nicht ins Deutsche übernommen — offene Rückfrage 18. Commit `550f125`. |
| #101 | ✅ ERLEDIGT | `VModelFunnel.tsx` → SVG-Label (Z. 314–317) | beides | Umgesetzt: „Agentic AI" → „AI-Enhanced Engineering", zweizeilig gesetzt (Platzgrund). Bitte in Live-Ansicht auf Überlappung mit rechten Kacheln prüfen. Commit `2eef330`. |
| #102 | **ENTSCHEIDUNG** | `VModelFunnel.tsx` → rechte V-Seite | — | Kunde bietet zwei Varianten an und markiert sie als optional („visuell zurücknehmen" **oder** „out of scope" betiteln) — Variante muss gewählt werden. |
| #103 | ✅ ERLEDIGT | `AgenticEcosystem.tsx` → Eyebrow-`<span>` (Z. 80) | beides | Umgesetzt: neuer Key `sectionEyebrow` in `COPY`, DE+EN. Commit `112dfe8`. |
| #104 | ✅ ERLEDIGT | `AgenticEcosystem.tsx` → `lead` (rendert als H2) | beides | Umgesetzt: „Die KI erweitert das Ingenieururteil …" DE+EN. Commit `c9e8f7a`. |
| #105 | ✅ ERLEDIGT | `AgenticEcosystem.tsx` → `title` + `sub` | beides | Umgesetzt: Titel „Human-in-the-Loop by design", Key `sub` komplett entfernt. Commit `5d65c9f`. |
| #106 | ✅ ERLEDIGT | `AgenticEcosystem.tsx` → `intro` | beides | Umgesetzt: „VEROTERA strukturiert die folgenreichste Entscheidung …" DE+EN (Tippfehler `ist sources`→its sources korrigiert). Commit `a04cedc`. |
| #107 | ✅ ERLEDIGT | `AgenticEcosystem.tsx` → `bullets` | beides | Umgesetzt: 5→4 Punkte, DE+EN (Tippfehler `decisons`/`explicity`/`verifable` korrigiert). Commit `0536a38`. |
| #108 | ✅ ERLEDIGT | `AgenticEcosystem.tsx` → `closing` | beides | Umgesetzt: „So wird aus einer riskanten Frühentscheidung …" DE+EN. Commit `a20cade`. |
| #109 | **ASSET_FEHLT** | `AgenticEcosystem.tsx` → `<Image src="/images/agentic-ai-system.png">` (Z. 93) | — | Das gewünschte `aa-engineering-core` liegt in SharePoint, nicht in `public/images/`. |
| #110 | ✅ ERLEDIGT | `Header.tsx` → `NAV` Lösungen-Dropdown (Z. 21 de / Z. 61 en) | beides | Umgesetzt: „AI-Enhanced WBG Semiconductor Engineering", beide Sprach-Arrays. Commit `ef123b4`. |
| #161 | ✅ ERLEDIGT | `WhyVerotera.tsx` → `badges[3]` + `BADGE_HIGHLIGHTS[3]` + `BADGE_ICONS[3]` | beides | Umgesetzt: vierte Karte entfernt, Grid auf `md:grid-cols-3`, `Zap`-Import entfernt. Commit `8639387`. |
| #162 | **ENTSCHEIDUNG** | `Footer.tsx` → `support` (Z. 34–40 de / 71–77 en) | — | „Nur eine der drei reicht" sagt nicht, welche bleibt; zusätzlich gibt es dieselben Einträge in `Header.tsx` (Dropdown + Top-Level-Link + CTA). |
| #163 | ✅ ERLEDIGT | `Footer.tsx` → `resources.links[3]` (Z. 30 de / en-Pendant) | beides | Umgesetzt: Footer-Link „Patente"/„Patents" entfernt. Commit `433e19f`. |
| #164 | **ENTSCHEIDUNG** | `AdvancedPackaging.tsx` → ganze Sektion (Z. 91–158) | — | „Sollte anders dargestellt werden" ohne Zielform — die gewünschte Darstellung muss erst festgelegt werden. |
| #166 | **ASSET_FEHLT** | `WbgModuleSolutions.tsx` → `<Image src="/images/chip-fabrication.png">` (Z. 71) | — | Die genannte Datei `aa-wafer-dies-sic.png` liegt nicht in `public/images/`. |

**Zwischensumme:** 20 UMSETZBAR (alle 20 ✅ erledigt am 2026-08-02) · 9 ENTSCHEIDUNG · 3 ASSET_FEHLT · 2 HINFÄLLIG

**Status 2026-08-02:** Alle 20 UMSETZBAR-Punkte dieser Seite sind umgesetzt, in FEEDBACK.md abgehakt
und je Punkt einzeln committet (`feedback(2026-08-01-2052): #NR …`). Die 14 übrigen Punkte
(#75, #78, #82, #83, #86, #87, #88, #89, #90, #102, #109, #162, #164, #166) sind unangetastet.

---

## Seite `/solutions/wbg-power-modules` — 5 Punkte

| Nr | Kategorie | Datei / Stelle | Sprache | Begründung |
|---|---|---|---|---|
| #91 | **ENTSCHEIDUNG** | `WBG` Z. 290 → `/images/sic-gan-car.png` | — | „Bildstil wie auf der Landingpage" — der Landing-Page-Stil ist durch #75 selbst noch strittig, es gibt keine Zielvorgabe und keine Ersatzdatei. |
| #92 | **ENTSCHEIDUNG** | `WBG` → `COPY.*.s2Body` (Z. 76) | — | „Text ändern" ohne Ersatztext — der neue Text muss vom Kunden kommen. |
| #93 | **ENTSCHEIDUNG** | `WBG` Z. 246 → `/images/power-module-ai-fol-2.png` | — | „Bild ändern" ohne Angabe, was das neue Bild zeigen soll; danach folgt zusätzlich ein Asset-Bedarf. |
| #94 | **ASSET_FEHLT** | `WBG` Z. 359 → `/images/power-electronics-emobility-automotive.png` | — | Die Änderung (seitliche Pins am Modul entfernen) ist konkret, erfordert aber eine bearbeitete Bilddatei, die es noch nicht gibt. |
| #95 | **ENTSCHEIDUNG** | `Footer.tsx` Z. 171 → `https://www.linkedin.com/company/verotera` | — | Die korrekte LinkedIn-URL ist unbekannt und muss vom Kunden kommen; der Link steht global im Footer, nicht auf dieser Seite. |

**Zwischensumme:** 4 ENTSCHEIDUNG · 1 ASSET_FEHLT

**Status 2026-08-02:** Kein Punkt umgesetzt — alle fünf sind blockiert, keiner davon durch uns.

- **#91 / #93** (Bildstil, Ersatzbild) hängen an der Stilentscheidung aus Konflikt 5. Die Vorgabe
  „wie auf der Landingpage" trägt nicht, solange dort #75 offen ist und die neuen Dateien fehlen.
- **#92** braucht einen Ersatztext (DE + EN) oder wenigstens die Angabe, was am aktuellen stört.
- **#94** braucht eine retuschierte Fassung von `power-electronics-emobility-automotive.png`
  (seitliche Pins entfernt) — reine Dateifrage, dafür ist noch keine Rückfrage formuliert.
- **#95** ist global: die tote LinkedIn-URL steht in `Footer.tsx` und damit auf jeder Seite.

Formulierte Rückfragen (DE + EN) zu #91, #92, #93, #95: FEEDBACK.md → „Rueckfragen ausserhalb
der Landingpage".

---

## Seite `/solutions/rack-power-distribution` — 3 Punkte

| Nr | Kategorie | Datei / Stelle | Sprache | Begründung |
|---|---|---|---|---|
| #165 | UMSETZBAR | `RPD` → `COPY.de.s2Cards[0].text` (Z. 67) + EN-Pendant (Z. 150) | **DE geliefert, EN selbst übersetzen** | Der vollständige neue Text liegt nur auf Deutsch vor; laut SKELETON.md §0.4 wird die EN-Fassung selbst sauber übersetzt. Achtung: der neue Text zitiert die IEA — Konflikt mit #89. |
| #167 | **ASSET_FEHLT** | `RPD` Z. 362–376 → `PduPowerArchitecture.tsx` | — | „Blockdiagramm aus der PPT" — die PPT-Datei liegt nicht im Repo, das Zieldiagramm ist damit nicht verfügbar. |
| #168 | UMSETZBAR | `RPD` → Sektion 4 (Z. 384–436), `s4Teaser`/`s4Headline`/`s4Stats`/`s4Features` | beides | Der gestrichelte Rahmen umschließt die komplette Sektion „800 VDC vs. konventionelle AC/DC Architekturen" (linke, rechte und obere Kante sichtbar); „komplett erstmal rausnehmen" ist eindeutig. |

**Zwischensumme:** 2 UMSETZBAR · 1 ASSET_FEHLT

**Status 2026-08-02:** #165 und #168 sind umgesetzt und committet, #167 bleibt offen (ASSET_FEHLT).

- #165: `s2Cards[].text` ist jetzt ein Absatz-Array, weil der neue Text zwei Absätze hat;
  EN selbst übersetzt (SKELETON.md §0.4). **Achtung Konflikt 3:** der neue Text zitiert
  ausdrücklich die Internationale Energieagentur, während #89 die IEA-Quelle auf der Landing Page
  bereits entfernt hat (Commit `ecd5bd9`). Die IEA steht damit weiterhin hier und in
  `applications/automotive-emobility` — muss einheitlich entschieden werden.
- #168: Sektion 4 komplett entfernt inkl. `s4Teaser`/`s4Headline`/`s4Stats`/`s4Features`,
  `S4_ICONS` und der verwaisten lucide-Importe.

---

## Seite `/resources/patents` — 2 Punkte

| Nr | Kategorie | Datei / Stelle | Sprache | Begründung |
|---|---|---|---|---|
| #96 | **ENTSCHEIDUNG** | `src/app/[lang]/resources/patents/page.tsx` → `heroSubtitle` | — | Sachfrage, ob KI-Systems-Engineering wirklich patentiert wird — das kann nur der Kunde beantworten. |
| #97 | **ENTSCHEIDUNG** | `src/app/[lang]/resources/patents/page.tsx` + `Footer.tsx` + `sitemap.ts` + `site-map` | — | „Erstmal weglassen" lässt offen, ob die Route gelöscht oder nur entlinkt wird — eine Löschung ist SEO-relevant und nicht umkehrbar ohne Redirect. |

**Zwischensumme:** 2 ENTSCHEIDUNG

**Status 2026-08-02:** Beide offen. Der Footer-Link ist über #163 bereits weg (Commit `433e19f`);
verlinkt ist die Seite jetzt nur noch aus `src/app/sitemap.ts` und `src/app/[lang]/site-map/page.tsx`
(DE + EN). #96 hängt an #97 — verschwindet die Seite, erledigt sich die Patentaussage mit.

Die Rückfrage stellt beide Wege zur Wahl: entlinken + `noindex` (reversibel, passt zu „erstmal")
oder löschen + Redirect auf `/resources` bzw. die Startseite. Ohne Redirect entstehen 404er auf
bereits indexierten URLs. Formulierte Rückfragen (DE + EN): FEEDBACK.md → „Rueckfragen ausserhalb
der Landingpage".

---

## Seite `/solutions/technology-spotlight-gallium-nitride` — 1 Punkt

| Nr | Kategorie | Datei / Stelle | Sprache | Begründung |
|---|---|---|---|---|
| #169 | **ENTSCHEIDUNG** | `.../technology-spotlight-gallium-nitride/page.tsx` + `.../technology-spotlight-silicium-carbide/page.tsx` | — | Betrifft zwei komplette Seiten; wie bei #97 ist offen, ob gelöscht oder nur entlinkt wird (Nav, Footer, Sitemap, Redirects). |

**Zwischensumme:** 1 ENTSCHEIDUNG

**Status 2026-08-02:** Offen. Der Umfang ist größer als in der Zeile oben notiert — die beiden
Spotlight-Seiten (GaN + SiC) sind an sechs Stellen verlinkt:

| Datei | Was dort steht |
|---|---|
| `src/components/Header.tsx` | Lösungen-Dropdown, DE (Z. 22/23) + EN (Z. 62/63) |
| `src/components/Solutions.tsx` | Lösungs-Übersicht der Startseite, DE (Z. 40/46) + EN (Z. 83/89) |
| `src/app/[lang]/site-map/page.tsx` | Site-Map, DE (Z. 33/34) + EN (Z. 91/92) |
| `src/app/sitemap.ts` | `sitemap.xml`, Priorität 0.8 (Z. 12/13) |
| `src/data/news.ts` | je zwei News-Beiträge pro Sprache verlinken auf die Seiten (Z. 57/67, 122/132) |

Ein Löschen ohne Redirect erzeugt damit auch tote „Mehr erfahren"-Links in den News-Teasern.
Die Rückfrage klärt drei Dinge: entlinken oder löschen, was mit den Verweisen passiert
(entfernen oder auf `/solutions/wbg-power-modules` umbiegen), und ob es dauerhaft gilt oder wie
bei #97 nur „erstmal". Formulierte Rückfrage (DE + EN): FEEDBACK.md → „Rueckfragen ausserhalb
der Landingpage".

---

## Summen

*Zahlen der Erstanalyse — der aktuelle Stand steht oben unter „Status der Runde".*

### Pro Kategorie

| Kategorie | Anzahl | Anteil |
|---|---|---|
| UMSETZBAR | 70 | 74 % |
| ENTSCHEIDUNG | 17 | 18 % |
| ASSET_FEHLT | 6 | 6 % |
| HINFÄLLIG | 2 | 2 % |
| UNKLAR | 0 | 0 % |
| **Summe** | **95** | |

### Pro Seite

| Seite | Punkte | UMSETZBAR | ASSET_FEHLT | ENTSCHEIDUNG | UNKLAR | HINFÄLLIG |
|---|---|---|---|---|---|---|
| `/solutions/agentic-ai-engineering` | 50 | 48 | 1 | 1 | 0 | 0 |
| `/` (Landing) | 34 | 20 | 3 | 9 | 0 | 2 |
| `/solutions/wbg-power-modules` | 5 | 0 | 1 | 4 | 0 | 0 |
| `/solutions/rack-power-distribution` | 3 | 2 | 1 | 0 | 0 | 0 |
| `/resources/patents` | 2 | 0 | 0 | 2 | 0 | 0 |
| `/solutions/technology-spotlight-gallium-nitride` | 1 | 0 | 0 | 1 | 0 | 0 |
| **Summe** | **95** | **70** | **6** | **17** | **0** | **2** |

Die Agentic-AI-Seite ist mit 48 von 50 Punkten praktisch durchgehend umsetzbar — dort liegt die
eigentliche Arbeit. Die Landing Page ist der Problemfall: 12 von 34 Punkten (ENTSCHEIDUNG +
ASSET_FEHLT) sind blockiert.

---

## Konflikte und Abhängigkeiten

Diese Punkte sind einzeln umsetzbar, kollidieren aber miteinander:

1. **#111 ↔ #112** — beide fordern denselben String für Eyebrow und H1 des PageHero. Wortgleich
   übereinander umgesetzt sieht das kaputt aus. Deshalb ist #112 als ENTSCHEIDUNG geführt.
2. **#133–#135 ↔ #136–#141** — der Sektions-Header wird zu „Time-to-Market", die sechs Karten
   derselben Sektion werden aber zu den Wissensgraph-Bausteinen (Technologieklassen, Funktionsblöcke,
   Topologien, Regeln, Parametrische Modelle, Anforderungen). Header und Inhalt passen thematisch
   nicht zusammen — vermutlich fehlt eine eigene Sektion mit eigenem Header für die sechs Bausteine.
   Wahrscheinlich löst das SharePoint-Dokument aus #160 genau diese Frage.
3. **#89 ↔ #165** — #89 will die IEA-Zitierung sicherheitshalber raus, der neue Text in #165 zitiert
   ausdrücklich „Die Internationale Energieagentur". IEA steht aktuell an drei Stellen im Code:
   `ElectrifiedWorld.tsx` (Z. 15/21), `RPD` (Z. 67/150) und `applications/automotive-emobility`
   (Z. 95/152, in dieser Runde nicht kommentiert).
4. **#163 ↔ #97** — der Footer-Link „Patente" raus (#163) ist die kleine Variante; #97 will die
   ganze Seite weglassen. #163 vor #97 umsetzen, dann bleibt #97 nur noch die Route-Frage.
5. **#75 ↔ #78 ↔ #91 ↔ #93 ↔ #166** — fünf Punkte zum selben Thema Bildstil, von zwei verschiedenen
   Reviewern. Sinnvoll nur als ein Paket mit einer Stilentscheidung zu lösen.
6. **#95 wirkt global** — die LinkedIn-URL steht in `Footer.tsx` und damit auf jeder Seite; der Punkt
   ist zwar unter `/solutions/wbg-power-modules` einsortiert, die Korrektur gilt aber überall.

## Technische Nebenwirkungen (nicht vergessen)

- **#132** — `LAYER_ICONS` (`AAE` Z. 28) hat nur 4 Einträge. Ohne fünftes Icon ist `Icon` beim
  fünften Layer `undefined` und die Seite crasht beim Rendern.
- **#161** — Badge-Grid geht von 4 auf 3 Karten: `lg:grid-cols-4` muss auf `md:grid-cols-3`,
  sonst bleibt eine Lücke.
- **#107** — Bullet-Liste geht von 5 auf 4 Punkte.
- **#105** — zusätzlich zum Titel wird der Key `sub` („Smarter Design Decision") gestrichen.
- **#103** — der Eyebrow ist aktuell hartkodiert und einsprachig; er muss für DE/EN nach `COPY`.
- **#127** — braucht einen neuen COPY-Key (`architecture.body`) und `mb-6` an der H2.
- **#142/#143/#159** — beim Löschen der Sektionen auch die zugehörigen `COPY`-Blöcke, `TOOL_ICONS`
  und dann verwaiste lucide-Importe entfernen, sonst meckert der Linter.
- **#147/#150/#157** — `VModelInteractive` wird auf dieser Seite durch den SRO-Block ersetzt.
  Die Komponente wird an anderer Stelle **nicht** mehr gebraucht — vor dem Löschen prüfen
  (`VModelFunnel.tsx` auf der Landing Page ist eine andere Komponente und bleibt).

---

## Rückfragen an den Kunden

Ursprünglich blockierten diese Fragen 17 ENTSCHEIDUNG-Punkte. Vier davon sind inzwischen
entschieden und umgesetzt, 13 sind offen — dazu drei Fragen, die zwar an bereits umgesetzten
Punkten hängen, aber weiter beantwortet werden müssen.

**Die ausformulierten Kommentare stehen in [FEEDBACK.md](FEEDBACK.md)**, fertig zum Einfügen ins
Pastel-Canvas: Landingpage-Block auf Deutsch, alles andere in DE **und** EN. Die Liste hier ist
nur die Übersicht.

### Offen — Antwort nötig (13 Punkte)

| Nr | Seite | Frage in einem Satz |
|---|---|---|
| #75 | Landing | Welcher Bildstil gilt als verbindliche Referenz, und wer liefert die Bilder? |
| #83 | Landing | Ersatztext für Karte 1 („Vom Chip bis zum System") fehlt komplett. |
| #88 | Landing | Nur Karte 1, das ganze Karten-Grid oder die ganze Sektion entfernen? |
| #90 | Landing | Alle vier Kennzahlen raus oder nur die markierte „100+"? |
| #164 | Landing | Wie soll der Advanced-Packaging-Block stattdessen aussehen? |
| #112 | AAE | Trägt die Eyebrow-Pill oder die H1 den Begriff „AI-Enhanced WBG Semiconductor Engineering"? |
| #91 | WBG | Welches konkrete Referenzbild zeigt den Zielstil? |
| #92 | WBG | Ersatztext für den Absatz unter „Wide-Bandgap at the Core" (DE + EN). |
| #93 | WBG | Was soll das neue Bild zeigen, und wer liefert es? |
| #95 | global | Korrekte LinkedIn-URL — oder Block vorerst ausblenden? |
| #96 | Patente | Gibt es im KI-Systems-Engineering tatsächlich eine Anmeldung? |
| #97 | Patente | Entlinken + `noindex` oder löschen + Redirect? |
| #169 | GaN/SiC | Wie #97, plus: was passiert mit den sechs Verlinkungen? |

### Offen — Fragen zu bereits umgesetzten Punkten (3)

| Nr | Seite | Warum trotzdem offen |
|---|---|---|
| #133–#141 | AAE | Wie geliefert umgesetzt — der Header „Time-to-Market" steht damit über den sechs Wissensgraph-Bausteinen (Konflikt 2). Eine Sektion oder zwei? |
| #117 | AAE | Nur textlich umgesetzt; die gewünschte gestalterische Aufwertung des Process-Flows ist offen — drei Varianten stehen zur Wahl. |
| #165 + #89 | RPD / Landing | Der neue RPD-Text nennt die IEA, während #89 die IEA-Quelle auf der Landingpage entfernt hat (Konflikt 3). Antwort muss für alle drei Fundstellen gleich ausfallen. |

### Offen — Datei nötig (6 Punkte)

| Nr | Seite | Fehlende Datei |
|---|---|---|
| #78 | Landing | `aa_data_center_new`, `aa_emobilit_new`, `aa_hydrogen_new`, `aa_renewable_new`, `aa_robotics_new` |
| #109 | Landing | `aa-engineering-core` |
| #166 | Landing | `aa-wafer-dies-sic.png` |
| #160 | AAE | Word-Dokument aus SharePoint (Zugriff oder Export) |
| #94 | WBG | retuschiertes `power-electronics-emobility-automotive.png` ohne seitliche Pins |
| #167 | RPD | Blockdiagramm aus der PPT |

### Entschieden und umgesetzt — bitte gegenprüfen (4 Punkte)

| Nr | Gewählte Variante | Commit |
|---|---|---|
| #86 | Obere Dublette (Abschlusssatz der Mission-Sektion) entfernt, Aufzählung darunter bleibt. | `bcc24f3` |
| #89 | IEA-Quellenangabe nur auf der Landingpage entfernt — siehe Konflikt 3, Rechtefrage bleibt offen. | `ecd5bd9` |
| #102 | „Rechte V-Seite visuell zurückgenommen" statt „out of scope" betiteln. Offen: soll der untere Trunk mit? | `f7dcb07` |
| #162 | „Technische Unterstützung" entfernt; „Support" bleibt Spaltenüberschrift, „Kontakt" bleibt Link. | `3706bd2` |

### Ohne Rückfrage entschieden — nur zur Bestätigung

- **Tippfehler in den gelieferten Texten** wurden still korrigiert, konsistent über beide Runden.
  Gefunden und gefixt: #120 DE „**Wie** liefern die Grundlage" → „Wir liefern"; #120 EN
  „traceable to **ist** rules" → „its rules"; #106 EN „**ist** sources" → „its sources";
  #123 EN „**stanf** behind" → „stand behind" und „people´s hand" → „people's hands";
  #113 EN „every assessemnt traceable" → „assessment **is** traceable"; #116 EN
  „technology **assessement**" → „assessment"; #100 EN „**aSystem**", „**remeians**",
  „semi-**qualitatively**" → „semi-quantitatively"; #107 EN „**decisons**", „**explicity**";
  #108 EN „**decison**", „**verifable**". Bitte bestätigen und die Regel für kommende Runden
  festlegen.
- **#100** — der EN-Einleitungssatz („the impact of decisions is highest and the available data
  is most limited") wurde **nicht** ins Deutsche übernommen, weil die DE-Fassung ihn nicht hat.
  Soll er ergänzt werden?
