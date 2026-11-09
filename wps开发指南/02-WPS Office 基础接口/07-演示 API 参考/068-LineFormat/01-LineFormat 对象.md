# LineFormat 对象

该对象代表线条和箭头格式。对于线条， **LineFormat** 对象包含关于线条本身的格式信息；对于带有边框的图形，本对象包含该图形的边框的格式信息。

## 说明


使用 **Line** 属性返回 **LineFormat** 对象。


## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一条蓝色虚线。在该线条的起点处有一个短而窄的椭圆，在线条的终点处有一个长而宽的三角形。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let lineFormat = slide.Shapes.AddLine(100, 100, 200, 300).Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.ForeColor.RGB = RGB(50, 0, 128)
    lineFormat.BeginArrowheadLength = msoArrowheadShort
    lineFormat.BeginArrowheadStyle = msoArrowheadOval
    lineFormat.BeginArrowheadWidth = msoArrowheadNarrow
    lineFormat.EndArrowheadLength = msoArrowheadLong
    lineFormat.EndArrowheadStyle = msoArrowheadTriangle
    lineFormat.EndArrowheadWidth = msoArrowheadWide
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个线条的透明度。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Line.Transparency)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/Application) | 返回表示指定对象的创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象。 |
| [BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/BackColor) | 返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表指定填充对象或图案线条的背景色。可读/写。 |
| [BeginArrowheadLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/BeginArrowheadLength) | 返回或设置指定线条始端的箭头长度。可读/写 **MsoArrowheadLength** 类型。 |
| [BeginArrowheadStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/BeginArrowheadStyle) | 返回或设置指定线条始端的箭头样式。可读/写 **MsoArrowheadStyle** 类型。 |
| [BeginArrowheadWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/BeginArrowheadWidth) | 返回或设置指定线条始端的箭头宽度。可读/写 **MsoArrowheadWidth** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/Creator) | 返回 **Long** 类型值，该值代表创建指定对象的应用程序创建者代码，该代码由四个字符构成。例如，如果对象是在WPP 中创建的，则此属性返回一个十六进制数 50575054。只读。 |
| [DashStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/DashStyle) | 返回或设置指定线条的虚线线型。可读/写 **MsoLineDashStyle** 类型。 |
| [EndArrowheadLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/EndArrowheadLength) | 返回或设置指定线条末端箭头的长度。可读/写 **MsoArrowheadLength** 类型。 |
| [EndArrowheadStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/EndArrowheadStyle) | 返回或设置指定线条末端箭头的样式。可读/写 **MsoArrowheadStyle** 类型。 |
| [EndArrowheadWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/EndArrowheadWidth) | 返回或设置指定线条末端箭头的宽度。可读/写 **MsoArrowheadWidth** 类型。 |
| [ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/ForeColor) | 返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象表示填充、线条或阴影的前景色。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/Parent) | 返回指定对象的父对象。 |
| [Pattern](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/Pattern) | 设置或返回一个值，该值代表应用于指定线条的图案。 **MsoPatternType** 类型，可读写。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/Style) | 返回或设置线条样式。可读/写 **MsoLineStyle** 类型。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/Transparency) | 该属性返回或设置指定填充、阴影或线条的透明度，可取 0.0（不透明）至 1.0（透明）之间的数值。 **Single** 类型，可读/写。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/Visible) | 返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。 |
| [Weight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LineFormat/member/Weight) | 以磅为单位返回或设置指定线条的粗细。可读/写 **Single** 类型。 |