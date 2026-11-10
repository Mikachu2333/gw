// JS 移植的行为回归；不连接 WPS，不启动打印机或执行原版 VBA。
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createContext,Script} from 'node:vm';
import {fixture,story,collection} from './wps-host-fixture.mjs';
const root=new URL('../wps-js/',import.meta.url);
const sources=[...readFileSync(new URL('main.js',root),'utf8').matchAll(/src='([^']+)'/g)].map(x=>x[1]);
function host(f=fixture()) {
    const alerts=[];
    f.addin.WpsApplication=()=>f.application;
    const window={wps:f.addin,confirm:()=>true,localStorage:{getItem(){},setItem(){}}};
    const c=createContext({window,document:{location:{href:'file:///C:/test/index.html'}},alert:x=>alerts.push(x)});
    for(const file of sources)new Script(readFileSync(new URL(file,root),'utf8'),{filename:file}).runInContext(c);
    return {f,c,alerts};
}
function textHost(text,start=0,end=text.length) {
    const {f,c}=host(),s=story(text);
    Object.defineProperty(f.document,'Content',{get:()=>s.range()});
    Object.defineProperty(f.document,'Paragraphs',{get:()=>s.range().Paragraphs});
    f.application.Selection={Range:s.range(start,end),get Paragraphs(){return this.Range.Paragraphs;}};
    f.document.Range=(a,b)=>s.range(a,b);
    return {f,c,s};
}
let checks=0;
function check(name,run){run();checks++;console.log('PASS:',name);}
check('font conversion handles independent ASCII/Other/FarEast slots without rewriting content or unrelated fonts',()=>{
    const {f,c}=host();
    const runs=[{text:'word 123',font:{NameAscii:'仿宋',NameOther:'仿宋',NameFarEast:'宋体',Size:18,Bold:-1}},
        {text:'中文 English',font:{NameAscii:'Times New Roman',NameOther:'Arial',NameFarEast:'仿宋',Size:16}},
        {text:'untouched',font:{NameAscii:'Arial',NameOther:'Arial',NameFarEast:'黑体',Size:12}}];
    const before=structuredClone(runs);let calls=0;
    Object.defineProperty(f.document,'Content',{get:()=>({Duplicate:{get Find(){
        const font={},replace={};
        return {Font:font,ClearFormatting(){},Replacement:{Font:replace,ClearFormatting(){}},Execute(...args){
            assert.equal(args[0],'');assert.equal(args[7],0);assert.equal(args[8],true);assert.equal(args[9],'^&');assert.equal(args[10],2);
            let matched=false;const key=Object.keys(font)[0];assert.equal(Object.keys(font).length,1);
            for(const r of runs)if(r.font[key]===font[key]){r.font[key]=replace[key];matched=true;}
            calls++;return matched;
        }};
    }}})});
    assert.equal(c.OnAction({Id:'fontFS'}),true);
    assert.equal(calls,3);assert.equal(runs[0].font.NameAscii,'仿宋_GB2312');assert.equal(runs[0].font.NameOther,'仿宋_GB2312');
    assert.equal(runs[1].font.NameFarEast,'仿宋_GB2312');assert.equal(runs[1].font.NameAscii,'Times New Roman');assert.equal(runs[1].font.NameOther,'Arial');
    assert.deepEqual(runs[2],before[2]);assert.deepEqual(runs.map(r=>r.text),before.map(r=>r.text));assert.equal(runs[0].font.Bold,-1);assert.equal(runs[0].font.Size,18);
    assert.equal(c.gwReadLog().filter(x=>x.event==='font.replace').length,3);
});
check('catalog maps every original script at 84d9734f5ce6 exactly once and marks unavailable integrations',()=>{
    const {c}=host();
    const files=execFileSync('git',['ls-tree','-rz','--name-only','84d9734f5ce6','--','VBA Script'],{encoding:'utf8'}).split('\0').filter(x=>x.endsWith('.vba')).map(x=>x.split('/').at(-1).slice(0,-4));
    assert.equal(files.length,42);assert.equal(c.GW_MACROS.length,43);
    assert.deepEqual(Array.from(c.GW_MACROS).filter(m=>!m.added).map(m=>m.name).sort(),files.sort());
    assert.equal(new Set(Array.from(c.GW_MACROS,m=>m.id)).size,43);
    assert.equal(c.GW_MACROS.filter(m=>m.unavailable).length,4);
    for(const m of c.GW_MACROS)assert.ok(m.unavailable || typeof m.run==='function');
    assert.equal(c.OnAction({Id:'btnScripts'}),true);
    assert.match(c.gwDiagnosticText(),/wps-api-20261110-5/);
});
check('renumbering changes only heading prefixes and preserves body references',()=>{
    const {c,s}=textHost('第九章 总则\r引用第九章不变\r第八条 内容\r第三章 附则\r第七条 其他\r');
    c.gwMacroRun('renumber-chapter',{});
    assert.equal(s.text,'第一章 总则\r引用第九章不变\r第一条 内容\r第二章 附则\r第二条 其他\r');
});
check('selected numbering preserves outside paragraphs and handles changing prefix lengths',()=>{
    const text='外部\r（九十九）甲\r（五）乙\r尾部\r';
    const {c,s}=textHost(text,3,text.indexOf('尾部'));
    c.gwMacroRun('renumber-cn',{});
    assert.equal(s.text,'外部\r（一）甲\r（二）乙\r尾部\r');
    const numbered='外部\r9. 甲\r无编号乙\r\r尾部\r';
    const other=textHost(numbered,3,numbered.indexOf('尾部'));
    other.c.gwMacroRun('renumber-arabic',{});
    assert.equal(other.s.text,'外部\r1. 甲\r2. 无编号乙\r\r尾部\r');
});
check('chapter spacing is idempotent and does not change citations',()=>{
    const {c,s}=textHost('  第十五条\t  内容\r引用第十五条  保留\r第2章概要\r');
    c.gwMacroRun('chapter-space',{});const once=s.text;c.gwMacroRun('chapter-space',{});
    assert.equal(once,'  第十五条 内容\r引用第十五条  保留\r第2章 概要\r');assert.equal(s.text,once);
});
check('RMB conversion keeps original wording with exact decimal rounding and rejects invalid values before editing',()=>{
    const {c}=host();
    for(const [value,expected] of [['0','零元零分'],['12.10','壹拾贰元壹角整'],['10.46','壹拾元肆角陆分'],['30800.25','叁万零捌佰元贰角伍分'],['-1.005','负壹元零壹分']])assert.equal(c.gwMacroRmbText(value),expected);
    assert.throws(()=>c.gwMacroRmbText('1000000000'),/数字过大/);assert.throws(()=>c.gwMacroRmbText('not money'),/有效数字/);
    const input=textHost('错误文本\r',0,4);assert.throws(()=>input.c.gwMacroRun('rmb',{}),/有效数字/);assert.equal(input.s.text,'错误文本\r');
});
check('script guards and numeric validation precede changes; only successful scripts enter persistent history',()=>{
    const {f,c}=host();
    assert.throws(()=>c.gwMacroRun('image-size',{width:-1,height:2}),/范围/);
    assert.throws(()=>c.gwMacroRun('names',{count:3.1}),/整数/);
    assert.equal(c.gwMacroHistory().length,0);
    f.document.ReadOnly=true;assert.throws(()=>c.gwMacroRun('chapter-space',{}),/可编辑/);
    assert.throws(()=>c.gwMacroRun('excel-import',{}),/Excel COM/);
    f.document.ReadOnly=false;c.gwMacroRun('chapter-space',{});
    f.storage.clear();assert.deepEqual(Array.from(c.gwMacroHistory()),['chapter-space']);
    c.gwSaveSettings({上边距:40});assert.deepEqual(Array.from(c.gwMacroHistory()),['chapter-space']);
});
check('picture resizing ignores equations/shapes and preserves the original width precedence',()=>{
    const {f,c}=host();
    const photo={Type:3,Width:10,Height:20},equation={Type:1,Width:10},floating={Type:13,Width:10},box={Type:17,Width:10};
    f.document.InlineShapes=collection([photo,equation]);f.document.Shapes=collection([floating,box]);
    c.gwMacroRun('image-size',{width:3,height:4});
    assert.equal(photo.Width,30*72/25.4);assert.equal(floating.Width,photo.Width);assert.equal(photo.Height,20);assert.equal(equation.Width,10);assert.equal(box.Width,10);
});
check('page ranges reject out-of-range requests and orientation inserts boundaries from the end',()=>{
    const {f,c}=host();let calls=[],orientation;
    const pageSetup={Orientation:0};
    const d={Content:{End:101},ComputeStatistics:()=>3,GoTo:(what,which,page)=>({Start:(page-1)*30}),
        Range:(start,end)=>({Start:start,End:end,PageSetup:pageSetup,InsertBreak:type=>calls.push([start,end,type])})};
    f.application.ActiveDocument=d;
    assert.throws(()=>c.gwMacroPageRange(d,4),/超出范围/);assert.equal(c.gwMacroPageRange(d,3).End,101);
    c.gwMacroOrientation({Start:30,End:60,PageSetup:{Orientation:0}});
    assert.deepEqual(calls,[[60,60,2],[30,30,2]]);assert.equal(pageSetup.Orientation,1);
});
check('batch PDF skips already open documents, does not overwrite, closes only its own documents and restores focus',()=>{
    const {f,c}=host();let closed=[],exports=[],activations=0;
    f.document.FullName='C:/docs/open.docx';f.document.Activate=()=>activations++;
    const files=['C:/docs/open.docx','C:/docs/a.docx','C:/docs/fail.docx'];
    f.application.Documents={Count:1,Item:()=>f.document,Open(path,confirm,readOnly,addRecent){
        assert.equal(readOnly,true);assert.equal(addRecent,false);
        if(path.includes('fail'))throw Error('cannot open');
        return {ExportAsFixedFormat:(...args)=>exports.push(args),Close:n=>closed.push([path,n])};
    }};
    f.application.FileDialog=()=>({Show:()=>-1,SelectedItems:collection(files)});
    f.files.set('C:/docs/a.pdf',Buffer.from('keep'));
    const result=c.gwMacroRun('batch-pdf',{});
    assert.equal(result.partial,true);assert.deepEqual(exports,[['C:/docs/a_1.pdf',17,false]]);
    assert.deepEqual(closed,[['C:/docs/a.docx',0]]);assert.equal(activations,1);assert.equal(f.files.get('C:/docs/a.pdf').toString(),'keep');
    assert.ok(c.gwReadLog().some(x=>x.event==='script.partial'));
});
check('batch conversion cancellation has no document or filesystem effects',()=>{
    const {f,c}=host();f.application.FileDialog=()=>({Show:()=>0});
    assert.equal(c.gwMacroRun('batch-pdf',{}),false);assert.equal(f.files.size,0);assert.equal(c.gwMacroHistory().length,0);
});
check('image export opens its own dialog; pinyin retains its native entry point',()=>{
    const {f,c}=host(),ids=[];f.application.CommandBars={ExecuteMso:id=>ids.push(id)};
    assert.equal(c.OnAction({Id:'btnSaveImages'}),true);c.gwMacroRun('pinyin',{});
    assert.deepEqual(ids,['AsianLayoutPhoneticGuide']);
    assert.match(f.dialogs[0][0],/ui\/export.html$/);
    assert.equal(c.OnAction({Id:'btnImagePDF'}),true);assert.match(f.dialogs[1][0],/format=pdf$/);
});
check('automatic-format recognition covers four heading forms and normalizes Chinese/fullwidth dates',()=>{
    const {c}=host();
    for(const [text,level] of [['十一、总则',1],['(十二)内容',2],['２３. 内容',3],['（20）内容',4]])assert.equal(c.gwMacroHeading(text).level,level);
    assert.equal(c.gwMacroHeading('普通正文'),null);
    assert.equal(c.gwMacroDate('二〇二六年十一月九日'),'2026年11月9日');
    assert.equal(c.gwMacroDate('２０２６年０１月０９日'),'2026年1月9日');
    assert.equal(c.gwMacroDate('2026年13月1日'),null);
});
check('saving a range preserves source layout and source focus; a failed output save remains open for recovery',()=>{
    const {f,c}=host(),calls=[];
    const setup={Orientation:1,PageWidth:842,PageHeight:595,TopMargin:20,BottomMargin:21,LeftMargin:22,RightMargin:23,HeaderDistance:10,FooterDistance:11,LayoutMode:1,CharsLine:28,LinesPage:22};
    const range={PageSetup:setup,Copy:()=>calls.push('copy')};
    const output={Content:{PasteAndFormat:n=>calls.push(['paste',n])},PageSetup:{},SaveAs2:(...a)=>calls.push(['save',...a]),Close:n=>calls.push(['close',n])};
    f.application.Documents.Add=()=>output;f.document.Activate=()=>calls.push('source.activate');
    c.gwMacroWriteRange(f.document,range,'C:/out/a.docx',false);
    assert.deepEqual(output.PageSetup,setup);
    assert.deepEqual(calls,['copy',['paste',16],['save','C:/out/a.docx',16],['close',0],'source.activate']);
    calls.length=0;output.SaveAs2=()=>{throw Error('disk full');};
    assert.throws(()=>c.gwMacroWriteRange(f.document,range,'C:/out/b.docx',false),/新文档已保留/);
    assert.ok(!calls.some(x=>Array.isArray(x)&&x[0]==='close'));assert.equal(calls.at(-1),'source.activate');
});
check('serial printing waits for each copy and restores the exact placeholder on printer failure',()=>{
    const {f,c}=host();let value='编号',printed=[],closed=0,backupText='';
    const range={Start:0,End:2,get Text(){return value;},set Text(v){value=v;this.End=v.length;},
        get FormattedText(){return {Text:value};},set FormattedText(v){this.Text=v.Text;}};
    f.application.Selection.Range={Duplicate:range};
    const backup={Content:{set FormattedText(v){backupText=v.Text+'\r';}},
        Range:(start,end)=>({FormattedText:{Text:backupText.slice(start,end)}}),Close:()=>closed++};
    f.application.Documents.Add=()=>backup;f.document.Activate=()=>{};
    f.document.PrintOut=(background,...args)=>{assert.equal(background,false);assert.equal(args[6],1);printed.push(value);if(printed.length===2)throw Error('printer offline');};
    assert.throws(()=>c.gwMacroRun('print-serial',{start:2,end:3}),/已发送 1 份/);
    assert.deepEqual(printed,['第02份','第03份']);assert.equal(value,'编号');assert.equal(closed,1);
    assert.equal(c.gwMacroHistory().length,0);
});
check('image PDF gives every picture its own paragraph anchor and does not overwrite an existing PDF',()=>{
    const {f,c}=host();let picks=0,text='\r',anchors=[],exports=[],closed=0;
    f.application.FileDialog=()=>({Show:()=>-1,SelectedItems:collection(++picks===1?['C:/1.png','C:/2.png']:['C:/out/images.pdf'])});
    const output={PageSetup:{},get Content(){return {End:text.length};},Range:(start,end)=>({Start:start,End:end,Font:{},ParagraphFormat:{},InsertBefore:s=>{text=text.slice(0,start)+s+text.slice(start);}}),
        Shapes:{AddPicture:(file,link,save,left,top,width,height,range)=>{anchors.push([file,range.Start,range.ParagraphFormat.PageBreakBefore]);return {WrapFormat:{}};}},
        ExportAsFixedFormat:(...a)=>exports.push(a),Close:()=>closed++};
    f.application.Documents.Add=()=>output;f.document.Activate=()=>{};
    f.files.set('C:/out/images.pdf',Buffer.from('keep'));
    c.gwMacroRun('image-pdf',{});
    assert.deepEqual(anchors,[['C:/1.png',0,undefined],['C:/2.png',1,-1]]);
    assert.deepEqual(exports,[['C:/out/images_1.pdf',17,false]]);assert.equal(closed,1);
});
for(const file of ['ui/scripts.js','ui/settings.js','ui/diagnostics.js'])new Script(readFileSync(new URL(file,root),'utf8'),{filename:file});
console.log(`PASS: ${checks} macro/font behavior groups; original VBA is never executed.`);
