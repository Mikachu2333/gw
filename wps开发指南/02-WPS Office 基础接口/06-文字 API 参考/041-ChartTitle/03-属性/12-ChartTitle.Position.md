# ChartTitle.Position

返回或设置图表标题在图表上的位置。可读/写 **[XlChartElementPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartElementPosition)** 。



## 语法

express.**Position**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

XlChartElementPosition

## 示例


```JavaScript
/*本示例将活动文档中第一张图表的标题位置设置为 xlChartElementPositionCustom。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    chart.ChartTitle.Position = xlChartElementPositionCustom
}
```


```JavaScript
/*本示例显示第一个文档上第一张图表的标题在图表上的位置是否为xlChartElementPositionAutomatic。*/
function test() {
    let chart = Documents.Item(1).InlineShapes.Item(1).Chart
    alert(chart.ChartTitle.Position == xlChartElementPositionAutomatic)
}
```
