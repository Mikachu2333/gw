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
        var pf=r.ParagraphFormat;pf.SpaceAfter=0;pf.LineSpacing=18;pf.Alignment=3;pf.CharacterUnitFirstLineIndent=2;
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
            if(stop!==undefined && stop+1<t.length) {
                if(colon<0)stop++;
                var body=gwMacroRange(r,r.Start+stop,r.End);body.Font.Name='仿宋';body.Font.Bold=0;
            }
        }
        if(date && !titleOpen){edits.push({range:gwMacroRange(r,r.Start,r.Start+t.length),text:date});pf.Alignment=2;pf.CharacterUnitFirstLineIndent=0;pf.CharacterUnitRightIndent=5.9;r.Font.Bold=-1;}
    });
    for(var n=edits.length-1;n>=0;n--)edits[n].range.Text=edits[n].text;
    titleRanges.forEach(function(r){
        r.Style=-2;r.Font.Name='方正小标宋简体';r.Font.Size=22;r.Font.Bold=0;
        var pf=r.ParagraphFormat;pf.Alignment=1;pf.CharacterUnitFirstLineIndent=0;pf.SpaceBefore=0;pf.SpaceAfter=0;pf.LineSpacingRule=0;
        r.ParagraphFormat.Borders.Item(-3).LineStyle=0;
    });
    // 日期上一段的署名按原版居中估算，正文中的日期引用不参与。
    for(var k=2;k<=d.Paragraphs.Count;k++) {
        var dateRange=d.Paragraphs.Item(k).Range,signature=d.Paragraphs.Item(k-1).Range;
        if(!gwMacroDate(gwMacroText(dateRange)) || signature.Font.Size===22)continue;
        var sig=gwMacroText(signature).trim();if(!sig || /[。：；，、！？]/.test(sig) || gwMacroHeading(sig))continue;
        signature.ParagraphFormat.Alignment=2;signature.ParagraphFormat.CharacterUnitFirstLineIndent=0;
        signature.ParagraphFormat.RightIndent=cmToPoints(2+(gwMacroText(dateRange).length-sig.length)*0.75/2);signature.Font.Bold=-1;
    }
    var pages=d.ComputeStatistics(2);
    gwMacroEach(d.Sections,function(section,index){
        if(index===1){section.PageSetup.DifferentFirstPageHeaderFooter=false;section.PageSetup.OddAndEvenPagesHeaderFooter=false;section.Headers.Item(1).Range.ParagraphFormat.Borders.Item(-3).LineStyle=0;}
        var footer=section.Footers.Item(1);if(index>1 && footer.LinkToPrevious)return;
        footer.Range.Text='';
        if(pages>=3){gwAppendPageNumber(footer,1,true);footer.Range.Font.Name='宋体';footer.Range.Font.Size=14;}
    });
    d.Content.Font.Color=-16777216;
    return {message:'已完成自动排版主流程。请核对标题换行、表格前后段落、多落款和附件布局；这些细节尚未与原版完全等价。'};
}
