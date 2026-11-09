# AxisTitle 对象

代表图表坐标轴标题。

## 说明


可以使用 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/AxisTitle)** 属性返回 **AxisTitle** 对象。

除非坐标轴的 **[HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Axis/member/HasTitle)** 属性为 **True** ，否则 **AxisTitle** 对象将不存在，因此无法使用。


## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片中第一个图表的数值轴标题文本，将其字体设为 10 磅的“Bookman”，并将文本设为倾斜。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlValue).HasTitle = true
        let axisTitle = shape.Chart.Axes(xlValue).AxisTitle
        axisTitle.Caption = "Revenue(millions)"
        axisTitle.Font.Name = "bookman"
        axisTitle.Font.Size = 10
        axisTitle.Font.Italic = true
    }
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第二个图表的数值轴标题的前景色。*/
function test() {
    let axisTitle = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue).AxisTitle
    axisTitle.Format.Fill.ForeColor.RGB = RGB(0, 255, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Caption) | 返回或设置一个代表坐标轴标题文本的 **String** 值。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Formula) | 使用 A1 样式表示法返回或设置对象的公式。只读。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/FormulaLocal) | 以用户语言使用 A1 样式引用返回或设置对象的公式。可读写。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/FormulaR1C1) | 使用 R1C1 样式表示法返回或设置对象的公式。可读写。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/FormulaR1C1Local) | 以用户语言使用 R1C1 样式表示法返回或设置对象的公式。可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Left) | 以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Orientation) | 返回或设置文本方向。可读/写 **Long** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Shadow) | 返回或设置一个确定对象是否有阴影的值。可读/写 **Boolean** 类型。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Text) | 返回或设置指定对象中的文本。可读/写 **String** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Top) | 以磅为单位返回或设置对象上边缘至图表区上边缘的距离。可读/写 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/member/Width) | 返回一个 **Double** 值，该值代表对象的宽度（以磅为单位）。只读。 |