// 直接操作页眉故事，避免切换视图丢失用户原来的选区。
function gwHeaders(work) {
    var d = doc();
    for (var i = 1; i <= d.Sections.Count; i++) {
        var headers = d.Sections.Item(i).Headers;
        for (var k = 1; k <= 3; k++) {
            var h = headers.Item(k);
            if (h.Exists && (i === 1 || !h.LinkToPrevious)) work(h.Range);
        }
    }
}
function gwDeleteHeaderLine() {
    withUndo('删除页眉横线', function () {
        gwHeaders(function (r) { r.ParagraphFormat.Borders.Item(Wd.wdBorderBottom).LineStyle = 0; });
    });
}
function gwDeleteHeader() {
    if (!window.confirm('删除整篇文档的页眉内容？')) return;
    withUndo('删除页眉', function () {
        gwHeaders(function (r) {
            r.Text = '';
            r.ParagraphFormat.Borders.Item(Wd.wdBorderBottom).LineStyle = 0;
        });
    });
}
