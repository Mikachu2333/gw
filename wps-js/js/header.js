// 页眉类命令：共同点是必须进页眉故事操作，并且无论成功失败都要把视图带回正文，
// 否则用户会停在页眉里继续打字（C# 侧同类问题在提交 e90aa50 修过）。
function inHeaderWork(work) {
    var view = app().ActiveWindow.ActivePane.View;
    var entered = view.SeekView !== Wd.wdSeekCurrentPageHeader;
    if (entered) view.SeekView = Wd.wdSeekCurrentPageHeader;
    try {
        work();
    } finally {
        if (entered) { try { view.SeekView = Wd.wdSeekMainDocument; } catch (e) { } }
    }
}

function findStyle(name) {
    var styles = doc().Styles;
    for (var i = 1; i <= styles.Count; i++) {
        try {
            var st = styles.item(i);
            if (st.NameLocal === name) return st;
        } catch (e) { /* 跳过取不到的样式 */ }
    }
    return null;
}

function gwDeleteHeader() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    if (!ensureMainView()) return;
    withUndo('删除页眉', function () {
        inHeaderWork(function () {
            var s = sel();
            s.WholeStory();
            s.Delete();
            s.ClearFormatting();
            // 重复点击时样式已存在，直接 Styles.Add 会抛"样式已存在"，
            // 而此时页眉已经被清空 —— 用户面对的是一个报错的半完成状态。
            var style = findStyle('公文:页眉');
            if (!style) {
                style = doc().Styles.Add('公文:页眉', Wd.wdStyleTypeParagraph);
                style.BaseStyle = '';
            }
            s.Style = style;
        });
    });
}

function gwDeleteHeaderLine() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    if (!ensureMainView()) return;
    withUndo('删除页眉横线', function () {
        inHeaderWork(function () {
            var s = sel();
            s.WholeStory();
            s.Borders.item(Wd.wdBorderBottom).LineStyle = Wd.wdLineStyleNone;
        });
    });
}
