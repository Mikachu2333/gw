# BulletFormat2.UseTextColor

决定是否将指定项目符号设置为段落中第一个文本字符的颜色。可读写。



## 语法

express.**UseTextColor**

express   一个代表 **BulletFormat2** 对象的变量。

## 类型

MsoTriState

## 示例


```JavaScript
/*本示例运行于演示组件，设置活动窗口上所选形状（文本框架）中文本的第一个字符的字体颜色，然后将该文本段落的项目符号的颜色设置为文本中第一个字符的颜色。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    textRange2.Characters(1, 1).Font.Fill.ForeColor.RGB = RGB(255, 0, 0)
    bulletFormat2.UseTextColor = msoTrue
}
```


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本段落的项目符号是否与该文本中第一个字符的颜色相同。*/
function test() {
    let textRange2 = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    alert(bulletFormat2.UseTextColor === msoTrue)
}
```
