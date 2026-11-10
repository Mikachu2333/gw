// 自动排版的可移植主流程。原版按屏幕行宽挤排和复杂附件布局仍需人工核对。
function gwMacroDate(text) {
    var s=String(text).replace(/[\s　]/g,'').replace(/[０-９]/g,function(c){return String(c.charCodeAt(0)-65296);});
    var m=/^([2二][0-9一二三四五六七八九零〇○OoＯｏ]{3})[年./-]([0-9一二三四五六七八九十]{1,3})[月./-](?:([0-9一二三四五六七八九十]{1,3})日?)?$/.exec(s);
    if(!m)return null;
    var digits='零一二三四五六七八九';
    function number(v){if(/^\d+$/.test(v))return Number(v);var at=v.indexOf('十');if(at>=0)return (at?digits.indexOf(v[0]):1)*10+(v[at+1]?digits.indexOf(v[at+1]):0);return digits.indexOf(v);}
    var year=m[1].replace(/[一二三四五六七八九零〇○OoＯｏ]/g,function(c){var n=digits.indexOf(c);return String(n<0?0:n);});
    var month=number(m[2]),day=m[3]?number(m[3]):1;
    if(month<1 || month>12 || day<1 || day>31)return null;
    return year+'年'+month+'月'+day+'日';
}
function gwMacroHeading(text) {
    var chinese='一二三四五六七八九十百千零〇○Oo0０Ｏｏ';
    var patterns=[new RegExp('^['+chinese+']+、[ \\t　]*'),new RegExp('^[（(]['+chinese+']+[）)][ \\t　]*'),/^[0-9０-９]+[、.．][ \t　]*/,/^[（(][0-9０-９]+[）)][ \t　]*/];
    for(var i=0;i<patterns.length;i++){var m=patterns[i].exec(text);if(m)return {level:i+1,length:m[0].length};}
    return null;
}
// 自动排版的落款与独立“公文落款”脚本不同，分别保留两个原版的字数表。
function gwMacroSignatureLayout(name,date,modern,size) {
    var parts=/年(\d+)月(\d+)日/.exec(date),wide=(parts[1].length===2?1:0)+(parts[2].length===2?1:0);
    var count=name.length,first,right=modern || size===16?5.9:7,spacing=0;
    if(modern) {
        var positions=[17.43,16.93,16.4,15.92,15.44,14.96,14.26,13.65,13.12,12.55,12.07,11.6,11.06,10.5,9.56];
        first=positions[Math.max(2,Math.min(count,16))-2]-(wide===2?0.4:wide===1?0.15:0);
    } else {
        var offsets=size===16?[1.2,1.6,6.5,4.15,2.7,3.35,7.45,6.45,5,5.5,6.1,6.6,7.2,7.7,8.25,9.25,10.25,11.25,12.25,13.25,14.25,15.25,16.25,17.25]
            :[1.2,1.7,7.85,4.85,2.75,3.35,8.55,7.15,5.15,5.65,6.25,6.75,7.15,7.75,8.35,8.4,9.3,10.45,11.35,12.45,13.45,14.45,15.45,16.45];
        // 原版超过数组范围会出错；使用其最长署名规则，保留完整姓名。
        first=(size===16?18.22:20.7)-wide*0.25-offsets[Math.max(2,Math.min(count,25))-2];
        if(count>=17)right=[6.5,7,7.85,8.52,9.2,9.88,10.55,11.22,12][Math.min(count,25)-17];
        if(count===9 || count===5)spacing=1;
        else if(count===8)spacing=2;
        else if(count===4)spacing=3;
    }
    return {first:first,right:right,spacing:spacing};
}
function gwMacroFormatInscriptions(d,modern) {
    var pairs=[];
    for(var i=2;i<=d.Paragraphs.Count;i++) {
        var date=d.Paragraphs.Item(i).Range,signature=d.Paragraphs.Item(i-1).Range;
        var dateText=gwMacroDate(gwMacroText(date));
        if(!dateText || date.Tables.Count || signature.Tables.Count || date.Font.Size===22 || date.Font.Size===18 || signature.Font.Size===22)continue;
        if(modern && signature.ParagraphFormat.OutlineLevel!==10)continue;
        var name=gwMacroText(signature).trim();
        var valid=name && !/[。：；，、！？…—.:;,!?]$/.test(name) && !gwMacroHeading(name) && (!modern || /^[\u4e00-\ufa29]/.test(name));
        pairs.push({date:date.Duplicate,signature:signature.Duplicate,name:name,text:dateText,valid:valid});
        if(!modern)break; // 经典脚本只排第一个有效日期落款。
    }
    // 从后向前插入留白，前面落款的定位不受后面文本变化影响。
    for(var j=pairs.length-1;j>=0;j--) {
        var pair=pairs[j],date=pair.date,pf=date.ParagraphFormat,size=Number(date.Font.Size);
        pf.Alignment=2;pf.CharacterUnitFirstLineIndent=0;pf.CharacterUnitRightIndent=modern || size===16?5.9:7;
        date.Font.Bold=modern?-1:0;
        if(!pair.valid){d.Range(date.Start,date.Start).Text='\r';continue;}
        var layout=gwMacroSignatureLayout(pair.name,pair.text,modern,size),start=pair.signature.Start,name=pair.name;
        if(!modern && name.length===2)name=name[0]+'  '+name[1];
        else if(!modern && name.length===3)name=name.split('').join(' ');
        var textRange=gwMacroRange(pair.signature,start,start+gwMacroText(pair.signature).length);
        if(textRange.Text!==name)textRange.Text=name;
        d.Range(start,start).Text='\r\r\r';
        var nameRange=d.Range(start+3,start+3+name.length+1),nameFormat=nameRange.ParagraphFormat;
        nameFormat.Alignment=3;nameFormat.CharacterUnitLeftIndent=0;nameFormat.CharacterUnitRightIndent=0;
        nameFormat.CharacterUnitFirstLineIndent=layout.first;
        nameRange.Font.Bold=modern?-1:0;nameRange.Font.Spacing=layout.spacing;
        date.ParagraphFormat.CharacterUnitRightIndent=layout.right;
    }
}
function gwMacroAutoPageNumbers(d,modern) {
    var pages=d.ComputeStatistics(2);
    gwMacroEach(d.Sections,function(section,index){
        if(index===1) {
            section.PageSetup.DifferentFirstPageHeaderFooter=false;section.PageSetup.OddAndEvenPagesHeaderFooter=false;
            section.Headers.Item(1).Range.ParagraphFormat.Borders.Item(-3).LineStyle=0;
        }
        var types=[1];
        if(section.PageSetup.DifferentFirstPageHeaderFooter)types.push(2);
        if(section.PageSetup.OddAndEvenPagesHeaderFooter)types.push(3);
        types.forEach(function(type){
            var footer=section.Footers.Item(type);
            // 页码重启是各节的设置，即使页脚链接到前节也必须单独取消。
            if(modern) {
                footer.PageNumbers.NumberStyle=0;
                if(index===1)footer.PageNumbers.StartingNumber=1;
                footer.PageNumbers.RestartNumberingAtSection=false;
            }
            if(index>1 && footer.LinkToPrevious)return;
            if(pages>=3){gwAppendPageNumber(footer,1,true);footer.Range.Font.Name='宋体';footer.Range.Font.Size=14;}
            else {
                var clear=footer.Range.Duplicate;
                clear.SetRange(clear.Start,Math.max(clear.Start,clear.End-1));clear.Text='';
            }
        });
    });
}
function gwMacroAutoFormat(modern) {
    if(!window.confirm('将按原版主流程重排全文：解除正文域、编号转文字、重排标题和日期，并重建页脚。建议先保存副本。是否继续？'))return false;
    var d=doc();gwCheckFont('方正小标宋简体');
    gwMacroEach(d.Sections,function(section){
        var p=section.PageSetup,portrait=p.Orientation===0;
        p.TopMargin=cmToPoints(portrait || modern?2.54:2.5);p.BottomMargin=p.TopMargin;
        p.LeftMargin=cmToPoints(portrait?3.17:2.54);p.RightMargin=p.LeftMargin;
        p.PageWidth=cmToPoints(portrait?21:29.7);p.PageHeight=cmToPoints(portrait?29.7:21);
        p.HeaderDistance=cmToPoints(1.5);p.FooterDistance=cmToPoints(modern?1.5:1.75);
    });
    if(d.Content.Fields.Count)d.Content.Fields.Unlink();
    d.Content.ListFormat.ConvertNumbersToText();
    wordReplace(false,'^l','^p',d.Content);
    wordReplace(true,'([、.．）)])([ 　^s^t]{1,})','\\1',d.Content);
    wordReplace(false,'附表','附件',d.Content);
    gwMacroEach(d.Tables,function(t){t.Rows.WrapAroundText=false;t.Rows.Alignment=1;});
    // 从后向前移除纯空行，保留表格、图片和文档终止段落。
    for(var i=d.Paragraphs.Count-1;i>=1;i--) {
        var empty=d.Paragraphs.Item(i).Range;
        if(!gwMacroText(empty).trim() && !empty.Tables.Count && !empty.InlineShapes.Count && !empty.Fields.Count) {
            var shapes=0;try{shapes=empty.ShapeRange.Count;}catch(e){}
            if(!shapes)empty.Delete();
        }
    }
    var counts=[0,0,0,0],edits=[],titleRanges=[],titleOpen=true,first=true;
    gwMacroEach(d.Paragraphs,function(paragraph){
        var r=paragraph.Range,t=gwMacroText(r);
        if(r.Tables.Count){titleOpen=false;return;}
        var heading=gwMacroHeading(t),date=gwMacroDate(t);
        // 主标题从开头的连续短段取得，遇正文标点、序言、层级标题或表格即停止。
        if(titleOpen && !first && (heading || date || /[。：；，！？….:;,!?]/.test(t) || /^序.?言/.test(t) || /^第[一1]/.test(t) || (!modern && titleRanges.length>=3)))titleOpen=false;
        if(titleOpen)titleRanges.push(r.Duplicate);
        first=false;
        r.Style=-1;r.Font.Name='仿宋';r.Font.Size=16;r.Font.Bold=0;r.Font.Italic=0;r.Font.Color=-16777216;r.Font.Kerning=0;r.Font.DisableCharacterSpaceGrid=true;
        var pf=r.ParagraphFormat;pf.OutlineLevel=10;pf.SpaceAfter=0;pf.LineSpacing=18;pf.Alignment=3;pf.CharacterUnitFirstLineIndent=2;
        pf.KeepWithNext=false;pf.KeepTogether=false;pf.AutoAdjustRightIndent=false;pf.DisableLineHeightGrid=true;
        if(/^附件/.test(t)){counts=[0,0,0,0];pf.CharacterUnitFirstLineIndent=0;}
        if(heading && !titleOpen) {
            var index=heading.level-1;counts[index]++;for(var j=index+1;j<4;j++)counts[j]=0;
            var n=counts[index],label=index===0?gwMacroChinese(n)+'、':index===1?'（'+gwMacroChinese(n)+'）':index===2?n+'．':'（'+n+'）';
            edits.push({range:gwMacroRange(r,r.Start,r.Start+heading.length),text:label});
            r.Style=-3-index;r.ParagraphFormat.OutlineLevel=heading.level+1;
            r.Font.NameFarEast=index===0?'黑体':index===1?'楷体':modern?'宋体':'仿宋';
            r.Font.NameAscii=index===0?'Arial':'Times New Roman';r.Font.Size=16;r.Font.Bold=-1;
            pf.SpaceBefore=13;pf.SpaceAfter=13;
            var colon=t.indexOf('：');if(colon<0)colon=t.indexOf(':');
            var stop=colon>=0?colon+1:(/[。！？]/.exec(t)||{}).index;
            if(colon<0 && stop!==undefined)stop++;
            if(stop!==undefined && stop<t.length) {
                var body=gwMacroRange(r,r.Start+stop,r.End);body.Font.Name='仿宋';body.Font.Bold=0;
            }
        }
        if(date && !titleOpen)edits.push({range:gwMacroRange(r,r.Start,r.Start+t.length),text:date});
    });
    for(var n=edits.length-1;n>=0;n--)edits[n].range.Text=edits[n].text;
    titleRanges.forEach(function(r){
        r.Style=-2;r.Font.Name='方正小标宋简体';r.Font.Size=22;r.Font.Bold=0;
        var pf=r.ParagraphFormat;pf.Alignment=1;pf.CharacterUnitFirstLineIndent=0;pf.SpaceBefore=0;pf.SpaceAfter=0;pf.LineSpacingRule=0;
        r.ParagraphFormat.Borders.Item(-3).LineStyle=0;
    });
    gwMacroFormatInscriptions(d,modern);
    gwMacroAutoPageNumbers(d,modern);
    d.Content.Font.Color=-16777216;
    return {message:'已完成自动排版主流程。请核对标题换行、表格前后段落、多落款和附件布局；这些细节尚未与原版完全等价。'};
}
