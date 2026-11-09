# ThreeDFormat.ResetRotation

将延伸绕 x 轴和 y 轴的旋转重设为 0（零），使延伸的正面向前。



## 语法

express.**ResetRotation()**

express   一个代表 **ThreeDFormat** 对象的变量。

## 返回值

void

## 说明


可用 **ThreeDFormat** 对象的 **RotationX** 和 **RotationY** 属性将延伸部分绕 X 轴和 Y 轴的旋转量设置为除 0（零）之外的任意数。如要设置延伸部分绕 Z 轴的旋转量，请用代表延伸形状的 **Shape** 对象的 **Rotation** 属性。

此方法不重新设置绕 Z 轴的旋转量。



## 示例


```JavaScript
/*本示例将活动文档中第一个形状的延伸部分绕 X 轴和 Y 轴的旋转量设置为 0（零）。*/
function test() {
    ActiveDocument.Shapes.Item(1).ThreeD.ResetRotation()
}
```


```JavaScript
/*本示例将活动文档中所有形状的延伸部分绕 X 轴和 Y 轴的旋转量设置为 0（零）。*/
function test() {
    let shapes = ActiveDocument.Shapes
    for (let i = shapes.Count; i >= 1; i--) {
        shapes.Item(i).ThreeD.ResetRotation()
    }
}
```
