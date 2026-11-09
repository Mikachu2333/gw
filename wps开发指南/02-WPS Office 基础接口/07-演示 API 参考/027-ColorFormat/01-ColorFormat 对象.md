# ColorFormat 对象

代表单色对象的颜色、带有渐变或图案填充的对象的前景色或背景色，或者指针的颜色。可以将颜色设为明确的红-绿-蓝值（使用 **[RGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/RGB)** 属性），或者设置为主题中的颜色（使用 **[ObjectThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/ObjectThemeColor)** 属性）或设为配色方案中的一种颜色（使用 **[SchemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/SchemeColor)** 属性）。

## 说明


使用下表中列出的属性之一返回 **ColorFormat** 对象。

| 使用此属性              | 对此对象                  | 返回一个代表以下颜色的 ColorFormat 对象 |
| ------------------ | --------------------- | -------------------------- |
| **DimColor**       | **AnimationSettings** | 变暗对象使用的颜色                  |
| **BackColor**      | **FillFormat**        | 背景填充颜色（在底纹或带图案的填充中使用）      |
| **ForeColor**      | **FillFormat**        | 前景填充颜色（对于纯色填充，则代表填充颜色）     |
| **Color**          | **Font**              | 项目符号或字符颜色                  |
| **BackColor**      | **LineFormat**        | 背景线条颜色（在带图案线条中使用）          |
| **ForeColor**      | **LineFormat**        | 前景线条颜色（或只是实线的线条颜色）         |
| **ForeColor**      | **ShadowFormat**      | 阴影颜色                       |
| **PointerColor**   | **SlideShowSettings** | 演示文稿的默认指针颜色                |
| **PointerColor**   | **SlideShowView**     | 幻灯片放映视图中的临时指针颜色            |
| **ExtrusionColor** | **ThreeDFormat**      | 延伸对象的侧面颜色                  |

可以使用 **[SchemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/SchemeColor)** 属性将幻灯片元素的颜色设置为标准配色方案中的颜色。


## 示例


```JavaScript
/*本示例将当前演示文稿中第二张幻灯片上第一个形状的文本颜色设为标准配色方案的标题颜色。*/
function test() {
    let font = ActivePresentation.Slides.Item(2).Shapes.Item(1).TextFrame.TextRange.Font
    font.Color.SchemeColor = ppTitle
}
```
使用 **[RGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/RGB)** 属性将颜色设为一个明确的红-绿-蓝值。



```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个矩形，然后设置矩形填充的前景色、背景色和渐变。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let fillFormat = slide.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(170, 170, 170)
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/Creator) | 返回 **Long** 类型值，该值代表创建指定对象的应用程序创建者代码，该代码由四个字符构成。例如，如果对象是在WPP 中创建的，则此属性返回一个十六进制数 50575054。只读。 |
| [ObjectThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/ObjectThemeColor) | 返回或设置指定 **ColorFormat** 对象的主题颜色。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/Parent) | 返回指定对象的父对象。 |
| [RGB](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/RGB) | 返回或设置指定颜色的红-绿-蓝(RGB)值（RGB 值：RGB 函数的返回值；以红、绿、蓝的数值组合来指定颜色，其数值范围是由 0（零）到 255 的整数。） **Long** 类型，可读/写 。 |
| [SchemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/SchemeColor) | 返回或设置已经应用的配色方案中的颜色，该配色方案与指定对象相关联。为向后兼容而提供。对于新版，请改用 **[ObjectThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/ObjectThemeColor)** 属性。可读/写 **PpColorSchemeIndex** 类型。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/TintAndShade) | 返回一个 **Single** 类型的值，该值代表使指定形状的颜色是变亮，还是变暗。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/member/Type) | 返回一个 **MsoColorType** 常量，该常量代表颜色的类型。只读。 |