# BulletFormat.Character

返回或设置在指定文本中用作项目符号的 Unicode 字符值。可读/写。



## 语法

express.**Character**

express   一个代表 **BulletFormat** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例为活动演示文稿中第一张幻灯片的第二个形状设置项目符号字符。*/
function test() {
    let textFrame = ActivePresentation.Slides.Item(1).Shapes.Item(2).TextFrame
    let bulletFormat = textFrame.TextRange.ParagraphFormat.Bullet
    bulletFormat.Character = 8226
    bulletFormat.Visible = true
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第一个形状的项目符号的 Unicode 字符值。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    bulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat.Character)
}
```
