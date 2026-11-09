# Shape.ThreeD

返回一个 **ThreeDFormat** 对象，该对象包含指定形状的三维格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **Shape** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例设置应用于活动文档中第一个形状的三维效果的深度、延伸颜色、延伸方向以及照明方向。*/
function test() {
    let threeDFormat = ActiveDocument.Shapes.Item(1).ThreeD
    threeDFormat.Visible = true
    threeDFormat.Depth = 50
    // RGB value for purple
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例将在活动文档添加一个矩形，并设置三维效果的深度和旋转角度。*/
function Document_Open() {
    let shape = ActiveDocument.Shapes.AddShape(msoShapeRectangle, 100, 300, 200, 100)
    shape.ThreeD.Visible = true
    shape.ThreeD.Depth = 20
    shape.ThreeD.RotationX = 40
    shape.ThreeD.RotationY = 40
}
```
