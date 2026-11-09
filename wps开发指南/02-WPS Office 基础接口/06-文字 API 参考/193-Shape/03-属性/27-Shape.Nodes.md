# Shape.Nodes

返回一个 **ShapeNodes** 集合，该集合代表指定形状的几何描述。



## 语法

express.**Nodes**

express   一个代表 **Shape** 对象的变量。

## 类型

ShapeNodes

## 示例


```JavaScript
/*本示例在活动文档的第三个形状的第四个节点的后面添加一个带有一条曲线的平滑节点。第三个形状必须为至少带有四个节点的任意多边形。*/
function test() {
    let shapeNodes = ActiveDocument.Shapes.Item(3).Nodes
    shapeNodes.Insert(4, msoSegmentCurve, msoEditingSmooth, 210, 100)
}
```


```JavaScript
/*本示例显示第一个文档中第一个形状的节点数量。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    alert(shapes.Item(1).Nodes.Count)
}
```
