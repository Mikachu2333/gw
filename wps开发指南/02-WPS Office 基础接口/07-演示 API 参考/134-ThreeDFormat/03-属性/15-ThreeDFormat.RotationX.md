# ThreeDFormat.RotationX

返回或设置延伸形状绕 X 轴的旋转角度（以度为单位）。可读/写。



## 语法

express.**RotationX**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


取值范围在 -90 到 90 之间。正值表示向上旋转；负值表示向下旋转。

若要设置延伸形状绕 Y 轴的旋转，请使用 **ThreeDFormat** 对象的 **[RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/RotationY)** 属性。

若要设置延伸形状绕 Z 轴的旋转，请使用 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象的 **[Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/Rotation)** 属性。

若要改变延伸的伸展路径的方向而不旋转延伸部分的正面，请使用 **[SetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/SetExtrusionDirection)** 方法。



## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加三个相同的延伸椭圆，并分别将其围绕 x 轴的旋转设置为 -30、0 和 30 度。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let threeDFormat1 = shapes.AddShape(msoShapeOval, 30, 60, 50, 25).ThreeD
    threeDFormat1.Visible = msoTrue
    threeDFormat1.RotationX = -30
    let threeDFormat2 = shapes.AddShape(msoShapeOval, 90, 60, 50, 25).ThreeD
    threeDFormat2.Visible = msoTrue
    threeDFormat2.RotationX = 0
    let threeDFormat3 = shapes.AddShape(msoShapeOval, 150, 60, 50, 25).ThreeD
    threeDFormat3.Visible = msoTrue
    threeDFormat3.RotationX = 30
}
```


```JavaScript
/*本示例显示第一篇演示文稿第一张幻灯片的第一个形状围绕 x 轴的旋转的角度。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.ThreeD.RotationX)
}
```
