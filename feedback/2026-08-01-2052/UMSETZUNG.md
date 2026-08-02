# Umsetzungsprotokoll — Runde 2026-08-01-2052

Was am Code passiert ist. Die fachlichen Rückfragen an den Kunden stehen in
[FEEDBACK.md](FEEDBACK.md) (Abschnitte „Rueckfragen"), die Triage der 95 Punkte in
[PLAN.md](PLAN.md). Dieses Dokument beantwortet nur: **welche Datei wurde warum wie geändert.**

Stand 2026-08-02 · 76 von 95 Punkten abgehakt · 19 offen (alle ENTSCHEIDUNG oder ASSET_FEHLT).

---

## 1. Überblick

Den Zählstand je Seite führt **[PLAN.md → „Status der Runde"](PLAN.md)** — hier steht bewusst
keine zweite Tabelle, die auseinanderlaufen kann.

Geänderte Dateien der ganzen Runde:

```
src/app/[lang]/solutions/agentic-ai-engineering/page.tsx   -552 Zeilen netto umgebaut
src/app/[lang]/solutions/rack-power-distribution/page.tsx  -213 Zeilen netto umgebaut
src/components/SroObject.tsx                               neu
src/components/VModelInteractive.tsx                       gelöscht
src/components/ElectrifiedWorld.tsx                        #89
src/components/Footer.tsx                                  #162, #163
src/components/VModelFunnel.tsx                            #101, #102
src/components/ValueStatement.tsx                          #86
```

**Ein Commit pro Punkt**, Format `feedback(2026-08-01-2052): #NR kurzbeschreibung`.
Ausnahme: #148–#157 hängen inhaltlich an #147 (eine Komponente) und teilen sich einen
Abhak-Commit. Nicht gepusht, nicht deployed.

---

## 2. `/solutions/agentic-ai-engineering`

Die Seite wurde faktisch komplett neu betextet. Sektionsreihenfolge bleibt, **drei Sektionen
entfallen**, eine wird ersetzt.

### Vorher → nachher

| Sektion (COPY-Key) | vorher | nachher |
|---|---|---|
| PageHero | „AI Systems Engineering" / „Agentische KI im Systems Engineering" | Eyebrow → „AI-Enhanced WBG Semiconductor Engineering" (#111); **H1 unverändert**, weil #112 offen |
| `intro` | Agentic-AI-Ecosystem-Pitch | „Vom Kontext zum Konzept" + Frage-Headline + Vier-Schritte-Text (#114–#116), Process-Flow-Labels neu (#117) |
| `hitl` | „KI transformiert MBSE", 2 Absätze | „Entscheidungen brauchen Nachvollziehbarkeit", Sub-Eyebrow raus, **1 Absatz** (#118–#124) |
| `architecture` | 4 Layer „Layer 01–04" | „Engineering Core", neuer Body, **5 Verantwortungsbereiche 01–05** (#125–#132) |
| `lifecycle` | Agentic Product Development Lifecycle | „Time-to-Market" + 6 Wissensgraph-Bausteine (#133–#141) |
| `vmodel` | interaktives V-Modell-Widget | „Structured Requirement Object" + neuer SRO-Block (#144–#158) |
| `wbg` | SiC & GaN Leistungselektronik | **entfernt** (#142) |
| `roadmap` | Strategische Roadmap | **entfernt** (#143) |
| `solutions` | Navy-Emphasis-Split | **entfernt** (#159) |

### Strukturelle Eingriffe (mehr als Text)

**`LAYER_ICONS` neu belegt** — Zeile 28. Die Konstante hatte vier Einträge; der fünfte
Verantwortungsbereich aus #132 hätte `Icon` auf `undefined` gesetzt und die Seite beim Rendern
zum Absturz gebracht. Neue Belegung passend zur neuen Semantik:

```ts
const LAYER_ICONS = [Workflow, Network, BrainCircuit, ShieldCheck, Bot];
//                   01 Orch.  02 KG   03 Interpr.   04 Absich.   05 Agent
```

**Tag-Format der Layer-Karten.** Der Kunde liefert „01 — Orchestrierung" als eine Zeile. Im
bestehenden Kartenmarkup ist `tag` ein kleines Uppercase-Label über dem H3. Aufgeteilt zu
`tag: "01"` + `title: "Orchestrierung"` — rendert optisch identisch zur gelieferten Schreibweise,
ohne das Markup anzufassen.

**Neue COPY-Keys:** `architecture.body` (#127, inkl. `mb-6` an der H2) und `vmodel.statement`
(#158, „Großes Fazit"-Typografie nach SKELETON.md §3).
**Entfernter COPY-Key:** `hitl.subEyebrow` (#121) samt `<span>`.

**Beim Löschen der drei Sektionen** wurden jeweils Typdeklaration, beide COPY-Blöcke und das JSX
entfernt, dazu `TOOL_ICONS` und die dadurch verwaisten lucide-Importe
(`CircuitBoard`, `GitBranch`, `Scale`, `Share2`, `Database`, `Layers`).

### Der SRO-Block (#147/#150 als Sammelanweisung)

`VModelInteractive.tsx` war ausschließlich auf dieser Seite eingebunden (per Grep geprüft) und
wurde **gelöscht**. `VModelFunnel.tsx` auf der Landing Page ist eine andere Komponente und bleibt.

Neu: [`src/components/SroObject.tsx`](../../src/components/SroObject.tsx) —
**Server Component** mit `lang`-Prop statt Client Component mit `useLang()`, weil der Block
keinerlei Interaktion mehr hat (SKELETON.md §1).

Aufbau, dem Wunsch „im gleichen Design wie aktuell, d.h. Rechtecke mit abgerundeten Kanten"
folgend:

- äußeres Panel `rounded-3xl border border-brand-navy/8 bg-surface-light p-6 sm:p-10` — identisch
  zum vorherigen Widget
- Widget-Header: Eyebrow (#148) + Titel (#149)
- **sechs Karten 01–06** (#151–#156) im Raster `md:grid-cols-2 lg:grid-cols-3`, je
  Nummern-Badge + Titel + Beschreibung + abgetrennte Feldliste (`border-t`), Reveal-Stagger 0.05
- **JSON-Rechteck** (#157): das dunkle Terminal-Mock der alten Komponente wurde übernommen —
  Ampelpunkte, `Terminal`-Icon, `font-mono text-xs`. Kopfzeile trägt jetzt nur noch `SRO`.
  Die JSON-Zeilen laufen durch `JsonLine`, das Schlüssel cyan und Werte hell einfärbt; der
  Container hat `whitespace-pre overflow-x-auto`, damit die Einrückung erhalten bleibt und lange
  Zeilen im eigenen Kasten scrollen statt die Seite zu sprengen.
- Bildunterschrift (#157) darunter in Meta-Typografie

Das Abschluss-Statement (#158) sitzt **außerhalb** der Komponente in der Page, direkt unter dem
Panel — es gehört zur Sektion, nicht zum Widget.

---

## 3. `/solutions/rack-power-distribution`

**#165** — Der neue Text der KI-Karte hat zwei Absätze, das Feld war ein einzelner String.
`s2Cards[].text` ist jetzt `string[]`, die Ausgabe mappt auf `<p className="… mb-4 last:mb-0">`.
Die beiden anderen Karten wurden nur in Arrays gewickelt, ihr Text ist unverändert.
Die EN-Fassung lag nicht vor und wurde nach SKELETON.md §0.4 selbst übersetzt.

**#168** — Sektion 4 („800 VDC vs. konventionelle AC/DC Architekturen") komplett entfernt:
JSX, `s4Teaser`/`s4Headline`/`s4Stats`/`s4Features` in beiden Sprachen, `S4_ICONS` und die
verwaisten Importe `Cpu`, `RefreshCcw`, `Droplets`, `PlugZap`.

---

## 4. Getroffene Entscheidungen

Diese Punkte waren im Detail nicht vorgegeben — so wurde entschieden:

1. **Tippfehler in gelieferten Texten still korrigiert.** Präzedenz aus der Landing-Page-Runde
   (#100, #106–#108). Betroffen: `assessemnt`/`assessement` → assessment, `ist` → its (2×),
   `stanf` → stand, `people´s hand` → people's hands, „Wie liefern" → „Wir liefern",
   `and risk overview` → `and a risk overview`. Aufgelistet in FEEDBACK.md unter Rückfragen.
2. **#117 nur textlich umgesetzt.** Die vier Labels sind gesetzt; die gewünschte gestalterische
   Aufwertung des Process-Flows ist im Kommentar ausdrücklich an Adrien adressiert und wartet
   auf einen Vorschlag. Die Pills stehen unverändert im Bestandsdesign.
3. **#133–#141 wörtlich wie geliefert.** Der Widerspruch (Header „Time-to-Market" über sechs
   Wissensgraph-Bausteinen) ist damit im Code sichtbar statt still geglättet — genau so lässt
   er sich beim Kunden klären.
4. **#112 nicht geraten.** Eyebrow und H1 sollen laut #111/#112 denselben String tragen; die H1
   steht deshalb weiterhin auf „Agentische KI im Systems Engineering".

---

## 5. Was im Code noch widersprüchlich ist

**IEA-Zitierung.** #89 hat die IEA-Quelle auf der Landing Page entfernt
(`ecd5bd9`, `ElectrifiedWorld.tsx`), der mit #165 gelieferte Text zitiert die Internationale
Energieagentur ausdrücklich. Die IEA steht damit weiterhin an zwei Stellen:

- `src/app/[lang]/solutions/rack-power-distribution/page.tsx` (KI-Karte, DE + EN)
- `src/app/[lang]/applications/automotive-emobility/page.tsx` (in dieser Runde nicht kommentiert)

Die Antwort muss für alle Stellen gleich ausfallen.

**Sektionslogik der Lifecycle-Sektion** — siehe Entscheidung 3 oben.

---

## 6. Verifikation

- `npx tsc --noEmit` grün (mehrfach während der Runde, zuletzt nach #168)
- `npx eslint` grün auf allen geänderten Dateien
- **Keine Browser-Verifikation.** Port 3001 ist hart verdrahtet und war durch einen laufenden
  Dev-Server belegt; ein zweiter Server teilt sich denselben `.next`-Ordner. Aus demselben Grund
  wurde bewusst kein `next build` ausgeführt — er hätte die laufende Live-Ansicht zerschossen.
  Die optische Kontrolle passiert in der laufenden Vorschau des Nutzers.

Empfohlene Sichtprüfung in der Live-Ansicht, weil dort das Layout kippen kann:

- Engineering-Core-Sektion: fünf statt vier Karten, neuer Body unter der H2
- SRO-Block: Kartenraster bei ~768 px und ~1024 px, JSON-Kasten auf Mobil (horizontales Scrollen
  muss **im** Kasten passieren, nicht auf der Seite)
- Agentic-Seite insgesamt: nach drei entfernten Sektionen wechseln die Hintergründe anders als
  vorher — prüfen, ob nicht zwei Nicht-Weiß-Sektionen aufeinandertreffen (SKELETON.md §8.2)
