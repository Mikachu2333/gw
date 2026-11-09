# Range 对象

代表某一单元格、某一行、某一列、某一选定区域（该区域可包含一个或若干连续单元格区域），或者某一三维区域。

## 说明


示例部分中说明了以下用于返回 **Range** 对象的属性和方法：

* **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 属性
* **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Cells)** 属性
* **Range** 和 **Cells** 
* **[Offset](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Offset)** 属性
* **Union** 方法


## 示例
使用 **Range** (*arg*)（其中 *arg* 为区域名称）可返回一个代表单个单元格或单元格区域的 **Range** 对象。下例将单元格 A1 中的值赋给单元格 A5。



```JavaScript
/*本示例将 A1 单元格的值赋值给 A5 单元格*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A5").Value2 = Application.Worksheets.Item("Sheet1").Range("A1").Value2
}
```
下例通过为区域 A1:H8 中的每个单元格设置公式，用随机数字填充该区域。如果在不带对象识别符（句点左边的对象）的情况下使用 **Range** 属性，该属性会返回活动表上的一个区域。如果活动表不是工作表，则该方法失败。在使用没有显式对象识别符的 **Range** 属性之前，请先使用 **[Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Activate)** 方法激活一个工作表。



```JavaScript
/*本示例通过为区域 A1:H8 中的每个单元格设置公式，用随机数字填充该区域*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    //Range is on the active sheet
    Application.Range("A1:H8").Formula = "=Rand()"
}
```
下例清除区域名为“*Criteria*”的区域中的内容。
注释：如果用文本参数指定区域地址，必须以 A1 样式记号指定该地址（不能用 R1C1 样式记号）。



```JavaScript
/*本示例清除区域名为“*Criteria*”的区域中的内容*/
function test() {
    Application.Worksheets.Item(1).Range("Criteria").ClearContents()
}
```
使用 **Cells** (*row*, *column* )（其中 *row* 是行号，*column* 是列标）可返回一个单元格。下例将单元格 A1 赋值为 24。



```JavaScript
/*本示例将活动工作表上第一行第一个单元格的值设置为 24*/
function test() {
    Application.Worksheets.Item(1).Cells.Item(1, 1).Value2 = 24
}
```
下例设置单元格 A2 的公式。



```JavaScript
/*本示例在第二行第一列单元格设置公式 =Sum(B1:B5)*/
function test() {
    Application.ActiveSheet.Cells.Item(2, 1).Formula = "=Sum(B1:B5)"
}
```
虽然也可用 Range("A1") 返回单元格 A1，但有时用 **Cells** 属性更为方便，因为对行或列使用变量。下例在 Sheet1 上创建行号和列标。注意，当工作表激活以后，使用 **Cells** 属性时不必明确声明工作表（它将返回活动工作表上的单元格）。
注释：虽然可用 JavaScript 字符串函数转换 A1 样式引用，但使用 Cells(1, 1) 记号更为简便（而且也是更好的编程习惯）。



```JavaScript
/*本示例使用循环在单元格填入对应的值*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    for (let i = 1; i <= 5; i++) {
        Application.Cells.Item(1, i + 1).Value2 = 1990 + i
    }
    for (let j = 1; j <= 4; j++) {
        Application.Cells.Item(j + 1, 1).Value2 = "Q" + j
    }
}
```
使用 *expression*. **Cells** (*row* , *column*)（其中 *expression* 是返回 **Range** 对象的表达式，*row* 和 *column* 是相对于该区域左上角的偏移量）可返回区域中的一部分。下例设置单元格 C5 中的公式。



```JavaScript
/*本示例将 C5:C10 单元格区域中第一行第一列的单元格设置公式 =Rand()*/
function test() {
    Application.Worksheets.Item(1).Range("C5:C10").Cells.Item(1, 1).Formula = "=Rand()"
}
```
使用 **Range** (*cell1, cell2*)（其中 *cell1* 和 *cell2* 是指定起始和终止单元格的 **Range** 对象）可返回一个 **Range** 对象。下例设置单元格区域 A1:J10 的边框线条的样式。  
注释：请注意每个 **Cells** 属性之前的句点。如果前导的 **With** 语句应用于 **Cells** 属性，那么这些句点就是必需的。本示例中，句点指示单元格处于工作表一上。如果没有句点， **Cells** 属性将返回活动工作表上的单元格。



```JavaScript
/*本示例设置单元格 A1:J10 的边框线条样式*/
function test() {
    Application.Worksheets.Item(1).Range(Worksheets.Item(1).Cells.Item(1, 1), Application.Worksheets.Item(1).Cells.Item(10, 10)).Borders.LineStyle = xlThick
}
```
 使用 **Offset** (*row, column*)（其中 *row* 和 *column* 为行偏移量和列偏移量）可返回相对于另一区域在指定偏移量处的区域。下例选定位于当前选定区域左上角单元格的向下三行且向右一列处的单元格。由于必须选定位于活动工作表上的单元格，因此必须先激活工作表。



```JavaScript
/*本示例选择从当前选定区域左上角的单元格下移 3 行和右移 1 列所得的单元格。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    //Can't select unless the sheet is active
    Application.Selection.Offset(3, 1).Range("A1").Select()
}
```
使用 **Union** (*range1, range2*, ...) 可返回多块区域，即该区域由两个或多个连续的单元格区域所组成。下例创建由单元格区域 A1:B2 和 C3:D4 组合定义的对象，然后选定该定义区域。



```JavaScript
/*本示例选中 A1:B2 和 C3:D4 单元格区域*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    let r1 = Range("A1:B2")
    let r2 = Range("C3:D4")
    let myMultiAreaRange = Union(r1, r2)
    myMultiAreaRange.Select()
}
```
如果您处理包含多个区域的选定内容， **[Areas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Areas)** 属性是很有用的。它将多区域选定内容拆分为单个的 **Range** 对象，然后将对象返回为一个集合。您可以对返回的集合使用 **[Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Count)** 属性，以查找包含多个区域的选定内容，如下例所示。



```JavaScript
/*本示例判断如果工作表中选中多个区域，则显示 You cannot carry out this command on multi-area selections*/
function test() {
    let NumberOfSelectedAreas = Application.Selection.Areas.Count
    if (NumberOfSelectedAreas > 1) {
        MsgBox("You cannot carry out this command " + "on multi-area selections")
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Activate) | 激活单个单元格，该单元格必须处于当前选定区域内。要选择单元格区域，请使用 **[Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Select)** 方法。 |
| [AddComment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/AddComment) | 为区域添加批注。 |
| [Address](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Address) | 返回一个 **String** 值，它代表宏语言的区域引用。 |
| [AddressLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/AddressLocal) | 以用户语言返回对指定区域的区域引用。 **String** 类型，只读。 |
| [AdvancedFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/AdvancedFilter) | 基于条件区域从列表中筛选或复制数据。如果初始选定区域为单个单元格，则使用单元格的当前区域。 |
| [ApplyOutlineStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ApplyOutlineStyles) | 对指定区域应用分级显示样式。 |
| [AutoComplete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/AutoComplete) | 从列表中返回一个记忆式键入匹配项。如果没有相应的记忆式键入匹配项，或者在列表中有不止一个与已键入字符串相匹配的项，此方法将返回一空字符串。 |
| [AutoFill](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/AutoFill) | 对指定区域中的单元格执行自动填充。 |
| [AutoFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/AutoFilter) | 使用“自动筛选”筛选一个列表。 |
| [AutoFit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/AutoFit) | 更改区域中的列宽或行高以达到最佳匹配。返回值为Variant类型。 |
| [AutoOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/AutoOutline) | 自动为指定区域创建分级显示。如果区域为单个单元格，ET 将创建整个工作表的分级显示。新分级显示将取代所有的分级显示。 |
| [BorderAround](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/BorderAround) | 向单元格区域添加边框，并设置该新边框的 **[Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/Color)** 、 **[LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/LineStyle)** 和 **[Weight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/Weight)** 属性。 **Variant** 类型。 |
| [Calculate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Calculate) | 计算所有打开的工作簿、工作簿中的某张特定工作表或工作表指定区域中的单元格，如下表所示。 |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Characters) | 返回 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/obj)** 对象，它代表对象文本内某个区域的字符。使用 **Characters** 对象可为文本字符串内的字符设置格式。 |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Clear) | 清除整个对象。返回值为Variant类型。 |
| [ClearComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ClearComments) | 清除指定区域的所有单元格批注。 |
| [ClearContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ClearContents) | 清除区域中的公式。返回值类型为Variant。 |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ClearFormats) | 清除对象的格式设置。 |
| [ClearHyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ClearHyperlinks) | 删除指定区域中的所有超链接。 |
| [ClearNotes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ClearNotes) | 清除指定区域中所有单元格的批注和语音批注。 |
| [ClearOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ClearOutline) | 清除指定区域的分级显示。 |
| [ColumnDifferences](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ColumnDifferences) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示每列中所有与比较单元格内容不同的单元格。 |
| [Consolidate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Consolidate) | 将多个工作表中多个区域的数据合并计算至单个工作表上的单个区域。 **Variant** 类型。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Copy) | 将单元格区域复制到指定的区域或剪贴板中。返回值类型为Variant。 |
| [CopyPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/CopyPicture) | 将所选对象作为图片复制到剪贴板。 **Variant** 。 |
| [CreateNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/CreateNames) | 在指定区域中依据工作表中的文本标签创建名称。返回值类型为Variant。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Cut) | 将对象剪切到剪贴板，或者将其粘贴到指定的目的地。返回值类型为Variant。 |
| [DataSeries](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/DataSeries) | 在指定区域内创建数据系列。 **Variant** 类型。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Delete) | 删除对象。返回值类型为Variant。 |
| [Dirty](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Dirty) | 下一次重新计算发生时指定要重新计算的区域。 |
| [End](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/End) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表包含源区域的区域尾端的单元格。等同于按键 End+ 向上键、End+ 向下键、End+ 向左键或 End+ 向右键。 **Range** 对象，只读。 |
| [ExportAsFixedFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ExportAsFixedFormat) | 导出为指定格式的文件。 |
| [FillDown](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FillDown) | 从指定区域的顶部单元格开始向下填充，直至该区域的底部。区域中首行单元格的内容和格式将复制到区域中其他行内。 |
| [FillLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FillLeft) | 从指定区域的最右边单元格开始向左填充。区域中最右列单元格的内容和格式将复制到区域中其他列内。 |
| [FillRight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FillRight) | 从指定区域的最左边单元格开始向右填充。区域中最左列单元格的内容和格式将复制到区域中其他列内。 |
| [FillUp](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FillUp) | 从指定区域的底部单元格开始向上填充，直至该区域的顶部。区域中尾行单元格的内容和格式将复制到区域中其他行内。 |
| [Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Find) | 在区域中查找特定信息。返回值为一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表第一个在其中找到该信息的单元格。 |
| [FindNext](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FindNext) | 继续由 **[Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Find)** 方法开始的搜索。查找匹配相同条件的下一个单元格，并返回表示该单元格的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。该操作不影响选定内容和活动单元格。返回值类型为Range。 |
| [FindPrevious](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FindPrevious) | 继续由 **[Find](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Find)** 方法开始的搜索。查找匹配相同条件的上一个单元格，并返回代表该单元格的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。该操作不影响选定内容和活动单元格。 |
| [FlashFill](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FlashFill) | 对指定区域进行快速填充。 |
| [FunctionWizard](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FunctionWizard) | 对指定区域左上角单元格启动“函数向导”。 |
| [Group](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Group) | 当 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象代表某个数据透视表字段的数据区域中的单个单元格时， **Group** 方法在该字段中执行基于数字或日期的分组。 |
| [Insert](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Insert) | 在工作表或宏表中插入一个单元格或单元格区域，其他单元格相应移位以腾出空间。返回值类型为Variant。 |
| [InsertIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/InsertIndent) | 向指定的区域添加缩进量。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Item) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表对指定区域某一偏移量处的区域。 |
| [ListNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ListNames) | 从指定区域的第一个单元格位置开始，将所有未隐藏的名称的列表粘贴到工作表上。 |
| [Merge](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Merge) | 由指定的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象创建合并单元格。 |
| [NavigateArrow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/NavigateArrow) | 定位追踪箭头，此箭头指定引用单元格、从属单元格或错误源单元格。选定引用单元格、从属单元格或错误源单元格并返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表新选定区域。本方法应用于没有可见追踪箭头的单元格时将出错。 |
| [NoteText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/NoteText) | 返回或设置与区域左上角单元格相关联的单元格注释。 **String** 类型，可读写。单元格注释已经替换为区域注释。有关详细信息，请参阅 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/obj)** 对象。 |
| [Offset](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Offset) | 返回 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表位于指定单元格区域的一定的偏移量位置上的区域。 |
| [Parse](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Parse) | 分列区域内的数据并将这些数据分散放置于若干单元格中。将区域内容分配于多个相邻接的列中；该区域只能包含一列。 |
| [PasteSpecial](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/PasteSpecial) | 将 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 从剪贴板粘贴到指定的区域中。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/PrintOut) | 打印对象。 |
| [PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/PrintPreview) | 按对象打印后的外观效果显示对象的预览。返回值类型为Variant。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表一个单元格或单元格区域。 |
| [RemoveDuplicates](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/RemoveDuplicates) | 从值区域中删除重复的值。 |
| [RemoveSubtotal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/RemoveSubtotal) | 删除列表中的分类汇总。 |
| [Replace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Replace) | 返回 **Boolean** ，它表示指定区域内单元格中的字符。使用此方法并不会更改选定区域或活动单元格。 |
| [Resize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Resize) | 调整指定区域的大小。返回 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表调整后的区域。 |
| [RowDifferences](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/RowDifferences) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示每行中与比较单元格内容不同的所有单元格。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Select) | 选择对象。返回值类型为Variant。 |
 | [Show](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Show) | 滚动当前活动窗口中的内容以将指定区域移到视图中。此区域必须由活动文档中的单个单元格组成。 |
| [ShowDependents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ShowDependents) | 绘制从指定区域指向直接从属单元格的追踪箭头。 |
| [ShowPrecedents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ShowPrecedents) | 绘制从指定区域指向直接引用单元格的追踪箭头。 |
| [Sort](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Sort) | 对值区域进行排序。 |
| [Speak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Speak) | 按行或列的顺序朗读单元格区域。 |
| [SpecialCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/SpecialCells) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表与指定类型和值匹配的所有单元格。 |
| [Subtotal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Subtotal) | 创建指定区域或当前区域（如果该区域为单个单元格时）的分类汇总。 |
| [TextToColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/TextToColumns) | 将包含文本的一列单元格分解为若干列。 |
| [UnMerge](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/UnMerge) | 将合并区域分解为独立的单元格。 |
| [Ungroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Ungroup) | 在分级显示中对一个区域进行升级（即降低其分级显示的级别）。指定区域必须是行或列，或者行区域或列区域。如果指定区域在数据透视表中，本方法将对该区域内的项取消分组。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Value) | 返回或设置一个 **Variant** 型，它代表指定单元格的值。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllowEdit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/AllowEdit) | 返回一个 **Boolean** 值，它指明是否可以在受保护的工作表上编辑区域。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Application) | 如果不使用对象识别符，则该属性返回一个代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果使用对象识别符，则该属性返回一个代表指定对象的创建程序的 **Application** 对象（可对一个 OLE 自动化对象使用该属性来返回该对象的应用程序）。只读。 |
| [Areas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Areas) | 返回一个 **[Areas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Areas)** 集合，该集合表示多重区域选择中的所有区域。只读。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Borders) | 返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/obj)** 集合，它代表样式或单元格区域（包括定义为条件格式一部分的区域）的边框。 |
| [Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Cells) | 返回一个 Range 对象，该对象代表指定区域中的单元格。 |
| [Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Column) | 返回指定区域中第一块中的第一列的列号。Long 类型，只读。 |
| [ColumnWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ColumnWidth) | 返回或设置指定区域中所有列的列宽。 **Variant** 类型，可读写。 |
| [Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Columns) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象代表指定区域中的列。 |
| [Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Comment) | 返回一个 **[Comment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comment/obj)** 对象，它代表与区域左上角单元格相关联的批注。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Count) | 返回一个 **Long** 值，它代表集合中对象的数量。 |
| [CountLarge](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/CountLarge) | 返回一个值，该值表示集合中的对象数。只读。CountLarge 属性在功能上与 Count 属性相同，只不过如果指定的区域超过 2147483647 个单元格 (少于 2048 列) ，则 Count 属性将生成溢出错误。 但是 CountLarge 属性可处理达工作表最大大小的区域，即 17179869184 个单元格。 |
| [CurrentArray](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/CurrentArray) | 如果指定单元格属于数组，则返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示整个数组。只读。 |
| [CurrentRegion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/CurrentRegion) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示当前区域。当前区域是以空行与空列的组合为边界的区域。只读。 |
| [Dependents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Dependents) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包含一个单元格所有从属单元格的区域。如果有多个从属单元格，这可能有多个选择（多个 **Range** 对象）。 **Range** 类型，只读。 |
| [DirectDependents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/DirectDependents) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包含一个单元格的所有直接从属单元格的区域。如果有多个从属单元格，这可能有多个选择（多个 **Range** 对象）。 **Range** 类型，只读。 |
| [DirectPrecedents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/DirectPrecedents) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包含一个单元格的所有直接引用单元格的区域。如果有多个引用单元格，这可能有多个选择（多个 **Range** 对象）。 **Range** 对象，只读。 |
| [DisplayFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/DisplayFormat) | 返回代表指定区域的显示设置的 **[DisplayFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayFormat/obj)** 对象。只读 |
| [EntireColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/EntireColumn) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包含指定区域的整列（或多列）。只读。 |
| [EntireRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/EntireRow) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示包含指定区域的整行（或多行）。只读。 |
| [Errors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Errors) | 允许用户访问错误检查选项。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Font) | 返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，它代表指定对象的字体。 |
| [FormatConditions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FormatConditions) | 返回一个 **[FormatConditions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/obj)** 集合，该集合表示指定区域的所有条件格式。只读。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Formula) | 返回或设置一个 **Variant** 值，它代表 A1 样式表示法和宏语言中的对象的公式。 |
| [FormulaArray](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FormulaArray) | 返回或设置区域的数组公式。返回（或可设置为）单个公式或数组。如果指定区域不包含数组公式，则该属性返回 **null** 。 **Variant** 类型，可读写。 |
| [FormulaHidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FormulaHidden) | 返回或设置一个 **Variant** 值，它指明在工作表处于保护状态时是否隐藏公式。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FormulaLocal) | 返回或设置指定对象的公式，使用用户语言 A1 格式引用。 **Variant** 型，可读写。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FormulaR1C1) | 返回或设置指定对象的公式，使用宏语言 R1C1 格式符号表示。 **Variant** 型，可读写。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/FormulaR1C1Local) | 返回或设置指定对象的公式，使用用户语言 R1C1 格式符号表示。 **Variant** 型，可读写。 |
| [HasArray](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/HasArray) | 如果指定单元格属于数组公式，则该属性值为 **True** 。 **Variant** 类型，只读。 |
| [HasFormula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/HasFormula) | 如果区域中所有单元格均包含公式，则该属性值为 **True** ；如果所有单元格均不包含公式，则该属性值为 **False** ；其他情况下为 **null** 。 **Variant** 类型，只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Height) | 返回一个 Double 值，该值代表区域的高度（以磅为单位）。此为只读属性。若要设置高度，请使用 RowHeight 属性。 |
| [Hidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Hidden) | 返回或设置一个 **Variant** 值，它指明是否隐藏行或列。 |
| [HorizontalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/HorizontalAlignment) | 返回或设置一个 **Variant** 值，它代表指定对象的水平对齐方式。 |
| [Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Hyperlinks) | 返回 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/obj)** 集合，它代表区域的超链接。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ID) | 返回或设置一个 **String** 值，它代表将页面另存为网页时指定单元格的识别标志。 |
| [IndentLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/IndentLevel) | 返回或设置一个 **Variant** 值，它代表单元格或单元格区域的缩进量。可为 0 到 15 之间的整数。 |
| [Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Interior) | 返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，它代表指定对象的内部。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Left) | 返回一个 **Variant** 值，它代表从列 A 的左边缘到区域的左边缘的距离（以磅为单位）。 |
| [ListHeaderRows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ListHeaderRows) | 返回指定区域中标题行的数目。 **Long** 类型，只读。 |
| [ListObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ListObject) | 为 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象返回一个 **[ListObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/obj)** 对象。 **ListObject** 对象，只读。 |
| [LocationInTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/LocationInTable) | 返回一个常量，该常量描述包含指定区域左上角部分的 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 部分。可为以下 **[XlLocationInTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlLocationInTable)** 常量之一。 **Long** 类型，只读。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Locked) | 返回或设置一个 **Variant** 值，它指明对象是否已被锁定。 |
| [MergeArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/MergeArea) | 返回一个 **Range** 对象，该对象代表包含指定单元格的合并区域。如果指定的单元格不在合并区域内，则该属性返回指定的单元格。只读。 **Variant** 类型。 |
| [MergeCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/MergeCells) | 如果区域包含合并单元格，则为 **True** 。 **Variant** 型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Name) | 返回或设置一个 **Variant** 值，它代表对象的名称。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Next) | 返回一个代表下一个单元格的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/NumberFormat) | 返回或设置一个 **Variant** 值，它代表对象的格式代码。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/NumberFormatLocal) | 以采用用户语言字符串的形式返回或设置一个 **Variant** 值，它代表对象的格式代码。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Orientation) | 返回或设置一个 **Variant** 值，它代表文本方向。 |
| [OutlineLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/OutlineLevel) | 返回或设置指定行或列的当前分级显示级别。 **Variant** 类型，可读写。 |
| [PageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/PageBreak) | 返回或设置分页符的位置。可为以下 **[XlPageBreak](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPageBreak)** 常量之一： **xlPageBreakAutomatic** 、 **xlPageBreakManual** 或 **xlPageBreakNone** 。 **Long** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Parent) | 返回指定对象的父对象。只读。 |
| [PivotCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/PivotCell) | 返回一个 **[PivotCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCell/obj)** 对象，该对象表示数据透视表中的一个单元格。 |
| [PivotField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/PivotField) | 返回一个 **[PivotField](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotField/obj)** 对象，它代表指定区域左上角所在的数据透视表字段。 |
| [PivotItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/PivotItem) | 返回一个 **[PivotItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotItem/obj)** 对象，它代表指定区域左上角所在的数据透视表项。 |
| [PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/PivotTable) | 返回一个 **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象，它代表指定区域左上角所在的数据透视表。 |
| [Precedents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Precedents) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示单元格的所有引用单元格。如果有多个引用单元格，则可以是一个多重选择（ **Range** 对象的并集）。只读。 |
| [PrefixCharacter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/PrefixCharacter) | 返回单元格的前缀字符。 **Variant** 类型，只读。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Previous) | 返回一个代表上一个单元格的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。 |
| [QueryTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/QueryTable) | 返回一个 **[QueryTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/obj)** 对象，它代表与指定 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象相交的查询表。 |
| [ReadingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ReadingOrder) | 返回或设置指定对象的阅读次序。可为以下常量之一： **xlRTL** （从右到左）、 **xlLTR** （从左到右）或 **xlContext** 。 **Long** 类型，可读写。 |
| [Row](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Row) | 返回区域中第一个子区域的第一行的行号。 **Long** 类型，只读。 |
| [RowHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/RowHeight) | 以磅为单位返回或设置指定区域中所有行的行高。如果指定区域中的各行的行高不等，则返回 **null** 。 **Variant** 类型，可读写。 |
| [Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Rows) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表指定单元格区域中的行。 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，只读。 |
| [ShowDetail](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ShowDetail) | 如果扩展了指定区域的分级显示（从而行或列的明细数据可见），则为 **True** 。指定区域必须为分级显示中的单个汇总列或汇总行。 **Variant** 型，可读写。对于 **PivotItem** 对象（如果该区域在数据透视表中，则为 **Range** 对象），当数据项显示明细数据时，此属性设为 **True** 。 |
| [ShrinkToFit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/ShrinkToFit) | 返回或设置一个 **Variant** 值。 |
| [SparklineGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/SparklineGroups) | 返回一个 **[SparklineGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SparklineGroups/obj)** 对象，该对象代表指定区域中的一个现有迷你图组。只读 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Style) | 返回或设置一个包含 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/obj)** 对象的 **Variant** 值，它代表指定区域的样式。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Text) | 返回或设置指定对象中的文本。 **String** 型，只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Top) | 返回或设置一个 **Variant** 值，它代表行 1 上边缘到区域上边缘的距离（以磅为单位）。 |
| [UseStandardHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/UseStandardHeight) | 如果 **Range** 对象的行高等于工作表的标准行高，则该值为 **True** 。如果区域包含不止一行并且不是所有的行都等高，则返回 **Null** 。 **Variant** 类型，可读写。 |
| [UseStandardWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/UseStandardWidth) | 如果 **Range** 对象的列宽等于工作表的标准列宽，则该属性的值为 **True** 。如果区域包含不止一列并且不是所有的列都等宽，则返回 **null** 。 **Variant** 类型，可读写。 |
| [Validation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Validation) | 返回一个 **[Validation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Validation/obj)** 对象，该对象表示指定区域的数据有效性检验。只读。 |
| [Value2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Value2) | 返回或设置单元格值。 **Variant** 类型，可读写。 |
| [VerticalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/VerticalAlignment) | 返回或设置一个 **Variant** 值，它代表指定对象的垂直对齐方式。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Width) | 返回一个 **Variant** 值，它代表区域的宽度（以单位表示）。 |
| [Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/Worksheet) | 返回一个 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象，该对象表示包含指定区域的工作表。只读。 |
| [WrapText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/WrapText) | 返回或设置一个 **Variant** 值，它指明 ET 是否为对象中的文本自动换行。 |
| [XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/XPath) | 返回一个 **[XPath](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XPath/obj)** 对象，它代表映射到指定 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象的元素的 XPath。该区域的上下文确定操作是否成功，或返回空对象。只读。 |