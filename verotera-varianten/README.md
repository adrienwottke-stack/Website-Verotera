# VEROTERA Website: V26 Design (Review)

One version of the website, built from the customer package `src/v26` plus the design layer
`src/v2/assets/v2.css` + `v2.js`, served at `/v26-design/`.

"V26 · Original" and "V26 · Showcase" were removed on 24 Nov 2026 (Adrien). Their old URLs
(`/v26/…`, `/v26-showcase/…`) redirect to `/v26-design/…` (root `vercel.json` on the branch).
The showcase layer (`src/vx`) and the review bar (`src/_switch`) are in git history (55a114d).

Feedback round 20 Nov 2026 (Thorsten), implemented in the design layer:
header and colours as in v26 · no signal curve in the header · spotlight on cards,
reveal animations and the grid in the CTA kept · V logo in the CTA larger.

## Smoothness rules (pass of 22 Nov 2026)
Measured with headless Chrome on an Intel Iris Xe laptop at 150 % scaling; the original v26
is the reference. Keep these when adding effects:
- One `requestAnimationFrame` ticker per layer: read layout first, write afterwards.
- Never write custom properties on `:root` per frame (restyles the whole page).
- Move things with `transform` / `translate` / `rotate` on elements that have their own
  layer (`will-change`), never by repainting gradients, masks or `width`/`height`.
- No `mix-blend-mode` or `filter` on large or fixed layers.
- Reveal blocks start at `opacity:.01`, not 0: the GPU skips fully transparent layers and
  then has to raster everything at once when they appear (that made the gallery hitch).
- Canvases pause off screen and lower their quality when frames drop.

## Working on it
- `node build.mjs` generates `public/` (`v26-design` from `src/v26` + `src/v2`).
- About and Solutions: the topic sections hold both languages (`.l-en` / `.l-de`, switched by CSS),
  baked by `node tools/bake-i18n.mjs` from the dictionaries in the page scripts. Run it again after
  changing those texts or importing a new customer package; `tour.js` no longer rebuilds sections
  marked `data-i18n="static"`. Reason: inside the Pastel review frame the JS rebuild failed after
  the tiles, so the topics stayed English (feedback 23 Nov, #398 #403).
- Local preview: `node serve.mjs` → http://127.0.0.1:5190/
- New customer package: replace `src/v26` (or add a new folder and adjust `build.mjs`).
- Deployment:
  - Vercel project `website-verotera` (website-verotera.vercel.app) from branch
    `design/verotera-varianten`; on that branch the root `vercel.json` builds this folder.
  - Also `verotera-varianten` (Root Directory `verotera-varianten`).
