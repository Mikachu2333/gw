# TickLabels.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **TickLabels** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动文档上第一个内嵌图表的数值轴的刻度线标签。*/
function test() {
    let tickLabels = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的标题为“example_2”，则删除该图表上类别轴的刻度线标签。*/
function test() {
    let chart = Documents.Item(1).Shapes.Item(1).Chart
    if (chart.ChartTitle.Caption == "example_2") {
        chart.Axes(xlCategory).TickLabels.Delete()
    }
}
```
