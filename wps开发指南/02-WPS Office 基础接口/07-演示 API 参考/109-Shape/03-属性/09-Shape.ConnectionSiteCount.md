# Shape.ConnectionSiteCount

返回指定形状中的连结点的数量。只读。



## 语法

express.**ConnectionSiteCount**

express   一个代表 **Shape** 对象的变量。

## 类型

number（int 精度）

## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片上添加两个矩形，并且用两个连接符连接这两个矩形。两个连接符的起点都连接到第一个矩形的第一个连接位置，两个连接符的终点分别连接到第二个矩形的第一个和最后一个连接位置。*/
function test() {
    let slide = Application.ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let firstRect = shapes.AddShape(msoShapeRectangle, 100, 50, 200, 100)
    let secondRect = shapes.AddShape(msoShapeRectangle, 300, 300, 200, 100)
    let lastsite = secondRect.ConnectionSiteCount
    let Con1 = shapes.AddConnector(msoConnectorCurve, 0, 0, 100, 100).ConnectorFormat
    Con1.BeginConnect(firstRect, 1)
    Con1.EndConnect(secondRect, 1)
    let Con2 = shapes.AddConnector(msoConnectorCurve, 0, 0, 100, 100).ConnectorFormat
    Con2.BeginConnect(firstRect, 1)
    Con2.EndConnect(secondRect, lastsite)
}
```


```JavaScript
/*本示例首先向活动演示文稿的第一张幻灯片添加一个三角形，然后显示形状中的连结点的数量。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.AddShape(msoShapeRightTriangle, 10, 10, 50, 50)
    alert(shape.ConnectionSiteCount)
}
```
