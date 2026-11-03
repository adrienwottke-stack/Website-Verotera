/* Local-preview instrumentation only. Not copied to dist or deployed as a route. */
(() => {
  let lcp=0,cls=0;
  try { new PerformanceObserver(list=>{lcp=list.getEntries().at(-1).startTime;}).observe({type:'largest-contentful-paint',buffered:true}); } catch {}
  try { new PerformanceObserver(list=>{for(const e of list.getEntries())if(!e.hadRecentInput)cls+=e.value;}).observe({type:'layout-shift',buffered:true}); } catch {}
  window.addEventListener('load',()=>setTimeout(async()=>{
    const ids=[...document.querySelectorAll('[id]')].map(el=>el.id);
    const result={url:location.pathname,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,lcpMilliseconds:lcp,cls,resourceBytes:performance.getEntriesByType('resource').filter(r=>!r.name.includes('/__')).reduce((s,r)=>s+r.transferSize,0),failedResources:performance.getEntriesByType('resource').filter(r=>r.responseStatus>=400).map(r=>({path:new URL(r.name).pathname,status:r.responseStatus})),duplicateIds:[...new Set(ids.filter((id,i)=>ids.indexOf(id)!==i))],brokenLabels:[...document.querySelectorAll('[aria-labelledby],[aria-describedby]')].flatMap(el=>['aria-labelledby','aria-describedby'].flatMap(attr=>(el.getAttribute(attr)||'').split(/\s+/).filter(id=>id&&!document.getElementById(id)))),violations:[]};
    if(window.axe){const audit=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa']}});result.violations=audit.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));}
    const out=document.createElement('output');out.id='qa-result';out.hidden=true;out.textContent=JSON.stringify(result);document.body.append(out);
  },350));
})();
