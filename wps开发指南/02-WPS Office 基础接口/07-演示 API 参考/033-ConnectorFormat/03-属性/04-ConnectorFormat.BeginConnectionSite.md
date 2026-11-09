# ConnectorFormat.BeginConnectionSite

返回一个整数，该整数指定连接符的始端所连接的连接结点。只读。



## 语法

express.**BeginConnectionSite**

express   一个代表 **ConnectorFormat** 对象的变量。

## 类型

number（int 精度）

## 说明


如果指定连接符的始端未连接到形状，该属性会产生错误。



## 示例


```JavaScript
/*本示例假定活动演示文稿的第一张幻灯片已经包含两个形状，且通过连接符“Conn1To2”相连。而示例中的代码会向第一张幻灯片中添加一个矩形框和一个连接符。这个新建的连接符起点将连接到与“Conn1To2”的起点相同的地方。终点则连接到新建的矩形框的第一个连接点上。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let shape = shapes.AddShape(msoShapeRectangle, 450, 190, 200, 100)
    shapes.AddConnector(msoConnectorCurve, 0, 0, 10, 10).Name = "Conn1To3"
    let connectorFormat = shapes.Item("Conn1To2").ConnectorFormat
    let beginConnSite1 = connectorFormat.BeginConnectionSite
    let beginConnShape1 = connectorFormat.BeginConnectedShape
    let connectorFormat2 = shapes.Item("Conn1To3").ConnectorFormat
    connectorFormat2.BeginConnect(beginConnShape1, beginConnSite1)
    connectorFormat2.EndConnect(shape, 1)
}
```


```JavaScript
/*本示例显示活动窗口选定的第一个连接符的始端所连接的连接结点数。*/
function test() {
    let connectorFormat = ActiveWindow.Selection.ShapeRange.Item(1).ConnectorFormat
    alert(connectorFormat.BeginConnectionSite)
}
```
