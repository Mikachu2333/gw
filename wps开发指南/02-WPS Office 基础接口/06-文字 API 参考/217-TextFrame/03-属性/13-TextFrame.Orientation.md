# TextFrame.Orientation

返回或设置文本框架内的文字方向。可读写 **MsoTextOrientation** 类型。



## 语法

express.**Orientation**

express   一个代表 **TextFrame** 对象的变量。

## 类型

MsoTextOrientation

## 说明


根据您所选择或安装的语言支持（例如，美国英语），某些 **MsoTextOrientation** 常量可能不可用。

您可以设置文本框架或者恰好位于文本框架内的范围或所选内容的方向。有关文本框架和文本框之间的区别的信息，请参阅 **TextFrame** 对象。



## 示例


```JavaScript
/*本示例新建一篇文档，在文档中插入文字，接着使用这些文字创建一个文本框，然后设置该文本框架的方向，使其中的文字向上倾斜。*/
function test() {
    let document = Documents.Add()
    Selection.TypeText("This is some text.")
    document.Content.Select()
    Selection.CreateTextbox()
    document.Shapes.Item(1).TextFrame.Orientation = msoTextOrientationUpward
}
```


```JavaScript
/*本示例显示所选形状中文本框架内的文字方向是否为msoTextOrientationVerticalFarEast。*/
function test() {
    let textFrame = Selection.ShapeRange.TextFrame
    alert(textFrame.Orientation == msoTextOrientationVerticalFarEast)
}
```
