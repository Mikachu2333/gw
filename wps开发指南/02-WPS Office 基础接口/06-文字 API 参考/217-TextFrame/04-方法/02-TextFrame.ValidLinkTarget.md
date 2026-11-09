# TextFrame.ValidLinkTarget

确定一个形状的文本框是否可以链接到另一个形状的文本框。



## 语法

express.**ValidLinkTarget(TargetTextFrame)**

express   一个代表 **TextFrame** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| TargetTextFrame | 必选 | TextFrame | 要将当前文本框链接到的目标文本框。 |

## 返回值

Boolean

## 说明


如果 *TargetTextFrame* 是有效目标，则该方法返回 **True** ；如果 *TargetTextFrame* 已包含文字或已链接，或者该形状不支持附加文字，则返回 **False** 。



## 示例


```JavaScript
/*本示例判断如果在活动文档上第一和第二个形状的文本框能相互链接，则链接两个文本框。*/
function test() {
    let textFrame1 = ActiveDocument.Shapes.Item(1).TextFrame
    let textFrame2 = ActiveDocument.Shapes.Item(2).TextFrame
    if (textFrame1.ValidLinkTarget(textFrame2)) {
        textFrame1.Next = textFrame2
    }
}
```


```JavaScript
/*本示例判断如果所选形状中文本框可以链接到活动文档的第二个形状的文本框，则为所选形状中文本框添加文本。*/
function test() {
    let textFrame1 = Selection.ShapeRange.TextFrame
    let textFrame2 = ActiveDocument.Shapes.Item(2).TextFrame
    if (textFrame1.ValidLinkTarget(textFrame2)) {
        textFrame1.TextRange.InsertAfter("example")
    }
}
```
