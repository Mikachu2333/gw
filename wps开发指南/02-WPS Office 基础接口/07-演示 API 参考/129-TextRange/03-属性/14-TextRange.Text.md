# TextRange.Text

返回或设置一个 **String** 类型值，该值代表指定对象中包含的文本。可读/写。



## 语法

express.**Text**

express   一个代表 **TextRange** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置当前演示文稿第一张幻灯片中标题的文本和字形。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Title
    let textRange = shape.TextFrame.TextRange
    textRange.Text = "Welcome!"
    textRange.Font.Italic = true
}
```


```JavaScript
/*本示例显示第一个演示文稿第一张幻灯片中标题的文本。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Title
    let textRange = shape.TextFrame.TextRange
    alert(textRange.Text)
}
```
