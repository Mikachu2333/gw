# Shape.Delete

删除指定的图形节点。



## 语法

express.**Delete()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档形状集合中的第一个形状。*/
function test() {
    Application.ActiveDocument.Shapes.Item(1).Delete(1)
}
```


```JavaScript
/*本示例判断如果第一个文档中第二个形状为矩形，则删除。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    if (shapes.Item(2).AutoShapeType == msoShapeRectangle) {
        shapes.Item(2).Delete(2)
    }
}
```
