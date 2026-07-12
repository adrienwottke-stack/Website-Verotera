import type { NextRequest } from "next/server";

/**
 * Contact-form endpoint. Sends every inquiry via Resend (https://resend.com).
 *
 * Environment:
 *   RESEND_API_KEY  – required; without it the route answers 503 and the form
 *                     shows the direct-email fallback instead of a fake success.
 *   CONTACT_TO      – recipient, defaults to info@verotera.com.
 *   CONTACT_FROM    – verified sender. Until the verotera.com domain is
 *                     verified in Resend, the test sender below only delivers
 *                     to the Resend account owner's own address.
 */
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const CONTACT_TO = process.env.CONTACT_TO ?? "info@verotera.com";
const CONTACT_FROM =
  process.env.CONTACT_FROM ?? "VEROTERA Website <onboarding@resend.dev>";

const MAX_LEN = { name: 200, email: 320, company: 200, message: 5000 } as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort limiter: 5 inquiries per IP per 10 minutes. In-memory, so it
// resets on deploy/instance change — good enough alongside the honeypot.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

type Inquiry = { name: string; email: string; company: string; message: string };

/**
 * Delivers a new inquiry to the team. Currently email via Resend; additional
 * channels (e.g. mobile push via ntfy/Pushover) can be added here later
 * without touching the form or the request handling above.
 */
async function notifyNewInquiry(inquiry: Inquiry): Promise<Response> {
  const subject = `Neue Website-Anfrage von ${inquiry.name}${inquiry.company ? ` (${inquiry.company})` : ""}`;
  const text = [
    `Name: ${inquiry.name}`,
    `E-Mail: ${inquiry.email}`,
    `Unternehmen: ${inquiry.company || "—"}`,
    "",
    inquiry.message,
  ].join("\n");
  const html = `
    <h2 style="margin:0 0 16px">Neue Anfrage über verotera.com</h2>
    <table style="border-collapse:collapse">
      <tr><td style="padding:4px 16px 4px 0;color:#555">Name</td><td>${escapeHtml(inquiry.name)}</td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#555">E-Mail</td><td><a href="mailto:${escapeHtml(inquiry.email)}">${escapeHtml(inquiry.email)}</a></td></tr>
      <tr><td style="padding:4px 16px 4px 0;color:#555">Unternehmen</td><td>${escapeHtml(inquiry.company) || "—"}</td></tr>
    </table>
    <p style="white-space:pre-wrap;border-left:3px solid #10A6E2;padding-left:12px;margin-top:16px">${escapeHtml(inquiry.message)}</p>`;

  return fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      reply_to: inquiry.email,
      subject,
      text,
      html,
    }),
  });
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: the visible form never fills "website". Pretend success so
  // bots don't learn they were filtered.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const field = (key: keyof typeof MAX_LEN): string =>
    typeof body[key] === "string" ? (body[key] as string).trim().slice(0, MAX_LEN[key]) : "";

  const inquiry: Inquiry = {
    name: field("name"),
    email: field("email"),
    company: field("company"),
    message: field("message"),
  };

  if (!inquiry.name || !inquiry.message || !EMAIL_RE.test(inquiry.email)) {
    return Response.json({ error: "invalid_fields" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("contact: RESEND_API_KEY is not configured");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const sent = await notifyNewInquiry(inquiry);
  if (!sent.ok) {
    console.error("contact: mail delivery failed", sent.status, await sent.text());
    return Response.json({ error: "delivery_failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
