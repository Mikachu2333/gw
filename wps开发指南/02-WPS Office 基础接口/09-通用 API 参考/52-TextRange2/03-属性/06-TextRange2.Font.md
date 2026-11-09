# TextRange2.Font

返回一个 **Font2** 对象，该对象代表 **TextRange2** 对象的字符格式。只读。



## 语法

express.**Font**

express   一个代表 **TextRange2** 对象的变量。

## 类型

Font2

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本的字体。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Size = 48
    font2.Name = "Palatino"
    font2.Bold = msoTrue
    font2.Fill.ForeColor.RGB = RGB(255, 127, 255)
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选形状（文本框）中的文本字体是否为斜体。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.Italic === msoTrue)
}
```
