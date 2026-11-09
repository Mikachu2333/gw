# DisplayUnitLabel 对象

代表指定图表中坐标轴上的单位标签。

## 说明


在绘制大数据（例如，上百万或几十亿的大数据）的图表时使用单位标签会很有用。在刻度线上使用单位标签而不直接使用大数据可以使图表更容易阅读。

使用 **[DisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/DisplayUnitLabel)** 属性返回 **DisplayUnitLabel** 对象。


## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的数值轴的显示标签标题设置为“Millions”，然后禁用自动字体缩放功能。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let axis = shape.Chart.Axes(xlValue)
        axis.DisplayUnit = xlMillions
        axis.HasDisplayUnitLabel = true
        let displayUnitLabel = axis.DisplayUnitLabel
        displayUnitLabel.Caption = "Millions"
        displayUnitLabel.AutoScaleFont = false
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的数值轴的单位标签的高度。*/
function test() {
    let displayUnitLabel = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Height + " 磅")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Caption) | 返回或设置坐标轴的显示单位标签文本。可读/写 **String** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Formula) | 使用 A1 样式表示法返回或设置对象的公式。可读写。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/FormulaLocal) | 以用户语言使用 A1 样式引用返回或设置对象的公式。可读写。 **String** 。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/FormulaR1C1) | 以宏语言使用 R1C1 样式表示法返回或设置对象的公式。可读写。 **String** 。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/FormulaR1C1Local) | 以用户语言使用 R1C1 样式表示法返回或设置对象的公式。可读/写。 **String** 。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Left) | 以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Name) | 返回对象的名称。只读 **String** 类型。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Orientation) | 返回或设置文本方向。可读/写 **Long** 类型。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Position) | 返回或设置单位标签在图表坐标轴上的位置。可读/写 **[XlChartElementPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartElementPosition)** 。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Shadow) | 返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Text) | 返回或设置指定对象中的文本。可读/写 **String** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Top) | 返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/member/Width) | 返回对象的宽度（以磅为单位）。只读。 |