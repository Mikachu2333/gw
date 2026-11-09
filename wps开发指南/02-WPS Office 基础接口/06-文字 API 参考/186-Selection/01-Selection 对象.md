# Selection 对象

代表窗口或窗格中的当前所选内容。所选内容代表文档中选定（或突出显示）的区域，如果文档中没有选定任何内容，则代表插入点。每个文档窗格只能有一个 **Selection** 对象，并且在整个应用程序中只能有一个活动的 **Selection** 对象。

## 说明


可以使用 **Selection** 属性返回 **Selection** 对象。如果 **Selection** 属性未使用对象限定符，则 WPS 返回活动文档窗口的活动窗格中的选定内容。

对带批注的用户选择内容使用选择命令（如 `Selection.BoldRun`），不再对用户所选文本应用粗体格式设置，或者对于带批注的用户选择内容使用 `Selection.TypeText` 命令不再插入文本。


## 示例


```JavaScript
/*本示例复制活动文档中的当前选定内容。*/
function test() {
    Selection.Copy()
}
```


```JavaScript
/*本示例删除 Documents 集合中第一个文档的所选内容。不必激活文档也可以访问其当前选定内容。*/
function test() {
    Documents.Item(1).ActiveWindow.Selection.Cut()
}
```


```JavaScript
/*本示例复制活动文档第一个窗格中的所选内容，并将其粘贴到第二个窗格中。*/
function test() {
    ActiveDocument.ActiveWindow.Panes.Item(1).Selection.Copy()
    ActiveDocument.ActiveWindow.Panes.Item(2).Selection.Paste()
}
```
 **Text** 属性是 **Selection** 对象的默认属性。使用此属性可设置或返回当前所选内容中的文本。



```JavaScript
/*本示例将当前选定区域中的文本分配至变量 strTemp，并判断如果最后一个字符为段落标记，则将其删除。*/
function test() {
    let strTemp = Selection.Text
    if (strTemp.endsWith("\r")) {
        strTemp = strTemp.substring(0, strTemp.length - 1)
    }
}
```
 **Selection** 对象有多种方法和属性，可用于折叠、扩展或以其他方式更改当前所选内容。



```JavaScript
/*本示例会将插入点移至文档的末尾，并选择最后三行。*/
function test() {
    Selection.Endof(wdStory, wdMove)
    Selection.HomeKey(wdLine, wdExtend)
    Selection.MoveUp(wdLine, 2, wdExtend)
}
```
 **Selection** 对象有多种方法和属性，可用于编辑文档中的所选文字。



```JavaScript
/*本示例选择活动文档中的第一个句子，并将其替换为新段落。*/
function test() {
    Options.ReplaceSelection = true
    ActiveDocument.Sentences(1).Select()
    Selection.TypeText("Material below is confidential.")
    Selection.TypeParagraph()
}
```


```JavaScript
/*本示例删除 Documents 集合中第一个文档的最后一段，并将其粘贴到第二个文档的开头。*/
function test() {
    Documents.Item(1).Paragraphs.Last.Range.Select()
    Documents.Item(1).ActiveWindow.Selection.Cut()

    let selection = Documents.Item(2).ActiveWindow.Selection
    selection.StartOf(wdStory, wdMove)
    selection.Paste()
}
```
 **Selection** 对象有多种方法和属性，可用于更改当前所选内容的格式。



```JavaScript
/*本示例判断如果当前选定内容的字体为“Times New Roman”，则更改为“Tahoma”。*/
function test() {
    if (Selection.Font.Name == "Times New Roman") {
        Selection.Font.Name = "Tahoma"
    }
}
```
可以使用 **Flags** 、 **Information** 和 **Type** 等属性返回有关当前所选内容的信息。



```JavaScript
/*在某个方法中使用以下示例来确定活动文档中是否选择了内容，如果未选择，则跳过该方法的其余部分。*/
function test() {
    if (Selection.Type == wdSelectionIP) {
        alert("You have not selected any text! Exiting procedure...")
        return
    }
}
```
即便已将选定内容折叠至插入点，它也不必为空。例如， **Text** 属性仍将返回插入点右侧的字符，此字符也会出现在 **Selection** 对象的 **Characters** 集合中。但是，在已折叠选定内容中调用 **Cut** 或 **Copy** 等方法会导致出错。

用户可以选择不代表持续文本的文档中的某个区域（例如，结合使用 Alt 键和鼠标）。由于此类选择行为不可预测，因此你可能需要在代码中包含一个步骤，用于在对选定内容执行任何操作之前检查选定内容的 **Type** 属性 (`Selection.Type == wdSelectionBlock`)。

同样地，包含表单元格的选定内容也会导致出现不可预测的行为。 **Information** 属性将会告诉你选定内容是否在表格内 (`Selection.Information(wdWithinTable)`)。



```JavaScript
/*本示例确定选定内容是否正常（例如，它不在表格的行或列中，它不是文本的垂直块）；可以使用它来先测试当前选定内容，然后再对其执行任何操作。*/
function test() {
    if (Selection.Type != wdSelectionNormal) {
        alert("Not a valid selection! Exiting procedure...")
        return
    }
}
```
由于 **Range** 对象与 **Selection** 对象的许多方法和属性都相同，因此，如果没有必要对当前所选内容进行实际更改，最好使用 **Range** 对象来处理文档。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearCharacterAllFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterAllFormatting) | 从所选文本中删除所有字符格式（包括通过字符样式应用的格式和手动应用的格式）。 |
| [ClearCharacterDirectFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterDirectFormatting) | 取消所选文本的字符格式，即通过功能区上的按钮或对话框手动应用的格式。 |
| [ClearCharacterStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearCharacterStyle) | 从所选文本中删除通过字符样式应用的字符格式。 |
| [ClearFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearFormatting) | 清除所选内容的文本格式和段落格式。 |
| [ClearParagraphAllFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphAllFormatting) | 从所选文本中删除所有段落格式（包括通过段落样式应用的格式和手动应用的格式）。 |
| [ClearParagraphDirectFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphDirectFormatting) | 从所选文本中删除通过功能区上的按钮或者对话框手动应用的段落格式。 |
| [ClearParagraphStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ClearParagraphStyle) | 从所选文本中删除通过段落样式应用的段落格式。 |
| [Collapse](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Collapse) | 将选定内容折叠到起始位置或结束位置。折叠之后起始位置和结束位置相同。 |
| [ConvertToTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ConvertToTable) | 将范围内的文本转换为表格。将该表格作为一个 **Table** 对象返回。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Copy) | 将指定的选定内容复制到剪贴板。 |
| [CopyAsPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/CopyAsPicture) | **CopyAsPicture** 方法与 **Copy** 方法的工作方式相同。 |
| [CopyFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/CopyFormat) | 复制选定文字第一个字符的字符格式。 |
| [CreateTextbox](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/CreateTextbox) | 在选定内容周围添加一个默认大小的文本框。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Cut) | 从文档中删除指定对象，并将其移动到剪贴板上。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Delete) | 删除指定数量的字符或单词。 |
| [EndKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/EndKey) | 将选定内容移动或扩展到指定单位的末尾。 |
| [EndOf](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/EndOf) | 将区域或选定内容的结束字符位置移动或扩展至最近的一个指定文本单元末尾。 |
| [EscapeKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/EscapeKey) | 取消某种模式，如取消扩展或列选定模式（与按 ESC 相同）。 |
| [Expand](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Expand) | 扩展指定区域或选定内容。返回添至该区域或选定内容的字符数。 **Long** 类型。 |
| [ExportAsFixedFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ExportAsFixedFormat) | 将当前选定内容另存为 PDF 或 XPS 格式。 |
| [GoTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/GoTo) | 将插入点移至紧靠指定项之前的字符位置，并返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象（除 **wdGoToGrammaticalError** 、 **wdGoToProofreadingError** 或 **wdGoToSpellingError** 常量之外）。 |
| [GoToEditableRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/GoToEditableRange) | 返回一个 **Range** 对象，该对象代表指定用户或用户组可以修改的文档区域。 |
| [GoToNext](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/GoToNext) | 返回一个 **Range** 对象，该对象引用下一项目或者由 *What* 参数确定的位置的起始位置。如果将该方法应用于 **Selection** 对象，则该方法将选定内容移动到指定的项目处（但 **wdGoToGrammaticalError** 、 **wdGoToProofreadingError** 和 **wdGoToSpellingError** 常量除外）。 |
| [GoToPrevious](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/GoToPrevious) | 返回一个 **Range** 对象，该对象引用上一项目或者由参数 *What* 指定的位置的起始位置。如果对 **Selection** 对象采用此方法， **GoToPrevious** 将选定内容移动到所指定的项目处。 |
| [HomeKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/HomeKey) | 将选定内容移动或扩展至指定单位的开始。该方法返回表明选定内容实际移动的字符数的整数；如果移动不成功，则返回 0（零）。该方法相当于 **Home** 键的功能。 |
| [InRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InRange) | 如果应用此方法的所选内容包含在 *Range* 参数所指定的范围内，则该方法为 **True** 。 |
| [InStory](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InStory) | 如果应用此方法的选择范围与 *Range* 参数指定的范围位于相同的文字部分中，则该方法为 **True** 。 |
| [Information](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Information) | 返回有关指定的选定内容的信息。 **Variant** 类型，只读。 |
| [InsertAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertAfter) | 将指定文本插入范围或所选内容的末尾。 |
| [InsertBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertBefore) | 在指定选定内容之前插入指定文本。 |
| [InsertBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertBreak) | 插入分页符、分栏符或分节符。 |
| [InsertCaption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertCaption) | 紧靠在指定的所选内容之前或之后插入题注。 |
| [InsertCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertCells) | 向原有表添加单元格。 |
| [InsertColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertColumns) | 在选定内容的左侧插入新列。 |
| [InsertColumnsRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertColumnsRight) | 在当前选定内容的右边插入列。 |
| [InsertCrossReference](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertCrossReference) | 插入对标题、书签、脚注、尾注或定义了题注标签的项（如公式、图表或表格）的交叉引用。 |
| [InsertDateTime](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertDateTime) | 以文本或 TIME 域的形式插入当前日期或时间，或将两者都插入。 |
| [InsertFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertFile) | 插入指定文件的全部或一部分。 |
| [InsertFormula](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertFormula) | 在所选内容插入包含公式的 = (Formula) 域。 |
| [InsertNewPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertNewPage) | 在插入点的位置插入一个新页面。 |
| [InsertParagraph](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertParagraph) | 用新段落替换指定的所选内容。 |
| [InsertParagraphAfter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertParagraphAfter) | 在所选内容之后插入段落标记。 |
| [InsertParagraphBefore](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertParagraphBefore) | 在指定的所选内容或范围前插入一个新段落。 |
| [InsertRows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertRows) | 在所选内容的上方插入指定数量的新行。如果选定内容不在表格中，则会导致出错。 |
| [InsertRowsAbove](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertRowsAbove) | 在当前选定内容上方插入行。 |
| [InsertRowsBelow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertRowsBelow) | 在当前选定内容的下方插入行。 |
| [InsertSymbol](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertSymbol) | 插入一个符号，用来替换指定的所选内容。 |
| [IsEqual](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/IsEqual) | 如果应用此方法的选择范围等于 *Range* 参数所指定的范围，则该方法为 **True** 。 |
| [ItalicRun](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ItalicRun) | 在当前局部中添加或删除斜体字符格式。 |
| [LtrPara](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/LtrPara) | 将指定段落的对齐方式和阅读顺序设置为从左向右。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Move) | 将指定的所选内容折叠到其起始位置或结束位置，然后将折叠的对象移动指定的单位数。此方法返回一个 **Long** 类型的值，该值代表所选内容移动的单位数；如果移动失败，则返回 0（零）。 |
| [MoveDown](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveDown) | 将选定内容向下移动，并返回移动距离的单位数。 |
 | [MoveEnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveEnd) | 移动范围或所选内容的结束字符位置。 |
| [MoveEndUntil](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveEndUntil) | 移动指定的所选内容的结束位置，直到在文档中找到任何指定的字符。 |
| [MoveEndWhile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveEndWhile) | 当在文档中找到任何指定的字符时，移动所选内容的结束字符位置。 |
| [MoveLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveLeft) | 将选定内容向左移动，并返回移动距离的单位数。 |
| [MoveRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveRight) | 将选定内容向右移动，并返回移动距离的单位数。 |
| [MoveStart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveStart) | 移动指定的所选内容的起始位置。 |
| [MoveStartUntil](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveStartUntil) | 移动指定的所选内容的起始位置，直到在文档中找到一个指定的字符。如果是在文档中向后移动，则扩展所选内容。 |
| [MoveStartWhile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveStartWhile) | 当在文档中找到任何指定的字符时，移动指定的所选内容的起始位置。 |
| [MoveUntil](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveUntil) | 移动指定的所选内容，直到在文档中找到一个指定的字符。 |
| [MoveUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveUp) | 将所选内容向上移动，并返回移动的单位数。 |
| [MoveWhile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/MoveWhile) | 当在文档中找到任何指定的字符时，移动指定的选择范围。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Next) | 返回一个 **Range** 对象，该对象代表相对于指定的选择范围的下一个单位。 |
| [NextField](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/NextField) | 选定下一个域。 |
| [NextRevision](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/NextRevision) | 找到下一处修订并作为一个 **Revision** 对象返回。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Paste) | 将“剪贴板”的内容插入指定的选择范围处。 |
| [PasteAndFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/PasteAndFormat) | 粘贴选定的表格单元格，并为其设置指定的格式。 |
| [PasteAsNestedTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/PasteAsNestedTable) | 将一个或一组单元格作为嵌套表格粘贴到所选内容中。 |
| [PasteFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/PasteFormat) | 将以 **CopyFormat** 方法复制的格式应用于选定内容。 |
| [PasteSpecial](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/PasteSpecial) | 插入“剪贴板”中的内容。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Previous) | 将所选文本移动指定的单位数，并返回与折叠的所选内容相关的 **Range** 对象。 |
| [PreviousField](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/PreviousField) | 选择并返回前一域。 |
| [PreviousRevision](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/PreviousRevision) | 找到前一处修订并作为 **Revision** 对象返回。 |
| [RtlPara](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/RtlPara) | 将指定段落的阅读顺序和对齐方式设置为从右向左。 |
| [SelectCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SelectCell) | 选择包含当前选定内容的匹配单元格。 |
| [SelectColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SelectColumn) | 选定包含插入点的列，或者选定包含选定内容的所有列。 |
| [SelectCurrentAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SelectCurrentAlignment) | 向前扩展选定部分，直到遇到另一种段落对齐方式为止。 |
| [SelectCurrentColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SelectCurrentColor) | 向前扩展选定内容，直至遇到另一种颜色的文字为止。 |
| [SelectCurrentFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SelectCurrentFont) | 向前扩展选定内容，直至遇到另一种字体或字号。 |
| [SelectCurrentIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SelectCurrentIndent) | 向前扩展选定内容，直至遇到具有另一种段落左右缩进量的文本为止。 |
| [SelectCurrentSpacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SelectCurrentSpacing) | 向前扩展选定内容，直至遇到具有另一种行间距的段落为止。 |
| [SelectCurrentTabs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SelectCurrentTabs) | 向前扩展选定内容，直至遇到另一种制表位的段落为止。 |
| [SelectRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SelectRow) | 选定插入点所在的行，或者选择选定内容所在行。 |
| [SetRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SetRange) | 设置所选内容的起始字符和结束字符的位置。 |
| [ShrinkDiscontiguousSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ShrinkDiscontiguousSelection) | 当所选内容包括多个不连续的所选内容时，取消全部选择，只保留最近选择的文本。 |
| [Sort](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Sort) | 对指定的所选内容中的段落进行排序。 |
| [SortAscending](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SortAscending) | 按字母数字升序对段落或表格行进行排序。 |
| [SortByHeadings](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SortByHeadings) | 对指定选定内容中的标题进行排序。 |
| [SortDescending](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SortDescending) | 以字母数字降序排列所选内容中的段落或表格行。 |
| [SplitTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/SplitTable) | 在选定内容第一行上面插入一个空段落。 |
| [StartOf](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/StartOf) | 将指定的区域或选定内容的开始位置移动或扩展至最近的指定文字单位的开头。该方法返回 **Long** 类型的值表明了区域或选定内容移动或扩展的字符数。如果是在文档中向后移动，则该方法返回负数。 |
| [ToggleCharacterCode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ToggleCharacterCode) | 在 Unicode 字符和其相应的十六进制值之间切换选定内容。 |
| [TypeBackspace](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/TypeBackspace) | 删除折叠的选定内容（即一个插入点）前面的字符 |
| [TypeParagraph](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/TypeParagraph) | 插入一个新的空段落。 |
| [TypeText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/TypeText) | 插入指定的文本。 |
| [WholeStory](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/WholeStory) | 扩展某一所选内容，使其包括整个文章。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Active](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Active) | 如果指定窗口或窗格中的选定内容处于活动状态，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [BookmarkID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/BookmarkID) | 返回位于选定内容开始位置的书签编号。 **Long** 类型，只读。 |
| [Bookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Bookmarks) | 返回一个 **[Bookmarks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Bookmarks/obj)** 集合。该集合代表某一文档、区域或选定内容中的所有书签。只读。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Borders) | 返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定对象的所有边框。 |
| [Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Cells) | 返回一个 **Cells** 集合，该集合代表选定内容中的表格单元格。只读。 |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Characters) | 返回一个 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Characters/obj)** 集合，该集合代表文档、区域或选定内容中的字符。只读。 |
| [ChildShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ChildShapeRange) | 返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/obj)** 集合，该集合代表选定区域中包含的子图形。 |
| [Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Columns) | 返回一个 **Columns** 集合，该集合代表所选内容中的所有表格列。只读。 |
| [Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Comments) | 返回一个 **Comments** 集合，该集合代表指定选定内容中的所有批注。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Creator) | 回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Document) | 返回一个 **[Document](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Document/obj)** 对象，该对象与指定的选定内容相关。只读。 |
| [Editors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Editors) | 返回一个 **[Editors](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Editors/obj)** 对象，该对象代表已授权修改文档中选定内容的所有用户。 |
| [End](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/End) | 返回或设置选定内容的结束字符的位置。 **Long** 类型，可读写。 |
| [EndnoteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/EndnoteOptions) | 返回一个 **[EndnoteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/EndnoteOptions/obj)** 对象，该对象代表选定内容中的尾注。 |
| [Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Endnotes) | 返回一个 **[Endnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Endnotes/obj)** 集合，该集合代表选定内容中包含的所有尾注。只读。 |
| [EnhMetaFileBits](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/EnhMetaFileBits) | 返回一个 **Variant** 类型的值，该值代表选定文本或文本区域的显示方式的图片表示形式。 |
| [Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Fields) | 返回一个只读 **[Fields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Fields/obj)** 集合，该集合代表选定内容中的所有域。 |
| [Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Find) | 返回一个 **[Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Find/obj)** 对象，该对象包含查找操作所需的条件。只读。 |
| [FitTextWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/FitTextWidth) | 返回或设置 WPS 在当前选定内容中填入文字的宽度（使用当前度量单位）。 **Single** 类型，可读写。 |
| [Flags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Flags) | 返回或设置选定内容的属性。 **[WdSelectionFlags](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSelectionFlags)** 类型，可读写。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Font) | 返回或设置一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。可读写。 |
| [FootnoteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/FootnoteOptions) | 返回一个 **[FootnoteOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FootnoteOptions/obj)** 对象，该对象代表选定内容中的脚注。 |
| [Footnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Footnotes) | 返回一个 **[Footnotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Footnotes/obj)** 集合，该集合代表区域、选定内容或文档中的所有脚注。只读。 |
| [FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/FormFields) | 返回一个 **[FormFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FormFields/obj)** 集合，该集合代表选定内容中所有窗体域。只读。 |
| [FormattedText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/FormattedText) | 返回或设置一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象包含指定区域或选定内容中进行过格式编排的文字。可读写。 |
| [Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Frames) | 返回一个 **[Frames](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Frames/obj)** 集合，该集合代表选定内容中的所有框架。只读。 |
| [HasChildShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/HasChildShapeRange) | 如果选定内容包含子图形，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/HeaderFooter) | 为指定的选定内容返回 **[HeaderFooter](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HeaderFooter/obj)** 对象。只读。 |
| [Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Hyperlinks) | 返回一个 **Hyperlinks** 集合，该集合代表指定选定内容中的所有超链接。只读。 |
| [InlineShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InlineShapes) | 返回一个 **[InlineShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/obj)** 集合，该集合代表选定内容中的所有 **InlineShape** 对象。只读。 |
| [IsEndOfRowMark](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/IsEndOfRowMark) | 如果指定的选定内容或区域折叠且位于表格行的结束标志处，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [LanguageID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/LanguageID) | 返回或设置指定对象的语言。可读写。 |
| [LanguageIDFarEast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/LanguageIDFarEast) | 返回或设置指定对象的东亚语言。 **WdLanguageID** 类型，可读写。 |
| [LanguageIDOther](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/LanguageIDOther) | 返回或设置指定对象的语言。 **WdLanguageID** 类型，可读写。 |
| [OMaths](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/OMaths) | 返回一个 **[OMaths](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMaths/obj)** 集合，该集合代表当前选定区域内的 **[OMath](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/OMath/obj)** 对象。只读。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Orientation) | 在启用“文字方向”功能后返回或设置选定内容中文字的方向。 **WdTextOrientation** 类型，可读写。 |
| [PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/PageSetup) | 返回一个 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PageSetup/obj)** 对象，该对象与指定选定内容相关联。 |
| [ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ParagraphFormat) | 返回或设置一个 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象，该对象代表指定选定内容的段落设置。可读写。 |
| [Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Paragraphs) | 返回一个 **[Paragraphs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Paragraphs/obj)** 集合，该集合代表指定选定内容中的所有段落。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Selection** 对象的父对象。 |
| [PreviousBookmarkID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/PreviousBookmarkID) | 返回位于指定的所选内容或区域中或之前的最后一个书签的编号。如果没有相应的书签，则返回 0（零）。 **Long** 类型，只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所含的部分文档。 |
| [Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Rows) | 返回一个 **[Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/obj)** 集合，该集合代表某个区域、选定内容或表格中所有的表格行。只读。 |
| [Sections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Sections) | 返回一个 **[Sections](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sections/obj)** 集合,该集合代表指定选定内容中的各节。只读。 |
| [Sentences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Sentences) | 返回一个 **[Sentences](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Sentences/obj)** 集合，该集合代表选定内容中的所有句子。只读。 |
| [ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/ShapeRange) | 返回一个 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/obj)** 集合，该集合代表选定内容中的所有 **Shape** 对象。只读。 |
| [Start](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Start) | 返回或设置选定内容的起始字符位置。 **Long** 类型，可读写。 |
| [StartIsActive](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/StartIsActive) | 如果选定内容的开始部分处于活动状态，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [StoryLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/StoryLength) | 返回包含指定选定内容的文章所含的字符数。 **Long** 类型，只读。 |
| [StoryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/StoryType) | 返回指定选定内容的文章类型。 **WdStoryType** 类型，只读。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Style) | 该属性返回或设置用于指定对象的样式。若要设置该属性，请指定样式的本地名称、一个整数值、一个 **WdBuiltinStyle** 常量或一个代表该样式的对象。 **Variant** 类型，可读写。 |
| [Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Tables) | 返回一个 **[Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Tables)** 集合，该集合代表指定选定内容中的所有表格。只读。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Text) | 返回或设置指定的选定内容中的文本。 **String** 类型，可读写。 |
| [TopLevelTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/TopLevelTables) | 返回一个 **[Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/obj)** 集合，该集合代表当前选定内容最外部嵌套层上的表格。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Type) | 返回选择类型。 **[WdSelectionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdSelectionType)** 类型，只读。 |
| [Words](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Words) | 返回一个 **[Words](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Words/obj)** 集合，该集合代表选定内容中的所有字词。只读。 |
| [XMLNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/XMLNodes) | 返回一个 **XMLNodes** 集合，该集合代表选定内容中所有 XML 元素的集合，包括那些仅部分位于选定内容中的元素。 |
| [XMLParentNode](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/XMLParentNode) | 返回一个 **XMLNode** 对象，该对象代表选定内容的父节点。 |