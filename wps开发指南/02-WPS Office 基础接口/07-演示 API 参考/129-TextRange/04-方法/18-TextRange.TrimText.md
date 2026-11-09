# TextRange.TrimText

返回一个 **TextRange** 对象，该对象代表除去结尾空格的指定文本。



## 语法

express.**TrimText()**

express   一个代表 **TextRange** 对象的变量。

## 返回值

TextRange

## 示例


```JavaScript
/*本示例在活动演示文稿的第一张幻灯片的第二个形状中添加文本，然后显示消息框，该消息框中显示整理前和整理后的字符串。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame.TextRange
    textRange.Text = "   Text to trim   "
    alert(`Untrimmed: "${textRange.Text}"`)
    alert(`Trimmed: "${textRange.TrimText().Text}"`)
}
```


```JavaScript
/*本示例将第一篇演示文稿的第一张幻灯片中第一个形状的第一段文本除去尾随空格，并将其复制到剪切板。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange.Paragraphs(1)
    textRange.TrimText().Copy()
}
```
