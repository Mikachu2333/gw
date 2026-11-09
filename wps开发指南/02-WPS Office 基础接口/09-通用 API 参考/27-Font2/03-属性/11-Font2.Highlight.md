# Font2.Highlight

获取代表突出显示的字体颜色属性。只读。



## 语法

express.**Highlight**

express   一个代表 **Font2** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）中的文本突出显示的字体颜色设置为绿色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Highlight.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例运行于演示组件，将活动窗口所选形状（文本框）中的文本突出显示的字体颜色的亮度设置为 0.5。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    font2.Highlight.Brightness = 0.5
}
```
