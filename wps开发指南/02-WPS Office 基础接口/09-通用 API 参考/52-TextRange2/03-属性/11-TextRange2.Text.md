# TextRange2.Text

获取或设置一个 **String** 类型的值，该值代表文本范围中的文本。可读/写。



## 语法

express.**Text**

express   一个代表 **TextRange2** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例运行于演示组件，在活动演示文稿的第一张幻灯片上第一个形状（文本框）的文本范围中添加文本。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange2 = shape.TextFrame2.TextRange
    textRange2.Text = "test"
}
```


```JavaScript
/*本示例运行于演示组件，显示活动窗口所选形状（文本框）的文本范围的文本。*/
function test() {
    let textFrame2 = ActiveWindow.Selection.ShapeRange.TextFrame2
    let textRange2 = textFrame2.TextRange
    alert(textRange2.Text)
}
```
