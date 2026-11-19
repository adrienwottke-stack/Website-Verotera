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
