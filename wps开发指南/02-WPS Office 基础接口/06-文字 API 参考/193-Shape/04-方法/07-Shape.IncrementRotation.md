# Shape.IncrementRotation

使指定的形状绕 Z 轴旋转指定的角度。



## 语法

express.**IncrementRotation(Increment)**

express   一个代表 **Shape** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状的水平旋转量，以度为单位。为正值时顺时针旋转形状，为负值时逆时针旋转形状。 |

## 返回值

void

## 说明


使用 **Rotation** 属性可以设置形状的绝对旋转角度。要绕 X 轴或 Y 轴旋转三维形状，请使用 **ThreeDFormat** 对象的 **IncrementRotationX** 或 **IncrementRotationY** 方法。



## 示例


```JavaScript
/*本示例复制活动文档上的第一个形状，并设置复制的填充，再向右移 70 磅、向上移 50 磅，然后顺时针旋转 30 度。*/
function test() {
    let originalShape = Application.ActiveDocument.Shapes.Item(1)
    let newShape = originalShape.Duplicate()
    newShape.Fill.PresetTextured(msoTextureGranite)
    newShape.IncrementLeft(70)
    newShape.IncrementTop(-50)
    newShape.IncrementRotation(30)
}
```


```JavaScript
/*本示例将所有形状绕 Z 轴顺时针旋转 90 度。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        let shape = ActiveDocument.Shapes.Item(i)
        shape.IncrementRotation(90)
    }
}
```
