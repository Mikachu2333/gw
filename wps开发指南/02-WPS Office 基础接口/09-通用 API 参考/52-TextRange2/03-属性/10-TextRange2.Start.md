# TextRange2.Start

获取一个 **Long** 类型的值，该值指示指定文本范围的起点。只读。



## 语法

express.**Start**

express   一个代表 **TextRange2** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例运行于演示组件，显示活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本范围的起点。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange
    alert(textRange2.Start)
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选形状（文本框）的文本范围的起点。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    alert(textRange2.Start)
}
```
