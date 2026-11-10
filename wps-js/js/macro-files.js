// 文件类操作仅关闭本次打开/创建的文档。生成副本自动避开同名文件。
function gwMacroPick(kind,title,multiple,label,filter,initial) {
    var picker=app().FileDialog(kind);picker.Title=title;picker.AllowMultiSelect=!!multiple;
    if(initial)picker.InitialFileName=initial;
    if(filter)try{picker.Filters.Clear();picker.Filters.Add(label,filter);}catch(e){gwLogError('文件筛选器',e);}
    if(picker.Show()!==-1)return null;
    var files=[];for(var i=1;i<=picker.SelectedItems.Count;i++)files.push(String(picker.SelectedItems.Item(i)));
    return files.length?files:null;
}
function gwMacroPath(folder,name){return String(folder).replace(/[\\/]$/,'')+'/'+name;}
function gwMacroBase(name){return String(name).replace(/\.[^.]+$/,'').replace(/[<>:"/\\|?*\x00-\x1f]/g,'_').replace(/[. ]+$/,'').slice(0,100) || '未命名文档';}
function gwMacroUnique(path) {
    var fs=gwHost('FileSystem'),extension=/\.[^./\\]+$/.exec(path),ext=extension?extension[0]:'',base=ext?path.slice(0,-ext.length):path;
    for(var i=0;i<10000;i++){var candidate=i?base+'_'+i+ext:path;if(!fs.Exists(candidate))return candidate;}
    throw new Error('同名文件过多，请选择其他目录。');
}
function gwMacroPathKey(path){var s=String(path).replace(/\\/g,'/');return /^[a-z]:\//i.test(s)||/^\/\//.test(s)?s.toLowerCase():s;}
function gwMacroRequireMethod(object,name) { if(!object || typeof object[name]!=='function')throw new Error('当前 WPS 未提供 '+name+' 接口。'); }
function gwMacroPageSetup(source,target) {
    ['Orientation','PageWidth','PageHeight','TopMargin','BottomMargin','LeftMargin','RightMargin','HeaderDistance','FooterDistance','LayoutMode'].forEach(function(k){target[k]=source[k];});
    if(source.LayoutMode){target.CharsLine=source.CharsLine;target.LinesPage=source.LinesPage;}
}
function gwMacroWriteRange(source,range,path,removeSectionBreaks) {
    var output=app().Documents.Add();
    try {
        range.Copy();output.Content.PasteAndFormat(16);
        if(removeSectionBreaks)wordReplace(false,'^b','',output.Content);
        gwMacroPageSetup(range.PageSetup,output.PageSetup);
        output.SaveAs2(path,16);
        output.Close(0);
    } catch(e) {
        // 保存失败时保留新文档，便于手动另存，绝不关闭源文档。
        throw new Error('生成文件失败，新文档已保留：'+path+'\n'+(e.message || e));
    } finally { source.Activate(); }
}
function gwMacroSplit(kind) {
    var source=doc(),ranges=[];
    if(kind==='sections') {
        if(source.Sections.Count<=1)throw new Error('拆分前请插入分节符。');
        gwMacroEach(source.Sections,function(s){ranges.push(s.Range.Duplicate);});
    } else if(kind==='pages') {
        var pages=source.ComputeStatistics(2);
        for(var p=1;p<=pages;p++)ranges.push(gwMacroPageRange(source,p));
    } else {
        var start=source.Content.Start,end=source.Content.End,cursor=start,found=false;
        while(cursor<end) {
            var search=source.Range(cursor,end),f=search.Find;f.ClearFormatting();
            if(!f.Execute('^m',false,false,false,false,false,true,0,false,'',0))break;
            if(search.End<=cursor)throw new Error('查找分页符未前进，已停止拆分。');
            found=true;if(search.Start>start)ranges.push(source.Range(start,search.Start));
            cursor=search.End;start=cursor;
        }
        if(!found)throw new Error('文档中没有手动分页符。');
        if(start<end-1)ranges.push(source.Range(start,end));
    }
    var folders=gwMacroPick(4,'选择拆分输出目录',false);if(!folders)return false;
    var count=0;
    try { ranges.forEach(function(r,i){
        var path=gwMacroUnique(gwMacroPath(folders[0],gwMacroBase(source.Name)+'_'+(i+1)+'.docx'));
        gwStep('拆分第 '+(i+1)+' 份',function(){gwMacroWriteRange(source,r,path,kind==='sections');});count++;
    }); } catch(e) { throw new Error('已完成 '+count+' 份；'+e.message); }
    return {message:'已生成 '+count+' 个文档：'+folders[0]};
}
function gwMacroSaveSelection() {
    var source=doc(),range=gwMacroSelection();
    var targets=gwMacroPick(2,'保存所选内容为新文档',false,null,null,gwMacroBase(source.Name)+'_选区.docx');if(!targets)return false;
    var path=targets[0];if(!/\.docx$/i.test(path))path+='.docx';path=gwMacroUnique(path);
    gwMacroWriteRange(source,range,path,false);return {message:'已保存：'+path};
}
function gwMacroSaveName() {
    var name=gwMacroBase(gwMacroSelection().Text.replace(/[\r\n]/g,''));
    var targets=gwMacroPick(2,'用所选文字另存文档',false,null,null,name+'.docx');if(!targets)return false;
    var path=targets[0];if(!/\.docx$/i.test(path))path+='.docx';
    path=gwMacroUnique(path);doc().SaveAs2(path,16);return {message:'已另存为：'+path};
}
function gwMacroCopyPath(wechat) {
    var d=doc();
    if(!d.Path || /^https?:/i.test(d.FullName))throw new Error('请先将文档保存到本地。');
    if(wechat && !d.Saved){if(!window.confirm('打开微信前先保存当前文档？'))return false;d.Save();if(!d.Saved)return false;}
    var box=document.createElement('textarea');box.value=d.FullName;document.body.appendChild(box);box.select();
    var copied=false;try{copied=document.execCommand('copy');}finally{document.body.removeChild(box);}
    if(wechat)gwHost('OAAssist').ShellExecute('weixin://');
    return {message:copied?'文件路径已复制。':'无法自动复制，请从下方选择并复制文件路径。',output:String(d.FullName)};
}
function gwMacroSavePictures() {
    var folders=gwMacroPick(4,'选择图片输出目录',false);if(!folders)return false;
    var d=doc(),count=0;
    try {
        [d.Shapes,d.InlineShapes].forEach(function(items){gwMacroEach(items,function(shape){
            gwMacroRequireMethod(shape,'SaveAsPicture');
            shape.SaveAsPicture(gwMacroUnique(gwMacroPath(folders[0],gwMacroBase(d.Name)+'_shape_'+(count+1)+'.png')));count++;
        });});
    } catch(e){throw new Error('已导出 '+count+' 张图片；'+e.message);}
    return {message:'已导出 '+count+' 张图片：'+folders[0]};
}
function gwMacroImagesPdf() {
    var images=gwMacroPick(3,'选择图片（每张一页）',true,'图片','*.jpg;*.jpeg;*.png;*.bmp;*.gif');if(!images)return false;
    var targets=gwMacroPick(2,'保存图片 PDF',false,null,null,'图片.pdf');if(!targets)return false;
    var path=targets[0];if(!/\.pdf$/i.test(path))path+='.pdf';path=gwMacroUnique(path);
    var source=hasDocument()?doc():null,output=app().Documents.Add();
    try {
        var setup=output.PageSetup;setup.Orientation=0;setup.PageWidth=cmToPoints(21);setup.PageHeight=cmToPoints(29.7);
        ['LeftMargin','RightMargin','TopMargin','BottomMargin'].forEach(function(k){setup[k]=0;});
        images.forEach(function(file,i){
            var range=output.Range(output.Content.End-1,output.Content.End-1);
            // 浮动图片必须锚定在不同段落，单个段落内的分页符会使多张图片共用同一页锚点。
            if(i){range.InsertBefore('\r');range=output.Range(output.Content.End-1,output.Content.End-1);range.ParagraphFormat.PageBreakBefore=-1;}
            var shape=output.Shapes.AddPicture(file,false,true,0,0,setup.PageWidth,setup.PageHeight,range);
            shape.RelativeHorizontalPosition=1;shape.RelativeVerticalPosition=1;shape.Left=0;shape.Top=0;shape.WrapFormat.Type=3;
            range.ParagraphFormat.LineSpacingRule=4;range.ParagraphFormat.LineSpacing=1;range.Font.Size=1;
        });
        output.ExportAsFixedFormat(path,17,false);output.Close(0);
    } finally {if(source)source.Activate();}
    return {message:'已生成 '+images.length+' 页图片 PDF：'+path};
}
function gwMacroOpenOwned(path,readOnly) {
    var documents=app().Documents;
    for(var i=1;i<=documents.Count;i++) {
        if(gwMacroPathKey(documents.Item(i).FullName)===gwMacroPathKey(path))throw new Error('文件已经打开，请先关闭后再批量处理。');
    }
    return documents.Open(path,false,readOnly,false);
}
function gwMacroBatch(kind,p) {
    var files;
    if(kind==='docx') {
        var folders=gwMacroPick(4,'选择含 .doc 文件的目录',false);if(!folders)return false;
        files=gwHost('FileSystem').readdirSync(folders[0]).filter(function(f){return /\.doc$/i.test(f) && !/^~\$/.test(f);}).map(function(f){return gwMacroPath(folders[0],f);});
    } else files=gwMacroPick(3,'选择要批量处理的 Word 文档',true,'Word 文档','*.doc;*.docx;*.docm');
    if(!files)return false;
    files=files.filter(function(f){return /\.(doc|docx|docm)$/i.test(f);});
    if(!files.length)throw new Error('没有找到可处理的 Word 文档。');
    if(kind==='replace' && !String(p.find || '').length)throw new Error('查找内容不能为空。');
    if(kind==='replace' && !window.confirm('将直接修改并保存所选 '+files.length+' 个文档。是否继续？'))return false;
    if(kind==='print' && !window.confirm('将向当前打印机发送 '+files.length+' 个文档，每个 '+p.copies+' 份。是否继续？'))return false;
    var source=hasDocument()?doc():null,count=0,errors=[];
    try {
        files.forEach(function(file,index){
            var opened;
            try {
                opened=gwMacroOpenOwned(file,kind!=='replace');
                if(kind==='replace') {
                    if(opened.ReadOnly || Number(opened.ProtectionType)!==-1)throw new Error('文档只读或受到保护。');
                    wordReplace(true,p.find,p.replace,opened.Content);opened.Save();
                } else if(kind==='pdf')opened.ExportAsFixedFormat(gwMacroUnique(file.replace(/\.[^.]+$/,'.pdf')),17,false);
                else if(kind==='docx')opened.SaveAs2(gwMacroUnique(file.replace(/\.doc$/i,'.docx')),16);
                else opened.PrintOut(false,false,0,'','','',0,p.copies);
                count++;
            } catch(e) {errors.push('第 '+(index+1)+' 个文件：'+(e.message || e));gwLogError('批处理 '+kind+' #'+(index+1),e);}
            finally {if(opened)try{opened.Close(0);}catch(e){errors.push('关闭第 '+(index+1)+' 个文件失败：'+e.message);}}
        });
    } finally {if(source)source.Activate();}
    if(!count && errors.length)throw new Error(errors.join('\n'));
    return {partial:errors.length>0,message:'已完成 '+count+' / '+files.length+' 个文件。'+(errors.length?'\n'+errors.join('\n'):'')};
}
function gwMacroPrintSerial(p) {
    if(p.end<p.start)throw new Error('结束编号不能小于开始编号。');
    if(!window.confirm('将向当前打印机发送 '+(p.end-p.start+1)+' 份带编号文档。是否继续？'))return false;
    var r=sel().Range.Duplicate,original=r.FormattedText,length=r.End-r.Start,count=0;
    // 保存原内容到独立临时文档，避免宿主 FormattedText 引用随替换一起变化。
    var source=doc(),backup=app().Documents.Add(),prepared=false,restored=false;
    try {
        backup.Content.FormattedText=original;prepared=true;source.Activate();
        for(var i=p.start;i<=p.end;i++) {r.Text='第'+(i<10?'0':'')+i+'份';source.PrintOut(false,false,0,'','','',0,1);count++;}
    } catch(e){throw new Error('已发送 '+count+' 份；'+e.message);}
    finally {
        try {if(prepared){r.FormattedText=backup.Range(0,length).FormattedText;restored=true;}}
        catch(e){throw new Error('恢复编号占位内容失败，原内容备份文档已保留：'+e.message);}
        finally {if(!prepared || restored)backup.Close(0);source.Activate();}
    }
    return {message:'已发送 '+count+' 份打印任务。'};
}
function gwMacroPrintBookmarks() {
    var source=doc(),rows=[];
    gwMacroEach(source.Bookmarks,function(b){rows.push([String(b.Name),String(b.Range.Text),String(b.Range.Information(1))]);});
    if(!rows.length)throw new Error('文档中没有书签。');
    var print=window.confirm('将生成书签清单。是否同时发送到当前打印机？取消则仅生成清单。');
    var output=app().Documents.Add();
    output.Content.Text='书签在“'+source.Name+'”\r';
    var table=output.Tables.Add(output.Range(output.Content.End-1,output.Content.End-1),rows.length+1,3);table.Borders.Enable=1;
    [['名称','文字','页码']].concat(rows).forEach(function(row,i){row.forEach(function(text,j){table.Cell(i+1,j+1).Range.Text=text;});});
    if(print)output.PrintOut(false,false,0,'','','',0,1);
    return {message:'已生成 '+rows.length+' 条书签清单'+(print?'并发送打印任务':'')+'，新文档保持打开。'};
}
