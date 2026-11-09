# ParagraphFormat2.Bullet

获取段落的 **BulletFormat2** 对象。只读。



## 语法

express.**Bullet**

express   一个代表 **ParagraphFormat2** 对象的变量。

## 类型

BulletFormat2

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本段落的项目符号相对于段落中第一个文本字符的大小设置为 1.25。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.Bullet.Visible = msoTrue
    paragraphFormat2.Bullet.RelativeSize = 1.25
}
```


```JavaScript
/*本示例运行于演示组件，将活动窗口上所选形状（文本框）的文本段落的项目符号的样式设置为 msoBulletAlphaLCParenBoth。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    paragraphFormat2.Bullet.Visible = msoTrue
    paragraphFormat2.Bullet.Style = msoBulletAlphaLCParenBoth
}
```
