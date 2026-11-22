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

  /* headline light rules (header stays as in v26: no additions there) */
  $$('.home-section>h2,.glance-head h2,.world>h2,.apps-headline,.topic>h2,.shell>section>h2').forEach(function(h){
    if(h.closest('header')||h.nextElementSibling&&h.nextElementSibling.classList.contains('v2-rule'))return;
    var r=d.createElement('span');r.className='v2-rule';r.setAttribute('aria-hidden','true');
    var cs=getComputedStyle(h);if(cs.textAlign!=='center'){r.style.marginLeft='0';r.style.transformOrigin='left';}
    h.insertAdjacentElement('afterend',r);
  });

  /* images never block a frame while decoding, and are decoded ahead of time,
     about one and a half screens before they scroll into view (no first-sight hitch) */
  var allImgs=$$('img');allImgs.forEach(function(i){try{i.decoding='async';}catch(e){}});
  if('IntersectionObserver' in window){var pre=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;var i=en.target;pre.unobserve(i);
      var go=function(){if(i.decode)i.decode().catch(function(){});};if(i.complete&&i.naturalWidth)go();else i.addEventListener('load',go,{once:true});});},{rootMargin:'1400px 0px'});
    allImgs.forEach(function(i){pre.observe(i);});}

  /* spotlight cards: two soft light blobs (glow + border light) that slide under the cursor.
     They move by transform only, so hovering never repaints the card. One read + one write per frame. */
  var spot='.explore>a,.gp,.card,.ch-card,.ec-step,.rm-stage,.pillar,.cred,.contact-form,.contact-side';
  $$(spot).forEach(function(el){
    el.classList.add('v2-spot');
    function blob(c){var s=d.createElement('span');s.className=c;s.setAttribute('aria-hidden','true');var i=d.createElement('i');s.appendChild(i);el.appendChild(s);return i;}
    var g=blob('v2-glare'),e=blob('v2-edge'),px=0,py=0,queued=false;
    el.addEventListener('pointermove',function(ev){px=ev.clientX;py=ev.clientY;if(queued)return;queued=true;
      requestAnimationFrame(function(){queued=false;var r=el.getBoundingClientRect(),t='translate('+(px-r.left).toFixed(1)+'px,'+(py-r.top).toFixed(1)+'px)';
        g.style.transform=t;e.style.transform=t;});},{passive:true});
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
    entries.forEach(function(en){if(en.isIntersecting){var t=en.target;t.classList.add('v2-in');var n=t.nextElementSibling;if(n&&n.classList.contains('v2-rule'))n.classList.add('v2-in');io.unobserve(t);
      /* once revealed, hand the element back to its own hover transitions */
      var dl=parseFloat(t.style.getPropertyValue('--d'))||0;setTimeout(function(){t.classList.remove('v2-rv','v2-in','v2-pre');},1000+dl*1000);}});
  },{rootMargin:'0px 0px -8% 0px',threshold:.08});
  /* one screen ahead: give the block its layer now, so the GPU rasters it before it is visible */
  var preIo=new IntersectionObserver(function(entries){entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('v2-pre');preIo.unobserve(en.target);}});},{rootMargin:'0px 0px 100% 0px'});
  groups.forEach(function(sel){
    $$(sel).forEach(function(el){
      if(seen.has(el)||el.closest('header')||el.closest('.unified-bar,.panel-navigation,.tour-dock'))return;
      seen.add(el);
      var sib=el.parentElement?[].indexOf.call(el.parentElement.children,el):0;
      el.style.setProperty('--d',Math.min(sib,6)*0.09+'s');
      el.classList.add('v2-rv');io.observe(el);preIo.observe(el);
    });
  });
  $$('.v2-rule').forEach(function(r){var h=r.previousElementSibling;if(!h||!h.classList.contains('v2-rv'))r.classList.add('v2-in');});
  /* safety: never leave content hidden (e.g. print, anchors jumping past) */
  window.addEventListener('beforeprint',function(){$$('.v2-rv').forEach(function(el){el.classList.add('v2-in');});});
})();
