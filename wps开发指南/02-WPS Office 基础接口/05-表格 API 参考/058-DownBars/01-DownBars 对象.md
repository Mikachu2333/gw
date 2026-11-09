# DownBars 对象

代表图表组中的跌柱线。

## 说明


跌柱线将图表组中第一个系列的数据点与最后一个系列中相应的有较小值的数据点连接起来（从第一个系列向下生长）。只有至少包含两个系列的二维折线图才能有跌柱线。此对象不是集合。没有代表单个跌柱线的对象；或者打开图表组中所有数据点的涨跌柱线，或者将其全部关闭。

如果 **HasUpDownBars** 属性为 **False** ， **DownBars** 对象的绝大部分属性将被禁用。

使用 **DownBars** 属性可返回 **DownBars** 对象。


## 示例


```JavaScript
/*本示例打开工作表“Sheet5”上嵌入的第一个图表中第一个图表组的涨跌柱线，然后将涨柱线的颜色设置为蓝色，而将跌柱线设置为红色。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet5").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasUpDownBars = true
    chartgroup.UpBars.Interior.Color = RGB(0, 0, 255)
    chartgroup.DownBars.Interior.Color = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例将图表工作表 Chart1 中图表的第一个图表组的跌柱线的线条颜色和前景色设置为红色。*/
function test() {
    let downbars = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1).DownBars
    downbars.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    downbars.Format.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DownBars/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DownBars/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DownBars/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DownBars/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DownBars/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DownBars/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DownBars/member/Parent) | 返回指定对象的父对象。只读。 |