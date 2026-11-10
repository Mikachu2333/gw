// 文字类脚本来自小恐龙原版 84d9734f5ce6，保留未匹配文本、域和图片的格式。
function gwMacroBold(wholeLine) {
    var count=0;
    gwMacroEach(doc().Paragraphs,function(p){
        var r=p.Range, re=/第[0-9一二三四五六七八九十]+[章条]/g,m;
        while((m=re.exec(gwMacroText(r)))) {
            (wholeLine?r:gwMacroRange(r,r.Start+m.index,r.Start+m.index+m[0].length)).Font.Bold=-1;
            count++;if(wholeLine)break;
        }
    });
    return {message:'已加粗 '+count+' 处。'};
}
function gwMacroCenterChapter() {
    var count=0;
    gwMacroEach(doc().Paragraphs,function(p){
        var t=gwMacroText(p.Range),pos=t.indexOf('章');
        if(t.charAt(0)!=='第' || pos<1 || pos>4)return;
        var f=p.Range.ParagraphFormat;
        ['LeftIndent','RightIndent','FirstLineIndent','CharacterUnitLeftIndent','CharacterUnitFirstLineIndent'].forEach(function(k){f[k]=0;});
        f.Alignment=1;p.Range.Font.Bold=-1;count++;
    });
    return {message:'已调整 '+count+' 个章标题。'};
}
function gwMacroChapterSpace() {
    var count=0,paras=doc().Paragraphs;
    for(var i=paras.Count;i>=1;i--) {
        var r=paras.Item(i).Range,m=/^( *)(第[零一二三四五六七八九十百千\d]+[条章])([ \t]*)/.exec(gwMacroText(r));
        if(m) { gwMacroRange(r,r.Start,r.Start+m[0].length).Text=m[1]+m[2]+' ';count++; }
    }
    return {message:'已调整 '+count+' 个章条编号后的空格。'};
}
function gwMacroRenumberChapters() {
    var edits=[],counts={章:0,条:0};
    gwMacroEach(doc().Paragraphs,function(p){
        var r=p.Range,m=/^第[0-9一二三四五六七八九十]+([章条])/.exec(gwMacroText(r));
        if(m)edits.push({range:gwMacroRange(r,r.Start,r.Start+m[0].length),text:'第'+gwMacroChinese(++counts[m[1]])+m[1]});
    });
    for(var i=edits.length-1;i>=0;i--)edits[i].range.Text=edits[i].text;
    return {message:'已整理 '+counts.章+' 章、'+counts.条+' 条。正文引用不改动。'};
}
function gwMacroRenumber(arabic) {
    var scope=gwMacroSelection(),edits=[],n=0;
    gwMacroEach(scope.Paragraphs,function(p){
        var r=p.Range,t=gwMacroText(r);
        // 选区边缘未完整选择的段落不改，避免扩大处理范围。
        if(r.Start<scope.Start || r.End-1>scope.End || !t.trim())return;
        var m=arabic?/^\s*\d+[.、]\s*/.exec(t):/（[一二三四五六七八九十]+）/.exec(t);
        if(!arabic && !m)return;
        n++;
        edits.push({range:gwMacroRange(r,r.Start+(m?m.index:0),r.Start+(m?m.index+m[0].length:0)),
            text:arabic?n+'. ':'（'+gwMacroChinese(n)+'）'});
    });
    for(var i=edits.length-1;i>=0;i--)edits[i].range.Text=edits[i].text;
    return {message:'已重新编号 '+n+' 项。'};
}
function gwMacroNames(params) {
    var r=gwMacroSelection(),size=Number(r.Font.Size);
    if(!isFinite(size) || size<=0 || size>200)throw new Error('所选姓名字号不一致，请先统一字号。');
    wordReplace(false,' ','^p',r);
    r.FitTextWidth=params.count*size;
}
// 大写金额字符规则沿用原脚本（qilei2010 原作、小恐龙修改），十进制取分替代浮点乘法。
function gwMacroRmbText(input) {
    var m=/^([+-]?)(\d+)(?:\.(\d*))?$/.exec(String(input).trim());
    if(!m)throw new Error('请选择一个有效数字，例如 1234.56。');
    var whole=m[2].replace(/^0+(?=\d)/,''),fraction=m[3] || '';
    if(whole.length>9)throw new Error('数字过大，最大支持 999999999.99。');
    // 使用十进制字符串取分，避免 1.005 等值的浮点乘法误差。
    var cents=Number(whole)*100+Number((fraction+'00').slice(0,2))+(Number(fraction.charAt(2))>=5?1:0);
    if(cents>99999999999)throw new Error('数字过大，最大支持 999999999.99。');
    if(!cents)return '零元零分';
    var positions='分角元拾佰仟万拾佰仟亿拾佰仟万',zero='整零元零零零万零零零亿零零零万',digits='壹贰叁肆伍陆柒捌玖';
    var reversed=String(cents).split('').reverse(),out='';
    reversed.forEach(function(c,i){out=(c==='0'?zero[i]:digits[Number(c)-1]+positions[i])+out;});
    while(/零[零元万亿整]/.test(out))out=out.replace(/零([零元万亿整])/g,'$1');
    return (m[1]==='-'?'负':'')+out.replace(/亿万/g,'亿');
}
function gwMacroRmb() { var r=gwMacroSelection(),text=gwMacroRmbText(r.Text);r.Text=text; }
function gwMacroSignature() {
    var paragraphs=sel().Paragraphs,first=paragraphs.Item(1),second;
    if(paragraphs.Count>=2)second=paragraphs.Item(2);
    else {
        for(var i=1;i<doc().Paragraphs.Count;i++)if(doc().Paragraphs.Item(i).Range.Start===first.Range.Start){second=doc().Paragraphs.Item(i+1);break;}
    }
    if(!second)throw new Error('请同时选中署名和日期两段，或将光标置于署名段。');
    var a=gwMacroText(first.Range).trim(),b=gwMacroText(second.Range).trim();
    if(!a || !b)throw new Error('署名和日期不能为空。');
    second.Range.ParagraphFormat.Alignment=2;second.Range.ParagraphFormat.RightIndent=cmToPoints(2);
    first.Range.ParagraphFormat.Alignment=2;
    first.Range.ParagraphFormat.RightIndent=cmToPoints(2+(b.length-a.length)*0.75/2);
}
function gwMacroTextBoxes() {
    var shapes;
    try { shapes=sel().ShapeRange; } catch(e) { throw new Error('请先选中一个或多个文本框。'); }
    if(!shapes || !shapes.Count)throw new Error('请先选中文本框。');
    var count=0;
    for(var i=shapes.Count;i>=1;i--) {
        var shape=shapes.Item(i);if(shape.Type!==17)continue;
        var anchor=shape.Anchor.Duplicate;anchor.Collapse(0);
        anchor.FormattedText=shape.TextFrame.TextRange.FormattedText;shape.Delete();count++;
    }
    if(!count)throw new Error('所选形状中没有文本框。');
    return {message:'已转换 '+count+' 个文本框。'};
}
function gwMacroHandwriting() {
    var names=['李国夫手写体','华阳手写','恐龙手写2'],fonts=gwFontNames(),missing=names.filter(function(n){return fonts.indexOf(n)<0;});
    if(missing.length)throw new Error('请先安装字体：'+missing.join('、'));
    var sizes=[16,18,20,17,19];
    gwMacroEach(doc().Content.Characters,function(c){
        c.Font.Name=names[Math.floor(Math.random()*names.length)];
        c.Font.Size=sizes[Math.floor(Math.random()*sizes.length)];c.Font.Position=Math.floor(Math.random()*3)+1;c.Font.Spacing=0;
    });
}
function gwMacroClearHeaders() {
    gwMacroEach(doc().Sections,function(section,index){
        ['Headers','Footers'].forEach(function(kind){
            for(var i=1;i<=3;i++) {
                var h=section[kind].Item(i);
                if(h.Exists && (index===1 || !h.LinkToPrevious)) {
                    h.Range.Text='';h.Range.ParagraphFormat.Borders.Item(-3).LineStyle=0;
                }
            }
        });
    });
}
function gwMacroPictures(work) {
    var count=0;
    gwMacroEach(doc().InlineShapes,function(pic){if(pic.Type===3 || pic.Type===4){work(pic,true);count++;}});
    gwMacroEach(doc().Shapes,function(pic){if(pic.Type===13 || pic.Type===11){work(pic,false);count++;}});
    return count;
}
function gwMacroPictureBorders() {
    var count=gwMacroPictures(function(pic,inline){
        if(inline){pic.Borders.OutsideLineStyle=1;pic.Borders.OutsideColor=-16777216;pic.Borders.OutsideLineWidth=2;}
        else {pic.Line.Visible=-1;pic.Line.Weight=0.25;}
    });
    return {message:'已为 '+count+' 张图片添加边框。'};
}
function gwMacroPictureSize(p) {
    if(!p.width && !p.height)throw new Error('请至少填写宽度或高度。');
    var count=gwMacroPictures(function(pic){if(p.width>0)pic.Width=cmToPoints(p.width);else pic.Height=cmToPoints(p.height);});
    return {message:'已调整 '+count+' 张图片。'};
}
function gwMacroStampPages() {
    var files=gwMacroPick(3,'选择公章图片',false,'图片','*.png;*.gif;*.jpg;*.jpeg');if(!files)return false;
    var count=0;
    gwMacroEach(doc().Sections,function(section,index){
        var types=[1];
        if(section.PageSetup.DifferentFirstPageHeaderFooter)types.push(2);
        if(section.PageSetup.OddAndEvenPagesHeaderFooter)types.push(3);
        types.forEach(function(type){
            var header=section.Headers.Item(type);if(index>1 && header.LinkToPrevious)return;
            var shape=header.Shapes.AddPicture(files[0],false,true);
            shape.LockAspectRatio=-1;shape.Width=cmToPoints(3);shape.Height=cmToPoints(3);shape.WrapFormat.Type=5;shape.Left=350;shape.Top=500;count++;
        });
    });
    return {message:'已在 '+count+' 个独立页眉添加印章。'};
}
function gwMacroPageRange(d,page) {
    var total=d.ComputeStatistics(2);
    if(page<1 || page>total)throw new Error('页码超出范围，当前文档共 '+total+' 页。');
    var start=d.GoTo(1,1,page).Start,end=page<total?d.GoTo(1,1,page+1).Start:d.Content.End;
    return d.Range(start,end);
}
function gwMacroOrientation(range) {
    if(!ensureMainView())return false;
    var d=doc(),start=range.Start,end=Math.min(range.End,d.Content.End-1),orientation=range.PageSetup.Orientation===0?1:0;
    if(start>=end)throw new Error('选区没有可转换的内容。');
    // 先插入尾部分节符，随后插入头部分节符，防止前面的插入使尾偏移失效。
    if(end<d.Content.End-1)d.Range(end,end).InsertBreak(2);
    if(start>0){d.Range(start,start).InsertBreak(2);start++;end++;}
    d.Range(start,end).PageSetup.Orientation=orientation;
}
function gwMacroMultiplication() {
    var lines=['乘法口诀表'];
    for(var j=1;j<=9;j++){var cells=[];for(var i=1;i<=j;i++)cells.push(i+' × '+j+' = '+i*j);lines.push(cells.join('　'));}
    var r=sel().Range.Duplicate;r.Text=lines.join('\r')+'\r';
    r.Font.NameAscii='Times New Roman';r.Font.Size=15;r.Font.Bold=-1;
    var title=r.Paragraphs.Item(1).Range;title.Style=-2;title.Underline=3;title.ParagraphFormat.SpaceBefore=0;title.ParagraphFormat.SpaceAfter=0;
    doc().PageSetup.Orientation=1;doc().PageSetup.PageWidth=cmToPoints(29.7);doc().PageSetup.PageHeight=cmToPoints(21);
}
function gwMacroNameplates() {
    var d=doc(),names=[];
    if(d.Tables.Count>1)throw new Error('仅支持一张单列表格或每行一个姓名。');
    if(d.Tables.Count===1){var old=d.Tables.Item(1);if(old.Columns.Count!==1)throw new Error('请使用单列表格。');gwMacroEach(old.Rows,function(row){names.push(gwMacroText(row.Range).replace(/[\r\u0007\s　]/g,''));});}
    else names=String(d.Content.Text).split(/[\r\v]/).map(function(s){return s.replace(/[\s　]/g,'');});
    names=names.filter(function(n){return n.length>0;});if(!names.length)throw new Error('没有找到姓名。');
    d.Content.Text='\r';d.PageSetup.Orientation=1;d.PageSetup.PageWidth=cmToPoints(29.7);d.PageSetup.PageHeight=cmToPoints(21);
    var table=d.Tables.Add(d.Range(0,0),names.length,2);table.AutoFitBehavior(2);
    names.forEach(function(n,i){if(n.length===2)n=n[0]+'  '+n[1];for(var col=1;col<=2;col++){var cell=table.Cell(i+1,col);cell.Range.Text=n;cell.Range.Orientation=col===1?3:2;}});
    table.Rows.HeightRule=2;table.Rows.Height=cmToPoints(14.6);table.Rows.AllowBreakAcrossPages=false;
    table.Range.Cells.VerticalAlignment=1;table.Range.ParagraphFormat.Alignment=1;table.Range.Font.NameFarEast='黑体';table.Range.Font.Size=72;table.Range.Font.Bold=-1;
    var last=d.Paragraphs.Item(d.Paragraphs.Count).Range;last.Font.Size=1;last.ParagraphFormat.LineSpacingRule=4;last.ParagraphFormat.LineSpacing=1;
}
