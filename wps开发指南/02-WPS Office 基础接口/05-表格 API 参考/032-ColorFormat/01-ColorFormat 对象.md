# ColorFormat 对象

代表单色对象的颜色、带有渐变或图案填充的对象的前景或背景色，或者指针的颜色。

## 说明


可以将颜色设为显式的红-绿-蓝值（使用 **RGB** 属性），或设为配色方案中的一种颜色（使用 **SchemeColor** 属性）。

使用下表中列出的属性之一可返回 **ColorFormat** 对象。

| 使用此属性              | 对象               | 返回一个 ColorFormat 对象，该对象代表 |
| ------------------ | ---------------- | ------------------------- |
| **BackColor**      | **FillFormat**   | 背景填充色（用于阴影或图案填充格式）        |
| **ForeColor**      | **FillFormat**   | 前景填充色（对于纯色填充格式，即代表填充颜色）   |
| **BackColor**      | **LineFormat**   | 线条背景色（用于图案线条）             |
| **ForeColor**      | **LineFormat**   | 线条前景色（对于纯色线条，即代表线条颜色）     |
| **ForeColor**      | **ShadowFormat** | 阴影颜色                      |
| **ExtrusionColor** | **ThreeDFormat** | 有延伸的对象的侧边颜色               |

使用 **RGB** 属性可将颜色设置为显示的红-绿-蓝值。


## 示例


```JavaScript
/*下例向第一张工作表中添加一个矩形，然后设置矩形填充的前景色、背景色和渐变。*/
function test() {
    let fillFormat = Worksheets.Item(1).Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(170, 170, 170)
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例显示活动工作表上第一个形状阴影的前景色的颜色类型是否为 msoColorTypeRGB。*/
function test() {
    alert(ActiveSheet.Shapes(1).Shadow.ForeColor.Type == msoColorTypeRGB)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Brightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/member/Brightness) | 返回或设置指定对象的发光度。可读/写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [ObjectThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/member/ObjectThemeColor) | 返回或设置一种映射到主题配色方案的颜色。可读/写 **MsoThemeColorIndex** 。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [RGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/member/RGB) | 返回或设置一个 **Long** 值，它代表指定颜色的红绿蓝 (RGB) 值。 |
| [SchemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/member/SchemeColor) | 返回或设置一个 **Integer** 值，它代表 **Color** 对象的颜色，作为当前配色方案中的索引。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/member/TintAndShade) | 返回或设置一个 **Single** ，使颜色变深或变浅。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/member/Type) | 返回一个代表颜色格式类型的 **MsoColorType** 值。 |