# Gridlines 对象

代表图表坐标轴的主要和次要网格线。

## 说明


网格线延伸图表坐标轴上的刻度线，以便更容易地分辨与数据标志相关联的数值。此对象不是集合。同时也没有代表单个网格线的对象；要么打开坐标轴上所有的网格线，要么将其全部关闭。

使用 **MajorGridlines** 属性可返回 **GridLines** 对象，该对象代表坐标轴的主要网格线。使用 **MinorGridlines** 属性可返回 **GridLines** 对象，该对象代表次要网格线。可以同时返回主要网格线和次要网格线。


## 示例


```JavaScript
/*下例打开图表工作表 Chart1 上分类轴的主要网格线，并将网格线设置为蓝色虚线。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.HasMajorGridlines = true
    axis.MajorGridlines.Border.Color = RGB(0, 0, 255)
    axis.MajorGridlines.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一个图表数值轴的主要网格线名称赋值给B6单元格。*/
function test() {
    let axis = Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    Range("B6").Value2 = axis.MajorGridlines.Name
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Gridlines/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Gridlines/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Gridlines/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Gridlines/member/Border) | 返回一个 **Border** 对象，它代表对象的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Gridlines/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Gridlines/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Gridlines/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Gridlines/member/Parent) | 返回指定对象的父对象。只读。 |