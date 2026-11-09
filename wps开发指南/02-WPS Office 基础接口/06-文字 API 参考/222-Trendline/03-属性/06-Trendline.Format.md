# Trendline.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **Trendline** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的第二个数据系列的第一条趋势线的虚线样式。*/
function test() {
    let trendline = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Format.Line.DashStyle = msoLineLongDash
}
```


```JavaScript
/*此示例设置第一个文档上第一个形状中图表的第一个数据系列的第一条趋势线的线条粗细。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.Format.Line.Weight = 3
}
```
