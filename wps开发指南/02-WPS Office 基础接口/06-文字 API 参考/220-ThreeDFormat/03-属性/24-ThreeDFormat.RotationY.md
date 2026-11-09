# ThreeDFormat.RotationY

返回或设置形状延伸部分绕 Y 轴旋转的度数。 **Single** 类型，可读写。



## 语法

express.**RotationY**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


 **RotationY** 属性可以是 –90 到 90 间的值。正值表示向左旋转，负值表示向右旋转。

要设置形状延伸部分绕 X 轴旋转的度数，可用 **ThreeDFormat** 对象的 **[RotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/RotationX)** 属性。要设置形状延伸部分绕 Z 轴旋转的度数，请用 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象的 **[Rotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/member/Rotation)** 属性。要更改延伸方向而不旋转形状正面，请用 **[SetExtrusionDirection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/SetExtrusionDirection)** 方法。



## 示例


```JavaScript
/*本示例向活动文档添加三个相同的延伸椭圆形，并分别将这三个椭圆绕 Y 轴旋转 -30 度、0 度和 30 度。*/
function test() {
    let threeDFormat1 = ActiveDocument.Shapes.AddShape(msoShapeOval, 30, 60, 50, 25).ThreeD
    threeDFormat1.Visible = msoTrue
    threeDFormat1.RotationY = -30
    let threeDFormat2 = ActiveDocument.Shapes.AddShape(msoShapeOval, 30, 70, 50, 25).ThreeD
    threeDFormat2.Visible = msoTrue
    threeDFormat2.RotationY = 0
    let threeDFormat3 = ActiveDocument.Shapes.AddShape(msoShapeOval, 30, 110, 50, 25).ThreeD
    threeDFormat3.Visible = msoTrue
    threeDFormat3.RotationY = 30
}
```


```JavaScript
/*本示例显示所选形状绕 Y 轴旋转的度数。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    alert(threeDFormat.RotationY + " 度")
}
```
