# ParagraphFormat2.SpaceBefore

获取或设置指定段落的段前间距（以磅为单位）。可读写。



## 语法

express.**SpaceBefore**

express   一个代表 **ParagraphFormat2** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本段落的段前间距设置为 10 磅。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.LineRuleBefore = msoFalse
    paragraphFormat2.SpaceBefore = 10
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）的文本段落的段前间距。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    paragraphFormat2.LineRuleBefore = msoFalse
    alert(paragraphFormat2.SpaceBefore + " 磅")
}
```
