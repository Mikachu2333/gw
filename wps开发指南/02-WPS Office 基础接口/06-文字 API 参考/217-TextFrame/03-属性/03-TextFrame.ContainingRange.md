# TextFrame.ContainingRange

返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** 对象，该对象代表一系列带有链接文本框架（包括指定文本框架）的形状的整个文字部分。只读。



## 语法

express.**ContainingRange**

express   一个代表 **TextFrame** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例对活动文档中名为“TextBox 1”的文本框架及所有链接至“TextBox 1”的文本框架的文本进行拼写检查。*/
function test() {
    let range = ActiveDocument.Shapes.Item("TextBox 1").TextFrame.ContainingRange
    range.CheckSpelling()
}
```


```JavaScript
/*本示例显示所选形状中的文本框架及所有链接至该形状中的文本框架的文本内容。*/
function test() {
    let range = Selection.ShapeRange.TextFrame.ContainingRange
    alert(range.Text)
}
```
