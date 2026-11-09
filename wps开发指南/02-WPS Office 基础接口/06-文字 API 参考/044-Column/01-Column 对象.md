# Column 对象

代表单个表格列。 **Column** 对象是 **[Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/obj)** 集合的成员。 **Columns** 集合包括一个表格、选定内容或区域中的所有列。

## 说明


使用 **Columns** (*Index*) 返回单个 **Column** 对象（其中 *Index* 是索引编号）。索引编号代表该列在 **[Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/obj)** 集合中的位置（从左至右计数）。


## 示例


```JavaScript
/*本示例选择活动文档第一张表格的第一列。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Item(1).Select()
}
```
可将 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 属性与 **[Cell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/obj)** 对象配合使用，返回 **Column** 对象。



```JavaScript
/*本示例删除活动文档第一张表格的第一个单元格的内容并插入新文本，然后将该单元格所在列的宽度设置为 36 磅。*/
function test() {
    let cell = ActiveDocument.Tables.Item(1).Cell(1, 1)
    cell.Range.Delete()
    cell.Range.InsertBefore("Sales")
    cell.Column.Width = 36
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Add)** 方法在表格中添加一列。



```JavaScript
/*本示例在活动文档的第一张表格添加一列，然后将列宽设置为相等。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        let table = ActiveDocument.Tables.Item(1)
        table.Columns.Add(table.Columns.Item(1))
        table.Columns.DistributeWidth()
    }
}
```
可将 **[Information](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/Information)** 属性与 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象配合使用，返回当前列的编号。



```JavaScript
/*本示例显示所选表格的第一列的列号。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Columns.Item(1).Select()
        alert(`Column ${Selection.Information(wdStartOfRangeColumnNumber)}`)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Delete) | 删除指定列。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Select) | 选择指定表格列。 |
| [SetWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/SetWidth) | 设置表格列的宽度。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Borders) | 返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Borders/obj)** 集合，该集合代表指定对象的所有边框。 |
| [Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Cells) | 返回一个 **[Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/obj)** 集合，该集合代表表格列中的表格单元格。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Creator) | 返回一个 32 位整数，该整数代表在其中创建特定对象的应用程序。只读 **Long** 类型。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Index) | 返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。 |
| [IsFirst](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/IsFirst) | 如果指定的列是表格的第一列，则返回 **True** 。只读 **Boolean** 类型。 |
| [IsLast](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/IsLast) | 如果指定的列是表格的最后一列，则返回 **True** 。只读 **Boolean** 类型。 |
| [NestingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/NestingLevel) | 返回指定列的嵌套层。只读 **Long** 类型。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Next) | 返回表格列集合中的下一列。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Column** 对象的父对象。 |
| [PreferredWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/PreferredWidth) | 返回或设置指定列的首选宽度（以磅为单位或表示为窗口宽度的百分比）。 **Single** 类型，可读写。 |
| [PreferredWidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/PreferredWidthType) | 返回或设置用于指定表格列的宽度的首选度量单位。可读/写 **WdPreferredWidthType** 类型。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Previous) | 返回表格列集合中的前一列。只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/member/Width) | 返回或设置指定列的宽度，以磅为单位。可读/写 **Long** 类型。 |