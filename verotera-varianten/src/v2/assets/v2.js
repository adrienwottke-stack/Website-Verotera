/* VEROTERA V2 design layer: motion + light. Presentation only, adds no copy. */
(function(){
  var d=document,root=d.documentElement;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $$(s,c){return [].slice.call((c||d).querySelectorAll(s));}

  /* nav: glass state + scroll progress light */
  var nav=d.querySelector('.site-nav');
  if(nav){
    var bar=d.createElement('span');bar.className='v2-progress';bar.setAttribute('aria-hidden','true');nav.appendChild(bar);
    var tick=false;
    function onScroll(){
      if(tick)return;tick=true;
      requestAnimationFrame(function(){
        var y=window.scrollY,h=d.documentElement.scrollHeight-window.innerHeight;
        nav.classList.toggle('v2-scrolled',y>24);
        bar.style.setProperty('--p',h>0?Math.min(1,y/h):0);
        tick=false;
      });
    }
    window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  }

  /* hero: switching square-wave signal with a travelling pulse of light */
  var hero=d.querySelector('.shell>header');
  if(hero){
    var W=2400,H=64,y0=48,y1=16,x=0,path='M0 '+y0,steps=[90,46,140,46,60,46,180,46,90,46,120,46,70,46,200,46,90,46,150,46,80,46,110,46,160,46,90,46,130];
    var high=false;
    for(var i=0;i<steps.length&&x<W;i++){x+=steps[i];path+=' H'+x;high=!high;path+=' V'+(high?y1:y0);}
    path+=' H'+W;
    var sig=d.createElement('div');sig.className='v2-signal';sig.setAttribute('aria-hidden','true');
    sig.innerHTML='<svg viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="none"><defs><linearGradient id="v2sig" x1="0" x2="1"><stop offset="0" stop-color="#4ad3f6" stop-opacity="0"/><stop offset=".5" stop-color="#4ad3f6"/><stop offset="1" stop-color="#008cd1"/></linearGradient></defs><path class="base" d="'+path+'"/><path class="pulse" d="'+path+'"/><path class="pulse p2" d="'+path+'"/></svg>';
    hero.appendChild(sig);
    var cue=d.createElement('span');cue.className='v2-scrollcue';cue.setAttribute('aria-hidden','true');hero.appendChild(cue);
  }

  /* headline light rules */
  $$('.home-section>h2,.glance-head h2,.world>h2,.apps-headline,.topic>h2,.shell>section>h2').forEach(function(h){
    if(h.closest('header')||h.nextElementSibling&&h.nextElementSibling.classList.contains('v2-rule'))return;
    var r=d.createElement('span');r.className='v2-rule';r.setAttribute('aria-hidden','true');
    var cs=getComputedStyle(h);if(cs.textAlign==='center'){r.style.marginLeft='auto';r.style.marginRight='auto';r.style.transformOrigin='center';}
    h.insertAdjacentElement('afterend',r);
  });

  /* spotlight cards */
  var spot='.explore>a,.gp,.card,.ch-card,.ec-step,.pillar,.cred,.contact-form,.contact-side';
  $$(spot).forEach(function(el){
    el.classList.add('v2-spot');
    var e=d.createElement('span');e.className='v2-edge';e.setAttribute('aria-hidden','true');el.appendChild(e);
    el.addEventListener('pointermove',function(ev){var r=el.getBoundingClientRect();el.style.setProperty('--mx',(ev.clientX-r.left)+'px');el.style.setProperty('--my',(ev.clientY-r.top)+'px');});
  });

  if(reduce||!('IntersectionObserver' in window)){$$('.v2-rule').forEach(function(r){r.classList.add('v2-in');});return;}

  /* reveal on scroll, staggered within each group */
  var groups=[
    '.vmx-st','.vmx-mission','.vmx-points>.vmx-pt',
    '.home-section>h2','.home-section>p','.glance-head>*','.cta-text','.cta .cta-button',
    '.explore>a','.glance-pillars>.gp','.fields>.field-tile',
    '.shell>section>h2','.shell>section>p','.apps-headline','.apps-lead',
    '.card','.ch-card','.ec-step','.pillar','.cred','.key-note','.split','.hy-text','.hy-img','.sx'
  ];
  var seen=new Set(),io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('v2-in');var n=en.target.nextElementSibling;if(n&&n.classList.contains('v2-rule'))n.classList.add('v2-in');io.unobserve(en.target);}});
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  groups.forEach(function(sel){
    $$(sel).forEach(function(el){
      if(seen.has(el)||el.closest('header')||el.closest('.unified-bar,.panel-navigation,.tour-dock'))return;
      seen.add(el);
      var sib=el.parentElement?[].indexOf.call(el.parentElement.children,el):0;
      el.style.setProperty('--d',Math.min(sib,6)*0.09+'s');
      el.classList.add('v2-rv');io.observe(el);
    });
  });
  $$('.v2-rule').forEach(function(r){var h=r.previousElementSibling;if(!h||!h.classList.contains('v2-rv'))r.classList.add('v2-in');});
  /* safety: never leave content hidden (e.g. print, anchors jumping past) */
  window.addEventListener('beforeprint',function(){$$('.v2-rv').forEach(function(el){el.classList.add('v2-in');});});
})();
