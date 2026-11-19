# VEROTERA Website: Template Package v25 (alternative to v24)

Static website, no build tools and no server logic. It runs on any web host as is: upload the whole folder, keep the structure, open `index.html`.
v25 (16 November 2026): Hybrid AI page reworked (shorter, capabilities worded as design goals, five stages in one compact section, no interactive examples, principle as in v24 at the top, new sections "Time to Market Is Decided in the Concept Phase", "Outlook" (V-model with today, next and vision) and "Engineering Core · R&D Phase" with the button "Become a Pilot Partner"); on all pages, repeated texts removed after the team review (Home credentials block, About quote, standard contact text). The CEO decides whether v24 or v25 goes live. v24 was released after the final review by CEO and team (12 November 2026). Details, open points and the step-by-step list: see the handover document "VEROTERA Website: Übergabe an Adrien".

## Pages
- `index.html`: Home
- `about.html`: About VEROTERA (5 topics: Who We Are, Why Wide-Bandgap, What We Build, How We Work, Leadership)
- `solutions.html`: Solutions (Our Approach, Applications, Phases 01 to 05)
- `engineering-core.html`: Hybrid AI (principle, challenge, three roles, value, five stages, inside the Engineering Core, outlook, R&D status)
- `contact.html`: contact form with two modes, message and callback request (not connected yet, see below)
- `robots.txt`, `sitemap.xml`: for https://www.verotera.com/ (adjust if the domain or paths differ)

## Shared files
- `assets/site.css`: one stylesheet for all pages (generated, see below)
- `assets/site.js`: language choice EN/DE (remembered in localStorage `vlang`) and the menu button on phones
- `assets/tour.js`: topic tiles, topic bar, scroll mode, deep links (`#topic-name`); not used on the Hybrid AI page in v25
- `assets/dark.js`: back-to-top button
- `assets/wbg-chart.js` / `wbg-chart.css`: interactive chart on About (Si, SiC and GaN by power and switching frequency)
- `assets/fonts/`: Inter and Poppins, self-hosted (SIL Open Font License 1.1, licence files included)
- `assets/img/`: all images; AI-generated illustrations except the CEO portrait (note in every footer)

## How the pages work
- All texts are in the HTML in English and German (`.l-en` / `.l-de`, or per-language strings in the page script). Page titles, eyebrows and claims stay English in both languages.
- About, Solutions and Hybrid AI show their five topics one below the other; tiles and the topic bar jump to a topic.
- Hybrid AI (v25): static page without interactive examples; the five stages are shown side by side with Your Benefit.
- No cookies, no tracking, no external requests. A Content-Security-Policy meta tag in each page enforces this; set the same policy as HTTP header on the server.
- Accessibility: skip link ("Skip to content"), visible focus, menu button with `aria-expanded`, alt texts in both languages, minimum text size 14 px (running text 16 px).

## Contact form and callback request
- One form, two modes: "Write to us" (message) and "Request a callback" (phone, optional e-mail, topic, preferred time, short note). `contact.html#callback` opens the callback mode directly.
- Connect it by putting the URL of a form endpoint into `data-endpoint` on `<form id="contactForm">`. The form sends a normal POST (multipart form data) with these fields: `request_type` (message or callback), `name`, `company`, `email`, `topic`, `message`, `consent`, `subject`; in callback mode also `phone` and `preferred_time` (morning, afternoon, any).
- `subject` is filled in automatically, e.g. "Callback request: Name, Company, morning". Configure the endpoint to send to info@verotera.com and to use this field as the e-mail subject. The recipient address is set at the endpoint, not in the HTML.
- Spam: the hidden field `website` is a honeypot; if it is filled, nothing is sent. Add rate limiting at the endpoint if it offers it. No CAPTCHA (would load external scripts).
- Security policy: add the endpoint's origin to `connect-src` in the Content-Security-Policy (meta tag in `contact.html` and HTTP header), e.g. `connect-src 'self' https://forms.example.eu`. Without this the browser blocks the request.
- Privacy: phone numbers are personal data. Before going live: section in the privacy policy (purpose, legal basis, retention), data processing agreement with the form service, EU hosting preferred, a deletion rule for callback requests.
- Promise on the page: callback within two working days. Someone must check info@verotera.com daily.

## Design rules (binding)
- Colours: light blue #4AD3F6 and deep blue #008CD1 (logo); dark background; separator lines and outline buttons in the gradient #4AD3F6 to #008CD1.
- Square style: tiles, images, cards have no rounded corners; only buttons (pills) are round.
- Fonts: Poppins (headlines, statements, stage subtitles), Inter (text). Eyebrows in Title Case, not upper case, 16 px.
- No em dashes; ranges as "20 to 30%"; UK spelling (-ise), industry terms like "AI Data Center" unchanged.

## Stylesheet note
`assets/site.css` is generated from several design rounds and contains layered rules with `!important`. It works as delivered. If you rework styles, change them at the end of the file, or plan a clean-up as a separate step and compare against the screenshots in the handover document.
