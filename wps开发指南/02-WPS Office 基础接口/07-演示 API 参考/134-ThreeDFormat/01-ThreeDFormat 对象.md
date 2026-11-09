# ThreeDFormat 对象

代表形状的三维格式。

## 说明


对某些图形不能应用三维格式，例如梭台形图形或多个不连续路径。大多数用于此类图形的 **ThreeDFormat** 对象的属性和方法都会失败。

使用 **ThreeD** 属性可返回 **ThreeDFormat** 对象。


## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片添加一个椭圆，并且将椭圆延伸的深度和延伸颜色分别指定为 50 磅和紫色。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeOval, 90, 90, 90, 40)
    let threeDFormat = shape.ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.Depth = 50
    // RGB value for purple
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片的第一个形状围绕 x 轴的旋转的角度。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.RotationX)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [IncrementRotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/IncrementRotationX) | 按指定度数更改指定形状绕 X 轴的旋转角度。 |
| [IncrementRotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/IncrementRotationY) | 按指定度数更改指定形状绕 Y 轴的旋转角度。 |
| [ResetRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/ResetRotation) | 将延伸部分的 X 轴和 Y 轴的旋转量重新设置为 0，以使延伸部分的正面向前。此方法不重新设置绕 Z 轴的旋转量。 |
| [SetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/SetExtrusionDirection) | 设置延伸部分经过的路径偏离延伸形状的方向。 |
| [SetThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/SetThreeDFormat) | 设置预设的延伸格式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [ContourColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/ContourColor) | 返回一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表指定的 **ThreeDFormat** 对象的轮廓线颜色。只读。 |
| [Depth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/Depth) | 返回或设置形状的延伸深度。可读/写。 |
| [ExtrusionColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/ExtrusionColor) | 返回一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ColorFormat/obj)** 对象，该对象代表形状延伸区域的颜色。只读。 |
| [ExtrusionColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/ExtrusionColorType) | 返回或设置一个值，该值表明延伸颜色是否基于原形状的填充（延伸区域的正面）并随形状填充的改变而自动更改，或者延伸颜色是否与形状的填充无关。可读/写。 |
| [Perspective](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/Perspective) | 确定是否以透视效果显示延伸。可读/写。 |
| [PresetCamera](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/PresetCamera) | 返回指定的 **ThreeDFormat** 对象所使用的效果照相机类型。只读。 |
| [PresetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/PresetExtrusionDirection) | 返回延伸的伸展路径偏离原形状（延伸部分的正面）的方向。只读。 |
| [PresetLighting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/PresetLighting) | 返回或设置指定的 **ThreeDFormat** 对象所使用的效果照明。可读/写。 |
| [PresetLightingDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/PresetLightingDirection) | 返回或设置光源相对于延伸的位置。可读/写。 |
| [PresetLightingSoftness](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/PresetLightingSoftness) | 返回或设置延伸部分的照明的亮度。可读/写。 |
| [PresetMaterial](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/PresetMaterial) | 返回或设置延伸部分的表面材料。可读/写。 |
| [PresetThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/PresetThreeDFormat) | 返回预设的延伸格式。只读。 |
| [ProjectText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/ProjectText) | 指定 **ThreeDFormat** 对象上的文本是否随对象一起旋转。可读/写。 |
| [RotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/RotationX) | 返回或设置延伸形状绕 X 轴的旋转角度（以度为单位）。可读/写。 |
| [RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/RotationY) | 返回或设置延伸形状绕 Y 轴的旋转角度（以度为单位）。可读/写。 |
| [RotationZ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/RotationZ) | 返回或设置指定 **ThreeDFormat** 对象的效果照相机的旋转角度（以度为单位）。可读/写。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/Visible) | 返回或设置指定对象或应用于指定对象的格式的可见性。可读/写。 |
| [Z](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/Z) | 返回或设置指定 **ThreeDFormat** 对象与地平面的距离（以磅为单位）。可读/写。 |