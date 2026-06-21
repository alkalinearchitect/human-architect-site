/**
 * Matrix Film Intro — Human Architect
 * Authentic Matrix film opening: green code rain + terminal boot sequence.
 * Self-contained, no dependencies. Inline in <head>, runs synchronously.
 * Shows once per session.
 */
;(function(){
  'use strict';

  try{if(sessionStorage.getItem('matrixintro-done'))return}catch(e){}

  // ── Failsafe: ALWAYS reveal page after 12s max ──
  var failsafeTimer=setTimeout(function(){
    var b=document.querySelector('style');
    if(b&&b.textContent&&b.textContent.indexOf('visibility:hidden')!==-1&&b.parentNode)b.remove();
    var ov2=document.getElementById('matrix-intro-overlay');
    if(ov2&&ov2.parentNode)ov2.remove();
    document.documentElement.style.visibility='';
    if(document.body){document.body.style.visibility='';document.body.style.overflow=''}
    try{sessionStorage.setItem('matrixintro-done','1')}catch(e){}
  },12000);

  // ── Hide the page instantly ──
  var blocker=document.createElement('style');
  blocker.textContent='html,body{visibility:hidden!important;overflow:hidden!important}';
  document.head.appendChild(blocker);

  // ── Full-screen canvas overlay ──
  var ov=document.createElement('div');
  ov.id='matrix-intro-overlay';
  ov.style.cssText='position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:2147483647;background:#000;overflow:hidden;transition:opacity 2.5s ease-out .3s;font-family:Courier New,Courier,monospace;text-align:center';

  var cv=document.createElement('canvas');
  cv.style.cssText='position:absolute;left:0;top:0;width:100%;height:100%';
  ov.appendChild(cv);

  // ── Terminal text overlay ──
  var term=document.createElement('div');
  term.style.cssText='position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;text-align:left;width:90%;max-width:700px';
  ov.appendChild(term);

  // Append to document (works before body exists)
  (function(){try{document.documentElement.appendChild(ov)}catch(e){}})();

  // ── Rain ──
  var W,H,ctx,cols=[],FONT=14;
  function init(){
    W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;
    var n=Math.ceil(W/(FONT*1.7))+2;cols=[];
    for(var i=0;i<n;i++){
      cols.push({
        x:i*FONT*1.7,
        y:Math.random()*(H+400)-400,
        speed:2+Math.random()*6,
        chars:[],
        len:8+Math.floor(Math.random()*18)
      });
      for(var j=0;j<cols[i].len;j++){
        cols[i].chars.push(rchar());
      }
    }
  }
  function rchar(){return String.fromCharCode(0x30A0+Math.floor(Math.random()*96))}
  function draw(){
    ctx.fillStyle='rgba(0,0,0,0.045)';
    ctx.fillRect(0,0,W,H);
    ctx.font=FONT+'px monospace';
    for(var i=0;i<cols.length;i++){
      var c=cols[i];
      var headChar=rchar();
      c.chars.splice(0,0,headChar);
      if(c.chars.length>c.len+4)c.chars.length=c.len+4;
      for(var j=0;j<c.chars.length;j++){
        var yy=c.y-j*(FONT*1.15);
        if(yy<-30||yy>H+30)continue;
        if(j===0){
          ctx.fillStyle='#ffffff';
        }else if(j<3){
          ctx.fillStyle='#b2f7b2';
        }else if(j<7){
          ctx.fillStyle='#33ff33';
        }else{
          ctx.fillStyle='rgba(0,'+Math.round(180-j*8)+',0,'+Math.max(0,.8-j*.04)+')';
        }
        ctx.fillText(c.chars[j],c.x,yy);
      }
      c.y+=c.speed;
      if(c.y-(c.chars.length*FONT*1.15)>H+50){
        c.y=-Math.random()*800-100;
        c.speed=2+Math.random()*6;
        c.len=8+Math.floor(Math.random()*18);
        c.chars=[];
        for(var k=0;k<c.len;k++)c.chars.push(rchar());
      }
    }
    raf=requestAnimationFrame(draw);
  }

  window.addEventListener('resize',function(){
    W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;
  });

  var raf;
  ctx=cv.getContext('2d');
  init();
  draw();

  // ── Terminal boot text (Matrix film style) ──
  var LINES=[
    {text:'Wake up...',dur:1200,delay:400,style:'#ff4444'},
    {text:'The Matrix has you.',dur:1400,delay:800,style:'#00ff41'},
    {text:'Follow the white rabbit.',dur:1000,delay:600,style:'#00cc33'},
    {text:'Knock, knock.',dur:600,delay:400,style:'#009922'},
  ];

  var timers=[];
  var lineIdx=0;

  function typeLine(){
    if(lineIdx>=LINES.length){doneTyping();return}
    var cfg=LINES[lineIdx];
    var el=document.createElement('div');
    el.style.cssText='color:'+cfg.style+';font-size:'+(lineIdx===0?'28px':'16px')+';line-height:1.6;margin-bottom:12px;opacity:0;transition:opacity .1s;text-shadow:0 0 8px '+cfg.style;
    term.appendChild(el);
    timers.push(setTimeout(function(){el.style.opacity='1'},50));

    var txt=cfg.text,ci=0;
    timers.push(setTimeout(function(){
      (function tick(){
        if(ci<txt.length){
          el.textContent=txt.substring(0,++ci);
          var blink=document.createElement('span');
          blink.style.cssText='color:'+cfg.style+';text-shadow:0 0 8px '+cfg.style;
          blink.textContent='█';
          el.appendChild(blink);
          timers.push(setTimeout(function(){if(blink.parentNode)blink.remove()},55));
          timers.push(setTimeout(tick,40+Math.random()*20));
        }else{
          var lb=document.createElement('span');
          lb.style.cssText='color:'+cfg.style+';animation:mcb 1s step-end infinite;text-shadow:0 0 8px '+cfg.style;
          lb.textContent='█';
          el.appendChild(lb);
          timers.push(setTimeout(function(){if(lb.parentNode)lb.remove()},600));
          timers.push(setTimeout(function(){lineIdx++;typeLine()},cfg.delay));
        }
      })();
    },cfg.dur));
  }

  function doneTyping(){
    // Flash and transition
    timers.push(setTimeout(function(){
      var flash=document.createElement('div');
      flash.style.cssText='position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:2147483648;background:#00ff41;opacity:0;transition:opacity .15s';
      document.documentElement.appendChild(flash);
      timers.push(setTimeout(function(){flash.style.opacity='0.08'},50));
      timers.push(setTimeout(function(){if(flash.parentNode)flash.remove()},300));
    },400));

    // Fade out overlay, reveal site
    timers.push(setTimeout(function(){
      ov.style.opacity='0';
      timers.push(setTimeout(cleanup,2800));
    },1800));
  }

  function cleanup(){
    clearTimeout(failsafeTimer);
    try{sessionStorage.setItem('matrixintro-done','1')}catch(e){}
    if(raf)cancelAnimationFrame(raf);
    timers.forEach(function(t){clearTimeout(t)});
    if(blocker.parentNode)blocker.remove();
    if(ov.parentNode)ov.remove();
    document.documentElement.style.visibility='';
    document.body.style.visibility='';
    document.body.style.overflow='';
  }

  // Inject cursor blink keyframe
  var kf=document.createElement('style');
  kf.textContent='@keyframes mcb{0%,100%{opacity:1}50%{opacity:0}}';
  document.head.appendChild(kf);

  // Move overlay to body once it exists
  if(!document.body){
    var obs=new MutationObserver(function(){
      if(document.body){obs.disconnect();document.body.appendChild(ov)}
    });
    obs.observe(document.documentElement,{childList:true});
  }else{
    document.body.appendChild(ov);
  }

  // Start typing after brief rain preview
  timers.push(setTimeout(typeLine,800));

})();
