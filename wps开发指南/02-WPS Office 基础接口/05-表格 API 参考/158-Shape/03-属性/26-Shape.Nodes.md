# Shape.Nodes

返回一个 **[ShapeNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeNodes/obj)** 集合，它代表指定形状的几何描述。



## 语法

express.**Nodes**

express   一个代表 **Shape** 对象的变量。

## 类型

ShapeNodes

## 说明


此属性适用于代表任意多边形的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 或 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ShapeRange/obj)** 对象。



## 示例


```JavaScript
/*本示例在活动工作表中第三个形状的第四个结点后添加一个带有一段曲线的平滑结点。第三个形状必须为至少带有四个顶点的任意多边形。*/
function test() {
    let nodes = ActiveSheet.Shapes.Item(3).Nodes
    nodes.Insert(4, msoSegmentCurve, msoEditingSmooth, 210, 100)
}
```


```JavaScript
/*本示例显示第一张工作表中第一个形状的节点数量。*/
function test() {
    let shapes = Application.Worksheets.Item(1).Shapes
    alert(shapes.Item(1).Nodes.Count)
}
```
