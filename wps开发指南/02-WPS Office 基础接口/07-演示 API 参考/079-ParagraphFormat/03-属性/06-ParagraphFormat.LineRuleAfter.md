# ParagraphFormat.LineRuleAfter

确定是否将每段最后一行后面的行距设为特定的磅数或行数。可读/写。



## 语法

express.**LineRuleAfter**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **LineRuleAfter** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明                   |
| ------------ | -------------------- |
| **msoFalse** | 将每段最后一行之后的行距设为特定的磅数。 |
| **msoTrue**  | 将每段最后一行之后的行距设为特定的行数。 |



## 示例


```JavaScript
/*本示例在显示一个消息框，其中显示当前演示文稿第一张幻灯片第二个形状中文本段落后的间距设置。*/
function test() {
    let textFrame = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame
    let paragraphFormat = textFrame.TextRange.ParagraphFormat
    let spaceAfter = paragraphFormat.SpaceAfter
    let str = ""
    if (paragraphFormat.LineRuleAfter == msoTrue) {
        str = " lines"
    } else {
        str = " points"
    }
    alert(`Current spacing after paragraphs: ${spaceAfter}${str}`)
}
```


```JavaScript
/*本示例将活动窗口选定的第一个（文本框）形状的文本每段最后一行之后的行距设为特定的行数。*/
function test() {
    let textRange = ActiveWindow.Selection.ShapeRange.Item(1).TextFrame.TextRange
    textRange.ParagraphFormat.LineRuleAfter = msoTrue
}
```
