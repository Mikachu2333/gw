# SeriesLines.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **SeriesLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的第一个图表组的系列线的粗细设置为 10 磅。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartGroups(1).SeriesLines.Format.Line.Weight = 10
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的系列线样式设置为msoLineThinThin。*/
function test() {
    let seriesLines = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).SeriesLines
    seriesLines.Format.Line.Style = msoLineThinThin
}
```
