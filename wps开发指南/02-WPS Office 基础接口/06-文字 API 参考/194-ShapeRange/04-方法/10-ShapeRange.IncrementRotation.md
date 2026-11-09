# ShapeRange.IncrementRotation

使指定的形状绕 Z 轴旋转指定的角度。



## 语法

express.**IncrementRotation(Increment)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Increment | 必选 | number（float 精度） | 指定形状的水平旋转量，以度为单位。为正值时顺时针旋转形状，为负值时逆时针旋转形状。 |

## 返回值

void

## 说明


使用 **Rotation** 属性可以设置形状的绝对旋转角度。如果要将三维形状绕 X 轴或 Y 轴旋转，请使用 **ThreeDFormat** 的 **IncrementRotationX** 或 **IncrementRotationY** 方法。



## 示例


```JavaScript
/*本示例将活动文档中第二个和第三个形状绕 Z 轴顺时针旋转 45 度。*/
function test() {
    ActiveDocument.Shapes.Range([2, 3]).IncrementRotation(45)
}
```


```JavaScript
/*本示例将选定形状绕 Z 轴逆时针旋转 90 度。*/
function test() {
    Selection.ShapeRange.IncrementRotation(-90)
}
```
