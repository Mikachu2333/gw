// WPS 加载项入口文件由 index.html 引入，本文件提供所有命令共用的底座。
// 注意：官方工具链在 Linux 版 WPS 上踩过 toLocaleDateString/toLocaleTimeString 的坑
// （wpsjs 更新日志 v1.4.10），所以这里一律不用任何 locale API 格式化数字/日期。

function GetUrlPath() {
    var e = document.location.toString();
    e = decodeURI(e);
    return e.indexOf('/') >= 0 ? e.substring(0, e.lastIndexOf('/')) : e;
}

// ---- 宿主对象 ----
function app() { return window.Application; }
function doc() { return app().ActiveDocument; }
function sel() { return app().Selection; }

// ---- 单位换算 ----
// C# 版设置里边距存的是毫米，写进 Word 前用 CentimetersToPoints(v / 10) 换算，这里保持一致。
function mmToPoints(mm) { return app().CentimetersToPoints(mm / 10); }
function cmToPoints(cm) { return app().CentimetersToPoints(cm); }

// FormatFontSize 的规则（Ribbon1.cs:308）：五号 10.5pt 原样保留，其余一律四舍五入到整数。
// 15.75→16、21.75→22、14.25→14。改动它会影响每一个排版按钮。
function formatFontSize(size) {
    return Math.abs(size - 10.5) < 0.01 ? 10.5 : Math.round(size);
}

// ---- 撤销与屏幕刷新 ----
// JSAPI 是否暴露 UndoRecord 需要在目标 WPS 上确认（验收清单第 3 条）。
// 没有它时退化成"不合并撤销单元"，功能本身不受影响。
function withUndo(label, work) {
    var a = app();
    var undo = a.UndoRecord;
    var grouped = undo && typeof undo.StartCustomRecord === 'function';
    if (grouped) undo.StartCustomRecord(label);
    try {
        a.ScreenUpdating = false;
        work();
    } catch (e) {
        showError(e, label);
    } finally {
        try { a.ScreenUpdating = true; } catch (e2) { /* 宿主已退出等 */ }
        if (grouped) { try { undo.EndCustomRecord(); } catch (e3) { } }
    }
}

function showError(e, title) {
    var msg = (e && (e.message || e.description)) ? (e.message || e.description) : String(e);
    alert((title || '操作') + '时出错:\r\n' + msg);
}

// ---- 作用域（对应 C# 的 TryGetScope）----
// 有选区就在选区里做；没有选区时先问一句，取消则整个操作不执行。
// 返回 null 表示"用户取消"，调用方必须直接 return。
function scopeOrNull(promptTitle) {
    var s = sel();
    if (s.Characters.Count > 1) return s.Range;
    var ok = window.confirm('您未选定范围,将执行全局操作!');
    if (!ok) return null;
    return doc().Content;
}

// ---- 查找替换（对应 Ribbon1.Format.cs:12 的 WordReplace）----
// 参数顺序与 C# 版逐字对齐：MatchWildcards 决定是否通配，Wrap 由"是否限定在选区"决定。
// 注意 C# 版在替换前后都 ClearFormatting，这里同样保留，否则会继承上一次的条件格式。
function wordReplace(wildcard, findText, replText, range) {
    var f = sel().Find;
    f.ClearFormatting();
    f.Replacement.ClearFormatting();
    f.Text = findText;
    f.Replacement.Text = replText;
    f.Forward = true;
    f.Wrap = range ? Wd.wdFindStop : Wd.wdFindContinue;
    f.Format = false;
    f.MatchCase = false;
    f.MatchWholeWord = false;
    f.MatchWildcards = !!wildcard;
    f.MatchSoundsLike = false;
    f.MatchAllWordForms = false;
    var hit = f.Execute(Wd.wdReplaceAll);
    f.ClearFormatting();
    f.Replacement.ClearFormatting();
    return hit;
}

// 字体设置（对应 Ribbon1.Fonts.cs:13 的 SetFont）：
// 只设 Font.Name（Word 里它同时作用于中西文），粗斜体一律按配置显式赋值 —— 
// 条件赋值会让"设为正文"去不掉原有粗体。
function applyFont(fontSpec) {
    if (!fontSpec) return;
    var f = sel().Font;
    f.Name = fontSpec.name;
    f.Size = formatFontSize(fontSpec.size);
    f.Bold = 0;
    f.Italic = 0;
}

// 视图守卫（对应 C# 侧新加的 EnsureMainDocumentView）：停在页眉页脚时正文操作会写进页眉。
function ensureMainView() {
    try {
        var v = app().ActiveWindow.ActivePane.View;
        if (v.SeekView === Wd.wdSeekMainDocument) return true;
        alert('请先退出页眉/页脚编辑状态，再使用排版功能。');
        return false;
    } catch (e) {
        return true;   // 读不到视图状态就不要拦住用户
    }
}

function hasDocument() {
    try { return app().Documents.Count > 0; } catch (e) { return false; }
}
