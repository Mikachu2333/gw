# PlotArea 对象

代表图表的绘图区。

## 说明


该区域为绘制图表数据的区域。二维图表中的绘图区包含数据标志、网格线、数据标签、趋势线和可选的置于图表区内的图表项。三维图表的绘图区中除包含上述各项外，还在图表中包含背景墙、基底、坐标轴、坐标轴标题和刻度线标签。

绘图区被图表区所包围。二维图表的图表区包含坐标轴、图表标题、坐标轴标题和图例。三维图表的图表区包含图表标题和图例。有关设置图表区格式的详细信息，请参阅 **[ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/obj)** 对象。

可以使用 **[PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/PlotArea)** 属性返回 **PlotArea** 对象。


## 示例


```JavaScript
/*本示例为活动文档中第一个图表的图表区设置虚线边框，然后为绘图区设置点线边框。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart == msoTrue) {
        inlineShape.Chart.ChartArea.Border.LineStyle = xlDash
        inlineShape.Chart.PlotArea.Border.LineStyle = xlDot
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的绘图区的内部宽度和前景填充色。*/
function test() {
    let plotArea = Documents.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.InsideWidth /= 2
    plotArea.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/ClearFormats) | 清除对象的格式设置。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/Height) | 以磅为单位返回或设置对象的高度。可读/写 **Double** 类型。 |
| [InsideHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/InsideHeight) | 以磅为单位返回或设置绘图区的内部高度。可读/写 **Double** 类型。 |
| [InsideLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/InsideLeft) | 以磅为单位返回或设置从图表边缘到绘图区内部左边缘的距离。可读/写 **Double** 类型。 |
| [InsideTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/InsideTop) | 以磅为单位返回或设置从图表边缘到绘图区内部上边缘的距离。可读/写 **Double** 类型。 |
| [InsideWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/InsideWidth) | 以磅为单位返回或设置绘图区的内部宽度。可读/写 **Double** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/Left) | 以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/Name) | 返回对象的名称。只读 **String** 类型。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/Position) | 返回或设置图表上绘制区域的位置。可读/写 **[XlChartElementPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartElementPosition)** 。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/Top) | 以磅为单位返回或设置从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/member/Width) | 以磅为单位返回或设置对象的宽度。可读/写 **Double** 类型。 |