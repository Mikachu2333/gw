# Trendline.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **Trendline** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*此示例设置第一个文档上的第一个形状中图表的第二个数据系列的第一条趋势线的边框的线条样式和粗细。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Border.LineStyle = xlDashDotDot
    trendline.Border.Weight = xlThick
}
```


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的第一个数据系列的第一条趋势线的边框的粗细是否为xlThin。*/
function test() {
    let trendline = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    alert(trendline.Border.Weight == xlThin)
}
```
