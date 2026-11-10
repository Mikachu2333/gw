// 每页仅含一个 JPEG Image XObject；不写入原文、字体、链接、OCR 或隐藏文本层。
function GwImagePdf() { this.parts=[];this.offset=0;this.offsets=[0];this.pages=[];this.add('%PDF-1.4\n% raster pages\n'); }
GwImagePdf.prototype.add=function(value){var bytes=typeof value==='string'?new TextEncoder().encode(value):value;this.parts.push(bytes);this.offset+=bytes.length;};
GwImagePdf.prototype.object=function(id,body){this.offsets[id]=this.offset;this.add(id+' 0 obj\n');this.add(body);this.add('\nendobj\n');};
GwImagePdf.prototype.page=function(jpeg,width,height,pointsWidth,pointsHeight){
    if(!(width>0 && height>0 && pointsWidth>0 && pointsHeight>0) || jpeg[0]!==255 || jpeg[1]!==216)throw new Error('页面图像无效。');
    var page=3+this.pages.length*3,image=page+1,content=page+2;
    var w=Number(pointsWidth.toFixed(4)),h=Number(pointsHeight.toFixed(4));
    this.object(page,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 '+w+' '+h+'] /Resources << /XObject << /Im0 '+image+' 0 R >> >> /Contents '+content+' 0 R >>');
    this.offsets[image]=this.offset;this.add(image+' 0 obj\n<< /Type /XObject /Subtype /Image /Width '+width+' /Height '+height+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+jpeg.length+' >>\nstream\n');this.add(jpeg);this.add('\nendstream\nendobj\n');
    var commands='q\n'+w+' 0 0 '+h+' 0 0 cm\n/Im0 Do\nQ\n';
    this.object(content,'<< /Length '+commands.length+' >>\nstream\n'+commands+'endstream');this.pages.push(page);
};
GwImagePdf.prototype.finish=function(){
    if(!this.pages.length)throw new Error('没有可导出的页面。');
    this.object(1,'<< /Type /Catalog /Pages 2 0 R >>');
    this.object(2,'<< /Type /Pages /Count '+this.pages.length+' /Kids ['+this.pages.map(function(n){return n+' 0 R';}).join(' ')+'] >>');
    var xref=this.offset;this.add('xref\n0 '+this.offsets.length+'\n0000000000 65535 f \n');
    for(var i=1;i<this.offsets.length;i++)this.add(('0000000000'+this.offsets[i]).slice(-10)+' 00000 n \n');
    this.add('trailer\n<< /Size '+this.offsets.length+' /Root 1 0 R >>\nstartxref\n'+xref+'\n%%EOF\n');
    return new Blob(this.parts,{type:'application/pdf'});
};
function gwBinaryString(bytes){
    // 分块转换，避免高 DPI 文件触发 apply 的参数个数限制；保留 0x00 和 0x80–0xff。
    var chunks=[];
    for(var i=0;i<bytes.length;i+=32768)chunks.push(String.fromCharCode.apply(null,bytes.subarray(i,i+32768)));
    return chunks.join('');
}
function gwReadBytes(path,expected){
    var fs=gwHost('FileSystem'),methods=['ReadFileAsArrayBuffer','readAsBinaryString','ReadFile'],failures=[];
    path=String(path).replace(/\\/g,'/');
    for(var i=0;i<methods.length;i++){
        var method=methods[i];
        try{
            if(typeof fs[method]!=='function')continue;
            var raw=fs[method](path),data;
            if(method==='ReadFileAsArrayBuffer'){
                if(raw instanceof ArrayBuffer)data=new Uint8Array(raw);
                else if(ArrayBuffer.isView(raw))data=new Uint8Array(raw.buffer,raw.byteOffset,raw.byteLength);
                else throw new Error('未返回二进制缓冲区');
            }else{
                if(typeof raw!=='string')throw new Error('未返回二进制字符串');
                data=new Uint8Array(raw.length);
                for(var j=0;j<raw.length;j++){
                    var value=raw.charCodeAt(j);
                    if(value>255)throw new Error('返回值含非字节字符');
                    data[j]=value;
                }
            }
            if(!data.length && (!expected || expected.length))throw new Error('返回空内容');
            if(expected && (data.length!==expected.length || !data.every(function(b,n){return b===expected[n];})))
                throw new Error('字节不一致（读取 '+data.length+'，预期 '+expected.length+'）');
            if(expected)gwLog('info','raster.verify',{method:method,bytes:data.length,fallback:i>0});
            return data;
        }catch(e){failures.push(method+': '+(e.message || e));}
    }
    throw new Error('无法读取或校验文件：'+path+'\n'+(failures.join('\n') || '宿主未提供二进制读取接口。'));
}
function gwWriteBytes(path,bytes){
    var fs=gwHost('FileSystem');
    path=String(path).replace(/\\/g,'/');
    if(fs.Exists(path))throw new Error('目标文件已存在，已停止写入：'+path);
    if(typeof fs.writeAsBinaryString!=='function')throw new Error('WPS 未提供 FileSystem.writeAsBinaryString，无法保存二进制副本。');
    gwLog('info','raster.write.start',{method:'writeAsBinaryString',bytes:bytes.length});
    try{
        // 部分 WPS 的 WriteFile 仅接受文本；传 ArrayBuffer 会静默不写。使用专用二进制接口。
        var result=gwStep('FileSystem.writeAsBinaryString',function(){return fs.writeAsBinaryString(path,gwBinaryString(bytes));});
        gwLog('info','raster.write.result',{returned:typeof result,result:result===undefined?null:result,exists:!!fs.Exists(path)});
        if(result===false)throw new Error('二进制写入接口返回失败：'+path);
        gwStep('导出文件字节校验',function(){gwReadBytes(path,bytes);});
    }catch(e){
        // 入口已确认文件不存在，仅清理本次失败输出，不留下看似可用的损坏副本。
        try{if(fs.Exists(path) && fs.Remove(path)===false)throw new Error('删除失败输出返回 false');}
        catch(cleanup){gwLogError('清理失败输出',cleanup);}
        throw e;
    }
}
function gwCanvasBytes(canvas,type){
    return new Promise(function(resolve,reject){canvas.toBlob(function(blob){
        if(!blob){reject(new Error('页面图像编码失败。'));return;}
        blob.arrayBuffer().then(function(buffer){resolve(new Uint8Array(buffer));},reject);
    },type,0.94);});
}
function gwPdfOptions(bytes){
    return {data:bytes,isEvalSupported:false,enableXfa:false,useWorkerFetch:false,stopAtErrors:true,
        CMapReaderFactory:class {async fetch({name}){return {cMapData:gwReadBytes(gwNativeAsset('vendor/pdfjs/cmaps/'+name+'.bcmap')),compressionType:1};}},
        StandardFontDataFactory:class {async fetch({filename}){return gwReadBytes(gwNativeAsset('vendor/pdfjs/standard_fonts/'+filename));}}};
}
async function gwRenderPdf(bytes,options,progress,cancelled){
    var task=gwPdfJs.getDocument(gwPdfOptions(bytes)),pdf,writer=options.format==='pdf'?new GwImagePdf():null,done=0;
    try{
        pdf=await task.promise;
        for(var i=1;i<=pdf.numPages;i++){
            if(cancelled())throw new Error('用户取消，已完成 '+done+' 页。');
            progress('正在渲染第 '+i+' / '+pdf.numPages+' 页…');
            await new Promise(function(r){setTimeout(r,0);});
            var page=await pdf.getPage(i),physical=page.getViewport({scale:1}),viewport=page.getViewport({scale:options.dpi/72});
            var width=Math.ceil(physical.width*options.dpi/72),height=Math.ceil(physical.height*options.dpi/72);
            if(width*height>40000000)throw new Error('第 '+i+' 页在 '+options.dpi+' DPI 下超过 4000 万像素，请降低分辨率。');
            var canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;
            try{
                await page.render({canvasContext:canvas.getContext('2d'),viewport:viewport,background:'rgb(255,255,255)'}).promise;
                var image=await gwCanvasBytes(canvas,options.format==='png'?'image/png':'image/jpeg');
                if(writer)writer.page(image,canvas.width,canvas.height,physical.width,physical.height);
                else {var path=gwMacroUnique(gwMacroPath(options.folder,options.name+'_'+i+'.'+options.format));gwWriteBytes(path,image);}
                done++;gwLog('info','raster.page',{page:i,total:pdf.numPages,width:canvas.width,height:canvas.height,format:options.format});
            }finally{canvas.width=canvas.height=1;page.cleanup();}
        }
        if(cancelled())throw new Error('用户取消，已完成 '+done+' 页。');
        if(writer){progress('正在写入图片型 PDF…');gwWriteBytes(options.target,new Uint8Array(await writer.finish().arrayBuffer()));}
        return done;
    }finally{await task.destroy();}
}
