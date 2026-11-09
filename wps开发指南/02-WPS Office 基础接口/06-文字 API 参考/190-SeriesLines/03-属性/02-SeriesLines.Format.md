# SeriesLines.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **SeriesLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的第一个图表组的系列线的粗细设置为 10 磅。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    chart.ChartGroups(1).SeriesLines.Format.Line.Weight = 10
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第一个图表组的系列线样式设置为双细线。*/
function test() {
    let seriesLines = Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1).SeriesLines
    seriesLines.Format.Line.Style = msoLineThinThin
}
```
