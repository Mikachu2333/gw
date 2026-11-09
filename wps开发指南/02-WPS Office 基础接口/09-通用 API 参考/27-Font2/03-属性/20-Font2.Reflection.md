# Font2.Reflection

返回一个 **[ReflectionFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/ReflectionFormat/obj)** 对象，该对象代表指定文本字体的反射格式。只读。



## 语法

express.**Reflection**

express   一个代表 **Font2** 对象的变量。

## 类型

ReflectionFormat

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个形状（文本框）中文本字体的反射图像的透明度和模糊度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let font2 = shape.TextFrame2.TextRange.Font
    font2.Reflection.Transparency = 0.5
    font2.Reflection.Blur = 5
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中的文本字体的反射图像的大小。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.Font
    alert(font2.Reflection.Size)
}
```
