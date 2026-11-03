import { createHash } from 'node:crypto';

const TOPICS = new Set(['feasibility','development','integration','power-module','optical-gate-driving','engineering-core','other']);
const MAX_BODY = 16000;
const buckets = new Map();
const emailPattern = /^[^\s<>@]+@[^\s<>@]+\.[^\s<>@]+$/;
const clean = value => typeof value === 'string' ? value.trim() : '';
export function configuration(env = process.env) {
  const from = clean(env.CONTACT_FROM), to = clean(env.CONTACT_TO);
  const address = from.match(/<([^<>]+)>$/)?.[1] || from;
  return Boolean(env.RESEND_API_KEY && !env.RESEND_API_KEY.includes('[SENSITIVE]') && emailPattern.test(address) && emailPattern.test(to) && !/[\r\n]/.test(from));
}
export function validate(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null;
  const data = Object.fromEntries(['name','email','company','message','topic','website','language','submissionId'].map(key => [key,clean(body[key])]));
  if (!data.name || data.name.length > 120 || /[\r\n]/.test(data.name) || !emailPattern.test(data.email) || data.email.length > 254 || data.company.length > 200 || /[\r\n]/.test(data.company) || data.message.length < 10 || data.message.length > 6000 || !TOPICS.has(data.topic) || body.privacyAccepted !== true || !/^[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/i.test(data.submissionId)) return null;
  return data;
}
function allowedOrigin(origin, env) {
  const allowed = new Set(['https://website-verotera.vercel.app','https://www.verotera.com','https://verotera.com']);
  for (const value of [env.VERCEL_URL,env.VERCEL_BRANCH_URL,env.VERCEL_PROJECT_PRODUCTION_URL]) if (value) allowed.add('https://' + value);
  if (!env.VERCEL) { allowed.add('http://127.0.0.1:5185'); allowed.add('http://localhost:5185'); }
  return allowed.has(origin);
}
function limited(ip, now) {
  const key=createHash('sha256').update(ip).digest('hex');
  const record=buckets.get(key);
  const previous=(record?.times||[]).filter(t => now-t<600000);
  if (previous.length>=5) return true;
  previous.push(now); clearTimeout(record?.timer);
  const timer=setTimeout(()=>buckets.delete(key),600000);timer.unref?.();
  buckets.set(key,{times:previous,timer});
  if (buckets.size>2000) for (const [k,value] of buckets) if(now-value.times.at(-1)>600000 || buckets.size>2000){clearTimeout(value.timer);buckets.delete(k);}
  return false;
}
export function createHandler({ env = process.env, providerFetch = fetch, now = Date.now } = {}) {
  return async function handler(req,res) {
    const reply=(status,body)=>{res.setHeader('Cache-Control','no-store');res.setHeader('Content-Type','application/json; charset=utf-8');res.status(status).json(body);};
    if (req.method==='GET') return reply(200,{available:configuration(env)});
    if (req.method!=='POST') {res.setHeader('Allow','GET, POST');return reply(405,{error:'method_not_allowed'});}
    if (!allowedOrigin(req.headers.origin,env)) return reply(403,{error:'origin_not_allowed'});
    if (!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type']||'')) return reply(415,{error:'unsupported_media_type'});
    if (Number(req.headers['content-length']||0)>MAX_BODY) return reply(413,{error:'payload_too_large'});
    let body=req.body;
    if (typeof body==='string') {
      if (Buffer.byteLength(body)>MAX_BODY) return reply(413,{error:'payload_too_large'});
      try {body=JSON.parse(body);}catch{return reply(400,{error:'invalid_json'});}
    }
    if (Buffer.byteLength(JSON.stringify(body||{}))>MAX_BODY) return reply(413,{error:'payload_too_large'});
    if (body?.website) return reply(202,{ok:true});
    const data=validate(body);
    if (!data) return reply(400,{error:'invalid_fields'});
    const ip=String(req.headers['x-vercel-forwarded-for']||req.headers['x-forwarded-for']||req.socket?.remoteAddress||'unknown').split(',')[0].trim();
    if (limited(ip,now())) {res.setHeader('Retry-After','600');return reply(429,{error:'rate_limited'});}
    if (!configuration(env)) return reply(503,{error:'not_configured'});
    const text=[`Name: ${data.name}`,`E-Mail: ${data.email}`,`Unternehmen: ${data.company||'—'}`,`Thema: ${data.topic}`,`Sprache: ${data.language==='de'?'Deutsch':'English'}`,'',data.message].join('\n');
    try {
      const response=await providerFetch('https://api.resend.com/emails',{
        method:'POST',signal:AbortSignal.timeout(8000),
        headers:{Authorization:`Bearer ${env.RESEND_API_KEY}`,'Content-Type':'application/json','Idempotency-Key':`verotera-contact/${data.submissionId}`},
        body:JSON.stringify({from:env.CONTACT_FROM,to:[env.CONTACT_TO],reply_to:data.email,subject:`Website-Anfrage: ${data.name}`,text})
      });
      if (!response.ok) return reply(502,{error:'delivery_failed'});
      return reply(200,{ok:true});
    } catch {return reply(502,{error:'delivery_failed'});}
  };
}
export default createHandler();
