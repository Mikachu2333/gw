# ShapeRange.ThreeD

返回一个 **ThreeDFormat** 对象，该对象包含指定形状范围的三维格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例设置活动文档第一个和第二个形状三维效果的延伸深度、延伸颜色、延伸方向以及照明方向。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Range([1, 2]).ThreeD
    threeDFormat.Visible = true
    threeDFormat.Depth = 50
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例向活动文档中添加一个矩形，并设置三维效果的延伸深度和旋转角度。*/
function test() {
    ActiveDocument.Shapes.AddShape(msoShapeRectangle, 100, 300, 200, 100).Select()
    let threeDFormat = Selection.ShapeRange.ThreeD
    threeDFormat.Visible = true
    threeDFormat.Depth = 20
    threeDFormat.RotationX = 40
    threeDFormat.RotationY = 40
}
```
