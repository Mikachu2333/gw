# ErrorBars 对象

代表图表数据系列上的误差线。

## 说明


误差线表明图表数据的不确定程度。只有二维图表上的面积、条形、柱形、折线和散点图组中的数据系列可以有误差线。只有散点图组中的数据系列可以有 x 误差线和 y 误差线。此对象不是集合。没有代表单个误差线的对象；或者打开系列中所有数据点的 x 误差线或 y 误差线，或者将其全部关闭。

 **ErrorBar** 方法更改误差线的格式和类型。

使用 **ErrorBars** 属性可返回 **ErrorBars** 对象。


## 示例


```JavaScript
/*本示例打开工作表 Sheet1 嵌入的第一个图表的第一个数据系列的误差线，并设置误差线的尾部样式。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Activate()
    ActiveChart.SeriesCollection(1).HasErrorBars = true
    ActiveChart.SeriesCollection(1).ErrorBars.EndStyle = xlNoCap
}
```


```JavaScript
/*此示例将图表工作表 Chart1 中图表的第二个系列的误差线设置为黄色虚线。*/
function test() {
    let errorbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2).ErrorBars
    errorbars.Border.ColorIndex = 6
    errorbars.Border.LineStyle = xlDash
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/ClearFormats) | 清除对象的格式设置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/Border) | 返回一个 **Border** 对象，它代表对象的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [EndStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/EndStyle) | 返回或设置误差线的尾端样式。可为以下 **XlEndStyleCap** 常量之一： **xlCap** 或 **xlNoCap** 。 **Long** 类型，可读写。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ErrorBars/member/Parent) | 返回指定对象的父对象。只读。 |