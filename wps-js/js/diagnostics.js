// 只记录命令和接口状态，不读取文档正文、文件名、选中文字或密码输入。
var GW_DIAGNOSTIC_REVISION = 'wps-api-20261110-6';
var GW_LOG_KEY = 'gw_mika-diagnostics-v1';
var gwLogEntries = [];
var gwLogSession = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
var gwLogSequence = 0;
var gwCurrentStep = '';
function gwReadLog() {
    var shared = [];
    try { shared = JSON.parse(gwHost('PluginStorage').getItem(GW_LOG_KEY) || '[]'); } catch (e) { }
    if (!Array.isArray(shared)) shared = [];
    var seen = {}, result = [];
    shared.concat(gwLogEntries).forEach(function (entry) {
        if (entry && typeof entry.id === 'string' && !seen[entry.id]) {
            seen[entry.id] = true; result.push(entry);
        }
    });
    return result.sort(function (a, b) { return a.time < b.time ? -1 : a.time > b.time ? 1 : 0; }).slice(-120);
}
function gwLog(level, event, detail) {
    try {
        var entry = { id: gwLogSession + '-' + (++gwLogSequence), time: new Date().toISOString(),
            level: level, event: event, step: gwCurrentStep, detail: detail || {} };
        gwLogEntries = gwReadLog(); gwLogEntries.push(entry); gwLogEntries = gwLogEntries.slice(-120);
        try { gwHost('PluginStorage').setItem(GW_LOG_KEY, JSON.stringify(gwLogEntries)); } catch (e) { }
        try {
            var console = window.console;
            if (console) (level === 'error' ? console.error : console.log).call(console, '[公文准式]', entry);
        } catch (e) { }
    } catch (e) { /* 日志失败不能中断排版 */ }
}
function gwLogError(scope, error) {
    gwLog('error', scope, {
        message: String(error && (error.message || error.description) || error).slice(0, 3000),
        stack: String(error && error.stack || '').slice(0, 6000),
        failedStep: String(error && error.gwStep || gwCurrentStep)
    });
}
// 将宿主属性写入失败精确到节号和属性名，保留原始错误栈。
function gwStep(label, work) {
    var previous = gwCurrentStep; gwCurrentStep = label;
    try { return work(); }
    catch (e) {
        if (!e || typeof e !== 'object') e = new Error(String(e));
        try { if (!e.gwStep) e.gwStep = label; } catch (ignored) { }
        throw e;
    } finally { gwCurrentStep = previous; }
}
function gwSetProperty(object, name, value, prefix) {
    return gwStep(prefix + '.' + name, function () { object[name] = value; });
}
function gwProbe(read) {
    try { var value = read(); return value === undefined ? 'undefined' : value; }
    catch (e) { return '不可用：' + String(e.message || e); }
}
function gwRasterFileCapabilities() {
    var result={};
    ['WriteFile','writeAsBinaryString','ReadFileAsArrayBuffer','readAsBinaryString','ReadFile','Exists','Remove'].forEach(function(key){
        result[key]=gwProbe(function(){return typeof gwHost('FileSystem')[key];});
    });
    return result;
}
function gwEnvironment() {
    var members = ['ShowDialog', 'CreateTaskPane', 'PluginStorage', 'FileSystem', 'Env', 'ApiEvent', 'ribbonUI', 'OAAssist'];
    function capabilities(root) {
        var result = {};
        members.concat(['WpsApplication', 'Application', 'FileDialog', 'CreateObject', 'EtApplication', 'WppApplication']).forEach(function (key) {
            result[key] = gwProbe(function () { return typeof root[key]; });
        });
        return result;
    }
    return {
        revision: GW_DIAGNOSTIC_REVISION,
        version: typeof GW_VERSION !== 'undefined' ? GW_VERSION : gwProbe(function () { return gwHost('PluginStorage').getItem('gw_mika-version'); }),
        page: gwProbe(function () { return String(document.location.href); }),
        userAgent: gwProbe(function () { return window.navigator.userAgent; }),
        wpsName: gwProbe(function () { return String(app().Name); }),
        wpsVersion: gwProbe(function () { return String(app().Version); }),
        wpsBuild: gwProbe(function () { return String(app().Build); }),
        roots: { wps: capabilities(window.wps), Application: capabilities(window.Application),
            textApplication: gwProbe(function () { return capabilities(app()); }) },
        fileSystem: gwRasterFileCapabilities(),
        document: { count: gwProbe(function () { return app().Documents.Count; }),
            readOnly: gwProbe(function () { return hasDocument() ? !!doc().ReadOnly : null; }),
            protection: gwProbe(function () { return hasDocument() ? Number(doc().ProtectionType) : null; }) }
    };
}
function gwDiagnosticText() {
    return JSON.stringify({ environment: gwEnvironment(), entries: gwReadLog() }, null, 2);
}
function gwDiagnosticsFile() {
    var home = gwHost('Env').GetHomePath();
    if (!home) throw new Error('无法取得用户目录。');
    return String(home).replace(/[\\\/]$/, '') + '/.gw_mika-diagnostics.json';
}
function gwWriteDiagnostics() {
    try {
        var path = gwDiagnosticsFile(), fs = gwHost('FileSystem');
        // ASCII 转义兼容 WPS ReadFile 的 Latin-1 解码；报告窗口显示中文原文。
        var text = gwDiagnosticText().replace(/[\u007f-\uffff]/g, function (c) {
            return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
        });
        if (fs.WriteFile(path, text) === false || fs.ReadFile(path) !== text) throw new Error('写入后校验失败。');
        return { path: path };
    } catch (e) { return { error: String(e.message || e) }; }
}
function gwShowDiagnostics() {
    var saved = gwWriteDiagnostics();
    try { gwDialog('diagnostics.html', '公文准式诊断日志', 800, 650); }
    catch (e) {
        gwLogError('打开诊断窗口', e);
        saved = gwWriteDiagnostics();
        alert(saved.path ? '诊断日志已保存：\n' + saved.path
            : '诊断窗口与文件导出均不可用：' + saved.error + '\n按 Alt+F12，在 Console 执行 gwDiagnosticText() 复制报告。');
    }
}
// 浏览器资源探测与 Ribbon 原生图标显示是两个检查项，日志明确记录前者。
function gwProbeAssets() {
    ['images/PageMarginsGallery.png', 'images/_1.png', 'images/Info.png'].forEach(function (path) {
        var url = assetUrl(path);
        gwLog('info', 'asset.check', { relative: path, url: url, exists: gwProbe(function () {
            return gwHost('FileSystem').Exists(gwNativeAsset(path));
        }) });
        if (typeof window.Image === 'function') {
            var image = new window.Image();
            image.onload = function () { gwLog('info', 'asset.browser.loaded', { path: path, width: image.naturalWidth, height: image.naturalHeight }); };
            image.onerror = function () { gwLog('error', 'asset.browser.failed', { path: path, url: url }); };
            image.src = url;
        }
    });
}
if (typeof window.addEventListener === 'function') {
    window.addEventListener('error', function (event) {
        if (event.error || event.message) gwLogError('页面脚本异常', event.error || event.message);
        else if (event.target) gwLog('error', 'resource.failed', { url: event.target.src || event.target.href || '', tag: event.target.tagName });
        gwWriteDiagnostics();
    }, true);
    window.addEventListener('unhandledrejection', function (event) {
        gwLogError('异步脚本异常', event.reason); gwWriteDiagnostics();
    });
}
