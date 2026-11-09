# TextRange.BoundLeft

返回指定文本框的文本边界框的左边缘到幻灯片的左边缘的距离（以磅为单位）。只读。



## 语法

express.**BoundLeft**

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
/*本示例判断如果活动演示文稿第一张幻灯片的第二个形状的名字为“test”，则显示其文本边界框的左边缘到幻灯片的左边缘的距离。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    if (shape.Name == "test") {
        alert(shape.TextFrame.TextRange.BoundLeft)
    }
}
```
