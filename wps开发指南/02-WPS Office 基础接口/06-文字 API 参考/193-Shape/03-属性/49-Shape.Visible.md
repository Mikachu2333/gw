# Shape.Visible

如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**Visible**

express   一个代表 **Shape** 对象的变量。

## 类型

MsoTriState

## 说明


如果 **Visible** 属性为 **msoFalse** ，则某些方法和属性可能无法使用。



## 示例


```JavaScript
/*本示例新建一篇文档，然后在文档中添加文本和一个矩形，同时将 WPS 设置为在打印文档时隐藏该矩形，然后在打印结束后再显示该图形。*/
function test() {
    let document = Documents.Add()
    Selection.TypeText("This is some sample text.")
    document.Shapes.AddShape(msoShapeRectangle, 200, 70, 150, 60)
    document.Shapes.Item(1).Visible = msoFalse
    document.PrintOut()
    document.Shapes.Item(1).Visible = msoTrue
}
```


```JavaScript
/*本示例将活动文档的第一个形状设置为不可见。*/
function test() {
    let shape = Application.ActiveDocument.Shapes.Item(1)
    shape.Visible = msoFalse
}
```
