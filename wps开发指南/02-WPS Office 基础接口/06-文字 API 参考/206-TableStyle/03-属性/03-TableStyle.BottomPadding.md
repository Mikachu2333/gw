# TableStyle.BottomPadding

返回或设置在表格中单独的单元格或所有单元格内容的下方添加的间距（以磅为单位）。 **Single** 类型，可读写。



## 语法

express.**BottomPadding**

express   一个代表 **TableStyle** 对象的变量。

## 类型

number（float 精度）

## 说明


单独单元格的 **BottomPadding** 属性的设置值会覆盖整个表格的 **BottomPadding** 属性的设置值。



## 示例


```JavaScript
/*本示例显示活动文档上名为“网格型”的表格样式中表格的单元格内容的下方添加的间距。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("网格型").Table
    alert(tableStyle.BottomPadding)
}
```


```JavaScript
/*本示例设置第一个文档上名为“彩色型 2”的表格样式中表格的单元格内容的下方添加的间距。*/
function test() {
    let tableStyle = Documents.Item(1).Styles.Item("彩色型 2").Table
    tableStyle.BottomPadding = 3
}
```
