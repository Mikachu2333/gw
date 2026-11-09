# TextRange.Font

返回一个代表字符格式的 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Font/obj)** 对象。只读。



## 语法

express.**Font**

express   一个代表 **TextRange** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*以下示例为当前演示文稿第一张幻灯片的第一个形状中的文本设置格式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let Font = shape.TextFrame.TextRange.Font
    Font.Size = 48
    Font.Name = "Palatino"
    Font.Bold = true
    Font.Color.RGB = RGB(255, 127, 255)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片的第二个形状中第二段的前两个字符设置为加粗。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(2)
    let textRange = shape.TextFrame.TextRange.Paragraphs(2).Characters(1, 2)
    textRange.Font.Bold = true
}
```
