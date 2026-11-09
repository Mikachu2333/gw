# ParagraphFormat.SpaceWithin

以磅或行为单位返回或设置指定文本中基准行之间的距离。可读/写。



## 语法

express.**SpaceWithin**

express   一个代表 **ParagraphFormat** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿的第二张幻灯片上第二个形状中的文本的行间距设为 21 磅。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(2)
    let paragraphFormat = shape.TextFrame.TextRange.ParagraphFormat
    paragraphFormat.LineRuleWithin = msoFalse
    paragraphFormat.SpaceWithin = 21
}
```


```JavaScript
/*本示例显示活动窗口选定的第一张幻灯片的标题文本框的文本中基准行之间的距离。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let paragraphFormat = slide.Shapes.Title.TextFrame.TextRange.ParagraphFormat
    alert(paragraphFormat.SpaceWithin)
}
```
