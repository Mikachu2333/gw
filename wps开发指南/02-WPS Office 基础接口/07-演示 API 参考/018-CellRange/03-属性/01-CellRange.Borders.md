# CellRange.Borders

返回 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Borders/obj)** 集合，该集合代表指定 **Cell** 对象或 **CellRange** 集合中的边框和对角线。只读。



## 语法

express.**Borders**

express   一个代表 **CellRange** 对象的变量。

## 类型

Borders

## 示例


```JavaScript
/*本示例将活动窗口所选表格的第一行所有单元格的左框线的粗细值设置为 3 磅。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    let cellRange = table.Rows.Item(1).Cells
    cellRange.Borders.Item(ppBorderLeft).Weight = 3
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个表格的第二列所有单元格的底边线框的颜色设置为红色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let cellRange = shape.Table.Columns.Item(2).Cells
    cellRange.Borders.Item(ppBorderBottom).ForeColor.RGB = RGB(255, 0, 0)
}
```
