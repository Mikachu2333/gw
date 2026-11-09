# ParagraphFormat.FarEastLineBreakControl

如果已指定亚洲语言设置，则返回或设置该换行控制选项。可读/写。



## 语法

express.**FarEastLineBreakControl**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

MsoTriState

## 说明


 **FarEastLineBreakControl** 属性的值可以是下列 **MsoTriState** 常量之一：

| 常量 | 说明 |
| ------------ | ----------- |
| **msoFalse** | 没有选择换行控制选项。 |
| **msoTrue**  | 已选择换行控制选项。  |



## 示例


```JavaScript
/*本示例为活动演示文稿第一个幻灯片上第一个形状中的文本选择换行选项。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame.TextRange
    textRange.ParagraphFormat.FarEastLineBreakControl = msoTrue
}
```


```JavaScript
/*本示例判断活动窗口选定的（文本框）形状中文本段落是否选择换行控制选项，并通知用户。本示例假设已指定亚洲语言设置。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    let paragraphFormat = shape.TextFrame.TextRange.ParagraphFormat
    if (paragraphFormat.FarEastLineBreakControl == msoTrue) {
        alert("已选择换行控制选项")
    } else {
        alert("未选择换行控制选项")
    }
}
```
