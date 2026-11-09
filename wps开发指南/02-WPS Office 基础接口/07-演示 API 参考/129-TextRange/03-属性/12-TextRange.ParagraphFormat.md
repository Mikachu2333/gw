# TextRange.ParagraphFormat

返回一个 **ParagraphFormat** 对象，该对象代表指定文本的段落格式。只读。



## 语法

express.**ParagraphFormat**

express   一个代表 **TextRange** 对象的变量。

## 类型

ParagraphFormat

## 示例


```JavaScript
/*以下示例设置当前演示文稿第一张幻灯片第二个形状中每段的段前、段内和段后行间距。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let paragraphFormat = shape.TextFrame.TextRange.ParagraphFormat
    paragraphFormat.LineRuleWithin = msoTrue
    paragraphFormat.SpaceWithin = 1.4
    paragraphFormat.LineRuleBefore = msoTrue
    paragraphFormat.SpaceBefore = 0.25
    paragraphFormat.LineRuleAfter = msoTrue
    paragraphFormat.SpaceAfter = 0.75
}
```


```JavaScript
/*本示例设置当前演示文稿第一张幻灯片第一个形状中每段的项目符号的样式。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let bulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    bulletFormat.Style = ppBulletCircleNumWDBlackPlain
}
```
