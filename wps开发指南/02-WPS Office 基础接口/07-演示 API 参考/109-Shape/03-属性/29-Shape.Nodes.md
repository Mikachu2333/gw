# Shape.Nodes

返回一个 **[ShapeNodes](#TODO)** 集合，该集合代表指定形状的几何描述。适用于表示任意多边形图形的 **Shape** 对象。



## 语法

express.**Nodes**

express   一个代表 **Shape** 对象的变量。

## 类型

ShapeNodes

## 示例


```JavaScript
/*本示例在活动演示文稿第一张幻灯片的第三个形状的第四个节点的后面添加一个带有一条曲线的平滑节点。第三个形状必须为至少带有四个节点的任意多边形。*/
function test() {
    let nodes = ActivePresentation.Slides.Item(1).Shapes.Item(3).Nodes
    nodes.Insert(4, msoSegmentCurve, msoEditingSmooth, 210, 100)
}
```


```JavaScript
/*本示例显示活动演示文稿第一张幻灯片的第一个形状的节点数量。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    alert(shapes.Item(1).Nodes.Count)
}
```
