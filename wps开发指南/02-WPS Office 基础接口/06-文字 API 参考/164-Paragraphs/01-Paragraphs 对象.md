# Paragraphs 对象

所选内容、范围或文档中的 **[Paragraph](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/obj)** 对象的集合。

## 说明


使用 **Paragraphs** 属性可返回 **Paragraphs** 集合。

使用 **Add** 、 **InsertParagraph** 、 **InsertParagraphAfter** 或 **InsertParagraphBefore** 方法可向文档添加一个新段落。

使用 **Paragraphs** (_Index_) 可返回一个 **Paragraph** 对象，其中 _Index_ 为索引号。

在一个文档中，以上集合的 **Count** 属性返回的只是正文中的段落个数。要统计其他部分中的段落个数，请使用带有 **Range** 对象的相应集合。


## 示例


```JavaScript
/*本示例为所选段落设置右对齐和 2 倍行距。*/
function test() {
    Selection.Paragraphs.Alignment = wdAlignParagraphRight
    Selection.Paragraphs.LineSpacingRule = wdLineSpaceDouble
}
```


```JavaScript
/*本示例在所选内容的第一段前添加一个新段落。*/
function test() {
    Selection.Paragraphs.Add(Selection.Paragraphs.Item(1).Range)
}
```


```JavaScript
/*本示例在所选内容的第一段前添加一个新段落。*/
function test() {
    Selection.Paragraphs.Item(1).Range.InsertParagraphBefore()
}
```


```JavaScript
/*本示例将活动文档中的第一段的对齐方式设置为右对齐。*/
function test() {
    ActiveDocument.Paragraphs.Item(1).Alignment = wdAlignParagraphRight
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Add) | 返回一个 **Paragraph** 对象，该对象代表添加到文档中的新的空白段落。 |
| [CloseUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/CloseUp) | 清除指定段落前的段落间距。 |
| [DecreaseSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/DecreaseSpacing) | 以 6 磅增量缩减段前和段后的间距。 |
| [IncreaseSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/IncreaseSpacing) | 以 6 磅增量增加段前和段后的间距。 |
| [Indent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Indent) | 为一个或多个段落增加一个级别的缩进。 |
| [IndentCharWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/IndentCharWidth) | 将一个或多个段落缩进指定的字符数。 |
| [IndentFirstLineCharWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/IndentFirstLineCharWidth) | 将一个或多个段落的首行缩进指定的字符数。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Item) | 返回集合中的单个 **Paragraph** 对象。 |
| [OpenOrCloseUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/OpenOrCloseUp) | 切换段前间距。 |
| [OpenUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/OpenUp) | 为指定段落设置 12 磅的段前间距。 |
| [Outdent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Outdent) | 为一个或多个段落删除一个级别的缩进。 |
| [OutlineDemote](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/OutlineDemote) | 对指定段落应用下一个标题级别样式（从“标题 1”到“标题 8”）。 |
| [OutlineDemoteToBody](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/OutlineDemoteToBody) | 通过应用“正文”样式将指定段落降级为正文文本。 |
| [OutlinePromote](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/OutlinePromote) | 对指定段落应用上一个标题级别样式（从“标题 1”到“标题 8”）。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Reset) | 删除手动段落格式（不使用样式应用的格式）。 |
| [Space1](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Space1) | 为指定段落设置单倍行距。 |
| [Space15](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Space15) | 为指定段落设置 1.5 倍行距。 |
| [Space2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Space2) | 为指定段落设置 2 倍行距。 |
| [TabHangingIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/TabHangingIndent) | 将悬挂缩进量设置为指定的制表位数。 |
| [TabIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/TabIndent) | 将指定段落的左缩进量设置为指定的制表位数。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AddSpaceBetweenFarEastAndAlpha](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/AddSpaceBetweenFarEastAndAlpha) | 如果 WPS 将自动在指定段落的日文和拉丁文文字之间添加空格，则该属性值为 **msoTrue** 。如果仅对于某些指定段落将该属性设置为 **msoTrue** ，则该属性会返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [AddSpaceBetweenFarEastAndDigit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/AddSpaceBetweenFarEastAndDigit) | 如果 WPS 将自动在指定段落的日文文字和数字之间添加空格，则该属性值为 **msoTrue** 。如果仅对于某些指定段落将该属性设置为 **msoTrue** ，则该属性会返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Alignment) | 返回或设置一个 **WdParagraphAlignment** 常量，该常量代表指定段落的对齐方式，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [AutoAdjustRightIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/AutoAdjustRightIndent) | 如果 WPS 会根据您指定的每行字符数自动调整指定段落的右缩进，则该属性值为 **msoTrue** 。如果只将某些指定段落的 **AutoAdjustRightIndent** 属性设置为 **msoTrue** ，则该属性会返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [BaseLineAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/BaseLineAlignment) | 返回或设置一个 **WdBaselineAlignment** 常量，该常量代表行中字体的垂直位置，可读写。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Borders) | 返回一个 **Borders** 集合，该集合代表指定对象的所有边框。 |
| [CharacterUnitFirstLineIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/CharacterUnitFirstLineIndent) | 返回或设置首行或悬挂缩进的值（以字符为单位）。用正值设置首行缩进，用负值设置悬挂缩进。 **Single** 类型，可读写。 |
| [CharacterUnitLeftIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/CharacterUnitLeftIndent) | 该属性返回或设置指定段落的左缩进量（以字符为单位）。 **Single** 类型，可读写。 |
| [CharacterUnitRightIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/CharacterUnitRightIndent) | 该属性返回或设置指定段落的右缩进量（以字符为单位）。 **Single** 类型，可读写。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中的段数。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DisableLineHeightGrid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/DisableLineHeightGrid) | 如果该属性的值为 **msoTrue** ，则当指定每页的行数时，WPS 会将指定段落中的字符与行网格对齐。如果只将某些指定段落的 **DisableLineHeightGrid** 属性设置为 **msoTrue** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [FarEastLineBreakControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/FarEastLineBreakControl) | 如果为 **msoTrue** ，则 WPS 会将东亚语言文字的换行规则应用于指定的段落。如果只将某些指定段落的 **FarEastLineBreakControl** 属性设定为 **msoTrue** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [First](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/First) | 返回一个 **Paragraph** 对象，该对象代表在 **Paragraphs** 集合中的第一个项目。 |
| [FirstLineIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/FirstLineIndent) | 返回或设置首行缩进或悬挂缩进的大小（以磅值表示）。用正数设置首行缩进的尺寸，用负数设置悬挂缩进的尺寸。 **Single** 类型，可读写。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Format) | 返回或设置一个 **ParagraphFormat** 对象，该对象代表指定的一个或多个段落的格式。 |
| [HalfWidthPunctuationOnTopOfLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/HalfWidthPunctuationOnTopOfLine) | 如果为 **msoTrue** ，则 WPS 会将指定段落行首的标点符号改为半角字符。如果仅将某些指定段落的该属性设置为 **msoTrue** ，则此属性将返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [HangingPunctuation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/HangingPunctuation) | 如果为 **msoTrue** ，则指定段落中的标点将可以溢出边界。如果仅将某些指定段落的该属性设置为 **msoTrue** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [Hyphenation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Hyphenation) | 如果指定的段落进行自动断字，则该属性值为 **msoTrue** 。如果指定的段落不进行自动断字，则该属性值为 **msoFalse** 。可读写 **Long** 类型。 |
| [KeepTogether](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/KeepTogether) | 在 WPS 对文档重新分页时，如果指定段落中的所有行都位于同一页上，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [KeepWithNext](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/KeepWithNext) | 在 WPS 对文档重新分页时，如果指定段落与其下一段位于同一页上，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [Last](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Last) | 返回一个 **Paragraph** 对象，该对象代表段落集合中的最后一个项目。 |
| [LeftIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/LeftIndent) | 返回或设置一个 **Single** 类型的值，该值代表指定段落的左缩进值（以磅为单位）。可读写。 |
| [LineSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/LineSpacing) | 返回或设置指定段落的行距（以磅为单位）。 **Single** 类型，可读写。 |
| [LineSpacingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/LineSpacingRule) | 返回或设置指定段落的行距。可读写 **WdLineSpacing** 类型。 |
| [LineUnitAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/LineUnitAfter) | 返回或设置指定段落的段后间距（以网格线为单位）。可读写 **Single** 类型。 |
| [LineUnitBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/LineUnitBefore) | 返回或设置指定段落的段前间距（以网格线为单位）。可读写 **Single** 类型。 |
| [NoLineNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/NoLineNumber) | 如果取消指定段的行号，则该属性值为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写 **Long** 类型。 |
| [OutlineLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/OutlineLevel) | 返回或设置指定段落的大纲级别。可读写 **WdOutlineLevel** 类型。 |
| [PageBreakBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/PageBreakBefore) | 如果在指定段落前插入了分页符，则该属性值为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Paragraphs** 对象的父对象。 |
| [ReadingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/ReadingOrder) | 返回或设置指定段落的读取次序而不改变其对齐方式。可读写 **WdReadingOrder** 类型。 |
| [RightIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/RightIndent) | 返回或设置指定段落的右缩进量（以磅为单位）。可读写 **Single** 类型。 |
| [Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Shading) | 返回一个 **Shading** 对象，该对象代表指定段落的底纹格式。 |
| [SpaceAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/SpaceAfter) | 返回或设置指定段落或文本栏后面的间距（以磅为单位）。可读/写 **Single** 类型。 |
| [SpaceAfterAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/SpaceAfterAuto) | 如果 WPS 自动设置指定段落的段后间距，则该属性为 **msoTrue** 。可读/写 **Long** 类型。 |
| [SpaceBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/SpaceBefore) | 返回或设置指定段落的段前间距（以磅为单位）。可读/写 **Single** 类型。 |
| [SpaceBeforeAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/SpaceBeforeAuto) | 如果 WPS 自动设置指定段落的段前间距，则该属性为 **msoTrue** 。可读/写 **Long** 类型。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/Style) | 返回或设置指定段落的样式。可读写 **Variant** 类型。 |
| [TabStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/TabStops) | 返回或设置一个 **TabStops** 集合，该集合代表指定段落中的所有自定义制表位。可读写。 |
| [WidowControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/WidowControl) | 在 WPS 对文档重新分页时，如果指定段落的首行和末行与段落的其他各行同页，则该属性值为 **msoTrue** 。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写 **Long** 类型。 |
| [WordWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/member/WordWrap) | 如果 WPS 在指定段落中的西文单词中间断字换行，则该属性值为 **msoFalse** 。可读写 **Long** 类型。 |