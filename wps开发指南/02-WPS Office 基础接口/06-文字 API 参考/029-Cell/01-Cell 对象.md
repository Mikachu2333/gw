# Cell 对象

代表单个表格单元格。 **Cell** 对象是 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/obj)** 集合的成员。 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/obj)** 集合代表指定对象中所有的单元格。

## 说明


若要返回 **Cell** 对象，应使用 **[Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/obj)** 对象的 **Cell** (*row*, *column*)（其中 *row* 是行号，*column* 是列号）；或使用 **Cells** (*index*)（其中 *index* 是索引编号）。


## 示例


```JavaScript
/*本示例对活动文档第一行的第二个单元格应用底纹。*/
function test() {
    let cell = Application.ActiveDocument.Tables.Item(1).Cell(1, 2)
    cell.Shading.Texture = wdTexture20Percent
}
```


```JavaScript
/*本示例对第一行的第一个单元格应用底纹。*/
function test() {
    let cell =  ActiveDocument.Tables.Item(1).Rows.Item(1).Cells.Item(1)
    cell.Shading.Texture = wdTexture20Percent
}
```
使用 **Add** 方法将 **Cell** 对象添加到 **Cells** 集合。还可以使用 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象的 **[InsertCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertCells)** 方法插入新的单元格。



```JavaScript
/*本示例在 table 的第一个单元格之前添加一个单元格。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    table.Range.Cells.Add(table.Cell(1, 1))
}
```


```JavaScript
/*本示例设置引用第一个表格的头两个单元格的区域 (range)，设置此区域后，通过 Merge 方法合并单元格。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    let range = Application.ActiveDocument.Range(table.Cell(1, 1).Range.Start, table.Cell(1, 2).Range.End)
    range.Cells.Merge()
}
```
可将 **Add** 方法与 **Rows** 或 **Columns** 集合配合使用，添加一行或一列单元格。

可将 **[Information](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Information)** 属性与 **Selection** 对象配合使用，返回当前行号和列号。



```JavaScript
/*本示例更改选定内容中第一个单元格的宽度，然后显示该单元格的行号和列号。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Cells.Item(1).Width = 22
        MsgBox("Cell " + Selection.Information(wdStartOfRangeRowNumber) + "," + Selection.Information(wdStartOfRangeColumnNumber))
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Delete) | 删除一个或多个表格单元格并可选择控制如何移动剩余的单元格。 |
| [Merge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Merge) | 将指定单元格与另一表格单元格合并，成为一个单独的表格单元格。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Select) | 选择指定的对象。 |
| [SetHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/SetHeight) | 设置表格单元格的高度。 |
| [SetWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/SetWidth) | 设置表格列或单元格的宽度 |
| [Split](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Split) | 将一个表格单元格拆分为多个。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Application) | 返回一个 **Application** 对象，该对象代表 WPS 应用程序。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Borders) | 返回一个 **Borders** 集合，该集合代表指定对象的所有边框。 |
| [BottomPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/BottomPadding) | 返回或设置在表格中单独的单元格或所有单元格内容的下方添加的间距（以磅为单位）。 **Single** 类型，可读写。 |
| [Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Column) | 返回一个 **Column** 对象，该对象代表包含指定单元格的表格列。只读。 |
| [ColumnIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/ColumnIndex) | 返回包含指定单元格的表格列数。 **Long** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [FitText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/FitText) | 如果 WPS 会减小键入单元格中的文字的可视大小，使其适应列宽，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Height) | 返回或设置指定表格单元格的高度。 |
| [HeightRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/HeightRule) | 返回或设置一个 **WdRowHeightRule** 常量，该常量代表确定指定单元格或行高度的规则。可读写。 |
| [LeftPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/LeftPadding) | 返回或设置在表格的单个单元格或所有单元格的内容左侧的间距（以磅为单位）。 **Single** 类型，可读写。 |
| [NestingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/NestingLevel) | 返回指定单元格的嵌套层。 **Long** 类型，只读。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Next) | 返回一个 **Cell** 对象，该对象代表 **Cells** 集合中的下一个表格单元格。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Cell** 对象的父对象。 |
| [PreferredWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/PreferredWidth) | 返回或设置指定单元格的首选宽度（以磅为单位或表示为窗口宽度的百分比）。 **Single** 类型，可读写。 |
| [PreferredWidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/PreferredWidthType) | 返回或设置用于指定单元格的宽度的首选度量单位。 **WdPreferredWidthType** 类型，只读。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Previous) | 返回一个 **Cell** 对象，该对象代表 **Cells** 集合中的前一个表格单元格。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Range) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定对象所含的部分文档。 |
| [RightPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/RightPadding) | 返回或设置表格中某个单元格或全部单元格内容右侧的空格量（以磅为单位）。 **Single** 类型，可读写。 |
| [Row](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Row) | 返回一个 **Row** 对象，该对象代表指定单元格所在的行。 |
| [RowIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/RowIndex) | 返回指定单元格所在行的行数。 **Long** 类型，只读。 |
| [Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Shading) | 返回一个 **Shading** 对象，该对象指明指定对象的底纹格式。 |
| [Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Tables) | 返回一个 **[Tables](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Tables/obj)** 集合，该集合代表指定表格单元格中的所有嵌套表格。只读。 |
| [TopPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/TopPadding) | 返回或设置表格中单独的单元格或全部单元格的内容上方要增加的间距（以磅为单位）。 **Single** 类型，可读写。 |
| [VerticalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/VerticalAlignment) | 返回或设置表格中一个或多个单元格中文字的垂直对齐方式。 **WdCellVerticalAlignment** 类型，可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/member/Width) | 返回或设置指定表格单元格的宽度（以磅为单位）。 **Long** 类型，可读写。 |