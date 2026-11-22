# Änderungen v25 → v26

Stand: 20. November 2026, Paket Fassung 11 (Erklär-Video v15). Grundlage ist das Paket v25 (16. November 2026). Texte der Seite Hybrid AI: 03_Seitentexte_v26_HybridAI (Projektdokument).

Alle neuen Regeln stehen am Ende von `assets/site.css` (Blöcke „v26“, „Fassung 4“ bis „F10“). Frühere Regeln bleiben unverändert.

## Alle Seiten

| Datei | Änderung |
|---|---|
| `assets/site.css` | Seitenhintergrund einheitlich #081d29 statt Verlauf #061620 bis #0e2c44. Navigationsleiste unverändert (#0b2230). |
| `assets/site.css` | Header höher: 430 px Desktop, 360 px Tablet, 300 px Handy (vorher 330 und 240 px). Weicher Übergang am unteren Rand in den Seitenhintergrund. |
| `assets/site.css`, `assets/site.js` | Header-Bild skaliert beim Laden einmal langsam von 100 auf 107 % (22 Sekunden). Bei „Bewegung reduzieren“ im Betriebssystem keine Bewegung. Ohne JavaScript bleibt der Header wie in v25. |
| `sitemap.xml` | `lastmod` auf 2026-11-20. |

## Hybrid AI (`engineering-core.html`)

| Abschnitt | Inhalt |
|---|---|
| Header | unverändert |
| The Principle | neu: Headline „Beyond Generative AI. Towards Verifiable Engineering Intelligence.“ und die weiße Zeile „Neural AI interprets. Symbolic AI evaluates. Operations Research optimises. Engineers decide.“ (Klasse `.ec-principle-claim`). Zentrierter Block wie v25. |
| The Hidden Cost | aus v25 inklusive Schlusssatz; mittlere Karte neu: „Expertise in High Demand“ / „Gefragte Expertise“ mit neuem Text |
| The Approach (ersetzt How It Works) | Bild core-hybrid links. Eyebrow „The Approach“, Headline „Capture. Evaluate. Trace.“, zwei Absätze (Klasse `.ec-par`, Operations Research als geplante Stufe gekennzeichnet), „What you gain“, eine Zeile zu den drei Agenten und zum lokalen Betrieb |
| Video | neu: Video links (Label „Engineering Core · Pilot“, Vorschaubild, Abspiel-Button, Bildunterschrift), Bild hybrid-intelligence.jpg rechts; darunter Hinweis Pilotphase mit Link „Become a Pilot Partner“ (`contact.html#engineering-core`). Auf dem Handy untereinander. Video startet erst per Klick. |
| Outlook | aus v25 mit allen Inhalten: V-Modell auf voller Breite, Fußnote, drei Karten Today, Next, Vision (Texte unverändert, auch der CEO-Text). Neu: Subline „The concept phase is only the beginning.“ und Evidenz-Labels an den Karten |
| CTA | unverändert |
| Footer | ergänzt: „The video contains AI-generated images.“ / „Das Video enthält KI-generierte Bilder.“ |
| Meta | `description` und `og:description` an die neuen Texte angepasst |

Entfallen gegenüber v25: AI That Knows Power Electronics, Value Created for You, Three Roles als eigener Abschnitt (jetzt eine Zeile in The Approach), How It Works mit fünf Stufen, Inside the Engineering Core, Statusabschnitt „Proven Mechanism. Growing Knowledge.“ mit Button (Pilot-Hinweis jetzt beim Video).

## V-Modell (Hybrid AI und Solutions Phase 05)

Beide Seiten zeigen dasselbe V-Modell.

| Breite | Darstellung |
|---|---|
| ab 1200 px | Inline-SVG (Klassen `.vm3 .vmd`): schräge Kacheln ohne Rahmen bilden ein klassisches V, Farbton von hell (oben) nach dunkel (unten), breite Kachel unten für Module design & samples, Doppelpfeile ohne Text zwischen zusammengehörigen Phasen, kleine Richtungspfeile. „System level · e.g. inverter, converter“ und „Module level · power module“ stehen im V zwischen den beiden Zeilen ihrer Ebene. Texte bilingual im SVG (`.l-en` / `.l-de`). |
| unter 1200 px | bisherige HTML-Darstellung (`.vm2-grid`) in denselben Farben, ohne Rahmen, Ebenen als Zwischenüberschriften |
| Hybrid AI | linker Ast hervorgehoben („Today · Pilot“), rechter Ast gedämpft („Outlook“) |
| Solutions, Phase 05 | rechter Ast hervorgehoben („Phase 05 · Test and Validation“), linker Ast gedämpft („Phases 01 to 03 · Decision and Design“), Klasse `.vmd-sol`. Das SVG steht im statischen HTML und in der Vorlage des Seitenskripts (Funktion für Phase 05), damit es nach dem Sprachwechsel erhalten bleibt. |

## Home (`index.html`) und About (`about.html`): Säulen-Kacheln

| Stelle | Änderung |
|---|---|
| Home, Three Pillars. One Partner. | Gestaltung neu (angelehnt an V2): Karte ohne Rahmen mit leichtem Verlauf, kurze Verlaufslinie oben links, Icon im Kreis, große leise Nummer 01 bis 03, Trennlinie, Aufzählung mit Punkten statt Pills. Texte unverändert |
| About, What We Build | gleiche Gestaltung wie Home (Icons als Daten-URI im CSS). Texte unverändert |
| `assets/wbg-chart.js` (About) | im deutschen Modus Dezimalkomma im Diagramm, zum Beispiel „1,5 kW“ |

## Neue und geänderte Dateien

- `assets/video/engineering-core-explainer.mp4`: Erklär-Video v15 (1:38 min, 1920 × 1080, 30 fps, H.264, ohne Ton, 10,6 MB, faststart). Abgenommen am 20.11.2026.
- `assets/img/ec-video-poster.jpg`: Vorschaubild des Videos (Szene EVALUATE, 1600 × 900).

## Unverändert

Home, About, Solutions und Contact textlich unverändert (geprüft gegen v25 in EN und DE; Ausnahmen: Dezimalkomma im Diagramm, V-Modell). Content-Security-Policy unverändert (`media-src 'self'` erlaubt das Video).

## Bekannt und nicht neu

- `assets/img/core-rack.jpg` und `assets/img/logo-wordmark-blue.png` werden nicht verwendet (schon in v25).
- Platzhalter-Links `#linkedin`, `#imprint`, `#privacy`, `#terms` und das nicht angebundene Kontaktformular wie in v25.
