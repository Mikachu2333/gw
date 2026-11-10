// 为排版回归记录逐字字体与逐段格式；不模拟 WPS 的度量、分页或样式渲染。
import {story, collection} from './wps-host-fixture.mjs';

export function formattedStory(initial) {
    const base=story(initial),wrapped=new WeakSet();
    function paragraph(){return {OutlineLevel:10,Alignment:3,CharacterUnitFirstLineIndent:0,CharacterUnitRightIndent:0,border:{}};}
    let current=paragraph();
    let cells=[...initial].map(char=>{const cell={char,font:{Bold:0,Italic:0},para:current};if(char==='\r')current=paragraph();return cell;});
    function normalizeParagraphs() {
        const used=new Set();let next;
        for(const cell of cells) {
            if(!next) {
                next=used.has(cell.para)?{...cell.para,border:{...cell.para.border}}:cell.para;
                used.add(next);
            }
            cell.para=next;if(cell.char==='\r')next=null;
        }
    }
    function selected(r) {return cells.slice(r.Start,r.End===r.Start?r.Start+1:r.End);}
    function proxy(r,kind) {
        return new Proxy({}, {
            get(_,key) {
                const items=[...new Set(selected(r).map(c=>c[kind]))];
                if(key==='Borders')return {Item:()=>items[0].border};
                return items.every(p=>p[key]===items[0]?.[key])?items[0]?.[key]:9999999;
            },
            set(_,key,value) {
                for(const p of new Set(selected(r).map(c=>c[kind]))) {
                    p[key]=value;
                    if(kind==='font' && key==='Name')p.NameAscii=p.NameOther=p.NameFarEast=value;
                }
                return true;
            }
        });
    }
    function wrap(r) {
        if(wrapped.has(r))return r;wrapped.add(r);
        const text=Object.getOwnPropertyDescriptor(r,'Text');
        const duplicate=Object.getOwnPropertyDescriptor(r,'Duplicate');
        const paragraphs=Object.getOwnPropertyDescriptor(r,'Paragraphs');
        Object.defineProperty(r,'Text',{
            get(){return text.get.call(this);},
            set(value){
                const seed=cells[this.Start]||cells.at(-1),start=this.Start,end=this.End;
                const inserted=[...value].map(char=>({char,font:{...seed.font},para:seed.para}));
                cells.splice(start,end-start,...inserted);normalizeParagraphs();text.set.call(this,value);
            }
        });
        Object.defineProperty(r,'Duplicate',{get(){return wrap(duplicate.get.call(this));}});
        Object.defineProperty(r,'Paragraphs',{get(){
            const raw=paragraphs.get.call(this),items=[];
            for(let i=1;i<=raw.Count;i++)items.push({Range:wrap(raw.Item(i).Range)});
            return collection(items);
        }});
        Object.defineProperty(r,'Font',{get(){return proxy(this,'font');}});
        Object.defineProperty(r,'ParagraphFormat',{get(){return proxy(this,'para');}});
        Object.defineProperty(r,'Style',{
            get(){return selected(this)[0]?.para.Style??-1;},
            set(value){const p=this.ParagraphFormat;p.Style=value;p.OutlineLevel=value===-1?10:-value-1;}
        });
        return r;
    }
    return {range:(start=0,end=base.text.length)=>wrap(base.range(start,end)),get text(){return base.text;},
        fontAt:index=>({...cells[index].font}),paragraphAt:index=>({...cells[index].para})};
}
