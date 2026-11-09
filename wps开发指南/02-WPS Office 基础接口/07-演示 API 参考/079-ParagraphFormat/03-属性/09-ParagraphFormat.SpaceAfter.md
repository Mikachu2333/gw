# ParagraphFormat.SpaceAfter

以磅或行为单位返回或设置指定文本中每段最后一行后的间距大小。可读/写。



## 语法

express.**SpaceAfter**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿的文本（第一张幻灯片上第二个形状中）中每个段落后的间距设为 6 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let paragraphFormat = shape.TextFrame.TextRange.ParagraphFormat
    paragraphFormat.LineRuleAfter = msoFalse
    paragraphFormat.SpaceAfter = 6
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的标题文本框中的文本每段最后一行后的间距大小。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let paragraphFormat = slide.Shapes.Title.TextFrame.TextRange.ParagraphFormat
    alert(paragraphFormat.SpaceAfter)
}
```
