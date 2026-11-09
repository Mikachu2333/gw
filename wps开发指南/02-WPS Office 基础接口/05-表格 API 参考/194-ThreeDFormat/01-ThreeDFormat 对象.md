# ThreeDFormat 对象

该对象代表一个形状的三维格式。

## 说明


不能对某些形状应用三维格式，例如斜截形状或多处间断的路径。对这些形状， **ThreeDFormat** 对象的大多数属性和方法将失败。

使用 **[ThreeD](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/member/ThreeD)** 属性可返回一个 **ThreeDFormat** 对象。


## 示例


```JavaScript
/*以下示例向第一张工作表添加一个椭圆，然后指定椭圆延伸至 50 磅深度，延伸为紫色。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let shape = worksheet.Shapes.AddShape(msoShapeOval, 90, 90, 90, 40)
    let threeDFormat = shape.ThreeD
    threeDFormat.Visible = true
    threeDFormat.Depth = 50
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
    //RGB value for purple
}
```


```JavaScript
/*本示例显示活动工作表中第三个形状突出的深度。*/
function test() {
    let shapes = ActiveSheet.Shapes
    let shape = shapes.Item(3)
    alert(shape.ThreeD.Depth)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [IncrementRotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/IncrementRotationX) | 按指定度数更改指定形状绕 X 轴的旋转角度。可以使用 **[RotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/RotationX)** 属性设置形状绕 X 轴的绝对旋转角度。 |
| [IncrementRotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/IncrementRotationY) | 按指定度数更改指定形状绕 Y 轴的旋转角度。可以使用 **[RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/RotationY)** 属性设置形状绕 Y 轴的绝对旋转角度。 |
| [ResetRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/ResetRotation) | 将延伸部分绕 x 轴和 y 轴的转角重新设置为 0（零）度，从而使延伸部分的前面朝前。本方法并不重新设置绕 z 轴的转角。 |
| [SetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/SetExtrusionDirection) | 设置延伸经过的路径偏离延伸形状的方向。 |
| [SetPresetCamera](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/SetPresetCamera) | 为指定的 **ThreeDFormat** 对象设置相机。 |
| [SetThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/SetThreeDFormat) | 返回预设的延伸格式。每个预设的延伸格式都包含一组各种延伸属性的预设值。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BevelBottomDepth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/BevelBottomDepth) | 返回或设置对 **ThreeDFormat** 对象使用棱台效果时的台底深度。可读/写 **Single** 类型。 |
| [BevelBottomInset](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/BevelBottomInset) | 返回或设置一个值，该值指示是否应为 **ThreeDFormat** 对象抬高底部插入棱台，可读/写 **Single** 类型。 |
| [BevelBottomType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/BevelBottomType) | 返回或设置 **ThreeDFormat** 对象的底部凹凸效果类型。可读/写 **[MsoBevelType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBevelType)** 类型。 |
| [BevelTopDepth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/BevelTopDepth) | 返回或设置对 **ThreeDFormat** 对象使用棱台效果时的台顶深度。可读/写 **Single** 类型。 |
| [BevelTopInset](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/BevelTopInset) | 返回或设置一个值，该值指示是否应为 **ThreeDFormat** 对象抬高顶部插入棱台，用于 **ThreeDFormat** 对象，可读/写 **Single** 类型。 |
| [BevelTopType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/BevelTopType) | 返回或设置 **ThreeDFormat** 对象的顶部凹凸效果类型。可读/写 **[MsoBevelType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBevelType)** 类型。 |
| [ContourColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/ContourColor) | 返回 **ThreeDFormat** 对象的轮廓线颜色。只读 **ColorFormat** 类型。 |
| [ContourWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/ContourWidth) | 返回或设置 **ThreeDFormat** 对象的轮廓线宽度。可读/写 **Single** 类型。 |
| [Depth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/Depth) | 返回或设置一个 **Single** 值，它代表形状突出的深度。 |
| [ExtrusionColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/ExtrusionColor) | 返回一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorFormat/obj)** 对象，该对象表示形状延伸区域的颜色。只读。 |
| [ExtrusionColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/ExtrusionColorType) | 返回或设置一个值，该值表示延伸颜色是否基于延伸形状的填充（延伸前表面）并在形状填充更改时自动进行更改，或延伸颜色是否独立于形状填充。 **[MsoExtrusionColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoExtrusionColorType)** 类型，可读写。 |
| [FieldOfView](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/FieldOfView) | 返回或设置可以查看 **ThreeDFormat** 对象的角度。可读/写 **Single** 类型。 |
| [LightAngle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/LightAngle) | 返回或设置对 **ThreeDFormat** 对象设置的延伸灯光的角度。可读/写 **Single** 类型。 |
| [Perspective](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/Perspective) | 返回或设置一个 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 值，该值确定是否在透视中显示延伸。 |
| [PresetCamera](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/PresetCamera) | 返回 **ThreeDFormat** 对象的延伸预设相机。只读 **[MsoPresetCamera](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoPresetCamera)** 类型。 |
| [PresetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/PresetExtrusionDirection) | 返回延伸路径从延伸形状（延伸的正面）中带走的方向。 **MsoPresetExtrusionDirection** 类型，只读。 |
| [PresetLighting](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/PresetLighting) | 返回或设置 **ThreeDFormat** 对象的延伸预设照明。可读/写 **[MsoLightRigType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoLightRigType)** 类型。 |
| [PresetLightingDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/PresetLightingDirection) | 返回或设置与延伸相对的光源的位置。 **MsoPresetLightingDirection** 类型，可读写。 |
| [PresetLightingSoftness](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/PresetLightingSoftness) | 返回或设置延伸光源效果的亮度。可读写。 **MsoPresetLightingSoftness** 类型。 |
| [PresetMaterial](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/PresetMaterial) | 返回或设置延伸部分的表面材料。 **MsoPresetMaterial** ，可读写。 |
| [ProjectText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/ProjectText) | 返回或设置指定 **ThreeDFormat** 对象投影文本状态。可读/写 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 类型。 |
| [RotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/RotationX) | 返回或设置延伸形状绕 x 轴旋转的度数。取值范围在 –90 到 90 之间。正值表示向上旋转；负值表示向下旋转。 **Single** 类型，可读写。 |
| [RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/RotationY) | 以度为单位返回或设置具有延伸的形状绕 y 轴的转角。取值范围在 -90 到 90 之间。正值表示向左旋转，负值表示向右旋转。 **Single** 类型，可读/写。 |
| [RotationZ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/RotationZ) | 返回或设置延伸形状绕 Z 轴旋转的度数。可读/写 **Single** 类型。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/Visible) | 返回或设置一个 **[MsoTriState](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoTriState)** 值，它确定对象是否可见。可读写。 |
| [Z](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ThreeDFormat/member/Z) | 返回指定 **ThreeDFormat** 对象的 Z 次序。可读/写 **Single** 类型。 |