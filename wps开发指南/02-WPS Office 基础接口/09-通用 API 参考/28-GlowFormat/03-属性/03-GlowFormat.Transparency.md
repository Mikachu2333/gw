# GlowFormat.Transparency

返回指定发光的透明度或者将其透明度设置为介于 0.0（不透明）和 1.0（透明）之间的值。可读/写。



## 语法

express.**Transparency**

express   一个代表 **GlowFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片的第一个形状的发光效果的主题颜色和透明度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.Glow.Color.ObjectThemeColor = msoThemeColorDark1
    shape.Glow.Transparency = 0.1
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选的第一张幻灯片上第二个形状（文本框）中文本字体的发光效果的透明度。*/
function test() {
    let shape = ActiveWindow.Selection.SlideRange.Item(1).Shapes.Item(2)
    let font2 = shape.TextFrame2.TextRange.Font
    alert(font2.Glow.Transparency)
}
```
