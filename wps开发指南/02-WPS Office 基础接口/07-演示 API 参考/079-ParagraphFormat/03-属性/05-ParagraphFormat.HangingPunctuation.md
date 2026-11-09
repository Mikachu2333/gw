# ParagraphFormat.HangingPunctuation

如果已指定亚洲语言设置，则返回或设置标点溢出边界选项。可读/写。



## 语法

express.**HangingPunctuation**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **HangingPunctuation** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量           | 说明           |
| ------------ | ------------ |
| **msoFalse** | 未选择标点溢出边界选项。 |
| **msoTrue**  | 选择标点溢出边界选项。  |



## 示例


```JavaScript
/*本示例允许活动演示文稿第一张幻灯片上第一个形状中文本段落的标点溢出边界。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.TextRange
    textRange.ParagraphFormat.HangingPunctuation = msoTrue
}
```


```JavaScript
/*本示例判断活动窗口选定的（文本框）形状中文本段落的标点是否可以溢出边界，并通知用户。本示例假设已指定亚洲语言设置。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    let paragraphFormat = shape.TextFrame.TextRange.ParagraphFormat
    if (paragraphFormat.FarEastLineBreakControl == msoTrue) {
        alert("允许标点溢出边界")
    } else {
        alert("禁止标点溢出边界")
    }
}
```
