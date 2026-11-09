# TableStyle.LeftPadding

返回或设置在表格中所有单元格的内容左侧要增加的间距（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**LeftPadding**

express   一个代表 **TableStyle** 对象的变量。

## 类型

number（float 精度）

## 说明


单个单元格的 **LeftPadding** 属性设置将覆盖整个表格的 **LeftPadding** 属性设置。



## 示例


```JavaScript
/*本示例将活动文档上名为“网格型”的表格样式中表格的单元格内容的左边距设置为40像素。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("网格型").Table
    tableStyle.LeftPadding = PixelsToPoints(40, false)
}
```


```JavaScript
/*本示例显示第一个文档上名为“彩色型 2”的表格样式中表格的单元格内容的左边距。*/
function test() {
    let tableStyle = Documents.Item(1).Styles.Item("彩色型 2").Table
    alert(tableStyle.LeftPadding)
}
```
