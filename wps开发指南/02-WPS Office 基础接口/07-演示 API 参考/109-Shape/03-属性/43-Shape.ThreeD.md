# Shape.ThreeD

返回一个 **ThreeDFormat** 对象，该对象包含指定形状的三维效果格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **Shape** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例为活动演示文稿的第一张幻灯片中第一个形状的三维效果设置深度、延伸色、延伸方向以及照明方向。​*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    let threeD = slide.Shapes.Item(1).ThreeD
    threeD.Visible = msoTrue
    threeD.Depth = 50
    //RGB value for purple
    threeD.ExtrusionColor.RGB = RGB(255, 100, 255)
    threeD.SetExtrusionDirection(msoExtrusionTop)
    threeD.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加一个矩形，并设置三维效果的深度和旋转角度。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 100, 300, 200, 100)
    shape.ThreeD.Visible = true
    shape.ThreeD.Depth = 20
    shape.ThreeD.RotationX = 40
    shape.ThreeD.RotationY = 40
}
```
