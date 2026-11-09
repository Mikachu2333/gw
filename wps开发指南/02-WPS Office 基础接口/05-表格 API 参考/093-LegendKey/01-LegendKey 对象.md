# LegendKey 对象

代表图表图例中的图例标示。

## 说明


每个图例项标示都是一个图形，它将图例项标示以及与之相关联的图表中的系列或趋势线链接起来。图例项标示链接到与之相关联的系列或趋势线的方式为：更改一个的格式会同时更改另一个的格式。

使用 **LegendKey** 属性可返回 **LegendKey** 对象。比如更改图例顶部的图例项标示的标志背景色，这样会同时更改与该图例项相关的系列中每一个数据点的格式。相关的系列必须支持数据标志。


## 示例


```JavaScript
/*下例显示 Sheet1 中的第一个图表的第二个图例项的图例标示左边缘到图表区左边缘的距离。*/
function test() {
    let legend = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    alert(legend.LegendEntries(2).LegendKey.Left)
}
```


```JavaScript
/*本示例将 Chart1 上第一个图例项的图例标示设置成有阴影。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.LegendEntries(1).LegendKey.Shadow = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/ClearFormats) | 清除对象的格式设置。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/Height) | 返回一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/Left) | 返回一个 **Double** 值，它代表从对象左边缘到图表区左边缘的距离（以磅为单位）。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/Parent) | 返回指定对象的父对象。只读。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/Top) | 返回一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendKey/member/Width) | 返回一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |