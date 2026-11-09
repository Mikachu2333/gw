# ParagraphFormat.TextDirection

返回或设置指定段落的文本方向。可读/写。



## 语法

express.**TextDirection**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

PpDirection

## 说明


默认值取决于已选择或安装的语言支持。

 **TextDirection** 属性的值可以是下列 **PpDirection** 常量之一：

| 常量 |
| -------------------------- |
| **ppDirectionLeftToRight** |
| **ppDirectionMixed**       |
| **ppDirectionRightToLeft** |



## 示例


```JavaScript
/*本示例显示活动演示文稿中第一张幻灯片第二个形状中段落的文本方向是否为ppDirectionLeftToRight。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame.TextRange
    alert(textRange.ParagraphFormat.TextDirection == ppDirectionLeftToRight)
}
```


```JavaScript
/*本示例将活动窗口选定的第一张幻灯片的标题文本框段落的文本方向设置为ppDirectionRightToLeft。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let paragraphFormat = slide.Shapes.Title.TextFrame.TextRange.ParagraphFormat
    paragraphFormat.TextDirection = ppDirectionRightToLeft
}
```
