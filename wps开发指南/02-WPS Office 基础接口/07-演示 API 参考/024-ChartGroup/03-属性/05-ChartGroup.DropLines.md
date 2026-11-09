# ChartGroup.DropLines

返回折线图或面积图上系列的垂直线。只读 **[DropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DropLines/obj)** 对象。



## 语法

express.**DropLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

DropLines

## 说明


该属性仅适用于折线图或面积图。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表组的垂直线设置为可见，并对其线型和粗细进行设置。本示例应在包含一个数据系列的二维折线图上运行。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let chartGroup = shape.Chart.ChartGroups(1)
        chartGroup.HasDropLines = true
        let border = chartGroup.DropLines.Border
        border.LineStyle = xlDash
        border.Weight = xlMedium
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一张图表的第一个图表组的垂直线设置为可见，并设置该垂直线的线条样式，然后选中该垂直线。*/
function test() {
    let chartGroup = Presentations.Item(1).Slides.Item(1).Shapes(1).Chart.ChartGroups(1)
    chartGroup.HasDropLines = true
    chartGroup.DropLines.Border.LineStyle = xlDashDotDot
    chartGroup.DropLines.Select()
}
```
