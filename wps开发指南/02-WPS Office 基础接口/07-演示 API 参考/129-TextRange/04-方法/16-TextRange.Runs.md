# TextRange.Runs

返回一个 **TextRange** 对象，该对象代表指定的文本域子集。文本域由具有相同字体属性的一些字符组成。
  


## 语法

express.**Runs(Start, Length)**

express   一个代表 **TextRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | number（int 精度） | 返回的范围中的第一个域。 |
| Length | 可选 | number（int 精度） | 要返回的域数。 |

## 返回值

TextRange

## 说明


如果 Start 和 Length 都被忽略，则返回的范围从指定范围中的第一个域开始，到最后一段结束。

如果指定 Start 但忽略 Length ，则返回的范围包含一个域。

如果指定 Length 但忽略 Start ，则返回的范围从指定范围中的第一个域开始。

如果 Start 大于指定文本中域的数量，则返回的范围从指定范围中的最后一个域开始。

如果 Length 大于从指定起始域到文本末尾的域数，则返回的范围包含所有这些域。

一个域包含从字体改变后的第一个字符到倒数第二个具有相同字体属性的字符之间的所有字符。以下面的句子为例：

This _italic_ word is not **bold** .

在上句中，如果“This”后边的空格不是斜体，则第一个域由“This”构成（如果该空格为斜体，则第一个域仅包括前三个字符，即“Thi”）。类似地，仅当“italic”后边的空格为斜体时，第二个域由“italic”构成。

有关计算或浏览文本范围中域的详细信息，请参阅 **[TextRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/TextRange/obj)** 对象。



## 示例


```JavaScript
/*如果当前演示文稿的第一张幻灯片上第二个形状中第二个域已经设为倾斜，则本示例将其设为加粗倾斜。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let textRange = shape.TextFrame.TextRange
    if (textRange.Runs(2).Font.Italic == msoTrue) {
        textRange.Runs(2).Font.Bold = msoTrue
    }
}
```


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片中第二个形状的第二个域的文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    alert(shape.TextFrame.TextRange.Runs(2, 1).Text)
}
```
