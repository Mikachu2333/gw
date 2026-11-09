# ShapeRange.Apply

应用于使用 **PickUp** 方法复制的特定图形格式。



## 语法

express.**Apply()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 说明


如果以前没有使用 **PickUp** 方法复制 **ShapeRange** 对象的格式，则使用 **Apply** 方法会导致错误。



## 示例


```JavaScript
/*本示例复制活动文档中第一个形状的格式，并将复制的格式应用于该文档的第二个形状。*/
function test() {
    let shapes = ActiveDocument.Shapes
    shapes.Range(1).PickUp()
    shapes.Range(2).Apply()
}
```


```JavaScript
/*本示例复制第一个文档中第三个形状的格式，然后将复制的格式应用于该文档的所有形状。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    shapes.Range(3).PickUp()
    shapes.SelectAll()
    Selection.ShapeRange.Apply()
}
```
