# PlotArea.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **PlotArea** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一个图表的绘图区线条的虚线样式和粗细。*/
function test() {
    let plotArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    let line = plotArea.Format.Line
    line.DashStyle = msoLineDashDotDot
    line.Weight = 2
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的绘图区的前景填充色。*/
function test() {
    let plotArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```
