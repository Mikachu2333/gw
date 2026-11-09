# ThreeDFormat.IncrementRotationY

按指定的度数值，改变指定图形绕 Y 轴的旋转量。



## 语法

express.**IncrementRotationY(Increment)**

express   一个代表 **ThreeDFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状绕 Y 轴旋转值的改变量（以度为单位）。可取从 -90 至 90 之间的值。正值为使形状左倾，负值使其右倾。 |

## 返回值

void

## 说明


可用 **[RotationY](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ThreeDFormat/member/RotationY)** 属性设置围绕 Y 轴的形状的绝对旋转量。

如果要改变形状绕 X 轴的旋转度，请使用 **IncrementRotationX** 方法；如果要改变形状绕 Z 轴的旋转度，请使用 **IncrementRotation** 方法。

对指定形状围绕 Y 轴的旋转角度的调整不得超出 **RotationY** 属性的上下限（90 度到 – 90 度）。例如，如果 **RotationY** 属性最初设置为 80，而 _Increment_ 参数指定为 40，则最终旋转角度为 90（ **RotationY** 属性的上限）而不是 120。



## 示例


```JavaScript
/*本示例将活动文档中的第一个形状右倾 10 度。只有当第一个图形是突出的图形时，才能看到下列代码的执行效果。*/
function test() {
    ActiveDocument.Shapes.Item(1).ThreeD.IncrementRotationY(-10)
}
```


```JavaScript
/*本示例将所选形状左倾 20 度。*/
function test() {
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.IncrementRotationY(20)
}
```
