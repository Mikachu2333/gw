# ChartGroup.AxisGroup

返回坐标轴组的类型。可读/写 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 。



## 语法

express.**AxisGroup**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

XlAxisGroup

## 示例


```JavaScript
/*此示例显示第一个文档上第一张图表的第一个图表组的坐标轴组是否为次坐标轴组。*/
function test() {
    let chartgroup = Application.Documents.Item(1).InlineShapes(1).Chart.ChartGroups(1)
    alert(chartgroup.AxisGroup == xlSecondary)
}
```


```JavaScript
/*此示例设置活动文档上第一张内嵌图表的第一个图表组的坐标轴组为主坐标轴组。*/
function test() {
    let chartgroup = ActiveDocument.InlineShapes(1).Chart.ChartGroups(1)
    chartgroup.AxisGroup = xlPrimary
}
```
