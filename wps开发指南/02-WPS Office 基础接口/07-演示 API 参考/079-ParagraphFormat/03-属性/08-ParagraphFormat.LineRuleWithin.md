# ParagraphFormat.LineRuleWithin

确定是否将基线间的行距设为特定的磅数或行数。可读/写。



## 语法

express.**LineRuleWithin**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **LineRuleWithin** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明             |
| ------------ | -------------- |
| **msoFalse** | 将基线间的行距设为特定磅数。 |
| **msoTrue**  | 将基线间的行距设为特定行数。 |



## 示例


```JavaScript
/*本示例显示一个消息框，其中显示当前演示文稿第一张幻灯片第二个形状中文本的行距设置。*/
function test() {
    let textFrame = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame
    let paragraphFormat = textFrame.TextRange.ParagraphFormat
    let spaceWithin = paragraphFormat.SpaceWithin
    let lsUnits = ""
    if (paragraphFormat.LineRuleWithin == msoTrue) {
        lsUnits = " lines"
    } else {
        lsUnits = " points"
    }
    alert(`Current line spacing: ${spaceWithin}${lsUnits}`)
}
```


```JavaScript
/*本示例将活动窗口选定的第一个（文本框）形状的文本基线间的行距设为特定行数。*/
function test() {
    let textRange = ActiveWindow.Selection.ShapeRange.Item(1).TextFrame.TextRange
    textRange.ParagraphFormat.LineRuleWithin = msoTrue
}
```
