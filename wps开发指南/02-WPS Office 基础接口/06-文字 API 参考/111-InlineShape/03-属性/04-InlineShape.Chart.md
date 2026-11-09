# InlineShape.Chart

返回一个 **Chart** 对象，该对象代表文档中内嵌形状集合内的图表。只读。



## 语法

express.**Chart**

express   一个代表 **InlineShape** 对象的变量。

## 类型

Chart

## 示例


```JavaScript
/*本示例在活动文档中新建一个簇状条形图，并设置图表标题。*/
function test() {
    let chart = ActiveDocument.InlineShapes.AddChart(xlBarClustered).Chart
    chart.ChartTitle.Text = '新建图表标题'
}
```


```JavaScript
/*本示例将第一个文档中的第一个内嵌图表的图例的字体颜色设为蓝色。*/
function test() {
    let chart = Documents.Item(1).InlineShapes.Item(1).Chart
    chart.HasLegend = true
    chart.Legend.Font.Color = RGB(0, 0, 255)
}
```
