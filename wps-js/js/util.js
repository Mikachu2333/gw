// WPS JSAPI 区分大小写；集合统一使用文档规定的 Item(1..Count)。
function GetUrlPath() {
    var url = String(document.location.href || document.location).split(/[?#]/)[0];
    return url.replace(/\/(?:ui\/)?[^/]*$/, '');
}
function assetUrl(path) { return GetUrlPath() + '/' + path; }
function app() {
    var roots = [window.wps, window.Application];
    for (var i = 0; i < roots.length; i++) {
        var root = roots[i], candidate;
        if (!root) continue;
        try {
            if (typeof root.WpsApplication === 'function') candidate = root.WpsApplication();
            if (candidate && candidate.Documents) return candidate;
        } catch (e) { }
        try {
            candidate = typeof root.Application === 'function' ? root.Application() : root.Application;
            if (candidate && candidate.Documents) return candidate;
        } catch (e) { }
        try {
            candidate = typeof root === 'function' ? root() : root;
            if (candidate && candidate.Documents) return candidate;
        } catch (e) { }
    }
    throw new Error('当前 WPS 未提供文字 JS 加载项接口。');
}
// 加载项根对象（wps / window.Application）与 WpsApplication() 的文字对象不是同一层。
// 按成员查找，兼容新旧宿主的合并根对象；调用方法时必须保留接收对象。
function gwHostOwner(member, method) {
    var roots = [window.wps, window.Application];
    for (var i = 0; i < 3; i++) {
        try {
            var root = i < 2 ? roots[i] : app();
            if (root && (method ? typeof root[member] === 'function' : root[member] != null)) return root;
        } catch (e) { }
    }
    throw new Error('当前 WPS 未提供加载项接口 ' + member + '，请通过“关于 → 诊断日志”导出环境信息。');
}
function gwHost(member) { return gwHostOwner(member, false)[member]; }
function doc() { return app().ActiveDocument; }
function sel() { return app().Selection; }
function mmToPoints(mm) { return Number(mm) * 72 / 25.4; }
function cmToPoints(cm) { return mmToPoints(cm * 10); }
function formatFontSize(size) { return Math.abs(size - 10.5) < 0.01 ? 10.5 : Math.round(size); }
function hasDocument() {
    try { return app().Documents.Count > 0; } catch (e) { return false; }
}
function canEdit() {
    try { return hasDocument() && !doc().ReadOnly && Number(doc().ProtectionType) === -1; }
    catch (e) { return false; }
}
function status(message) { try { app().StatusBar = message; } catch (e) { } }
function showError(e, title) {
    gwLogError(title || '操作', e);
    var saved = gwWriteDiagnostics();
    alert((title || '操作') + '时出错：\n' + (e && (e.message || e.description) || String(e))
        + (e && e.gwStep ? '\n接口步骤：' + e.gwStep : '')
        + '\n\n' + (saved.path ? '诊断日志：' + saved.path : '请点击“关于 → 诊断日志”复制错误详情。'));
}
// 可选接口读取也可能抛异常；缺少 UndoRecord 时仍执行命令。恢复进入前的刷新和视图状态。
function withUndo(label, work) {
    if (!canEdit()) throw new Error('请打开可编辑的文档后再使用此功能。');
    var a = app(), undo, grouped = false, updating, view, seek;
    try { updating = a.ScreenUpdating; } catch (e) { }
    try { view = a.ActiveWindow.ActivePane.View; seek = view.SeekView; } catch (e) { }
    try {
        try {
            undo = a.UndoRecord;
            if (undo && typeof undo.StartCustomRecord === 'function') {
                undo.StartCustomRecord(label); grouped = true;
            }
        } catch (e) { /* 老版本 WPS 不提供自定义撤销 */ }
        try { a.ScreenUpdating = false; } catch (e) { }
        return gwStep(label, work);
    } finally {
        if (view && seek !== undefined) try { if (view.SeekView !== seek) view.SeekView = seek; } catch (e) { }
        try { a.ScreenUpdating = updating === undefined ? true : updating; } catch (e) { }
        if (grouped) try { undo.EndCustomRecord(); } catch (e) { }
    }
}
function scopeOrNull() {
    var r = sel().Range;
    if (r.Start !== r.End) return r.Duplicate;
    return window.confirm('您未选定范围，将处理整篇文档。是否继续？') ? doc().Content.Duplicate : null;
}
// Find.Execute 的 Replace 是第 11 个参数。用 Duplicate 避免查找缩小后续替换的范围。
function wordReplace(wildcard, findText, replText, range) {
    var f = (range || doc().Content).Duplicate.Find;
    f.ClearFormatting();
    f.Replacement.ClearFormatting();
    try {
        return f.Execute(findText, false, false, !!wildcard, false, false,
            true, Wd.wdFindStop, false, replText, Wd.wdReplaceAll);
    } finally {
        f.ClearFormatting();
        f.Replacement.ClearFormatting();
    }
}
function setRangeFont(range, spec, rawSize) {
    var f = range.Font;
    f.Name = spec.name;
    f.NameFarEast = spec.name;
    f.Size = rawSize ? spec.size : formatFontSize(spec.size);
    f.Bold = spec.bold ? -1 : 0;
    f.Italic = spec.italic ? -1 : 0;
}
function applyFont(spec) { setRangeFont(sel().Range, spec); }
function ensureMainView() {
    if (sel().Range.StoryType !== undefined && sel().Range.StoryType !== 1) {
        alert('请先退出页眉/页脚等编辑状态，再使用插入功能。'); return false;
    }
    return true;
}
function gwDialog(page, title, width, height) {
    // 加载项 API 接收逻辑像素；文字 Application 没有 ShowDialog。
    var root = gwHostOwner('ShowDialog', true), url = assetUrl('ui/' + page);
    gwLog('info', 'dialog.open', { page: page, url: url });
    if (root.ShowDialog(url, title, width || 620, height || 640, true) === false)
        throw new Error('WPS 未能打开设置窗口。');
}
function gwOpenUrl(url) {
    try { gwHost('OAAssist').ShellExecute(url); }
    catch (e) {
        gwLogError('打开外部链接', e);
        if (!window.open(url, '_blank')) alert('请手动访问：' + url);
    }
}
function gwNativeAsset(path) {
    var url = assetUrl(path);
    if (!/^file:/i.test(url)) throw new Error('公文部件需要本地安装版，请使用安装包安装后再试。');
    var nativePath = decodeURIComponent(url.replace(/^file:\/\//i, ''));
    if (/^\/[a-z]:\//i.test(nativePath)) nativePath = nativePath.slice(1);
    return nativePath;
}
