import fs from 'node:fs';
import ts from 'typescript';
const js=ts.transpileModule(fs.readFileSync('src/data/ingredients.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.ESNext}}).outputText;
const {ingredientCategories}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
if(new Set(ingredientCategories.map(x=>x.url)).size!==9)throw Error('Category links are not unique');
const pages=await (await fetch('http://127.0.0.1:9333/json/list')).json();
const ws=new WebSocket(pages[0].webSocketDebuggerUrl);
await new Promise(r=>ws.addEventListener('open',r,{once:true}));
let id=0;const pending=new Map();const errors=[];
ws.addEventListener('message',e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(m.error):p.resolve(m.result)}else if(m.method==='Runtime.exceptionThrown')errors.push(m.params)});
const send=(method,params={})=>new Promise((resolve,reject)=>{pending.set(++id,{resolve,reject});ws.send(JSON.stringify({id,method,params}))});
const evaluate=async expression=>{const r=await send('Runtime.evaluate',{expression,awaitPromise:true,returnByValue:true});if(r.exceptionDetails)throw r.exceptionDetails;return r.result.value};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
await send('Page.enable');await send('Runtime.enable');
async function navigate(path){await send('Page.navigate',{url:'http://127.0.0.1:4174'+path});for(let n=0;n<100;n++){if(await evaluate('document.readyState === "complete" && !!document.querySelector(".catalog-page")'))return;await sleep(100)}throw Error('Page did not render: '+path)}
await navigate('/boilednsmokedsausages');
await evaluate('Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,5000))]).then(()=>true)');
for(const width of [320,390,768,1024,1280,1440,1920]){
 await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<600});await sleep(150);
 const state=await evaluate(`({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,table:getComputedStyle(document.querySelector('.desktop-catalog')).display,cards:getComputedStyle(document.querySelector('.compact-catalog')).display,tableProducts:document.querySelectorAll('tbody tr').length,cardProducts:document.querySelectorAll('.compact-catalog article').length,lastProduct:document.querySelector('.compact-catalog article:last-child h2').textContent,brokenImages:[...document.images].filter(i=>i.getBoundingClientRect().width&&!i.naturalWidth).map(i=>i.src)})`);
 if(state.scrollWidth>width||state.tableProducts!==7||state.cardProducts!==7||state.brokenImages.length)throw Error(JSON.stringify(state));
 console.log(JSON.stringify(state));
 if([390,768,1440].includes(width)){
 const metrics=await send('Page.getLayoutMetrics');
 const screenshot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:true,clip:{x:0,y:0,width,height:metrics.cssContentSize.height,scale:1}});
 fs.writeFileSync(`artifacts/catalog-review/smoked-${width}.png`,Buffer.from(screenshot.data,'base64'));
 }
}
await send('Emulation.setDeviceMetricsOverride',{width:1280,height:900,deviceScaleFactor:1,mobile:false});
for(const category of ingredientCategories){await navigate(category.url);const state=await evaluate(`({title:document.querySelector('h1').textContent,products:document.querySelectorAll('tbody tr').length,emptyState:!!document.querySelector('.contact-technologist'),fullWidth:Math.abs(document.querySelector("#app").getBoundingClientRect().width-document.documentElement.clientWidth)<1,overflow:document.documentElement.scrollWidth>innerWidth})`);if((category.id!==1&&state.title!==category.title)||state.overflow||!state.fullWidth)throw Error(category.url+JSON.stringify(state));if(category.id===1&&state.products!==7)throw Error('Smoked catalog missing');console.log(category.url,JSON.stringify(state));}
await navigate('/boiledsausages');if(await evaluate('document.querySelectorAll("tbody tr").length')!==7)throw Error('Boiled products missing');
if(errors.length)throw Error(JSON.stringify(errors));
console.log('All nine category routes and both sausage sections passed; no runtime exceptions.');
ws.close();


