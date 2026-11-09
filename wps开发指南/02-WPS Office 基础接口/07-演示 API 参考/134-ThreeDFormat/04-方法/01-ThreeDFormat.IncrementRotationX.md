# ThreeDFormat.IncrementRotationX

按指定度数更改指定形状绕 X 轴的旋转角度。



## 语法

express.**IncrementRotationX(Increment)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状绕 X 轴旋转角度的改变量（以度为单位）。取值范围在 -90 到 90 之间。正值表示形状向上旋转，负值表示形状向下旋转。 |

## 返回值

void

## 说明


可以使用 **[RotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/RotationX)** 属性设置形状绕 X 轴的绝对旋转角度。

对指定形状绕 X 轴的旋转角度的调整不能超出 **RotationX** 属性的上下限（90 度到 -90 度）。例如，如果将 **RotationX** 属性初始设为 80，并指定 _Increment_ 参数为 40，则最后的旋转角度不是 120 度，而是 **RotationX** 属性的上限，即 90 度。

若要更改形状绕 Y 轴的旋转角度，请使用 **[IncrementRotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/member/IncrementRotationY)** 方法。若要更改形状绕 Z 轴的旋转角度，请使用 **[IncrementRotation](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/member/IncrementRotation)** 方法。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个形状向上旋转 10 度。该形状必须是挤制形状才能看到本示例代码的效果。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).ThreeD.IncrementRotationX(10)
}
```


```JavaScript
/*本示例向第一篇演示文稿的第一张幻灯片添加一个椭圆，并将该椭圆向下旋转 90 度。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(1)
    let shape = slide.Shapes.AddShape(msoShapeOval, 80, 80, 80, 30)
    shape.ThreeD.Visible = msoTrue
    shape.ThreeD.IncrementRotationX(-90)
}
```
