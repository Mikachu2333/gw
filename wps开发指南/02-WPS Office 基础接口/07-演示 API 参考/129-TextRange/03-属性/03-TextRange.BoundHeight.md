# TextRange.BoundHeight

返回指定文本框的文本边界框的高度（以磅为单位）。只读。



## 语法

express.**BoundHeight**

express   一个代表 **TextRange** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片中添加一个圆角矩形，该矩形与第一个形状的文本边界框的大小相同。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let textRange = shapes.Item(1).TextFrame.TextRange
    let shape = shapes.AddShape(msoShapeRoundedRectangle, textRange.BoundLeft, textRange.BoundTop, textRange.BoundWidth, textRange.BoundHeight)
    shape.Fill.ForeColor.RGB = RGB(255, 0, 128)
    shape.Fill.Transparency = 0.75
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个形状的文本边界框的高度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    alert(shape.TextFrame.TextRange.BoundHeight)
}
```
