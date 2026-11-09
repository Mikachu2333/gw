# ChartFormat.TextFrame2

返回指定图表元素的文字格式。只读 **TextFrame2** 对象。



## 语法

express.**TextFrame2**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

TextFrame2

## 示例


```JavaScript
/*此示例显示活动文档中第一个内嵌图表的图表区的文本框架中文本环绕方式是否为msoWarpFormatMixed。*/
function test() {
    let chartformat = Application.ActiveDocument.InlineShapes(1).Chart.ChartArea.Format
    alert(chartformat.TextFrame2.WarpFormat == msoWarpFormatMixed)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的模拟运算表的文本框架中是否包含文字。*/
function test() {
    let chartFormat = Application.Documents.Item(1).Shapes.Item(1).Chart.DataTable.Format
    alert(chartFormat.TextFrame2.HasText === msoTrue)
}
```
