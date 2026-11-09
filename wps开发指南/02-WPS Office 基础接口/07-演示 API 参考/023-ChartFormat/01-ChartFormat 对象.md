# ChartFormat 对象

提供对图表元素的艺术字格式的访问。

## 说明


如果使用的属性或方法不适用于 **ChartFormat** 对象所附加到的对象的类型，则会产生运行时错误。


## 示例


```JavaScript
/*此示例设置第一个演示文稿的第一张幻灯片中第一张图表的图表区文本框中字体的字号和加粗格式。*/
function test() {
    let chartFormat = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    let font2 = chartFormat.TextFrame2.TextRange.Font
    font2.Size = 15
    font2.Bold = msoTrue
}
```


```JavaScript
/*此示例设置活动演示文稿的第一张幻灯片中第一张图表的标题的前景填充色和边框线条粗细。*/
function test() {
    let chartFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartTitle.Format
    chartFormat.Fill.ForeColor.RGB = RGB(0, 255, 0)
    chartFormat.Line.Weight = 2
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/member/AutoShapeType) | 返回或设置指定对象的自动形状类型。可读/写 **[MsoAutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoAutoShapeType)** 类型。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/member/Fill) | 返回一个包含图表元素填充格式属性的父图表元素的 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/obj)** 对象。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/member/Glow) | 返回图表元素的发光格式属性。只读 **[GlowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GlowFormat/obj)** 对象。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/member/Line) | 返回指定图表元素的线条格式属性。只读 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/obj)** 对象。 |
| [PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/member/PictureFormat) | 返回包含图片的指定图表的 **[PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PictureFormat/obj)** 对象。只读。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/member/Shadow) | 返回图表元素的阴影格式属性。只读 **[ShadowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/obj)** 对象。 |
| [SoftEdge](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/member/SoftEdge) | 返回形状的柔化边缘格式。只读 **[SoftEdgeFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/SoftEdgeFormat/obj)** 对象。 |
| [TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/member/TextFrame2) | 返回指定图表元素的文本格式。只读 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextFrame2/obj)** 对象。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/member/ThreeD) | 返回指定图表的三维效果格式属性。只读 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/obj)** 对象。 |