// GB/T 9704—2012 的默认值，与 C# 版 src\app.config 的 userSettings 一一对应。
// 单位照原样保留：边距是毫米，行间距是磅，字号是磅。
var GW_DEFAULTS = {
    上边距: 37, 下边距: 35, 左边距: 28, 右边距: 26, 页脚边距: 24.7,
    行数: 22, 字数: 28, 行间距: 28,
    公文版式: true, 允许行间距: false,
    // 字号沿用 C# 的原始配置值（15.75/21.75/14.25），实际写入前过 FormatFontSize 取整
    字体: {
        公文标题: { name: '方正小标宋简体', size: 21.75 },
        一级标题: { name: '黑体', size: 15.75 },
        二级标题: { name: '楷体', size: 15.75 },
        三级标题: { name: '仿宋', size: 15.75 },
        四级标题: { name: '仿宋', size: 15.75 },
        正文: { name: '仿宋', size: 15.75 },
        版头: { name: '黑体', size: 15.75 },
        签发人姓名: { name: '楷体', size: 15.75 },
        版记: { name: '仿宋', size: 14.25 },
        页码: { name: '宋体', size: 14.25 }
    },
    数字字体: 'Times New Roman',
    英文字体: 'Times New Roman'
};

// 文件为跨版本持久化；PluginStorage 负责多个窗口即时共享；localStorage 兼容旧设置。
var GW_STORE_KEY = 'gw-layout-settings';
function gwSettingsFile() {
    var root = gwHost('Env').GetHomePath();
    if (!root) throw new Error('无法取得用户目录。');
    return root.replace(/[\\\/]$/, '') + '/.gw_mika-settings.json';
}
function gwNormalizeSettings(saved) {
    var result = JSON.parse(JSON.stringify(GW_DEFAULTS));
    if (!saved || typeof saved !== 'object') return result;
    Object.keys(result).forEach(function (k) {
        if (k === '字体') {
            Object.keys(result.字体).forEach(function (name) {
                var f = saved.字体 && saved.字体[name];
                if (f && typeof f.name === 'string' && f.name.trim() && isFinite(f.size) && f.size >= 1 && f.size <= 200)
                    result.字体[name] = { name: f.name.trim(), size: Number(f.size), bold: !!f.bold, italic: !!f.italic };
            });
        } else if (typeof result[k] === 'number') {
            var n = Number(saved[k]);
            // 旧版表单可能保存了 21.1/27.1 等值；无效计数回到默认值，保留其他设置。
            if ((k === '行数' || k === '字数') && n % 1 !== 0) return;
            if (saved[k] !== undefined && isFinite(n) && n > 0 && n <= 200) result[k] = n;
        } else if (typeof saved[k] === typeof result[k]) result[k] = saved[k];
    });
    return result;
}
function gwLoadSettings() {
    var raw;
    try { raw = gwHost('PluginStorage').getItem(GW_STORE_KEY); } catch (e) { }
    if (!raw) try {
        var fs = gwHost('FileSystem'), path = gwSettingsFile();
        if (fs.Exists(path)) raw = fs.ReadFile(path);
    } catch (e) { }
    if (!raw) try { raw = window.localStorage.getItem(GW_STORE_KEY); } catch (e) { }
    try { return gwNormalizeSettings(JSON.parse(raw || '{}')); }
    catch (e) { return gwNormalizeSettings(null); }
}
function gwSaveSettings(patch) {
    var cur = gwLoadSettings();
    Object.keys(patch).forEach(function (k) {
        if (k === '字体') Object.keys(patch.字体).forEach(function (f) { cur.字体[f] = patch.字体[f]; });
        else cur[k] = patch[k];
    });
    cur = gwNormalizeSettings(cur);
    // WriteFile 是 UTF-8，ReadFile 是 Latin-1；ASCII JSON 可在两者间无损往返。
    var raw = JSON.stringify(cur).replace(/[\u007f-\uffff]/g, function (c) {
        return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
    }), persisted = false;
    try {
        var fs = gwHost('FileSystem'), path = gwSettingsFile();
        fs.WriteFile(path, raw);
        persisted = fs.ReadFile(path) === raw;
    } catch (e) { gwLogError('保存设置文件', e); }
    try { window.localStorage.setItem(GW_STORE_KEY, raw); persisted = true; } catch (e) { }
    if (!persisted) throw new Error('设置无法保存，请检查用户目录写入权限。');
    try { gwHost('PluginStorage').setItem(GW_STORE_KEY, raw); } catch (e) { }
    return cur;
}
