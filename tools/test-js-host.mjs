import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { Script, createContext } from 'node:vm';
import { createRequire } from 'node:module';
import { fixture, story, collection } from './wps-host-fixture.mjs';

const require=createRequire(new URL('../wps-js/package.json',import.meta.url));
const {parseStringPromise}=require('xml2js');
const root=new URL('../wps-js/',import.meta.url);
const main=readFileSync(new URL('main.js',root),'utf8');
const sources=[...main.matchAll(/src='([^']+)'/g)].map(x=>x[1]);
const scripts=sources.map(p=>new Script(readFileSync(new URL(p,root),'utf8'),{filename:p}));
function context(f,layout=0) {
    const alerts=[];
    const windows=[()=>({wps:Object.assign(f.addin,{Application:f.application})}),
        ()=>({wps:Object.assign(f.addin,{WpsApplication:()=>f.application})}),
        ()=>({Application:Object.assign(f.addin,f.application)}),
        ()=>({wps:Object.assign(f.addin,{Application:()=>f.application})}),
        ()=>({wps:{WpsApplication:()=>f.application},Application:f.addin})];
    const window=Object.assign(windows[layout](),{confirm:()=>true,localStorage:{getItem(){},setItem(){}},open(){}});
    const c=createContext({window,document:{location:{href:'file:///C:/Test%20App/index.html'}},alert:m=>alerts.push(m)});
    for(const script of scripts) script.runInContext(c);
    return {c,alerts};
}
let checks=0;
function check(name,work){work();checks++;console.log('PASS:',name);}

check('all supported Application layouts and protected document guards',()=>{
    for(let i=0;i<5;i++) {
        const f=fixture(),{c,alerts}=context(f,i);
        assert.equal(c.doc(),f.document);
        assert.equal(c.OnAddinLoad({Invalidate(){}}),true);
        assert.equal(f.events.size,5);
        assert.equal(c.OnAction({Id:'btnBody'}),true);
        assert.equal(f.body.font.NameFarEast,'仿宋');assert.equal(f.body.font.Size,16);
        assert.equal(f.body.font.Bold,0);assert.equal(f.body.paragraphFormat.CharacterUnitFirstLineIndent,2);
        assert.equal(f.removes,1);
        f.document.ReadOnly=true;assert.equal(c.OnAction({Id:'btnBody'}),false);
        f.document.ReadOnly=false;f.document.ProtectionType=3;assert.equal(c.OnAction({Id:'btnBody'}),false);
        assert.equal(c.OnGetEnabled({Id:'btnProtect'}),true);
        f.application.Documents.Count=0;assert.equal(c.OnGetEnabled({Id:'btnBody'}),false);
        assert.equal(c.OnGetEnabled({Id:'btnAbout'}),true);
        assert.equal(alerts.length,2);
    }
});
check('uppercase collection API; A4 margins, landscape and grid disable',()=>{
    const f=fixture(),{c}=context(f);f.sections[1].PageSetup.Orientation=1;
    c.gwApplyPageSetup();
    for(const sec of f.sections){assert.equal(sec.PageSetup.TopMargin,37*72/25.4);assert.equal(sec.PageSetup.FooterDistance,24.7*72/25.4);}
    assert.equal(f.sections[0].PageSetup.CharsLine,28);assert.equal(f.sections[0].PageSetup.LinesPage,22);
    assert.equal(f.sections[1].PageSetup.PageWidth,297*72/25.4);
    assert.equal(f.styles[0].Font.NameFarEast,'仿宋');
    c.gwApplyPageSetup({...c.gwLoadSettings(),公文版式:false});
    assert.equal(f.sections[0].PageSetup.LayoutMode,0);
});
check('scoped replace edits selected text; ReplaceAll argument and original scope survive multiple passes',()=>{
    const f=fixture(),{c}=context(f);
    const outside=f.body.text.slice(6);c.gwDeleteSpaces();
    assert.equal(f.body.text,'甲A乙\r'+outside);
    assert.equal(f.body.searches.length,2);
    assert.equal(f.body.searches[1].start,0);
    assert.ok(f.body.searches[1].end>0);
    assert.equal(f.body.searches[0].args[10],2);
    f.selection.SetRange(0,0);c.window.confirm=()=>false;
    c.gwDeleteSpaces();assert.equal(f.body.searches.length,2);
});
check('heading starts 1–20 reuse templates and use the selected level',()=>{
    const f=fixture(),{c,alerts}=context(f);
    for(let level=1;level<=4;level++)for(let start=1;start<=20;start++) {
        assert.equal(c.OnAction({Id:`heading${level}_${start}`}),true);
        assert.equal(f.body.paragraphFormat.OutlineLevel,level);
        const t=f.templates.at(-1).ListLevels.Item(1);
        assert.equal(t.StartAt,start);
        assert.equal(t.NumberStyle,level<3?39:0);
    }
    assert.equal(f.templates.length,80);
    c.gwSetHeading(2,5);assert.equal(f.templates.length,80);assert.equal(alerts.length,0);
});
check('page numbers stay before footer paragraph; independent and first-page sections update',()=>{
    const f=fixture(),{c}=context(f);
    f.sections[2].PageSetup.DifferentFirstPageHeaderFooter=-1;
    c.gwPageNumber(0);
    assert.equal(f.sections[0].footers[0].story.text,'— 1 —\r');
    assert.equal(f.sections[1].footers[0].story.text,'\r');
    assert.equal(f.sections[2].footers[1].story.text,'— 1 —\r');
    c.gwPageNumber(0);assert.equal(f.sections[0].footers[0].story.fields.length,1);
    c.gwPageNumber(1);
    assert.equal(f.sections[0].footers[2].story.text,'— 1 —\r');
    assert.equal(f.sections[2].footers[2].story.paragraphFormat.Alignment,0);
    assert.equal(f.sections[2].footers[0].story.paragraphFormat.Alignment,2);
    assert.equal(f.sections[1].footers[2].story.text,'\r');
});
check('custom undo and screen/view state restore even when host work throws',()=>{
    const f=fixture(),{c}=context(f);f.application.ScreenUpdating=false;
    f.application.ActiveWindow.ActivePane.View.SeekView=9;
    assert.throws(()=>c.withUndo('故障',()=>{f.application.ActiveWindow.ActivePane.View.SeekView=0;throw Error('failure');}),/failure/);
    assert.equal(f.application.ScreenUpdating,false);assert.equal(f.application.ActiveWindow.ActivePane.View.SeekView,9);
    assert.equal(f.undo.at(-1)[0],'end');
    Object.defineProperty(f.application,'UndoRecord',{get(){throw Error('unsupported');}});
    let ran=false;c.withUndo('旧版',()=>{ran=true;});assert.equal(ran,true);
});
check('styles refresh existing definitions, not duplicate them',()=>{
    const f=fixture(),{c}=context(f);c.gwStyles();c.gwStyles();
    assert.equal(f.styles.length,8);assert.equal(f.templates.length,4);
    c.gwSaveSettings({字体:{正文:{name:'楷体',size:18,bold:true}}});c.gwStyles();
    assert.equal(f.styles.find(x=>x.NameLocal==='公文:正文').Font.NameFarEast,'楷体');
    assert.equal(f.styles.find(x=>x.NameLocal==='公文:正文').Font.Bold,-1);
});
check('Chinese configuration survives Latin-1 file reading, reopening and independent windows',()=>{
    const f=fixture(),{c}=context(f);c.gwSaveSettings({字体:{公文标题:{name:'方正小标宋简体',size:21.75}},上边距:40});
    assert.ok([...f.files.values()][0].every(x=>x<128));
    f.storage.clear();const second=context(f).c;
    assert.equal(second.gwLoadSettings().上边距,40);
    assert.equal(second.gwLoadSettings().字体.公文标题.name,'方正小标宋简体');
    second.gwSaveSettings({字体:{正文:{name:'宋体',size:14}}});assert.equal(c.gwLoadSettings().字体.正文.name,'宋体');
    assert.equal(c.gwNormalizeSettings({上边距:-1,字体:{正文:{name:'',size:0}}}).上边距,37);
});
check('empty paragraph cleanup preserves table, picture, field and final paragraph',()=>{
    const f=fixture(),{c}=context(f);
    const empty=story('\r').range(),table=story('\r').range(),image=story('\r').range(),field=story('\r').range(),last=story('\r').range();
    const all=[empty,table,image,field,last];let deleted=[];
    all.forEach((r,i)=>{r.Start=i*2;r.End=i*2+1;r.Delete=()=>deleted.push(i);});
    table.Tables={Count:1};image.InlineShapes={Count:1};
    Object.defineProperty(field,'Fields',{value:{Count:1}});
    Object.defineProperty(f.document,'Content',{get:()=>({Start:0,End:9,Duplicate:{Start:0,End:9,Paragraphs:collection(all.map(Range=>({Range})))}})});
    c.gwDeleteEmptyLines(false);assert.deepEqual(deleted,[0]);
});
check('font flags and paragraph pagination toggle in both directions',()=>{
    const f=fixture(),{c}=context(f);
    c.gwToggleFont('EmphasisMark');assert.equal(f.body.font.EmphasisMark,4);
    c.gwToggleFont('EmphasisMark');assert.equal(f.body.font.EmphasisMark,0);
    c.gwPageBreakBefore();assert.equal(f.body.paragraphFormat.PageBreakBefore,-1);
    c.gwPageBreakBefore();assert.equal(f.body.paragraphFormat.PageBreakBefore,0);
});
check('Ribbon uses official relative image paths; web and native asset paths remain distinct',()=>{
    const {c}=context(fixture());
    assert.equal(c.GetImage({Tag:'_1.png'}),'images/_1.png');
    assert.equal(c.assetUrl('images/_1.png'),'file:///C:/Test%20App/images/_1.png');
    assert.equal(c.gwNativeAsset('templates/head-single.docx'),'C:/Test App/templates/head-single.docx');
    c.document.location.href='file:///C:/Test%20App/ui/settings.html?page=fonts';
    assert.equal(c.GetUrlPath(),'file:///C:/Test%20App');
    c.document.location.href='http://127.0.0.1:5173/index.html';
    assert.equal(c.GetImage({Tag:'_1.png'}),'images/_1.png');
    assert.equal(c.assetUrl('images/_1.png'),'http://127.0.0.1:5173/images/_1.png');
});

check('all six settings/about dialogs use the add-in root, even with separate text APIs',()=>{
    for(let layout=0;layout<5;layout++) {
        const f=fixture(),{c,alerts}=context(f,layout);
        assert.equal(f.application.ShowDialog,undefined);
        const routes={btnPageSetup:'settings.html?page=page',btnLatinFont:'settings.html?page=latin',
            btnAdvancedSettings:'settings.html?page=fonts',btnProtect:'settings.html?page=protect',
            btnPassword:'settings.html?page=password',btnAbout:'about.html'};
        for(const [id,page] of Object.entries(routes)) {
            assert.equal(c.OnAction({Id:id}),true,id);
            assert.equal(f.dialogs.at(-1)[0],'file:///C:/Test%20App/ui/'+page);
            assert.equal(f.dialogs.at(-1)[4],true);
        }
        assert.deepEqual(alerts,[]);
    }
});
check('failed dialog reports button, stack, API capabilities and a readable exported log',()=>{
    const f=fixture(),{c,alerts}=context(f);
    f.addin.ShowDialog=()=>false;
    assert.equal(c.OnAction({Id:'btnPageSetup'}),false);
    assert.match(alerts[0],/btnPageSetup/);
    const raw=f.files.get('C:/Users/Test/.gw_mika-diagnostics.json');
    assert.ok(raw);assert.ok([...raw].every(x=>x<128));
    const report=JSON.parse(raw.toString('latin1'));
    assert.ok(report.entries.some(x=>x.detail.failedStep==='btnPageSetup'));
    assert.ok(report.entries.some(x=>x.detail.stack && x.detail.message.includes('未能打开')));
    assert.equal(report.environment.roots.textApplication.ShowDialog,'undefined');
    delete f.addin.ShowDialog;
    c.gwShowDiagnostics();assert.match(alerts.at(-1),/诊断日志已保存/);
    f.addin.FileSystem.WriteFile=()=>false;
    c.gwShowDiagnostics();assert.match(alerts.at(-1),/Alt\+F12/);
});
check('page setup failure names section/property and restores screen/undo; logs omit document text',()=>{
    const f=fixture(),{c}=context(f);
    Object.defineProperty(f.sections[1].PageSetup,'CharsLine',{set(){throw Error('host rejects grid');}});
    assert.throws(()=>c.gwApplyPageSetup(),e=>{
        assert.equal(e.gwStep,'Sections.Item(2).PageSetup.CharsLine');c.gwLogError('设置窗口 page',e);return true;
    });
    assert.equal(f.application.ScreenUpdating,true);assert.equal(f.undo.at(-1)[0],'end');
    const report=c.gwDiagnosticText();
    assert.ok(report.includes('Sections.Item(2).PageSetup.CharsLine'));
    assert.ok(!report.includes(f.body.text));assert.ok(!report.includes(f.document.Name));
    assert.ok(context(f).c.gwReadLog().some(x=>x.detail.failedStep==='Sections.Item(2).PageSetup.CharsLine'));
});
check('logs stay bounded and logging failures do not break formatting',()=>{
    const f=fixture(),{c}=context(f);
    for(let i=0;i<160;i++)c.gwLog('info','test',{index:i});
    assert.equal(c.gwReadLog().length,120);
    f.addin.PluginStorage={getItem(){throw Error('unsupported');},setItem(){throw Error('unsupported');}};
    f.addin.FileSystem={WriteFile(){throw Error('read-only');}};
    assert.equal(c.OnAction({Id:'btnBody'}),true);
    assert.equal(c.gwWriteDiagnostics().path,undefined);
});
check('PDF copy uses text FileDialog and root FileSystem; picker cancellation performs no export',()=>{
    const f=fixture(),{c}=context(f);let exports=[],selection=0;
    const target='C:/exports/output.pdf';
    f.application.FileDialog=function(kind){
        assert.equal(this,f.application);assert.equal(kind,2);
        return {Show:()=>selection,SelectedItems:collection([target])};
    };
    f.document.ExportAsFixedFormat=(...args)=>exports.push(args);
    assert.equal(c.OnAction({Id:'btnPDF'}),true);assert.equal(exports.length,0);
    selection=-1;assert.equal(c.OnAction({Id:'btnPDF'}),true);
    assert.deepEqual(exports,[[target,17,false]]);
    f.files.set(target,Buffer.from('existing'));
    c.window.confirm=()=>false;c.gwSaveCopy('pdf');assert.equal(exports.length,1);
});
check('DOC copy reopens the original; cancelled stamp picker does not insert a picture',()=>{
    const f=fixture(),{c}=context(f);const calls=[];
    f.application.FileDialog=kind=>({Show:()=>kind===2?-1:0,SelectedItems:collection(['C:/exports/copy.doc'])});
    f.document.SaveAs2=(...args)=>calls.push(['save',...args]);
    f.document.Close=n=>calls.push(['close',n]);
    f.application.Documents.Open=file=>{calls.push(['open',file]);return {Activate:()=>calls.push(['activate'])};};
    c.gwSaveCopy('doc');
    assert.deepEqual(calls,[['save','C:/exports/copy.doc',0],['open',f.document.FullName],['close',0],['activate']]);
    assert.equal(c.OnAction({Id:'btnStamp'}),true); // 未提供 AddPicture，取消后若误调用会失败。
});

const xml=await parseStringPromise(readFileSync(new URL('ribbon.xml',root),'utf8'));
const f=fixture(),{c}=context(f),ids=new Set();let buttons=0;
function walk(obj){
    if(!obj||typeof obj!=='object')return;
    if(obj.$){
        const a=obj.$;
        if(a.id){assert.ok(!ids.has(a.id),a.id);ids.add(a.id);}
        for(const key of ['onLoad','onAction','onChange','getEnabled','getImage','getText','getItemCount','getItemLabel'])
            if(a[key])assert.equal(typeof c[a[key]],'function',a[key]);
        if(a.getImage){assert.ok(existsSync(new URL('images/'+a.tag,root)),a.tag);assert.equal(readFileSync(new URL('images/'+a.tag,root)).subarray(0,8).toString('hex'),'89504e470d0a1a0a');}
        if(a.onAction){buttons++;assert.equal(a.getEnabled,'OnGetEnabled');assert.ok(c.GW_COMMANDS[a.id]||/^heading[1-4]_([1-9]|1[0-9]|20)$/.test(a.id)||/^symbol[0-9]+$/.test(a.id),a.id);}
    }
    for(const [k,v] of Object.entries(obj))if(k!=='$')if(Array.isArray(v))v.forEach(walk);else walk(v);
}
walk(xml);
for(const id of Object.keys(c.GW_COMMANDS))assert.ok(ids.has(id),'unreachable command '+id);
console.log(`PASS: ${buttons} button actions, callbacks and PNG assets; unique Ribbon IDs.`);
for(const name of readdirSync(new URL('js/',root)))if(name.endsWith('.js'))new Script(readFileSync(new URL('js/'+name,root),'utf8'));
new Script(readFileSync(new URL('ui/settings.js',root),'utf8'));
new Script(readFileSync(new URL('ui/diagnostics.js',root),'utf8'));
console.log(`PASS: ${checks} behavior groups; all runtime scripts parse.`);
