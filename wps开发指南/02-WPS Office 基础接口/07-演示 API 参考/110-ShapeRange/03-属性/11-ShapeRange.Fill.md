# ShapeRange.Fill

返回一个 FillFormat 对象，该对象包含指定形状的填充格式属性。只读。



## 语法

express.**Fill**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加一个矩形，然后设置该矩形的填充的前景色、背景色和渐变。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let fill = slide.Shapes.AddShape(msoShapeRectangle, 90, 90, 90, 50).Fill
    fill.ForeColor.RGB = RGB(128, 0, 0)
    fill.BackColor.RGB = RGB(170, 170, 170)
    fill.TwoColorGradient(msoGradientHorizontal, 1)
}
```


```JavaScript
/*本示例将第一篇演示文稿第二张幻灯片中所有形状的前景色设置为红色。*/
function test() {
    Presentations.Item(1).Slides.Item(2).Shapes.SelectAll()
    ActiveWindow.Selection.ShapeRange.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
