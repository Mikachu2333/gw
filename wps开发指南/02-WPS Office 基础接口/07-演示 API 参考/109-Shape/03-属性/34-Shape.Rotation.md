# Shape.Rotation

返回或设置指定形状绕Z 轴旋转的角度。可读/写。



## 语法

express.**Rotation**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


正值表示顺时针旋转；负值表示逆时针旋转。

如果要设置三维形状绕 X 轴或 Y 轴的旋转量，请用 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/obj)** 对象的 **[RotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/RotationX)** 属性或 **[RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/RotationY)** 属性。



## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片中所有形状的旋转量设置为与第一个形状的旋转量一致。*/
function test() {
    let shapes = ActivePresentation.Slides(1).Shapes
    let rotation = shapes.Item(1).Rotation
    for (let i = 1; i <= shapes.Count; i++) {
        shapes.Item(i).Rotation = rotation
    }
}
```


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中的第二个形状绕 Z 轴顺时针旋转 20 度。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Item(2).Rotation = 20
}
```
