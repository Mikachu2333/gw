# ShapeRange.Table

返回一个 **[Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/obj)** 对象，该对象代表某个形状或形状区域内的一个表格。只读。



## 语法

express.**Table**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

Table

## 示例


```JavaScript
/*本示例将活动演示文稿第二张幻灯片上第五个形状中表格第一列的宽度设置为 80 磅。*/
function test() {
    let shapeRange = ActivePresentation.Slides.Item(2).Shapes.Range(5)
    shapeRange.Table.Columns.Item(1).Width = 80
}
```


```JavaScript
/*本示例将活动窗口上选中表格形状的第三行高度设置 60 磅。*/
function test() {
    ActiveWindow.Selection.ShapeRange.Table.Rows.Item(3).Height = 60
}
```
