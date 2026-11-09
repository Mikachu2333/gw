# TextRange2.ParagraphFormat

返回一个 **ParagraphFormat** 对象，该对象代表指定文本的段落格式。只读。



## 语法

express.**ParagraphFormat**

express   一个代表 **TextRange2** 对象的变量。

## 类型

ParagraphFormat2

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个形状（文本框）中文本段落的段前、段内和段后行间距。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let paragraphFormat2 = shape.TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.LineRuleWithin = msoTrue
    paragraphFormat2.SpaceWithin = 1.4
    paragraphFormat2.LineRuleBefore = msoTrue
    paragraphFormat2.SpaceBefore = 1
    paragraphFormat2.LineRuleAfter = msoTrue
    paragraphFormat2.SpaceAfter = 2
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选形状（文本框）中文本段落的对齐方式是否为居中对齐。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    alert(textRange2.ParagraphFormat.Alignment == msoAlignCenter)
}
```
