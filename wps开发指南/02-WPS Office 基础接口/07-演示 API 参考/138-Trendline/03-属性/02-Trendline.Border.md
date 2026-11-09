# Trendline.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **Trendline** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*此示例设置第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一条趋势线的边框的线条样式和粗细。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Border.LineStyle = xlDashDotDot
    trendline.Border.Weight = xlThick
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第一条趋势线的边框的粗细是否为xlThin。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    alert(trendline.Border.Weight == xlThin)
}
```
