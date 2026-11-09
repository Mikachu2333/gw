# GlowFormat.Radius

获取或设置 **GlowFormat** 对象发光效果的半径值。可读写。



## 语法

express.**Radius**

express   一个代表 **GlowFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片的第一个形状的发光效果的颜色和半径值。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.Glow.Color.RGB = RGB(0, 0, 255)
    shape.Glow.Radius = 20
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选的第一张幻灯片上第二个形状（文本框）中文本字体的发光效果的半径值。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(2)
    let font2 = shape.TextFrame2.TextRange.Font
    alert(font2.Glow.Radius)
}
```
