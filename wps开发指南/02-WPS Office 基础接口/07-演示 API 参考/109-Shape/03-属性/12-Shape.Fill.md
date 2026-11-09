# Shape.Fill

返回一个 **FillFormat** 对象，该对象包含指定形状的填充格式属性。只读。



## 语法

express.**Fill**

express   一个代表 **Shape** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加一个矩形，然后设置该矩形的填充的前景色、背景色和渐变。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    let fillFormat = slide.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Fill
    fillFormat.ForeColor.RGB = RGB(128, 0, 0)
    fillFormat.BackColor.RGB = RGB(170, 170, 170)
    fillFormat.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例首先向活动演示文稿的第一张幻灯片添加一个三角形，然后设置其填充的纹理为画布纹理。*/
function test() {
    let shape = Application.ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeIsoscelesTriangle, 10, 10, 100, 100)
    shape.Fill.PresetTextured(msoTextureCanvas)
}
```
