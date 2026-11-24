/* VEROTERA V2 design layer: motion + light. Presentation only, adds no copy. */
(function(){
  var d=document,root=d.documentElement;
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $$(s,c){return [].slice.call((c||d).querySelectorAll(s));}

  /* Light rules sit a fixed distance (up) under their heading and keep at least (down) to the next block.
     Where the original layout had more room between heading and block, that room stays below the rule.
     Measured from layout offsets (transforms of reveal animations don't count), in batched read/write
     passes; redone when the width or the language changes. */
  function fitRules(list,up,down){
    if(!list.length)return;
    function top(e){var t=0;for(;e;e=e.offsetParent)t+=e.offsetTop;return t;}
    function nextShown(e){for(e=e.nextElementSibling;e;e=e.nextElementSibling)if(e.getClientRects().length)return e;return null;}
    /* inline values go in with priority: some neighbours set their margins with !important */
    function imp(e,p,v){e.style.setProperty(p,v,'important');}
    function keep(e,p){return [e.style.getPropertyValue(p),e.style.getPropertyPriority(p)];}
    function put(e,p,s){if(s&&s[0])e.style.setProperty(p,s[0],s[1]);else e.style.removeProperty(p);}
    function run(){
      var L=list.filter(function(o){return o.h.isConnected;});
      L.forEach(function(o){if(o.n)put(o.n,'margin-top',o.nm);put(o.h,'margin-bottom',o.hm);imp(o.r,'display','none');});
      L.forEach(function(o){var n=nextShown(o.r);o.n=n;o.nm=n?keep(n,'margin-top'):null;o.on=o.h.getClientRects().length>0;
        o.g=!o.on?down:n?top(n)-top(o.h)-o.h.offsetHeight:parseFloat(getComputedStyle(o.h).marginBottom)||down;});
      L.forEach(function(o){o.r.style.removeProperty('display');if(!o.on)return;imp(o.r,'margin-top','0px');imp(o.r,'margin-bottom','0px');imp(o.h,'margin-bottom','0px');if(o.n)imp(o.n,'margin-top','0px');});
      L.forEach(function(o){if(!o.on)return;var rt=top(o.r);o.a=rt-top(o.h)-o.h.offsetHeight;o.rh=o.r.offsetHeight;o.b=o.n?top(o.n)-rt-o.rh:0;});
      L.forEach(function(o){if(!o.on)return;imp(o.r,'margin-top',(up-o.a)+'px');imp(o.r,'margin-bottom',(Math.max(down,o.g-up-o.rh)-o.b)+'px');});
    }
    run();
    var w=window.innerWidth,t=0;
    window.addEventListener('resize',function(){if(window.innerWidth===w)return;w=window.innerWidth;clearTimeout(t);t=setTimeout(run,120);},{passive:true});
    if('MutationObserver' in window)new MutationObserver(run).observe(root,{attributes:true,attributeFilter:['data-lang','lang']});
  }

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
  var fits=[];
  $$('.home-section>h2,.glance-head h2,.world>h2,.apps-headline,.topic>h2,.shell>section>h2').forEach(function(h){
    if(h.closest('header')||h.nextElementSibling&&h.nextElementSibling.classList.contains('v2-rule'))return;
    var r=d.createElement('span');r.className='v2-rule';r.setAttribute('aria-hidden','true');
    var cs=getComputedStyle(h);if(cs.textAlign!=='center'){r.style.marginLeft='0';r.style.transformOrigin='left';}
    h.insertAdjacentElement('afterend',r);fits.push({h:h,r:r,hm:[h.style.getPropertyValue('margin-bottom'),h.style.getPropertyPriority('margin-bottom')]});
  });
  fitRules(fits,20,24);

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
    /* blocks that only borrow the card class (no border, no fill, e.g. Solutions phase 05) get a free
       glow: no edge light tracing an invisible frame, and the glow fades out instead of stopping at the box */
    var cs=getComputedStyle(el);
    if(!parseFloat(cs.borderTopWidth)&&!parseFloat(cs.borderLeftWidth)&&cs.backgroundImage==='none'&&/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor))el.classList.add('v2-spot-free');
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
