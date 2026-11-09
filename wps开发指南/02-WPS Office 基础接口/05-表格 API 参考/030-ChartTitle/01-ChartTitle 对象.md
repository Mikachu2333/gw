# ChartTitle 对象

代表图表标题。

## 说明


使用 **ChartTitle** 属性可返回 **ChartTitle** 对象。

只有图表的 **HasTitle** 属性为 **True** 时， **ChartTitle** 对象才存在，从而才能使用该对象。


## 示例


```JavaScript
/*此示例为工作表 Sheet1 上第一个图表添加标题。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "February Sales"
}
```


```JavaScript
/*本示例将图表工作表 Chart1 的图表标题的字号设置为 20 磅。*/
function test() {
    let charttitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartTitle
    charttitle.Font.Size = 20
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Characters) | 返回 **Characters** 对象，它代表对象文本内某个区域的字符。使用 **Characters** 对象可为文本字符串内的字符设置格式。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Caption) | 返回或设置表示图表标题文本的 **String** 值。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Formula) | 获取或设置一个 **String** 值，该值以英语使用 A1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/FormulaLocal) | 获取或设置一个 **String** 值，该值以用户的语言使用 A1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/FormulaR1C1) | 获取或设置一个 **String** 值，该值以英语使用 R1C1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/FormulaR1C1Local) | 获取或设置一个 **String** 值，该值以用户的语言使用 R1C1 样式表示法来表示对象的公式。可读/写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [IncludeInLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/IncludeInLayout) | 如果在确定图表布局时图表标题将占用图表布局空间，则为 **True** 。默认值是 **True** 。 **Boolean** 类型，可读写。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Orientation) | 返回或设置一个 **Variant** 值，它代表文本方向。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Parent) | 返回指定对象的父对象。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Position) | 返回或设置图表上图表标题的位置。可读/写 **XlChartElementPosition** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Text) | 返回或设置指定对象中的文本。 **String** 型，可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到图表上的图表区顶部的距离（以磅为单位）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/member/Width) | 返回对象的宽度（以磅为单位）。只读。 |