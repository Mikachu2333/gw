# AxisTitle 对象

代表图表坐标轴标题。

## 说明


使用 **AxisTitle** 属性可返回 **AxisTitle** 对象。
  
只有当坐标轴的 **HasTitle** 属性为 **True** 时， **AxisTitle** 对象才存在，从而才能使用该对象。


## 示例


```JavaScript
/*下例激活第一个嵌入式图表，设置其数值轴标题文本，将其字体设为 10 磅的“Bookman”，并将单词“millions”设为倾斜。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Activate()
    let axes = Application.ActiveChart.Axes(xlValue)
    axes.HasTitle = true
    let axistitle = axes.AxisTitle
    axistitle.Caption = "Revenue (millions)"
    axistitle.Font.Name = "bookman"
    axistitle.Font.Size = 10
    axistitle.Characters(10, 8).Font.Italic = true
}
```


```JavaScript
/*本示例将图表工作表 Chart1 中图表的分类轴标题设置为“考核分类”，并将该标题设置为加粗。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.Caption = "考核分类"
    axistitle.Characters().Font.Bold = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Characters) | 返回 **Characters** 对象，它代表对象文本内某个区域的字符。使用 **Characters** 对象可为文本字符串内的字符设置格式。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Caption) | 返回或设置一个 **String** 值，它代表坐标轴标题文本。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Formula) | 获取或设置一个 **String** 值，该值以英语使用 A1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/FormulaLocal) | 获取或设置一个 **String** 值，该值以用户的语言使用 A1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/FormulaR1C1) | 获取或设置一个 **String** 值，该值以英语使用 R1C1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/FormulaR1C1Local) | 获取或设置一个 **String** 值，该值以用户的语言使用 R1C1 样式表示法来表示对象的公式。可读/写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [HorizontalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/HorizontalAlignment) | 返回或设置一个 **Variant** 值，它代表指定对象的水平对齐方式。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Orientation) | 返回或设置一个 **Variant** 值，它代表文本方向。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Parent) | 返回指定对象的父对象。只读。 |
| [ReadingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/ReadingOrder) | 返回或设置指定对象的阅读次序。可为以下常量之一： **xlRTL** （从右到左）、 **xlLTR** （从左到右）或 **xlContext** 。 **Long** 类型，可读写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Text) | 返回或设置指定对象中的文本。 **String** 型，可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [VerticalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/VerticalAlignment) | 返回或设置一个 **Variant** 值，它代表指定对象的垂直对齐方式。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AxisTitle/member/Width) | 返回对象的宽度（以磅为单位）。只读。 |