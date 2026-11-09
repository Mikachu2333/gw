# SeriesLines 对象

代表图表组中的系列线。

## 说明


系列线连接每个系列中的数据。只有二维堆积条形图、二堆, 2-D 堆只柱形图、复合饼图或复合条饼图等图表可以有系列线。此对象不是集合。没有代表单个系列线的对象；您或者打开图表组中所有数据点的系列线，或者将其全部关闭。

如果 **HasSeriesLines** 属性是 **False** ， **SeriesLines** 对象的绝大部分属性都会被禁用。


## 示例


```JavaScript
/*本示例将系列线添加到第一张工作表第一个嵌入图表中的第一个图表组中，并将颜色设置为蓝色，该图表必须是二维堆积条形图或柱形图。*/
function test() {
    let chartgroup = Worksheets(1).ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasSeriesLines = true
    chartgroup.SeriesLines.Border.Color = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例将图表工作表 Chart1 上第一个图表组的系列线边框的粗细设置为粗。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.SeriesLines.Border.Weight = xlThick
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesLines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesLines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesLines/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesLines/member/Border) | 返回一个 **Border** 对象，它代表对象的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesLines/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesLines/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesLines/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesLines/member/Parent) | 返回指定对象的父对象。只读。 |