# ShapeRange.Rotation

返回或设置指定形状绕 Z 轴旋转的度数。可读写 **Single** 类型。



## 语法

express.**Rotation**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（float 精度）

## 说明


正值表示顺时针旋转；负值表示逆时针旋转。要设置三维形状绕 X 轴或 Y 轴的旋转，请使用 **ThreeDFormat** 对象的 **RotationX** 属性或 **RotationY** 属性。



## 示例


```JavaScript
/*本示例设置活动文档上第一个和第二个形状绕 Z 轴旋转的度数。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.Rotation = 90
}
```


```JavaScript
/*本示例显示选中形状绕 Z 轴旋转的度数。*/
function test() {
    alert(Selection.ShapeRange.Rotation)
}
```
