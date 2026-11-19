# VEROTERA Website-Varianten (Design-Review)

Drei Fassungen derselben Website, umschaltbar über die Leiste oben:

| Ordner | Inhalt |
|---|---|
| `v25` | Kundenpaket v25, unverändert (nur Review-Leiste + `noindex` eingehängt) |
| `v2`  | Gleiche Texte, gleiche Seiten, gleiche Sitemap. Nur Designschicht `src/v2/assets/v2.css` + `v2.js` |
| `v3`  | V2-Design + neue, conversion-orientierte Texte (`src/v3/`, Zusatzschicht `src/v3/assets/`) |

## Arbeiten
- `node build.mjs` erzeugt `public/` (v25 aus `src/v25`, v2 = v25 + Layer, v3 = `src/v3/*.html` + Layer).
- `node v3-prepare.mjs` erzeugt `src/v3/*.html` neu aus `src/v25` + `src/v3/_home-main.html`.
  Texte für V3 also dort bzw. im Skript ändern, nicht in `src/v3/*.html` direkt.
- Lokale Vorschau: `node serve.mjs` → http://127.0.0.1:5190/
- Deployment: eigenes Vercel-Projekt `verotera-varianten`, Root Directory `verotera-varianten`.

## Hinweis zu V3-Texten
Alle Zahlen und Aussagen stammen aus v25 (Gate-Driving-Werte von der Solutions-Seite,
Gründer-Bio von About, Spannungs-/Leistungsangaben aus den Anwendungsprofilen,
"zwei Werktage" aus dem Kontaktformular). Vor einem Livegang trotzdem vom Kunden freigeben lassen.
