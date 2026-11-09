# TextRange.IndentLevel

以 1 到 5 的整数返回或设置指定文本的缩进级别，其中 1 指示第一级段落不缩进。可读/写。
  


## 语法

express.**IndentLevel**

express   一个代表 **TextRange** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例缩进活动演示文稿第二张幻灯片的第二个形状中的第二段。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(2)
    let textRange = shape.TextFrame.TextRange
    textRange.Paragraphs(2).IndentLevel = 2
}
```


```JavaScript
/*本示例显示活动演示文稿第二张幻灯片的第一个形状中的第三段的缩进级别。*/
function test() {
    let shape = ActivePresentation.Slides.Item(2).Shapes.Item(1)
    let textRange = shape.TextFrame.TextRange
    alert(textRange.Paragraphs(3).IndentLevel)
}
```
