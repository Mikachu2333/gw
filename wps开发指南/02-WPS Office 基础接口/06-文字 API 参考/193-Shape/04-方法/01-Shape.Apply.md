# Shape.Apply

应用于使用 **PickUp** 方法复制的特定图形格式。



## 语法

express.**Apply()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 说明


如果以前没有使用 **PickUp** 方法复制 **Shape** 对象的格式，则使用 **Apply** 方法将导致出错。



## 示例


```JavaScript
/*本示例复制活动文档中第一个图形的格式，然后将其应用到同一文档的第二个图形。*/
function test() {
    ActiveDocument.Shapes.Item(1).PickUp()
    ActiveDocument.Shapes.Item(2).Apply()
}
```


```JavaScript
/*本示例将第一个文档第一个形状的格式应用于其它形状。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    shapes.Item(1).PickUp()
    for (let i = 2; i <= shapes.Count; i++) {
        shapes.Item(i).Apply()
    }
}
```
