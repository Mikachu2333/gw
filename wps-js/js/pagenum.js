// 页脚区域包含最后的段落标记，插入域和尾线时始终在它前面定位。
function gwTrimFooterText(text) { return String(text || '').replace(/[\r\n\t\u0007 \u3000]/g, ''); }
function gwFooterHasContent(d) {
    for (var i = 1; i <= d.Sections.Count; i++) {
        var fs = d.Sections.Item(i).Footers;
        for (var k = 1; k <= 3; k++) {
            var f = fs.Item(k);
            if (f.Exists && (gwTrimFooterText(f.Range.Text) || f.Range.Fields.Count)) return true;
        }
    }
    return false;
}
function gwApplyPageNumberFont(range) { setRangeFont(range, gwLoadSettings().字体.页码); }
function gwAppendPageNumber(footer, alignment, replace) {
    var r = footer.Range;
    if (!replace && (gwTrimFooterText(r.Text) || r.Fields.Count)) return false;
    // 保留页脚末尾段落标记，使用 Range.SetRange 保证定位属于同一个故事。
    var body = r.Duplicate;
    body.SetRange(r.Start, Math.max(r.Start, r.End - 1));
    body.Text = '—  —';
    var at = footer.Range.Duplicate;
    at.SetRange(footer.Range.Start + 2, footer.Range.Start + 2);
    at.Fields.Add(at, Wd.wdFieldEmpty, 'PAGE \\* Arabic', true);
    gwApplyPageNumberFont(footer.Range);
    var pf = footer.Range.ParagraphFormat;
    pf.Alignment = alignment;
    pf.CharacterUnitFirstLineIndent = 0;
    pf.CharacterUnitLeftIndent = 0;
    pf.CharacterUnitRightIndent = 0;
    return true;
}
function gwPageNumber(position) {
    if (position === 1 && gwFooterHasContent(doc()) && !window.confirm('外侧页码会替换各节独立页脚内容，是否继续？')) return;
    withUndo('插入公文页码', function () {
        var d = doc(), written = 0;
        for (var i = 1; i <= d.Sections.Count; i++) {
            var sec = d.Sections.Item(i);
            sec.PageSetup.OddAndEvenPagesHeaderFooter = position === 1 ? -1 : 0;
            var indices = position === 1 ? [1, 3] : [1];
            if (sec.PageSetup.DifferentFirstPageHeaderFooter) indices.push(2);
            for (var j = 0; j < indices.length; j++) {
                var index = indices[j], footer = sec.Footers.Item(index);
                if (i > 1 && footer.LinkToPrevious) continue;
                var alignment = position === 0 ? 1 : (position === 1 && index === 3 ? 0 : 2);
                if (gwAppendPageNumber(footer, alignment, position === 1)) written++;
                else footer.Range.ParagraphFormat.Alignment = alignment;
            }
        }
        status(written ? '已设置公文页码。' : '页脚已有内容，已保留；外侧页码可确认后替换。');
    });
}
function gwInsertPageNumberField() {
    withUndo('光标处插入页码', function () {
        gwApplyPageNumberFont(sel().Range);
        sel().TypeText('— ');
        sel().Fields.Add(sel().Range, Wd.wdFieldEmpty, 'PAGE \\* Arabic', true);
        sel().Collapse(Wd.wdCollapseEnd);
        sel().TypeText(' —');
    });
}
