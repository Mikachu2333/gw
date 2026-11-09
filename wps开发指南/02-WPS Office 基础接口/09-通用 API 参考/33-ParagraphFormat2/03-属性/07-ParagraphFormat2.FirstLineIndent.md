# ParagraphFormat2.FirstLineIndent

获取或设置首行缩进或悬挂缩进的值（以磅值表示）。可读写。



## 语法

express.**FirstLineIndent**

express   一个代表 **ParagraphFormat2** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，将活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本段落的首行缩进设置为 10 磅。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let paragraphFormat2 = shapes.Item(1).TextFrame2.TextRange.ParagraphFormat
    paragraphFormat2.FirstLineIndent = 10
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口上所选形状（文本框）中文本段落的首行缩进。*/
function test() {
    let textRange2 = ActiveWindow.Selection.ShapeRange.TextFrame2.TextRange
    let paragraphFormat2 = textRange2.ParagraphFormat
    alert(paragraphFormat2.FirstLineIndent)
}
```
