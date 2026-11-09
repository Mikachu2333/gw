# ChartGroup.HasSeriesLines

如果堆积柱形图或堆积条形图有系列线，或者复合饼图或复合条饼图在两个部分之间有连接线，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasSeriesLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于二维堆积条形图、二维堆积柱形图、复合饼图或复合条饼图。



## 示例


```JavaScript
/*本示例为活动文档中第一个内嵌图表上的第一个图表组启用系列线，然后设置其线型和粗细。应在具有两个或更多系列的二维堆积柱形图上运行示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.HasSeriesLines = true
        let border = chartGroup.SeriesLines.Border
        border.LineStyle = xlContinuous
        border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个图表组是否展示系列线。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.HasSeriesLines)
}
```
