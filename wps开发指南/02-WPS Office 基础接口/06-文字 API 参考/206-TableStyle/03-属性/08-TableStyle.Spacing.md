# TableStyle.Spacing

返回或设置采用表格样式的单元格的间距（以磅为单位）。可读写 **Single** 类型。



## 语法

express.**Spacing**

express   一个代表 **TableStyle** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档上名为“网格型”的表格样式的单元格的间距。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("网格型").Table
    alert(tableStyle.Spacing)
}
```


```JavaScript
/*本示例设置第一个文档上名为“彩色型 2”的表格样式中的单元格的间距。*/
function test() {
    let tableStyle = Documents.Item(1).Styles.Item("彩色型 2").Table
    tableStyle.Spacing = 5
}
```
