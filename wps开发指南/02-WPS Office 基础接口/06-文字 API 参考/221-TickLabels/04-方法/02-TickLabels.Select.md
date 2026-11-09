# TickLabels.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **TickLabels** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档上第一个内嵌图表的数值轴刻度线标签。*/
function test() {
    let tickLabels = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Select()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题为“example_2”，则选中该图表上类别轴的刻度线标签。*/
function test() {
    let chart = Documents.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "example_2") {
        chart.Axes(xlCategory).Select()
    }
}
```
