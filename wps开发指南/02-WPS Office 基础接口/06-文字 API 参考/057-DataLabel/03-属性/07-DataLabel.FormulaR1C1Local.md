# DataLabel.FormulaR1C1Local

返回或设置对象的公式，使用用户语言中的 R1C1 样式表示法。可读/写 **String** 类型。



## 语法

express.**FormulaR1C1Local**

express   一个代表 **DataLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置以用户语言中的 R1C1 样式表示的活动文档中第一张内嵌图表的第二个数据系列的第四个数据标签的公式。*/
function test() {
    let dataLabel = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(2).DataLabels(4)
    dataLabel.FormulaR1C1Local = "example_1"
}
```


```JavaScript
/*本示例显示以用户语言中的 R1C1 样式表示的第一个文档上第一个形状中图表的第三个数据系列的第四个数据标签的公式。*/
function test() {
    let dataLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).DataLabels(4)
    alert(dataLabel.FormulaR1C1Local)
}
```
