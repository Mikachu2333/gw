# ShapeRange.Ungroup

取消指定形状范围中所有组合形状的组合，分解指定形状或形状范围中图片和 OLE 对象的组合，将取消组合后的形状以单个 **ShapeRange** 对象的形式返回。



## 语法

express.**Ungroup()**

express   一个代表 **ShapeRange** 对象的变量。

## 返回值

ShapeRange

## 说明


由于将组合形状作为单个对象来处理，对形状进行组合和取消组合将会改变 **Shapes** 集合中项目的数量，并且改变集合中取消组合的形状后面的项目的索引号。



## 示例


```JavaScript
/*本示例取消活动文档中第一个和第二个组合形状的组合。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    if (shapeRange.Type == msoGroup) {
        shapeRange.Ungroup()
    }
}
```


```JavaScript
/*本示例取消选中组合形状的组合。*/
function test() {
    Selection.ShapeRange.Ungroup()
}
```
