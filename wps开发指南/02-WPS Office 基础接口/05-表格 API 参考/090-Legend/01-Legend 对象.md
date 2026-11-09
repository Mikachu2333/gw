# Legend 对象

代表图标中的图例。每个图表只能有一个图例。

## 说明


 **Legend** 对象包含一个或多个 **LegendEntry** 对象；每个 **LegendEntry** 对象都包含一个 **LegendKey** 对象。

除非 **HasLegend** 属性是 **True** ，否则无法看到图表的图例。如果该属性为 **False** ， **Legend** 对象的属性和方法将会失败。


## 示例


```JavaScript
/*下例将第一张工作表上嵌入图表一的图例字形设置为加粗。*/
function test() {
    Application.Worksheets.Item(1).ChartObjects(1).Chart.Legend.Font.Bold = true
}
```


```JavaScript
/*此示例删除图表工作表 Chart1 上的第一个图表中的图例。*/
function test() {
    Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend.Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Clear) | 清除整个对象。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Delete) | 删除对象。 |
| [LegendEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/LegendEntries) | 返回表示图例中的单个图例项（ **LegendEntry** 对象）或图例项集合（ **LegendEntries** 对象）的对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Height) | 返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [IncludeInLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/IncludeInLayout) | 如果在确定图表布局时图例将占用图表布局空间，则为 **True** 。默认值是 **True** 。 **Boolean** 类型，可读写。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Parent) | 返回指定对象的父对象。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Position) | 返回或设置一个 **XlLegendPosition** 值，它代表图表上图例的位置。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/member/Width) | 返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |