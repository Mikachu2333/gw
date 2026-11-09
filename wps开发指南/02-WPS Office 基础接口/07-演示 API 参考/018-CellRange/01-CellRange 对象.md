# CellRange 对象

表列或表行中 **[Cell](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Cell/obj)** 对象的集合。 **CellRange** 集合代表指定列或行中的所有单元格。利用 **CellRange** 关键字可使用 **CellRange** 集合。

## 说明


虽然集合对象名为 **CellRange** ，并显示在对象浏览器中，但 WPP 对象模型中未使用此关键字。而使用了关键字 **Cells** 。

不能用编程的方法一次向 WPP 表格中添加多个单元格或从中删除多个单元格。但使用 **Table** 对象的 **AddTable** 方法可以添加一个新表格；使用 **Rows** 或 **Columns** 集合的 **Add** 方法可以向表格中添加一列或一行；使用 **Rows** 或 **Columns** 集合的 **Delete** 方法可以从表格中删除一列或一行。

使用 **Cells** 属性可返回 **CellRange** 集合。


## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格第一列的所有单元格的右线框设置为虚线样式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cellRange = shape.Table.Columns.Item(1).Cells
    cellRange.Borders.Item(ppBorderRight).DashStyle = msoLineDash
}
```


```JavaScript
/*本示例显示活动窗口所选表格的第一行单元格的数量。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let cellRange = table.Rows.Item(1).Cells
    alert(cellRange.Count)
}
```
使用 **Cell** (_row_, _column_)（其中 _row_ 表示行号，_column_ 表示列号）或者使用 **Cells** (_index_)（其中 _index_ 表示指定行或列中单元格的编号）返回一个 **Cell** 对象。单元格的编号方法是：在行中从左向右进行编号，在列中则从上到下进行编号。对于从右向左的语言设置，将使用相反的方案。



```JavaScript
/*本示例合并活动演示文稿的第一张幻灯片的第一个表格的第一行的第一个单元格和第二个单元格。*/
function test() {
    let table = ActivePresentation.Slides.Item(1).Shapes.Item(1).Table
    let cellRange = table.Rows.Item(1).Cells
    cellRange.Item(1).Merge(table.Cell(1, 2))
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CellRange/member/Item) | 从指定的 **CellRange** 集合中返回单个 **Cell** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CellRange/member/Borders) | 返回 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Borders/obj)** 集合，该集合代表指定 **Cell** 对象或 **CellRange** 集合中的边框和对角线。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CellRange/member/Count) | 返回指定集合中的对象数。只读。 |