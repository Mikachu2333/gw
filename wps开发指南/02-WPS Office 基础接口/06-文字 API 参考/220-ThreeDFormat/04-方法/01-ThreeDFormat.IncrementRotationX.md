# ThreeDFormat.IncrementRotationX

按指定度数值，改变指定图形绕 X 轴的旋转度。



## 语法

express.**IncrementRotationX(Increment)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状绕 X 轴旋转值的改变量（以度为单位）。可取从 -90 至 90 之间的值。正值为使形状上倾，负值使其下倾。 |

## 返回值

void

## 说明


可用 **[RotationX](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/RotationX)** 属性设置围绕 X 轴的形状的绝对旋转量。

对指定形状围绕 X 轴的旋转角度的调整不得超出 **RotationX** 属性的上下限（90 度到 –90 度）。例如，如果 **RotationX** 属性最初设置为 80，而 _Increment_ 参数指定为 40，则最终旋转角度为 90（ **RotationX** 属性的上限）而不是 120。

如果要改变形状绕 Y 轴的旋转度，请使用 **IncrementRotationY** 方法；如果要改变形状绕 Z 轴的旋转度，请使用 **IncrementRotation** 方法。



## 示例


```JavaScript
/*本示例将活动文档的第一个图形倾斜 10 度。只有当第一个图形是突出的图形时，才能看到下列代码的执行效果。*/
function test() {
    ActiveDocument.Shapes.Item(1).ThreeD.IncrementRotationX(10)
}
```


```JavaScript
/*本示例将所选形状下倾 30 度。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.IncrementRotationX(-30)
}
```
