# ShadowFormat 对象

代表形状的阴影格式。

## 说明


使用 **Shadow** 属性可返回一个 **ShadowFormat** 对象。


## 示例


```JavaScript
/*本示例向活动文档添加一个带阴影的矩形。半透明的蓝色阴影向矩形右侧偏移 5 磅，向矩形上方偏移 3 磅。*/
function test() {
    let shadowFormat = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200).Shadow
    shadowFormat.Type = msoShadow16
    shadowFormat.ForeColor.RGB = RGB(0, 0, 128)
    shadowFormat.OffsetX = 5
    shadowFormat.OffsetY = -3
    shadowFormat.Transparency = 0.5
    shadowFormat.Visible = msoTrue
}
```


```JavaScript
/*本示例在新文档中添加一副图片，并设置该图片的阴影格式。*/
function test() {
    let shadowFormat = Documents.Add().Shapes.AddPicture("D:\\示例\\img1.bmp").Shadow
    shadowFormat.Type = msoShadow4
    shadowFormat.ForeColor.RGB = RGB(127, 0, 0)
    shadowFormat.OffsetX = 10
    shadowFormat.OffsetY = 10
    shadowFormat.Size = 100
    shadowFormat.Transparency = 0.5
    shadowFormat.Visible = msoTrue
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [IncrementOffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/IncrementOffsetX) | 按指定磅值改变阴影的水平偏移量。 |
| [IncrementOffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/IncrementOffsetY) | 按指定磅值更改阴影的垂直偏移量。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Blur](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/Blur) | 返回或设置一个 **Single** 类型的值，该值代表阴影格式的模糊级别。可读写。 |
| [ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/ForeColor) | 返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/obj)** 对象，该对象代表填充、线条或阴影的前景色。可读写。 |
| [Obscured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/Obscured) | 如果不论是否填充了指定形状，都将填充该形状的阴影部分且为形状所遮掩，则该属性值为 **msoTrue** 。如果不填充阴影，并且在没有填充形状的情况下，可透过形状看到阴影轮廓，则该属性值为 **msoFalse** 。 **MsoTriState** 类型，可读写。 |
| [OffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/OffsetX) | 返回或设置阴影根据指定形状的水平偏移量（以磅为单位）。正值表示阴影向形状右侧偏移，负值表示向左偏移。 **Single** 类型，可读写。 |
| [OffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/OffsetY) | 返回或设置阴影相对指定形状的垂直偏移量（以磅为单位）。 **Single** 类型，可读写。 |
| [RotateWithShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/RotateWithShape) | 返回或设置一个 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型的值，该值代表在旋转形状时是否旋转阴影。可读写。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/Size) | 返回或设置一个 **Single** 类型的值，该值代表阴影的宽度。可读写。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/Style) | 返回或设置一个 **MsoShadowStyle** 类型的值，该值代表应用于形状的阴影格式的效果类型。可读写。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/Transparency) | 返回或设置指定阴影的透明度，其值为从 0.0（不透明）到 1.0（全透明）。可读写 **Single** 类型。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/Type) | 返回或设置形状阴影的类型。可读/写 **MsoShadowType** 类型。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShadowFormat/member/Visible) | 如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。 |