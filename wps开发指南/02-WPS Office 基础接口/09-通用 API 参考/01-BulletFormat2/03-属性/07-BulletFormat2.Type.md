# BulletFormat2.Type

获取和设置代表项目符号类型的常数。可读写。



## 语法

express.**Type**

express   一个代表 **BulletFormat2** 对象的变量。

## 类型

MsoBulletType

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框架）中文本段落的项目符号的类型是否为msoBulletNumbered。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let bulletFormat2 = textFrame2.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat2.Type == msoBulletNumbered)
}
```


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本段落的项目符号的类型设置为msoBulletPicture，然后设置该项目符号的图形文件。*/
function test() {
    let textRange2 = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    bulletFormat2.Type = msoBulletPicture
    bulletFormat2.Picture("D:\\示例\\img1.png")
}
```
