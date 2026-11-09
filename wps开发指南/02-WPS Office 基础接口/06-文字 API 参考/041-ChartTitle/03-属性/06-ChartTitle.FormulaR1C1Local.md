# ChartTitle.FormulaR1C1Local

返回或设置对象的公式，使用用户语言中的 R1C1 样式表示法。可读/写 **String** 类型。



## 语法

express.**FormulaR1C1Local**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表以用户语言的 R1C1 样式表示标题的公式。*/
function test() {
    let chartTitle = ActiveDocument.InlineShapes(1).Chart.ChartTitle
    chartTitle.FormulaR1C1Local = "example_1"
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表以用户语言的 R1C1 样式表示标题的公式。*/
function test() {
    let chartTitle = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartTitle
    alert(chartTitle.FormulaR1C1Local)
}
```
