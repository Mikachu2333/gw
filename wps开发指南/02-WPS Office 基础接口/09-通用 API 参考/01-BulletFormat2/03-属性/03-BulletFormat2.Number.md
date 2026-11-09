# BulletFormat2.Number

获取段落的项目符号数目。只读。



## 语法

express.**Number**

express   一个代表 **BulletFormat2** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框架）中文本段落的项目符号的数量。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let bulletFormat2 = textFrame2.TextRange.ParagraphFormat.Bullet
    alert(bulletFormat2.Number)
}
```


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框架）中文本段落的项目符号的数量插入到文本范围的末尾。*/
function test() {
    let textRange2 = ActivePresentation.Slides.Item(1).Shapes.Item(1).TextFrame2.TextRange
    let bulletFormat2 = textRange2.ParagraphFormat.Bullet
    textRange2.InsertAfter("\n" + bulletFormat2.Number)
}
```
