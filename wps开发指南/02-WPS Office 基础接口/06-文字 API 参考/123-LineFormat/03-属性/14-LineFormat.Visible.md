# LineFormat.Visible

如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**Visible**

express   一个代表 **LineFormat** 对象的变量。

## 类型

MsoTriState

## 说明


如果 **Visible** 属性为 **msoFalse** ，则某些方法和属性可能无法使用。



## 示例


```JavaScript
/*本示例将活动文档的第一个形状的边框线条设置为不可见。*/
function test() {
    ActiveDocument.Shapes.Item(1).Line.Visible = msoFalse
}
```


```JavaScript
/*本示例将所选形状的边框线条设置为可见，并将该线条的前景填充色设置为半透明的红色。*/
function test() {
    let lineFormat = Selection.ShapeRange.Line
    lineFormat.Visible = msoTrue
    lineFormat.ForeColor.RGB = RGB(255, 0, 0)
    lineFormat.Transparency = 0.5
}
```
