# ParagraphFormat.Alignment

以指定的段落格式返回或设置每个段落的对齐方式。可读/写。



## 语法

express.**Alignment**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

PpParagraphAlignment

## 说明


 **Alignment** 属性的值可以是下列 **PpParagraphAlignment** 常量之一：

| 常量 |

| ------------------------- |
| **ppAlignCenter**         |
| **ppAlignDistribute**     |
| **ppAlignJustify**        |
| **ppAlignJustifyLow**     |
| **ppAlignLeft**           |
| **ppAlignmentMixed**      |
| **ppAlignRight**          |
| **ppAlignThaiDistribute** |



## 示例


```JavaScript
/*本示例将当前演示文稿第一张幻灯片第二个形状中的段落向左对齐。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    shape.TextFrame.TextRange.ParagraphFormat.Alignment = ppAlignLeft
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的标题文本框中的文本段落对齐方式是否为居中对齐。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let paragraphFormat = slide.Shapes.Title.TextFrame.TextRange.ParagraphFormat
    alert(paragraphFormat.Alignment == ppAlignCenter)
}
```
