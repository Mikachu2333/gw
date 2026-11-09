# Cell 对象

代表表格单元格。 **Cell** 对象是 **[CellRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CellRange/obj)** 集合的成员。 **CellRange** 集合代表指定列或行中的所有单元格。利用 **CellRange** 关键字可使用 **CellRange** 集合。

## 说明


不能用编程的方法一次向 WPP 表格中添加多个单元格或从中删除多个单元格。但使用 **Rows** 或 **Columns** 集合的 **Add** 方法可以向表格中添加一列或一行；使用 **Rows** 或 **Columns** 集合的 **Delete** 方法可以从表格中删除一列或一行。

使用 **Cell** (_row_, _column_)（其中 _row_ 表示行号，_column_ 表示列号）或者使用 **Cells** (_index_)（其中 _index_ 表示指定行或列中单元格的编号）返回一个 **Cell** 对象。单元格的编号方法是：在行中从左向右进行编号，在列中则从上到下进行编号。对于从右向左的语言设置，将使用相反的方案。


## 示例


```JavaScript
/*本示例合并活动演示文稿的第一张幻灯片的第一个表格第一行的第一个单元格和第二个单元格。*/
function test() {
    let table = ActivePresentation.Slides.Item(1).Shapes.Item(1).Table
    let cell = table.Cell(1, 1)
    cell.Merge(table.Cell(1, 2))
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格的第一个单元格的底边线框设置为虚线样式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cell = shape.Table.Cell(1, 1)
    cell.Borders.Item(ppBorderBottom).DashStyle = msoLineDash
}
```
使用 [ **Shape** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Cell/member/Shape) 属性可访问 **Shape** 对象并处理每个单元格中的内容。



```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片的第一个表格的第一个单元格的文本，然后插入新文本并将整列的宽度设置为 110 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cell = shape.Table.Cell(1, 1)
    cell.Shape.TextFrame2.TextRange.Delete()
    cell.Shape.TextFrame2.TextRange.Text = "Rooster"
    shape.Table.Columns.Item(1).Width = 110
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Merge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Cell/member/Merge) | 合并表格中的单元格。其结果为表格中的一个单元格。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Cell/member/Select) | 选择指定的对象。 |
| [Split](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Cell/member/Split) | 将一个表单元格拆分为多个单元格。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Cell/member/Borders) | 返回 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Borders/obj)** 集合，该集合代表指定 **Cell** 对象或 **CellRange** 集合中的边框和对角线。只读。 |
| [Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Cell/member/Shape) | 返回 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象，该对象代表表格单元格中的形状。只读。 |