# ChartGroup.SeriesLines

返回二维堆积条形图、二维堆积柱形图、复合饼图、复合条饼图的系列线。只读 **[SeriesLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesLines/obj)** 对象。



## 语法

express.**SeriesLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

SeriesLines

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
/*本示例删除第一个文档上第一个形状中图表的第一个图表组的系列线。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.SeriesLines.Delete()
}
```
