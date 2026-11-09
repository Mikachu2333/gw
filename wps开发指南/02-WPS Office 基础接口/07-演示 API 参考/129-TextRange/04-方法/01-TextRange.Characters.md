# TextRange.Characters

返回一个 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象，该对象代表指定的文本字符子集。有关计算或浏览一段文本中的字符的详细信息，请参阅 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象。



## 语法

express.**Characters(Start, Length)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | number（int 精度） | 返回的范围中的第一个字符。 |
| Length | 可选 | number（int 精度） | 要返回的字符数。 |

## 返回值

TextRange

## 说明


如果 Start 和 Length 都被忽略，则返回的范围从指定范围中的第一个字符开始，到最后一段结束。

如果指定 Start 但忽略 Length，则返回的范围包含一个字符。

如果指定 Length 但忽略 Start，则返回的范围从指定范围中的第一个字符开始。

如果 Start 大于指定文本中的字符数，则返回的范围从指定范围中的最后一个字符开始。

如果 Length 大于从文本的指定开始字符到末尾的字符数，则返回的范围包含所有这些字符。



## 示例


```JavaScript
/*本示例设置当前演示文稿中第一张幻灯片的第二个形状的文本，并将第二个字符设为偏移 20% 的下标。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let textRange = shape.TextFrame.TextRange.InsertBefore("H2O")
    textRange.Characters(2).Font.BaselineOffset = -0.2
}
```


```JavaScript
/*本示例将活动演示文稿第一张幻灯片上第二个形状的所有下标字符设为加粗。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame.TextRange
    for (let i = textRange.Characters().Count; i > 0; i--) {
        let font = textRange.Characters(i).Font
        if (font.Subscript) {
            font.Bold = true
        }
    }
}
```
