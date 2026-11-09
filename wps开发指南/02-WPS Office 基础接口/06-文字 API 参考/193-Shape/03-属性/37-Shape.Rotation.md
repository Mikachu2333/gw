# Shape.Rotation

返回或设置指定图形绕 Z 轴旋转的度数。正数表示按顺时针方向进行旋转，负值表示按逆时针方向旋转。 **Single** 类型，可读写。



## 语法

express.**Rotation**

express   一个代表 **Shape** 对象的变量。

## 类型

number（float 精度）

## 说明


要设置三维图形绕 X 轴或 Y 轴的旋转，请使用 **ThreeDFormat** 对象的 **RotationX** 属性或 **RotationY** 属性。



## 示例


```JavaScript
/*本示例将活动文档中所有形状的旋转量设置为与第一个形状的旋转量一致。*/
function test() {
    let shapes = ActiveDocument.Shapes
    let rotation = shapes.Item(1).Rotation
    for (let i = 1; i <= shapes.Count; i++) {
        shapes.Item(i).Rotation = rotation
    }
}
```


```JavaScript
/*本示例显示当前所选的第一个形状的旋转量。*/
function test() {
    if (Selection.ShapeRange.Count > 0) {
        alert(Selection.ShapeRange.Item(1).Rotation)
    }
}
```
