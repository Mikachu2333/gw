# ChartFormat 对象

提供对图表元素艺术字格式的访问。

## 说明


如果使用的属性或方法不适用于 **ChartFormat** 对象所附加到的对象的类型，则会产生运行时错误。


## 示例


```JavaScript
/*此示例设置图表工作表 Chart1 的图表区文本框中字体的字号和加粗格式。*/
function test() {
    let chartFormat = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea.Format
    let font = chartFormat.TextFrame2.TextRange.Font
    font.Size = 15
    font.Bold = true
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上第一个内嵌图表的标题的前景填充色和边框线条粗细。*/
function test() {
    let chartFormat = Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartTitle.Format
    chartFormat.Fill.ForeColor.RGB = RGB(0, 255, 0)
    chartFormat.Line.Weight = 2
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个代表 ET 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。如果使用对象识别符，则该属性返回一个代表指定对象的创建程序的 **Application** 对象（可对一个 OLE 自动化对象使用该属性来返回该对象的应用程序）。只读。 |
| [AutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/AutoShapeType) | 返回指定形状的类型。只读 **[MsoAutoShapeType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoAutoShapeType)** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Fill](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/Fill) | 返回一个包含图表元素填充格式属性的父图表元素的 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/obj)** 对象。只读。 |
| [Glow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/Glow) | 返回一个包含图表元素发光格式属性的指定图表的 **GlowFormat** 对象。只读。 |
| [Line](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/Line) | 返回一个包含指定图表元素线条格式属性的 **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/obj)** 对象。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/PictureFormat) | 返回包含图片的指定图表的 **[PictureFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PictureFormat/obj)** 对象。只读。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/Shadow) | 返回一个 **[ShadowFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/obj)** 对象，该对象包含图表元素的阴影格式属性。只读。 |
| [SoftEdge](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/SoftEdge) | 返回指定图表的 **SoftEdgeFormat** 对象，该对象包含图表的柔化边缘格式设置属性。只读。 |
| [TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/TextFrame2) | 返回一个包含指定图表元素文本格式的 **[TextFrame2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextFrame2/obj)** 对象。只读。 |
| [ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/member/ThreeD) | 返回一个 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/obj)** 对象，该对象包含指定图表的三维效果格式属性。只读。 |