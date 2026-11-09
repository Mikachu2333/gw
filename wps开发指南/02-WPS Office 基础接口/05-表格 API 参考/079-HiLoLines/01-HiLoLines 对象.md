# HiLoLines 对象

代表图表组中的高低点连线。

## 说明


高低点连线连接图表组内每一分类中的最高数据点和最底数据点。只有二维折线图组可以有高低点连线。此对象不是集合。没有代表单个高低点连线的对象；或者打开图表组中所有数据点的高低点连线，或者将其全部关闭。

如果 **HasHiLoLines** 属性是 **False** ， **HiLoLines** 对象的大多数属性都会被禁用。

使用 **HiLoLines** 属性可返回 **HiLoLines** 对象。


## 示例


```JavaScript
/*下例使用 HasHiLowLines 属性将 HiLowLines 添加到工作表一上的嵌入图表一（该图表必须是折线图），并将高低点连线设置为蓝色。*/
function test() {
    Application.Worksheets.Item(1).ChartObjects(1).Activate()
    ActiveChart.ChartGroups(1).HasHiLoLines = true
    ActiveChart.ChartGroups(1).HiLoLines.Border.Color = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 中第一个图表组的高低点连线的透明度。*/
function test() {
    let chartGroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    let chartFormat = chartGroup.HiLoLines.Format
    alert(chartFormat.Line.Transparency)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/member/Border) | 返回一个 **Border** 对象，它代表对象的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/member/Parent) | 返回指定对象的父对象。只读。 |