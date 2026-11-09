# ThreeDFormat.ResetRotation

将延伸部分的 X 轴和 Y 轴的旋转量重新设置为 0，以使延伸部分的正面向前。此方法不重新设置绕 Z 轴的旋转量。



## 语法

express.**ResetRotation()**

express   一个代表 **ThreeDFormat** 对象的变量。

## 返回值

void

## 说明


若要将延伸部分绕 X 轴和 Y 轴的旋转量设置为除 0（零）之外的任意数，请使用 **ThreeDFormat** 对象的 [ **RotationX** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/RotationX) 和 **[RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/RotationY)** 属性。若要设置延伸部分绕 Z 轴的旋转量，请使用代表延伸形状的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象的 **[Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Rotation)** 属性。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中第一个形状的延伸部分绕 x 轴和 y 轴的转角重设为 0（零）度。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).ThreeD.ResetRotation()
}
```


```JavaScript
/*本示例向第一篇演示文稿的第一张幻灯片添加一个菱形，并将菱形的延伸部分绕 x 轴和 y 轴的转角重设为 0（零）度。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeDiamond, 100, 100, 60, 80)
    shape.ThreeD.Visible = msoTrue
    shape.ThreeD.ResetRotation()
}
```
