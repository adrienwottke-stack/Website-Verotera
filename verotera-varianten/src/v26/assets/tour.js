/* VEROTERA site: guided play, topic switching and deep links.
   Requires on the page: $, s (state with .stage), render(), go(i,fromTour), tourScripts, tourAudio, TOUR_UNIT, SLUGS. */
const SCROLL=document.body.classList.contains('scroll-mode');
let spyHold=0,spyTick=false;
let tourActive=false,tourPaused=false,tourToken=0,tourTimer=null,tourSent=0,tourAudioEl=null;
const tourEsc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tourHasAudio=['en','de'].some(l=>(tourAudio[l]||[]).some(Boolean));
function tourSplit(t){return t.split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ])/);}
function tourLang(){return $('tourlang').value;}
const TL=(en,de)=>tourLang()==='de'?de:en;
const TMSG={'Guided play stopped':'Geführte Tour beendet','Guided play complete':'Geführte Tour abgeschlossen','Manual navigation · narration stopped':'Manuelle Navigation · Tour beendet'};
function tourIdle(){$('tourstate').textContent=TL('Press Guided play for a short walkthrough of this page.','Starten Sie die geführte Tour für einen kurzen Rundgang durch diese Seite.');}
function tourSentences(){return tourSplit(tourScripts[tourLang()][s.stage]);}
function tourCaption(){const ss=tourSentences();$('tourtext').innerHTML=ss.map((x,k)=>'<span class="sent'+(tourActive?(k<tourSent?' done':(k===tourSent?' on':'')):'')+'">'+tourEsc(x)+'</span>').join(' ')+(tourActive&&tourSent>=ss.length&&s.stage<4?'<div class="tour-done"><strong>'+(tourLang()==='de'?(TOUR_UNIT==='TOPIC'?'Thema abgeschlossen':TOUR_UNIT==='PHASE'?'Phase abgeschlossen':'Stufe abgeschlossen'):(TOUR_UNIT==='TOPIC'?'Topic complete':TOUR_UNIT==='PHASE'?'Phase complete':'Stage complete'))+'</strong><span>'+(tourLang()==='de'?'Scrollen Sie durch die Seite und klicken Sie dann auf Weiter →':'Scroll down to explore this '+(TOUR_UNIT==='TOPIC'?'topic':TOUR_UNIT==='PHASE'?'phase':'stage')+', then press Next →')+'</span></div>':'');}
function tourDisplay(){const lang=tourLang();$('tourcaption').querySelector('strong').textContent=lang==='de'?'GEFÜHRTE TOUR · '+(TOUR_UNIT==='TOPIC'?'THEMA':TOUR_UNIT==='PHASE'?'PHASE':'STUFE')+' '+(s.stage+1)+' VON 5':'GUIDED TOUR · '+TOUR_UNIT+' '+(s.stage+1)+' OF 5';tourCaption();document.body.classList.toggle('tour-on',tourActive);$('tourpause').disabled=!tourActive;document.querySelectorAll('.tour-only').forEach(el=>el.classList.toggle('hidden',!tourActive));document.querySelectorAll('.mode-ctl').forEach(el=>el.classList.toggle('hidden',!tourHasAudio));$('tourpause').textContent=tourPaused?TL('▶ Resume','▶ Fortsetzen'):'⏸ Pause';$('play').textContent=tourActive?TL('■ Stop guided play','■ Tour beenden'):TL('▶ Guided play','▶ Geführte Tour');$('play').classList.toggle('primary',!tourActive);$('play').classList.toggle('secondary',tourActive);}
function tourClear(){tourToken++;if(tourTimer){clearTimeout(tourTimer);tourTimer=null;}if(tourAudioEl){tourAudioEl.pause();tourAudioEl.ontimeupdate=null;tourAudioEl.onended=null;tourAudioEl=null;}}
function tourStop(message='Guided play stopped'){tourActive=false;tourPaused=false;tourClear();tourSent=0;$('tourstate').textContent=tourLang()==='de'&&TMSG[message]?TMSG[message]:message;tourDisplay();}
function tourStageDone(){if(tourTimer){clearTimeout(tourTimer);tourTimer=null;}if(s.stage===4){tourStop('Guided play complete');return;}tourSent=tourSentences().length;tourDisplay();$('tourstate').textContent=TL((TOUR_UNIT==='TOPIC'?'Topic':TOUR_UNIT==='PHASE'?'Phase':'Stage')+' complete · scroll to read the page, then Next → continues',(TOUR_UNIT==='TOPIC'?'Thema':TOUR_UNIT==='PHASE'?'Phase':'Stufe')+' abgeschlossen · Seite lesen, dann geht es mit Weiter → weiter');}
function tourNextStage(){if(s.stage===4){tourStop('Guided play complete');return;}go(s.stage+1,true);tourRun();}
function tourShow(){const ss=tourSentences();tourDisplay();$('tourstate').textContent=TL('Sentence '+(tourSent+1)+' of '+ss.length+' · '+(tourUsesAudio()?'listen':'read'),'Satz '+(tourSent+1)+' von '+ss.length+' · '+(tourUsesAudio()?'hören':'lesen'));}
function tourUsesAudio(){return tourHasAudio&&$('tourmode').value==='listen'&&!!(tourAudio[tourLang()]||[])[s.stage];}
function tourStepRead(){const token=tourToken;const ss=tourSentences();tourShow();const words=ss[tourSent].split(/\s+/).length;tourTimer=setTimeout(()=>{if(token!==tourToken||!tourActive||tourPaused)return;if(tourSent<ss.length-1){tourSent++;tourStepRead();}else{tourStageDone();}},Math.max(2600,words*380));}
function tourBounds(ss){const tot=ss.reduce((a,x)=>a+x.length,0);let acc=0;return ss.map(x=>{const b=acc/tot;acc+=x.length;return b;});}
function tourStepListen(){const token=tourToken;const ss=tourSentences();const b=tourBounds(ss);const a=new Audio(tourAudio[tourLang()][s.stage]);tourAudioEl=a;tourShow();a.ontimeupdate=()=>{if(token!==tourToken||!a.duration)return;const f=a.currentTime/a.duration;let k=0;b.forEach((x,i)=>{if(f>=x)k=i;});if(k!==tourSent){tourSent=k;tourShow();}};a.onended=()=>{if(token===tourToken&&tourActive&&!tourPaused)tourStageDone();};a.play().catch(()=>{$('tourstate').textContent=TL('Audio blocked by the browser · reading mode','Audio vom Browser blockiert · Lesemodus');tourAudioEl=null;tourStepRead();});}
function tourRun(){if(!tourActive)return;tourClear();tourSent=0;if(typeof tourOnStage==='function')tourOnStage(s.stage);if(tourUsesAudio())tourStepListen();else tourStepRead();}
function tourStart(){tourActive=true;tourPaused=false;go(0,true);tourRun();}
function tourJump(i){const target=Math.max(0,Math.min(4,i));if(tourActive){tourPaused=false;go(target,true);tourRun();}else{go(target);}}
function tourSkip(){if(!tourActive)return;const ss=tourSentences();if(tourAudioEl&&tourAudioEl.duration){const b=tourBounds(ss);if(tourSent<ss.length-1){tourAudioEl.currentTime=b[tourSent+1]*tourAudioEl.duration+0.05;}else{tourAudioEl.pause();tourStageDone();}return;}tourPaused=false;if(tourTimer){clearTimeout(tourTimer);tourTimer=null;}tourToken++;if(tourSent<ss.length){tourSent++;}if(tourSent<ss.length)tourStepRead();else tourStageDone();}
$('prev').onclick=()=>tourJump(s.stage-1);$('next').onclick=()=>tourJump(s.stage+1);
$('play').onclick=()=>{if(tourActive)tourStop();else tourStart();};
$('tourskip').onclick=tourSkip;
$('tourpause').onclick=()=>{if(!tourActive)return;if(tourPaused){tourPaused=false;if(tourAudioEl){tourAudioEl.play();}else{tourToken++;tourStepRead();}$('tourstate').textContent=TL('Guided play resumed','Geführte Tour fortgesetzt');}else{tourPaused=true;if(tourTimer){clearTimeout(tourTimer);tourTimer=null;}if(tourAudioEl)tourAudioEl.pause();$('tourstate').textContent=TL('Guided play paused','Geführte Tour pausiert');}tourDisplay();};
$('tourlang').addEventListener('change',()=>{render();if(tourActive){tourPaused=false;tourRun();}else{tourDisplay();tourIdle();}});
$('tourmode').onchange=()=>{if(tourActive){tourPaused=false;tourRun();}};



/* Topic sections: content is in the HTML; JS shows the active one and re-renders it for interaction. */
function showTopic(html){const secs=document.querySelectorAll('#content .topic');secs.forEach((el,i)=>el.classList.toggle('active',i===s.stage));const cur=secs[s.stage];if(cur)cur.innerHTML=html;}
/* Deep links: each topic has its own #name; browser Back moves between topics. */
let hashSelf=false;
function syncHash(){const h='#'+SLUGS[s.stage];if(location.hash!==h){hashSelf=true;location.hash=h;}}
window.addEventListener('hashchange',()=>{if(hashSelf){hashSelf=false;return;}const i=SLUGS.indexOf(location.hash.slice(1));if(i>=0&&i!==s.stage)go(i);});
(function(){const i=SLUGS.indexOf(location.hash.slice(1));if(i>=0)s.stage=i;render();tourDisplay();tourIdle();})();

/* Scroll mode (body.scroll-mode, used on About and Solutions): all topics stay visible one below
   the other. The tiles and the compact topic bar jump to a topic; the active tile follows the scroll position.
   Pages in scroll mode call renderTopics(fns, extra) instead of showTopic() and define topicNames() and progressUpdate(). */
function renderTopics(fns,extra){const secs=document.querySelectorAll('#content .topic');if(!SCROLL){showTopic(fns[s.stage]()+extra(s.stage));return;}const cur=s.stage;secs.forEach((el,i)=>{s.stage=i;el.innerHTML=fns[i]()+extra(i);});s.stage=cur;buildTopicBar();}
function navHeight(){const n=document.querySelector('.site-nav');return n?n.getBoundingClientRect().height:0;}
function topicOffset(){const b=document.getElementById('topicbar');return navHeight()+(b?b.getBoundingClientRect().height:0)+14;}
function scrollToTopic(i,smooth=true){const el=document.querySelectorAll('#content .topic')[i];if(!el)return;spyHold=Date.now()+(smooth?1100:200);const h=el.querySelector('.stage-heading')||el;const y=h.getBoundingClientRect().top+window.scrollY-topicOffset()-26;window.scrollTo({top:Math.max(0,y),behavior:smooth?'smooth':'auto'});}
function stageChrome(){document.querySelectorAll('#nav .stage').forEach((b,i)=>{b.classList.toggle('active',i===s.stage);b.setAttribute('aria-current',i===s.stage?'true':'false');});document.querySelectorAll('#topicbar a').forEach((a,i)=>a.classList.toggle('on',i===s.stage));const tbi=document.querySelector('#topicbar .tb-inner'),tba=document.querySelector('#topicbar a.on');if(tbi&&tba)tbi.scrollTo({left:Math.max(0,tba.offsetLeft-12),behavior:'smooth'});if(typeof progressUpdate==='function')progressUpdate();}
function buildTopicBar(){if(!SCROLL||typeof topicNames!=='function')return;let b=document.getElementById('topicbar');if(!b){b=document.createElement('nav');b.id='topicbar';b.className='topicbar no-print';document.body.appendChild(b);}b.setAttribute('aria-label',tourLang()==='de'?'Themen dieser Seite':'Topics on this page');b.innerHTML='<div class="tb-inner">'+topicNames().map((n,i)=>'<a href="#'+SLUGS[i]+'" data-i="'+i+'" class="'+(i===s.stage?'on':'')+'"><span class="tb-num">0'+(i+1)+'</span><span class="tb-name">'+n+'</span></a>').join('')+'</div>';b.querySelectorAll('a[data-i]').forEach(a=>a.onclick=e=>{e.preventDefault();go(+a.dataset.i);});const on=b.querySelector('a.on');if(on)b.querySelector('.tb-inner').scrollLeft=Math.max(0,on.offsetLeft-12);}
function spy(){spyTick=false;const top=navHeight();const bar=document.getElementById('topicbar');const tiles=document.getElementById('nav');if(bar&&tiles){bar.style.top=top+'px';bar.classList.toggle('show',tiles.getBoundingClientRect().bottom<top+4);}if(tourActive||Date.now()<spyHold)return;const secs=[...document.querySelectorAll('#content .topic')];const line=top+(window.innerHeight-top)*0.33;let k=0;secs.forEach((el,i)=>{if(el.getBoundingClientRect().top<=line)k=i;});if(k!==s.stage){s.stage=k;stageChrome();history.replaceState(null,'','#'+SLUGS[k]);}}
if(SCROLL){
 /* tour controls and caption form one dock that floats at the bottom while the tour runs */
 if(!document.querySelector('.tour-dock')){const bar=document.querySelector('.unified-bar');const cap=$('tourcaption');if(bar&&cap){const slot=document.createElement('div');slot.className='tour-dock-slot';const dock=document.createElement('div');dock.className='tour-dock';bar.parentNode.insertBefore(slot,bar);slot.appendChild(dock);dock.appendChild(cap);dock.appendChild(bar);}}
 const _display=tourDisplay;tourDisplay=function(){const slot=document.querySelector('.tour-dock-slot');if(slot&&tourActive&&!document.body.classList.contains('tour-on'))slot.style.minHeight=slot.getBoundingClientRect().height+'px';if(slot&&!tourActive)slot.style.minHeight='';_display();};
 buildTopicBar();
 window.addEventListener('scroll',()=>{if(!spyTick){spyTick=true;requestAnimationFrame(spy);}},{passive:true});
 window.addEventListener('resize',spy);
 $('tourlang').addEventListener('change',buildTopicBar);
 const i0=SLUGS.indexOf(location.hash.slice(1));
 if(i0>0){scrollToTopic(i0,false);window.addEventListener('load',()=>scrollToTopic(i0,false));}
 spy();
}
