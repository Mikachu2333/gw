# ShadowFormat 对象

代表形状的阴影格式。

## 说明


使用 **Shadow** 属性可返回一个 **ShadowFormat** 对象。


## 示例


```JavaScript
/*下例给第一张工作表添加带阴影的矩形。半透明蓝色阴影在矩形右侧偏移 5 磅，在矩形上方偏移 3 磅。*/
function test() {
    let shadow = Worksheets.Item(1).Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200).Shadow
    shadow.ForeColor.RGB = RGB(0, 0, 128)
    shadow.Type = msoShadow17
    shadow.OffsetX = 5
    shadow.OffsetY = -3
    shadow.Transparency = 0.5
    shadow.Visible = true
}
```


```JavaScript
/*本示例显示活动工作表中第二个形状阴影的大小。*/
function test() {
    let shadow = ActiveSheet.Shapes.Item(2).Shadow
    alert(shadow.Size)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [IncrementOffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/IncrementOffsetX) | 按指定磅值更改阴影的水平偏移量。可以使用 **OffsetX** 属性设置阴影的绝对水平偏移量。 |
| [IncrementOffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/IncrementOffsetY) | 按指定磅值更改阴影的垂直偏移量。可以使用 **OffsetY** 属性设置阴影的绝对垂直偏移量。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Blur](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Blur) | 返回或设置指定底纹的模糊度。可读/写 **Single** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/ForeColor) | 返回或设置一个 **ColorFormat** 对象，它代表指定的前景填充色或纯色。 |
| [Obscured](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Obscured) | 如果指定形状的阴影是填充的，并且阴影被形状所遮盖（即便该形状没有填充），那么该值为 **True** 。如果阴影没有填充，并且当形状没有填充时，可透过形状看到阴影的轮廓，那么该值为 **False** 。 **MsoTriState** 类型，可读写。 |
| [OffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/OffsetX) | 以磅为单位返回或设置指定形状的阴影的水平偏移量。正偏移值将阴影向右偏移，负偏移值将阴影向左偏移。可读写。 **Single** 类型。 |
| [OffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/OffsetY) | 以磅为单位返回或设置指定形状阴影的垂直偏移。正偏移值将阴影向下偏移，负偏移值将阴影向上偏移。可读写。 **Single** 类型。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [RotateWithShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/RotateWithShape) | 返回或设置一个 **MsoTriState** 类型的值，该值表示是否在旋转形状时旋转阴影。可读/写。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Size) | 返回或设置指定底纹的大小。可读/写 **Single** 类型。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Style) | 返回或设置指定底纹的样式。可读/写 **MsoShadowStyle** 类型。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Transparency) | 返回或设置指定填充的透明度，取值范围为 0.0（不透明）到 1.0（清晰）之间。 **Double** 型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Type) | 返回或设置一个代表阴影格式类型的 **MsoShadowType** 值。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShadowFormat/member/Visible) | 返回或设置一个 **MsoTriState** 值，它确定对象是否可见。可读写。 |