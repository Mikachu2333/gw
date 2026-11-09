# TextFrame2.TextRange

返回 **[TextRange2](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/TextRange2/obj)** 对象，该对象代表指定文本框中的文本。只读。



## 语法

express.**TextRange**

express   一个代表 **TextFrame2** 对象的变量。

## 类型

TextRange2

## 示例


```JavaScript
/*本示例将活动演示文稿第一张幻灯片的第一个形状的文本设置为单词“Hello!”。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    slide.Shapes.Item(1).TextFrame2.TextRange.Text = "Hello!"
}
```


```JavaScript
/*本示例设置活动窗口选定的第一个形状中文本的字体格式。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    let font = shape.TextFrame2.TextRange.Font
    font.Size = 48
    font.Name = "Palatino"
    font.Bold = msoTrue
}
```
