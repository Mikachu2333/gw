# ChartArea 对象

代表图表的图表区。

## 说明


图表区包含绘图区在内的一切内容。但是，绘图区具有它自己的填充方式，因此填充绘图区并不会填充图表区。

有关设置绘图区格式的信息，请参阅 **[PlotArea 对象](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/obj)** 。

使用 **ChartArea** 属性可返回 **ChartArea** 对象。


## 示例


```JavaScript
/*本示例关闭 Sheet1 工作表上第一个嵌入图表的图表区边框。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    chartarea.Format.Line.Visible = false
}
```


```JavaScript
/*本示例将工作表 Chart1 图表区的内部颜色设置为蓝色。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    chartarea.Format.Fill.ForeColor.RGB = rgbBlue
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Clear) | 清除整个对象。 |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/ClearFormats) | 清除对象的格式设置。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Copy) | 将对象复制到剪贴板。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Format) | 返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/obj)** 对象。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Height) | 返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Name) | 返回一个 **String** 值，它代表对象的名称。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Parent) | 返回指定对象的父对象。只读。 |
| [RoundedCorners](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/RoundedCorners) | 如果图表的图表区域使用圆角，则为 **True** 。可读写 **Boolean** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Top) | 返回一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/member/Width) | 返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |