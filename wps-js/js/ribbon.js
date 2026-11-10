var GW_APP_NAME = "公文准式";
var GW_VERSION = "0.0.0-dev";
var GW_REPO_URL = "https://gitlab.com/Mikachu2333/gw";
var GW_UPSTREAM_URL = "https://github.com/xkonglong/gw";
var GW_HELP_URL_WPS = "https://open.wps.cn/documents/app-integration-dev/wps365/client/wpsoffice/jsapi/";
var gwRibbonUI = null;
function gwInvalidate() {
  try {
    if (gwRibbonUI) gwRibbonUI.Invalidate();
  } catch (e) {
  }
}
function OnAddinLoad(ribbonUI) {
  gwRibbonUI = ribbonUI;
  gwLog('info', 'addin.load', gwEnvironment());
  try { gwHost('PluginStorage').setItem('gw_mika-version', GW_VERSION); } catch (e) { }
  ["WindowSelectionChange", "DocumentOpen", "DocumentNew", "WindowActivate", "DocumentBeforeClose"].forEach(function(event) {
    try {
      gwHost('ApiEvent').AddApiEventListener(event, gwInvalidate);
    } catch (e) {
      gwLogError('订阅事件 ' + event, e);
    }
  });
  gwProbeAssets();
  return true;
}
function GetImage(control) {
  // 与官方文字加载项模板一致：原生 Ribbon 从加载项根目录解析相对资源路径。
  return "images/" + (control.Tag || "PageMarginsGallery.png");
}
function OnGetEnabled(control) {
  try {
    if (control.Id === "btnSpeak" && (!window.speechSynthesis || !window.SpeechSynthesisUtterance)) return false;
    var c = GW_COMMANDS[control.Id];
    if (c && c.access === "any") return true;
    if (c && c.access === "read") return hasDocument();
    if (c && c.access === "protect") return hasDocument() && !doc().ReadOnly;
    return canEdit();
  } catch (e) { return false; }
}
function OnAction(control) {
  gwLog('info', 'command.start', { id: control.Id });
  try {
    if (!OnGetEnabled(control)) throw new Error("请打开可编辑的文档后再使用此功能。");
    var match = /^heading([1-4])_(\d+)$/.exec(control.Id);
    if (match) gwSetHeading(Number(match[1]), Number(match[2]));
    else if (/^symbol\d+$/.test(control.Id)) gwInsertText(GW_SYMBOLS[Number(control.Id.slice(6))]);
    else {
      var command = GW_COMMANDS[control.Id];
      if (!command) throw new Error("未知命令：" + control.Id);
      gwStep(control.Id, command.run);
    }
    gwLog('info', 'command.success', { id: control.Id });
    return true;
  } catch (e) {
    showError(e, "公文准式（" + control.Id + "）");
    return false;
  } finally {
    gwInvalidate();
  }
}
function gwHelpUrl() {
  return GW_HELP_URL_WPS;
}
function gwShowAbout() {
  gwDialog("about.html", "关于「公文准式」", 600, 500);
}
function gwTitleFont(control, text) {
  try {
    if (!canEdit() || gwFontNames().indexOf(text) < 0) return;
    withUndo("设置公文标题字体", function() {
      applyFont({ name: text, size: 22 });
      sel().ParagraphFormat.Alignment = 1;
    });
  } catch (e) {
    showError(e, "设置标题字体");
  }
}
var gwTitleFonts;
function gwGetTitleFonts() {
  if (!gwTitleFonts) gwTitleFonts = gwFontNames().filter(function(n) {
    return /宋|黑|楷/.test(n);
  });
  return gwTitleFonts;
}
function GetFontCount() {
  return gwGetTitleFonts().length;
}
function GetFontLabel(control, index) {
  return gwGetTitleFonts()[index];
}
function GetFontText() {
  return gwLoadSettings().字体.公文标题.name;
}
var GW_SYMBOLS = ["㎡", "m³", "‰", "℃", "·", "……", "——", "～", "〔〕", "《》", "〈〉", "×", "÷", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩", "□", "★", "※", "￥", "√", "⚪", "☑", "☒", "☐"];
var GW_COMMANDS = {
  fontFSgb: { access: "edit", run: function() {
    gwFontSwitch(["仿宋_GB2312"], "仿宋");
  } },
  fontFS: { access: "edit", run: function() {
    gwFontSwitch(["仿宋"], "仿宋_GB2312");
  } },
  fontKTgb: { access: "edit", run: function() {
    gwFontSwitch(["楷体_GB2312"], "楷体");
  } },
  fontKT: { access: "edit", run: function() {
    gwFontSwitch(["楷体"], "楷体_GB2312");
  } },
  fontBSgb: { access: "edit", run: function() {
    gwFontSwitch(["方正小标宋简体", "方正小标宋"], "方正小标宋_GBK");
  } },
  fontGBbs: { access: "edit", run: function() {
    gwFontSwitch(["方正小标宋_GBK", "方正小标宋GBK"], "方正小标宋简体");
  } },
  fontBSh: { access: "edit", run: function() {
    gwFontSwitch(["方正小标宋_GBK", "方正小标宋简体", "方正小标宋"], "黑体");
  } },
  fontHbs: { access: "edit", run: function() {
    gwFontSwitch(["黑体"], "方正小标宋_GBK");
  } },
  btnLatinFont: { access: "edit", run: function() {
    gwDialog("settings.html?page=latin", "指定字体更改", 560, 380);
  } },
  btnUnderDot: { access: "edit", run: function() {
    gwToggleFont("EmphasisMark");
  } },
  btnHideFont: { access: "edit", run: function() {
    gwToggleFont("Hidden");
  } },
  btnHead: { access: "edit", run: function() {
    gwPresetFont("版头");
  } },
  btnName: { access: "edit", run: function() {
    gwPresetFont("签发人姓名");
  } },
  btnFoot: { access: "edit", run: function() {
    gwPresetFont("版记");
  } },
  btnPageSetup: { access: "edit", run: function() {
    gwDialog("settings.html?page=page", "公文页面设置", 600, 580);
  } },
  btnIndent2: { access: "edit", run: gwFirstLineIndent2 },
  btnFlush: { access: "edit", run: gwParagraphFlush },
  btnDelHeaderLine: { access: "edit", run: gwDeleteHeaderLine },
  btnDelHeader: { access: "edit", run: gwDeleteHeader },
  btnReflow: { access: "edit", run: gwReflowLines },
  btnLineBreak: { access: "edit", run: gwLineBreakToParagraph },
  btnDelSpace: { access: "edit", run: gwDeleteSpaces },
  btnDelHalfSpace: { access: "edit", run: function() {
    gwSimpleReplace(" ", "", false);
  } },
  btnDelEmptyLine: { access: "edit", run: function() {
    gwDeleteEmptyLines(false);
  } },
  btnDelSelEmptyLine: { access: "edit", run: function() {
    gwDeleteEmptyLines(true);
  } },
  btnDelGraphic: { access: "edit", run: gwDeleteGraphics },
  btnRemoveURL: { access: "edit", run: gwRemoveLinks },
  btnCnEnSpace: { access: "edit", run: gwSpaceBetweenCnEn },
  btnPunctEn2Cn: { access: "edit", run: gwPunctEnToCn },
  btnPunctCn2En: { access: "edit", run: gwPunctCnToEn },
  btnFrameText: { access: "edit", run: gwFramesToText },
  btnParaPage: { access: "edit", run: gwPageBreakBefore },
  btnMainTitle: { access: "edit", run: gwSetMainTitle },
  btnBody: { access: "edit", run: gwSetBody },
  btnHeading1: { access: "edit", run: function() {
    gwSetHeading(1, 1);
  } },
  btnHeading2: { access: "edit", run: function() {
    gwSetHeading(2, 1);
  } },
  btnHeading3: { access: "edit", run: function() {
    gwSetHeading(3, 1);
  } },
  btnHeading4: { access: "edit", run: function() {
    gwSetHeading(4, 1);
  } },
  btnNum2Text: { access: "edit", run: gwNumbersToText },
  btnStyles: { access: "edit", run: gwStyles },
  btnRefreshStyles: { access: "edit", run: gwStyles },
  btnHeadSingle: { access: "edit", run: function() {
    gwInsertPart("版头:单行发文机关");
  } },
  btnHeadMulti: { access: "edit", run: function() {
    gwInsertPart("版头:联合发文机关");
  } },
  btnLineTop: { access: "edit", run: function() {
    gwInsertPart("版头:函线(上沿)");
  } },
  btnLineBottom: { access: "edit", run: function() {
    gwInsertPart("版头:函线(下沿)");
  } },
  btnBind: { access: "edit", run: function() {
    gwInsertPart("装订线");
  } },
  btnRedLine: { access: "edit", run: gwInsertRedLine },
  btnImprint1: { access: "edit", run: function() {
    gwImprint(1);
  } },
  btnImprint2: { access: "edit", run: function() {
    gwImprint(2);
  } },
  btnDate: { access: "edit", run: gwInsertDate },
  btnLandscape: { access: "edit", run: gwLandscapePage },
  btnNumCenter: { access: "edit", run: function() {
    gwPageNumber(0);
  } },
  btnNumRight: { access: "edit", run: function() {
    gwPageNumber(2);
  } },
  btnNumOutside: { access: "edit", run: function() {
    gwPageNumber(1);
  } },
  btnNumHere: { access: "edit", run: gwInsertPageNumberField },
  btnBrackets: { access: "edit", run: function() {
    gwBrackets("square");
  } },
  btnBracketsBlack: { access: "edit", run: function() {
    gwBrackets("black");
  } },
  btnCircle: { access: "edit", run: gwCircleNumber },
  btnStamp: { access: "edit", run: function() {
    gwStamp(false);
  } },
  btnStampLink: { access: "edit", run: function() {
    gwStamp(true);
  } },
  btnStampEmbed: { access: "edit", run: function() {
    gwStamp(false);
  } },
  btnPDF: { access: "read", run: function() {
    gwSaveCopy("pdf");
  } },
  btnDOC: { access: "edit", run: function() {
    gwSaveCopy("doc");
  } },
  btnSaveImages: { access: "read", run: function() { gwDialog('export.html', '页面图片副本', 650, 480); } },
  btnImagePDF: { access: "read", run: function() { gwDialog('export.html?format=pdf', '图片型 PDF 副本', 650, 480); } },
  btnScripts: { access: "any", run: function() { gwDialog('scripts.html', '公文准式脚本工具', 980, 720); } },
  btnProtect: { access: "protect", run: function() {
    gwDialog("settings.html?page=protect", "限制编辑", 500, 350);
  } },
  btnPassword: { access: "edit", run: function() {
    gwDialog("settings.html?page=password", "文档加密", 520, 400);
  } },
  btnClearOpenPassword: { access: "edit", run: function() {
    gwClearPassword(true);
  } },
  btnClearWritePassword: { access: "edit", run: function() {
    gwClearPassword(false);
  } },
  btnSpeak: { access: "read", run: gwSpeak },
  btnAbout: { access: "any", run: gwShowAbout },
  btnDiagnostics: { access: "any", run: gwShowDiagnostics },
  btnAdvancedSettings: { access: "any", run: function() {
    gwDialog("settings.html?page=fonts", "高级设置", 720, 680);
  } },
  btnHelp: { access: "any", run: function() {
    gwOpenUrl(gwHelpUrl());
  } }
};
