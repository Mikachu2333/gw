# Legend.Clear

清除整个对象。



## 语法

express.**Clear()**

express   一个代表 **Legend** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果活动文档上第一个内嵌图表的标题文本为“example-1”，则清除该图表的图例。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "example-1") {
        chart.Legend.Clear()
    }
}
```


```JavaScript
/*本示例判断如果对第一个文档上第一个形状中图表应用图例，则清除该图表的图例。*/
function test() {
    let chart = Documents.Item(1).Shapes.Item(1).Chart
    if (chart.HasLegend) {
        chart.Legend.Clear()
    }
}
```
