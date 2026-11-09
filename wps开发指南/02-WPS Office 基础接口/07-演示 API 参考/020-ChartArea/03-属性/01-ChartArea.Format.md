# ChartArea.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **ChartArea** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表的图表区的前景填充色设置为绿色。*/
function test() {
    let chartArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片中第一张图表的图表区的线条设置为宽度2磅的虚线。*/
function test() {
    let chartArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Format.Line.DashStyle = msoLineDashDotDot
    chartArea.Format.Line.Weight = 2
}
```
