# BulletFormat2.Style

返回或设置代表项目符号样式的常数。可读写。



## 语法

express.**Style**

express   一个代表 **BulletFormat2** 对象的变量。

## 类型

MsoNumberedBulletStyle

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框架）中文本段落的项目符号的样式是否为msoBulletCircleNumDBPlain。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let bulletFormat2 = textFrame2.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat2.Style == msoBulletCircleNumDBPlain)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本段落的项目符号的样式。*/
function test() {
    let textRange2 = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    bulletFormat2.Style = msoBulletArabicPlain
}
```
