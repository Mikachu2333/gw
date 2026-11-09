# ShapeRange.Delete

删除指定区域的形状。



## 语法

express.**Delete()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中新建的ShapeRange对象删除。*/
function test() {
    let shpRange = Application.ActiveDocument.Shapes.Range([1, 2])
    shpRange.Delete()
}
```


```JavaScript
/*本示例将第一个文档中新建的ShapeRange对象删除。*/
function test() {
    let shpRange = Application.Documents.Item(1).Shapes.Range([1, 2, 3])
    shpRange.Delete()
}
```
