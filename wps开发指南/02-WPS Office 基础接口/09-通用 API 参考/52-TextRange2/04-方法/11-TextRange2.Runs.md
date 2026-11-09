# TextRange2.Runs

获取一个 **TextRange2** 对象，该对象代表指定的文本域子集。文本域由具有相同字体属性的一些字符组成。只读。



## 语法

express.**Runs(Start, Length)**

express   一个代表 **TextRange2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Start | 可选 | number（int 精度） | 返回的范围中的第一个域。 |
| Length | 可选 | number（int 精度） | 要返回的域数。 |

## 返回值

TextRange2

## 说明


如果同时省略 _Start_ 和 _Length_，则返回的范围从指定范围中的第一个域开始到最后一段结束。

如果指定 _Start_ 但省略 _Length_，则返回的范围包含一个域。

如果指定 _Length_ 但省略 _Start_，则返回的范围从指定范围中的第一个域开始。

如果 _Start_ 大于指定文本中域的数量，则返回的范围从指定范围中的最后一个域开始。

如果 _Length_ 大于从指定的起始域到文本末尾的域数，则返回的范围包含所有这些域。

一个域包含从字体改变后的第一个字符到倒数第二个具有相同字体属性的字符之间的所有字符。以下句为例：

This _italic_ words is not bold.

在上句中，如果“This”后边的空格不是斜体，则第一个域由“This”构成（如果该空格为斜体，则第一个域仅包括前三个字符，即“Thi”）。类似地，仅当“italic”后边的空格为斜体时，第二个域由“italic”构成。



## 示例


```JavaScript
/*本示例运行于演示组件，判断如果活动演示文稿的第一张幻灯片上第一个形状（文本框）中第二个域的文本为斜体，则将该文本加粗。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange
    let font2 = textRange2.Runs(2).Font
    if (font2.Italic === msoTrue) {
        font2.Bold = msoTrue
    }
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选形状（文本框）中第一个域的文本。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    alert(textRange2.Runs(1, 1).Text)
}
```
