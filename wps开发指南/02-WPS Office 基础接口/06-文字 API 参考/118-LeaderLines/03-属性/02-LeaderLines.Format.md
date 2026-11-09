# LeaderLines.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **LeaderLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动文档上第一个图表的第一个数据系列的引导线格式设置为点划线。*/
function test() {
    let series = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1)
    series.LeaderLines.Format.Line.DashStyle = msoLineDashDot
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第一个数据系列的引导线的粗细设置为 5 磅。*/
function test() {
    let series = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1)
    series.LeaderLines.Format.Line.Weight = 5
}
```
