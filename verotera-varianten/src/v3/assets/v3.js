/* VEROTERA V3: conversion behaviour (sticky CTA, counters, reveals). */
(function(){
  var d=document,root=d.documentElement;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $$(s){return [].slice.call(d.querySelectorAll(s));}
  function de(){return root.getAttribute('data-lang')==='de';}

  /* sticky CTA: appears once the hero is gone, hides near the closing CTA / form */
  if(!d.body.classList.contains('page-contact')){
    var bar=d.createElement('div');bar.className='v3-sticky';bar.setAttribute('role','complementary');bar.setAttribute('aria-label','Quick contact');
    bar.innerHTML='<p><span class="l-en">Ready to test your module idea? <span class="dim">Reply within two working days.</span></span><span class="l-de">Modulidee prüfen lassen? <span class="dim">Antwort in zwei Werktagen.</span></span></p><a class="nav-bezel primary" href="contact.html"><span class="l-en">Feasibility assessment</span><span class="l-de">Machbarkeit anfragen</span></a>';
    d.body.appendChild(bar);
    var hero=d.querySelector('.shell>header'),cta=d.querySelector('section.cta');
    var heroGone=false,ctaVisible=false;
    function upd(){bar.classList.toggle('show',heroGone&&!ctaVisible);}
    if('IntersectionObserver' in window){
      if(hero)new IntersectionObserver(function(e){heroGone=!e[0].isIntersecting;upd();}).observe(hero);
      if(cta)new IntersectionObserver(function(e){ctaVisible=e[0].isIntersecting;upd();}).observe(cta);
    }
  }

  if(reduce||!('IntersectionObserver' in window))return;

  /* reveal V3 blocks (V2 handles its own set) */
  var sel=['.v3-proof .v3-stat','.v3-split-head','.v3-pains li','.v3-steps','.v3-steps li','.v3-founder-card','.v3-qa details','.v3-next li','.v3-process>h2','.v3-process>.v3-eyebrow'];
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('v2-in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.1});
  sel.forEach(function(s){$$(s).forEach(function(el,i){
    if(el.classList.contains('v2-rv'))return;
    if(!el.matches('.v3-steps')){el.classList.add('v2-rv');el.style.setProperty('--d',Math.min(i,5)*0.08+'s');}
    io.observe(el);
  });});

  /* count-up on the proof numbers */
  var cio=new IntersectionObserver(function(es){es.forEach(function(e){
    if(!e.isIntersecting)return;cio.unobserve(e.target);
    var el=e.target,to=+el.getAttribute('data-count'),pre=el.getAttribute('data-prefix')||'',suf=el.getAttribute('data-suffix')||'',t0=null,dur=1400;
    function step(t){if(!t0)t0=t;var k=Math.min(1,(t-t0)/dur),v=Math.round(to*(1-Math.pow(1-k,3)));el.textContent=pre+v+suf;if(k<1)requestAnimationFrame(step);}
    requestAnimationFrame(step);
  });},{threshold:.6});
  $$('[data-count]').forEach(function(el){cio.observe(el);});
})();
