# ShapeRange.ThreeD

返回一个 **[ThreeDFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ThreeDFormat/obj)** 对象，该对象包含指定形状的三维效果格式属性。只读。



## 语法

express.**ThreeD**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

ThreeDFormat

## 示例


```JavaScript
/*本示例为应用于活动演示文稿第一张幻灯片上第一个和第二个形状的三维效果设置延伸深度、延伸颜色、延伸方向以及照明方向。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    let threeDFormat = slide.Shapes.Range([1, 2]).ThreeD
    threeDFormat.Visible = true
    threeDFormat.Depth = 50
    // RGB value for purple
    threeDFormat.ExtrusionColor.RGB = RGB(255, 100, 255)
    threeDFormat.SetExtrusionDirection(msoExtrusionTop)
    threeDFormat.PresetLightingDirection = msoLightingLeft
}
```


```JavaScript
/*本示例向第一篇演示文稿第一张幻灯片中添加一个矩形，并设置三维效果的延伸深度和旋转角度。*/
function test() {
    Presentations.Item(1).Slides.Item(1).Shapes.AddShape(msoShapeRectangle, 100, 300, 200, 100).Select()
    let threeDFormat = ActiveWindow.Selection.ShapeRange.ThreeD
    threeDFormat.Visible = true
    threeDFormat.Depth = 20
    threeDFormat.RotationX = 40
    threeDFormat.RotationY = 40
}
```
