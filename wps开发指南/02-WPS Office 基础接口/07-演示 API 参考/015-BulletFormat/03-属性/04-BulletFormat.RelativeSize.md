# BulletFormat.RelativeSize

返回或设置项目符号相对于段落中第一个文本字符的大小。可读/写。



## 语法

express.**RelativeSize**

express   一个代表 **BulletFormat** 对象的变量。

## 类型

number（float 精度）

## 说明


 **RelativeSize** 属性值为 0.25 到 4 的浮点值，表示项目符号大小会是文本字符大小的 25% 到 400%。



## 示例


```JavaScript
/*本示例为当前演示文稿第一张幻灯片的第二个形状设置项目符号格式。项目符号的大小是该段第一个文本字符的 125%。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(2)
    let BulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    BulletFormat.Visible = true
    BulletFormat.RelativeSize = 1.25
    BulletFormat.Character = 169
    BulletFormat.Font.Name = "Symbol"
    BulletFormat.Font.Color.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片的第一个形状的项目符号相对于段落中第一个文本字符的大小。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let bulletFormat = shape.TextFrame.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat.RelativeSize)
}
```
