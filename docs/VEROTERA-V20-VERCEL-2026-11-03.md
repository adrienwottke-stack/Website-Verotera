# VEROTERA v20 auf Vercel – 3. November 2026

## Ergebnis

Die von Thorsten Sigges gelieferte statische Website v20 wurde im bestehenden
Projekt `website-verotera` bereitgestellt und auf https://website-verotera.vercel.app/
geschaltet. Das Deployment ist `READY`. Inhalt und Gestaltung der Vorlage wurden
nicht geändert. Die Unternehmensdomain `verotera.com` wurde nicht umgestellt.

Technische Prüfung und Screenshots liegen vor. Eine visuelle Abnahme durch Adrien
oder eine neue inhaltliche Freigabe durch VEROTERA wird damit nicht behauptet.

## Quelle und lokale Übernahme

- SharePoint: Verotera GmbH → Team Website → `Shared Resources - Website/NEW Website 2026`.
- Website der Ablage: https://verotera.sharepoint.com/sites/TeamWebsite.
- Gastzugang über das private Gmail-Konto. Die Microsoft-Fehlermeldung nach der
  Anmeldung betraf die fehlende Zielzuordnung. Nach Öffnen des konkreten Ordners
  funktionierte die vorhandene Anmeldung; eine neue Einladung war nicht nötig.
- Original: `VEROTERA_Website_v20.zip`, am 3. November 2026 heruntergeladen.
- Übergabe: `VEROTERA Website Übergabe an Adrien.docx`, vom 29. Oktober 2026,
  Autor Thorsten Sigges. Beschreibt die Vorlage und bekannte offene Punkte.
- Originaldateien und extrahierter Text: `Kunden Input/2026-11-03-v20/`.
  Dieser Bereich wird nicht hochgeladen oder veröffentlicht.
- SHA-256 des ZIPs:
  `7832823d9efe37a46a553a2d2c1f1442ee9e2858776b41db4ae4883952abbdf4`.
- Alle 41 Quelldateien nach `site-v20/` übernommen und byteweise mit dem ZIP verglichen:
  unverändert. Veröffentlicht werden 40 Website-Dateien; die mitgelieferte README ist ausgeschlossen.

Es wurden keine Prüf-Codes, Zugangstickets oder Sitzungstokens in Projektdateien übernommen.

## Konfiguration und Deployment

- `vercel.json`: Framework `Other` (`null`), keine Installation, kein Build,
  Ausgabeordner `site-v20`.
- HTTP-Konfiguration: Content-Security-Policy für lokale Ressourcen, `nosniff`,
  Referrer-Policy und `noindex, nofollow` für die Arbeitsvorschau.
- `.vercelignore`: Upload nur von `site-v20` und `vercel.json`.
- Die ältere Next.js-Implementierung unter `src/` und `public/` wurde nicht verändert.
- Der bestehende Vercel-Zugangsschutz wurde beibehalten.

Projekt-ID: `prj_FsL4RoGSt8j2UfJ7a77BnTrXHxf9`

Team-ID: `team_Rxa9GTvwX857YSHqLnAHmqpE`

Lokale Vercel CLI: `65.10.0`
Deployment-ID: `dpl_3fnVedMDLHsUWt8FhUgnBVVuvj9F`

- Hauptadresse: https://website-verotera.vercel.app/
- Deployment: https://website-verotera-i87dcjz7x-adrienwottke-7137s-projects.vercel.app/
- Dashboard: https://vercel.com/adrienwottke-7137s-projects/website-verotera/3fnVedMDLHsUWt8FhUgnBVVuvj9F

Zuerst wurde ohne Domain-Zuweisung bereitgestellt. Ein erster Versuch enthielt
wegen eines fehlerhaften Upload-Filters nur die Konfiguration und wurde nicht auf
die Website-Adresse geschaltet. Nach Korrektur bestätigte der CLI-Probelauf 41
Upload-Dateien. Der vollständige Stand wurde geprüft und anschließend über die
Vercel-API promoted. Die Hauptadresse wurde danach mit v20-Inhalt geprüft.

Die Änderungen sind lokal vorhanden. Es wurde kein neuer Commit oder Push
durchgeführt. Das Deployment stammt aus dem lokalen Ordner. Die automatisch
angezeigte Git-Revision `0f2ce83` ist der ältere HEAD und kein Commit der v20-Dateien.
Die aktuelle Quelle ist über ZIP-Hash und Dateivergleich dokumentiert.

Vorheriger Produktionsstand für einen möglichen späteren Rollback:
`dpl_2dbKBevyX8SCBot3cQTyTKUYVABF` vom 29. August 2026. Kein Rollback wurde ausgeführt.

## Prüfungen

- Alle lokalen HTML-/CSS-Dateiverweise vorhanden; keine fehlenden lokalen Assets.
- Neun Inline-Skripte und beide externen JavaScript-Dateien syntaktisch geprüft.
- Alle fünf Seiten lokal bei 1280×800 und 375×812 geprüft; kein horizontaler Überlauf.
- Navigation und EN/DE-Sprachwahl geprüft; Sprachwahl bleibt bei Seitenwechsel erhalten.
- Engineering-Core-Beispiel: Regelansicht, Eskalation mit neuer Revision und erneute
  Bestätigung geprüft. Dies ist ein UI-Test, keine fachliche Modellvalidierung.
- Kontaktformular: Pflichtfelder und Hinweis auf fehlenden Versand geprüft.
  Es wurden keine Nachrichten versendet.
- Alle fünf Seiten auf dem vollständigen Vercel-Deployment geöffnet; Navigation,
  Seitentitel und geladene Bilder vorhanden, keine Konsolenfehler in diesem Prüflauf.
- Hauptadresse nach Promotion geprüft; Live-Screenshots für Desktop und Mobilgerät.
- Nicht angeforderte Offscreen-Bilder mit `loading="lazy"` wurden nicht als defekt gewertet.
- Keine quantitative Performance-Messung, vollständige WCAG-Prüfung oder
  fachliche Modellvalidierung durchgeführt.

Belege: `evidence/v20-2026-11-03/`, insbesondere `static-audit.json`,
`browser-desktop.json`, `browser-mobile.json`, `interactions.json`,
`deployed-checks.json`, `live-desktop.jpg` und `live-mobile.jpg`.

## Offene Punkte der gelieferten Vorlage

- Impressum, Datenschutz, Nutzungsbedingungen und LinkedIn: Footer-Platzhalter.
- Kontaktformular: kein Versand-Endpunkt konfiguriert.
- Mobile Navigation: umbrechende Links; noch kein Burger-Menü.
- SEO: eigene deutsche URLs, hreflang, Sitemap und Robots-Datei fehlen noch.
- Open-Graph-URLs verweisen weiterhin auf `https://www.verotera.com/`.
- Listen-Modus: noch keine Audiodateien eingebunden.

Diese Punkte wurden für den beauftragten ersten Vercel-Stand dokumentiert und
nicht als abgeschlossen oder freigegeben ausgegeben.
