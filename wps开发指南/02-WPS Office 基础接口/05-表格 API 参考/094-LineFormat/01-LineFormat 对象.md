# LineFormat 对象

代表线条和箭头格式。

## 说明


对于线条， **LineFormat** 对象包含该线条自身的格式信息；对于有边界的形状，该对象包含形状的边界的格式信息。

使用 **Line** 属性可返回一个 **LineFormat** 对象。


## 示例


```JavaScript
/*下例给第一张工作表添加一条蓝色虚线。在该线的起点有一个短而窄的椭圆，在该线的终点有一个长而宽的三角形。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    let line = worksheet.Shapes.AddLine(100, 100, 200, 300).Line
    line.DashStyle = msoLineDashDotDot
    line.ForeColor.RGB = RGB(50, 0, 128)
    line.BeginArrowheadLength = msoArrowheadShort
    line.BeginArrowheadStyle = msoArrowheadOval
    line.BeginArrowheadWidth = msoArrowheadNarrow
    line.EndArrowheadLength = msoArrowheadLong
    line.EndArrowheadStyle = msoArrowheadTriangle
    line.EndArrowheadWidth = msoArrowheadWide
}
```


```JavaScript
/*本示例显示活动工作表的第一个形状线条的样式是否为双细线。*/
function test() {
    let line = ActiveSheet.Shapes.Item(1).Line
    alert(line.Style == msoLineThinThin)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/BackColor) | 返回或设置一个 **ColorFormat** 对象，它代表指定的填充背景色。 |
| [BeginArrowheadLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/BeginArrowheadLength) | 返回或设置指定线条起点的箭头的长度。 **MsoArrowheadLength** 类型，可读写。 |
| [BeginArrowheadStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/BeginArrowheadStyle) | 返回或设置指定线条起点的箭头样式。 **MsoArrowheadStyle** 类型，可读写。 |
| [BeginArrowheadWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/BeginArrowheadWidth) | 返回或设置指定线条起点的箭头宽度。 **MsoArrowheadWidth** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DashStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/DashStyle) | 返回或设置指定直线的虚线样式。可以是 **MsoLineDashStyle** 常量之一。可读/写 **Long** 类型。 |
| [EndArrowheadLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/EndArrowheadLength) | 返回或设置指定线条末尾的箭头的长度。 **MsoArrowheadLength** 类型，可读写。 |
| [EndArrowheadStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/EndArrowheadStyle) | 返回或设置指定线条端点的箭头样式。 **MsoArrowheadStyle** 类型，可读写。 |
| [EndArrowheadWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/EndArrowheadWidth) | 返回或设置指定线条端点的箭头的宽度。 **MsoArrowheadWidth** 类型，可读写。 |
| [ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/ForeColor) | 返回或设置一个 **ColorFormat** 对象，它代表指定的前景填充色或纯色。 |
| [InsetPen](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/InsetPen) | 返回或设置线条是否绘制在指定形状的边界以内。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [Pattern](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/Pattern) | 返回或设置一个代表填充图案的 **MsoPatternType** 值。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/Style) | 返回或设置一个 **MsoLineStyle** 值，它代表线条的样式。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/Transparency) | 返回或设置指定填充的透明度，取值范围为 0.0（不透明）到 1.0（清晰）之间。 **Double** 型，可读写。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/Visible) | 返回或设置一个 **MsoTriState** 值，它确定对象是否可见。可读写。 |
| [Weight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/LineFormat/member/Weight) | 返回或设置一个 **Single** 值，它代表线条的粗细。 |