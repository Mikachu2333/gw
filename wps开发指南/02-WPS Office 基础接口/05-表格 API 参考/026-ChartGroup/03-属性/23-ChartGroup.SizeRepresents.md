# ChartGroup.SizeRepresents

返回或设置气泡图中气泡的大小所表示的含义。可为以下 **[XlSizeRepresents](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlSizeRepresents)** 常量之一： **xlSizeIsArea** 或 **xlSizeIsWidth** 。 **Long** 类型，可读写。



## 语法

express.**SizeRepresents**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

XlSizeRepresents

## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 第一个图表组中气泡的大小所表示的含义。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.SizeRepresents = xlSizeIsWidth
}
```


```JavaScript
/*本示例显示工作表 Sheet1 第一个内嵌图表中第一个图表组中气泡的大小是否表示为气泡的面积。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.SizeRepresents == xlSizeIsArea)
}
```
