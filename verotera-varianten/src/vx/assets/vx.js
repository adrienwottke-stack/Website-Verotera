/* VEROTERA · V26 Showcase: motion + light. Adds no copy; only wraps existing words. */
(function(){
  'use strict';
  var d=document,root=d.documentElement,body=d.body,W=window;
  var reduce=W.matchMedia&&W.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=W.matchMedia&&W.matchMedia('(hover:hover) and (pointer:fine)').matches;
  var small=W.matchMedia&&W.matchMedia('(max-width:860px)').matches;
  function $$(s,c){return [].slice.call((c||d).querySelectorAll(s));}
  function el(tag,cls,attrs){var e=d.createElement(tag);if(cls)e.className=cls;if(attrs)for(var k in attrs)e.setAttribute(k,attrs[k]);return e;}
  var IO='IntersectionObserver' in W;

  /* ---------- preloader: once per session --------------------------------- */
  (function(){
    if(reduce)return;var seen=false;try{seen=sessionStorage.getItem('vx-pre')==='1';sessionStorage.setItem('vx-pre','1');}catch(e){}
    if(seen)return;
    var p=el('div','vx-pre',{'aria-hidden':'true'});
    p.innerHTML='<div class="vx-pre-in"><img src="assets/img/logo-mark.png" alt=""><div class="vx-pre-bar"></div></div>';
    body.appendChild(p);
    function skip(){p.classList.add('done');}
    p.addEventListener('click',skip);d.addEventListener('keydown',skip,{once:true});
    setTimeout(skip,1350);
    setTimeout(function(){p.remove();},2600);
  })();

  /* ---------- global light (cursor) -------------------------------------- */
  var cx=-999,cy=-999,lightEl=null;
  if(fine&&!reduce){
    lightEl=el('div','vx-light',{'aria-hidden':'true'});body.appendChild(lightEl);
    var lt=false;
    W.addEventListener('pointermove',function(e){cx=e.clientX;cy=e.clientY;if(lt)return;lt=true;requestAnimationFrame(function(){root.style.setProperty('--cx',cx+'px');root.style.setProperty('--cy',cy+'px');lt=false;});},{passive:true});
    d.addEventListener('pointerleave',function(){cx=cy=-999;root.style.setProperty('--cx','-999px');root.style.setProperty('--cy','-999px');});
  }

  /* ---------- nav: glass -> solid, progress ------------------------------ */
  var nav=d.querySelector('.site-nav');
  if(nav){
    var bar=el('span','vx-progress',{'aria-hidden':'true'});nav.appendChild(bar);
    var tk=false;function ns(){if(tk)return;tk=true;requestAnimationFrame(function(){var y=W.scrollY,h=root.scrollHeight-W.innerHeight;nav.classList.toggle('vx-solid',y>40);bar.style.setProperty('--p',h>0?Math.min(1,y/h):0);tk=false;});}
    W.addEventListener('scroll',ns,{passive:true});ns();
  }

  /* ---------- circuit: traces switched by light -------------------------- */
  function Circuit(host,opt){
    opt=opt||{};
    var cv=el('canvas','vx-circuit',{'aria-hidden':'true'}),ctx=cv.getContext('2d');
    host.insertBefore(cv,host.firstChild);
    var dpr=Math.min(W.devicePixelRatio||1,1.75),w=0,h=0,traces=[],stat=null,bursts=[],visible=true,last=0,raf=0,rect=null,t0=performance.now();
    var cell=opt.cell||(small?24:28),dens=opt.density||1;
    var DIRS=[[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]];
    function rnd(a,b){return a+Math.random()*(b-a);}
    function build(){
      rect=host.getBoundingClientRect();w=Math.max(1,rect.width);h=Math.max(1,rect.height);
      cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);cv.style.width=w+'px';cv.style.height=h+'px';
      var cols=Math.floor(w/cell),rows=Math.floor(h/cell),n=Math.min(small?70:170,Math.round(cols*rows/14*dens));
      traces=[];
      for(var k=0;k<n;k++){
        var x=Math.floor(rnd(1,cols))*cell,y=Math.floor(rnd(1,rows))*cell,di=Math.random()<.75?[0,2,4,6][Math.floor(Math.random()*4)]:Math.floor(Math.random()*8);
        var pts=[[x,y]],steps=Math.floor(rnd(5,18));
        for(var s=0;s<steps;s++){
          if(Math.random()<.22)di=(di+(Math.random()<.5?1:7))%8;
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
      stat=d.createElement('canvas');stat.width=cv.width;stat.height=cv.height;var sc=stat.getContext('2d');
      sc.scale(dpr,dpr);sc.lineCap='round';sc.lineJoin='round';
      traces.forEach(function(tr){
        sc.strokeStyle='rgba(74,211,246,0.09)';sc.lineWidth=1;sc.beginPath();sc.moveTo(tr.p[0][0],tr.p[0][1]);for(var i=1;i<tr.p.length;i++)sc.lineTo(tr.p[i][0],tr.p[i][1]);sc.stroke();
        var e=tr.p[tr.p.length-1];sc.strokeStyle='rgba(74,211,246,0.22)';sc.beginPath();sc.arc(e[0],e[1],2.4,0,6.283);sc.stroke();
        var s0=tr.p[0];sc.fillStyle='rgba(74,211,246,0.16)';sc.fillRect(s0[0]-1.5,s0[1]-1.5,3,3);
      });
    }
    function pathPart(tr,a,b){ /* move along polyline from length a to b */
      ctx.beginPath();var acc=0,started=false;
      for(var i=0;i<tr.s.length;i++){
        var l=tr.s[i],p=tr.p[i],q=tr.p[i+1],s0=acc,s1=acc+l;acc=s1;
        if(s1<a)continue;if(s0>b)break;
        var u0=Math.max(0,(a-s0)/l),u1=Math.min(1,(b-s0)/l);
        var x0=p[0]+(q[0]-p[0])*u0,y0=p[1]+(q[1]-p[1])*u0,x1=p[0]+(q[0]-p[0])*u1,y1=p[1]+(q[1]-p[1])*u1;
        if(!started){ctx.moveTo(x0,y0);started=true;}ctx.lineTo(x1,y1);
      }
    }
    function lightPos(now){
      if(rect&&cx>-900&&cx>=rect.left&&cx<=rect.right&&cy>=rect.top&&cy<=rect.bottom)return [cx-rect.left,cy-rect.top,1];
      var k=(now-t0)/1000; /* autopilot: a slow light drifting through the board */
      return [w*(.62+.28*Math.sin(k*.21)),h*(.5+.32*Math.sin(k*.33+1.3)),.55];
    }
    function frame(now){
      raf=0;if(!visible||d.hidden)return;
      var dt=Math.min(.05,(now-(last||now))/1000);last=now;
      ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
      ctx.drawImage(stat,0,0,w,h);
      var L=lightPos(now),lx=L[0],ly=L[1],R=small?150:230;
      var g=ctx.createRadialGradient(lx,ly,0,lx,ly,R);g.addColorStop(0,'rgba(74,211,246,'+(.16*L[2])+')');g.addColorStop(1,'rgba(74,211,246,0)');ctx.fillStyle=g;ctx.fillRect(lx-R,ly-R,R*2,R*2);
      ctx.globalCompositeOperation='lighter';ctx.lineCap='round';ctx.lineJoin='round';
      for(var i=0;i<traces.length;i++){
        var tr=traces[i],b=tr.box,dx=Math.max(b[0]-lx,0,lx-b[2]),dy=Math.max(b[1]-ly,0,ly-b[3]),dist=Math.hypot(dx,dy);
        var target=Math.max(0,1-dist/R)*L[2];
        for(var j=0;j<bursts.length;j++){var bu=bursts[j],bd=Math.abs(Math.hypot((b[0]+b[2])/2-bu.x,(b[1]+b[3])/2-bu.y)-bu.r);if(bd<70)target=Math.max(target,1-bd/70);}
        tr.boost+=(target-tr.boost)*Math.min(1,dt*6);
        tr.t+=tr.v*dt*(1+tr.boost*3.2);
        if(tr.t>tr.L+tr.tail){tr.t=0;tr.flash=1;}
        tr.flash*=Math.pow(.02,dt);
        if(tr.boost>.04){ctx.strokeStyle='rgba(74,211,246,'+(.28*tr.boost)+')';ctx.lineWidth=1.2;pathPart(tr,0,tr.L);ctx.stroke();}
        var a=Math.max(0,tr.t-tr.tail),z=Math.min(tr.L,tr.t),al=.32+tr.boost*.68;
        if(z>a){
          ctx.strokeStyle='rgba(0,140,209,'+(.35*al)+')';ctx.lineWidth=5;pathPart(tr,a,z);ctx.stroke();
          ctx.strokeStyle='rgba(74,211,246,'+al+')';ctx.lineWidth=1.6;pathPart(tr,a,z);ctx.stroke();
        }
        if(tr.flash>.05){var e=tr.p[tr.p.length-1];ctx.fillStyle='rgba(74,211,246,'+(tr.flash*(.4+tr.boost*.6))+')';ctx.beginPath();ctx.arc(e[0],e[1],2.5+tr.flash*4,0,6.283);ctx.fill();}
      }
      for(var k=bursts.length-1;k>=0;k--){var bu=bursts[k];bu.r+=dt*900;bu.a-=dt*.9;
        if(bu.a<=0){bursts.splice(k,1);continue;}
        ctx.strokeStyle='rgba(74,211,246,'+(bu.a*.55)+')';ctx.lineWidth=1.5;ctx.beginPath();ctx.arc(bu.x,bu.y,bu.r,0,6.283);ctx.stroke();}
      ctx.globalCompositeOperation='source-over';
      raf=requestAnimationFrame(frame);
    }
    function start(){if(!raf&&!reduce){last=0;raf=requestAnimationFrame(frame);}}
    build();
    if(reduce){ctx.setTransform(1,0,0,1,0,0);ctx.drawImage(stat,0,0);return;}
    if(IO)new IntersectionObserver(function(es){visible=es[0].isIntersecting;if(visible)start();}).observe(host);
    d.addEventListener('visibilitychange',function(){if(!d.hidden)start();});
    var rt;W.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){build();start();},200);});
    W.addEventListener('scroll',function(){rect=host.getBoundingClientRect();},{passive:true});
    if(opt.click)host.addEventListener('pointerdown',function(e){if(e.target.closest('a,button,select,input'))return;rect=host.getBoundingClientRect();bursts.push({x:e.clientX-rect.left,y:e.clientY-rect.top,r:0,a:1});});
    start();
  }

  var hero=d.querySelector('.shell>header');
  if(hero){
    Circuit(hero,{click:true,density:body.classList.contains('page-home')?1:.8});
    var hud=el('div','vx-hud',{'aria-hidden':'true'});hud.innerHTML='<i></i><i></i><i></i><i></i>';hero.appendChild(hud);
    if(body.classList.contains('page-home'))hero.appendChild(el('span','vx-cue',{'aria-hidden':'true'}));
  }
  var cta=d.querySelector('section.cta');
  if(cta)Circuit(cta,{density:.55,cell:32,click:true});

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
  /* headings switch on */
  kinetic.forEach(function(h){h.classList.add('vx-k');});
  if(hero){var hh=hero.querySelector('h1');if(hh){hh.style.setProperty('--d','250ms');setTimeout(function(){hh.classList.add('vx-on');},reduce?0:(d.querySelector('.vx-pre')?1500:150));}}
  onView(kinetic.filter(function(h){return !h.closest('header');}),function(h){h.classList.add('vx-on');});
  /* light rules under section headings */
  $$('.home-section>h2,.glance-head h2,.world>h2,.shell>section>h2').forEach(function(h){
    if(h.closest('header'))return;var r=el('span','vx-rule',{'aria-hidden':'true'});
    if(getComputedStyle(h).textAlign!=='center'){r.style.marginLeft='0';r.style.transformOrigin='left';}
    h.insertAdjacentElement('afterend',r);onView([r],function(x){x.classList.add('vx-on');});
  });
  /* blocks rise in, staggered per group */
  var blocks=$$('.shell>header .intro,.shell>header .hero-actions,.vmx-mission,.vmx-pt,.home-section>p,.glance-head>p,.explore>a,.gp,.world>p,.cta-text>p,.cta-eyebrow,.cta-brand,.cta .cta-button,.card,.ch-card,.ec-step,.rm-stage,.key-note,.cred,.pillar,.contact-form,.contact-side,.stages .stage,.ec-video-pair>*,.ec-par,.sx');
  blocks.forEach(function(b){
    if(b.closest('.unified-bar,.panel-navigation,.tour-dock'))return;
    var sib=b.parentElement?[].indexOf.call(b.parentElement.children,b):0;
    var base=b.closest('header')?600:0;
    b.style.setProperty('--d',(base/1000+Math.min(sib,6)*.1)+'s');b.classList.add('vx-rv');
  });
  var heroBlocks=blocks.filter(function(b){return b.closest('header');});
  setTimeout(function(){heroBlocks.forEach(function(b){b.classList.add('vx-on');settle(b);});},reduce?0:(d.querySelector('.vx-pre')?1600:250));
  function settle(b){var dl=parseFloat(b.style.getPropertyValue('--d'))||0;setTimeout(function(){b.classList.remove('vx-rv','vx-on');},1300+dl*1000);}
  onView(blocks.filter(function(b){return !b.closest('header');}),function(b){b.classList.add('vx-on');settle(b);});
  /* images open like an aperture */
  var clips=$$('.split img,.hy-img img,.ap-img img,.kn-img img,.ec-split img,.ec-video-pair img');
  if(!reduce){clips.forEach(function(i){i.classList.add('vx-clip');});onView(clips,function(i){i.classList.add('vx-on');});}

  /* ---------- vision statement fills with light while scrolling ---------- */
  var vision=d.querySelector('.vmx-vision');
  if(vision&&!reduce){
    vision.classList.add('vx-fill');
    $$('.l-en,.l-de',vision).forEach(function(lang){
      var idx=0;(function walk(n){[].slice.call(n.childNodes).forEach(function(c){
        if(c.nodeType===3){var frag=d.createDocumentFragment();c.nodeValue.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){frag.appendChild(d.createTextNode(p));return;}var s=el('span','vx-fw');s.textContent=p;frag.appendChild(s);});c.parentNode.replaceChild(frag,c);}
        else if(c.nodeType===1)walk(c);});})(lang);
    });
    var vt=false;function fill(){if(vt)return;vt=true;requestAnimationFrame(function(){vt=false;
      var r=vision.getBoundingClientRect(),vh=W.innerHeight,p=(vh*.82-r.top)/(r.height+vh*.42);p=Math.max(0,Math.min(1,p));
      $$('.l-en,.l-de',vision).forEach(function(lang){var ws=lang.querySelectorAll('.vx-fw'),n=Math.round(p*ws.length);for(var i=0;i<ws.length;i++)ws[i].classList.toggle('lit',i<n);});
    });}
    W.addEventListener('scroll',fill,{passive:true});W.addEventListener('resize',fill);fill();
    new MutationObserver(fill).observe(root,{attributes:true,attributeFilter:['data-lang']});
  }

  /* ---------- cards: flashlight + border arc that points at the light ----
     (after research: no tilt/wobble, an arc of light on the edge instead) */
  var tilts=$$('.explore>a,.gp,.ch-card,.rm-stage,.key-note,.card:not(.contact-form):not(.contact-side)');
  tilts.forEach(function(c){
    c.classList.add('vx-tilt');if(getComputedStyle(c).position==='static')c.style.position='relative';
    c.appendChild(el('span','vx-glare',{'aria-hidden':'true'}));c.appendChild(el('span','vx-glow',{'aria-hidden':'true'}));
    c.appendChild(ticks());
  });
  if(fine&&!reduce){
    /* proximity: the arc wakes up as the light approaches, before the hover */
    var gt=false;
    W.addEventListener('pointermove',function(){if(gt)return;gt=true;requestAnimationFrame(function(){gt=false;
      tilts.forEach(function(c){
        var r=c.getBoundingClientRect();if(r.bottom<-80||r.top>W.innerHeight+80)return;
        var px=cx-(r.left+r.width/2),py=cy-(r.top+r.height/2),near=cx>r.left-80&&cx<r.right+80&&cy>r.top-80&&cy<r.bottom+80;
        c.classList.toggle('vx-near',near);if(!near)return;
        c.style.setProperty('--ga',(Math.atan2(py,px)*180/Math.PI+90).toFixed(1)+'deg');
        c.style.setProperty('--mx',((cx-r.left)/r.width*100).toFixed(1)+'%');c.style.setProperty('--my',((cy-r.top)/r.height*100).toFixed(1)+'%');
      });});},{passive:true});
  }
  function ticks(){var t=el('span','vx-ticks',{'aria-hidden':'true'});for(var i=0;i<4;i++)t.appendChild(el('i'));return t;}
  /* mono index on the explore cards (numbers only) */
  var ex=$$('.explore>a');ex.forEach(function(a,i){var n=el('span','vx-ix',{'aria-hidden':'true'});n.textContent=('0'+(i+1)).slice(-2)+' / '+('0'+ex.length).slice(-2);a.appendChild(n);});
  /* Hybrid AI: video and image framed like monitors */
  $$('.ec-video-pair>*').forEach(function(m){if(getComputedStyle(m).position==='static')m.style.position='relative';m.appendChild(ticks());});

  /* ---------- magnetic buttons ------------------------------------------- */
  if(fine&&!reduce)$$('.shell>header .nav-bezel,.cta .nav-bezel,.sn-cta').forEach(function(b){
    b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;b.style.transform='translate('+(x*.22).toFixed(1)+'px,'+(y*.3).toFixed(1)+'px)';});
    b.addEventListener('pointerleave',function(){b.style.transform='';});
  });

  /* ---------- explore image parallax ------------------------------------- */
  var pimgs=$$('.explore>a>img');
  if(pimgs.length&&!reduce){var pt=false;function par(){if(pt)return;pt=true;requestAnimationFrame(function(){pt=false;var vh=W.innerHeight;pimgs.forEach(function(i){var r=i.parentElement.getBoundingClientRect();var k=((r.top+r.height/2)-vh/2)/vh;i.style.setProperty('--py',(k*-28).toFixed(1)+'px');});});}
    W.addEventListener('scroll',par,{passive:true});par();}

  /* ---------- applications: pinned horizontal journey (home) ------------- */
  var fields=d.querySelector('.world .fields.five');
  if(fields){
    var tiles=$$('.field-tile',fields);
    tiles.forEach(function(t,i){var n=el('span','vx-n',{'aria-hidden':'true'});n.textContent=('0'+(i+1)).slice(-2)+' / '+('0'+tiles.length).slice(-2);t.appendChild(n);});
    var hz=el('div','vx-hz'),st=el('div','vx-hz-sticky'),hb=el('div','vx-hz-bar',{'aria-hidden':'true'});
    fields.parentNode.insertBefore(hz,fields);hz.appendChild(st);st.appendChild(fields);st.appendChild(hb);
    var span=0;
    function measure(){
      if(W.matchMedia('(max-width:860px)').matches||reduce){hz.style.height='';fields.style.setProperty('--tx','0px');span=0;return;}
      span=Math.max(0,fields.scrollWidth-W.innerWidth);hz.style.height=(st.offsetHeight+span)+'px';hz_();
    }
    var ht=false;function hz_(){if(ht)return;ht=true;requestAnimationFrame(function(){ht=false;if(!span)return;
      var r=hz.getBoundingClientRect(),top=parseFloat(getComputedStyle(st).top)||0,p=Math.max(0,Math.min(1,(top-r.top)/span));
      fields.style.setProperty('--tx',(-p*span).toFixed(1)+'px');hb.style.setProperty('--hp',p.toFixed(3));
      tiles.forEach(function(t){var tr=t.getBoundingClientRect(),k=(tr.left+tr.width/2-W.innerWidth/2)/W.innerWidth;var im=t.querySelector('img');if(im)im.style.setProperty('--ix',(k*-60).toFixed(1)+'px');});
    });}
    W.addEventListener('scroll',hz_,{passive:true});W.addEventListener('resize',measure);
    if(d.readyState==='complete')measure();else W.addEventListener('load',measure);measure();
  }

  /* ---------- closing CTA: a spark travels around the box ---------------- */
  if(cta)cta.appendChild(el('span','vx-beam vx-beam-on',{'aria-hidden':'true'}));

  /* ---------- giant wordmark over a flickering square grid --------------- */
  var foot=d.querySelector('.ai-note')||d.querySelector('.legal');
  if(foot){
    var g=el('div','vx-giant',{'aria-hidden':'true'});var im=el('img',null,{src:'assets/img/logo-wordmark.png',alt:'',loading:'lazy'});
    var fc=el('canvas','vx-flicker');g.appendChild(fc);g.appendChild(im);foot.parentNode.insertBefore(g,foot.nextSibling);
    (function(){
      var c2=fc.getContext('2d'),S=4,G=6,cols=0,rows=0,op=null,dpr=Math.min(W.devicePixelRatio||1,1.5),vis=false,lastF=0;
      function size(){var r=g.getBoundingClientRect();fc.width=Math.round(r.width*dpr);fc.height=Math.round(r.height*dpr);cols=Math.ceil(r.width/(S+G));rows=Math.ceil(r.height/(S+G));op=new Float32Array(cols*rows);for(var i=0;i<op.length;i++)op[i]=Math.random()*.5;}
      function draw(){c2.setTransform(dpr,0,0,dpr,0,0);c2.clearRect(0,0,fc.width,fc.height);for(var y=0;y<rows;y++)for(var x=0;x<cols;x++){var o=op[y*cols+x];c2.fillStyle='rgba(74,211,246,'+o.toFixed(3)+')';c2.fillRect(x*(S+G),y*(S+G),S,S);}}
      function tick(t){if(!vis||d.hidden)return;requestAnimationFrame(tick);if(t-lastF<42)return;lastF=t;for(var i=0;i<op.length;i++)if(Math.random()<.035)op[i]=Math.random()*.5;draw();}
      size();draw();
      if(!reduce&&IO)new IntersectionObserver(function(es){vis=es[0].isIntersecting;if(vis)requestAnimationFrame(tick);}).observe(g);
      W.addEventListener('resize',function(){size();draw();});
    })();
  }

  W.addEventListener('beforeprint',function(){$$('.vx-rv,.vx-k,.vx-clip,.vx-rule').forEach(function(e){e.classList.add('vx-on');});});
})();
