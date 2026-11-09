# ChartFont 对象

包含图表对象的字体属性（字体名称、字号、颜色等等）。

## 说明


如果希望不要对 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/AxisTitle/obj)** 、 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartTitle/obj)** 、 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataLabel/obj)** 或 **[DisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DisplayUnitLabel/obj)** 对象中的所有文本设置相同的格式，请使用该对象的 **Characters** 属性首先以 **[ChartCharacters](#TODO)** 对象的形式返回文本子集。然后使用 **ChartCharacters** 对象的 **[Font](#TODO)** 属性返回可用于根据需要设置文本子集格式的 **ChartFont** 对象。

可以使用 **Font** 属性返回 **ChartFont** 对象。


## 示例


```JavaScript
/*本示例将活动文档中第一个图表的分类轴标题格式设置为粗体。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    chart.Axes(xlCategory).AxisTitle.Font.Bold = true
}
```


```JavaScript
/*本示例判断活动文档上第一个形状中图表的第二个图例项文字中间是否有一条水平删除线，并通知用户。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1)
    if (shape.Chart.Legend.LegendEntries(2).Font.StrikeThrough) {
        alert("文字中间有一条水平删除线")
    } else {
        alert("文字中间没有一条水平删除线")
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Bold](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/member/Bold) | 如果字体格式为加粗，则该属性值为 **True** 。可读/写 **Variant** 类型。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/member/Color) | 返回或设置对象的主要颜色。可读/写 **Variant** 类型。 |
| [Italic](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/member/Italic) | 如果字体样式为倾斜，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/member/Name) | 返回或设置对象的名称。可读/写 **String** 类型。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/member/Size) | 返回或设置字号。可读/写 **Variant** 类型。 |
| [StrikeThrough](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFont/member/StrikeThrough) | 如果文字中间有一条水平删除线，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |