# Feedback round 2026-11-23 (v26), Pastel canvas 929322

**Summary.** 27 new comments from Thorsten (23.11., version "29.10 Neuste Version"), all on the
review site (`/v26-design/…`, #393 on `/v26/…`). Read directly via the Pastel MCP; no thread has
replies or attachments. **22 points are done** (15 texts, 4 design changes, 3 divider points
already covered by commit 55a114d from 23.11. evening). **5 points are waiting on an answer**
(legal pages, callback form, image resolution, plus the missing German on Solutions/About, which
I cannot reproduce outside Pastel). On top of that, Adrien's own point from the chat: the
flashlight on frameless blocks.

Where the changes sit: copy in `src/v26/*.html` (applies to all three variants, Original
included), design in `src/v2/assets/v2.css|js` (Design variant only). #384 says that
"v26 Final" = Design + these changes + the Showcase headline.

## Categories

| Category | Count | Points |
|---|---|---|
| IMPLEMENTABLE | 22 | #384 #385 #387 #389 #390 #391 #393 #394 #395 #396 #397 #399 #400 #401 #402 #404 #405 #406 #407 #408 #409 #410 |
| DECISION | 3 | #386 #388 #392 |
| UNCLEAR | 2 | #398 #403 |
| ASSET MISSING / NO LONGER APPLIES | 0 | |
| **Total** | **27** | |

Status: ✅ done and verified · ⚠️ done under an assumption · ⬜ open

## Home (`index.html`), 12

| No. | Category | Location | Language | Status | Note |
|---|---|---|---|---|---|
| #384 | IMPLEMENTABLE | v2.css header h1 | both | ⚠️ | Poppins SemiBold (OFL, already self-hosted under `assets/fonts`, no Google Fonts), Showcase tracking, 56/48 px instead of 124 px, gradient white → silver-grey **diagonal** (100°), so headlines that wrap stay the same colour. Assumption: the size and the direction of the gradient |
| #385 | IMPLEMENTABLE | v2.css `.gp-icon` | both | ✅ | site.css packed the grid track to the left (`justify-content:flex-start`); icon was 11 px left of centre, now 0 px |
| #386 | DECISION | `.fields.five` images | – | ⬜ | Question only. 4 of 5 tiles are 800 px wide, the expanded tile shows them at about 710 px: sharp at 100 %, slightly soft at 150 % display scaling |
| #387 | IMPLEMENTABLE | v2.css `.cta` | both | ✅ | grid, travelling light and enlarged logo removed; computed CTA styles identical to Original. Applies to all pages |
| #388 | DECISION | footer `nav.legal` | both | ⬜ | Imprint/Privacy/Terms are placeholder anchors (`#imprint` …), there are no pages behind them |
| #393 | IMPLEMENTABLE | `.vmx-vision` DE | DE | ✅ | text taken over word for word |
| #394 | IMPLEMENTABLE | v2-rule under "Explore" | both | ✅ | the pin sits on the light rule under the headline, which touched the images. Fixed by 55a114d (live 23.11. 19:33, after the comment): now 24 px gap |
| #395 | IMPLEMENTABLE | `.vmx-pt` 3 DE | DE | ✅ | EN unchanged (already matches) |
| #396 | IMPLEMENTABLE | `.glance-head p` DE | DE | ✅ | |
| #397 | IMPLEMENTABLE | `.world > p` DE | DE | ✅ | "Felder" → "Bereiche" |
| #407 | IMPLEMENTABLE | `.gp-pm .gp-text` DE | DE | ✅ | EN deliberately unchanged ("…faster than conventional packages can keep up with"), see open items |
| #408 | IMPLEMENTABLE | v2-rule under "The Electrified World" | both | ✅ | as #394, now 52 px gap |

Subtotal 12: 9 ✅ · 1 ⚠️ · 2 ⬜

## Hybrid AI (`engineering-core.html`), 5

| No. | Category | Location | Language | Status | Note |
|---|---|---|---|---|---|
| #389 | IMPLEMENTABLE | `.ew-video figcaption` | both | ✅ | appended "Contains AI-generated images." / "Enthält KI-generierte Bilder." |
| #390 | IMPLEMENTABLE | `.ec-pair-img` | both | ⚠️ | label "AI-generated image" / "KI-generiertes Bild" at the bottom left of the image (`.ai-label`, site.css). Assumption: only this image (where the pin is), not all images |
| #391 | IMPLEMENTABLE | v2-rule under "Capture. Evaluate. Trace." | both | ✅ | as #394: the rule sat 1 px above the paragraph; 55a114d |
| #401 | IMPLEMENTABLE | `.ec-pilot` DE | DE | ✅ | |
| #406 | IMPLEMENTABLE | `.vmx-st h2` DE | DE | ✅ | |

## Solutions (`solutions.html`), 3

| No. | Category | Location | Language | Status | Note |
|---|---|---|---|---|---|
| #398 | UNCLEAR | phases 01–05 | DE | ⬜ | His screenshot: tiles in German, phase content in English. Locally **and** live (website-verotera.vercel.app) everything switches to German, both on load and via the switcher. Phase content is rendered by JS (`render()` → `renderTopics`); apparently `render()` aborts in the Pastel frame, but the second listener (`buildTopicBar`) still runs. Pastel's proxy cannot be opened directly, so not reproducible |
| #399 | IMPLEMENTABLE | `.apps-lead` DE | DE | ✅ | "seines eigenen" → "des eigenen" |
| #400 | IMPLEMENTABLE | JS dictionary stage1 "Topology" | DE | ✅ | "Ihre Systementscheidung; VEROTERA unterstützt aus Sicht des Power-Moduls." Hyphen added in "Power-Moduls" (house spelling "Power-Modul") |

## About (`about.html`), 6

| No. | Category | Location | Language | Status | Note |
|---|---|---|---|---|---|
| #402 | IMPLEMENTABLE | JS dictionary `lead1` DE | DE | ✅ | first sentence replaced, second sentence (SiC/GaN) stays |
| #403 | UNCLEAR | from "Who We Are" | DE | ⬜ | same pattern as #398 (content from the JS dictionary); renders German locally and live |
| #404 | IMPLEMENTABLE | JS dictionary `values[0]` DE | DE | ✅ | EN unchanged |
| #405 | IMPLEMENTABLE | `.kf` 3 DE | DE | ✅ | |
| #409 | IMPLEMENTABLE | JS dictionary `bring[0]` DE | DE | ✅ | |
| #410 | IMPLEMENTABLE | static HTML + JS dictionary EN | EN | ✅ | both places (2×) |

## Contact (`contact.html`), 1

| No. | Category | Location | Language | Status | Note |
|---|---|---|---|---|---|
| #392 | DECISION | `.cf-mode`, form | both | ⬜ | Form not connected (v26 README: "not connected yet"). The phone field already has `required` + a pattern check; no consent checkbox. Needed: recipient address, sending service, privacy text. Linked to #388. Technical: the CSP in every page has `form-action 'none'` and no `connect-src`, so it has to be opened up when the form is wired (e.g. to `api/contact.mjs` from v20) |

## Totals

Per page: Home 12 + Hybrid AI 5 + Solutions 3 + About 6 + Contact 1 = **27** ✓
Per category: 22 + 3 + 2 = **27** ✓ · Status: 20 ✅ + 2 ⚠️ + 5 ⬜ = 27 ✓

## Outside the round (Adrien, chat 24.11.)

Flashlight on blocks with no frame (Solutions phase 05 "Your system" / "Supported by VEROTERA",
"Light-activated Gate Driving", the two `.cred` blocks): the glow was clipped at the invisible box
edge and the edge light traced a frame that isn't there. Now: frameless blocks are detected
automatically (`v2-spot-free`), the glow fades out freely, no edge light. Framed cards unchanged.

## Conflicts / dependencies

- **Copy in `src/v26` also changes "V26 · Original".** Until now Original was the untouched
  customer package. Consistent with #384 ("v26 Final" = Design), but the next customer package
  (`src/v26` replaced) would drop these text changes again. Take them over before importing.
- **#407 DE ≠ EN in meaning.** New DE: "…dass konventionelle Aufbau- und Verbindungstechnik zum
  Engpass wird". EN still says "…faster than conventional packages can keep up with". Not changed
  without a request.
- **#388 and #392** belong together (privacy notice for the form).
- **#398/#403** are not a translation gap: the German text exists. Ask how he was looking at it
  before anything gets "translated".

## What to do now

- Without a question: done (see ✅).
- Needs an answer: #388, #392, #386 (just reply), #398/#403 (reproduce).
- Confirmation only: #384 (size/gradient), #390 (only this image?).
