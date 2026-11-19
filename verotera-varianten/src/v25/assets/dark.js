/* VEROTERA v22dark: back-to-top button on long pages. */
(function(){var b=document.querySelector('.to-top');if(!b)return;
function label(){var de=document.documentElement.lang==='de';b.setAttribute('aria-label',de?'Nach oben':'Back to top');b.title=de?'Nach oben':'Back to top';}
function vis(){b.classList.toggle('show',window.scrollY>700);}
b.addEventListener('click',function(){var r=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;window.scrollTo({top:0,behavior:r?'auto':'smooth'});});
window.addEventListener('scroll',vis,{passive:true});vis();label();
new MutationObserver(label).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});})();
