# BulletFormat2.RelativeSize

返回或设置项目符号相对于段落中第一个文本字符的大小。可读写。



## 语法

express.**RelativeSize**

express   一个代表 **BulletFormat2** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框架）中文本段落的项目符号相对于段落中第一个文本字符的大小。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let bulletFormat2 = textFrame2.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat2.RelativeSize)
}
```


```JavaScript
/*本示例运行于演示组件，设置活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本段落的项目符号相对于段落中第一个文本字符的大小。*/
function test() {
    let textRange2 = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    bulletFormat2.RelativeSize = 1.5
}
```
