// 原版 VBA 功能的 JS 入口，参照 84d9734f5ce6；不解释执行任意 VBA 文件。
var GW_MACRO_REFERENCE = '84d9734f5ce6';
function gwMacroParam(key, label, value, type, min, max) {
    return { key: key, label: label, value: value, type: type || 'text', min: min, max: max };
}
var GW_MACROS = [
    { id:'document-image-pdf', name:'保存为图片型PDF副本', group:'文档', access:'read', added:true, run:function(){gwDialog('export.html?format=pdf','图片型 PDF 副本',650,480);}, note:'逐页渲染并生成不含文字层的 PDF，保留各页尺寸；在导出窗口选择分辨率。' },
    { id:'bold-head', name:'加粗第n章第n条', group:'文字', undo:true, run:function(){return gwMacroBold(false);} },
    { id:'bold-line', name:'加粗第n章第n条(整行)', group:'文字', undo:true, run:function(){return gwMacroBold(true);} },
    { id:'center-chapter', name:'第n章整行加粗居中', group:'文字', undo:true, run:gwMacroCenterChapter },
    { id:'chapter-space', name:'第n章条后1空格', group:'文字', undo:true, run:gwMacroChapterSpace },
    { id:'renumber-chapter', name:'重新整理章条序号', group:'文字', undo:true, run:gwMacroRenumberChapters },
    { id:'renumber-cn', name:'（一）至（九十九）重新排序', group:'文字', undo:true, run:function(){return gwMacroRenumber(false);} },
    { id:'renumber-arabic', name:'选中内容重新数字编号', group:'文字', undo:true, run:function(){return gwMacroRenumber(true);} },
    { id:'names', name:'姓名对齐', group:'文字', undo:true, params:[gwMacroParam('count','按几字姓名对齐',3,'integer',1,20)], run:gwMacroNames },
    { id:'rmb', name:'数字转为人民币', group:'文字', undo:true, run:gwMacroRmb, note:'转换选中的数字；沿用原版大写格式和金额上限。' },
    { id:'signature', name:'公文落款', group:'文字', undo:true, run:gwMacroSignature, note:'选中署名和日期两段，或将光标放在署名段。' },
    { id:'textboxes', name:'文本框转文字', group:'文字', undo:true, run:gwMacroTextBoxes, note:'先选中一个或多个文本框，保留文字格式。' },
    { id:'handwriting', name:'手写体(需提前安装字体)', group:'文字', undo:true, run:gwMacroHandwriting, note:'全文随机使用李国夫手写体、华阳手写、恐龙手写2；缺少字体时停止。' },
    { id:'pinyin', name:'文字加拼音', group:'文字', run:function(){gwNativeCommand('AsianLayoutPhoneticGuide');}, adapted:true, note:'打开 WPS 拼音指南，由用户确认读音；不模拟原版 SendKeys 全文自动确认。' },
    { id:'headers', name:'删除页眉页脚', group:'版面', undo:true, run:gwMacroClearHeaders },
    { id:'orient-selection', name:'所选内容纵横页转换', group:'版面', undo:true, run:function(){return gwMacroOrientation(gwMacroSelection());} },
    { id:'orient-page', name:'指定页面纵横转换', group:'版面', undo:true, params:[gwMacroParam('page','页码',1,'integer',1,99999)], run:function(p){return gwMacroOrientation(gwMacroPageRange(doc(),p.page));} },
    { id:'multiplication', name:'生成乘法口诀表', group:'版面', undo:true, adapted:true, run:gwMacroMultiplication, note:'在光标处插入口诀表，仅格式化新插入内容，并将当前文档设为 A4 横向；避免原版全文替换删改其他段落。' },
    { id:'nameplates', name:'桌签标牌制作', group:'版面', undo:true, run:gwMacroNameplates, note:'每行一个姓名，或使用一张单列表格；制作两个相反方向的桌签。' },
    { id:'auto-classic', name:'公文自动排版', group:'版面', undo:true, adapted:true, run:function(){return gwMacroAutoFormat(false);}, note:'移植纸张、正文、四级标题、日期落款及页码主流程；原版逐行挤排、附件复杂重排尚未等价。会解除正文域和自动编号。' },
    { id:'auto-2026', name:'公文自动排版2026', group:'版面', undo:true, adapted:true, run:function(){return gwMacroAutoFormat(true);}, note:'2026 主流程：A4、层级编号、主标题、日期落款，三页起插入页码；逐行挤排、多落款附件布局尚未等价。会解除正文域和自动编号。' },
    { id:'image-border', name:'图片批量加边框', group:'图片', undo:true, run:gwMacroPictureBorders },
    { id:'image-size', name:'批量调整图片大小', group:'图片', undo:true, params:[gwMacroParam('width','宽度（厘米，0 不调整）',0,'number',0,100),gwMacroParam('height','高度（厘米，0 不调整）',0,'number',0,100)], run:gwMacroPictureSize, note:'沿用原版：宽度大于 0 时优先调整宽度，否则调整高度。' },
    { id:'stamp-pages', name:'每页批量盖章', group:'图片', undo:true, run:gwMacroStampPages, note:'选择公章图片，在各独立页眉添加 3 厘米印章，位置为左 350、上 500 磅。' },
    { id:'image-save', name:'保存文档所有图片', group:'图片', access:'read', adapted:true, run:gwMacroSavePictures, note:'使用 WPS SaveAsPicture 导出 PNG；原版通过 Windows EMF 导出。输出到所选目录，不覆盖已有文件。' },
    { id:'image-pdf', name:'插入图片生成PDF', group:'图片', access:'any', run:gwMacroImagesPdf, note:'选择多张图片，按选择顺序各占一页 A4，保存为 PDF。' },
    { id:'image-ppt', name:'图片批量转PPT', group:'图片', unavailable:'原版依赖 PowerPoint COM。文字加载项未接入演示组件，尚未移植。' },
    { id:'scan-pdf', name:'生成扫描版pdf', group:'图片', unavailable:'原版依赖外部 make-look-scanned 程序及进程等待接口，尚未移植。可先使用 PDF 副本功能。' },
    { id:'split-pages', name:'按页拆分文档', group:'文档', access:'read', run:function(){return gwMacroSplit('pages');} },
    { id:'split-sections', name:'按分节符拆分文档', group:'文档', access:'read', run:function(){return gwMacroSplit('sections');} },
    { id:'split-breaks', name:'按分页符拆分文档', group:'文档', access:'read', run:function(){return gwMacroSplit('breaks');} },
    { id:'save-selection', name:'按所选内容存为新文档', group:'文档', access:'read', run:gwMacroSaveSelection },
    { id:'save-name', name:'用所选文字保存文件名', group:'文档', run:gwMacroSaveName },
    { id:'copy-path', name:'复制文件本地路径', group:'文档', access:'read', run:function(){return gwMacroCopyPath(false);}, adapted:true, note:'复制当前本地文件路径；云端文档需先另存为本地文件，不猜测 OneDrive 映射。' },
    { id:'copy-wechat', name:'复制文件路径并打开微信', group:'文档', access:'read', run:function(){return gwMacroCopyPath(true);}, adapted:true, note:'复制本地路径并通过 weixin:// 请求打开已安装的微信，不发送消息。' },
    { id:'batch-pdf', name:'多文档转PDF', group:'批量', access:'any', run:function(p){return gwMacroBatch('pdf',p);} },
    { id:'batch-docx', name:'批量doc转docx', group:'批量', access:'any', run:function(p){return gwMacroBatch('docx',p);}, note:'选择目录，转换其中的 .doc；保留源文件，输出文件重名时自动编号。' },
    { id:'batch-replace', name:'多文档内容替换', group:'批量', access:'any', params:[gwMacroParam('find','查找（Word 通配符）','([_]{1,})'),gwMacroParam('replace','替换','(\\1)')], run:function(p){return gwMacroBatch('replace',p);}, note:'选择多个文档，确认后直接保存替换结果。跳过已打开、只读或受保护的文档。' },
    { id:'batch-print', name:'多文档批量打印', group:'打印', access:'any', params:[gwMacroParam('copies','每个文档打印份数',1,'integer',1,999)], run:function(p){return gwMacroBatch('print',p);}, note:'选择多个文档，确认后发送到当前默认打印机。' },
    { id:'print-serial', name:'自动打印序列号', group:'打印', undo:true, params:[gwMacroParam('start','开始编号',1,'integer',1,999999),gwMacroParam('end','结束编号',1,'integer',1,999999)], run:gwMacroPrintSerial, note:'选中编号占位文本或放置光标；打印“第01份”等编号，结束后恢复原文本。' },
    { id:'print-bookmarks', name:'打印文档中的所有书签', group:'打印', access:'read', adapted:true, run:gwMacroPrintBookmarks, note:'生成名称、文字、页码三列表格，确认后打印；保留新文档供核对，不生成原版跨文档超链接。' },
    { id:'excel-import', name:'提取Excel内容到word', group:'跨组件', unavailable:'原版依赖 Excel COM；WPS 文字加载项尚未接入表格组件。' },
    { id:'excel-unprotect', name:'移除xls写保护', group:'跨组件', unavailable:'原版依赖 Excel COM 和工作表保护接口；WPS 文字加载项尚未接入表格组件。' }
];
function gwMacroById(id) {
    for (var i=0;i<GW_MACROS.length;i++) if (GW_MACROS[i].id===id) return GW_MACROS[i];
    throw new Error('未知脚本功能：'+id);
}
function gwMacroCanRun(item) {
    if (item.unavailable) return false;
    return item.access==='any' || (item.access==='read' ? hasDocument() : canEdit());
}
function gwMacroRun(id, input) {
    var item=gwMacroById(id), params={};
    if (!gwMacroCanRun(item)) throw new Error(item.unavailable || '请打开可编辑的文档后再执行。');
    (item.params || []).forEach(function(p){
        var value=input[p.key];
        if (p.type==='integer' || p.type==='number') {
            value=Number(value);
            if (input[p.key]==='' || !isFinite(value) || value<p.min || value>p.max || (p.type==='integer' && value%1!==0))
                throw new Error(p.label+'：请输入 '+p.min+'–'+p.max+' 范围内的'+(p.type==='integer'?'整数':'数字')+'。');
        }
        params[p.key]=value;
    });
    gwLog('info','script.start',{id:id,reference:GW_MACRO_REFERENCE});
    try {
        var work=function(){return gwStep('脚本 '+item.name,function(){return item.run(params);});};
        var result=item.undo ? withUndo(item.name,work) : work();
        if (result===false) { gwLog('info','script.cancel',{id:id}); return false; }
        gwMacroRemember(id);
        gwLog(result && result.partial?'warn':'info',result && result.partial?'script.partial':'script.success',{id:id});
        if(result && result.partial)gwWriteDiagnostics();
        return result || {message:'操作完成。'};
    } catch(e) { gwLogError('脚本 '+item.name,e); gwWriteDiagnostics(); throw e; }
}
function gwMacroHistory() {
    var raw;
    try { raw=gwHost('PluginStorage').getItem('gw_mika-script-history'); } catch(e) { }
    if (!raw) try { raw=gwHost('FileSystem').ReadFile(gwMacroHistoryPath()); } catch(e) { }
    try {
        var list=JSON.parse(raw || '[]');
        return Array.isArray(list) ? list.filter(function(id){return GW_MACROS.some(function(m){return m.id===id && !m.unavailable;});}).slice(0,10) : [];
    } catch(e) { return []; }
}
function gwMacroHistoryPath() { return String(gwHost('Env').GetHomePath()).replace(/[\\/]$/,'')+'/.gw_mika-script-history.json'; }
function gwMacroRemember(id) {
    var list=gwMacroHistory().filter(function(x){return x!==id;});list.unshift(id);
    var raw=JSON.stringify(list.slice(0,10));
    try { gwHost('PluginStorage').setItem('gw_mika-script-history',raw); } catch(e) { }
    try { if(gwHost('FileSystem').WriteFile(gwMacroHistoryPath(),raw)===false) throw new Error('写入失败'); }
    catch(e) { gwLogError('保存脚本历史',e); }
}
function gwNativeCommand(id) {
    return gwStep('CommandBars.ExecuteMso('+id+')',function(){app().CommandBars.ExecuteMso(id);});
}
function gwMacroSelection() {
    var r=sel().Range.Duplicate;
    if (r.Start===r.End) throw new Error('请先选择要处理的内容。');
    return r;
}
function gwMacroRange(r,start,end) { var part=r.Duplicate;part.SetRange(start,end);return part; }
function gwMacroText(r) { return String(r.Text || '').replace(/[\r\u0007]+$/,''); }
function gwMacroEach(collection,work) { var count=collection.Count;for(var i=1;i<=count;i++)work(collection.Item(i),i); }
function gwMacroChinese(n) {
    var digits='零一二三四五六七八九';
    if(n<10)return digits[n];
    if(n<100)return (n<20?'':digits[Math.floor(n/10)])+'十'+(n%10?digits[n%10]:'');
    if(n<10000) {
        var out='',zero=false;
        [1000,100,10,1].forEach(function(unit){var d=Math.floor(n/unit)%10;if(d){if(zero)out+='零';out+=digits[d]+(unit===1000?'千':unit===100?'百':unit===10?'十':'');zero=false;}else if(out)zero=true;});
        return out;
    }
    return String(n);
}
