# DataLabel.FormulaR1C1

返回或设置对象的公式，使用宏语言中的 R1C1 样式表示法。可读/写。



## 语法

express.**FormulaR1C1**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置以宏语言的 R1C1 样式表示的活动文档中第一张内嵌图表的第二个数据系列的第三个数据标签的公式。*/
function test() {
    let dataLabel = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(2).DataLabels(3)
    dataLabel.FormulaR1C1Local = "example_1"
}
```


```JavaScript
/*本示例显示以宏语言的 R1C1 样式表示的第一个文档上第一个形状中图表的第二个数据系列的第四个数据标签的公式。*/
function test() {
    let dataLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels(4)
    alert(dataLabel.FormulaR1C1)
}
```
