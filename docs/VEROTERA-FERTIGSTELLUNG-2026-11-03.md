# VEROTERA – Fertigstellung und Übergabe, 3. November 2026

## Ergebnis und Geltungsbereich

Die Website basiert auf der mit Thorsten Sigges und dem CEO abgestimmten Vorlage
`VEROTERA_Website_v20`. Die Fertigstellungsrunde bearbeitet die offenen technischen
Punkte der Übergabe vom 29. Oktober. Marketingaussagen, technische Demo-Werte,
Claims, Bildmotive und das grundsätzliche Erscheinungsbild bleiben aus v20.

Die Erstübernahme ist separat in `VEROTERA-V20-VERCEL-2026-11-03.md` dokumentiert.
Der damalige Hinweis „41 Dateien unverändert“ beschreibt ausschließlich diese
Erstübernahme. Der aktuelle Stand erweitert die gemeinsame Bedienlogik und ergänzt
einen Generator, zusätzliche CSS-Regeln, Rechtsentwürfe und die Kontaktfunktion.
Das Original-ZIP liegt weiterhin unverändert unter `Kunden Input/2026-11-03-v20/`.

Zielprojekt: `website-verotera`, ID `prj_FsL4RoGSt8j2UfJ7a77BnTrXHxf9`,
Team `team_Rxa9GTvwX857YSHqLnAHmqpE`.
Arbeitsadresse: https://website-verotera.vercel.app/.

## Umgesetzt

| Bereich | Verhalten im aktuellen Quellstand |
| --- | --- |
| Navigation | Auf kleinen Displays ausklappbares Menü mit `aria-expanded`, Escape, Fokus-Rückgabe, Schließen nach Link-/Außenklick und bei Wechsel zum Desktop. |
| Sprachen | 8 Seiten je Sprache: Englisch unter `/`, Deutsch unter `/de/`. Der Inhalt steht bereits übersetzt im HTML. Der Sprachwechsel erhält den Themenanker. |
| SEO | Titel, Beschreibungen, Canonical, `hreflang` EN/DE/x-default, Open Graph, Organization-JSON-LD und Sitemap für 16 Sprachadressen. |
| Rechtsseiten | Impressum, Datenschutz und Nutzungshinweise in EN/DE als sichtbar gekennzeichnete Entwürfe, ohne erfundene Vertrags- oder Rechtsfreigabe. |
| Kontakt | Serverseitiger Node-Endpunkt `/api/contact`; JSON-POST, Validierung, Honeypot, begrenzte Anfragegröße, Herkunftsprüfung, Zeitlimit und Idempotenz beim Anbieter. |
| Versandstatus | Ohne vollständige Konfiguration bleibt Senden deaktiviert. Ein Hinweis steht vor den Feldern; die direkte E-Mail-Adresse bleibt erreichbar. Kein vorgetäuschter erfolgreicher Versand. |
| Zugänglichkeit | Sprunglink, Hauptbereich, sichtbarer Tastaturfokus, verständliche Namen, korrigierte Textkontraste, fokussierbare Codeansicht, zugehörige Überschriften und Fehlermeldungen. |
| Bilder | Lokale WebP-Ausgabe, begrenzte Größen für Karten/Porträt, Bildmaße im statischen HTML und verzögertes Laden der Themenbilder. Motive und Optical-Gate-Driving-Grafik inhaltlich unverändert. |
| Sicherheit | HTTPS auf Vercel; CSP als Header, HSTS, `nosniff`, Referrer-Policy; keine externen Schrift- oder Analysebibliotheken im Seitenbetrieb. |
| Alte Links | Weiterleitungen für frühere wichtige Next.js-Adressen, eigene Fehlerseite, erreichbare LinkedIn-/Rechtslinks. |
| Pflege | Reproduzierbarer Build mit isolierter Lockdatei und aktuellem Node.js; statische Link-/Anker-/Syntaxprüfung und gezielte Endpunkt-Tests. |

`site-v20/` bleibt die redaktionelle Vorlage. Der Generator rendert die Themen aus
ihren bestehenden Sprachpaaren, damit sichtbarer Inhalt und Suchmaschinen-HTML
zusammenpassen. Die Ausgabe `dist/` wird nicht manuell bearbeitet.

## Verifikation

- `node site-tools/build.mjs`: 16 lokalisierte Seiten sowie `404.html` erzeugt.
- `node site-tools/check.mjs`: 17 HTML-Seiten, 56 Ausgabedateien; keine defekten
  lokalen Verweise/Anker, doppelten IDs oder Skript-Syntaxfehler in der Ausgabe.
- `node --test tests/contact.test.mjs`: 8/8 bestanden. Der Anbieter ist simuliert;
  es wurde keine echte Formular-E-Mail verschickt.
- `npm audit --prefix site-tools --omit=dev`: keine bekannten Schwachstellen in
  den für diese aktive Website verwendeten Produktionsabhängigkeiten.
- Die optimierten JPG-Fotos belegen 3.566.038 statt 6.698.509 Bytes, rund 47 % weniger.
  Das ist eine Dateigrößenmessung; es ist keine Aussage über Ladezeit oder eine
  Messung bei einer langsamen Mobilfunkverbindung.
- Browserbelege und abschließende Prüfungen werden unter
  `evidence/completion-2026-11-03/` gespeichert. Automatische axe-Prüfungen ersetzen
  keine vollständige Prüfung mit assistiven Technologien.

Die Demo-Regelinspektion wurde geöffnet. Eine Eskalation öffnete Revision 1;
erneutes Bestätigen übernahm dieselbe Revision ins strukturierte Ergebnis. Der
Kontaktlink wählte „Engineering Core“ vor. Beim Wechsel auf Deutsch blieb dieser
Anker erhalten. Das mobile Menü öffnete/schloss, Escape stellte den Fokus wieder
auf den Menüknopf. Die Codeansicht hat einen Tastaturfokus und die Themenleiste
wird zur Laufzeit genau einmal erzeugt.

## Noch durch VEROTERA bzw. mit passendem Zugang abzuschließen

### 1. Mailversand

Adrien hat bestätigt, dass die Einrichtung noch fehlt. Der früher lokal hinterlegte
Resend-Schlüssel wurde vom Anbieter abgelehnt; in Vercel fehlt `CONTACT_FROM`.
Die bloße Existenz eines Schlüsselfeldes bestätigt keinen funktionierenden Zugang.

1. Im zuständigen Resend-Konto die gewünschte Absenderdomain hinzufügen. Eine
   separate Versand-Subdomain kann mit dem Domainverwalter abgestimmt werden.
2. VEROTERA trägt ausschließlich die vom Anbieter angezeigten Verifizierungs-
   und DKIM-Einträge ein. Bestehende Microsoft-365-/Postfach-MX- und SPF-Daten
   berücksichtigen; keine komplette DNS-Zone oder Mailzustellung ersetzen.
3. Nach erfolgreicher Verifizierung einen gültigen, passend eingeschränkten
   Versandschlüssel sicher in Vercel hinterlegen. `CONTACT_FROM` auf eine vom
   Anbieter erlaubte Adresse setzen, `CONTACT_TO` auf den bestätigten Empfänger.
   Keine Schlüssel per Chat, E-Mail oder Git weitergeben.
4. Anbieter-/Verarbeitungsvereinbarungen und Datenschutzerklärung für den
   tatsächlichen Versandweg abschließend abgleichen; den Einrichtungsabsatz
   vor Aktivierung entsprechend aktualisieren.
5. Neu deployen. Danach muss `GET /api/contact` `{"available":true}` liefern.
6. Einen ausdrücklich abgestimmten Testversand ausführen und den tatsächlichen
   Empfang einschließlich Antworten und Spamordner prüfen. Anbieterannahme und
   Postfachzustellung sind getrennte Nachweise.

Die IP-Begrenzung ist ein zusätzlicher Schutz im Arbeitsspeicher einer Instanz
(5 Versuche/10 Minuten, maximal 2.000 Einträge); sie ist keine globale verteilte
Sperre. Die Hash-Einträge werden per Timer nach zehn Minuten entfernt. Bei
relevantem Missbrauch kann die bestehende Plattform-Firewall ergänzt werden.

### 2. Rechts- und Firmenfreigabe

Die Firmendaten stammen aus Thorstens Übergabe und sind dort selbst als zu
bestätigen markiert: Verotera GmbH, Böhlerstraße 1, 40667 Meerbusch,
Geschäftsführer Aly Mashaly, Amtsgericht Neuss HRB 24862, USt-IdNr. DE459297445.
Vor dem öffentlichen Start bestätigt VEROTERA die Daten und lässt die konkreten
Rechtstexte einschließlich Hosting, Anbietervereinbarungen, Speicherfristen und
Versandweg abschließend fachlich prüfen.

Vercel liefert über internationale Infrastruktur aus; eine reine Verarbeitung
in der EU wird nicht behauptet. Die konfigurierte Funktionsregion Frankfurt
garantiert keine weltweite Datenresidenz. Ein wirksamer Auftragsverarbeitungsvertrag
wurde in dieser Arbeit nicht nachgewiesen. Ältere lokale Muster aus Mai 2025
wurden nicht als endgültige Freigabe behandelt.

Referenzen für die Prüfung: [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html),
[Vercel DPA](https://vercel.com/legal/dpa),
[Vercel Privacy Notice](https://vercel.com/legal/privacy-policy),
[Resend Security](https://resend.com/security),
[Resend Privacy Policy](https://resend.com/legal/privacy-policy).

### 3. Domain und öffentlicher Start

Adrien: DNS wird bisher von VEROTERA verwaltet; aktuell können wir dort nichts
ändern. Es wurde keine Domainübernahme, DNS-Änderung oder Abschaltung des alten
Webauftritts vorgenommen. Die bestehende Vercel-Zugangsregel bleibt aktiv.

1. Nach fachlicher Freigabe `www.verotera.com` und `verotera.com` dem oben genannten
   Vercel-Projekt zuordnen; `www` als Hauptadresse festlegen, Root dorthin umleiten.
2. Die konkret in Vercel für dieses Projekt angezeigten DNS-/Verifizierungswerte
   an VEROTERAs Domainverwalter geben. Keine allgemeinen A-/CNAME-Werte raten.
3. Domainverwalter setzt nur die nötigen Website-Einträge, erhält die Mail-DNS-
   Daten und prüft die Auflösung. Vercel-Verifizierung und TLS abwarten.
4. `SITE_ORIGIN=https://www.verotera.com` beibehalten. Nach bestätigter Freigabe
   `LEGAL_APPROVED=true` und für den öffentlichen Start `PUBLIC_RELEASE=true`
   setzen, neu bauen/deployen. Ein öffentlicher Build ohne Rechtsfreigabe bricht ab.
5. Hauptdomain, Root-Weiterleitung, alle EN/DE-Seiten, Formular und Rechtsseiten
   ohne Vercel-Anmeldung prüfen. Sitemap erst für die tatsächlich aktive Domain
   einreichen. Die `.vercel.app`-Adressen behalten einen `noindex`-Header.

Bis dahin bleiben `robots.txt` und Seitenmetadaten auf `noindex`/gesperrt. Die
Canonical-/Open-Graph-Ziele sind für die spätere Hauptdomain vorbereitet; diese
Ziele sind noch kein Nachweis einer erfolgreichen Domainumstellung.

## Bewusst spätere Inhalte

Der Hörmodus ist in Thorstens Übergabe optional; Aufnahmen fehlen. Optical Gate
Driving als eigene Seite, News und Karriere benötigen weitere Inhalte von
VEROTERA. Es wurden dafür keine erfundenen Nachrichten, Stellen oder technischen
Produktbehauptungen veröffentlicht. Die lokale Systemschrift bleibt bestehen;
eine spätere feste Webschrift muss lokal gehostet und mit dem Design abgestimmt
werden. Externe Schriften oder Tracking wurden nicht ergänzt.

## Deployment- und Git-Nachweis

Der endgültig geprüfte Deployment- und Git-Stand wird nach Abschluss der
Bereitstellung in diesem Abschnitt ergänzt. Als Rückfall steht die ursprüngliche
v20-Bereitstellung `dpl_3fnVedMDLHsUWt8FhUgnBVVuvj9F` bereit.
