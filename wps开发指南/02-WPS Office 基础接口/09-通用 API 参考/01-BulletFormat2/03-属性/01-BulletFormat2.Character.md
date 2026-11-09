# BulletFormat2.Character

获取或设置在指定文本中用作项目符号的 Unicode 字符值。可读写。



## 语法

express.**Character**

express   一个代表 **BulletFormat2** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本用作项目符号的 Unicode 字符值。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let bulletFormat2 = shape.TextFrame2.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat2.Character)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动窗口上所选的第一张幻灯片的第一个形状（文本框架）中文本用作项目符号的 Unicode 字符值。*/
function test() {
    let shapes = ActiveWindow.Selection.SlideRange.Item(1).Shapes
    let bulletFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat.Bullet
    bulletFormat2.Character = 100
}
```
