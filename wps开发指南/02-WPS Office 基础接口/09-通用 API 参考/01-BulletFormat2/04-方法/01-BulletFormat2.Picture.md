# BulletFormat2.Picture

设置要用于项目符号列表中的项目符号的图形文件。



## 语法

express.**Picture(FileName)**

express   一个代表 **BulletFormat2** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| FileName | 必选 | string | 有效图形文件的文件名。 |

## 返回值

void

## 说明


有效图形文件包括带有以下扩展名的文件：.bmp、.cdr、.cgm、.drw、.dxf、.emf、.eps、.gif、.jpg、.jpeg、.pcd、.pct、.pcx、.pict、.png、.tga、.tiff、.wmf 和 .wpg。



## 示例


```JavaScript
/*本示例运行于演示组件，将活动窗口上所选形状（文本框架）中文本段落的项目符号的类型设置为msoBulletPicture，然后设置用于该项目符号的图形文件。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let bulletFormat2 = textFrame2.TextRange.ParagraphFormat.Bullet
    bulletFormat2.Type = msoBulletPicture
    bulletFormat2.Picture("D:\\示例\\img1.bmp")
}
```


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本段落的项目符号的类型设置为msoBulletPicture，然后设置用于该项目符号的图形文件。*/
function test() {
    let textRange2 = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    bulletFormat2.Type = msoBulletPicture
    bulletFormat2.Picture("D:\\示例\\img1.png")
}
```
