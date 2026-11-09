# Shape.Table

返回一个 **[Table](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Table/obj)** 对象，该对象代表某个形状或形状区域内的一个表格。只读。



## 语法

express.**Table**

express   一个代表 **Shape** 对象的变量。

## 类型

Table

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个形状中表格第一列的宽度设置为 80 磅。*/
function test() {
    Application.ActivePresentation.Slides.Item(1).Shapes.Item(1).Table.Columns.Item(1).Width = 80
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第二个形状中表格的行数。*/
function test() {
    let table = Application.ActivePresentation.Slides.Item(1).Shapes.Item(2).Table
    alert(table.Rows.Count)
}
```
