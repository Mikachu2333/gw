# LegendEntry 对象

代表图表图例中的图例项。

## 说明


 **LegendEntry** 对象是 **LegendEntries** 集合的成员。 **LegendEntries** 集合包含图例中所有的 **LegendEntry** 对象。

每个图例项都有两部分：一部分是该项的文本，它是与该图例项相关联的数据系列或趋势线的名称；另一部分是项标志，它在图表中以直观的方式将图例项以及与之相关联的数据系列或趋势线链接起来。项标志及其相关数据系列或趋势线的格式设置属性包含在 **LegendKey** 对象中。

不能修改图例项的文字。 **LegendEntry** 对象支持字体格式，且可被删除。图例项不支持图案格式。图例项的位置和尺寸是固定的。

没有返回相应于某图例项的数据系列或趋势线的直接方法。

在删除了图例项之后，唯一的恢复方法是：通过将图表的 **HasLegend** 属性设置为 **False** ，然后再设回 **True** ，从而删除并重新创建包含这些图例项的图例。

使用 **LegendEntries** ( *index*)（其中 *index*是图例项索引号）可返回一个 **LegendEntry** 对象。不能按名称返回图例项。

图例项的编号代表图例项在图例中的位置。`LegendEntries(1)` 位于图例的顶部； `LegendEntries(LegendEntries.Count)` 位于图例的底部。


## 示例


```JavaScript
/*下例更改工作表“Sheet1”上嵌入的第一个图表中图例顶部的图例项（这通常是第一个数据系列的图例）的文字字体。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend.LegendEntries(1).Font.Italic = true
}
```


```JavaScript
/*下例显示 Chart1 上第二个图例项的高度。*/
function test() {
    let legend = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend
    alert(legend.LegendEntries(2).Height)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Font) | 返回一个 **Font** 对象，它代表指定对象的字体。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Height) | 返回一个 **Double** 值，它代表对象的高度（以磅为单位）。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Left) | 返回一个 **Double** 值，它代表从对象左边缘到图表区左边缘的距离（以磅为单位）。 |
| [LegendKey](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/LegendKey) | 返回一个 **LegendKey** 对象，该对象表示与图例项相关的图例标示。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Parent) | 返回指定对象的父对象。只读。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Top) | 返回一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LegendEntry/member/Width) | 返回一个 **Double** 值，它代表对象的宽度（以磅为单位）。 |