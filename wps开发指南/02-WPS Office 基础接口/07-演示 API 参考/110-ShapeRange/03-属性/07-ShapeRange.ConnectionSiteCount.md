# ShapeRange.ConnectionSiteCount

返回指定形状中的连结点的数量。只读。



## 语法

express.**ConnectionSiteCount**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加两个矩形，并且用两个连接符连接这两个矩形。两个连接符的起点都连接到第一个矩形的第一个连接位置，两个连接符的终点分别连接到第二个矩形的第一个和最后一个连接位置。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let shape1 = shapes.AddShape(msoShapeRectangle, 100, 50, 200, 100)
    let shape2 = shapes.AddShape(msoShapeRectangle, 300, 300, 200, 100)

    let lastsite = shapes.Range(shape2.Name).ConnectionSiteCount

    let conector1Format = shapes.AddConnector(msoConnectorCurve, 0, 0, 100, 100).ConnectorFormat
    conector1Format.BeginConnect(shape1, 1)
    conector1Format.EndConnect(shape2, 1)

    let conector2Format = shapes.AddConnector(msoConnectorCurve, 0, 0, 100, 100).ConnectorFormat
    conector2Format.BeginConnect(shape1, 1)
    conector2Format.EndConnect(shape2, lastsite)
}
```


```JavaScript
/*本示例显示活动窗口上选中形状的连结点的数量。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.ConnectionSiteCount)
}
```
