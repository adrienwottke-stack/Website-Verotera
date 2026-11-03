# VEROTERA Website

Die aktuelle Website basiert auf Thorsten Sigges' abgestimmter Vorlage
`VEROTERA_Website_v20` vom 29. Oktober 2026. Die Fertigstellungsrunde ergänzt
Bedienung, Sprachadressen, SEO, Rechtsseiten als Entwurf und einen vorbereiteten
Kontakt-Endpunkt. Die Marketingtexte und technischen Beispiele bleiben aus v20.

- Arbeitsvorschau: https://website-verotera.vercel.app/
- Quellvorlage und gemeinsame Browserdateien: `site-v20/`
- Reproduzierbarer Generator: `site-tools/build.mjs`
- Ausgabe: `dist/` (generiert, nicht in Git)
- Formular-Endpunkt: `api/contact.mjs`
- Aktueller Prüf- und Übergabestand: [Fertigstellung vom 3. November](docs/VEROTERA-FERTIGSTELLUNG-2026-11-03.md)
- Historischer Importnachweis: [Unveränderte v20-Erstübernahme](docs/VEROTERA-V20-VERCEL-2026-11-03.md)

## Lokal starten

Node.js 24.11 oder neuer verwenden. Die aktive Website hat eine isolierte,
festgeschriebene Toolchain; die alten Next.js-Abhängigkeiten sind nicht nötig.

```powershell
npm ci --prefix site-tools
npm run dev
```

Danach http://127.0.0.1:5185/ öffnen. Nach Änderungen `npm run build` ausführen
und die Seite neu laden. `npm start` startet die bereits gebaute Ausgabe.

```powershell
npm run build
npm run check
npm test
```

`check` prüft die 16 Sprachseiten und die Fehlerseite einschließlich lokaler Links,
Anker, Sprachangaben und Skriptsyntax. Die Formular-Tests verwenden ausschließlich
einen simulierten Mailanbieter. Der lokale Vorschau-Server liest keine `.env`-Datei
automatisch ein und verschickt in der Standardkonfiguration keine E-Mails.

## Inhalte und Sprachen

Englisch liegt unter `/`, Deutsch unter `/de/`; Unterseiten heißen beispielsweise
`/about.html` und `/de/about.html`. Die Sprachadresse bestimmt den Inhalt auch ohne
JavaScript. Ein bewusster Sprachwechsel führt zur entsprechenden anderen Adresse
und erhält den Themenanker. Claims und Säulennamen bleiben gemäß Übergabe Englisch.

Die Inhaltspaare in den Skripts der v20-HTML-Dateien sind die redaktionelle Quelle
für die Themen. Der Build rendert beide Sprachen vor und hält die sichtbaren
Themen, Metadaten und HTML-Ausgabe konsistent. Zusätzliche Rechtsseiten werden in
`site-tools/legal-content.mjs` gepflegt. Bilder bleiben lokal; der Build erzeugt
optimierte WebP-Dateien und begrenzt unnötig große Kartenbilder.

## Vercel und noch offene Einrichtung

`vercel.json` installiert nur `site-tools`, baut `dist/` und stellt zusätzlich die
Node-Funktion bereit. `.vercelignore` begrenzt CLI-Uploads auf diese Quellen.
Umgebungsdateien und interne Kundenunterlagen werden nicht hochgeladen.

Die Vorschau bleibt bei `PUBLIC_RELEASE=false` mit `noindex` und der bestehenden
Vercel-Zugangsregel. Die spätere kanonische Adresse ist `https://www.verotera.com`;
DNS liegt laut Adrien bei VEROTERA und ist derzeit nicht umstellbar.

Für den echten Versand fehlen noch ein gültiger Resend-Zugang und ein verifizierter
Absender. Benötigte serverseitige Variablen: `RESEND_API_KEY`, `CONTACT_FROM`,
`CONTACT_TO`. Ohne vollständige Konfiguration zeigt die Seite den Einrichtungshinweis
und `info@verotera.com`. Die Anbieterannahme einer Nachricht wird erst nach einer
erfolgreichen Antwort als Erfolg angezeigt; eine Zustellung ins Postfach ist separat
zu prüfen. Keine Schlüssel in Repository, Chat oder Dokumentation eintragen.

Impressum, Datenschutz und Nutzungshinweise sind überprüfbare Entwürfe, noch ohne
abschließende Unternehmens-/Rechtsfreigabe. Vor einem öffentlichen Start sind die
Firmendaten, Hosting-/Versandvereinbarungen und die aktualisierte Datenschutzerklärung
zu bestätigen. Danach `LEGAL_APPROVED=true` setzen; `PUBLIC_RELEASE=true` schaltet
die Indexierung beim nächsten Build ein. Ein öffentlicher Build ohne bestätigte
Rechtsfreigabe bricht ab. Siehe die konkreten Schritte im Fertigstellungsbericht.

## Frühere Implementierung

Die ältere Next.js-Anwendung unter `src/` und `public/` bleibt als historische
Implementierung erhalten. Ihre Befehle heißen `dev:legacy`, `build:legacy`,
`start:legacy` und `lint:legacy`; sie gehören nicht zur aktuellen Vercel-Website.
