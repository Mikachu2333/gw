# Range 对象

代表文档中的一个连续区域。每个 **Range** 对象由一个起始字符位置和一个终止字符位置定义。

## 说明


与书签在文档中的使用方法类似， **Range** 对象在 JavaScript 过程中用来标识文档的特定部分。但与书签不同的是， **Range** 对象只在定义该对象的过程运行时才存在。 **Range** 对象独立于所选内容。也就是说，您可以定义和处理一个范围而无需更改所选内容。还可以在文档中定义多个范围，但每个窗格中只能有一个所选内容。

使用 **Range** 方法可返回由给定的起始字符和结束字符位置定义的 **Range** 对象。


## 示例


```JavaScript
/*本示例将返回引用活动文档中的前 10 个字符的 Range 对象。*/
function test() {
    let range = ActiveDocument.Range(0, 10)
}
```
使用 **Range** 属性可返回由另一个对象的开头和结尾定义的 **Range** 对象。 **Range** 属性适用于许多对象（例如， **Paragraph** 、 **Bookmark** 和 **Cell** ）。



```JavaScript
/*本示例返回引用活动文档中第一段的 Range 对象。*/
function test() {
    let range = ActiveDocument.Paragraphs.Item(1).Range
}
```


```JavaScript
/*本示例返回一个 Range 对象，该对象引用活动文档中的第二段到第四段。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(2).Range.Start, paragraphs.Item(4).Range.End)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [CheckSpelling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/CheckSpelling) | 开始对指定的文档或区域进行拼写检查。 |
| [Collapse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Collapse) | 将某一区域或所选内容折叠到起始位置或结束位置。折叠之后起始位置和结束位置相同。 |
| [ComputeStatistics](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ComputeStatistics) | 返回一个 **Long** 类型的值，该值代表基于指定范围内容的统计值。 |
| [ConvertToTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ConvertToTable) | 将范围内的文本转换为表格。将该表格作为一个 **Table** 对象返回。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Copy) | 将指定范围复制到剪贴板。 |
| [CopyAsPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/CopyAsPicture) | **CopyAsPicture** 方法与 **Copy** 方法的工作方式相同。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Cut) | 将指定对象从文档中移到剪贴板上 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Delete) | 删除指定数量的字符或单词。 |
| [EndOf](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/EndOf) | 将区域的结束字符位置移动或扩展到最近的一个指定文本单位末尾。 |
| [Expand](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Expand) | 扩展指定区域。返回添至该区域的字符数。 **Long** 类型。 |
| [ExportAsFixedFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ExportAsFixedFormat) | 将文档的一部分保存为 PDF 或 XPS 格式。 |
| [ExportFragment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ExportFragment) | 将指定区域导出到文档中，以便用作文档片段。 |
| [GoTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/GoTo) | 返回一个 **Range** 对象，该对象代表指定项（如页、书签或域）的起始位置。 |
| [GoToEditableRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/GoToEditableRange) | 返回一个 **Range** 对象，该对象代表指定用户或用户组可以修改的文档区域。 |
| [GoToNext](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/GoToNext) | 返回一个 **Range** 对象，该对象代表下一项目的起始位置或者由 _What_ 参数指定的位置。 |
| [GoToPrevious](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/GoToPrevious) | 返回一个 **Range** 对象，该对象参考前一项目的起始位置或者由参数 _What_ 确定的位置。 |
| [InRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InRange) | 如果应用此方法的范围包含在由参数 _Range_ 指定的范围内，则该方法返回 **True** 。 |
| [InStory](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InStory) | 如果应用此方法的范围与 _Range_ 参数指定的范围位于相同的文字部分（文章：包含文档中可区别于其他文字区域的文字区域。例如，如果文档包括正文文本、脚注和标题，则文章包含主文章、脚注文章和标题文章。）中，则该方法返回 **True** 。 |
| [Information](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Information) | 返回有关指定范围的信息。只读 **Variant** 类型。 |
| [InsertAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertAfter) | 在范围的末尾插入指定文本。 |
| [InsertBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertBefore) | 在指定的范围前插入指定文本。 |
| [InsertBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertBreak) | 插入分页符、分栏符或分节符等分隔符。 |
| [InsertCaption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertCaption) | 紧接在指定范围之前或之后插入题注。 |
| [InsertDateTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertDateTime) | 以文本或 TIME 域的形式插入当前日期或时间，或将两者都插入。 |
| [InsertFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertFile) | 插入指定文件的全部或一部分。 |
| [InsertParagraph](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertParagraph) | 用新段落替换指定范围。 |
| [InsertParagraphAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertParagraphAfter) | 在范围之后插入段落标记。 |
| [InsertParagraphBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertParagraphBefore) | 在指定的范围前插入一个新段落。 |
| [InsertSymbol](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InsertSymbol) | 插入一个符号，用于替换指定的范围。 |
| [IsEqual](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/IsEqual) | 如果应用此方法的范围等于 _Range_ 参数所指定的范围，则该方法返回 **True** 。 |
| [ModifyEnclosure](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ModifyEnclosure) | 添加、修改或删除指定字符周围的圈号。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Move) | 将指定范围折叠到其起始位置或结束位置，然后将折叠后的对象移动指定的单位数。 |
| [MoveEnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/MoveEnd) | 移动范围的结束字符位置。 |
| [MoveEndUntil](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/MoveEndUntil) | 移动指定范围的结束位置，直到在文档中找到任何指定的字符。如果在文档中是向前移动，则扩展该范围。 |
| [MoveEndWhile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/MoveEndWhile) | 在文档找到任何指定的字符时，移动某一范围的结束字符位置。 |
| [MoveStart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/MoveStart) | 移动指定范围的起始位置。 |
| [MoveStartUntil](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/MoveStartUntil) | 移动指定范围的起始位置，直到在文档中找到一个指定的字符。 |
| [MoveStartWhile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/MoveStartWhile) | 当在文档中找到任何指定的字符时，移动指定范围的起始位置。 |
| [MoveUntil](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/MoveUntil) | 移动指定范围，直到在文档中找到指定字符中的一个为止。 |
| [MoveWhile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/MoveWhile) | 当在文档中找到任何指定的字符时，移动指定范围。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Next) | 返回一个 **Range** 对象，该对象代表相对于指定范围的指定单位。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Paste) | 将“剪贴板”中的内容插入指定范围。 |
| [PasteAndFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/PasteAndFormat) | 粘贴选定的表格单元格，并为其设置指定的格式。 |
| [PasteExcelTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/PasteExcelTable) | 粘贴 ET 表格并设置其格式。 |
| [PasteSpecial](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/PasteSpecial) | 插入剪贴板中的内容。 |
| [PhoneticGuide](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/PhoneticGuide) | 将拼音指南添加到指定区域。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Previous) | 返回相对于指定范围的前一个范围。 |
| [Relocate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Relocate) | 在大纲视图中，将指定区域中各段移至下一个可见段落之后或上一个可见段落之前。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Select) | 选择指定的范围。 |
| [SetRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/SetRange) | 设置现有范围的起始字符和结束字符的位置。 |
| [StartOf](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/StartOf) | 将指定的区域的开始位置移动或扩展至最近的指定文字单位的开头。该方法返回 **Long** 类型的值表明了区域移动或扩展的字符数。如果是在文档中向后移动，则该方法返回负数。 |
| [TCSCConverter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/TCSCConverter) | 将指定区域的文本由繁体中文转换为简体中文，或进行相反转换。 |
| [WholeStory](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/WholeStory) | 扩展某一范围使其包含整个文章（文章：包含文档中可区别于其他文字区域的文字区域。例如，如果文档包括正文文本、脚注和标题，则文章包含主文章、脚注文章和标题文章。）。 |
| [XML](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/XML) | 返回一个 **String** 类型的值，该值代表指定对象中的 XML 文本。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Bold](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Bold) | 如果选定区域中字体的格式为加粗，则该属性值为 **msoTrue** 。 **Long** 类型，可读写。 |
| [BoldBi](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/BoldBi) | 如果字体或区域为加粗格式，则为 **msoTrue** 。该属性值返回 **msoTrue** 、 **msoFalse** 或 **wdUndefined** （用于加粗和非加粗混合文本）。可设置为 **msoTrue** 、 **msoFalse** 或 **wdToggle** 。 **Long** 类型，可读写。 |
| [BookmarkID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/BookmarkID) | 返回位于指定区域开始位置的书签编号。如果没有相应的书签，则返回 0（零）。 **Long** 类型，只读。 |
| [Bookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Bookmarks) | 返回一个 **[Bookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/obj)** 集合。该集合代表某一文档、区域或选定内容中的所有书签。只读。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Borders) | 返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定对象的所有边框。 |
| [Case](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Case) | 返回或设置一个 **WdCharacterCase** 常量，该常量代表指定区域中文字的大小写。可读写。 |
| [Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Cells) | 返回一个 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/obj)** 集合，该集合代表在某区域中的表格单元格。只读。 |
| [CharacterStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/CharacterStyle) | 返回一个 **Variant** 类型的值，该值代表用于设置一个或多个字符格式的样式。只读。 |
| [CharacterWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/CharacterWidth) | 返回或设置指定区域的字符宽度。 **WdCharacterWidth** 类型，可读写。 |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Characters) | 返回一个 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/obj)** 集合，该集合代表区域中的字符。只读。 |
| [Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Columns) | 返回一个 **[Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/obj)** 集合，该集合代表区域中的所有表格列。只读。 |
| [CombineCharacters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/CombineCharacters) | 如果指定区域包含合并字符，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Comments) | 返回一个 **Comments** 集合，该集合代表指定文档、选定内容或区域中的所有批注。只读。 |
| [ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ContentControls) | 返回一个 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合，该集合代表一个区域中包含的内容控件。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [DisableCharacterSpaceGrid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/DisableCharacterSpaceGrid) | 如果 WPS 忽略相应 **Range** 对象的每行字符数，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Document) | 返回与指定区域相关的 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象。只读。 |
| [Duplicate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Duplicate) | 返回一个只读 **Range** 对象，该对象代表指定区域的所有属性。 |
| [Editors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Editors) | 返回一个 **Editors** 对象，该对象代表已授权修改文档中选定内容或区域的所有用户。 |
| [EmphasisMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/EmphasisMark) | 返回或设置字符或指定的字符串的着重号。 **WdEmphasisMark** 类型，可读写。 |
| [End](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/End) | 返回或设置某区域中结束字符的位置。可读/写 **Long** 类型。 |
| [EndnoteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/EndnoteOptions) | 返回一个 **EndnoteOptions** 对象，该对象代表区域中的尾注。 |
| [Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Endnotes) | 返回一个 **[Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/obj)** 集合，该集合代表区域中的所有尾注。只读。 |
| [EnhMetaFileBits](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/EnhMetaFileBits) | 返回一个 **Variant** 类型的值，该值代表文本区域的图片表示形式。 |
| [Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Fields) | 返回一个 **[Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/obj)** 集合，该集合代表区域中的所有域。只读。 |
| [Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Find) | 返回一个 **[Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/obj)** 对象，该对象包含查找操作所需的条件。只读。 |
| [FitTextWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/FitTextWidth) | 该属性返回或设置 WPS 在指定区域中填入文字的宽度（使用当前的度量单位）。 **Single** 类型，可读写。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Font) | 返回或设置 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。 **Font** 类型，可读写。 |
| [FootnoteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/FootnoteOptions) | 返回 **FootnoteOptions** 对象，该对象代表指定区域中的脚注。 |
| [Footnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Footnotes) | 返回一个 **[Footnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/obj)** 集合，该集合代表区域中的所有脚注。只读。 |
| [FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/FormFields) | 返回一个 **[FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/obj)** 集合，该集合代表区域中的所有窗体域。只读。 |
| [FormattedText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/FormattedText) | 返回或设置一个 **Range** 对象，该对象包含指定区域中进行过格式编排的文字。可读写。 |
| [Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Frames) | 返回一个 **[Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/obj)** 集合，该集合代表区域中的所有框架。只读。 |
| [GrammaticalErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/GrammaticalErrors) | 返回一个 **ProofreadingErrors** 集合，该集合代表指定文档或区域中有语法检查错误的句子。只读。 |
| [HighlightColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/HighlightColorIndex) | 返回或设置指定区域的突出显示颜色。 **WdColorIndex** 类型，可读写。 |
| [Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Hyperlinks) | 返回一个 **Hyperlinks** 集合，该集合代表指定范围内的所有超链接。只读。 |
| [InlineShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/InlineShapes) | 返回一个 **InlineShape** 集合，该集合代表范围中的所有 **InlineShapes** 对象。只读。 |
| [IsEndOfRowMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/IsEndOfRowMark) | 如果指定范围被折叠且位于表格中的行尾标志处，则该属性值为 **True** 。只读 **Boolean** 类型。 |
| [Italic](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Italic) | 如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [ItalicBi](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ItalicBi) | 如果将字体或范围设置为倾斜格式，则该属性值为 **msoTrue** 。可读写 **Long** 类型。 |
| [LanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/LanguageID) | 返回或设置一个 **[WdLanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdLanguageID)** 常量，该常量代表指定范围的语言。可读写。 |
| [LanguageIDFarEast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/LanguageIDFarEast) | 返回或设置指定对象的东亚语言。可读写 **WdLanguageID** 类型。 |
| [LanguageIDOther](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/LanguageIDOther) | 返回或设置指定范围的语言。可读写 **WdLanguageID** 类型。 |
| [ListFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ListFormat) | 返回一个 **[ListFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ListFormat/obj)** 对象，该对象代表某区域中所有的列表格式特征。只读。 |
| [ListParagraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ListParagraphs) | 返回一个 **ListParagraphs** 集合，该集合代表范围中的所有编号段落。只读。 |
| [Locks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Locks) | 返回 **CoAuthLocks** 集合对象，该对象代表范围中的所有锁定。只读。 |
| [NextStoryRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/NextStoryRange) | 返回一个 **Range** 对象，该对象代表下一个文章。 **Range** 类型，只读。 |
| [OMaths](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/OMaths) | 返回一个 **[OMaths](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMaths/obj)** 集合，该集合代表指定区域内的 **[OMath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/obj)** 对象。只读。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Orientation) | 在启用了“文字方向”功能时返回或设置范围中文字的方向。可读写 **WdTextOrientation** 类型。 |
| [PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/PageSetup) | 返回一个 **PageSetup** 对象，该对象与指定范围相关联。 |
| [ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ParagraphFormat) | 返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定范围的段落设置。可读/写。 |
| [ParagraphStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ParagraphStyle) | 返回一个 **Variant** 类型的值，该值代表用于设置段落格式的样式。只读。 |
| [Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Paragraphs) | 返回一个 **Paragraphs** 集合，该集合代表指定范围中的所有段落。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Range** 对象的父对象。 |
| [ParentContentControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ParentContentControl) | 返回一个 **ContentControl** 对象，该对象代表指定区域的父内容控件。只读。 |
| [PreviousBookmarkID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/PreviousBookmarkID) | 返回最后一个书签的编号，该书签从指定范围的前面或与指定范围相同的位置开始。只读 **Long** 类型。 |
| [Revisions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Revisions) | 返回一个 **Revisions** 集合，该集合代表范围中的修订。只读。 |
| [Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Rows) | 返回一个 **Rows** 集合，该集合代表范围中的所有表格行。只读。 |
| [Sections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Sections) | 返回一个 **Sections** 集合，该集合代表指定范围中的各节。只读。 |
| [Sentences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Sentences) | 返回一个 **Sentences** 集合，该集合代表范围中的所有句子。只读。 |
| [Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Shading) | 返回一个 **Shading** 对象，该对象代表指定对象的底纹格式。 |
| [ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/ShapeRange) | 返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/obj)** 集合，该集合代表指定范围中的所有 **Shape** 对象。只读。 |
| [SpellingErrors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/SpellingErrors) | 返回一个 **ProofreadingErrors** 集合，该集合代表指定范围中标识为拼写错误的单词。只读。 |
| [Start](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Start) | 返回或设置某区域中起始字符的位置。 **Long** 类型，可读写。 |
| [StoryLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/StoryLength) | 返回包含指定区域的文字部分中的字符数。 **Long** 类型，只读。 |
| [StoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/StoryType) | 返回指定范围、所选内容或书签的文字部分类型。只读 **[WdStoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdStoryType)** 类型。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Style) | 返回或设置指定对象的样式。可读写 **Variant** 类型。 |
| [Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Tables) | 返回一个 **Tables** 集合，该集合代表指定范围内的所有表格。只读。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Text) | 返回或设置指定区域中的文本。 **String** 类型，可读写。 |
| [TextRetrievalMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/TextRetrievalMode) | 返回一个 **[TextRetrievalMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TextRetrievalMode/obj)** 对象，该对象控制从指定 **Range** 检索文字的方式。可读写。 |
| [TopLevelTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/TopLevelTables) | 返回一个 **Tables** 集合，该集合代表当前范围最外部嵌套层上的表格。只读。 |
| [TwoLinesInOne](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/TwoLinesInOne) | 返回或设置 WPS 是否将两行文本合并为一行，并指定括住文本的字符（如果有）。 **WdTwoLinesInOneType** 类型，可读写。 |
| [Underline](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Underline) | 返回或设置应用于范围的下划线的类型。可读写 **WdUnderline** 类型。 |
| [WordOpenXML](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/WordOpenXML) | 返回一个 **String** 类型的值，该值以 WPS Open XML 格式表示区域中包含的 XML。只读。 |
| [Words](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/Words) | 返回一个 **Words** 集合，该集合代表范围中的所有单词。只读。 |
| [XMLNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/XMLNodes) | 返回一个 **XMLNodes** 集合，该集合代表指定区域中的 XML 元素（包括任何只是部分属于该区域的元素）。只读。 |
| [XMLParentNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/member/XMLParentNode) | 返回一个 **XMLNode** 对象，该对象代表区域的父级 XML 节点。只读。 |