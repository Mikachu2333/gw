# LeaderLines.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **LeaderLines** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例设置活动文档中第一个图表的第一个数据系列的引导线的边框为粗边框。*/
function test() {
    let series = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1)
    series.LeaderLines.Border.Weight = xlThick
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的第一个数据系列的引导线为虚线。如果看不到引导线，可以手动将数据标签拖出饼图以便让引导线显示。*/
function test() {
    let series = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1)
    series.LeaderLines.Border.LineStyle = xlDash
}
```
