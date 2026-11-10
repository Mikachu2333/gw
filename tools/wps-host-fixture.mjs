// 最小的大小写敏感 WPS 宿主。只模拟验证所需行为，不为未知接口自动生成空函数。
import assert from 'node:assert/strict';

export function collection(items) {
    return {
        get Count() { return items.length; },
        Item(index) {
            assert.ok(Number.isInteger(index) && index >= 1 && index <= items.length, `invalid Item(${index})`);
            return items[index - 1];
        }
    };
}

export function story(initial) {
    let text = initial;
    const ranges = [];
    const searches = [];
    const fields = [];
    const paragraphFormat = {};
    const font = {Bold:0,Italic:0};
    function replace(start, end, value) {
        const delta = value.length - (end - start);
        text = text.slice(0, start) + value + text.slice(end);
        for (const r of ranges) {
            if (r.Start > start) r.Start = r.Start >= end ? r.Start + delta : start;
            if (r.End > start) r.End = r.End >= end ? r.End + delta : start + value.length;
        }
    }
    function range(start = 0, end = text.length) {
        const r = {
            Start:start, End:end, StoryType:1, Font:font, ParagraphFormat:paragraphFormat,
            get Duplicate() { return range(this.Start, this.End); },
            get Text() { return text.slice(this.Start, this.End); },
            set Text(value) {
                const start = this.Start;
                replace(start, this.End, value);
                this.Start = start; this.End = start + value.length;
            },
            SetRange(start,end) { assert.ok(start >= 0 && end >= start && end <= text.length); this.Start=start;this.End=end; },
            Collapse(direction) { if (direction === 0) this.Start = this.End; else this.End = this.Start; },
            Delete() { this.Text = ''; },
            Select() {},
            Tables:collection([]), InlineShapes:collection([]), ShapeRange:collection([]), Hyperlinks:collection([]),
            get Fields() {
                return {
                    Count:fields.length,
                    Add(at,type,code) {
                        assert.equal(type,-1); assert.equal(code,'PAGE \\* Arabic');
                        assert.equal(at.Start,at.End); assert.ok(at.Start < text.length,'field must precede final paragraph');
                        fields.push(code); at.Text='1';
                    }
                };
            },
            get Find() {
                let replacementFont = {};
                return {
                    ClearFormatting() {}, Font:{},
                    Replacement:{ ClearFormatting() {}, Font:replacementFont },
                    Execute(...args) {
                        assert.equal(args.length,11,'Find.Execute must receive all positional arguments');
                        assert.equal(args[7],0,'scope must not wrap to full document');
                        assert.equal(args[10],2,'ReplaceAll must be the 11th argument');
                        assert.equal(typeof args[0],'string');
                        searches.push({args, start:r.Start, end:r.End});
                        if (!args[3] && !args[8]) {
                            const from = args[0] === '^w' ? /[ \t]+/g : args[0] === '^l' ? /\v/g : args[0];
                            const to = args[9] === '^p' ? '\r' : args[9];
                            r.Text = typeof from === 'string' ? r.Text.split(from).join(to) : r.Text.replace(from,to);
                        }
                        // Word Find 会重新定义它的搜索 Range，后续步骤必须取得原范围的 Duplicate。
                        r.SetRange(r.Start,r.Start);
                        return true;
                    }
                };
            },
            ListFormat: { RemoveNumbers() {}, ConvertNumbersToText() {}, ApplyListTemplate(template) { r.appliedTemplate=template; } },
            get Paragraphs() {
                const paragraphs=[];
                let pos=0;
                for (const match of text.matchAll(/[^\r]*\r|[^\r]+$/g)) {
                    const start=pos; pos+=match[0].length;
                    if (start < r.End && pos > r.Start) paragraphs.push({Range:range(start,pos)});
                }
                return collection(paragraphs);
            }
        };
        ranges.push(r);
        return r;
    }
    return {range, searches, fields, paragraphFormat, font, get text(){return text;}};
}

export function fixture() {
    const body=story('甲 A　乙\r正文\r');
    const selectionRange=body.range(0,6);
    let removes=0;
    selectionRange.ListFormat.RemoveNumbers=()=>removes++;
    const selection={
        Range:selectionRange, Font:body.font, ParagraphFormat:body.paragraphFormat,
        get Text(){return selectionRange.Text;},
        get Characters(){return {Count:selectionRange.End-selectionRange.Start};},
        get Paragraphs(){return selectionRange.Paragraphs;},
        TypeText(text){selectionRange.Text=text;selectionRange.Collapse(0);},
        Collapse(n){selectionRange.Collapse(n);},
        SetRange(s,e){selectionRange.SetRange(s,e);}
    };
    function footer(linked=false,content='\r') {
        const s=story(content);
        return {Exists:true, LinkToPrevious:linked, get Range(){return s.range();}, story:s};
    }
    function section(linked=false) {
        const footers=[footer(linked),footer(linked),footer(linked)];
        return {Range:body.range(),PageSetup:{Orientation:0,DifferentFirstPageHeaderFooter:0},Footers:collection(footers), footers};
    }
    const sections=[section(),section(true),section()];
    const normal={NameLocal:'正文',Font:{NameAscii:'Times New Roman',NameOther:'Times New Roman'},ParagraphFormat:{Alignment:3}};
    const styles=[normal],templates=[];
    const document={
        ReadOnly:false,ProtectionType:-1,Path:'C:/docs',Name:'文档.docx',FullName:'C:/docs/文档.docx',Saved:true,
        get Content(){return body.range();},get Paragraphs(){return body.range().Paragraphs;},
        Sections:collection(sections),Shapes:collection([]),
        Styles:{
            get Count(){return styles.length;},
            Item(i){if(i===-1)return normal;return collection(styles).Item(i);},
            Add(name){assert.ok(!styles.some(x=>x.NameLocal===name));const s={NameLocal:name,Font:{},ParagraphFormat:{},LinkToListTemplate(t){this.list=t;}};styles.push(s);return s;}
        },
        ListTemplates:{
            get Count(){return templates.length;},Item(i){return collection(templates).Item(i);},
            Add(){const t={ListLevels:collection([{}])};templates.push(t);return t;}
        }
    };
    const storage=new Map(),files=new Map(),events=new Map(),undo=[];
    const application={
        Documents:{Count:1},ActiveDocument:document,Selection:selection,ScreenUpdating:true,
        ActiveWindow:{ActivePane:{View:{SeekView:0}}},
        UndoRecord:{StartCustomRecord(label){undo.push(['start',label]);},EndCustomRecord(){undo.push(['end']);}},
        FontNames:collection(['仿宋','黑体','楷体','宋体','方正小标宋简体','Times New Roman']),
        Options:{AutoFormatAsYouTypeReplaceQuotes:false}
    };
    // 加载项根对象与文字对象明确分开：文字对象故意不提供 ShowDialog、存储和事件。
    const dialogs=[];
    const addin={
        ApiEvent:{AddApiEventListener(name,fn){
            assert.ok(['WindowSelectionChange','DocumentOpen','DocumentNew','WindowActivate','DocumentBeforeClose'].includes(name));
            events.set(name,fn);
        }},
        PluginStorage:{getItem:k=>storage.get(k),setItem:(k,v)=>storage.set(k,v)},
        Env:{GetHomePath:()=> 'C:/Users/Test'},
        FileSystem:{Exists:p=>files.has(p),WriteFile:(p,v)=>files.set(p,Buffer.from(v,'utf8')),ReadFile:p=>files.get(p).toString('latin1')},
        ShowDialog(...args){assert.equal(this,addin,'ShowDialog receiver must be the add-in root');dialogs.push(args);return true;},
        ribbonUI:{Invalidate(){}}
    };
    return {application,addin,dialogs,document,body,selection,sections,styles,templates,storage,files,events,undo, get removes(){return removes;}};
}
