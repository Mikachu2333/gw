# LineFormat 对象

代表线条和箭头的格式设置。对于线条， **LineFormat** 对象包含该线条自身的格式信息；对于具有边框的形状，该对象包含形状的边框的格式信息。

## 说明


可以使用 **Line** 属性返回一个 **LineFormat** 对象。


## 示例


```JavaScript
/*此示例向活动文档添加一条蓝色虚线。在该线条的起点有一个短而窄的椭圆，在该线条的终点有一个长而宽的三角形。*/
function test() {
    let lineFormat = ActiveDocument.Shapes.AddLine(100, 100, 200, 300).Line
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
/*本示例将活动文档上第一个形状的边框线条设置为 4 磅粗的点点划线。*/
function test() {
    let lineFormat = ActiveDocument.Shapes.Item(1).Line
    lineFormat.DashStyle = msoLineDashDotDot
    lineFormat.Weight = 4
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/Application) | 返回一个代表 WPS 应用程序的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象。 |
| [BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/BackColor) | 返回或设置一个 **ColorFormat** 对象，该对象代表图案线条的背景色。可读写。 |
| [BeginArrowheadLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/BeginArrowheadLength) | 返回或设置指定线条始端的箭头长度。 **MsoArrowheadLength** 类型，可读写。 |
| [BeginArrowheadStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/BeginArrowheadStyle) | 返回或设置指定线条起点的箭头样式。 **MsoArrowheadStyle** 类型，可读写。 |
| [BeginArrowheadWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/BeginArrowheadWidth) | 返回或设置指定线条起点的箭头宽度。 **MsoArrowheadWidth** 类型，可读写。 |
| [DashStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/DashStyle) | 返回或设置指定线条的虚线样式。 **MsoLineDashStyle** 类型，可读写。 |
| [EndArrowheadLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/EndArrowheadLength) | 返回或设置指定线条末尾箭头的长度。 **MsoArrowheadLength** 类型，可读写。 |
| [EndArrowheadStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/EndArrowheadStyle) | 返回或设置指定线条末尾箭头的样式。 **MsoArrowheadStyle** 类型，可读写。 |
| [EndArrowheadWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/EndArrowheadWidth) | 返回或设置指定线条末尾箭头的宽度。 **MsoArrowheadWidth** 类型，可读写。 |
| [ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/ForeColor) | 返回或设置一个 **ColorFormat** 对象，该对象代表线条的前景色。可读写。 |
| [Pattern](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/Pattern) | 设置或返回代表应用于指定线条的图案的值。可读写 **MsoPatternType** 类型。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/Style) | 返回或设置线条格式样式。可读写 **MsoLineStyle** 类型。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/Transparency) | 返回或设置线条的透明度。可读写 **Single** 类型。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/Visible) | 如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。 |
| [Weight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/Weight) | 返回或设置指定线条的粗细（以磅为单位）。 **Single** 类型，可读写。 |