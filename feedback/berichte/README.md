# Berichte der Pastel-Dauerrunde

Der geplante Task `pastel-feedback-runde` sieht taeglich um 10:00 und 16:00 auf das
Pastel-Board (Canvas 929322, „VEROTERA | Next-Gen Leistungselektronik & KI-Systeme"),
triagiert nach den fuenf Kategorien aus der Skill `kundenfeedback-runde`, setzt die
eindeutigen Punkte um und legt hier ab:

| Datei | Inhalt |
|---|---|
| `<YYYY-MM-DD>-<1000\|1600>.md` | Protokoll eines Laufs: Kurzfassung, Umgesetztes mit Commit-Hashes, ins Board gepostete Rueckfragen, was auf den Kunden wartet, was Adrien pruefen muss |
| `OFFEN.md` | Rollender Gesamtstand ueber alle Runden. Wird bei jedem Lauf ueberschrieben. Der Ueberblick, ohne die Einzelberichte zu lesen. |

Die vollstaendigen Runden-Dokumente der CSV-Runden liegen weiterhin unter
`feedback/<runId>/` (PLAN.md, UMSETZUNG.md, RUECKFRAGEN-KUNDE.md, pruefung.json).

## Branches

Der Job committet lokal und pusht ausschliesslich auf `review/pastel` (Vercel-Preview).
Auf `main` wird nie gepusht, gemergt oder rebast — lokal und `origin/main` sind divergiert.
