# FillFormat 对象

代表形状的填充格式。形状可以有单色、渐变、纹理、图案、图片或半透明填充。

## 说明


 **FillFormat** 对象的许多属性都是只读的。若要设置其中一个属性，必须应用相应的方法。

使用 **Fill** 属性可返回一个 **FillFormat** 对象。


## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加矩形，并设置矩形填充的单色渐变和前景颜色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let fillFormat = slide.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 80).Fill
    fillFormat.ForeColor.RGB = RGB(0, 128, 128)
    fillFormat.OneColorGradient(msoGradientHorizontal, 1, 1)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状填充的类型是否为纹理填充。*/
function test() {
    let fillFormat = ActiveWindow.Selection.ShapeRange.Item(1).Fill
    alert(fillFormat.Type == msoFillTextured)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Background](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Background) | 指定形状的填充与幻灯片背景相匹配。如果将此方法应用于填充后又更改了幻灯片背景色，该填充会随之改变。 |
| [OneColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/OneColorGradient) | 将指定填充设置为单色渐变。 |
| [Patterned](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Patterned) | 将指定填充设置为一种图案。 |
| [PresetTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/PresetTextured) | 将指定的填充方式设置为预设纹理。 |
| [Solid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Solid) | 将指定的填充格式设置为均匀的颜色。可用本方法将带有渐变、纹理、图案或背景的填充格式转换为单色的填充格式。 |
| [TwoColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TwoColorGradient) | 设置指定填充为双色渐变。 |
| [UserPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/UserPicture) | 用一幅大图像来填充指定形状。 |
| [UserTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/UserTextured) | 用平铺的小图像填充指定形状。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/BackColor) | 返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表指定填充对象或图案线条的背景色。可读/写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Creator) | 返回 **Long** 类型值，该值代表创建指定对象的应用程序创建者代码，该代码由四个字符构成。例如，如果对象是在WPP 中创建的，则此属性返回一个十六进制数 50575054。只读。 |
| [ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/ForeColor) | 返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象表示填充、线条或阴影的前景色。可读/写。 |
| [GradientAngle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/GradientAngle) | 为指定填充格式返回或设置渐变填充角度。可读/写。 |
| [GradientColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/GradientColorType) | 返回指定填充的渐变颜色类型。只读 **MsoGradientColorType** 类型。 |
| [GradientDegree](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/GradientDegree) | 返回一个值，该值指示单色渐变填充的深浅程度。只读 **Single** 类型。 |
| [GradientStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/GradientStops) | 返回与指定填充格式相关联的 **[GradientStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/GradientStops/obj)** 集合。只读。 |
| [GradientStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/GradientStyle) | 返回指定填充的渐变样式。只读 **MsoGradientStyle** 类型。 |
| [GradientVariant](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/GradientVariant) | 返回指定填充的渐变变量，对于大多数渐变填充，其返回值为从 1 到 4 的整数。 **Long** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Parent) | 返回指定对象的父对象。 |
| [Pattern](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Pattern) | 设置或返回一个值，该值代表应用于指定填充的图案。只读。 **MsoPatternType** 类型。 |
| [PresetGradientType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/PresetGradientType) | 返回指定填充的预设渐变类型。只读 **MsoPresetGradientType** 类型。 |
| [PresetTexture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/PresetTexture) | 返回指定填充的预设纹理。只读 **MsoPresetTexture** 类型。 |
| [TextureAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TextureAlignment) | 返回或设置用于平铺纹理填充的对齐方式（坐标网格的原点）。可读/写。 |
| [TextureHorizontalScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TextureHorizontalScale) | 返回或设置纹理填充的水平缩放比例因子。可读/写。 |
| [TextureName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TextureName) | 返回指定填充的自定义纹理文件名称。只读 **String** 类型。 |
| [TextureOffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TextureOffsetX) | 返回或设置纹理相对于原点的水平偏移量（以磅为单位）。可读/写。 |
| [TextureOffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TextureOffsetY) | 返回或设置纹理相对于原点的垂直偏移量（以磅为单位）。可读/写。 |
| [TextureTile](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TextureTile) | 返回或设置一个值，该值指示纹理填充是平铺还是拉伸。可读/写。 |
| [TextureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TextureType) | 返回指定填充的纹理类型。 **MsoTextureType** 类型，只读。 |
| [TextureVerticalScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/TextureVerticalScale) | 返回或设置纹理填充的垂直缩放比例因子。可读/写。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Transparency) | 该属性返回或设置指定填充的透明度，可取 0.0（不透明）至 1.0（透明）之间的数值。 **Single** 类型，可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Type) | 返回一个 **MsoFillType** 常量，该常量代表填充的类型。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/member/Visible) | 返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。 |