# Style.Table

返回一个 **[TableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/obj)** 对象，该对象代表可通过使用表格样式应用于表格的属性。



## 语法

express.**Table**

express   一个代表 **Style** 对象的变量。

## 类型

TableStyle

## 示例


```JavaScript
/*本示例显示活动文档上名为“普通表格”的表格样式的对齐方式是否为wdAlignRowCenter。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("普通表格").Table
    alert(tableStyle.Alignment == wdAlignRowCenter)
}
```


```JavaScript
/*本示例设置第一个文档上名为“彩色型 2”的表格样式中表格的单元格内容的下方添加的间距。*/
function test() {
    let tableStyle = Documents.Item(1).Styles.Item("彩色型 2").Table
    tableStyle.BottomPadding = 3
}
```
