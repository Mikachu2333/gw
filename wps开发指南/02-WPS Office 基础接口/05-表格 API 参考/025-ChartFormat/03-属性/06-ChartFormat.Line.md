# ChartFormat.Line

返回一个包含指定图表元素线条格式属性的 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/obj)** 对象。只读。



## 语法

express.**Line**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

LineFormat

## 说明


对于线条来说， **LineFormat** 对象代表线条本身；而对于带有边框的图表来说， **LineFormat** 对象代表边框。



## 示例


```JavaScript
/*此示例设置工作表 Sheet1 中第一个内嵌图表区的线条粗细为 1.6 磅。*/
function test() {
    let chartformat = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea.Format
    chartformat.Line.Weight = 1.6
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 图表区线条的虚线样式是否为实线。*/
function test() {
    let chartformat = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea.Format
    alert(chartformat.Line.DashStyle == msoLineSolid)
}
```
