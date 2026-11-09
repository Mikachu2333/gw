# BulletFormat2.StartValue

获取或设置项目符号列表的开始值。可读写。



## 语法

express.**StartValue**

express   一个代表 **BulletFormat2** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框架）中文本段落的项目符号的开始值。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let bulletFormat2 = textFrame2.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat2.StartValue)
}
```


```JavaScript
/*本示例运行于演示组件，为活动演示文稿的第一张幻灯片添加一个文本框，然后设置该文本框中的文本内容，最后设置该文本框中文本段落的项目符号的开始值和类型。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddTextbox(msoTextOrientationHorizontal, 0, 0, 100, 160)
    let textRange2 = shape.TextFrame2.TextRange
    textRange2.Text = "example"
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    bulletFormat2.StartValue = 3
    bulletFormat2.Type = msoBulletNumbered
}
```
