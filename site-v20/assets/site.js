/* Shared navigation, locale routing and contact form. No analytics or external fonts. */
(() => {
  const root = document.documentElement;
  const language = root.getAttribute('data-page-language') || root.lang || 'en';
  const de = language === 'de';
  root.setAttribute('data-lang', language);
  root.lang = language;
  const select = document.getElementById('tourlang');
  if (select) {
    select.value = language;
    select.setAttribute('aria-label', de ? 'Sprache' : 'Language');
    select.addEventListener('change', () => {
      const next = select.value;
      const alternate = document.querySelector(`link[hreflang="${next}"]`);
      if (!alternate) return;
      try { localStorage.setItem('vlang', next); } catch {}
      const target = new URL(alternate.href, location.href);
      location.assign(target.pathname + location.search + location.hash);
    });
  }

  const nav = document.querySelector('.site-nav');
  const menu = document.querySelector('.sn-menu');
  if (nav && menu) {
    const close = (restoreFocus = false) => {
      nav.classList.remove('nav-open');
      menu.setAttribute('aria-expanded', 'false');
      if (restoreFocus) menu.focus();
    };
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      nav.classList.toggle('nav-open', open);
      menu.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.sn-links a').forEach(a => a.addEventListener('click', () => close()));
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') close(true);
    });
    document.addEventListener('click', e => { if (!nav.contains(e.target)) close(); });
    window.matchMedia('(min-width: 901px)').addEventListener('change', () => close());
  }

  const form = document.getElementById('contactForm');
  if (!form || window.__PRERENDERING) return;
  const status = document.getElementById('cfStatus');
  const submit = form.querySelector('[type="submit"]');
  submit.disabled = true;
  const topic = document.getElementById('cf-topic');
  const topics = {
    feasibility: ['Feasibility assessment', 'Machbarkeitsbewertung'],
    development: ['Development project', 'Entwicklungsprojekt'],
    integration: ['Integration support', 'Integrationsbegleitung'],
    'power-module': ['Power Module Technology', 'Power Module Technology'],
    'optical-gate-driving': ['Optical Gate Driving', 'Optical Gate Driving'],
    'engineering-core': ['Engineering Core', 'Engineering Core'], other: ['Other', 'Sonstiges']
  };
  [...topic.options].forEach(option => { option.textContent = topics[option.value][de ? 1 : 0]; });
  const hash = location.hash.slice(1);
  if (topics[hash]) topic.value = hash;
  const messages = {
    unavailable: de ? 'Der Formularversand wird derzeit eingerichtet. Bitte schreiben Sie an info@verotera.com.' : 'The contact form is being set up. Please email info@verotera.com.',
    invalid: de ? 'Bitte prüfen Sie die markierten Pflichtfelder und die Datenschutzhinweise.' : 'Please check the marked required fields and the privacy notice.',
    sending: de ? 'Nachricht wird übermittelt …' : 'Sending your message …',
    success: de ? 'Vielen Dank. Ihre Nachricht wurde übermittelt.' : 'Thank you. Your message has been submitted.',
    failure: de ? 'Die Nachricht konnte nicht übermittelt werden. Bitte versuchen Sie es später erneut oder schreiben Sie an info@verotera.com.' : 'Your message could not be submitted. Please try again later or email info@verotera.com.',
    limited: de ? 'Zu viele Versuche. Bitte warten Sie einige Minuten oder schreiben Sie an info@verotera.com.' : 'Too many attempts. Please wait a few minutes or email info@verotera.com.'
  };
  let available = false;
  let submissionId = null;
  const announce = (kind, text) => { status.className = 'cf-status ' + kind; status.textContent = text; };
  const validateField = input => {
    if (!input.willValidate) return;
    input.setAttribute('aria-invalid', String(!input.validity.valid));
    const error = document.getElementById(input.id + '-error');
    if (error) error.textContent = input.validity.valid ? '' : (de ? 'Bitte prüfen Sie dieses Feld.' : 'Please check this field.');
  };
  form.querySelectorAll('input,textarea,select').forEach(input => {
    input.addEventListener('input', () => { submissionId = null; if (input.hasAttribute('aria-invalid')) validateField(input); });
    input.addEventListener('change', () => { if (input.hasAttribute('aria-invalid')) validateField(input); });
  });
  fetch('/api/contact', { headers: { Accept: 'application/json' } })
    .then(r => r.ok ? r.json() : { available: false })
    .then(config => {
      available = config.available === true;
      submit.disabled = !available;
      if (!available) announce('warn', messages.unavailable);
    })
    .catch(() => announce('warn', messages.unavailable));
  form.addEventListener('submit', async event => {
    event.preventDefault();
    form.querySelectorAll('input,textarea,select').forEach(validateField);
    if (!form.checkValidity()) {
      announce('err', messages.invalid);
      form.querySelector(':invalid')?.focus();
      return;
    }
    if (!available) { announce('warn', messages.unavailable); return; }
    if (submit.disabled) return;
    submissionId ||= crypto.randomUUID();
    const fields = Object.fromEntries(new FormData(form));
    const payload = { ...fields, privacyAccepted: fields.consent === 'on', language, submissionId };
    submit.disabled = true;
    form.setAttribute('aria-busy', 'true');
    announce('', messages.sending);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload), signal: AbortSignal.timeout(12000)
      });
      if (!response.ok) {
        announce(response.status === 503 ? 'warn' : 'err', response.status === 429 ? messages.limited : response.status === 503 ? messages.unavailable : messages.failure);
        return;
      }
      form.reset(); submissionId = null;
      form.querySelectorAll('[aria-invalid]').forEach(input => input.removeAttribute('aria-invalid'));
      announce('ok', messages.success);
    } catch { announce('err', messages.failure); }
    finally { submit.disabled = false; form.removeAttribute('aria-busy'); }
  });
})();
