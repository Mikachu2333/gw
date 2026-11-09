# TableStyle.TopPadding

返回或设置表格中所有单元格的内容上方要增加的间距（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**TopPadding**

express   一个代表 **TableStyle** 对象的变量。

## 类型

number（float 精度）

## 说明


单个单元格的 **TopPadding** 属性设置将覆盖整个表格的 **TopPadding** 属性设置。



## 示例


```JavaScript
/*本示例显示活动文档上名为“网格型”的表格样式的单元格的上边距。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("网格型").Table
    alert(tableStyle.TopPadding)
}
```


```JavaScript
/*本示例设置第一个文档上名为“彩色型 2”的表格样式中单元格的上边距。*/
function test() {
    let tableStyle = Documents.Item(1).Styles.Item("彩色型 2").Table
    tableStyle.TopPadding = 2
}
```
