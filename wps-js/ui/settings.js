// 对话框与功能区共用宿主和配置模块，设置不依赖 opener 或浏览器同源假设。
var page = (/[?&]page=([^&]+)/.exec(window.location.search) || [null, 'page'])[1];
var current = gwLoadSettings();
var fields = document.getElementById('fields');
var message = document.getElementById('message');
var save = document.getElementById('save');
var restore = document.getElementById('restore');
var fontInputs = {};
function gwInvalidate() {
    try { gwHost('ribbonUI').Invalidate(); } catch (e) { gwLogError('刷新功能区', e); }
}
function input(type, value, label) {
    var el = document.createElement('input');
    el.type = type;
    el.setAttribute('aria-label', label);
    if (type === 'checkbox') el.checked = !!value;
    else el.value = value;
    if (type === 'number') { el.min = 0.1; el.max = 200; el.step = 0.1; }
    return el;
}
function labelled(container, name, el) {
    var label = document.createElement('label'), caption = document.createElement('span');
    caption.textContent = name;
    label.appendChild(caption); label.appendChild(el); container.appendChild(label);
}
function group(label, className) {
    var set = document.createElement('fieldset'), legend = document.createElement('legend');
    legend.textContent = label; set.appendChild(legend);
    var content = document.createElement('div'); content.className = className || 'grid';
    set.appendChild(content); fields.appendChild(set); return content;
}
var controls = {};
function pageFields() {
    var margin = group('页边距（毫米）');
    ['上边距','下边距','左边距','右边距','页脚边距'].forEach(function (key) {
        controls[key] = input('number', current[key], key); controls[key].required = true; labelled(margin, key, controls[key]);
    });
    var grid = group('公文版式');
    ['行数','字数','行间距'].forEach(function (key) {
        controls[key] = input('number', current[key], key);
        controls[key].required = true;
        // step 的起点是 min；行数和字数必须同时改为整数起点，避免 22/28 被判为无效。
        if (key !== '行间距') { controls[key].min = 1; controls[key].step = 1; }
        labelled(grid, key + (key === '行间距' ? '（磅）' : ''), controls[key]);
    });
    ['公文版式','允许行间距'].forEach(function (key) {
        controls[key] = input('checkbox', current[key], key);
        labelled(grid, key === '允许行间距' ? '使用固定行间距' : '使用公文网格', controls[key]);
    });
}
function fontFields() {
    var table = document.createElement('table');
    var head = table.createTHead().insertRow();
    ['用途','字体名称','字号（磅）','粗体','斜体'].forEach(function (text) {
        var th = document.createElement('th'); th.textContent = text; head.appendChild(th);
    });
    var body = table.createTBody();
    Object.keys(current.字体).forEach(function (key) {
        var row = body.insertRow(); row.insertCell().textContent = key;
        var spec = current.字体[key]; fontInputs[key] = {};
        ['name','size','bold','italic'].forEach(function (prop) {
            var el = input(prop === 'name' ? 'text' : prop === 'size' ? 'number' : 'checkbox', spec[prop] || '', key + prop);
            if (prop === 'name') el.setAttribute('list', 'fontNames');
            if (prop === 'name' || prop === 'size') el.required = true;
            if (prop === 'size') { el.step = 0.05; el.min = 1; }
            fontInputs[key][prop] = el; row.insertCell().appendChild(el);
        });
    });
    fields.appendChild(table);
    var latin = group('字母和数字的默认字体', 'stack');
    ['英文字体','数字字体'].forEach(function (key) {
        controls[key] = input('text', current[key], key); controls[key].required = true;
        controls[key].setAttribute('list', 'fontNames'); labelled(latin, key, controls[key]);
    });
}
function render() {
    fields.textContent = ''; controls = {}; fontInputs = {};
    restore.hidden = page !== 'page' && page !== 'fonts';
    var title = document.getElementById('title'), description = document.getElementById('description');
    if (page === 'page') {
        title.textContent = '公文页面设置'; description.textContent = '应用于整篇文档。横向节保持横向，使用 A4 纸张。';
        save.textContent = '应用并保存'; pageFields();
    } else if (page === 'fonts') {
        title.textContent = '高级设置'; description.textContent = '设置各类文字的字体。排版按钮沿用原版字号取整规则；保存后下次排版生效。'; fontFields();
    } else if (page === 'latin') {
        title.textContent = '指定字体更改'; description.textContent = '仅替换选定范围中的字母或数字；未选定时确认是否处理全文。';
        var latin = group('替换范围', 'stack'); controls.kind = document.createElement('select');
        [['letters','英文字母'],['digits','数字']].forEach(function (item) {
            var option = document.createElement('option'); option.value = item[0]; option.textContent = item[1]; controls.kind.appendChild(option);
        });
        controls.name = input('text', current.英文字体, '目标字体'); controls.name.setAttribute('list', 'fontNames'); controls.name.required = true;
        controls.kind.onchange = function () { controls.name.value = controls.kind.value === 'digits' ? current.数字字体 : current.英文字体; };
        labelled(latin, '字符类型', controls.kind); labelled(latin, '目标字体', controls.name); save.textContent = '替换';
    } else {
        var protectedDoc = page === 'protect' && Number(doc().ProtectionType) !== -1;
        title.textContent = page === 'protect' ? '限制编辑' : '文档加密';
        description.textContent = page === 'protect' ? (protectedDoc ? '输入已有保护密码以解除限制。' : '将当前文档设为只读保护。请记住密码。') : '设置密码后需要保存文档才能写入文件。';
        var security = group('密码', 'stack'); controls.mode = document.createElement('select');
        var modes = page === 'protect' ? [[protectedDoc ? 'unprotect' : 'protect', protectedDoc ? '解除保护' : '启用保护']] : [['open','打开密码'],['write','修改密码']];
        modes.forEach(function (item) { var option = document.createElement('option'); option.value = item[0]; option.textContent = item[1]; controls.mode.appendChild(option); });
        labelled(security, '操作', controls.mode);
        controls.password = input('password', '', '密码'); labelled(security, '密码', controls.password);
        if (!protectedDoc) { controls.repeat = input('password', '', '确认密码'); labelled(security, '确认密码', controls.repeat); }
        save.textContent = '应用';
    }
}
// 浏览器约束校验失败时不会触发 submit，单独记录数字字段，避免误以为保存接口未响应。
document.getElementById('settingsForm').addEventListener('invalid', function (event) {
    var field = event.target;
    if (field.type !== 'number') return;
    gwLog('warn', 'settings.invalid', { page: page, field: field.getAttribute('aria-label'),
        value: field.value, min: field.min, max: field.max, step: field.step,
        message: field.validationMessage });
}, true);
document.getElementById('settingsForm').onsubmit = function (event) {
    event.preventDefault(); message.textContent = ''; message.className = '';
    gwLog('info', 'settings.submit', { page: page });
    try {
        if (page === 'page') {
            var patch = {};
            Object.keys(controls).forEach(function (key) { patch[key] = controls[key].type === 'checkbox' ? controls[key].checked : Number(controls[key].value); });
            if (patch.左边距 + patch.右边距 >= 210 || patch.上边距 + patch.下边距 >= 297)
                throw new Error('页边距总和必须小于纸张尺寸。');
            gwApplyPageSetup(Object.assign({}, current, patch)); gwSaveSettings(patch);
            message.textContent = '页面设置已应用并保存。';
        } else if (page === 'fonts') {
            var fonts = {};
            Object.keys(fontInputs).forEach(function (key) {
                var f = fontInputs[key];
                if (!f.name.value.trim()) throw new Error('字体名称不能为空。');
                fonts[key] = { name:f.name.value.trim(), size:Number(f.size.value), bold:f.bold.checked, italic:f.italic.checked };
            });
            gwSaveSettings({字体:fonts, 英文字体:controls.英文字体.value.trim(), 数字字体:controls.数字字体.value.trim()});
            message.textContent = '字体设置已保存。';
        } else if (page === 'latin') {
            gwLatinFont(controls.kind.value, controls.name.value.trim()); message.textContent = '字体替换已执行。';
        } else {
            if (controls.repeat && controls.repeat.value !== controls.password.value) throw new Error('两次输入的密码不一致。');
            gwSecurity(controls.mode.value, controls.password.value);
            controls.password.value = ''; if (controls.repeat) controls.repeat.value = '';
            message.textContent = '设置已应用，请保存文档。';
            if (page === 'protect') render();
        }
        current = gwLoadSettings(); gwInvalidate();
        gwLog('info', 'settings.success', { page: page });
    } catch (e) {
        gwLogError('设置窗口 ' + page, e);
        var saved = gwWriteDiagnostics();
        message.className = 'error';
        message.textContent = (e.message || String(e)) + (e.gwStep ? '；接口步骤：' + e.gwStep : '')
            + (saved.path ? '；诊断日志：' + saved.path : '；请通过“关于 → 诊断日志”复制详情。');
    }
};
restore.onclick = function () {
    current = JSON.parse(JSON.stringify(GW_DEFAULTS)); render();
    message.textContent = '已填入默认值，点击“' + save.textContent + '”后生效。';
};
document.getElementById('close').onclick = function () { window.close(); };
try {
    gwLog('info', 'settings.load', { page: page, environment: gwEnvironment() });
    gwFontNames().forEach(function (name) {
        var option = document.createElement('option'); option.value = name; document.getElementById('fontNames').appendChild(option);
    });
    render();
} catch (e) {
    save.disabled = true;
    gwLogError('初始化设置窗口 ' + page, e); gwWriteDiagnostics();
    message.className = 'error'; message.textContent = '设置窗口初始化失败：' + (e.message || e);
}
