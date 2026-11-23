/* VEROTERA · V26 Showcase: motion + light. Adds no copy; only wraps existing words.
   Performance rules (smoothness pass 22 Nov 2026):
   - one requestAnimationFrame ticker: every task first reads layout, then all writes happen
   - nothing per frame on :root (custom properties there restyle the whole page)
   - cursor light, grid, parallax and gallery move with transforms only (compositor)
   - canvases pause off screen and step down in quality on slow machines */
(function(){
  'use strict';
  var d=document,root=d.documentElement,body=d.body,W=window;
  function mq(q){return !!(W.matchMedia&&W.matchMedia(q).matches);}
  var reduce=mq('(prefers-reduced-motion: reduce)');
  var fine=mq('(hover:hover) and (pointer:fine)');
  var small=mq('(max-width:860px)');
  function $$(s,c){return [].slice.call((c||d).querySelectorAll(s));}
  function el(tag,cls,attrs){var e=d.createElement(tag);if(cls)e.className=cls;if(attrs)for(var k in attrs)e.setAttribute(k,attrs[k]);return e;}
  var IO='IntersectionObserver' in W,RO='ResizeObserver' in W;
  function seen(els,cb,margin){ /* tracks visibility, cb(el,isVisible) */
    if(!IO){els.forEach(function(e){cb(e,true);});return;}
    var o=new IntersectionObserver(function(es){es.forEach(function(en){cb(en.target,en.isIntersecting);});},{rootMargin:margin||'0px'});
    els.forEach(function(e){o.observe(e);});
  }

  /* images never block a frame while decoding, and are decoded ahead of time,
     about one and a half screens before they scroll into view (no first-sight hitch) */
  var allImgs=$$('img');allImgs.forEach(function(i){try{i.decoding='async';}catch(e){}});
  if(IO){var pre=new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;var i=en.target;pre.unobserve(i);
      var go=function(){if(i.decode)i.decode().catch(function(){});};if(i.complete&&i.naturalWidth)go();else i.addEventListener('load',go,{once:true});});},{rootMargin:'1400px 0px'});
    allImgs.forEach(function(i){pre.observe(i);});}

  /* ---------- frame ticker ---------------------------------------------- */
  var tasks=[],rafId=0,onScroll=[],onPointer=[];
  function kick(){if(!rafId)rafId=requestAnimationFrame(tick);}
  function task(read,live){var t={read:read,live:live||null,dirty:true};tasks.push(t);kick();return t;}
  function dirty(t){t.dirty=true;kick();}
  function tick(now){
    rafId=0;var writes=[],again=false,i,t,on,w;
    for(i=0;i<tasks.length;i++){t=tasks[i];on=!!(t.live&&t.live());if(!t.dirty&&!on)continue;t.dirty=false;w=t.read(now);if(w)writes.push(w);if(on)again=true;}
    for(i=0;i<writes.length;i++)writes[i](now);
    if(again)kick();
  }
  W.addEventListener('scroll',function(){onScroll.forEach(dirty);},{passive:true});
  W.addEventListener('resize',function(){onScroll.forEach(dirty);});

  /* ---------- preloader: once per session --------------------------------- */
  (function(){
    if(reduce)return;var was=false;try{was=sessionStorage.getItem('vx-pre')==='1';sessionStorage.setItem('vx-pre','1');}catch(e){}
    if(was)return;
    var p=el('div','vx-pre',{'aria-hidden':'true'});
    p.innerHTML='<div class="vx-pre-in"><img src="assets/img/logo-mark.png" alt=""><div class="vx-pre-bar"></div></div>';
    body.appendChild(p);
    function skip(){p.classList.add('done');}
    p.addEventListener('click',skip);d.addEventListener('keydown',skip,{once:true});
    setTimeout(skip,1350);
    setTimeout(function(){p.remove();},2600);
  })();

  /* ---------- the light (cursor) + the blueprint grid under it ----------- */
  var cx=-999,cy=-999,hasPtr=false;
  if(fine&&!reduce){
    W.addEventListener('pointermove',function(e){cx=e.clientX;cy=e.clientY;hasPtr=true;onPointer.forEach(dirty);},{passive:true});
    W.addEventListener('mouseout',function(e){if(!e.relatedTarget){hasPtr=false;onPointer.forEach(dirty);}});
    var light=el('div','vx-light',{'aria-hidden':'true'}),grid=el('div','vx-grid',{'aria-hidden':'true'}),gin=el('i');
    grid.appendChild(gin);body.appendChild(grid);body.appendChild(light);
    var shown=false;
    onPointer.push(task(function(){var x=cx,y=cy,on=hasPtr;return function(){
      if(on!==shown){shown=on;light.style.opacity=grid.style.opacity=on?'1':'0';}
      if(!on)return;
      var t='translate3d('+x+'px,'+y+'px,0)';light.style.transform=t;grid.style.transform=t;
      /* the grid stays fixed to the page: the inner sheet moves back by the remainder */
      var gx=((x-280)%56+56)%56,gy=((y-280)%56+56)%56;gin.style.transform='translate3d('+(-gx)+'px,'+(-gy)+'px,0)';
    };}));
  }

  /* ---------- nav: glass -> solid, progress ------------------------------ */
  var nav=d.querySelector('.site-nav');
  if(nav){
    var bar=el('span','vx-progress',{'aria-hidden':'true'});nav.appendChild(bar);
    onScroll.push(task(function(){var y=W.scrollY,h=root.scrollHeight-W.innerHeight;return function(){
      nav.classList.toggle('vx-solid',y>40);bar.style.transform='scaleX('+(h>0?Math.min(1,y/h):0).toFixed(4)+')';
    };}));
  }

  /* ---------- circuit: traces switched by light -------------------------- */
  function rng(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;var t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
  function Circuit(host,opt){
    opt=opt||{};
    var cv=el('canvas','vx-circuit',{'aria-hidden':'true'}),sv=el('canvas','vx-circuit vx-circuit-s',{'aria-hidden':'true'});
    var ctx=cv.getContext('2d'),sc=sv.getContext('2d');
    host.insertBefore(cv,host.firstChild);host.insertBefore(sv,cv);
    /* resolution has a pixel budget (~1.8 MP per board): soft glowing lines don't need full
       retina pixels, and on 125–150 % laptop screens the GPU work drops by more than half */
    var dpr=1,w=0,h=0,traces=[],bursts=[],visible=false,last=0,rect=null,t0=performance.now();
    var cell=opt.cell||(small?24:28),dens=opt.density||1,tier=0,slow=0,nF=0,skip=false;
    var DIRS=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]];
    function build(){
      var r=host.getBoundingClientRect();w=Math.max(1,Math.round(r.width));h=Math.max(1,Math.round(r.height));
      dpr=tier>0?1:Math.max(1,Math.min(W.devicePixelRatio||1,2,Math.sqrt(1.8e6/(w*h))));
      [cv,sv].forEach(function(c){c.width=Math.round(w*dpr);c.height=Math.round(h*dpr);});
      var R=rng(opt.seed||7),rnd=function(a,b){return a+R()*(b-a);};
      var cols=Math.floor(w/cell),rows=Math.floor(h/cell),n=Math.min(small?70:170,Math.round(cols*rows/14*dens));
      if(tier>0)n=Math.round(n*.5);
      traces=[];
      for(var k=0;k<n;k++){
        var x=Math.floor(rnd(1,cols))*cell,y=Math.floor(rnd(1,rows))*cell,di=R()<.75?[0,2,4,6][Math.floor(R()*4)]:Math.floor(R()*8);
        var pts=[[x,y]],steps=Math.floor(rnd(5,18));
        for(var s=0;s<steps;s++){
          if(R()<.22)di=(di+(R()<.5?1:7))%8;
          var dx=DIRS[di][0]*cell,dy=DIRS[di][1]*cell,nx=x+dx,ny=y+dy;
          if(nx<cell||ny<cell||nx>w-cell||ny>h-cell)break;
          x=nx;y=ny;var lp=pts[pts.length-1];
          if(pts.length>1){var pp=pts[pts.length-2];if((lp[0]-pp[0])*dy===(lp[1]-pp[1])*dx){lp[0]=x;lp[1]=y;continue;}}
          pts.push([x,y]);
        }
        if(pts.length<2)continue;
        var segs=[],L=0,minx=1e9,miny=1e9,maxx=-1e9,maxy=-1e9;
        for(var i=1;i<pts.length;i++){var a=pts[i-1],b=pts[i],l=Math.hypot(b[0]-a[0],b[1]-a[1]);segs.push(l);L+=l;}
        pts.forEach(function(p){minx=Math.min(minx,p[0]);miny=Math.min(miny,p[1]);maxx=Math.max(maxx,p[0]);maxy=Math.max(maxy,p[1]);});
        if(L<cell*2)continue;
        traces.push({p:pts,s:segs,L:L,t:rnd(0,L),v:rnd(38,110),tail:rnd(36,96),box:[minx,miny,maxx,maxy],boost:0,flash:0});
      }
      /* the board itself is drawn once, on its own canvas */
      sc.setTransform(dpr,0,0,dpr,0,0);sc.clearRect(0,0,w,h);sc.lineCap='round';sc.lineJoin='round';
      sc.strokeStyle='rgba(74,211,246,0.09)';sc.lineWidth=1;sc.beginPath();
      traces.forEach(function(tr){sc.moveTo(tr.p[0][0],tr.p[0][1]);for(var i=1;i<tr.p.length;i++)sc.lineTo(tr.p[i][0],tr.p[i][1]);});sc.stroke();
      sc.strokeStyle='rgba(74,211,246,0.22)';sc.beginPath();
      traces.forEach(function(tr){var e=tr.p[tr.p.length-1];sc.moveTo(e[0]+2.4,e[1]);sc.arc(e[0],e[1],2.4,0,6.283);});sc.stroke();
      sc.fillStyle='rgba(74,211,246,0.16)';traces.forEach(function(tr){var s0=tr.p[0];sc.fillRect(s0[0]-1.5,s0[1]-1.5,3,3);});
      ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
    }
    function part(tr,a,b){ /* appends the polyline from length a to b to the current path */
      var acc=0,started=false;
      for(var i=0;i<tr.s.length;i++){
        var l=tr.s[i],p=tr.p[i],q=tr.p[i+1],s0=acc,s1=acc+l;acc=s1;
        if(s1<a)continue;if(s0>b)break;
        var u0=Math.max(0,(a-s0)/l),u1=Math.min(1,(b-s0)/l);
        if(!started){ctx.moveTo(p[0]+(q[0]-p[0])*u0,p[1]+(q[1]-p[1])*u0);started=true;}
        ctx.lineTo(p[0]+(q[0]-p[0])*u1,p[1]+(q[1]-p[1])*u1);
      }
    }
    function lightPos(now){
      if(hasPtr&&rect&&cx>=rect.left&&cx<=rect.right&&cy>=rect.top&&cy<=rect.bottom)return [cx-rect.left,cy-rect.top,1];
      var k=(now-t0)/1000; /* autopilot: a slow light drifting through the board */
      return [w*(.62+.28*Math.sin(k*.21)),h*(.5+.32*Math.sin(k*.33+1.3)),.55];
    }
    function perim(s){ /* point on the inner border at arc length s */
      var a=w-1.5,b=h-1.5,P=2*(a+b);s=((s%P)+P)%P;
      if(s<a)return [.75+s,.75];s-=a;if(s<b)return [w-.75,.75+s];s-=b;if(s<a)return [w-.75-s,h-.75];s-=a;return [.75,h-.75-s];
    }
    function paint(now,L){
      var gap=last?now-last:16.7;
      /* adaptive quality, judged by the real frame rate (catches a busy GPU too):
         tier 1 = half the traces, tier 2 = no halos and 30 fps for the board */
      if(gap<100){slow=slow*.94+(gap>21?1:0)*.06;if(++nF>50&&slow>.5&&tier<2){tier++;nF=0;slow=0;if(tier===1)build();}}
      if(tier===2){skip=!skip;if(skip)return;}
      var dt=Math.min(.05,(now-(last||now))/1000);last=now;
      ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      var lx=L[0],ly=L[1],R=small?150:230,i,tr;
      var g=ctx.createRadialGradient(lx,ly,0,lx,ly,R);g.addColorStop(0,'rgba(74,211,246,'+(.16*L[2])+')');g.addColorStop(1,'rgba(74,211,246,0)');ctx.fillStyle=g;ctx.fillRect(lx-R,ly-R,R*2,R*2);
      ctx.globalCompositeOperation='lighter';ctx.lineCap='round';ctx.lineJoin='round';
      var hot=[];ctx.beginPath();var calm=false;
      for(i=0;i<traces.length;i++){
        tr=traces[i];var b=tr.box,dx=Math.max(b[0]-lx,0,lx-b[2]),dy=Math.max(b[1]-ly,0,ly-b[3]);
        var target=Math.max(0,1-Math.hypot(dx,dy)/R)*L[2];
        for(var j=0;j<bursts.length;j++){var bu=bursts[j],bd=Math.abs(Math.hypot((b[0]+b[2])/2-bu.x,(b[1]+b[3])/2-bu.y)-bu.r);if(bd<70)target=Math.max(target,1-bd/70);}
        tr.boost+=(target-tr.boost)*Math.min(1,dt*6);
        tr.t+=tr.v*dt*(1+tr.boost*3.2);
        if(tr.t>tr.L+tr.tail){tr.t=0;tr.flash=1;}
        tr.flash*=Math.pow(.02,dt);
        if(tr.boost>.06||tr.flash>.05){hot.push(tr);continue;}
        var a0=Math.max(0,tr.t-tr.tail),z0=Math.min(tr.L,tr.t);if(z0>a0){part(tr,a0,z0);calm=true;}
      }
      /* resting pulses share one path: two strokes for all of them */
      if(calm){if(tier<2){ctx.strokeStyle='rgba(0,140,209,.12)';ctx.lineWidth=5;ctx.stroke();}ctx.strokeStyle='rgba(74,211,246,.33)';ctx.lineWidth=1.6;ctx.stroke();}
      for(i=0;i<hot.length;i++){
        tr=hot[i];var a=Math.max(0,tr.t-tr.tail),z=Math.min(tr.L,tr.t),al=.32+tr.boost*.68;
        if(tr.boost>.06){ctx.strokeStyle='rgba(74,211,246,'+(.28*tr.boost).toFixed(3)+')';ctx.lineWidth=1.2;ctx.beginPath();part(tr,0,tr.L);ctx.stroke();}
        if(z>a){ctx.beginPath();part(tr,a,z);
          if(tier<2){ctx.strokeStyle='rgba(0,140,209,'+(.35*al).toFixed(3)+')';ctx.lineWidth=5;ctx.stroke();}
          ctx.strokeStyle='rgba(74,211,246,'+al.toFixed(3)+')';ctx.lineWidth=1.6;ctx.stroke();}
        if(tr.flash>.05){var e=tr.p[tr.p.length-1];ctx.fillStyle='rgba(74,211,246,'+(tr.flash*(.4+tr.boost*.6)).toFixed(3)+')';ctx.beginPath();ctx.arc(e[0],e[1],2.5+tr.flash*4,0,6.283);ctx.fill();}
      }
      for(var k=bursts.length-1;k>=0;k--){var bu2=bursts[k];bu2.r+=dt*900;bu2.a-=dt*.9;
        if(bu2.a<=0){bursts.splice(k,1);continue;}
        ctx.strokeStyle='rgba(74,211,246,'+(bu2.a*.55).toFixed(3)+')';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(bu2.x,bu2.y,bu2.r,0,6.283);ctx.stroke();}
      if(opt.beam){ /* a spark runs around the box (was a repainting conic border) */
        var P=2*(w+h-3),head=((now-t0)/3200%1)*P,tail=P*.2,N=14;ctx.lineWidth=1.5;
        for(var q=0;q<N;q++){var s0=head-tail+tail*q/N,s1=head-tail+tail*(q+1)/N,u=(q+1)/N;
          ctx.strokeStyle='rgba(74,211,246,'+(u*u*.95).toFixed(3)+')';ctx.beginPath();var p0=perim(s0);ctx.moveTo(p0[0],p0[1]);
          var ss=s0;while(ss<s1){var nx2=Math.min(s1,ss+6);var pp2=perim(nx2);ctx.lineTo(pp2[0],pp2[1]);ss=nx2;}ctx.stroke();}
        var hp=perim(head);var hg=ctx.createRadialGradient(hp[0],hp[1],0,hp[0],hp[1],26);hg.addColorStop(0,'rgba(74,211,246,.5)');hg.addColorStop(1,'rgba(74,211,246,0)');ctx.fillStyle=hg;ctx.fillRect(hp[0]-26,hp[1]-26,52,52);
      }
      ctx.globalCompositeOperation='source-over';
    }
    build();
    if(reduce)return;
    var t=task(function(now){rect=host.getBoundingClientRect();var L=lightPos(now);return function(now2){paint(now2,L);};},function(){return visible&&!d.hidden;});
    seen([host],function(_,v){visible=v;if(v){last=0;dirty(t);}});
    d.addEventListener('visibilitychange',function(){if(!d.hidden){last=0;dirty(t);}});
    if(RO){var pw=0,ph=0;new ResizeObserver(function(){var r=host.getBoundingClientRect();if(Math.abs(r.width-pw)>2||Math.abs(r.height-ph)>2){pw=r.width;ph=r.height;build();}}).observe(host);}
    else W.addEventListener('resize',build);
    if(opt.click)host.addEventListener('pointerdown',function(e){if(e.target.closest('a,button,select,input,textarea'))return;var r=host.getBoundingClientRect();bursts.push({x:e.clientX-r.left,y:e.clientY-r.top,r:0,a:1});});
  }

  var hero=d.querySelector('.shell>header');
  if(hero){
    Circuit(hero,{click:true,density:body.classList.contains('page-home')?1:.8,seed:11});
    var hud=el('div','vx-hud',{'aria-hidden':'true'});hud.innerHTML='<i></i><i></i><i></i><i></i>';hero.appendChild(hud);
    if(body.classList.contains('page-home'))hero.appendChild(el('span','vx-cue',{'aria-hidden':'true'}));
  }
  var cta=d.querySelector('section.cta');
  if(cta)Circuit(cta,{density:.55,cell:32,click:true,beam:true,seed:23});

  /* ---------- kinetic words ---------------------------------------------- */
  function splitWords(node){
    var idx=0;
    (function walk(n){
      [].slice.call(n.childNodes).forEach(function(c){
        if(c.nodeType===3){
          var parts=c.nodeValue.split(/(\s+)/);if(parts.length===1&&!parts[0].trim())return;
          var frag=d.createDocumentFragment();
          parts.forEach(function(p){
            if(!p)return;if(/^\s+$/.test(p)){frag.appendChild(d.createTextNode(p));return;}
            var o=el('span','vx-w'),i=el('span');i.textContent=p;i.style.setProperty('--i',idx++);o.appendChild(i);frag.appendChild(o);
          });
          c.parentNode.replaceChild(frag,c);
        }else if(c.nodeType===1&&!c.matches('img,svg,br,.brand-lockup')){
          if(c.classList.contains('l-en')||c.classList.contains('l-de'))idx=0;
          walk(c);
        }
      });
    })(node);
  }
  var kinetic=$$('.shell>header h1,.home-section>h2:not(.home-mission),.glance-head h2,.shell>section>h2,.apps-headline:not(.home-mission),.cta h2');
  if(!reduce)kinetic.forEach(function(h){if(h.closest('.deeptech'))return;splitWords(h);});

  /* ---------- reveal machinery ------------------------------------------- */
  function onView(els,cb,opts){
    if(reduce||!IO){els.forEach(function(e){cb(e);});return;}
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){cb(en.target);io.unobserve(en.target);}});},opts||{rootMargin:'0px 0px -10% 0px',threshold:.12});
    els.forEach(function(e){io.observe(e);});
  }
  kinetic.forEach(function(h){h.classList.add('vx-k');});
  if(hero){var hh=hero.querySelector('h1');if(hh){hh.style.setProperty('--d','250ms');setTimeout(function(){hh.classList.add('vx-on');},reduce?0:(d.querySelector('.vx-pre')?1500:150));}}
  onView(kinetic.filter(function(h){return !h.closest('header');}),function(h){h.classList.add('vx-on');});
  /* light rules under section headings */
  var fits=[];
  $$('.home-section>h2,.glance-head h2,.world>h2,.shell>section>h2').forEach(function(h){
    if(h.closest('header'))return;var r=el('span','vx-rule',{'aria-hidden':'true'});
    if(getComputedStyle(h).textAlign!=='center'){r.style.marginLeft='0';r.style.transformOrigin='left';}
    h.insertAdjacentElement('afterend',r);onView([r],function(x){x.classList.add('vx-on');});
    fits.push({h:h,r:r,hm:[h.style.getPropertyValue('margin-bottom'),h.style.getPropertyPriority('margin-bottom')]});
  });
  /* rules sit 22px under their heading and keep at least 28px to the next block; where the original
     layout had more room there, it stays below the rule. Layout offsets ignore the reveal transforms;
     batched read/write passes; redone when the width or the language changes. */
  (function(list,up,down){
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
    var w=W.innerWidth,t=0;
    W.addEventListener('resize',function(){if(W.innerWidth===w)return;w=W.innerWidth;clearTimeout(t);t=setTimeout(run,120);},{passive:true});
    if('MutationObserver' in W)new MutationObserver(run).observe(d.documentElement,{attributes:true,attributeFilter:['data-lang','lang']});
  })(fits,22,28);
  /* blocks rise in, staggered per group; afterwards the reveal styles are removed */
  var blocks=$$('.shell>header .intro,.shell>header .hero-actions,.vmx-mission,.vmx-pt,.home-section>p,.glance-head>p,.explore>a,.gp,.world>p,.cta-text>p,.cta-eyebrow,.cta-brand,.cta .cta-button,.card,.ch-card,.ec-step,.rm-stage,.key-note,.cred,.pillar,.contact-form,.contact-side,.stages .stage,.ec-video-pair>*,.ec-par,.sx');
  blocks=blocks.filter(function(b){return !b.closest('.unified-bar,.panel-navigation,.tour-dock');});
  blocks.forEach(function(b){
    var sib=b.parentElement?[].indexOf.call(b.parentElement.children,b):0;
    var base=b.closest('header')?600:0;
    b.style.setProperty('--d',(base/1000+Math.min(sib,6)*.1)+'s');b.classList.add('vx-rv');
  });
  function settle(b){var dl=parseFloat(b.style.getPropertyValue('--d'))||0;setTimeout(function(){b.classList.remove('vx-rv','vx-on','vx-pre');},1300+dl*1000);}
  /* one screen ahead: give the block its layer now, so the GPU rasters it before it is visible */
  if(IO&&!reduce){var preRv=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('vx-pre');preRv.unobserve(en.target);}});},{rootMargin:'0px 0px 100% 0px'});
    blocks.forEach(function(b){if(!b.closest('header'))preRv.observe(b);});}
  var heroBlocks=blocks.filter(function(b){return b.closest('header');});
  setTimeout(function(){heroBlocks.forEach(function(b){b.classList.add('vx-on');settle(b);});},reduce?0:(d.querySelector('.vx-pre')?1600:250));
  onView(blocks.filter(function(b){return !b.closest('header');}),function(b){b.classList.add('vx-on');settle(b);});
  /* images open like an aperture */
  var clips=$$('.split img,.hy-img img,.ap-img img,.kn-img img,.ec-split img,.ec-video-pair img');
  if(!reduce){clips.forEach(function(i){i.classList.add('vx-clip');});onView(clips,function(i){i.classList.add('vx-on');});}

  /* ---------- deep-tech headline: the light sweep only runs on screen ---- */
  var dth=$$('.deeptech h2');if(dth.length&&!reduce)seen(dth,function(h,v){h.classList.toggle('vx-inview',v);},'80px');

  /* ---------- vision statement fills with light while scrolling ---------- */
  var vision=d.querySelector('.vmx-vision');
  if(vision&&!reduce){
    vision.classList.add('vx-fill');
    var langs=$$('.l-en,.l-de',vision);if(!langs.length)langs=[vision];
    var sets=langs.map(function(lang){
      (function walk(n){[].slice.call(n.childNodes).forEach(function(c){
        if(c.nodeType===3){var frag=d.createDocumentFragment();c.nodeValue.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){frag.appendChild(d.createTextNode(p));return;}var s=el('span','vx-fw');s.textContent=p;frag.appendChild(s);});c.parentNode.replaceChild(frag,c);}
        else if(c.nodeType===1)walk(c);});})(lang);
      return {ws:[].slice.call(lang.querySelectorAll('.vx-fw')),n:-1};
    });
    var vOn=false;
    var vt=task(function(){if(!vOn)return null;var r=vision.getBoundingClientRect(),vh=W.innerHeight,p=(vh*.82-r.top)/(r.height+vh*.42);p=Math.max(0,Math.min(1,p));
      return function(){sets.forEach(function(S){var n=Math.round(p*S.ws.length);if(n===S.n)return;
        var a=S.n<0?0:Math.min(n,S.n),z=S.n<0?S.ws.length:Math.max(n,S.n);for(var i=a;i<z;i++)S.ws[i].classList.toggle('lit',i<n);S.n=n;});};});
    onScroll.push(vt);
    seen([vision],function(_,v){vOn=v;if(v)dirty(vt);},'200px 0px');
  }

  /* ---------- cards: flashlight + border arc that points at the light ----
     (after research: no tilt/wobble, an arc of light on the edge instead) */
  function ticks(){var t=el('span','vx-ticks',{'aria-hidden':'true'});for(var i=0;i<4;i++)t.appendChild(el('i'));return t;}
  var cards=$$('.explore>a,.gp,.ch-card,.rm-stage,.key-note,.card:not(.contact-form):not(.contact-side)');
  /* both lights move on the compositor: the glare is a blob that slides (translate), the arc is a
     conic sheet that turns (rotate) inside a border-shaped mask. Nothing repaints per frame. */
  cards.forEach(function(c){
    c.classList.add('vx-tilt');if(getComputedStyle(c).position==='static')c.style.position='relative';
    c._gl=el('span','vx-glare',{'aria-hidden':'true'});c._gb=el('i');c._gl.appendChild(c._gb);
    c._gw=el('span','vx-glow',{'aria-hidden':'true'});c._gi=el('i');c._gw.appendChild(c._gi);
    c._a=null;c._n=false;c._h=false;c._d=0;
    c.appendChild(c._gl);c.appendChild(c._gw);c.appendChild(ticks());
    c.addEventListener('pointerenter',function(){c._h=true;});c.addEventListener('pointerleave',function(){c._h=false;});
  });
  if(fine&&!reduce&&cards.length){
    var live=new Set(),turning=false;
    seen(cards,function(c,v){if(v)live.add(c);else{live.delete(c);c._n=false;c.classList.remove('vx-near');}},'120px 0px');
    var ct=task(function(){
      if(!live.size){turning=false;return null;}var x=cx,y=cy,on=hasPtr,list=[];
      live.forEach(function(c){list.push([c,c.getBoundingClientRect()]);});
      return function(){turning=false;list.forEach(function(it){
        var c=it[0],r=it[1],near=on&&x>r.left-80&&x<r.right+80&&y>r.top-80&&y<r.bottom+80;
        if(near!==c._n){c._n=near;c.classList.toggle('vx-near',near);}
        if(!near)return;
        var dg=Math.ceil(Math.hypot(r.width,r.height))+6;if(dg!==c._d){c._d=dg;c._gi.style.width=c._gi.style.height=dg+'px';}
        /* unwrap the angle so the arc never spins the long way round, then ease towards it */
        var raw=Math.atan2(y-(r.top+r.height/2),x-(r.left+r.width/2))*180/Math.PI+90;
        if(c._a==null)c._a=raw;
        var tgt=c._a+((((raw-c._a)%360)+540)%360-180),nx=c._a+(tgt-c._a)*.3;
        if(Math.abs(tgt-nx)>.2)turning=true;else nx=tgt;
        c._a=nx;c._gi.style.rotate=nx.toFixed(2)+'deg';
        if(c._h)c._gb.style.transform='translate('+(x-r.left).toFixed(1)+'px,'+(y-r.top).toFixed(1)+'px)';
      });};
    },function(){return turning;});
    onPointer.push(ct);onScroll.push(ct);
  }
  /* mono index on the explore cards (numbers only) */
  var ex=$$('.explore>a');ex.forEach(function(a,i){var n=el('span','vx-ix',{'aria-hidden':'true'});n.textContent=('0'+(i+1)).slice(-2)+' / '+('0'+ex.length).slice(-2);a.appendChild(n);});
  /* Hybrid AI: video and image framed like monitors */
  $$('.ec-video-pair>*').forEach(function(m){if(getComputedStyle(m).position==='static')m.style.position='relative';m.appendChild(ticks());});

  /* ---------- magnetic buttons (spring in JS, measured without its own offset) */
  if(fine&&!reduce)$$('.shell>header .nav-bezel,.cta .nav-bezel,.sn-cta').forEach(function(b){
    var base=null,sy=0,tx=0,ty=0,gx=0,gy=0,run=false;b.classList.add('vx-mag');
    function step(){tx+=(gx-tx)*.2;ty+=(gy-ty)*.2;
      if(Math.abs(gx-tx)<.05&&Math.abs(gy-ty)<.05){tx=gx;ty=gy;run=false;}
      b.style.transform=(tx||ty)?'translate3d('+tx.toFixed(2)+'px,'+ty.toFixed(2)+'px,0)':'';
      if(run)requestAnimationFrame(step);}
    function go(){if(!run){run=true;requestAnimationFrame(step);}}
    b.addEventListener('pointerenter',function(){var r=b.getBoundingClientRect();base={l:r.left-tx,t:r.top-ty,w:r.width,h:r.height};sy=W.scrollY;});
    b.addEventListener('pointermove',function(e){if(!base)return;var top=base.t-(W.scrollY-sy);gx=(e.clientX-base.l-base.w/2)*.22;gy=(e.clientY-top-base.h/2)*.3;go();});
    b.addEventListener('pointerleave',function(){base=null;gx=gy=0;go();});
  });

  /* ---------- explore image parallax (own transform channel: translate) -- */
  var pimgs=$$('.explore>a>img');
  if(pimgs.length&&!reduce){
    var pOn=new Set();
    var pt=task(function(){if(!pOn.size)return null;var vh=W.innerHeight,list=[];
      pOn.forEach(function(i){var r=i.parentElement.getBoundingClientRect();list.push([i,((r.top+r.height/2)-vh/2)/vh*-28]);});
      return function(){list.forEach(function(it){it[0].style.translate='0 '+it[1].toFixed(1)+'px';});};});
    onScroll.push(pt);
    /* own layer only while on screen, so the parallax never repaints the card */
    seen(pimgs,function(i,v){i.classList.toggle('vx-px',v);if(v){pOn.add(i);dirty(pt);}else pOn.delete(i);},'700px 0px');
  }

  /* ---------- applications: pinned horizontal journey (home) ------------- */
  var fields=d.querySelector('.world .fields.five');
  if(fields){
    var tiles=$$('.field-tile',fields),timgs=tiles.map(function(t){return t.querySelector('img');});
    tiles.forEach(function(t,i){var n=el('span','vx-n',{'aria-hidden':'true'});n.textContent=('0'+(i+1)).slice(-2)+' / '+('0'+tiles.length).slice(-2);t.appendChild(n);});
    var hz=el('div','vx-hz'),st=el('div','vx-hz-sticky'),hb=el('div','vx-hz-bar',{'aria-hidden':'true'});
    fields.parentNode.insertBefore(hz,fields);hz.appendChild(st);st.appendChild(fields);st.appendChild(hb);
    var span=0,stTop=0,f0=0,mid=[],tx=0;
    function measure(){
      if(mq('(max-width:860px)')||reduce){span=0;hz.style.height='';fields.style.transform='';timgs.forEach(function(im){if(im)im.style.translate='';});return;}
      span=Math.max(0,fields.scrollWidth-W.innerWidth);hz.style.height=(st.offsetHeight+span)+'px';
      stTop=parseFloat(getComputedStyle(st).top)||0;
      var hr=hz.getBoundingClientRect(),fr=fields.getBoundingClientRect();f0=fr.left-tx-hr.left;
      mid=tiles.map(function(t){var r=t.getBoundingClientRect();return r.left-fr.left+r.width/2;});
      dirty(ht);
    }
    var ht=task(function(){if(!span)return null;var r=hz.getBoundingClientRect(),vw=W.innerWidth;
      if(r.bottom<-50||r.top>W.innerHeight+50)return null;
      var p=Math.max(0,Math.min(1,(stTop-r.top)/span)),x=-p*span;
      return function(){tx=x;fields.style.transform='translate3d('+x.toFixed(1)+'px,0,0)';hb.style.setProperty('--hp',p.toFixed(4));
        for(var i=0;i<tiles.length;i++){var im=timgs[i];if(!im)continue;var c=r.left+f0+x+mid[i];im.style.translate=(((c-vw/2)/vw)*-60).toFixed(1)+'px 0';}};});
    onScroll.push(ht);
    seen([hz],function(_,v){hz.classList.toggle('vx-live',v);},'900px 0px'); /* image layers only near the screen, made one screen early */
    W.addEventListener('resize',measure);
    if(d.readyState==='complete')measure();else W.addEventListener('load',measure);measure();
    if(RO)new ResizeObserver(function(){measure();}).observe(st);
  }

  /* ---------- giant wordmark over a flickering square grid --------------- */
  var foot=d.querySelector('.ai-note')||d.querySelector('.legal');
  if(foot){
    var gm=el('div','vx-giant',{'aria-hidden':'true'});var im=el('img',null,{src:'assets/img/logo-wordmark.png',alt:'',loading:'lazy',decoding:'async'});
    var fc=el('canvas','vx-flicker');gm.appendChild(fc);gm.appendChild(im);foot.parentNode.insertBefore(gm,foot.nextSibling);
    (function(){
      var c2=fc.getContext('2d'),S=4,G=6,cols=0,rows=0,lv=null,dpr=Math.min(W.devicePixelRatio||1,1.5),vis=false,lastF=0,LV=10,styles=[];
      for(var q=0;q<=LV;q++)styles.push('rgba(74,211,246,'+(q/LV*.5).toFixed(3)+')');
      function size(){var r=gm.getBoundingClientRect();fc.width=Math.round(r.width*dpr);fc.height=Math.round(r.height*dpr);cols=Math.ceil(r.width/(S+G));rows=Math.ceil(r.height/(S+G));lv=new Uint8Array(cols*rows);for(var i=0;i<lv.length;i++)lv[i]=Math.floor(Math.random()*(LV+1));drawAll();}
      function drawAll(){c2.setTransform(dpr,0,0,dpr,0,0);c2.clearRect(0,0,fc.width,fc.height);
        for(var l=1;l<=LV;l++){c2.fillStyle=styles[l];for(var i=0;i<lv.length;i++)if(lv[i]===l)c2.fillRect((i%cols)*(S+G),Math.floor(i/cols)*(S+G),S,S);}}
      function flick(t){if(!vis||d.hidden)return;requestAnimationFrame(flick);if(t-lastF<42)return;lastF=t;
        var n=Math.ceil(lv.length*.035);c2.setTransform(dpr,0,0,dpr,0,0);
        for(var k=0;k<n;k++){var i=Math.floor(Math.random()*lv.length),l=Math.floor(Math.random()*(LV+1)),x=(i%cols)*(S+G),y=Math.floor(i/cols)*(S+G);
          lv[i]=l;c2.clearRect(x,y,S,S);if(l){c2.fillStyle=styles[l];c2.fillRect(x,y,S,S);}}}
      size();
      if(!reduce)seen([gm],function(_,v){var was=vis;vis=v;if(v&&!was)requestAnimationFrame(flick);});
      /* the wordmark loads lazily: re-size when its box changes (width or height) */
      if(RO){var pw=0,ph=0;new ResizeObserver(function(){var r=gm.getBoundingClientRect();if(Math.abs(r.width-pw)>2||Math.abs(r.height-ph)>2){pw=r.width;ph=r.height;size();}}).observe(gm);}
      else W.addEventListener('resize',size);
    })();
  }

  W.addEventListener('beforeprint',function(){$$('.vx-rv,.vx-k,.vx-clip,.vx-rule').forEach(function(e){e.classList.add('vx-on');});});
})();
