// 页面设置：对应 C# 版 frmPaperSetup.cs 的 SetGWPage()，逐节应用，作用于整篇文档。
// 与 C# 保持一致的两点：一是单位（设置里存毫米，写入时 CentimetersToPoints(v/10)）；
// 二是"公文版式"勾选时 Normal 样式的字号被硬写成 16 磅，而不是取正文配置的 15.75 取整。
function gwApplyPageSetup() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var s = gwLoadSettings();
    var d = doc();
    withUndo('公文页面设置', function () {
        var normal = d.Styles.item(-1);          // wdStyleNormal
        normal.Font.NameFarEast = s.字体.正文.name;
        if (s.英文字体) normal.Font.Name = s.英文字体;
        if (s.公文版式) normal.Font.Size = 16;

        var top = mmToPoints(s.上边距), bottom = mmToPoints(s.下边距);
        var left = mmToPoints(s.左边距), right = mmToPoints(s.右边距);
        var foot = mmToPoints(s.页脚边距);

        for (var i = 1; i <= d.Sections.Count; i++) {
            var sec = d.Sections.item(i);
            var ps = sec.PageSetup;
            ps.TopMargin = top;
            ps.BottomMargin = bottom;
            ps.LeftMargin = left;
            ps.RightMargin = right;
            ps.FooterDistance = foot;

            if (ps.Orientation === Wd.wdOrientPortrait) {
                ps.PageWidth = cmToPoints(21);
                ps.PageHeight = cmToPoints(29.7);
                if (s.公文版式) {
                    ps.LayoutMode = Wd.wdLayoutModeGrid;
                    ps.CharsLine = s.字数;
                    ps.LinesPage = s.行数;
                }
                if (s.允许行间距) {
                    var pf = sec.Range.ParagraphFormat;
                    pf.LineSpacingRule = Wd.wdLineSpaceExactly;
                    pf.LineSpacing = s.行间距;
                }
            } else {
                ps.PageWidth = cmToPoints(29.7);
                ps.PageHeight = cmToPoints(21);
            }
        }
        app().StatusBar = '页面设置完成: ' + s.上边距 + '/' + s.下边距 + '/' + s.左边距 + '/' + s.右边距
            + ' 毫米, ' + s.行数 + ' 行 × ' + s.字数 + ' 字';
    });
}

// 网格版式开关：C# 版这些选项在页面设置对话框里，JS 版先做成一键切换并立即应用
function gwToggleGrid() {
    var cur = gwLoadSettings();
    var s = gwSaveSettings({ 公文版式: !cur.公文版式 });
    gwApplyPageSetup();
    app().StatusBar = '公文版式(网格): ' + (s.公文版式 ? '已开启' : '已关闭');
}
