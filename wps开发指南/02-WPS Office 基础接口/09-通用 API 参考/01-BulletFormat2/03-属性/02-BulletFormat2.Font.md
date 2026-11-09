# BulletFormat2.Font

获取代表 **BulletFormat2** 对象的字符格式的 **Font2** 对象。只读。



## 语法

express.**Font**

express   一个代表 **BulletFormat2** 对象的变量。

## 类型

Font2

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本段落的项目符号的字体大小。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let bulletFormat2 = shape.TextFrame2.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat2.Font.Size)
}
```


```JavaScript
/*本示例运行于演示组件，将活动窗口上所选形状（文本框架）中文本段落的项目符号的字体设置为粗斜体。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let font2 = textFrame2.TextRange.ParagraphFormat.Bullet.Font
    font2.Bold = msoTrue
    font2.Italic = msoTrue
}
```
