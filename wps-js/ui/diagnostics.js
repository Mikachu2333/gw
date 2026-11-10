var report = document.getElementById('report');
var message = document.getElementById('message');
function refresh() {
    report.value = gwDiagnosticText();
    var saved = gwWriteDiagnostics();
    message.textContent = saved.path ? '已保存：' + saved.path : '文件保存失败，请复制下方报告。' + saved.error;
}
document.getElementById('refresh').onclick = refresh;
document.getElementById('copy').onclick = function () {
    report.focus(); report.select();
    try {
        if (document.execCommand('copy')) { message.textContent = '日志已复制。'; return; }
    } catch (e) { }
    message.textContent = '报告已选中，请按 Ctrl+C 复制。';
};
document.getElementById('close').onclick = function () { window.close(); };
gwProbeAssets();
refresh();
