import fs from 'node:fs';
const pages=await (await fetch('http://127.0.0.1:9333/json/list')).json();
const ws=new WebSocket(pages[0].webSocketDebuggerUrl);
await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let id=0; const pending=new Map();
ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result)}});
const send=(method,params={})=>new Promise((resolve,reject)=>{pending.set(++id,{resolve,reject});ws.send(JSON.stringify({id,method,params}))});
const evaluate=async(expression)=>{const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw r.exceptionDetails;return r.result.value};
await send('Page.enable');
await send('Page.navigate',{url:'http://127.0.0.1:4174/'});
for(let n=0;n<80;n++){if(await evaluate('document.readyState === "complete" && !!document.querySelector(".geography-copy")'))break;await new Promise(r=>setTimeout(r,100));}
await evaluate('Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,6000))]).then(()=>true)');
for(const width of [320,390,600,768,1024,1280,1920]){
 await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<768});
 await evaluate('new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)))');
 await evaluate('window.scrollTo(0,document.querySelector(".ingredients").offsetTop)');
 await evaluate('new Promise(r=>setTimeout(r,200))');
 const state=await evaluate(`JSON.stringify({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,geographyParagraphs:[...document.querySelectorAll('.geography-copy p')].map(p=>({text:p.textContent,width:p.clientWidth,height:p.clientHeight})),gridDisplay:getComputedStyle(document.querySelector('.ingredient-grid')).display,carouselDisplay:getComputedStyle(document.querySelector('.mobile-carousel')).display,swiperReady:!!document.querySelector('.mobile-carousel .swiper-initialized'),images:[...document.querySelectorAll('img')].filter(i=>i.getBoundingClientRect().width && !i.naturalWidth).map(i=>i.src),overflow:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width && r.right>innerWidth+1 && getComputedStyle(e).position!=='absolute' && !e.closest('.swiper') && !e.closest('.advantage')}).slice(0,10).map(e=>e.className)})`);
 console.log(state);
 if([390,768,1280].includes(width)){
 await evaluate('window.scrollTo(0,0)');
 const metrics=await send('Page.getLayoutMetrics');
 const screenshot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width,height:metrics.cssContentSize.height,scale:1}});
 fs.writeFileSync(`artifacts/layout-review/home-${width}.png`,Buffer.from(screenshot.data,'base64'));
 }
}
await send('Emulation.setDeviceMetricsOverride',{width:390,height:844,deviceScaleFactor:1,mobile:true});
console.log('Slider interaction:',await evaluate(`(()=>{const s=document.querySelector('.mobile-carousel .swiper').swiper;const before=s.realIndex;s.slideNext(0);return {before,after:s.realIndex,linkTarget:document.querySelector('.mobile-carousel a').target}})()`));
console.log('Mobile menu:',await evaluate(`(async()=>{document.querySelector('.hamburger').click();await new Promise(r=>setTimeout(r,100));const open=!!document.querySelector('.mobile-menu');document.querySelector('.hamburger').click();return {opened:open}})()`));
console.log('Mobile form:',await evaluate(`(async()=>{document.querySelector('.open_btn').click();await new Promise(r=>setTimeout(r,100));const p=document.querySelector('.popup');const r=p.getBoundingClientRect();const result={opened:!!p,withinViewport:r.left>=0&&r.right<=innerWidth,closeButton:!!p.querySelector('.popup-close')};p.querySelector('.popup-close').click();return result})()`));
ws.close();

