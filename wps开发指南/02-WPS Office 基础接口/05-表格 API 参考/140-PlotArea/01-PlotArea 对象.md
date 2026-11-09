# PlotArea 对象

代表图表的绘图区。

## 说明


该区域为绘制图表数据的区域。二维图表中的绘图区包含数据标志、网格线、数据标签、趋势线和可选的置于图表区内的图表项。三维图表的绘图区中除包含上述各项外，还在图表中包含背景墙、基底、坐标轴、坐标轴标题和刻度线标签。绘图区被图表区所包围。二维图表的图表区包含坐标轴、图表标题、坐标轴标题和图例。三维图表的图表区包含图表标题和图例。有关设置图表区格式的详细信息，请参阅 ChartArea 对象。


## 示例


```JavaScript
/*本示例将 Chart1 中的绘图区前景色设为蓝色。*/
function test() {
    let plotArea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PlotArea
    plotArea.Format.Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*下例将 Sheet1 上的第一个图表绘图区内部宽度设置为400磅。*/
function test() {
    let plotArea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.PlotArea
    plotArea.InsideWidth = 400
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/ClearFormats) | 清除对象的格式设置。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Application) | 如果不使用对象识别符，则该属性返回一个 Application 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Height) | 返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [InsideHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/InsideHeight) | 以磅为单位返回绘图区内部高度。可读写 **Double** 类型。 |
| [InsideLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/InsideLeft) | 以磅为单位返回从图表边界到绘图区内部左边界的距离。可读写 **Double** 类型。 |
| [InsideTop](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/InsideTop) | 以磅为单位返回从图表边界到绘图区内部上边界的距离。可读写 **Double** 类型。 |
| [InsideWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/InsideWidth) | 以磅为单位返回绘图区内部宽度。可读写 **Double** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Parent) | 返回指定对象的父对象。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Position) | 返回或设置图表上绘制区域的位置。可读/写 **XlChartElementPosition** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/member/Width) | 返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |