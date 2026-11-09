# Column 对象

代表表格中的一列。 **Column** 对象是 [ **Columns** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Columns/obj) 集合的成员。 **Columns** 集合包含表格中的所有列。

## 说明


使用 **Columns** (_index_) 返回一个 **Column** 对象。_Index_ 代表 **Columns** 集合中列的位置（通常从左向右计算；但 [ **TableDirection** ](#TODO) 属性可变换计算方向）。


## 示例


```JavaScript
/*本示例选择活动演示文稿的第一张幻灯片的第一个表格的第一列。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let column = shape.Table.Columns.Item(1)
    column.Select()
}
```
使用 **Cell** 对象可间接引用 **Column** 对象。



```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片的第一个表格的第一个单元格的文本，然后插入新文本并将第一列的宽度设置为 110 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cell = shape.Table.Cell(1, 1)
    cell.Shape.TextFrame2.TextRange.Delete()
    cell.Shape.TextFrame2.TextRange.Text = "Rooster"
    shape.Table.Columns.Item(1).Width = 110
}
```
使用 [ **Add** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Columns/member/Add) 方法可向表格中添加一列。



```JavaScript
/*本示例在活动演示文稿的第一张幻灯片的第一个表格的第一列前添加一列，并将该列的宽度设置为 72 磅。*/
function test() {
    let table = ActivePresentation.Slides.Item(1).Shapes.Item(1).Table
    let column = table.Columns.Add(1)
    column.Width = 72
}
```
使用 [ **Cells** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Column/member/Cells) 属性可修改 **Column** 对象中的个别单元格。



```JavaScript
/*本示例将活动窗口所选表格第一列的所有单元格的底边线框设置为虚线样式。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let column = table.Columns.Item(1)
    column.Cells.Borders.Item(ppBorderBottom).DashStyle = msoLineDash
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Column/member/Delete) | 删除指定的 **Column** 对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Column/member/Select) | 选择指定的对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Column/member/Cells) | 返回 **[CellRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CellRange/obj)** 集合，它代表表格列或行中的单元格。只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Column/member/Width) | 返回或设置指定对象的宽度（以磅为单位）。可读/写。 |