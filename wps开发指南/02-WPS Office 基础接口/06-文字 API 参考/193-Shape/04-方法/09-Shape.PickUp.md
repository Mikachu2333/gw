# Shape.PickUp

复制指定形状的格式。



## 语法

express.**PickUp()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 说明


用 **Apply** 方法可将复制的格式应用于另一个形状。



## 示例


```JavaScript
/*本示例首先复制活动文档上第一个形状的格式，然后将复制的形状格式应用于第二个形状。*/
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
