// 标题层级与正文：对应 src\Ribbon1.Fonts.cs 的 SetFont / SetTitle / BtnNormal_Click。
// 与 C# 的差异只有一处并且是有意为之：C# 把"设字体"和"设居中/取消编号"分成两个
// WithUndo，于是一次点击留下两个撤销单元，Ctrl+Z 要按两次；这里合并成一个。
var GW_HEADINGS = {
    1: { font: '一级标题', style: Wd.wdListNumberStyleSimpChinNum3, format: '%1、', outline: Wd.wdOutlineLevel1 },
    2: { font: '二级标题', style: Wd.wdListNumberStyleSimpChinNum3, format: '（%1）', outline: Wd.wdOutlineLevel2 },
    3: { font: '三级标题', style: Wd.wdListNumberStyleArabic, format: '%1．', outline: Wd.wdOutlineLevel3 },
    4: { font: '四级标题', style: Wd.wdListNumberStyleArabic, format: '（%1）', outline: Wd.wdOutlineLevel4 }
};

// 列表模板必须复用：每次点击都 ListTemplates.Add() 会让文档里的模板只增不减，
// 反复编号几十次后文件明显变大（C# 侧同一问题在提交里修过）。
function gwFindListTemplate(cfg, startAt) {
    var list = doc().ListTemplates;
    for (var i = 1; i <= list.Count; i++) {
        try {
            var lvl = list.Item(i).ListLevels.Item(1);
            if (lvl.NumberFormat === cfg.format && lvl.NumberStyle === cfg.style &&
                lvl.TrailingCharacter === Wd.wdTrailingNone &&
                lvl.TextPosition === 0 && lvl.NumberPosition === 0 && lvl.StartAt === startAt) {
                return list.Item(i);
            }
        } catch (e) { /* 没有 1 级定义的模板直接跳过 */ }
    }
    return null;
}

function gwCreateListTemplate(cfg, startAt) {
    var t = doc().ListTemplates.Add();
    var lvl = t.ListLevels.Item(1);
    lvl.NumberFormat = cfg.format;
    lvl.NumberStyle = cfg.style;
    lvl.TrailingCharacter = Wd.wdTrailingNone;
    lvl.TextPosition = 0;
    lvl.NumberPosition = 0;
    lvl.StartAt = startAt;
    return t;
}

// level: 1-4；startAt: 起始序号（功能区菜单项的 Tag，1-20）
function gwSetHeading(level, startAt) {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var cfg = GW_HEADINGS[level];
    if (!cfg) { alert('未知的标题级别: ' + level); return; }
    if (!(startAt >= 1)) startAt = 1;          // 与 C# 一致：0 或负数按 1 处理
    var s = gwLoadSettings();
    gwCheckFont(s.字体[cfg.font].name);
    withUndo('设为' + level + '级标题', function () {
        applyFont(s.字体[cfg.font]);
        var t = gwFindListTemplate(cfg, startAt) || gwCreateListTemplate(cfg, startAt);
        sel().ParagraphFormat.OutlineLevel = cfg.outline;
        sel().Range.ListFormat.ApplyListTemplate(t);
    });
}

// 大标题：二号方正小标宋 + 居中
function gwSetMainTitle() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var s = gwLoadSettings();
    gwCheckFont(s.字体.公文标题.name);
    withUndo('设为公文标题', function () {
        applyFont(s.字体.公文标题);
        sel().ParagraphFormat.Alignment = Wd.wdAlignParagraphCenter;
    });
}

// 正文：三号仿宋 + 去编号 + 正文大纲级别 + 首行缩进 2 字符
function gwSetBody() {
    if (!hasDocument()) { alert('没有打开的文档'); return; }
    var s = gwLoadSettings();
    withUndo('设为正文', function () {
        applyFont(s.字体.正文);
        var r = sel().Range;
        r.ListFormat.RemoveNumbers(Wd.wdNumberAllNumbers);
        r.ParagraphFormat.OutlineLevel = Wd.wdOutlineLevelBodyText;
        r.ParagraphFormat.CharacterUnitFirstLineIndent = 2;
    });
}
