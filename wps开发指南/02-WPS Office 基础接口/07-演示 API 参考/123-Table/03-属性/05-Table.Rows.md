# Table.Rows

返回一个 **[Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Rows/obj)** 集合，该集合代表表格中的所有行。只读。



## 语法

express.**Rows**

express   一个代表 **Table** 对象的变量。

## 类型

Rows

## 示例


```JavaScript
/*本示例删除活动演示文稿第二张幻灯片上第五个形状中表格的第三行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(5)
    shape.Table.Rows.Item(3).Delete()
}
```


```JavaScript
/*本示例对活动窗口选中表格的第二行单元格的下边框应用虚线样式。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    table.Rows.Item(2).Cells.Borders.Item(ppBorderBottom).DashStyle = msoLineDash
}
```
