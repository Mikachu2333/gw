# TextRange.Lines

返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表指定的文本行子集。有关计算或浏览文本范围中文本行的信息，请参阅 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象。



## 语法

express.**Lines(Start, Length)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | number（int 精度） | 返回的范围中的第一行。 |
| Length | 可选 | number（int 精度） | 要返回的行数。 |

## 返回值

TextRange

## 说明


如果 Start 和 Length 都被忽略，则返回的范围从指定范围中的第一行开始，到最后一段结束。

如果指定 Start 但忽略 Length，则返回的范围包含一行文本。

如果指定 Length 但忽略 Start，则返回的范围从指定范围中的第一行开始。

如果 Start 大于指定文本中的行数，则返回的范围从指定范围中的最后一行开始。

如果 Length 大于从文本的指定起始行到末尾的行数，则返回的范围包含所有这些行。



## 示例


```JavaScript
/*本示例将当前演文示稿第一张幻灯片第二个形状中第二段的前两行设为斜体。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let textRange = shape.TextFrame.TextRange.Paragraphs(2)
    textRange.Lines(1, 2).Font.Italic = true
}
```


```JavaScript
/*本示例将第一个演文示稿的第一张幻灯片的第一个形状中第一段的第一行文本颜色设为绿色。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange.Paragraphs(1)
    textRange.Lines(1, 1).Font.Color.RGB = RGB(0, 255, 0)
}
```
