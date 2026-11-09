# BulletFormat2.Visible

获取或设置指定项目符号是否可见的值。可读写。



## 语法

express.**Visible**

express   一个代表 **BulletFormat2** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例运行于演示组件，将活动窗口上所选形状（文本框架）中文本段落的项目符号设置为可见，然后设置该项目符号的样式。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    bulletFormat2.Visible = msoTrue
    bulletFormat2.Style = msoBulletAlphaLCParenBoth
}
```


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本段落的项目符号是否可见。*/
function test() {
    let textRange2 = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    alert(bulletFormat2.Visible === msoTrue)
}
```
