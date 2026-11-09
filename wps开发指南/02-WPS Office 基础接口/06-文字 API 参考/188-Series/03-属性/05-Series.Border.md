# Series.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **Series** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将第一个文档上第一张图表的第二个系列的边框线条样式设置为xlDash。*/
function test() {
    let series = Application.Documents.Item(1).InlineShapes(1).Chart.SeriesCollection(2)
    series.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例显示活动文档上第一张图表的第一个系列的边框粗细是否为xlHairline。*/
function test() {
    let series = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1)
    alert(series.Border.Weight == xlHairline)
}
```
