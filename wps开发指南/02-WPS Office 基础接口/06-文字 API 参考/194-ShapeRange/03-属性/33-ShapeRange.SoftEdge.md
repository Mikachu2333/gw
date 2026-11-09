# ShapeRange.SoftEdge

返回一个 **SoftEdgeFormat** 对象，该对象代表形状区域的柔化边缘格式。只读。



## 语法

express.**SoftEdge**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

SoftEdgeFormat

## 示例


```JavaScript
/*本示例设置活动文档中第一个和第二个形状的柔化边缘效果的半径大小。*/
function test() {
    let shapeRange = ActiveDocument.Shapes.Range([1, 2])
    shapeRange.SoftEdge.Radius = 5
}
```


```JavaScript
/*本示例显示选中形状的柔化边缘效果的半径大小。*/
function test() {
    alert(Selection.ShapeRange.SoftEdge.Radius)
}
```
