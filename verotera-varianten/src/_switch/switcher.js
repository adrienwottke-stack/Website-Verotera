/* Review-only version switcher (V26 original / V26 design). Keeps page, language and anchor. */
(function(){
  var d=document,root=d.documentElement;
  try{if(sessionStorage.getItem('vswitch-hidden')==='1')return;}catch(e){}
  var V=[
    {id:'v26',en:'V26 · Original',de:'V26 · Original',short:'Original'},
    {id:'v26-design',en:'V26 · Design',de:'V26 · Design',short:'Design'},
    {id:'v26-showcase',en:'V26 · Showcase',de:'V26 · Showcase',short:'Showcase'}
  ];
  var m=location.pathname.match(/^(.*\/)(v26-showcase|v26-design|v26)\/(.*)$/);if(!m)return;
  var base=m[1],cur=m[2],page=m[3]||'index.html';
  var de=(root.getAttribute('data-lang')||root.lang)==='de';
  var bar=d.createElement('div');bar.className='vswitch';bar.setAttribute('role','navigation');bar.setAttribute('aria-label','Design versions');
  var html='<span class="vs-label">'+(de?'Website-Varianten':'Website variants')+'</span><div class="vs-seg">';
  V.forEach(function(v){
    html+='<a href="'+base+v.id+'/'+page+location.hash+'"'+(v.id===cur?' aria-current="true"':'')+'><span class="vs-long">'+(de?v.de:v.en)+'</span><span class="vs-short">'+v.short+'</span></a>';
  });
  html+='</div><button type="button" class="vs-x" aria-label="'+(de?'Leiste ausblenden':'Hide bar')+'">×</button>';
  bar.innerHTML=html;
  d.body.insertBefore(bar,d.body.firstChild);root.classList.add('has-vswitch');
  /* keep the hash current when the visitor jumps around */
  window.addEventListener('hashchange',function(){[].forEach.call(bar.querySelectorAll('.vs-seg a'),function(a){a.href=a.href.split('#')[0]+location.hash;});});
  bar.querySelector('.vs-x').addEventListener('click',function(){try{sessionStorage.setItem('vswitch-hidden','1');}catch(e){}bar.remove();root.classList.remove('has-vswitch');});
})();
