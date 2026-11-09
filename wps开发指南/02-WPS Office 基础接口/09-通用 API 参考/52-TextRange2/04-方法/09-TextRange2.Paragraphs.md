# TextRange2.Paragraphs

获取一个 **TextRange2** 对象，该对象代表指定的文本段落子集。只读。



## 语法

express.**Paragraphs(Start, Length)**

express   一个代表 **TextRange2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | number（int 精度） | 返回的范围中的第一段。 |
| Length | 可选 | number（int 精度） | 要返回的段落数。 |

## 返回值

TextRange2

## 说明


如果 *Start* 和 *Length* 都被忽略，则返回的范围从指定范围中的第一段开始，到最后一段结束。

如果指定 *Start* 而忽略 *Length*，则返回的范围包含一个段落。

如果指定 *Length 而忽略 *Start*，返回的范围从指定范围的第一段开始。

如果 *Start* 大于指定文本的段落数，返回的范围从指定范围的最后一段开始。

如果 *Length* 大于从指定起始段落到文字结尾的段落数，返回的范围将包含所有这些段落。



## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本中第二个段落的文字设置为斜体。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange.Paragraphs(2)
    textRange2.Font.Italic = msoTrue
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选形状（文本框）中文本的前两个段落的文本边界框的高度和宽度。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange.Paragraphs(1, 2)
    alert(`高度：${textRange2.BoundHeight} 磅\n宽度：${textRange2.BoundWidth} 磅`)
}
```
