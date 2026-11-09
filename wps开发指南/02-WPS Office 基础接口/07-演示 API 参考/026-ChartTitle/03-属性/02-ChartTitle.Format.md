# ChartTitle.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的标题的前景填充色为红色。*/
function test() {
    let chartTitle = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    chartTitle.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则设置该标题的线条的虚线样式和粗细。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    if (chartTitle.Caption == "test") {
        chartTitle.Format.Line.DashStyle = msoLineDashDotDot
        chartTitle.Format.Line.Weight = 2
    }
}
```
