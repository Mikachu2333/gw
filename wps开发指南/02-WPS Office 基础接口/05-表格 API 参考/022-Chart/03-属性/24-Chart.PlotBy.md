# Chart.PlotBy

返回或设置行或列在图表中作为数据系列使用的方式。可为以下 **[XlRowCol](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlRowCol)** 常量之一： **xlColumns** 或 **xlRows** 。 **Long** 类型，可读写。



## 语法

express.**PlotBy**

express   一个代表 **Chart** 对象的变量。

## 类型

XlRowCol

## 说明


对于数据透视图，该属性是只读的，并且总返回 **xlColumns** 。



## 示例


```JavaScript
/*本示例使第一张工作表第一张嵌入图表按列绘制数据。*/
function test() {
    let chart = Application.Worksheets.Item(1).ChartObjects(1).Chart
    chart.PlotBy = xlColumns
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 是否按列绘制数据。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    alert(chart.PlotBy == xlColumns)
}
```
