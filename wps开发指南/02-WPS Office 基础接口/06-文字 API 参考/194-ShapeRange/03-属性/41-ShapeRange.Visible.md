# ShapeRange.Visible

如果指定对象或应用于该对象的格式是可见的，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，可读写。



## 语法

express.**Visible**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

MsoTriState

## 说明


如果可见性属性为 **msoFalse** ，某些方法和属性可能不可用



## 示例


```JavaScript
/*本示例先在第一个活动文档中创建ShapeRange对象，然后将该对象设置为不可见。*/
function test() {
    let shpRange = Documents.Item(1).Shapes.Range([1, 2])
    shpRange.Visible = msoFalse
}
```


```JavaScript
/*本示例将活动文档中所有形状设置为可见。*/
function test() {
    let shapes = ActiveDocument.Shapes
    shapes.SelectAll()
    Selection.ShapeRange.Visible = msoTrue
}
```
