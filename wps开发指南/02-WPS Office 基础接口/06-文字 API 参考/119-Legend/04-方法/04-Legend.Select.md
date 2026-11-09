# Legend.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Legend** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档上第一个内嵌图表的图例。*/
function test() {
    let legend = ActiveDocument.InlineShapes.Item(1).Chart.Legend
    legend.Select()
}
```


```JavaScript
/*本示例判断如果对第一个文档上第一个形状中图表应用图例，则选中该图表的图例。*/
function test() {
    let chart = Documents.Item(1).Shapes.Item(1).Chart
    if (chart.HasLegend) {
        chart.Legend.Select()
    }
}
```
