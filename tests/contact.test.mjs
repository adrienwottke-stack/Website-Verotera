import test from 'node:test';
import assert from 'node:assert/strict';
import {createHandler,configuration,validate} from '../api/contact.mjs';
const body=()=>({name:'Test User',email:'test@example.com',company:'Test Company',message:'Local test with mocked delivery only.',topic:'engineering-core',privacyAccepted:true,language:'de',website:'',submissionId:'70dd4977-7e33-49c0-b3ee-2b80b5cfeef4'});
const env={RESEND_API_KEY:'mock-test-key',CONTACT_FROM:'VEROTERA <website@verotera.example>',CONTACT_TO:'info@verotera.example',VERCEL:'1'};
async function request(handler,{method='POST',origin='https://website-verotera.vercel.app',data=body(),ip='192.0.2.1',contentType='application/json'}={}){
 const result={headers:{}};const req={method,headers:{origin,'content-type':contentType,'x-vercel-forwarded-for':ip},body:data};
 const res={setHeader(k,v){result.headers[k]=v;},status(n){result.status=n;return this;},json(j){result.body=j;return this;}};
 await handler(req,res);return result;
}
test('configuration requires explicit verified-sender settings, not a default sender',()=>{
 assert.equal(configuration({...env,CONTACT_FROM:''}),false);assert.equal(configuration({...env,RESEND_API_KEY:'[SENSITIVE]'}),false);assert.equal(configuration(env),true);
});
test('missing configuration is reported, with no delivery attempt',async()=>{
 let calls=0;const handler=createHandler({env:{},providerFetch:async()=>{calls++;}});
 assert.deepEqual((await request(handler,{method:'GET'})).body,{available:false});
 assert.equal((await request(handler,{ip:'192.0.2.2'})).status,503);assert.equal(calls,0);
});
test('rejects unsupported origins and methods before delivery',async()=>{
 let calls=0;const handler=createHandler({env,providerFetch:async()=>{calls++;}});
 assert.equal((await request(handler,{origin:'https://attacker.example'})).status,403);
 assert.equal((await request(handler,{method:'PUT'})).status,405);assert.equal(calls,0);
});
test('rejects malformed, oversized and incomplete submissions',async()=>{
 const handler=createHandler({env,providerFetch:async()=>{throw Error('must not send');}});
 assert.equal((await request(handler,{data:'not json'})).status,400);
 assert.equal((await request(handler,{data:{...body(),message:'x'.repeat(17000)}})).status,413);
 assert.equal((await request(handler,{data:{...body(),privacyAccepted:false}})).status,400);
 assert.equal((await request(handler,{contentType:'text/plain'})).status,415);
 assert.equal(validate({...body(),name:'bad\r\nname'}),null);assert.equal(validate({...body(),email:'a@b.com\r\nBcc:x@y.com'}),null);
});
test('honeypot does not send mail',async()=>{
 let calls=0;const handler=createHandler({env,providerFetch:async()=>{calls++;}});
 assert.equal((await request(handler,{data:{...body(),website:'bot'}})).status,202);assert.equal(calls,0);
});
test('provider rejection and timeout never return success',async()=>{
 const rejected=createHandler({env,providerFetch:async()=>({ok:false})});assert.equal((await request(rejected,{ip:'192.0.2.3'})).status,502);
 const timeout=createHandler({env,providerFetch:async()=>{throw Error('timeout');}});assert.equal((await request(timeout,{ip:'192.0.2.4'})).status,502);
});
test('valid delivery uses fixed recipient, reply-to, plain text and idempotency',async()=>{
 let captured;const handler=createHandler({env,providerFetch:async(url,init)=>{captured={url,init};return{ok:true};}});
 const result=await request(handler,{ip:'192.0.2.5'});assert.equal(result.status,200);
 const payload=JSON.parse(captured.init.body);assert.deepEqual(payload.to,[env.CONTACT_TO]);assert.equal(payload.reply_to,body().email);assert.equal(payload.html,undefined);assert.match(payload.text,/engineering-core/);assert.match(captured.init.headers['Idempotency-Key'],/^verotera-contact\//);
 assert.deepEqual(result.body,{ok:true});assert.equal(result.headers['Cache-Control'],'no-store');
});
test('per-instance request limiting bounds repeated submissions',async()=>{
 const handler=createHandler({env,providerFetch:async()=>({ok:true}),now:()=>100000});
 for(let i=0;i<5;i++)assert.equal((await request(handler,{ip:'192.0.2.99'})).status,200);
 const limited=await request(handler,{ip:'192.0.2.99'});assert.equal(limited.status,429);assert.equal(limited.headers['Retry-After'],'600');
});
