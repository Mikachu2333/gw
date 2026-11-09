# Trendline.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **Trendline** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的第二个数据系列的第一条趋势线的虚线样式。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Format.Line.DashStyle = msoLineLongDash
}
```


```JavaScript
/*此示例设置第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第一条趋势线的线条粗细。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.Format.Line.Weight = 10
}
```
