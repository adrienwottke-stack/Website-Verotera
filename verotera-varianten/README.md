# VEROTERA Website: V26 Original + V26 Design (Review)

Two versions of the same website, switchable via the bar at the top:

| Folder | Contents |
|---|---|
| `v26`        | Customer package v26, unchanged (only the review bar + `noindex` injected) |
| `v26-design` | Same copy, same pages, same sitemap. Only the design layer `src/v2/assets/v2.css` + `v2.js` |

Feedback round 20 Nov 2026 (Thorsten), implemented in the design layer:
header and colours as in v26 · no signal curve in the header · spotlight on cards,
reveal animations and the grid in the CTA kept · V logo in the CTA larger.

## Working on it
- `node build.mjs` generates `public/` (both variants from `src/v26`).
- Local preview: `node serve.mjs` → http://127.0.0.1:5190/
- New customer package: replace `src/v26` (or add a new folder and adjust `build.mjs`).
- Deployment:
  - Vercel project `website-verotera` (website-verotera.vercel.app) from branch
    `design/verotera-varianten`; on that branch the root `vercel.json` builds this folder.
  - Also `verotera-varianten` (Root Directory `verotera-varianten`).
