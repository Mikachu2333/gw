# TextFrame.TextRange

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表指定文本框架中的文本。



## 语法

express.**TextRange**

express   一个代表 **TextFrame** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例在活动文档中添加一个文本框，然后在文本框中添加文字。*/
function test() {
    let shape = ActiveDocument.Shapes.AddTextbox(msoTextOrientationHorizontal, 100, 100, 300, 200)
    shape.TextFrame.TextRange.Text = "Test Box"
}
```


```JavaScript
/*本示例在活动文档上名为“TextBox 1”的文本框中添加文字。*/
function test() {
    ActiveDocument.Shapes.Item("TextBox 1").TextFrame.TextRange.InsertAfter("New Text")
}
```


```JavaScript
/*本示例显示活动文档中名为“TextBox 1”的文本框的文字。*/
function test() {
    alert(ActiveDocument.Shapes.Item("TextBox 1").TextFrame.TextRange.Text)
}
```
