# FillFormat 对象

代表形状的填充格式。形状可以有单色、渐变、纹理、图案、图片或半透明填充。

## 说明


使用 **Fill** 属性可返回 **FillFormat** 对象。


## 示例


```JavaScript
/*本示例向活动文档添加一个矩形，然后设置该矩形填充的渐变和颜色。*/
function test() {
    let fillFormat = Application.ActiveDocument.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 80).Fill
    fillFormat.OneColorGradient(msoGradientHorizontal, 1, 1)
    fillFormat.ForeColor.RGB = RGB(0, 128, 128)
}
```


```JavaScript
/*本示例为活动文档上第一个内嵌形状设置预设渐变填充。*/
function test() {
    let fillFormat = ActiveDocument.InlineShapes.Item(1).Fill
    fillFormat.PresetGradient(msoGradientFromCorner, 3, msoGradientOcean)
}
```
 **FillFormat** 对象的许多属性都是只读的。要设置这些属性之一，您必须应用相应的方法。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [OneColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/OneColorGradient) | 将指定填充设置为单色渐变。 |
| [PresetGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/PresetGradient) | 将指定填充设置为一个预设的渐变。 |
| [PresetTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/PresetTextured) | 将指定填充设置为预设纹理。 |
| [Solid](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/Solid) | 将指定填充设置为统一的颜色。 |
| [TwoColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/TwoColorGradient) | 将指定填充设为双色渐变。 |
| [UserPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/UserPicture) | 用一张大图像填充指定的形状。 |
| [UserTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/UserTextured) | 用一张图像的平铺形式填充指定形状。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/BackColor) | 返回或设置一个 **ColorFormat** 对象，该对象代表填充的背景色，可读写。 |
| [ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/ForeColor) | 返回或设置一个 **ColorFormat** 对象，该对象代表填充的前景色。可读写。 |
| [GradientAngle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/GradientAngle) | 返回或设置指定填充格式的渐变填充的角度。可读/写。 |
| [GradientColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/GradientColorType) | 返回指定填充的渐变颜色的样式。只读 **MsoGradientColorType** 类型。 |
| [GradientDegree](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/GradientDegree) | 返回值表明单色渐变填充的深浅程度。 **Single** 类型，只读。 |
| [GradientStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/GradientStyle) | 返回指定填充的渐变样式。只读 **MsoGradientStyle** 类型。 |
| [GradientVariant](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/GradientVariant) | 返回指定填充的渐变变量；对大多数渐变填充来说，其返回值为 1 到 4 之间的整数。 **Long** 类型，只读。 |
| [Pattern](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/Pattern) | 返回或设置一个 **MsoPatternType** 常量，该常量代表应用于指定填充或线条的图案。只读。 |
| [PresetTexture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/PresetTexture) | 返回指定填充的预设纹理。只读 **MsoPresetTexture** 类型。 |
| [TextureName](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/TextureName) | 返回指定填充的自定义纹理文件名称。 **String** 类型，只读。 |
| [TextureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/TextureType) | 返回指定填充的纹理类型。 **MsoTextureType** 类型，只读。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/Transparency) | 返回或设置形状的指定填充的透明度，可以是 0.0（不透明）到 1.0（透明）之间的数值。可读写 **Single** 类型。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/Type) | 返回图形填充格式的类型。只读 **MsoFillType** 类型。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/member/Visible) | 如果指定对象或应用于该对象的格式是可见的，则为 **msoTrue** 。可读/写 **MsoTriState** 。 |