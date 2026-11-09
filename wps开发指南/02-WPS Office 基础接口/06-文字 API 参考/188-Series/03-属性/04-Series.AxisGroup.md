# Series.AxisGroup

返回坐标轴组的类型。可读/写 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 。



## 语法

express.**AxisGroup**

express   一个代表 **Series** 对象的变量。

## 类型

XlAxisGroup

## 示例


```JavaScript
/*本示例将第一个文档中第一个图表的第二个系列坐标轴组类型设置为次坐标轴组。*/
function test() {
    let series = Documents.Item(1).InlineShapes.Item(1).Chart.SeriesCollection(2)
    series.AxisGroup = xlSecondary
}
```


```JavaScript
/*本示例显示选中图表的第一个系列坐标轴组类型是否为主坐标轴组。*/
function test() {
    let series = Selection.InlineShapes.Item(1).Chart.SeriesCollection(1)
    alert(series.AxisGroup == xlPrimary)
}
```
