/* VEROTERA site: language preference shared by all pages. */
(function(){var sel=document.getElementById('tourlang');var saved=null;try{saved=localStorage.getItem('vlang');}catch(e){}
if(sel&&saved&&(saved==='en'||saved==='de'))sel.value=saved;
function apply(v){document.documentElement.setAttribute('data-lang',v);document.documentElement.lang=v;try{localStorage.setItem('vlang',v);}catch(e){}}
apply(sel?sel.value:'en');if(sel)sel.addEventListener('change',function(){apply(sel.value);});})();

/* VEROTERA site: menu button on phones. */
(function(){var n=document.querySelector('.site-nav'),b=document.querySelector('.sn-menu');if(!n||!b)return;
function set(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');}
b.addEventListener('click',function(){set(!n.classList.contains('open'));});
[].forEach.call(n.querySelectorAll('.sn-links a'),function(a){a.addEventListener('click',function(){set(false);});});
document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});})();

/* VEROTERA v26: header image layer for the slow zoom (copies the header background, so page-specific images and overlays stay as defined in site.css). */
(function(){var h=document.querySelector('.shell>header');if(!h)return;var bg=document.createElement('div');bg.className='hdr-bg';bg.setAttribute('aria-hidden','true');h.insertBefore(bg,h.firstChild);
function sync(){h.classList.remove('hdr-live');var c=getComputedStyle(h);bg.style.backgroundImage=c.backgroundImage;bg.style.backgroundPosition=c.backgroundPosition;bg.style.backgroundSize=c.backgroundSize;h.classList.add('hdr-live');}
sync();var t;window.addEventListener('resize',function(){clearTimeout(t);t=setTimeout(sync,150);});})();

/* VEROTERA v26: play button over the Engineering Core video. */
(function(){[].forEach.call(document.querySelectorAll('.ew-frame'),function(f){var v=f.querySelector('video'),b=f.querySelector('.ew-play');if(!v||!b)return;
b.addEventListener('click',function(){var p=v.play();if(p&&p.catch)p.catch(function(){});});
v.addEventListener('play',function(){f.classList.add('playing');});
v.addEventListener('ended',function(){f.classList.remove('playing');});});})();
