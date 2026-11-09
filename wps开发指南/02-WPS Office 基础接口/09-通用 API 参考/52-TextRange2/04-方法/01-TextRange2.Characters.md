# TextRange2.Characters

返回一个 **TextRange2** 对象，该对象代表指定的文本字符子集。只读。



## 语法

express.**Characters(Start, Length)**

express   一个代表 **TextRange2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | number（int 精度） | 返回的范围中的第一个字符。 |
| Length | 可选 | number（int 精度） | 要返回的字符数。 |

## 返回值

TextRange2

## 说明


如果同时省略 *Start* 和 *Length*，则返回的范围从指定范围中的第一个字符开始到最后一段结束。

如果指定 *Start* 但省略 *Length*，则返回的范围包含一个字符。

如果指定 *Length* 但省略 *Start*，则返回的范围从指定范围中的第一个字符开始。

如果 *Start* 大于指定文本中的字符数，则返回的范围将从指定范围中的最后一个字符开始。

如果 *Length* 大于从指定的开始字符到文本末尾的字符数，则返回的范围将包含所有这些字符。



## 示例


```JavaScript
/*本示例运行于演示组件，在活动演示文稿的第一张幻灯片上第二个形状（文本框）中添加文本，然后将第二个字符设置为偏移量为 20% 的下标字符。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let textRange2 = shape.TextFrame2.TextRange.InsertBefore("H2O")
    textRange2.Characters(2).Font.BaselineOffset = -0.2
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中前三个字符的文本。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    alert(textRange2.Characters(1, 3).Text)
}
```
