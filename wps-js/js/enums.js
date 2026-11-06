// WPS JSAPI 沿用 Word 的对象模型，但枚举值不会自动注入（官方模板注释：
// "在后续的wps版本中，wps的所有枚举值都会通过wps.Enum对象来自动支持，现阶段先人工定义"），
// 所以这里必须给出数值。下面每个值都是从本机 Office PIA v15
// (Microsoft.Office.Interop.Word) 反射出来的，不是凭记忆写的。
// 若某个 WPS 版本已通过 Application.Enum 提供同名枚举，ribbon.js 会优先用它。
var Wd = {
    // WdFindWrap
    wdFindStop: 0,
    wdFindContinue: 1,
    // WdReplace
    wdReplaceOne: 1,
    wdReplaceAll: 2,
    // WdLayoutMode
    wdLayoutModeDefault: 0,
    wdLayoutModeGrid: 1,
    wdLayoutModeLineGrid: 2,
    // WdLineSpacing
    wdLineSpaceSingle: 0,
    wdLineSpaceExactly: 4,
    // WdParagraphAlignment
    wdAlignParagraphLeft: 0,
    wdAlignParagraphCenter: 1,
    wdAlignParagraphRight: 2,
    // WdOutlineLevel
    wdOutlineLevel1: 1,
    wdOutlineLevel2: 2,
    wdOutlineLevel3: 3,
    wdOutlineLevel4: 4,
    wdOutlineLevelBodyText: 10,
    // WdListNumberStyle
    wdListNumberStyleArabic: 0,
    wdListNumberStyleNumberInCircle: 18,
    wdListNumberStyleSimpChinNum3: 39,
    // WdTrailingCharacter
    wdTrailingTab: 0,
    wdTrailingNone: 2,
    // WdFieldType
    wdFieldEmpty: -1,
    // WdHeaderFooterIndex
    wdHeaderFooterPrimary: 1,
    wdHeaderFooterFirstPage: 2,
    wdHeaderFooterEvenPages: 3,
    // WdSeekView
    wdSeekMainDocument: 0,
    wdSeekPrimaryFooter: 4,
    wdSeekEvenPagesFooter: 6,
    wdSeekCurrentPageHeader: 9,
    wdSeekCurrentPageFooter: 10,
    // WdOrientation
    wdOrientPortrait: 0,
    wdOrientLandscape: 1,
    // WdViewType
    wdNormalView: 1,
    wdOutlineView: 2,
    wdPrintView: 3,
    // WdStyleType
    wdStyleTypeParagraph: 1,
    // WdBorderType / WdLineStyle
    wdBorderBottom: -3,
    wdLineStyleNone: 0,
    // WdCollapseDirection
    wdCollapseEnd: 0,
    // WdSelectionType
    wdSelectionNormal: 2,
    // WdNumberType（ListFormat.RemoveNumbers 的参数）
    wdNumberAllNumbers: 3,
    // WdBoolean 三态：JSAPI 里布尔属性常以 0/-1 返回
    true_: -1
};
