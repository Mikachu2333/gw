# Columns 对象

 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 对象的集合，这些对象代表表格中的列。

## 说明


使用 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 、 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 或 **[Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Table/obj)** 对象的 **Columns** 属性返回 **Columns** 集合。


## 示例


```JavaScript
/*本示例显示活动文档第一张表格的列的数量。*/
function test() {
    alert(ActiveDocument.Tables.Item(1).Columns.Count)
}
```


```JavaScript
/*本示例在活动文档中创建一张 3x6 的表格，并在每一列的第一个单元格里插入文本。*/
function test() {
    let table = ActiveDocument.Tables.Add(Selection.Range, 3, 6)
    for (let i = 1; i <= table.Columns.Count; i++) {
        let cell = table.Columns.Item(i).Cells.Item(1)
        cell.Range.InsertBefore(`第 ${i} 列`)
    }
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
使用 **Columns** (*Index*) 返回单个 **Column** 对象（其中 *Index* 是索引编号）。索引编号代表该列在 **Columns** 集合中的位置（从左至右计数）。



```JavaScript
/*本示例选择活动文档第一张表格的第一列。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Item(1).Select()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Add) | 返回一个 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 对象，该对象代表添加到表中的列。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Delete) | 删除指定列。 |
| [DistributeWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/DistributeWidth) | 将指定列调整为等宽。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Item) | 返回集合中的单个 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Select) | 选择指定表格列。 |
| [SetWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/SetWidth) | 设置表格列的宽度。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Application) | 返回一个代表 WPS 应用程序的 **Application** 对象。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Count) | 返回一个 **Long** 类型的值，该值代表集合中列的数目。只读。 |
| [First](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/First) | 返回一个 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 对象，该对象代表在 **Columns** 集合中的第一个项目。 |
| [Last](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Last) | 返回表示表格中最后一列的 **[Column](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Column/obj)** 对象。 |
| [NestingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/NestingLevel) | 返回指定列的嵌套层。只读 **Long** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Parent) | 返回一个 **Object** 类型值，该值代表指定 **Columns** 对象的父对象。 |
| [PreferredWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/PreferredWidth) | 返回或设置指定列的首选宽度（以磅为单位或表示为窗口宽度的百分比）。 **Single** 类型，可读写。 |
| [PreferredWidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/PreferredWidthType) | 返回或设置用于指定单元格、列或表格的首选度量单位。可读/写 **WdPreferredWidthType** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/member/Width) | 返回或设置指定列的宽度，以磅为单位。可读/写 **Long** 类型。 |