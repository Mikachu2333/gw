# Table.Style

返回一个 **[TableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TableStyle/obj)** 对象，该对象包含有关指定表格的当前表格样式的信息。只读。



## 语法

express.**Style**

express   一个代表 **Table** 对象的变量。

## 类型

TableStyle

## 示例


```JavaScript
/*本示例显示活动演示文稿第二张幻灯片上第一形状中表格的样式的名称。*/
function test() {
    let table = ActivePresentation.Slides.Item(2).Shapes.Item(1).Table
    alert(table.Style.Name)
}
```


```JavaScript
/*本示例显示活动窗口上选中表格的样式的Id。*/
function test() {
    let table = ActiveWindow.Selection.ShapeRange.Table
    alert(table.Style.Id)
}
```
