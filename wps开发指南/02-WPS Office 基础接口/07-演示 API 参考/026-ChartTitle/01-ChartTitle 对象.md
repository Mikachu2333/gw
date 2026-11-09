# ChartTitle 对象

代表图表标题。

## 说明


使用 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartTitle)** 属性可返回 **ChartTitle** 对象。

除非图表的 **[HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/HasTitle)** 属性为 **True** ，否则 **ChartTitle** 将不存在，因此无法使用。


## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的图表标题的文本。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "February Sales"
}
```


```JavaScript
/*本示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的标题文本为“test”，则设置该标题的线条的虚线样式和粗细。*/
function test() {
    let chartTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartTitle
    if (chartTitle.Caption == "test") {
        chartTitle.Format.Line.DashStyle = msoLineDashDotDot
        chartTitle.Format.Line.Weight = 2
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Caption) | 返回或设置图表标题文本。可读/写 **String** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Formula) | 使用 A1 样式表示法返回或设置对象的公式。可读写。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/FormulaLocal) | 以用户语言使用 A1 样式引用返回或设置对象的公式。可读写。 **String** 。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/FormulaR1C1) | 以宏语言使用 R1C1 样式表示法返回或设置对象的公式。可读写。 **String** 。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/FormulaR1C1Local) | 以用户语言使用 R1C1 样式表示法返回或设置对象的公式。可读/写。 **String** 。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Height) | 返回或设置一个 **Double** 值，该值代表对象的高度（以磅为单位）。只读。 |
| [IncludeInLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/IncludeInLayout) | 如果在确定图表布局时图表标题将占用图表布局空间，则为 **True** 。默认值为 **True** 。可读/写 **Boolean** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Left) | 以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Name) | 返回对象的名称。只读 **String** 类型。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Orientation) | 返回或设置文本方向。可读/写 **Long** 类型。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Position) | 返回或设置图表标题在图表上的位置。可读/写 **[XlChartElementPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartElementPosition)** 。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Shadow) | 返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Text) | 返回或设置指定对象中的文本。可读/写 **String** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Top) | 返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/member/Width) | 返回或设置一个 **Double** 值，该值代表对象的宽度（以磅为单位）。只读。 |