# ChartFormat.Line

返回指定图表元素的线条格式属性。只读 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/obj)** 对象。



## 语法

express.**Line**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

LineFormat

## 说明


对于线条来说， **LineFormat** 对象代表线条本身；而对于带有边框的图表来说， **LineFormat** 对象代表边框。



## 示例


```JavaScript
/*此示例将活动文档中第一张内嵌图表的图表区的边框粗细设置为 3 磅。*/
function test() {
    let chartFormat = Application.ActiveDocument.InlineShapes(1).Chart.ChartArea.Format
    chartFormat.Line.Weight = 3
}
```


```JavaScript
/*此示例显示活动文档中第一张内嵌图表中图表区的边框的虚线样式是否为实线。*/
function test() {
    let chartFormat = Application.ActiveDocument.InlineShapes(1).Chart.ChartArea.Format
    alert(chartFormat.Line.DashStyle == msoLineSolid)
}
```
