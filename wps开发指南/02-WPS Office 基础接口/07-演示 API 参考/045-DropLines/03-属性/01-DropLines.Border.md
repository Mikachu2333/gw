# DropLines.Border

返回对象的边框。只读 **[ChartBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/obj)** 对象。



## 语法

express.**Border**

express   一个代表 **DropLines** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的垂直线设置为可见，并将该垂直线的边框的线条样式设置为虚线。*/
function test() {
    let chartGroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.HasDropLines = true
    chartGroup.DropLines.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的垂直线的边框粗细是否为细线边框。*/
function test() {
    let droplines = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1).DropLines
    alert(droplines.Border.Weight == xlHairline)
}
```
