# DisplayUnitLabel 对象

代表指定图表中坐标轴上的单位标志。

## 说明


在绘制大数据的图表时使用单位标志会很有用，例如：上百万或几十亿的大数据。在刻度线上使用单位标志而不直接使用大数据可以使图表更易读、易理解。

使用 **[DisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Axis/member/DisplayUnitLabel)** 属性可返回 **DisplayUnitLabel** 对象。


## 示例


```JavaScript
/*以下示例将 Chart1 上数值轴上的显示标签标题设置为“Millions”，然后关闭自动字体缩放。*/
function test() {
    let Axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    Axis.DisplayUnit = xlMillions
    Axis.HasDisplayUnitLabel = true
    let displayUnitLabel = Axis.DisplayUnitLabel
    displayUnitLabel.Caption = "Millions"
    displayUnitLabel.AutoScaleFont = false
}
```


```JavaScript
/*下例删除 Sheet1 上的第一个图表数值轴上的单位标签。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Delete()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Characters) | 返回 **[Characters](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Characters/obj)** 对象，它代表对象文本内某个区域的字符。使用 **Characters** 对象可为文本字符串内的字符设置格式。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Caption) | 返回或设置一个 **String** 值，它代表显示单位标志文本。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Format) | 返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/obj)** 对象。只读。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Formula) | 获取或设置一个 **String** 值，该值以英语使用 A1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/FormulaLocal) | 获取或设置一个 **String** 值，该值以用户的语言使用 A1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/FormulaR1C1) | 获取或设置一个 **String** 值，该值以英语使用 R1C1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/FormulaR1C1Local) | 获取或设置一个 **String** 值，该值以用户的语言使用 R1C1 样式表示法来表示对象的公式。可读/写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Left) | 返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Orientation) | 返回或设置一个 **Variant** 值，它代表文本方向。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Position) | 返回或设置图表上单位标签的位置。可读/写 **[XlChartElementPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartElementPosition)** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Text) | 返回或设置指定对象中的文本。 **String** 型，可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Top) | 返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DisplayUnitLabel/member/Width) | 返回对象的宽度（以磅为单位）。只读。 |