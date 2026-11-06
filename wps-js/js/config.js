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
    英文字体: 'Times New Roman'
};

// 用户覆盖值存在 localStorage 里：JSAPI 的 PluginStorage 只在本次会话有效，
// 而 C# 版的对应物是 Properties.Settings（user.config），这里取最接近的持久化手段。
var GW_STORE_KEY = 'gw-layout-settings';

function gwLoadSettings() {
    try {
        var raw = window.localStorage.getItem(GW_STORE_KEY);
        if (!raw) return JSON.parse(JSON.stringify(GW_DEFAULTS));
        var saved = JSON.parse(raw);
        // 逐层合并，避免以后新增设置项时老存档缺字段导致 undefined
        var merged = JSON.parse(JSON.stringify(GW_DEFAULTS));
        for (var k in saved) {
            if (k === '字体') {
                for (var f in saved.字体) merged.字体[f] = saved.字体[f];
            } else if (Object.prototype.hasOwnProperty.call(merged, k)) {
                merged[k] = saved[k];
            }
        }
        return merged;
    } catch (e) {
        return JSON.parse(JSON.stringify(GW_DEFAULTS));
    }
}

function gwSaveSettings(patch) {
    try {
        var cur = gwLoadSettings();
        for (var k in patch) {
            if (k === '字体') {
                for (var f in patch.字体) cur.字体[f] = patch.字体[f];
            } else cur[k] = patch[k];
        }
        window.localStorage.setItem(GW_STORE_KEY, JSON.stringify(cur));
    } catch (e) {
        // 无痕模式或配额满时静默失败：排版动作本身已经生效，只是下次启动回到默认值
    }
    return gwLoadSettings();
}
