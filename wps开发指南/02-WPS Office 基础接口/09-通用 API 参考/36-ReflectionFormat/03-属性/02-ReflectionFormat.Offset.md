# ReflectionFormat.Offset

获取或设置形状的反射图像的间隔量（以磅为单位）。可读/写。



## 语法

express.**Offset**

express   一个代表 **ReflectionFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动窗口选定形状的反射图像的间隔量（以磅为单位）。*/
function test() {
    let reflectionFormat = ActiveWindow.Selection.ShapeRange.Reflection
    reflectionFormat.Offset = 5
}
```


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片的第二个（文本框）形状中文本字体的反射图像的间隔量。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let font2 = shape.TextFrame2.TextRange.Font
    alert(font2.Reflection.Offset + " 磅")
}
```
