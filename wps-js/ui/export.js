var source=doc(),busy=false,cancelled=false;
var format=document.getElementById('format'),dpi=document.getElementById('dpi'),message=document.getElementById('message');
if(/[?&]format=pdf(?:&|$)/.test(window.location.search))format.value='pdf';
function progress(text){message.textContent=text;}
document.getElementById('close').onclick=function(){if(!busy)window.close();};
document.getElementById('cancel').onclick=function(){cancelled=true;progress('将在当前页渲染后取消…');};
document.getElementById('exportForm').onsubmit=async function(event){
    event.preventDefault();if(busy)return;
    var selectedFormat=format.value,options={format:selectedFormat,dpi:Number(dpi.value),name:gwMacroBase(source.Name)},temp=null;
    if(['png','jpg','pdf'].indexOf(selectedFormat)<0 || [100,150,200,300,400,600].indexOf(options.dpi)<0)return;
    busy=true;cancelled=false;message.className='';
    ['start','close','format','dpi'].forEach(function(id){document.getElementById(id).disabled=true;});document.getElementById('cancel').disabled=false;
    try{
        if(typeof gwPdfJs==='undefined')throw new Error('缺少离线 PDF 渲染器，请重新安装完整安装包。');
        var chosen=gwMacroPick(selectedFormat==='pdf'?2:4,selectedFormat==='pdf'?'保存图片型 PDF 副本':'选择页面图片输出目录',false,null,null,selectedFormat==='pdf'?options.name+'_图片型.pdf':null);
        if(!chosen){progress('已取消。');return;}
        if(selectedFormat==='pdf')options.target=gwMacroUnique(/\.pdf$/i.test(chosen[0])?chosen[0]:chosen[0]+'.pdf');else options.folder=chosen[0];
        var fs=gwHost('FileSystem'),root=String(gwHost('Env').GetTempPath());
        if(!root)throw new Error('无法取得临时目录。');
        temp=gwMacroUnique(gwMacroPath(root,'gw_mika-render-'+Date.now()+'-'+Math.random().toString(36).slice(2)+'.pdf'));
        progress('正在生成临时 PDF…');gwLog('info','raster.start',{format:selectedFormat,dpi:options.dpi,
            fileSystem:gwRasterFileCapabilities()});
        await new Promise(function(resolve){setTimeout(resolve,0);});
        if(cancelled){progress('已取消。');return;}
        // 从捕获的文档导出当前内容，不对源文档执行 SaveAs，不依赖功能区命令是否弹窗。
        source.ExportAsFixedFormat(temp,17,false);
        var bytes=gwReadBytes(temp);
        if(String.fromCharCode.apply(null,bytes.subarray(0,5))!=='%PDF-')throw new Error('宿主未生成有效的临时 PDF。');
        var count=await gwRenderPdf(bytes,options,progress,function(){return cancelled;});
        progress('已导出 '+count+' 页。\n'+(options.target || options.folder));gwLog('info','raster.success',{pages:count,format:selectedFormat});
    }catch(e){
        message.className='error';gwLogError('页面图片导出',e);var saved=gwWriteDiagnostics();
        progress((e.message || String(e))+'\n已输出的图片会保留。'+(saved.path?'\n诊断日志：'+saved.path:''));
    }finally{
        if(temp)try{var fs=gwHost('FileSystem');if(fs.Exists(temp) && fs.Remove(temp)===false)throw new Error('临时文件删除失败');}catch(e){gwLogError('清理临时 PDF',e);}
        busy=false;['start','close','format','dpi'].forEach(function(id){document.getElementById(id).disabled=false;});document.getElementById('cancel').disabled=true;
    }
};
gwLog('info','raster.dialog',{format:format.value});
