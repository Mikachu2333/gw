# ColorFormat 对象

代表单色对象的颜色，或以渐变/图案填充的对象的前景色或背景色。

## 说明


使用下表中列出的属性之一返回 [ **ColorFormat** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/obj) 对象。

| 使用此属性                                       | 结合此对象                                         | 返回一个代表以下颜色的 ColorFormat 对象 |
| ------------------------------------------- | --------------------------------------------- | -------------------------- |
| **[BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/BackColor)** | **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/obj)** | 背景填充颜色（在底纹或带图案的填充中使用）      |
| **[ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/ForeColor)** | **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/obj)** | 前景填充颜色（或单色填充的填充颜色）         |
| **[BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/BackColor)** | **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/obj)** | 背景线条颜色（在带图案线条中使用）          |
| **[ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/member/ForeColor)** | **[LineFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/LineFormat/obj)** | 前景线条颜色（或实线的线条颜色）           |
| **ForeColor**                               | **ShadowFormat**                              | 阴影颜色                       |
| **ExtrusionColor**                          | **ThreeDFormat**                              | 突出对象的边的颜色                  |


## 示例


```JavaScript
/*本示例向活动文档添加一个矩形，然后设置前景色、背景色和矩形填充的渐变。*/
function test() {
    let fillFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(170, 170, 170)
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例显示活动文档上第二个形状背景填充色的亮度。*/
function test() {
    let colorFormat = ActiveDocument.Shapes.Item(2).Fill.BackColor
    alert(colorFormat.Brightness)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象，该对象代表 WPS 应用程序。 |
| [Brightness](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/member/Brightness) | 返回一个 **Number** 类型的值，代表指定形状颜色的亮度。可读/写。 |
| [ObjectThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/member/ObjectThemeColor) | 返回或设置一个 **[WdThemeColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdThemeColorIndex)** 常量，该常量表示颜色格式的主题颜色。可读写。 |
| [RGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/member/RGB) | 返回或设置指定颜色的 RGB 值（红-绿-蓝值）。 **Long** 类型，可读写。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/member/TintAndShade) | 返回一个 **Single** 类型的值，该值代表指定图形颜色的明暗。可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/member/Type) | 返回或设置形状的颜色类型。 **[MsoColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoColorType)** 类型，只读。 |