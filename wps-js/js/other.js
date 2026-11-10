function gwSaveCopy(format) {
    var original = doc();
    if (!original.Path || !original.Saved) {
        if (!window.confirm('生成副本前需要保存当前文档，是否现在保存？')) return;
        original.Save();
        if (!original.Path || !original.Saved) return;
    }
    var oldFile = original.FullName;
    var picker = app().FileDialog(2);
    picker.Title = '生成 ' + format.toUpperCase() + ' 副本';
    picker.InitialFileName = original.Path + '/' + original.Name.replace(/\.[^.]+$/, '') + '_副本.' + format;
    if (picker.Show() !== -1) return;
    var target = String(picker.SelectedItems.Item(1));
    if (!new RegExp('\\.' + format + '$', 'i').test(target)) target += '.' + format;
    if (target.replace(/\\/g, '/').toLowerCase() === oldFile.replace(/\\/g, '/').toLowerCase())
        throw new Error('副本不能覆盖当前源文档，请选择其他文件名。');
    if (gwHost('FileSystem').Exists(target) && !window.confirm('文件已存在，是否覆盖？\n' + target)) return;
    if (format === 'pdf') original.ExportAsFixedFormat(target, 17, false);
    else {
        // SaveAs2 会切换活动文件；先保存源文件，恢复失败时保留已打开的副本。
        original.SaveAs2(target, 0);
        var reopened;
        try { reopened = app().Documents.Open(oldFile); }
        catch (e) { throw new Error('副本已生成，但原文档未能重新打开。当前窗口是副本：\n' + target + '\n' + e.message); }
        original.Close(0);
        reopened.Activate();
    }
    status('已生成副本：' + target);
}
function gwSecurity(mode, password) {
    if (!hasDocument() || doc().ReadOnly) throw new Error('请先打开可写的文档。');
    if (mode === 'unprotect') doc().Unprotect(password);
    else if (mode === 'protect') {
        if (!canEdit()) throw new Error('文档已经受到保护。');
        withUndo('限制编辑', function () { doc().Protect(3, true, password); });
    } else {
        withUndo('设置文档密码', function () {
            if (mode === 'open') doc().Password = password;
            else doc().WritePassword = password;
        });
        alert('密码已修改，请保存文档使设置写入文件。');
    }
    gwInvalidate();
}
function gwClearPassword(open) {
    if (!window.confirm('清除当前文档的' + (open ? '打开' : '修改') + '密码？保存文档后生效。')) return;
    gwSecurity(open ? 'open' : 'write', '');
}
function gwSpeak() {
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance)
        throw new Error('当前 WPS 的内嵌浏览器不支持朗读，请使用 WPS 自带的朗读功能。');
    if (window.speechSynthesis.speaking) { window.speechSynthesis.cancel(); return; }
    var r = sel().Range, text = r.Start !== r.End ? r.Text : doc().Content.Text;
    var utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    window.speechSynthesis.speak(utterance);
}
