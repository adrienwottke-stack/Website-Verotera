# Reply-Entwuerfe Runde 2026-11-23 (v26, #384–#410)

Freigabe: offen
<!-- Adrien: `offen` auf `erteilt` setzen gibt alles frei.
     Einzelne Punkte gehen auch: das [ ] beim Punkt auf [x] setzen.
     Texte duerfen direkt hier geaendert werden — gepostet wird immer die Fassung aus dieser Datei.
     Nichts davon ist gepostet. Kein Status wird geaendert, nichts auf resolved. -->

**Reihenfolge:** Die umgesetzten Punkte sind erst sichtbar, wenn der Stand auf
website-verotera.vercel.app deployt ist. Deshalb erst deployen, dann die Replies posten.

**Zur Bedienung:** Wo eine Ueberschrift mehrere Nummern nennt, geht **derselbe Text an alle
genannten Punkte**.

---

# Teil A — umgesetzte Punkte (Status danach jeweils: in-review)

## [ ] #384 — Header-Schrift fuer v26 Final

    Umgesetzt in "V26 · Design": Die Header-Ueberschrift hat jetzt auf allen Seiten die Schrift
    aus "V26 · Showcase", deutlich kleiner und mit einem Verlauf von Weiss nach Silbergrau.
    Den Verlauf habe ich leicht schraeg gelegt, damit auch zweizeilige Ueberschriften gleichmaessig
    aussehen.

    Zur Schrift: Das ist Poppins SemiBold. Sie steht unter der SIL Open Font License, darf also
    frei eingesetzt werden, und liegt bereits lokal auf dem Server, ohne Google Fonts. Die
    Lizenzdatei liegt mit dabei.

## [ ] #385 — Icons in den Kreisen

    Umgesetzt. Die Icons sitzen jetzt bei 01 bis 03 genau mittig in ihren Kreisen.

## [ ] #387 — Closing CTA wie im Original

    Umgesetzt, auf allen Seiten: Der Abschluss-Bereich entspricht jetzt "V26 · Original", ohne
    Raster im Hintergrund und mit V-Logo und Schriftzug in den Originalfarben und -groessen.

## [ ] #389 — Bildunterschrift Video

    Umgesetzt. Die Bildunterschrift endet jetzt mit "Contains AI-generated images." bzw.
    "Enthaelt KI-generierte Bilder."

## [ ] #390 — Label am Bild

    Umgesetzt. Unten links im Bild steht jetzt klein "AI-generated image" bzw.
    "KI-generiertes Bild".

    Eine kurze Rueckfrage: Ich habe das Label nur an diesem Bild angebracht. Fast alle Bilder der
    Website sind KI-generiert, das steht bisher im Footer jeder Seite.
    A) (meine Empfehlung) Nur hier, weil das Bild direkt neben dem Video steht und die Frage dort
       am naechsten liegt. Der Footer-Hinweis deckt den Rest ab.
    B) An allen KI-generierten Bildern.
    Ein Buchstabe genuegt.

## [ ] #391 · #394 · #408 — Trennlinien

    Umgesetzt. Die Lichtlinie unter den Ueberschriften hat jetzt auf allen Seiten einen festen
    Abstand zur Ueberschrift und mindestens 24 px Luft zum Inhalt darunter. Sie stoesst nicht
    mehr an Bilder oder Text.

## [ ] #393 — Vision, deutscher Satz

    Umgesetzt. Der Satz lautet jetzt "VEROTERA bringt fortschrittliche Halbleitertechnologien in
    die Anwendung, mit Packaging-Loesungen fuer mehr Energieeffizienz und eine nachhaltige
    Zukunft."

## [ ] #395 · #396 · #397 · #401 · #404 · #405 · #406 · #409 — neue deutsche Texte

    Umgesetzt, wortgleich wie von dir geliefert.

## [ ] #399 — "auf Basis des eigenen"

    Umgesetzt: "VEROTERA entwickelt Power-Module auf Basis des eigenen Advanced Packaging, …"

## [ ] #400 — Topologie, deutsche Fassung

    Umgesetzt: "Ihre Systementscheidung; VEROTERA unterstuetzt aus Sicht des Power-Moduls."
    "Power-Moduls" habe ich mit Bindestrich geschrieben, so wie "Power-Modul" ueberall sonst auf
    der Seite steht.

## [ ] #402 — Arbeitsbereich der Halbleitertechnologien

    Umgesetzt. Der erste Satz lautet jetzt "Jede Halbleitertechnologie hat ihren Arbeitsbereich
    bei Leistung und Schaltfrequenz." Der zweite Satz zu SiC und GaN bleibt unveraendert.

## [ ] #407 — Packaging-Text

    Umgesetzt, auf Deutsch: "SiC- und GaN-Chips schalten so schnell, dass konventionelle Aufbau-
    und Verbindungstechnik zum Engpass wird. Unser Packaging ist genau dafuer ausgelegt."

    Die englische Fassung sagt noch "…faster than conventional packages can keep up with". Soll
    ich sie angleichen? Mein Vorschlag: "SiC and GaN chips switch so fast that conventional
    assembly and interconnect technology becomes the bottleneck. Our packaging is designed for
    exactly that." Ein Ja genuegt.

## [ ] #410 — Packaging expertise (EN)

    Umgesetzt: "Packaging expertise built on device know-how: we understand the chip as well."

---

# Teil B — Rueckfragen (Status danach jeweils: in-review)

## [ ] #386 — Aufloesung der Bilder

    Kurze Antwort: Bei normaler Bildschirmskalierung (100 %) passt die Aufloesung. Bei 150 %,
    wie auf vielen Laptops ueblich, wirken vier der fuenf Kacheln im aufgeklappten Zustand leicht
    weich: Sie sind 800 px breit und werden dort mit rund 710 px gezeigt. E-Mobilitaet ist mit
    1200 px scharf.

    A) (meine Empfehlung) Wenn ihr die vier Bilder in mindestens 1600 px Breite habt, schickt sie
       mir, dann tausche ich sie aus.
    B) So lassen.

## [ ] #388 · #392 — Legal Notices und Rueckruf-Formular

    Die Links Impressum, Datenschutz und Nutzungsbedingungen im Footer sind bisher Platzhalter,
    dahinter gibt es noch keine Seiten. Fuer den Livegang muessen sie stehen, und das Formular
    braucht einen Datenschutzhinweis.

    Mein Vorschlag:
    A) (meine Empfehlung) Ich baue die drei Seiten im Stil der Website und uebernehme die Texte
       aus dem bisherigen Stand (Impressum, Datenschutzerklaerung, Nutzungsbedingungen). Ihr lasst
       sie einmal juristisch pruefen, bevor die Seite live geht.
    B) Ihr liefert neue, gepruefte Texte, ich setze sie ein.

    In die Datenschutzerklaerung gehoeren fuer diese Website nach meinem Stand: Hosting (Vercel),
    das Kontakt- bzw. Rueckrufformular (welche Daten, wofuer, wie lange), der E-Mail-Versand der
    Anfragen, die lokal gespeicherte Sprachwahl im Browser und das eingebettete Video (liegt auf
    dem eigenen Server, also kein YouTube). Externe Schriften oder Tracking gibt es nicht.

    Zum Rueckruf-Formular brauche ich drei Dinge von euch:
    1. An welche Adresse sollen Anfragen gehen (z. B. info@verotera.com)?
    2. Einverstanden, dass ich ein Pflicht-Haekchen "Ich stimme der Verarbeitung meiner Daten
       gemaess Datenschutzerklaerung zu" ergaenze?
    3. Die Telefonnummer wird schon auf ein gueltiges Format geprueft (Ziffern, +, Leerzeichen,
       mindestens 6 Zeichen). Reicht das, oder soll sie mit Laendervorwahl erzwungen werden?

    Sobald ich die Antworten habe, richte ich den Versand ein und teste beide Modi
    (Nachricht und Rueckruf) mit allen Pflichtfeldern.

## [ ] #398 · #403 — fehlende deutsche Uebersetzung (Loesungen ab Phase 01, Ueber uns ab "Wer wir sind")

    Danke fuer den Screenshot. Die deutschen Texte fuer diese Bereiche sind vorhanden: Wenn ich
    die Seite direkt im Browser oeffne und auf Deutsch stelle, erscheinen Phase 01 bis 05 und
    "Wer wir sind" komplett auf Deutsch, in Chrome und Edge. Diese Bereiche werden beim
    Sprachwechsel neu aufgebaut, und das scheint in der Pastel-Ansicht nicht zu klappen.

    Damit ich das sauber eingrenzen kann: Oeffne bitte einmal
    https://website-verotera.vercel.app/v26-design/solutions.html direkt im Browser (nicht ueber
    Pastel) und stell oben rechts auf Deutsch. Ist dann noch etwas Englisch, schick mir bitte einen
    Screenshot und den Browser. Ist alles Deutsch, liegt es an der Pastel-Ansicht, und die
    Website selbst ist in Ordnung. Ich schaue dann trotzdem, dass die Umschaltung auch in Pastel
    greift, damit ihr beim Review nicht darueber stolpert.
