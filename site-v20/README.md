# VEROTERA Website: Template Package v20

Static website, no build tools and no server logic. It runs on any web host as is.
Open `index.html` in a browser to start. Details and open points: see the handover document "VEROTERA Website: Übergabe an Adrien".

## Pages
- `index.html`: landing page
- `about.html`: About VEROTERA (5 topics)
- `solutions.html`: from requirement to power module sample (5 stages, worked example)
- `engineering-core.html`: how the Engineering Core verdict is formed (5 stages, worked example)
- `contact.html`: contact form (not connected yet, see `data-endpoint`)

## Shared files
- `assets/site.css`: one stylesheet for all pages
- `assets/site.js`: language choice (EN/DE), remembered across pages (localStorage `vlang`)
- `assets/tour.js`: Guided play, topic switching, scroll mode, deep links (`#topic-name`, browser Back works)
- `assets/img/`: all images. The photos and illustrations are AI-generated (note in the footer of every page).

## How the pages work
- All texts are in the HTML in English and German (`.l-en` / `.l-de`, or per-language strings in the page script).
- About, Solutions and Engineering Core (`body.scroll-mode`): all five topics are shown one below the other. The tiles and a compact topic bar jump to a topic; the active topic follows the scroll position. Guided play is hidden; its texts and code stay for a later listen mode. The Engineering Core demo stays interactive (confirm, escalate, inspect rules) and starts from the engineer-confirmed example.
- Each topic has its own address, e.g. `about.html#leadership`.
- No cookies, no tracking, no external requests. A Content-Security-Policy meta tag in each page enforces this.
- Header images: `header-*.jpg` (1536 px) for small screens, `header-*-2x.jpg` (3072 px) for wide and high-density screens.

## Open for the web designer
- Imprint, Privacy Policy, Terms of Use, LinkedIn: footer links are placeholders (`#imprint`, `#privacy`, `#terms`, `#linkedin`).
- Open Graph URLs assume `https://www.verotera.com/`; adjust if the paths differ.
- Hosting with HTTPS; security headers on the server; separate German pages (`/de/`) with hreflang for search engines.
- Listen mode for Guided play is prepared (`tourAudio` in each page); add recorded audio files when available and show a single “Listen” button.
- Buttons: main calls to action use the cyan gradient (`a.nav-bezel.primary`, large bold text for contrast); secondary actions use the blue outline; contact lines under topics are text links.
