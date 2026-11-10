// 84d9734f5ce6 格式回归：用具体输入/结果验证审查发现，不连接真实 WPS 或打印机。
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {createContext,Script} from 'node:vm';
import {fixture,story,collection} from './wps-host-fixture.mjs';
import {formattedStory} from './wps-format-fixture.mjs';

const root=new URL('../wps-js/',import.meta.url);
const sources=[...readFileSync(new URL('main.js',root),'utf8').matchAll(/src='([^']+)'/g)].map(m=>m[1]);
const reference=process.env.GW_PARITY_REF;
const scripts=sources.map(file=>new Script(reference
    ?execFileSync('git',['show',reference+':wps-js/'+file],{encoding:'utf8'})
    :readFileSync(new URL(file,root),'utf8'),{filename:file}));
function host() {
    const f=fixture(),alerts=[];f.addin.WpsApplication=()=>f.application;
    const c=createContext({window:{wps:f.addin,confirm:()=>true,localStorage:{getItem(){},setItem(){}}},
        document:{location:{href:'file:///C:/test/index.html'}},alert:t=>alerts.push(t)});
    for(const script of scripts)script.runInContext(c);
    return {f,c,alerts};
}
function textHost(text,start=0,end=text.length,formatted=false) {
    const h=host(),s=formatted?formattedStory(text):story(text),r=s.range(start,end);
    Object.defineProperty(h.f.document,'Content',{get:()=>s.range()});
    Object.defineProperty(h.f.document,'Paragraphs',{get:()=>s.range().Paragraphs});
    h.f.document.Range=(a,b)=>s.range(a,b);
    h.f.application.Selection={Range:r,Font:r.Font,ParagraphFormat:r.ParagraphFormat,get Text(){return r.Text;},TypeText(t){r.Text=t;},get Paragraphs(){return r.Paragraphs;}};
    return {...h,s};
}
function autoHost(text,pages=3) {
    const h=textHost(text,0,0,true);
    h.f.document.Tables=collection([]);h.f.document.ComputeStatistics=()=>pages;
    for(const section of h.f.sections) {
        section.Headers=collection([{Range:{ParagraphFormat:{Borders:{Item:()=>({})}}}}]);
        section.footers.forEach(footer=>footer.PageNumbers={RestartNumberingAtSection:true,StartingNumber:7});
    }
    return h;
}
let passed=0,failed=0;
function check(name,work){try{work();passed++;console.log('PASS:',name);}catch(e){failed++;console.error('FAIL:',name,'\n'+e.stack);}}
function near(actual,expected){assert.ok(Math.abs(actual-expected)<0.00001,`${actual} != ${expected}`);}

check('F01: delete-empty-lines honors selection, confirmation and cancellation',()=>{
    const text='外部\r\r选区\r\r末尾\r',h=textHost(text,4,8);
    assert.equal(h.c.OnAction({Id:'btnDelEmptyLine'}),true);
    assert.equal(h.s.text,'外部\r\r选区\r末尾\r');
    const no=textHost(text,0,0);no.c.window.confirm=()=>false;
    no.c.OnAction({Id:'btnDelEmptyLine'});assert.equal(no.s.text,text);assert.equal(no.f.undo.length,0);
    no.c.window.confirm=()=>true;no.c.OnAction({Id:'btnDelEmptyLine'});assert.equal(no.s.text,'外部\r选区\r末尾\r');
});
check('F02: preset font buttons preserve emphasis; body retains the two-character indent feature',()=>{
    for(const id of ['btnBody','btnMainTitle','btnHeading1','btnHeading2','btnHeading3','btnHeading4','btnHead','btnName','btnFoot']) {
        const {f,c}=host();f.body.font.Bold=-1;f.body.font.Italic=-1;
        assert.equal(c.OnAction({Id:id}),true);
        assert.equal(f.body.font.Bold,-1,id);assert.equal(f.body.font.Italic,-1,id);
        if(id==='btnBody'){assert.equal(f.body.paragraphFormat.CharacterUnitFirstLineIndent,2);assert.equal(f.removes,1);}
    }
    const {f,c}=host();c.gwSaveSettings({字体:{正文:{name:'仿宋',size:15.75,bold:true,italic:true}}});
    c.gwSetBody();assert.equal(f.body.font.Bold,-1);assert.equal(f.body.font.Italic,-1);
});
check('F03: outside page numbers indent inwards, cover first-page footers and skip linked footers',()=>{
    const {f,c}=host();f.sections[2].PageSetup.DifferentFirstPageHeaderFooter=-1;
    c.gwPageNumber(1);
    for(const index of [0,2]) {
        assert.equal(f.sections[index].footers[0].story.paragraphFormat.CharacterUnitRightIndent,1);
        assert.equal(f.sections[index].footers[2].story.paragraphFormat.CharacterUnitFirstLineIndent,1);
    }
    assert.equal(f.sections[2].footers[1].story.paragraphFormat.CharacterUnitRightIndent,1);
    assert.equal(f.sections[1].footers[0].story.text,'\r');
});
check('F04: circled numbering creates a reusable automatic list without replacing selected text',()=>{
    const {f,c,s}=textHost('3\r后文\r',0,1);c.gwCircleNumber();
    assert.equal(s.text,'3\r后文\r');
    const list=f.application.Selection.Range.appliedTemplate.ListLevels.Item(1);
    assert.equal(list.NumberStyle,18);assert.equal(list.NumberFormat,'%1');assert.equal(list.StartAt,3);
    c.gwCircleNumber();assert.equal(f.templates.length,1);
});
check('F05: styles follow Normal western font/alignment and refresh old polluted definitions',()=>{
    const {f,c}=host();f.styles[0].Font.NameAscii='Calibri';f.styles[0].Font.NameOther='Arial';
    c.gwStyles();
    let body=f.styles.find(s=>s.NameLocal==='公文:正文');
    assert.equal(body.BaseStyle,-1);assert.equal(body.Font.NameAscii,'Calibri');assert.equal(body.ParagraphFormat.Alignment,3);
    body.Font.NameAscii='仿宋';body.ParagraphFormat.Alignment=0;body.Font.Bold=-1;
    c.gwStyles();assert.equal(body.Font.NameAscii,'Calibri');assert.equal(body.Font.NameOther,'Arial');assert.equal(body.Font.Bold,0);
    assert.equal(body.Font.NameFarEast,'仿宋');assert.equal(body.ParagraphFormat.Alignment,3);assert.equal(f.styles.length,8);
    assert.equal(f.styles.find(s=>s.NameLocal==='公文:正文(缩进)').ParagraphFormat.CharacterUnitFirstLineIndent,2);
    assert.equal(f.styles.find(s=>s.NameLocal==='公文:标题').ParagraphFormat.Alignment,1);
});

function columns(widths,spaces,equal=0) {
    let items=widths.map((Width,i)=>({Width,SpaceAfter:spaces[i]}));
    return {get Count(){return items.length;},Item:i=>items[i-1],EvenlySpaced:equal,LineBetween:-1,FlowDirection:1,Spacing:spaces[0],
        SetCount(n){items=Array.from({length:n},()=>({Width:100,SpaceAfter:0}));}};
}
function setup(landscape=false) {
    return {Orientation:landscape?1:0,PageWidth:landscape?842:595,PageHeight:landscape?595:842,
        TopMargin:50,BottomMargin:51,LeftMargin:52,RightMargin:53,HeaderDistance:20,FooterDistance:21,LayoutMode:0,
        Gutter:20,GutterPos:0,MirrorMargins:-1,VerticalAlignment:1,SectionStart:2,
        DifferentFirstPageHeaderFooter:-1,OddAndEvenPagesHeaderFooter:-1,
        TextColumns:columns([160,240],[20,0]),LineNumbering:{RestartMode:2,StartingNumber:5,DistanceFromText:10,CountBy:5,Active:-1}};
}
function rangeExport(layouts,outputCount=layouts.length,end=12,remove=false) {
    const h=host(),copies=[],saved=[];let activated=0,closed=0;
    const range={Start:1,End:end,PageSetup:layouts.length===1?layouts[0]:{Orientation:9999999},
        get Duplicate(){return {Start:this.Start,End:this.End,SetRange:this.SetRange,Copy:this.Copy};},SetRange(a,b){this.Start=a;this.End=b;},Copy(){copies.push([this.Start,this.End]);}};
    Object.defineProperty(h.f.document,'Content',{get:()=>({End:20})});
    h.f.document.Sections=collection(layouts.map((PageSetup,i)=>({PageSetup,Range:{Start:i*8,End:(i+1)*8}})));
    const targets=Array.from({length:outputCount},()=>({PageSetup:{TextColumns:columns([400],[0],-1),LineNumbering:{}}}));
    // 文档级 PageSetup 的写入会作用于全部节，不能把它模拟成一个无关联对象。
    const globalSetup=new Proxy({}, {get:(_,key)=>targets[0].PageSetup[key],set(_,key,value){targets.forEach(s=>s.PageSetup[key]=value);return true;}});
    const output={Content:{PasteAndFormat(){},get Duplicate(){return story('\r').range();}},PageSetup:globalSetup,Sections:collection(targets),
        SaveAs2:(...args)=>saved.push(args),Close(){closed++;}};
    h.f.application.Documents.Add=()=>output;h.f.document.Activate=()=>activated++;
    return {...h,copies,saved,targets,output,range,run:()=>h.c.gwMacroWriteRange(h.f.document,range,'C:/out/result.docx',remove),
        get activated(){return activated;},get closed(){return closed;}};
}
check('F06: range export preserves two independent page setups, unequal columns and line numbering',()=>{
    const original=[setup(),setup(true)],h=rangeExport(original);h.run();
    assert.equal(h.targets[0].PageSetup.PageWidth,595);assert.equal(h.targets[1].PageSetup.PageWidth,842);
    for(let i=0;i<2;i++) {
        const actual=h.targets[i].PageSetup;
        assert.equal(actual.Gutter,20);assert.equal(actual.MirrorMargins,-1);assert.equal(actual.VerticalAlignment,1);
        assert.equal(actual.TextColumns.Count,2);assert.equal(actual.TextColumns.Item(2).Width,240);
        assert.equal(actual.TextColumns.Item(1).SpaceAfter,20);assert.equal(actual.TextColumns.EvenlySpaced,0);
        assert.equal(actual.LineNumbering.StartingNumber,5);assert.equal(actual.LineNumbering.Active,-1);
    }
    assert.equal(h.saved.length,1);assert.equal(h.closed,1);assert.equal(h.activated,1);
    assert.equal(original[1].TextColumns.Item(2).Width,240);
});
check('F06: terminal section marker is excluded; equal columns and zero-valued options survive',()=>{
    const spec=setup();spec.TextColumns=columns([200,200],[18,18],-1);spec.Gutter=0;spec.MirrorMargins=0;
    const h=rangeExport([spec],1,8,true);h.run();
    assert.deepEqual(h.copies,[[1,7]]);assert.equal(h.targets[0].PageSetup.TextColumns.Spacing,18);
    assert.equal(h.targets[0].PageSetup.TextColumns.EvenlySpaced,-1);assert.equal(h.targets[0].PageSetup.MirrorMargins,0);
});
check('F06: mismatched pasted sections or rejected page properties never save a flattened result',()=>{
    const h=rangeExport([setup(),setup(true)],1);
    assert.throws(h.run,/节数/);assert.equal(h.saved.length,0);assert.equal(h.closed,0);assert.equal(h.activated,1);
    const failure=rangeExport([setup()],1,6);
    Object.defineProperty(failure.targets[0].PageSetup,'Gutter',{set(){throw Error('unsupported gutter');}});
    assert.throws(failure.run,/unsupported gutter/);assert.equal(failure.saved.length,0);assert.equal(failure.closed,0);assert.equal(failure.activated,1);
});
check('F06: header coordinates use their own page setup, not overlapping body sections',()=>{
    const h=rangeExport([setup(),setup()],1),header=setup(true);
    h.range.StoryType=7;h.range.PageSetup=header;h.run();
    assert.equal(h.targets[0].PageSetup.Orientation,1);assert.equal(h.targets[0].PageSetup.PageWidth,842);
    assert.equal(h.targets[0].PageSetup.TextColumns.Count,2);
    assert.deepEqual(h.copies,[[1,12]]);
});
check('F07: selected title keeps periods and versions in the suggested file name',()=>{
    const {f,c}=textHost('关于方案v1.2的通知\r',0,12);let initial;
    f.application.FileDialog=()=>({set InitialFileName(v){initial=v;},Show:()=>0});
    c.gwMacroSaveName();assert.equal(initial,'关于方案v1.2的通知.docx');
});
check('F08: automatic 2026 page numbers continue across all sections including linked footers',()=>{
    const h=autoHost('通知\r正文。\r');
    h.f.sections[2].PageSetup.DifferentFirstPageHeaderFooter=-1;h.f.sections[2].PageSetup.OddAndEvenPagesHeaderFooter=-1;
    h.f.sections[2].footers[1].Range.Text='旧首页\r';h.f.sections[2].footers[2].Range.Text='旧偶数页\r';
    h.c.gwMacroAutoFormat(true);
    for(const section of h.f.sections)assert.equal(section.footers[0].PageNumbers.RestartNumberingAtSection,false);
    assert.equal(h.f.sections[2].footers[1].story.text,'— 1 —\r');assert.equal(h.f.sections[2].footers[2].story.text,'— 1 —\r');
    assert.equal(h.f.sections[0].footers[0].PageNumbers.StartingNumber,1);
});
check('F08: fewer than three pages clear independent first/even footers',()=>{
    const h=autoHost('通知\r正文。\r',2),section=h.f.sections[2];
    section.PageSetup.DifferentFirstPageHeaderFooter=-1;section.PageSetup.OddAndEvenPagesHeaderFooter=-1;
    section.footers[1].Range.Text='旧首页\r';section.footers[2].Range.Text='旧偶数\r';
    h.c.gwMacroAutoFormat(true);
    assert.equal(section.footers[1].Range.Text.trim(),'');assert.equal(section.footers[2].Range.Text.trim(),'');
});
check('F09: classic and 2026 signatures use their own original positions and three blank paragraphs',()=>{
    for(const modern of [false,true]) {
        const h=autoHost('通知\r正文。\r某某机关\r2026年11月10日\r');h.c.gwMacroAutoFormat(modern);
        assert.equal(h.s.text,'通知\r正文。\r\r\r\r某某机关\r2026年11月10日\r');
        const at=h.s.text.indexOf('某某机关'),date=h.s.text.indexOf('2026年');
        near(h.s.paragraphAt(at).CharacterUnitFirstLineIndent,modern?16:11.22);
        near(h.s.paragraphAt(date).CharacterUnitRightIndent,5.9);
        assert.equal(h.s.paragraphAt(at).Alignment,3);assert.equal(h.s.fontAt(at).Bold,modern?-1:0);
        assert.equal(h.s.fontAt(at).Spacing,modern?0:3);
    }
});
check('F09: classic short/long names and one/two-digit dates retain their separate rules',()=>{
    const short=autoHost('通知\r正文。\r张三\r2026年1月9日\r');short.c.gwMacroAutoFormat(false);
    assert.ok(short.s.text.includes('张  三'));near(short.s.paragraphAt(short.s.text.indexOf('张')).CharacterUnitFirstLineIndent,17.02);
    const name='某'.repeat(18),long=autoHost('通知\r正文。\r'+name+'\r2026年1月10日\r');long.c.gwMacroAutoFormat(false);
    near(long.s.paragraphAt(long.s.text.indexOf(name)).CharacterUnitFirstLineIndent,7.72);
    near(long.s.paragraphAt(long.s.text.indexOf('2026')).CharacterUnitRightIndent,7);
});
check('F10: half-point ties round to even, with the original 10.5-point exception',()=>{
    const {c}=host();
    assert.deepEqual([10.5,12.5,13.5,14.5,16.5,15.75,21.75,14.25].map(c.formatFontSize),[10.5,12,14,14,16,16,22,14]);
});
check('F11: non-target emphasis and mixed hidden text become enabled instead of cleared',()=>{
    const {f,c}=host();f.body.font.EmphasisMark=1;c.gwToggleFont('EmphasisMark');assert.equal(f.body.font.EmphasisMark,4);
    c.gwToggleFont('EmphasisMark');assert.equal(f.body.font.EmphasisMark,0);
    f.body.font.Hidden=9999999;c.gwToggleFont('Hidden');assert.equal(f.body.font.Hidden,-1);
    c.gwToggleFont('Hidden');assert.equal(f.body.font.Hidden,0);
});
check('F12: a one-character body after a heading delimiter is normal without changing the heading',()=>{
    for(const text of ['一、标题：甲','一、标题:甲','一、标题。甲']) {
        const h=autoHost('通知\r正文。\r'+text+'\r');h.c.gwMacroAutoFormat(true);
        const heading=h.s.text.indexOf('一、'),body=h.s.text.indexOf('甲');
        assert.equal(h.s.fontAt(heading).NameFarEast,'黑体');assert.equal(h.s.fontAt(heading).Bold,-1);
        assert.equal(h.s.fontAt(body).NameFarEast,'仿宋');assert.equal(h.s.fontAt(body).Bold,0);
    }
});
console.log(`${passed} passed; ${failed} failed${reference?' against '+reference:''}.`);
if(failed)process.exitCode=1;
