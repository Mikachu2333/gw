# ChartGroup.SeriesCollection

返回图表组中的所有系列。



## 语法

express.**SeriesCollection(Index)**

express   一个代表 **ChartGroup** 对象的变量。

## 返回值

一个代表图表组中所有系列的 **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesCollection/obj)** 对象。

## 示例


```JavaScript
/*此示例对活动文档中第一个内嵌图表的第一个图表组的第一个系列应用数据标签。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.ChartGroups(1).SeriesCollection(1).HasDataLabels = true
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的第一个图表组的第二个系列的图表类型。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.SeriesCollection(2).ChartType = xlLine
}
```
