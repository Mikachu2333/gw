# TextFrame.BreakForwardLink

在链接存在的情况下，断开指定文本框的前向链接。



## 语法

express.**BreakForwardLink()**

express   一个代表 **TextFrame** 对象的变量。

## 返回值

void

## 说明


如果将此方法应用于形状，且该形状位于一串与文本框架相链接的形状的中间位置，则会使链接断开，而形成两组链接的形状。但所有文本都将保留在第一组链接的形状中。



## 示例


```JavaScript
/*本示例新建一个文档，在文档中添加三个前后链接的文本框，然后断开第二个文本框后面的链接。*/
function test() {
    Documents.Add()
    let shape1 = ActiveDocument.Shapes.AddTextbox(msoTextOrientationHorizontal, InchesToPoints(1.5), InchesToPoints(0.5), InchesToPoints(1), InchesToPoints(0.5))
    shape1.TextFrame.TextRange.Text = "This is some text. This is some more text. This is even more text."
    let shape2 = ActiveDocument.Shapes.AddTextbox(msoTextOrientationHorizontal, InchesToPoints(1.5), InchesToPoints(1.5), InchesToPoints(1), InchesToPoints(0.5))
    let shape3 = ActiveDocument.Shapes.AddTextbox(msoTextOrientationHorizontal, InchesToPoints(1.5), InchesToPoints(2.5), InchesToPoints(1), InchesToPoints(0.5))
    shape1.TextFrame.Next = shape2.TextFrame
    shape2.TextFrame.Next = shape3.TextFrame
    alert("TextBoxes 1, 2, and 3 are linked.")
    shape2.TextFrame.BreakForwardLink()
}
```


```JavaScript
/*本示例断开所选形状后面的链接。*/
function test() {
    let textFrame = Selection.ShapeRange.TextFrame
    textFrame.BreakForwardLink()
}
```
