# AxisTitle 对象

代表图表坐标轴标题。

## 说明


可以使用 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/AxisTitle)** 属性返回 **AxisTitle** 对象。

除非坐标轴的 **[HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Axis/member/HasTitle)** 属性为 **True** ，否则 **AxisTitle** 对象将不存在，因此无法使用。


## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的数值轴标题文本，将其字体设为 10 磅的“Bookman”，并将文本设为倾斜。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlValue).HasTitle = true
        let axisTitle = inlineShape.Chart.Axes(xlValue).AxisTitle
        axisTitle.Caption = "Revenue(millions)"
        axisTitle.Font.Name = "bookman"
        axisTitle.Font.Size = 10
        axisTitle.Font.Italic = true
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的数值轴标题的前景色。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    axisTitle.Format.Fill.ForeColor.RGB = RGB(0, 255, 255)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Delete) | 删除对象。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Caption) | 返回或设置一个 **String** 值，它代表坐标轴标题文本。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Format) | 返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 对象，该对象代表线条、填充和效果格式。只读。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Formula) | 获取或设置一个 **String** 值，该值以英语使用 A1 样式表示法来表示对象的公式。可读/写。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/FormulaLocal) | 返回或设置对象的公式，使用用户语言中的 A1 样式引用。可读/写 **String** 类型。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/FormulaR1C1) | 返回或设置对象的公式，使用宏语言中的 R1C1 样式表示法。可读/写 **String** 类型。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/FormulaR1C1Local) | 返回或设置对象的公式，使用用户语言中的 R1C1 样式表示法。可读/写 **String** 类型。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Left) | 以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Orientation) | 返回或设置文本方向。可读/写 **Long** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Shadow) | 返回或设置一个确定对象是否有阴影的值。 **Boolean** 类型，可读/写。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Text) | 返回或设置指定对象中的文本。 **String** 类型，可读/写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Top) | 返回或设置一个以磅为单位的距离，它代表从对象的上边缘到第一行顶部（在工作表上）或图表区顶部（在图表上）的距离。可读/写 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/member/Width) | 返回对象的宽度（以磅为单位）。只读。 |