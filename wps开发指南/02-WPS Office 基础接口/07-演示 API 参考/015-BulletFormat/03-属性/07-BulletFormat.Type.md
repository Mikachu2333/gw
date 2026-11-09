# BulletFormat.Type

代表项目符号的类型。可读/写。
  


## 语法

express.**Type**

express   一个代表 **BulletFormat** 对象的变量。

## 类型

PpBulletType

## 说明


| **Type** 属性的值可以是下列 **PpBulletType** 常量之一 |
| ---------------------- |
| **ppBulletMixed**      |
| **ppBulletNone**       |
| **ppBulletNumbered**   |
| **ppBulletPicture**    |
| **ppBulletUnnumbered** |



## 示例


```JavaScript
/*本示例设置活动演示文稿中第一张幻灯片的第一个形状的项目符号类型。*/
function test() {
    let textFrame = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame
    let bulletFormat = textFrame.TextRange.ParagraphFormat.Bullet
    bulletFormat.Type = ppBulletMixed
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片的第一个形状的项目符号类型是否为编号项目符号。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let bulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat.Type == ppBulletNumbered)
}
```
