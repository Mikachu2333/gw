# ShadowFormat 对象

代表形状的阴影格式。

## 说明


使用 **Shadow** 属性返回 **ShadowFormat** 对象。


## 示例


```JavaScript
/*本示例为活动演示文稿第一张幻灯片添加一个带阴影的矩形。半透明的蓝色阴影向该矩形的右边偏移 5 磅，向上偏移 3 磅。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shadowFormat = slide.Shapes.AddShape(msoShapeRectangle, 50, 50, 100, 200).Shadow
    shadowFormat.Type = msoShadow11
    shadowFormat.Visible = msoTrue
    shadowFormat.ForeColor.RGB = RGB(0, 0, 128)
    shadowFormat.OffsetX = 5
    shadowFormat.OffsetY = -3
    shadowFormat.Transparency = 0.5
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个形状阴影的大小。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    alert(shape.Shadow.Size)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [IncrementOffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/IncrementOffsetX) | 按指定磅值更改阴影的水平偏移量。 |
| [IncrementOffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/IncrementOffsetY) | 按指定磅值更改阴影的垂直偏移量。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/Application) | 返回表示指定对象的创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象。 |
| [ForeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/ForeColor) | 返回或设置一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象表示填充、线条或阴影的前景色。可读/写。 |
| [Obscured](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/Obscured) | 确定指定形状的阴影是否显示填充且由形状遮盖。可读/写。 |
| [OffsetX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/OffsetX) | 返回或设置阴影相对指定形状的水平偏移量（以磅为单位）。可读/写。 |
| [OffsetY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/OffsetY) | 返回或设置阴影相对指定形状的垂直偏移量（以磅为单位）。可读/写。 |
| [RotateWithShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/RotateWithShape) | 返回或设置与指定阴影相关联的形状旋转时指定的阴影是否旋转。可读/写。 |
| [Size](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/Size) | 返回或设置指定阴影的大小作为形状大小的百分比，该值介于 0 到 200 之间。可读/写。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/Style) | 返回或设置阴影样式。可读/写。 |
| [Transparency](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/Transparency) | 返回或设置指定填充、阴影或线条的透明度，以 0.0（不透明）至 1.0（透明）之间的值的形式返回。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/Type) | 代表阴影的类型。可读/写。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShadowFormat/member/Visible) | 返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。 |