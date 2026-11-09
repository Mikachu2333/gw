# TextRange.Start

返回指定文本区域内第一个字符相对于该文本所在形状内第一个字符的位置。只读。



## 语法

express.**Start**

express   一个代表 **TextRange** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示当前演示文稿第一张幻灯片第一个形状的第五段的第一个字符相对于该文本所在形状内第一个字符的位置。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange.Paragraphs(5)
    alert(textRange.Start)
}
```


```JavaScript
/*本示例判断如果第一个演示文稿第一张幻灯片第一个形状的第三个字符相对于该文本所在形状内第一个字符的位置大于 1，则将该字符加粗。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange.Characters(3, 1)
    if (textRange.Start > 1) {
        textRange.Font.Bold = true
    }
}
```
