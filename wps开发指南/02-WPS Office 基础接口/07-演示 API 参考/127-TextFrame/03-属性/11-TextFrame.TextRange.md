# TextFrame.TextRange

返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表指定文本框架中的文本。只读。



## 语法

express.**TextRange**

express   一个代表 **TextFrame** 对象的变量。

## 类型

TextRange

## 说明


当演示文稿在幻灯片视图、普通视图、大纲视图、备注页视图或任何母版视图时，可从选定的内容中创建文本范围。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中的标题文本加粗。*/
function test() {
    ActivePresentation.Slides.Item(1).Shapes.Title.TextFrame.TextRange.Font.Bold = msoTrue
}
```


```JavaScript
/*本示例判断如果第一篇演示文稿中第一张幻灯片的第二个形状的文本为“test”，则将其选中。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    if (shape.TextFrame.TextRange.Text == "test") {
        shape.TextFrame.TextRange.Select()
    }
}
```
