# GlowFormat.Color

获取一个 **ColorFormat** 对象，该对象代表格式设置为发光的文本的颜色。只读。



## 语法

express.**Color**

express   一个代表 **GlowFormat** 对象的变量。

## 类型

ColorFormat

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片的第一个形状的发光效果的颜色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.Glow.Color.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口所选的第一张幻灯片上第二个形状（文本框）中文本字体的发光效果的主题色和亮度。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(2)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Glow.Color.ObjectThemeColor = msoThemeColorAccent6
    font2.Glow.Color.Brightness = 0.8
}
```
