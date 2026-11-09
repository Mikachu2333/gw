# ThreeDFormat 对象

代表形状的三维格式。

## 说明


使用 **ThreeD** 属性可返回一个 **ThreeDFormat** 对象。


## 示例


```JavaScript
/*本示例向活动文档添加一个椭圆，然后指定该椭圆延伸 50 磅，并将延伸区域设为紫色。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.AddShape(msoShapeOval, 90, 90, 90, 40).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.Depth = 50
    // RGB value for purple
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
}
```


```JavaScript
/*本示例设置所选形状的照相机预设类型和延伸方向。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.SetPresetCamera(msoCameraObliqueBottom)
    threeDFormat.SetExtrusionDirection(msoExtrusionBottomLeft)
}
```
不能对某些形状应用三维格式，例如斜截形状或多处间断的路径。对此类形状， **ThreeDFormat** 对象的大多数属性和方法将失败。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [IncrementRotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/IncrementRotationX) | 按指定度数值，改变指定图形绕 X 轴的旋转度。 |
| [IncrementRotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/IncrementRotationY) | 按指定的度数值，改变指定图形绕 Y 轴的旋转量。 |
| [IncrementRotationZ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/IncrementRotationZ) | 按照指定的增量在 z 轴上旋转形状。 |
| [ResetRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/ResetRotation) | 将延伸绕 x 轴和 y 轴的旋转重设为 0（零），使延伸的正面向前。 |
| [SetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/SetExtrusionDirection) | 设置延伸经过的路径偏离延伸形状的方向。 |
| [SetPresetCamera](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/SetPresetCamera) | 设置形状的照相机预设。 |
| [SetThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/SetThreeDFormat) | 返回预设的延伸格式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BevelBottomDepth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/BevelBottomDepth) | 返回或设置一个 **Single** 类型的值，该值代表底部斜面的深度。可读/写。 |
| [BevelBottomInset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/BevelBottomInset) | 返回或设置一个 **Single** 类型的值，该值代表底部斜面的内边距大小。可读/写。 |
| [BevelBottomType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/BevelBottomType) | 返回或设置一个代表底部斜面的斜角类型的 **MsoPresetCamera** 常量。可读/写。 |
| [BevelTopDepth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/BevelTopDepth) | 返回或设置一个 **Single** 类型的值，该值代表顶部斜面的深度。可读/写。 |
| [BevelTopInset](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/BevelTopInset) | 返回或设置一个 **Single** 类型的值，该值代表顶部斜面的内边距大小。可读/写。 |
| [BevelTopType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/BevelTopType) | 返回或设置一个代表顶部斜面的斜角类型的 **MsoPresetCamera** 常量。可读/写。 |
| [ContourColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/ContourColor) | 返回或设置一个代表形状的轮廓线颜色的 **ColorFormat** 对象。可读/写。 |
| [ContourWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/ContourWidth) | 返回或设置一个 **Single** 类型的值，该值代表形状的轮廓线宽度。可读/写。 |
| [Depth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/Depth) | 返回或设置图形的延伸深度。 **Single** 类型，可读写。 |
| [ExtrusionColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/ExtrusionColor) | 返回一个 **[ColorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ColorFormat/obj)** 对象，该对象代表形状延伸区域的颜色。只读。 |
| [ExtrusionColorType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/ExtrusionColorType) | 返回或设置一个属性值，该值表明延伸区域的颜色是否基于原图形的填充（延伸区域的正面）色，并随着图形填充色的改变而自动变化，或者延伸区域的颜色是否与图形填充色的无关。 **MsoExtrusionColorType** ，可读写。 |
| [FieldOfView](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/FieldOfView) | 返回或设置一个 **Single** 类型的值，该值代表形状的透视度。可读/写。 |
| [LightAngle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/LightAngle) | 返回或设置一个 **Single** 类型的值，该值代表照明的角度。可读/写。 |
| [Perspective](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/Perspective) | 如果以透视效果显示延伸，即延伸部分的外壁向消失点收敛，则该属性值为 **msoTrue** 。如果延伸采用平行、正交或投影方式，即外壁不向消失点收敛，则该属性值为 **msoFalse** 。 **MsoTriState** 类型，可读写。 |
| [PresetCamera](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/PresetCamera) | 返回一个代表照相机预设的 **MsoPresetCamera** 常量。只读。 |
| [PresetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/PresetExtrusionDirection) | 返回形状（指延伸部分的正面）延伸的方向。 **MsoPresetExtrusionDirection** 类型，只读。 |
| [PresetLighting](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/PresetLighting) | 返回或设置一个代表照明预设的 **MsoBevelType** 常量。可读/写。 |
| [PresetLightingDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/PresetLightingDirection) | 返回或设置光源相对于延伸的位置。 **MsoPresetLightingDirection** 类型，可读写。 |
| [PresetLightingSoftness](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/PresetLightingSoftness) | 返回或设置延伸光源的亮度。 **MsoPresetLightingSoftness** 类型，可读写。 |
| [PresetMaterial](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/PresetMaterial) | 返回或设置延伸的表面材料。 **MsoPresetMaterial** 类型，可读写。 |
| [PresetThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/PresetThreeDFormat) | 返回预设延伸格式。 **MsoPresetThreeDFormat** 类型，只读。 |
| [ProjectText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/ProjectText) | 返回或设置一个表示形状上的文本是否随同形状一起旋转的 **MsoTriState** 常量。 **msoTrue** 表示旋转文本。可读/写。 |
| [RotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/RotationX) | 返回或设置延伸形状绕 X 轴旋转的度数。 **Single** 类型，可读写。 |
| [RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/RotationY) | 返回或设置形状延伸部分绕 Y 轴旋转的度数。 **Single** 类型，可读写。 |
| [RotationZ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/RotationZ) | 返回或设置一个 **Single** 类型的值，该值代表照相机的 z 轴旋转。可读/写。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/Visible) | 如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。 |
| [Z](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/Z) | 返回或设置一个 **Single** 类型的值，该值代表形状的 z 轴。可读/写。 |