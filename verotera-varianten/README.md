# VEROTERA Website: V26 Original + V26 Design (Review)

Two versions of the same website, switchable via the bar at the top:

| Folder | Contents |
|---|---|
| `v26`        | Customer package v26, unchanged (only the review bar + `noindex` injected) |
| `v26-design` | Same copy, same pages, same sitemap. Only the design layer `src/v2/assets/v2.css` + `v2.js` |
| `v26-showcase` | Same copy, same pages, v26 palette. "No limits" layer `src/vx/assets/vx.css` + `vx.js`: live circuit hero switched by the cursor's light, kinetic headlines, scroll-lit vision statement, light-arc cards, pinned horizontal application journey, circuit CTA with border beam, giant wordmark footer, grain, intro, page transitions. Everything respects `prefers-reduced-motion`. |

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
- `node build.mjs` generates `public/` (both variants from `src/v26`).
- Local preview: `node serve.mjs` → http://127.0.0.1:5190/
- New customer package: replace `src/v26` (or add a new folder and adjust `build.mjs`).
- Deployment:
  - Vercel project `website-verotera` (website-verotera.vercel.app) from branch
    `design/verotera-varianten`; on that branch the root `vercel.json` builds this folder.
  - Also `verotera-varianten` (Root Directory `verotera-varianten`).
