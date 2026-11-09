# TableStyle.Alignment

返回或设置一个 **WdRowAlignment** 常量，该常量代表指定表格样式的对齐方式，可读写。



## 语法

express.**Alignment**

express   一个代表 **TableStyle** 对象的变量。

## 类型

WdRowAlignment

## 示例


```JavaScript
/*本示例显示活动文档上名为“普通表格”的表格样式的对齐方式是否为wdAlignRowCenter。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("普通表格").Table
    alert(tableStyle.Alignment == wdAlignRowCenter)
}
```


```JavaScript
/*本示例设置第一个文档上名为“网格型”的表格样式的对齐方式。*/
function test() {
    let tableStyle = Documents.Item(1).Styles.Item("网格型").Table
    tableStyle.Alignment = wdAlignRowRight
}
```
