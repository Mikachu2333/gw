# Paragraph 对象

代表所选内容、范围或文档中的一个段落。 **Paragraph** 对象是 **Paragraphs** 集合的一个成员。 **Paragraphs** 集合包含所选内容、范围或文档中的所有段落。

## 说明


使用 **Paragraphs** (*Index*) 可返回一个 **Paragraph** 对象，其中 *Index* 为索引号。

使用 **Add** 、 **InsertParagraph** 、 **InsertParagraphAfter** 或 **InsertParagraphBefore** 方法可在文档中添加一个新的空白段落。


## 示例


```JavaScript
/*本示例将活动文档中的第一段右对齐。*/
function test() {
    Application.ActiveDocument.Paragraphs.Item(1).Alignment = wdAlignParagraphRight
}
```


```JavaScript
/*本示例在所选内容的第一段前添加一个段落标记。*/
function test() {
    let range = Application.Selection.Paragraphs.Item(1).Range
    Application.Selection.Paragraphs.Add(range)
}
```


```JavaScript
/*本示例同样在所选内容的第一段前添加一个段落标记。*/
function test() {
    Application.Selection.Paragraphs.Item(1).Range.InsertParagraphBefore()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [CloseUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/CloseUp) | 清除指定段落前的任何间距。 |
| [Indent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Indent) | 为一个或多个段落增加一个级别的缩进。 |
| [IndentCharWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/IndentCharWidth) | 将段落缩进指定的字符数。 |
| [IndentFirstLineCharWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/IndentFirstLineCharWidth) | 将一个或多个段落的首行缩进指定的字符数。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Next) | 返回一个 **Paragraph** 对象，该对象代表下一段。 |
| [OpenOrCloseUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/OpenOrCloseUp) | 切换段前间距。 |
| [OpenUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/OpenUp) | 为指定段落设置 12 磅的段前间距。 |
| [Outdent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Outdent) | 为一个或多个段落删除一个级别的缩进。 |
| [OutlineDemote](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/OutlineDemote) | 对指定段落应用下一个标题级别样式（从“标题 1”到“标题 8”）。 |
| [OutlineDemoteToBody](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/OutlineDemoteToBody) | 通过应用“正文”样式将指定段落降级为正文文本。 |
| [OutlinePromote](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/OutlinePromote) | 对指定段落应用上一个标题级别样式（从“标题 1”到“标题 8”）。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Previous) | 将上一段作为一个 **Paragraph** 对象返回。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Reset) | 删除手动段落格式（不使用样式应用的格式）。 |
| [SelectNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/SelectNumber) | 选择列表中的编号或项目符号。 |
| [Space1](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Space1) | 为指定段落设置单倍行距。 |
| [Space15](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Space15) | 为指定段落设置 1.5 倍行距。 |
| [Space2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Space2) | 为指定段落设置 2 倍行距。 |
| [TabHangingIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/TabHangingIndent) | 将悬挂缩进量设置为指定的制表位数。 |
| [TabIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/TabIndent) | 将指定段落的左缩进量设置为指定的制表位数。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AddSpaceBetweenFarEastAndAlpha](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/AddSpaceBetweenFarEastAndAlpha) | 如果 WPS 将自动在指定段落的日文和拉丁文文字之间添加空格，则该属性值为 **True** 。如果仅对于某些指定段落将该属性设置为 **True** ，则该属性会返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [AddSpaceBetweenFarEastAndDigit](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/AddSpaceBetweenFarEastAndDigit) | 如果 WPS 将自动在指定段落的日文文字和数字之间添加空格，则该属性值为 **True** 。如果仅对于某些指定段落将该属性设置为 **True** ，则该属性会返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Alignment) | 返回或设置一个 **WdParagraphAlignment** 常量，该常量代表指定段落的对齐方式，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [AutoAdjustRightIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/AutoAdjustRightIndent) | 如果 WPS 会根据您指定的每行字符数自动调整指定段落的右缩进，则该属性值为 **True** 。如果只将某些指定段落的 **AutoAdjustRightIndent** 属性设置为 **True** ，则该属性会返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [BaseLineAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/BaseLineAlignment) | 返回或设置一个 **WdBaselineAlignment** 常量，该常量代表行中字体的垂直位置，可读写。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Borders) | 返回一个 **Borders** 集合，该集合代表指定段落的所有边框。 |
| [CharacterUnitFirstLineIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/CharacterUnitFirstLineIndent) | 返回或设置首行或悬挂缩进的值（以字符为单位）。用正值设置首行缩进，用负值设置悬挂缩进。 **Single** 类型，可读写。 |
| [CharacterUnitLeftIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/CharacterUnitLeftIndent) | 该属性返回或设置指定段落的左缩进量（以字符为单位）。 **Single** 类型，可读写。 |
| [CharacterUnitRightIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/CharacterUnitRightIndent) | 该属性返回或设置指定段落的右缩进量（以字符为单位）。 **Single** 类型，可读写。 |
| [CollapseHeadingByDefault](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/CollapseHeadingByDefault) | 返回或设置在文档加载时是否默认折叠指定的段落。 **Boolean** 类型，可读写。 |
| [CollapsedState](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/CollapsedState) | 返回或设置指定的段落当前是否处于折叠状态。 **Boolean** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DisableLineHeightGrid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/DisableLineHeightGrid) | 如果该属性的值为 **True** ，则当指定每页的行数时，WPS 会将指定段落中的字符与行网格对齐。如果只将某些指定段落的 **DisableLineHeightGrid** 属性设置为 **True** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [DropCap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/DropCap) | 返回一个 **DropCap** 对象，该对象代表指定段落中格式为首字下沉的大写字母。只读。 |
| [FarEastLineBreakControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/FarEastLineBreakControl) | 如果为 **True** ，则 WPS 会将东亚语言文字的换行规则应用于指定的段落。如果只将某些指定段落的 **FarEastLineBreakControl** 属性设定为 **True** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [FirstLineIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/FirstLineIndent) | 返回或设置首行缩进或悬挂缩进的大小（以磅值表示）。用正数设置首行缩进的尺寸，用负数设置悬挂缩进的尺寸。 **Single** 类型，可读写。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Format) | 返回或设置一个 **ParagraphFormat** 对象，该对象代表指定的一个或多个段落的格式。 |
| [HalfWidthPunctuationOnTopOfLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/HalfWidthPunctuationOnTopOfLine) | 如果为 **True** ，则 WPS 会将指定段落行首的标点符号改为半角字符。如果仅将某些指定段落的该属性设置为 **True** ，则此属性将返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [HangingPunctuation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/HangingPunctuation) | 如果为 **True** ，则指定段落中的标点将可以溢出边界。如果仅将某些指定段落的该属性设置为 **True** ，则返回 **wdUndefined** 。 **Long** 类型，可读写。 |
| [Hyphenation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Hyphenation) | 如果指定的段落进行自动断字，则该属性值为 **True** 。如果指定的段落不进行自动断字，则该属性值为 **False** 。可读写 **Long** 类型。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/ID) | 在当前文档另存为网页时，返回或设置指定对象的标识标签。可读写 **String** 类型。 |
| [KeepTogether](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/KeepTogether) | 在 WPS 对文档重新分页时，如果指定段落中的所有行都位于同一页上，则该属性值为 **True** 。可读写 **Long** 类型。 |
| [KeepWithNext](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/KeepWithNext) | 在 WPS 对文档重新分页时，如果指定段落与它的下一段位于同一页上，则该属性值为 **True** 。可读写 **Long** 类型。 |
| [LeftIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/LeftIndent) | 返回或设置一个 **Single** 类型的值，该值代表指定段落的左缩进值（以磅为单位）。可读写。 |
| [LineSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/LineSpacing) | 返回或设置指定段落的行距（以磅为单位）。 **Single** 类型，可读写。 |
| [LineSpacingRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/LineSpacingRule) | 返回或设置指定段落的行距。可读写 **WdLineSpacing** 类型。 |
| [LineUnitAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/LineUnitAfter) | 返回或设置指定段落的段后间距（以网格线为单位）。可读写 **Single** 类型。 |
| [LineUnitBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/LineUnitBefore) | 返回或设置指定段落的段前间距（以网格线为单位）。可读写 **Single** 类型。 |
| [MirrorIndents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/MirrorIndents) | 返回或设置一个 **Long** 类型的值，该值代表左缩进和右缩进的宽度是否相同。该属性值可以是 **msoTrue** 、 **msoFalse** 或 **wdUndefined** 。可读写。 |
| [NoLineNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/NoLineNumber) | 如果取消指定段落的行号，则该属性值为 **True** 。可读写 **Long** 类型。 |
| [OutlineLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/OutlineLevel) | 返回或设置指定段落的大纲级别。可读写 **WdOutlineLevel** 类型。 |
| [PageBreakBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/PageBreakBefore) | 如果在指定段落前插入了分页符，则该属性值为 **True** 。可读写 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Paragraph** 对象的父对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Range) | 返回一个 **Range** 对象，该对象代表指定段落中包含的文档部分。 |
| [ReadingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/ReadingOrder) | 返回或设置指定段落的读取次序而不改变其对齐方式。可读写 **WdReadingOrder** 类型。 |
| [RightIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/RightIndent) | 返回或设置指定段落的右缩进（以磅为单位）。可读写 **Single** 类型。 |
| [Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Shading) | 返回一个 **Shading** 对象，该对象引用指定段落的底纹格式。 |
| [SpaceAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/SpaceAfter) | 返回或设置指定段落或文本栏后面的间距（以磅为单位）。可读/写 **Single** 类型。 |
| [SpaceAfterAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/SpaceAfterAuto) | 如果 WPS 自动设置指定段落的段后间距，则该属性为 **msoTrue** 。可读/写 **Long** 类型。 |
| [SpaceBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/SpaceBefore) | 返回或设置指定段落的段前间距（以磅为单位）。可读/写 **Single** 类型。 |
| [SpaceBeforeAuto](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/SpaceBeforeAuto) | 如果 WPS 自动设置指定段落的段前间距，则该属性为 **msoTrue** 。可读/写 **Long** 类型。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/Style) | 返回或设置指定对象的样式。可读写 **Variant** 类型。 |
| [TabStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/TabStops) | 返回或设置 **TabStops** 集合，该集合表示指定段落的所有自定义制表位。可读写。 |
| [TextboxTightWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/TextboxTightWrap) | 返回或设置一个 **WdTextboxTightWrap** 常量，该常量代表文本环绕形状或文本框的紧密程度。可读写。 |
| [WidowControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/WidowControl) | 在 WPS 对文档重新分页时，如果指定段落的首行和末行与段落的其他各行同页，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [WordWrap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraph/member/WordWrap) | 如果 WPS 在指定段落或文本框架的西文单词中间断字换行，则该属性值为 **msoFalse** 。可读写 **Long** 类型。 |