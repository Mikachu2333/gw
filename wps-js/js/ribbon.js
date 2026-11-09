// 功能区回调入口。OnAddinLoad 是整个加载项里最先执行的函数。
var GW_APP_NAME = '公文准式';
// dev 占位值：vite build 时由 vite.config.js 的 injectVersion 插件替换成 package.json 版本；
// wpsjs debug 直接读源码目录、不经过 Vite，此时显示占位值属预期。
var GW_VERSION = '0.0.0-dev';
var GW_REPO_URL = 'https://gitlab.com/Mikachu2333/gw';
var GW_UPSTREAM_URL = 'https://github.com/xkonglong/gw';
// 在线帮助按宿主分流：WPS 侧指向官方 JSAPI 介绍页，Word(VBA) 侧由 C# 版指向 VBA 文档。
var GW_HELP_URL_WPS = 'https://open.wps.cn/documents/app-integration-dev/wps365/client/wpsoffice/jsapi/';

function OnAddinLoad(ribbonUI) {
    if (typeof window.Application.ribbonUI !== 'object') {
        window.Application.ribbonUI = ribbonUI;
    }
    // 新版 WPS 会自带 Application.Enum；没有时退回 js/enums.js 里按 PIA 反射出来的常量。
    if (typeof window.Application.Enum !== 'object') {
        window.Application.Enum = Wd;
    }
    return true;
}

function OnAction(control) {
    var id = control.Id;
    switch (id) {
        case 'btnPageSetup': gwApplyPageSetup(); break;
        case 'btnToggleGrid': gwToggleGrid(); break;
        case 'btnIndent2': gwFirstLineIndent2(); break;
        case 'btnFlush': gwParagraphFlush(); break;

        case 'btnMainTitle': gwSetMainTitle(); break;
        case 'btnHeading1': gwSetHeading(1, 1); break;
        case 'btnHeading2': gwSetHeading(2, 1); break;
        case 'btnHeading3': gwSetHeading(3, 1); break;
        case 'btnHeading4': gwSetHeading(4, 1); break;
        case 'btnBody': gwSetBody(); break;

        case 'btnDelSpace': gwDeleteSpaces(); break;
        case 'btnDelEmptyLine': gwDeleteEmptyLines(false); break;
        case 'btnDelSelEmptyLine': gwDeleteEmptyLines(true); break;
        case 'btnLineBreak': gwLineBreakToParagraph(); break;
        case 'btnReflow': gwReflowLines(); break;
        case 'btnCnEnSpace': gwSpaceBetweenCnEn(); break;
        case 'btnPunctEn2Cn': gwPunctEnToCn(); break;
        case 'btnPunctCn2En': gwPunctCnToEn(); break;

        case 'btnNumCenter': gwPageNumber(0); break;
        case 'btnNumRight': gwPageNumber(2); break;
        case 'btnNumOutside': gwPageNumber(1); break;

        case 'btnDelHeader': gwDeleteHeader(); break;
        case 'btnDelHeaderLine': gwDeleteHeaderLine(); break;

        case 'btnAbout': gwShowAbout(); break;
        case 'btnHelp': gwOpenUrl(gwHelpUrl()); break;
        default: break;
    }
    return true;
}

// 标题层级按钮目前固定从「一」开始；C# 版靠控件 Tag 支持 1-20 起始值，
// 需要时在这里按 control.Id 传不同的 startAt 即可（gwSetHeading 已支持该参数）。
function gwHelpUrl() {
    // JS 加载项只可能跑在 WPS 上，因此这里就是 WPS 分支；保留函数形式，
    // 便于以后同一份代码被 Word 侧复用时补上 VBA 文档地址。
    return GW_HELP_URL_WPS;
}

function gwShowAbout() {
    var url = GetUrlPath() + '/ui/about.html';
    var ratio = window.devicePixelRatio || 1;
    try {
        app().ShowDialog(url, '关于「' + GW_APP_NAME + '」', Math.round(560 * ratio), Math.round(420 * ratio), false);
    } catch (e) {
        // 没有 ShowDialog（或宿主拒绝）时退化成纯文本，信息本身不该因为弹窗失败而看不到
        alert('关于「' + GW_APP_NAME + '」（版本 ' + GW_VERSION + '）\r\n' +
            '当前仓库: ' + GW_REPO_URL + '\r\n' +
            '本软件是「小恐龙公文排版助手」的二次开发分支，原插件已开源: ' + GW_UPSTREAM_URL);
    }
}

function gwOpenUrl(url) {
    // OAAssist.ShellExecute 是官方模板里给的调用方式，会交给系统默认浏览器；
    // 直接 window.open 在部分 WPS 版本里被拦，所以只作为兜底。
    try {
        var a = app();
        if (a && a.OAAssist && typeof a.OAAssist.ShellExecute === 'function') { a.OAAssist.ShellExecute(url); return; }
    } catch (e) { /* 落到下面的兜底 */ }
    try { window.open(url, '_blank'); } catch (e2) { alert('请手动访问: ' + url); }
}

function GetImage(control) {
    // 图标缺失时 WPS 会显示空白按钮，因此统一回落到一个一定存在的占位图。
    var map = {
        btnPageSetup: 'images/page.svg',
        btnIndent2: 'images/indent.svg',
        btnMainTitle: 'images/title.svg',
        btnBody: 'images/body.svg',
        btnDelSpace: 'images/clean.svg',
        btnNumCenter: 'images/page.svg',
        btnNumRight: 'images/page.svg',
        btnNumOutside: 'images/page.svg',
        btnAbout: 'images/info.svg',
        btnHelp: 'images/info.svg'
    };
    return map[control.Id] || 'images/page.svg';
}

function OnGetEnabled(control) {
    // 受保护/只读文档下禁用改动型按钮：C# 版由 ControlEnable 统一门控，
    // JS 版没有那个事件链，这里按文档保护状态即时判断。
    if (control.Id === 'btnAbout' || control.Id === 'btnHelp') return true;
    try {
        if (!hasDocument()) return false;
        return doc().ProtectionType === 0;   // wdNoProtection
    } catch (e) {
        return false;
    }
}
