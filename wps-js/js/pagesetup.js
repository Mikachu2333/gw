// 页面设置：对应 C# 版 frmPaperSetup.cs 的 SetGWPage()，逐节应用，作用于整篇文档。
// 与 C# 保持一致的两点：一是单位（设置里存毫米，写入时 CentimetersToPoints(v/10)）；
// 二是"公文版式"勾选时 Normal 样式的字号被硬写成 16 磅，而不是取正文配置的 15.75 取整。
function gwApplyPageSetup(settings) {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var s = settings || gwLoadSettings();
    var d = doc();
    withUndo('公文页面设置', function () {
        var normal = gwStep('Document.Styles.Item(wdStyleNormal)', function () { return d.Styles.Item(-1); });
        if (s.英文字体) gwSetProperty(normal.Font, 'Name', s.英文字体, 'Normal.Font');
        gwSetProperty(normal.Font, 'NameFarEast', s.字体.正文.name, 'Normal.Font');
        if (s.公文版式) gwSetProperty(normal.Font, 'Size', 16, 'Normal.Font');

        var top = mmToPoints(s.上边距), bottom = mmToPoints(s.下边距);
        var left = mmToPoints(s.左边距), right = mmToPoints(s.右边距);
        var foot = mmToPoints(s.页脚边距);

        for (var i = 1; i <= d.Sections.Count; i++) {
            var prefix = 'Sections.Item(' + i + ').PageSetup';
            var sec = gwStep('Sections.Item(' + i + ')', function () { return d.Sections.Item(i); });
            var ps = gwStep(prefix, function () { return sec.PageSetup; });
            gwSetProperty(ps, 'TopMargin', top, prefix);
            gwSetProperty(ps, 'BottomMargin', bottom, prefix);
            gwSetProperty(ps, 'LeftMargin', left, prefix);
            gwSetProperty(ps, 'RightMargin', right, prefix);
            gwSetProperty(ps, 'FooterDistance', foot, prefix);

            gwSetProperty(ps, 'LayoutMode', s.公文版式 ? Wd.wdLayoutModeGrid : Wd.wdLayoutModeDefault, prefix);
            if (ps.Orientation === Wd.wdOrientPortrait) {
                gwSetProperty(ps, 'PageWidth', cmToPoints(21), prefix);
                gwSetProperty(ps, 'PageHeight', cmToPoints(29.7), prefix);
                if (s.公文版式) {
                    gwSetProperty(ps, 'LayoutMode', Wd.wdLayoutModeGrid, prefix);
                    gwSetProperty(ps, 'CharsLine', s.字数, prefix);
                    gwSetProperty(ps, 'LinesPage', s.行数, prefix);
                }
                if (s.允许行间距) {
                    var pf = sec.Range.ParagraphFormat;
                    gwSetProperty(pf, 'LineSpacingRule', Wd.wdLineSpaceExactly, 'Sections.Item(' + i + ').Range.ParagraphFormat');
                    gwSetProperty(pf, 'LineSpacing', s.行间距, 'Sections.Item(' + i + ').Range.ParagraphFormat');
                }
            } else {
                gwSetProperty(ps, 'PageWidth', cmToPoints(29.7), prefix);
                gwSetProperty(ps, 'PageHeight', cmToPoints(21), prefix);
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
