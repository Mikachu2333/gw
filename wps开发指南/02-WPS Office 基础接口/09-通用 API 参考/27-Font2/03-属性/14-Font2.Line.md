# Font2.Line

获取指定的 **LineFormat** 。只读。



## 语法

express.**Line**

express   一个代表 **Font2** 对象的变量。

## 类型

LineFormat

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）中的文本字体的线条的颜色设置为绿色，宽度设置为 2 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Line.ForeColor.RGB = RGB(0, 255, 0)
    font2.Line.Weight = 2
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中的文本字体的线条的透明度。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.Line.Transparency)
}
```
