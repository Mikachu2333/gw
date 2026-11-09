# ChartGroup.SplitType

返回或设置在复合饼图或复合条饼图中拆分两部分的方式。可读/写 **[XlChartSplitType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartSplitType)** 。



## 语法

express.**SplitType**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

XlChartSplitType

## 示例


```JavaScript
/*本示例按数值拆分图表的两部分，组合主饼图部分所有小于 10 的数值，并在从属部分显示这些数值。必须在复合饼图或复合条饼图上运行该示例。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let chartGroup = inlineShape.Chart.ChartGroups(1)
        chartGroup.SplitType = xlSplitByValue
        chartGroup.SplitValue = 10
        chartGroup.VaryByCategories = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中复合饼图的第一个图表组拆分两部分的方式是否为xlSplitByPosition。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartGroup.SplitType == xlSplitByPosition)
}
```
