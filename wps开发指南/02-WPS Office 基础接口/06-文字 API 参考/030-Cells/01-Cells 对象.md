# Cells 对象

由表格列、表格行、选定内容或区域中的 **[Cell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/obj)** 对象组成的集合。

## 说明


使用 **Cells** 属性来返回该 **Cells** 的集合。


## 示例


```JavaScript
/*本示例将活动文档的第一张表格第一行单元格宽设置为30磅。*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Cells.Width = 30
}
```


```JavaScript
/*本示例显示当前行中的单元格数量。*/
function test() {
    alert(Application.Selection.Rows.Item(1).Cells.Count)
}
```
使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Add)** 方法将 **[Cell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cell/obj)** 对象添加到 **Cells** 集合。 您还可以使用 **[InsertCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/member/InsertCells)** 要插入新单元格的 **[Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Selection/obj)** 对象的方法。



```JavaScript
/*本示例在活动文档第一张表格的第一行第一列单元格前添加一个新单元格。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    table.Range.Cells.Add(table.Cell(1, 1))
}
```
使用 **Cell** (row、column)（其中 row 是行号，column是列号）或 **Cells** (index) （其中 index 是索引号）返回 **Cell** 对象。



```JavaScript
/*本示例对活动文档的第一张表格第一行中第一个单元格应用20%底纹。*/
function test() {
    let tables = Application.ActiveDocument.Tables
    tables.Item(1).Rows.Item(1).Cells.Item(1).Shading.Texture = wdTexture20Percent
}
```
使用 **Add** 方法向 **[Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Rows/obj)** 或 **[Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Columns/obj)** 的集合中添加行或列的单元格。



```JavaScript
/*本示例向活动文档中的第一张表格添加一列，然后将序号插入第一列中。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    let newColumn = table.Columns.Add(table.Columns.Item(1))
    for (let i = 1; i <= newColumn.Cells.Count; i++) {
        newColumn.Cells.Item(i).Range.InsertAfter("Cell" + i)
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Add) | 返回一个 **Cell** 对象，该对象代表添加到表格中的单元格。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Delete) | 删除一个或多个表格单元格并可选择控制如何移动剩余的单元格。 |
| [DistributeHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/DistributeHeight) | 将指定单元格调整为等高。 |
| [DistributeWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/DistributeWidth) | 将指定单元格调整为等宽。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Item) | 返回集合中的单个 **Cell** 对象。 |
| [Merge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Merge) | 将指定的多个表格单元格相互合并。合并后的结果是一个表格单元格。 |
| [SetHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/SetHeight) | 设定表格单元格的高度。 |
| [SetWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/SetWidth) | 设置表格的列或单元格的宽度。 |
| [Split](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Split) | 拆分表格单元格范围。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Application) | 返回一个 **Application** 对象，该对象代表 WPS 应用程序。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Borders) | 返回一个 **Borders** 集合，该集合代表指定对象的所有边框。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Count) | 返回 **Cells** 集合中的项目数。 **Number** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Creator) | 返回一个 32 位整数，该整数指出用于创建指定对象的应用程序。 **Long** 类型，只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Height) | 返回或设置指定表格单元格的高度。可读/写 **Single** 类型。 |
| [HeightRule](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/HeightRule) | 返回或设置一个 **WdRowHeightRule** 常量，该常量代表确定指定单元格高度的规则。可读写。 |
| [NestingLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/NestingLevel) | 返回指定单元格的嵌套层。 **Long** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **Cells** 对象的父对象。 |
| [PreferredWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/PreferredWidth) | 返回或设置指定单元格的首选宽度（以磅为单位或表示为窗口宽度的百分比）。 **Single** 类型，可读写。 |
| [PreferredWidthType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/PreferredWidthType) | 返回或设置用于指定单元格的宽度的首选度量单位。 **WdPreferredWidthType** 类型，可读写。 |
| [Shading](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Shading) | 返回一个 **Shading** 对象，该对象指明指定对象的底纹格式。 |
| [VerticalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/VerticalAlignment) | 返回或设置表格中一个或多个单元格中文字的垂直对齐方式。 **WdCellVerticalAlignment** 类型，可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Cells/member/Width) | 返回或设置表格单元格的宽度（以磅为单位）。 **Single** 类型，可读写。 |