# Cell.Shape

返回 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象，该对象代表表格单元格中的形状。只读。



## 语法

express.**Shape**

express   一个代表 **Cell** 对象的变量。

## 类型

Shape

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格的第一个单元格的前景填充色设置为红色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cell = shape.Table.Cell(1, 1)
    cell.Shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例设置第一个窗口所选表格的最后一个单元格的文本。*/
function test() {
    let table = Windows.Item(1).Selection.ShapeRange.Table
    let cell = table.Cell(table.Rows.Count, table.Columns.Count)
    cell.Shape.TextFrame2.TextRange.Text = "example"
}
```
