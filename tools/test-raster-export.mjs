// 真实 Chromium 渲染，WPS 桥使用内存文件替身；检查导出文件内容而非仅检查命令调用。
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {spawn} from 'node:child_process';
import assert from 'node:assert/strict';
const root=resolve(fileURLToPath(new URL('..',import.meta.url)));
const log=resolve(root,'dist/logs');mkdirSync(log,{recursive:true});
// 两页不同纸张尺寸，文字、彩色矩形和旋转页均需保留。
function fixture(){
    let pdf='%PDF-1.4\n',offsets=[0];
    const streams=['0.1 0.4 0.8 rg 20 20 200 120 re f BT /F1 22 Tf 30 500 Td (Raster test page 1) Tj ET',
        '0.8 0.2 0.1 rg 20 20 150 100 re f BT /F1 22 Tf 30 400 Td (Landscape page 2) Tj ET'];
    const bodies=['<< /Type /Catalog /Pages 2 0 R >>','<< /Type /Pages /Kids [3 0 R 4 0 R] /Count 2 >>',
        '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 6 0 R >>',
        '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 420 595] /Rotate 90 /Resources << /Font << /F1 5 0 R >> >> /Contents 7 0 R >>',
        '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',...streams.map(s=>'<< /Length '+s.length+' >>\nstream\n'+s+'\nendstream')];
    bodies.forEach((body,i)=>{offsets.push(pdf.length);pdf+=(i+1)+' 0 obj\n'+body+'\nendobj\n';});
    let xref=pdf.length;pdf+='xref\n0 8\n0000000000 65535 f \n'+offsets.slice(1).map(n=>String(n).padStart(10,'0')+' 00000 n \n').join('');
    return Buffer.from(pdf+'trailer\n<< /Size 8 /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF','ascii');
}
const sample=fixture();writeFileSync(resolve(log,'raster-source.pdf'),sample);
const cjkPath=resolve(log,'raster-cjk-source.pdf');
const cjk=existsSync(cjkPath)?readFileSync(cjkPath).toString('base64'):null;
const ui=pathToFileURL(resolve(root,'wps-js/ui')+'/').href;
let html=readFileSync(resolve(root,'wps-js/ui/export.html'),'utf8');
const bootstrap=`<base href="${ui}"><script>
var files=new Map(),storage=new Map(),exports=0,pickCancelled=false,forceInvalid=false;
var fixture=Uint8Array.from(atob('${sample.toString('base64')}'),c=>c.charCodeAt(0));
var sourceDoc={Name:'测试.docx',ReadOnly:false,ProtectionType:-1,ExportAsFixedFormat:function(path,type,open){exports++;files.set(path,forceInvalid?new Uint8Array([1,2,3]):fixture.slice());}};
window.wps={WpsApplication:function(){return {Documents:{Count:1},ActiveDocument:sourceDoc,FileDialog:function(kind){return {Show:()=>pickCancelled?0:-1,SelectedItems:{Count:1,Item:()=>kind===2?'C:/out/result.pdf':'C:/out'}};}};},
 Env:{GetTempPath:()=> 'C:/temp',GetHomePath:()=> 'C:/mock'},PluginStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},
 FileSystem:{Exists:p=>files.has(p),ReadFileAsArrayBuffer:()=>undefined,readAsBinaryString:()=>undefined,
 WriteFile:(p,v)=>{if(typeof v==='string'){files.set(p,new TextEncoder().encode(v));return true;}},
 writeAsBinaryString:(p,v)=>{files.set(p,Uint8Array.from(v,c=>c.charCodeAt(0)));return true;},
 ReadFile:p=>{if(!files.has(p))return undefined;var bytes=files.get(p),parts=[];for(var i=0;i<bytes.length;i+=32768)parts.push(String.fromCharCode(...bytes.subarray(i,i+32768)));return parts.join('');},Remove:p=>files.delete(p)}};
</script>`;
const verify=`<script>
(async function(){
 var pre=document.createElement('pre');pre.id='verification';document.body.appendChild(pre);var checks=[];
 function check(ok,label){if(!ok)throw Error(label);checks.push(label);}
 try{
  var original=await gwPdfJs.getDocument(gwPdfOptions(fixture.slice())).promise;
  check((await (await original.getPage(1)).getTextContent()).items.length>0,'source fixture contains selectable text');
  format.value='pdf';dpi.value='100';await document.getElementById('exportForm').onsubmit({preventDefault(){}});
  check(files.has('C:/out/result.pdf'),'PDF is written through the export form');
  var pdf=await gwPdfJs.getDocument(gwPdfOptions(files.get('C:/out/result.pdf').slice())).promise;
  check(pdf.numPages===2,'PDF retains page count');
  for(var i=1;i<=2;i++){
   var p=await pdf.getPage(i),o=await original.getPage(i),v=p.getViewport({scale:1}),ov=o.getViewport({scale:1});
   check(v.width===ov.width && v.height===ov.height,'physical dimensions and orientation page '+i);
   check((await p.getTextContent()).items.length===0,'no selectable or hidden text page '+i);
   var ops=await p.getOperatorList();check(ops.fnArray.filter(x=>x===gwPdfJs.OPS.paintImageXObject).length===1,'exactly one raster image page '+i);
   var canvas=document.createElement('canvas');canvas.width=v.width;canvas.height=v.height;await p.render({canvasContext:canvas.getContext('2d'),viewport:v}).promise;
   var data=canvas.getContext('2d').getImageData(0,0,canvas.width,canvas.height).data,colored=0;
   for(var n=0;n<data.length;n+=4)if(Math.max(data[n],data[n+1],data[n+2])-Math.min(data[n],data[n+1],data[n+2])>50)colored++;
   check(colored>1000,'page retains colored graphic '+i);canvas.width=canvas.height=1;
  }
  await pdf.destroy();await original.destroy();
  var saved=files.get('C:/out/result.pdf').slice();
  for(var resolution of [400,600]){
   dpi.value=String(resolution);format.value='pdf';
   check(Number(dpi.value)===resolution,'DPI option '+resolution+' is selectable');
   await document.getElementById('exportForm').onsubmit({preventDefault(){}});
   var outputPath='C:/out/result_'+(resolution===400?1:2)+'.pdf';
   check(files.has(outputPath),'DPI '+resolution+' saves through binary-string writer with legacy readers');
   var high=await gwPdfJs.getDocument(gwPdfOptions(files.get(outputPath).slice())).promise;
   check(high.numPages===2,'DPI '+resolution+' retains page count');
   for(var highIndex=1;highIndex<=high.numPages;highIndex++){
    var highPage=await high.getPage(highIndex),size=highPage.getViewport({scale:1}),operations=await highPage.getOperatorList();
    var imageOp=operations.fnArray.indexOf(gwPdfJs.OPS.paintImageXObject),imageArgs=operations.argsArray[imageOp];
    check(imageArgs[1]===Math.ceil(size.width*resolution/72) && imageArgs[2]===Math.ceil(size.height*resolution/72),'actual pixel dimensions at '+resolution+' DPI page '+highIndex);
    check((await highPage.getTextContent()).items.length===0,'no text layer at '+resolution+' DPI page '+highIndex);
   }
   await high.destroy();
  }
  dpi.value='100';
  format.value='png';await document.getElementById('exportForm').onsubmit({preventDefault(){}});
  var pngs=Array.from(files.keys()).filter(p=>p.endsWith('.png'));check(pngs.length===2,'PNG exported for every page');check(files.get(pngs[0])[0]===137,'PNG signature');
  format.value='jpg';await document.getElementById('exportForm').onsubmit({preventDefault(){}});
  var jpegs=Array.from(files.keys()).filter(p=>p.endsWith('.jpg'));check(jpegs.length===2 && files.get(jpegs[0])[0]===255,'JPEG export');
  check(!Array.from(files.keys()).some(p=>p.startsWith('C:/temp')),'temporary source PDF cleaned');
  pickCancelled=true;var before=exports;await document.getElementById('exportForm').onsubmit({preventDefault(){}});check(exports===before,'cancel picker never exports source');pickCancelled=false;
  forceInvalid=true;await document.getElementById('exportForm').onsubmit({preventDefault(){}});check(message.className==='error' && message.textContent.includes('有效的临时 PDF'),'invalid host export gives actionable error');forceInvalid=false;
  check(!Array.from(files.keys()).some(p=>p.startsWith('C:/temp')),'failure cleans temporary PDF');
  ${cjk?`var chinese=Uint8Array.from(atob('${cjk}'),c=>c.charCodeAt(0));
  var chineseOriginal=await gwPdfJs.getDocument(gwPdfOptions(chinese.slice())).promise;
  var chineseText=(await (await chineseOriginal.getPage(1)).getTextContent()).items.map(x=>x.str).join('');
  check(chineseText.includes('公文准式'),'Chinese source fixture contains real Chinese text');await chineseOriginal.destroy();
  await gwRenderPdf(chinese,{format:'pdf',dpi:100,target:'C:/out/chinese.pdf'},()=>{},()=>false);
  var chineseResult=await gwPdfJs.getDocument(gwPdfOptions(files.get('C:/out/chinese.pdf').slice())).promise;
  check(chineseResult.numPages===1 && (await (await chineseResult.getPage(1)).getTextContent()).items.length===0,'Embedded Chinese fonts rasterize successfully without retaining text');await chineseResult.destroy();`:''}
  var options={format:'png',dpi:100,folder:'C:/cancel',name:'cancel'};
  var canceled=false;try{await gwRenderPdf(fixture.slice(),options,()=>{},()=>true);}catch(e){canceled=e.message.includes('取消');}check(canceled && !Array.from(files.keys()).some(p=>p.startsWith('C:/cancel')),'render cancellation writes no pages');
  var encoded='';for(var start=0;start<saved.length;start+=32768)encoded+=String.fromCharCode(...saved.subarray(start,start+32768));
  var artifact=document.createElement('textarea');artifact.id='artifact';artifact.textContent=btoa(encoded);document.body.appendChild(artifact);
  pre.textContent='PASS: '+checks.length+' raster export checks\\n'+checks.join('\\n');document.body.dataset.result='PASS';
 }catch(e){pre.textContent='FAIL: '+e.stack+'\\nUI: '+message.textContent;document.body.dataset.result='FAIL';}
})();</script>`;
html=html.replace('<head>','<head>'+bootstrap).replace('</body>',verify+'</body>');
const page=resolve(log,'raster-browser.html');writeFileSync(page,html);
const chrome=process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe';assert.ok(existsSync(chrome),'Set CHROME_PATH to Chromium executable');
const profile=resolve(log,'raster-chrome-'+Date.now()),portFile=resolve(profile,'DevToolsActivePort');
const run=spawn(chrome,['--headless','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port=0','--user-data-dir='+profile,pathToFileURL(page).href],{windowsHide:true,stdio:['ignore','ignore','pipe']});
let stderr='',socket,sequence=0;run.stderr.on('data',x=>stderr+=x);const pending=new Map();
const sleep=ms=>new Promise(r=>setTimeout(r,ms));let output='';
try {
    for(let i=0;!existsSync(portFile)&&i<100;i++)await sleep(100);
    assert.ok(existsSync(portFile),'browser debugging port unavailable');
    const port=readFileSync(portFile,'utf8').split('\n')[0];
    const targets=await (await fetch('http://127.0.0.1:'+port+'/json/list')).json();
    socket=new WebSocket(targets.find(t=>t.type==='page').webSocketDebuggerUrl);
    await new Promise((r,j)=>{socket.onopen=r;socket.onerror=j;});
    socket.onmessage=event=>{const data=JSON.parse(event.data);if(pending.has(data.id)){pending.get(data.id)(data);pending.delete(data.id);}};
    function send(method,params={}){return new Promise(resolve=>{const id=++sequence;pending.set(id,resolve);socket.send(JSON.stringify({id,method,params}));});}
    for(let i=0;i<200;i++){
        const result=await send('Runtime.evaluate',{expression:'document.body.dataset.result',returnByValue:true});
        if(result.result?.result?.value)break;await sleep(200);
    }
    output=(await send('Runtime.evaluate',{expression:'document.documentElement.outerHTML',returnByValue:true})).result.result.value;
    writeFileSync(resolve(log,'raster-browser-output.html'),output);
    const result=/<pre id="verification">([\s\S]*?)<\/pre>/.exec(output);assert.ok(result,'browser produced no report');console.log(result[1]);
    assert.ok(output.includes('data-result="PASS"'),'raster checks failed');
    const artifact=/<textarea id="artifact">([\s\S]*?)<\/textarea>/.exec(output);writeFileSync(resolve(log,'raster-result.pdf'),Buffer.from(artifact[1],'base64'));
    socket.send(JSON.stringify({id:++sequence,method:'Browser.close'}));
} finally {writeFileSync(resolve(log,'raster-browser.log'),stderr);if(socket)socket.close();run.kill();}
