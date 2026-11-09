# Shape.Ungroup

取消组合指定形状中的所有组合形状。



## 语法

express.**Ungroup()**

express   一个代表 **Shape** 对象的变量。

## 返回值

ShapeRange

## 说明


此方法分解指定形状中的图片和 OLE 对象并将取消组合后的形状作为单个 **ShapeRange** 对象返回。

因为将组合形状作为单个对象处理，所以对形状进行组合或取消组合操作时，将会更改 **Shapes** 集合中项的数目，并更改集合中受影响的项之后的项的索引号。



## 示例


```JavaScript
/*本示例将活动文档中所有的形状取消组合。其中第一个循环先记录了所有形状的名称，示例中两个for循环也可改为用一个for of方式遍历所有形状。*/
function test() {
    let shapes = ActiveDocument.Shapes
    let shapeNames = []
    for (let i = 1; i <= shapes.Count; ++i) {
        shapeNames.push(shapes.Item(i).Name)
    }
    for (let i = 0; i < shapeNames.length; ++i) {
        shapes.Item(shapeNames[i]).Ungroup()
    }
}
```


```JavaScript
/*本示例将活动文档中所有的组合形状取消组合。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Shapes.Count; i++) {
        if (ActiveDocument.Shapes.Item(i).Type == msoGroup) {
            ActiveDocument.Shapes.Item(i).Ungroup()
        }
    }
}
```
