# Row 对象

代表表格中的一行。 **Row** 对象是 **[Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Rows/obj)** 集合的成员。 **Rows** 集合中包含指定表格中的所有行。

## 说明


使用 **Rows** (_index_) 返回单个 **Row** 对象，其中 _index_ 是一个数字，它代表表格中行所在的位置。


## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片的第一个表格第一行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let row = shape.Table.Rows.Item(1)
    row.Delete()
}
```
使用 [ **Select** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Row/member/Select) 方法可从表格中选择一行。



```JavaScript
/*本示例选择活动演示文稿的第一张幻灯片的第一个表格的第一行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let row = shape.Table.Rows.Item(1)
    row.Select()
}
```
使用 [ **Cells** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Row/member/Cells) 属性可修改 **Row** 对象中的各个单元格。



```JavaScript
/*本示例将活动窗口所选表格的第二行的底边线框设置为虚线样式。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let row = table.Rows.Item(2)
    row.Cells.Borders.Item(ppBorderBottom).DashStyle = msoLineDash
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Row/member/Delete) | 删除指定的 **Row** 对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Row/member/Select) | 选择指定的对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Row/member/Cells) | 返回 **[CellRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/CellRange/obj)** 集合，它代表表格列或行中的单元格。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Row/member/Height) | 返回或设置指定对象的高度（以磅为单位）。可读/写。 |