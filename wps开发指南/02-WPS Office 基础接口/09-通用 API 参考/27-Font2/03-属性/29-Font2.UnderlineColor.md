# Font2.UnderlineColor

返回一个 **[ColorFormat](#TODO)** 对象，该对象代表指定选定文本的下划线的颜色。只读。



## 语法

express.**UnderlineColor**

express   一个代表 **Font2** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）中的文本字体的下划线颜色的亮度设置为 0.5。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.UnderlineColor.Brightness = 0.5
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中的文本字体下划线的颜色是否为黑色。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.UnderlineColor.RGB === RGB(0, 0, 0))
}
```
