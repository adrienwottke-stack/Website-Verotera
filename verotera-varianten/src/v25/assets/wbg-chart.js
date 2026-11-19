/* VEROTERA: Si, SiC and GaN by power and switching frequency (typical ranges, simplified).
   Renders an inline SVG into every .wbg-chart element; re-renders on resize and language change.
   Regions are round shapes in log-log space; applications are round icon markers.
   Phones (< 640 px): numbered markers, names in a list below the chart. */
(function(){
var LANG=function(){var l=document.documentElement.getAttribute('data-lang');return l==='de'?'de':'en'};
var T=function(en,de){return LANG()==='de'?de:en};
// regions: ellipse centre and half axes in decades (log10 Hz, log10 W); Si is a quarter ellipse from the lower left corner
var REG=[
 {k:'si',name:'Si',sub:['IGBT up to 6.5 kV · MOSFET','IGBT bis 6,5 kV · MOSFET'],cx:2.85,cy:1.85,rx:2.9,ry:5.4,lab:[3.08,2.62]},
 {k:'sic',name:'SiC',sub:['650 to 3300 V','650 bis 3300 V'],cx:4.75,cy:5.15,rx:1.05,ry:1.8,lab:[4.98,6.42]},
 {k:'gan',name:'GaN',sub:['up to 650 V','bis 650 V'],cx:5.55,cy:3.6,rx:1.1,ry:1.05,lab:[6.05,3.0]}];
var IC={
 wind:'<path d="M12 12v9M9 21h6"/><circle cx="12" cy="10.5" r="1.4"/><path d="M12 9V3.2M10.8 11.2l-5 2.9M13.2 11.2l5 2.9"/>',
 h2:'<path d="M12 3.5c3.2 4.2 5.5 7.4 5.5 10.2a5.5 5.5 0 0 1-11 0c0-2.8 2.3-6 5.5-10.2z"/><path d="M12.6 10.5l-2 3.2h2.8l-2 3.2"/>',
 solar:'<path d="M3.5 15h17l-2-8.5h-13z"/><path d="M4.5 11h15M9.3 6.5L8.5 15M14.7 6.5l.8 8.5M12 15v4M8.5 20h7"/>',
 car:'<path d="M4 16v-3.5L6.2 7h11.6L20 12.5V16z"/><circle cx="7.5" cy="16.5" r="1.6"/><circle cx="16.5" cy="16.5" r="1.6"/><path d="M4.5 12.5h15"/>',
 battery:'<rect x="3.5" y="7" width="15" height="10" rx="1.5"/><path d="M18.5 10.2v3.6h2v-3.6z"/><path d="M11.5 9l-2.2 3.2h3.4L10.5 15"/>',
 motor:'<circle cx="12" cy="12" r="3.2"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6 6l2.1 2.1M15.9 15.9L18 18M6 18l2.1-2.1M15.9 8.1L18 6"/>',
 plug:'<path d="M9 3.5v4M15 3.5v4M7 7.5h10v3.5a5 5 0 0 1-10 0z"/><path d="M12 16v4.5"/>',
 server:'<rect x="5" y="3.5" width="14" height="5.5" rx="1"/><rect x="5" y="10" width="14" height="5.5" rx="1"/><path d="M8 6.2h1M8 12.7h1M8 19.5h8M12 15.5v4"/>',
 robot:'<path d="M4 20.5h8M8 20.5v-2.5"/><circle cx="8" cy="16" r="2"/><path d="M9.4 14.6l3.8-4.8"/><circle cx="14.2" cy="8.2" r="1.8"/><path d="M15.8 7.4l3.7-1.9M15.8 9l3 2"/>'};
// [label en, label de, Pmin, Pmax (W), fmin, fmax (Hz), technology, icon, label side]
var APP=[
 ['Electrolyser power supply','Elektrolyse-Stromversorgung',2e6,1e7,1e3,3e3,'Si, SiC','h2','r'],
 ['Wind turbine converters','Umrichter für Windkraft',1e6,5e6,2e3,8e3,'Si','wind','r'],
 ['Central PV inverters','Zentrale PV-Wechselrichter',2e5,2e6,4e3,1.6e4,'Si, SiC','solar','r'],
 ['Traction inverter','Traktionsinverter',1e5,6e5,1e4,2e4,'SiC, Si','car','r'],
 ['String PV and storage inverters','String-PV- und Speicherwechselrichter',1e4,1.5e5,1.6e4,5e4,'SiC','battery','r'],
 ['Industrial drives','Industrieantriebe',1e3,3e4,8e3,2e4,'SiC, Si','motor','l'],
 ['On-board charger, DC/DC','On-Board-Charger, DC/DC',7e3,2.2e4,5e4,6e5,'SiC, GaN','plug','r'],
 ['AI data center power supply','Stromversorgung KI-Rechenzentrum',3e3,1.2e4,1e5,1e6,'GaN, SiC','server','r'],
 ['Robot and servo drives','Roboter- und Servoantriebe',2e2,1.5e3,4e4,1.5e5,'GaN','robot','l']];
function fmtW(w){return w>=1e6?(w/1e6)+' MW':w>=1e3?(w/1e3)+' kW':w+' W'}
function fmtF(f){return f>=1e6?(f/1e6)+' MHz':(f/1e3)+' kHz'}
function render(el){
 var W=Math.max(300,el.clientWidth),small=W<640;
 var H=small?Math.round(W*1.05):Math.round(Math.min(640,W*.58));
 var L=small?66:76,R=small?26:34,TOP=16,B=small?48:56,pw=W-L-R,ph=H-TOP-B,r=small?11:21;
 var X=function(f){return L+(Math.log10(f)-3)/4*pw},Y=function(p){return TOP+ph-(Math.log10(p)-2)/5*ph};
 var XL=function(d){return L+(d-3)/4*pw},YL=function(d){return TOP+ph-(d-2)/5*ph};
 var s='<svg viewBox="0 0 '+W+' '+H+'" width="'+W+'" height="'+H+'" role="img" aria-labelledby="wbgT wbgD"><title id="wbgT">'+T('Si, SiC and GaN by power and switching frequency','Si, SiC und GaN nach Leistung und Schaltfrequenz')+'</title><desc id="wbgD">'+T('Typical ranges, simplified. The same data is listed in the table below.','Typische Bereiche, vereinfacht. Dieselben Daten stehen in der Tabelle darunter.')+'</desc>';
 [1e3,1e4,1e5,1e6,1e7].forEach(function(f){var an=f===1e3?'start':f===1e7?'end':'middle';s+='<line class="g" x1="'+X(f)+'" y1="'+TOP+'" x2="'+X(f)+'" y2="'+(TOP+ph)+'"/><text class="tk" x="'+X(f)+'" y="'+(TOP+ph+20)+'" text-anchor="'+an+'">'+((small&&(f===1e4||f===1e6))?'':fmtF(f))+'</text>'});
 [1e2,1e3,1e4,1e5,1e6,1e7].forEach(function(p){s+='<line class="g" x1="'+L+'" y1="'+Y(p)+'" x2="'+(L+pw)+'" y2="'+Y(p)+'"/><text class="tk" x="'+(L-8)+'" y="'+(Y(p)+5)+'" text-anchor="end">'+fmtW(p)+'</text>'});
 s+='<text class="ax" x="'+(L+pw/2)+'" y="'+(H-8)+'" text-anchor="middle">'+T('Switching frequency','Schaltfrequenz')+'</text>';
 s+='<text class="ax" transform="translate('+(small?14:18)+' '+(TOP+ph/2)+') rotate(-90)" text-anchor="middle">'+T('Power','Leistung')+'</text>';
 s+='<clipPath id="wbgClip"><rect x="'+L+'" y="'+TOP+'" width="'+pw+'" height="'+ph+'"/></clipPath><g clip-path="url(#wbgClip)">';
 REG.forEach(function(g){s+='<ellipse class="rg rg-'+g.k+'" cx="'+XL(g.cx)+'" cy="'+YL(g.cy)+'" rx="'+(g.rx/4*pw)+'" ry="'+(g.ry/5*ph)+'"/>'});
 s+='</g>';
 REG.forEach(function(g){var x=XL(g.lab[0]),y=YL(g.lab[1]);s+='<text class="rn rn-'+g.k+'" x="'+x+'" y="'+y+'">'+g.name+'</text>'+(small?'':'<text class="rs" x="'+x+'" y="'+(y+20)+'">'+T(g.sub[0],g.sub[1])+'</text>')});
 APP.forEach(function(a,i){
  var cx=X(Math.sqrt(a[4]*a[5])),cy=Y(Math.sqrt(a[2]*a[3]));
  s+='<g class="ap" tabindex="0" role="button" aria-label="'+T(a[0],a[1])+'" data-i="'+i+'"><rect class="ar" x="'+X(a[4])+'" y="'+Y(a[3])+'" width="'+(X(a[5])-X(a[4]))+'" height="'+(Y(a[2])-Y(a[3]))+'"/><circle class="ac" cx="'+cx+'" cy="'+cy+'" r="'+r+'"/>';
  if(small)s+='<text class="an" x="'+cx+'" y="'+(cy+4.5)+'" text-anchor="middle">'+(i+1)+'</text>';
  else s+='<g class="ai" transform="translate('+(cx-12)+' '+(cy-12)+')">'+IC[a[7]]+'</g><text class="al" x="'+(a[8]==='l'?cx-r-9:cx+r+9)+'" y="'+(cy+5)+'" text-anchor="'+(a[8]==='l'?'end':'start')+'">'+T(a[0],a[1])+'</text>';
  s+='</g>'});
 s+='</svg>';
 var list=small?'<ol class="wbg-legend">'+APP.map(function(a){return '<li>'+T(a[0],a[1])+'</li>'}).join('')+'</ol>':'';
 el.innerHTML='<div class="wbg-svg">'+s+'<div class="wbg-tip" hidden></div></div>'+list;
 var tip=el.querySelector('.wbg-tip');
 [].forEach.call(el.querySelectorAll('.ap'),function(g){
  var show=function(){var a=APP[+g.getAttribute('data-i')];[].forEach.call(el.querySelectorAll('.ap'),function(o){o.classList.toggle('on',o===g)});
   tip.innerHTML='<strong>'+T(a[0],a[1])+'</strong><span>'+fmtW(a[2])+' '+T('to','bis')+' '+fmtW(a[3])+' · '+fmtF(a[4])+' '+T('to','bis')+' '+fmtF(a[5])+'</span><span>'+a[6]+'</span>';
   tip.hidden=false;var b=g.querySelector('.ac').getBBox();var x=b.x+b.width/2,y=b.y;tip.style.left=Math.min(Math.max(x-120,0),W-250)+'px';tip.style.top=Math.max(y-96,0)+'px'};
  var hide=function(){g.classList.remove('on');tip.hidden=true};
  g.addEventListener('mouseenter',show);g.addEventListener('focus',show);g.addEventListener('click',show);g.addEventListener('mouseleave',hide);g.addEventListener('blur',hide)});
 var tb=el.parentNode.querySelector('.wbg-table tbody');
 if(tb)tb.innerHTML=APP.map(function(a){return '<tr><td>'+T(a[0],a[1])+'</td><td>'+fmtW(a[2])+' '+T('to','bis')+' '+fmtW(a[3])+'</td><td>'+fmtF(a[4])+' '+T('to','bis')+' '+fmtF(a[5])+'</td><td>'+a[6]+'</td></tr>'}).join('');
}
function all(){[].forEach.call(document.querySelectorAll('.wbg-chart'),render)}
var t;window.addEventListener('resize',function(){clearTimeout(t);t=setTimeout(all,150)});
new MutationObserver(all).observe(document.documentElement,{attributes:true,attributeFilter:['data-lang']});
if(document.readyState!=='loading')all();else document.addEventListener('DOMContentLoaded',all);
window.wbgChartRender=all;
})();
