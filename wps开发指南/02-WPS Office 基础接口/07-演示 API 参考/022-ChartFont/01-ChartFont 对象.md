# ChartFont 对象

包含图表对象的字体属性（字体名称、字号、颜色等等）。

## 说明


如果不希望以同一方式设置 **[AxisTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/AxisTitle/obj)** 、 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/obj)** 、 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/obj)** 或 **[DisplayUnitLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DisplayUnitLabel/obj)** 对象中所有文本的格式，请使用该对象的 **Characters** 属性先将部分文本作为 **[ChartCharacters](#TODO)** 对象返回。然后，使用 **ChartCharacters** 对象的 **[Font](#TODO)** 属性返回一个 **ChartFont** 对象，可在需要时使用它来设置部分文本的格式。


## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的分类轴标题格式设置为粗体。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.Axes(xlCategory).AxisTitle.Font.Bold = true
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一张图表的数值轴标题的颜色设置为绿色。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlValue).AxisTitle.Font.Color = RGB(0, 255, 0)
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Bold](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFont/member/Bold) | 如果字体格式为加粗，则该属性值为 **True** 。可读/写 **Variant** 类型。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFont/member/Color) | 返回或设置对象的主要颜色。可读/写 **Variant** 类型。 |
| [Italic](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFont/member/Italic) | 如果字体样式为倾斜，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFont/member/Name) | 返回或设置对象的名称。可读/写 **String** 类型。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFont/member/Size) | 返回或设置字号。可读/写 **Variant** 类型。 |