# ParagraphFormat.WordWrap

如果 WPP 在指定文本段落的日本汉字字符中自动换行，则为 **msoTrue** 。可读/写。



## 语法

express.**WordWrap**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例将活动演示文稿中第一张幻灯片第二个形状中段落设置为自动换行。*/
function test() {
    let textRange = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame.TextRange
    textRange.ParagraphFormat.WordWrap = msoTrue
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的标题文本框的文本段落是否自动换行。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let paragraphFormat = slide.Shapes.Title.TextFrame.TextRange.ParagraphFormat
    alert(paragraphFormat.WordWrap == msoTrue)
}
```
