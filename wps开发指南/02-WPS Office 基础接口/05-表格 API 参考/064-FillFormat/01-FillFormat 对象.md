# FillFormat 对象

代表形状的填充格式。

## 说明


形状可以有纯色、渐变、纹理、图案、图片或半透明填充。

 **FillFormat** 对象的很多属性是只读的。要设置这些属性中每一个，必须使用相应的方法。

使用 **Fill** 属性可返回 **FillFormat** 对象。


## 示例


```JavaScript
/*下例向第一张工作表中添加矩形并且设置矩形填充的渐变和颜色。*/
function test() {
    let sheet = Application.Worksheets.Item(1)
    let shapes = sheet.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 80).Fill
    shapes.ForeColor.RGB = RGB(0, 128, 128)
    shapes.OneColorGradient(msoGradientHorizontal, 1, 1)
}
```


```JavaScript
/*本示例在活动工作表中添加椭圆，并将前景色设置为红色，填充图案设置为深色竖线。*/
function test() {
    let fillFormat = ActiveSheet.Shapes.AddShape(msoShapeOval, 0, 0, 40, 80).Fill
    fillFormat.ForeColor.RGB = RGB(255, 0, 0)
    fillFormat.Patterned(msoPatternDarkVertical)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [OneColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/OneColorGradient) | 将指定填充设为单色渐变。 |
| [Patterned](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/Patterned) | 将指定填充设为一种图案。 |
| [PresetGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/PresetGradient) | 将指定填充设为一个预设的渐变。 |
| [PresetTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/PresetTextured) | 将指定填充格式设为预设纹理。 |
| [Solid](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/Solid) | 将指定填充设为统一的颜色。使用此方法可将渐变、纹理、图案或背景填充转换为纯色填充。 |
| [TwoColorGradient](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/TwoColorGradient) | 将指定填充设为双色渐变。 |
| [UserPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/UserPicture) | 用图像填充指定的形状。 |
| [UserTextured](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/UserTextured) | 用平铺的小图像填充指定形状。如果要用一个大图像来填充该形状，请使用 **UserPicture** 方法。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [BackColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/BackColor) | 返回或设置一个 **ColorFormat** 对象，它代表指定的填充背景色。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/ForeColor) | 返回或设置一个 **ColorFormat** 对象，它代表指定的前景填充色或纯色。 |
| [GradientAngle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/GradientAngle) | 返回或设置指定填充格式的渐变填充角度。可读/写。 |
| [GradientColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/GradientColorType) | 返回指定填充的渐变颜色类型。 **MsoGradientColorType** ，只读。 |
| [GradientDegree](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/GradientDegree) | 以浮点数值的方式返回单色阴影填充的渐变程度，数值大小介于 0.0（暗）到 1.0（亮）之间。 **Single** 型，只读。 |
| [GradientStops](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/GradientStops) | 返回渐变填充的终点。只读。 |
| [GradientStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/GradientStyle) | 返回指定填充的渐变样式。 **MsoGradientStyle** ，只读。 |
| [GradientVariant](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/GradientVariant) | 以整数值（1 至 4）形式返回指定填充的底纹变量。此属性的值对应于 **“填充效果”** 对话框中 **“渐变”** 选项卡的渐变变量（从左到右、从上到下编号）。 **Long** 型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [Pattern](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/Pattern) | 返回一个代表填充图案的 **MsoPatternType** 值。只读。 |
| [PictureEffects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/PictureEffects) | 返回一个对象，该对象表示指定的填充格式的图片或纹理填充。只读。 |
| [PresetGradientType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/PresetGradientType) | 返回指定填充的预设渐变类型。 **MsoPresetGradientType** ，只读。 |
| [PresetTexture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/PresetTexture) | 返回指定填充的预设纹理。 **MsoPresetTexture** ，只读。 |
| [RotateWithObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/RotateWithObject) | 返回或设置是否随对象旋转。可读/写 **MsoTriState** 类型。 |
| [TextureAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/TextureAlignment) | 返回或设置用于平铺纹理填充的对齐方式（坐标网格的原点）。可读/写。 |
| [TextureHorizontalScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/TextureHorizontalScale) | 返回或设置纹理填充的水平缩放比例因子。可读/写 **Single** 类型。 |
| [TextureName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/TextureName) | 返回指定填充的自定义纹理文件名称。 **String** 型，只读。 |
| [TextureOffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/TextureOffsetX) | 返回指定填充的偏移 X 值。可读/写 **Single** 类型。 |
| [TextureOffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/TextureOffsetY) | 返回指定填充的偏移 Y 值。可读/写 **Single** 类型。 |
| [TextureTile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/TextureTile) | 返回指定填充的纹理平铺样式。可读/写 **MsoTriState** 类型。 |
| [TextureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/TextureType) | 返回指定填充的纹理类型。 **MsoTextureType** ，只读。 |
| [TextureVerticalScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/TextureVerticalScale) | 返回指定填充的纹理垂直缩放比例因子。可读/写 **Single** 类型。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/Transparency) | 返回或设置指定填充的透明度，取值范围为 0.0（不透明）到 1.0（清晰）之间。 **Double** 型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/Type) | 返回代表填充类型的 **MsoFillType** 值。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/member/Visible) | 返回或设置一个 **MsoTriState** 值，它确定对象是否可见。可读写。 |