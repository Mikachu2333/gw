// 公文页码：对应 src\Ribbon1.PageNumber.cs。页码形式是「— 1 —」（em dash U+2014 加空格），
// 字号取「页码」设置（宋体 14.25 磅 → FormatFontSize → 14 磅）。
// position: 0 居中 / 1 外侧（奇右偶左）/ 2 居右
function gwPageNumber(position) {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var d = doc();
    var label = position === 1 ? '插入外侧页码' : (position === 2 ? '插入右侧页码' : '插入居中页码');

    // 页脚内容只有在打印视图里才可靠可见，普通/大纲视图先切过去（C# 同处理）
    try {
        var vt = app().ActiveWindow.View.Type;
        if (vt === Wd.wdNormalView || vt === Wd.wdOutlineView) app().ActiveWindow.View.Type = Wd.wdPrintView;
    } catch (e) { /* 取不到视图类型时不影响页码本身 */ }

    if (position === 1) { gwPageNumberOutside(d, label); return; }
    withUndo(label, function () {
        gwPageNumberAligned(d, position === 2 ? Wd.wdAlignParagraphRight : Wd.wdAlignParagraphCenter);
    });
}

// 页脚已有内容就跳过：链接到前一节的页脚与上一节共用，逐节重复写会在同一份页脚里叠加多个页码。
// 段落标记、单元格标记、制表符与空白都不算「有内容」。
function gwTrimFooterText(text) {
    return String(text).replace(/[\r\n\t\u0007 \u3000]/g, '');
}

function gwAppendPageNumber(footer, alignment) {
    var r = footer.Range;
    var text = '';
    try { text = r.Text || ''; } catch (e) { return; }
    if (gwTrimFooterText(text).length > 0) return;
    if (r.Fields.Count > 0) return;

    gwApplyPageNumberFont(r);
    r.ParagraphFormat.Alignment = alignment;
    r.Text = '— ';
    r.Collapse(Wd.wdCollapseEnd);
    r.Fields.Add(r, Wd.wdFieldEmpty, 'PAGE \\* Arabic');

    // 域插入后必须重新取页脚 Range，否则再写尾部会把内容顶掉
    var r2 = footer.Range;
    r2.Collapse(Wd.wdCollapseEnd);
    r2.Text = ' —';
}

function gwApplyPageNumberFont(range) {
    var spec = gwLoadSettings().字体.页码;
    var f = range.Font;
    f.Size = Math.round(formatFontSize(spec.size) * 10) / 10;
    f.Name = spec.name;
    f.Bold = 0;
    f.Italic = 0;
}

function gwFooterHasContent(d) {
    for (var i = 1; i <= d.Sections.Count; i++) {
        var fts = d.Sections.item(i).Footers;
        var idx = [Wd.wdHeaderFooterPrimary, Wd.wdHeaderFooterEvenPages];
        for (var j = 0; j < idx.length; j++) {
            try {
                if (gwTrimFooterText(fts.Item(idx[j]).Range.Text).length > 0) return true;
            } catch (e) { /* 取不到就当作空 */ }
        }
    }
    return false;
}

// 居中/居右：关掉奇偶页，只写第 1 节和断开链接的节；开了「首页不同」时补写首页页脚。
function gwPageNumberAligned(d, alignment) {
    for (var i = 1; i <= d.Sections.Count; i++) {
        var sec = d.Sections.item(i);
        var ps = sec.PageSetup;
        ps.OddAndEvenPagesHeaderFooter = 0;
        var fts = sec.Footers;
        try { fts.Item(Wd.wdHeaderFooterPrimary).Range.ParagraphFormat.Alignment = alignment; } catch (e) { }
        try { fts.Item(Wd.wdHeaderFooterEvenPages).Range.ParagraphFormat.Alignment = alignment; } catch (e) { }
        try { fts.Item(Wd.wdHeaderFooterFirstPage).Range.ParagraphFormat.Alignment = alignment; } catch (e) { }

        var primary = fts.Item(Wd.wdHeaderFooterPrimary);
        var linked = false;
        try { linked = !!primary.LinkToPrevious; } catch (e) { }
        if (i === 1 || !linked) gwAppendPageNumber(primary, alignment);
        if (ps.DifferentFirstPageHeaderFooter !== 0) {
            gwAppendPageNumber(fts.Item(Wd.wdHeaderFooterFirstPage), alignment);
        }
    }
}

// 外侧页码：奇偶页必须开启，所以整页脚会被改写，动手前先问一次。
// 本加载项只跑在 WPS 上，因此固定用 C# 版 IsWps 那一支（SeekView + Selection.Fields）。
function gwPageNumberOutside(d, label) {
    try {
        if (app().ActiveWindow.Panes.Item(1).Pages.Count <= 1) {
            alert('文档仅为1页时,无法设置外侧页码.'); return;
        }
    } catch (e) { /* 取不到页数就继续，后面的写入会自己报错 */ }
    if (gwFooterHasContent(d)) {
        if (!window.confirm('外侧页码会整段替换页脚内容，是否继续？')) return;
    }
    withUndo(label, function () {
        d.PageSetup.OddAndEvenPagesHeaderFooter = -1;
        var view = app().ActiveWindow.ActivePane.View;
        try {
            view.SeekView = Wd.wdSeekPrimaryFooter;
            var s = sel();
            s.ParagraphFormat.CharacterUnitRightIndent = 1;
            s.ParagraphFormat.Alignment = Wd.wdAlignParagraphRight;
            gwInsertPageNumberField();
            view.SeekView = Wd.wdSeekEvenPagesFooter;
            var s2 = sel();
            s2.ParagraphFormat.CharacterUnitFirstLineIndent = 1;
            s2.ParagraphFormat.Alignment = Wd.wdAlignParagraphLeft;
            gwInsertPageNumberField();
        } finally {
            try { view.SeekView = Wd.wdSeekMainDocument; } catch (e) { }
        }
    });
}

function gwInsertPageNumberField() {
    var s = sel();
    gwApplyPageNumberFont(s.Font ? s : s.Range);
    s.TypeText('— ');
    s.Fields.Add(s.Range, Wd.wdFieldEmpty, 'PAGE \* Arabic');
    s.Collapse(Wd.wdCollapseEnd);
    s.TypeText(' —');
}
