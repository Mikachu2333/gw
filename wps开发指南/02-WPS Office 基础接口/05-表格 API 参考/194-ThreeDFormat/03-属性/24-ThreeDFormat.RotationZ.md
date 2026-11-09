# ThreeDFormat.RotationZ

返回或设置延伸形状绕 Z 轴旋转的度数。可读/写 **Single** 类型。



## 语法

express.**RotationZ**

express   一个代表 **ThreeDFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


 **RotationZ** 属性可以是从 –90 到 90 的值。正值表示向上旋转；负值表示向下旋转。

若要设置延伸形状绕 Y 轴旋转，请使用 ThreeDFormat 对象的 **RotationY** 属性。若要设置延伸形状绕 X 轴旋转，请使用 **Shape** 对象的 **RotationX** 属性。若要更改延伸形状的延伸方向而不旋转延伸形状的正面，请使用 **SetExtrusionDirection** 方法。



## 示例


```JavaScript
/*本示例向第一张工作表中添加一个具有延伸的矩形，并分别将这个矩形绕 z 轴的转角设置为 -40 度。*/
function test() {
    let worksheet = Worksheets.Item(1)
    let shapes = worksheet.Shapes
    let threeDFormat = shapes.AddShape(msoShapeRectangle, 40, 40, 60, 35).ThreeD
    threeDFormat.Visible = msoTrue
    threeDFormat.RotationZ = -40
}
```


```JavaScript
/*本示例显示活动工作表中第三个延伸形状绕 z 轴旋转的度数。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(3)
    alert(shape.ThreeD.RotationZ)
}
```
