# Shape.RerouteConnections

重置连接符，使其以最短的路径连接形状。重置时， **RerouteConnections** 方法可能会断开连接符的两端并将其重新连接到形状的其他位置。



## 语法

express.**RerouteConnections()**

express   一个代表 **Shape** 对象的变量。

## 返回值

void

## 说明


此方法将重排连接在指定形状上的所有连接符；如果指定的形状是连接符，会重排该连接符。

如果该方法应用于一个连接符，则只重置该连接符；如果该方法应用于一个已连接的形状，则重置该形状上所有的连接符。

请注意， **RerouteConnections** 方法用于调整连接符的大小和位置并决定要连接到哪个连接位置，因此最初为 _ConnectionSite_ 参数指定与 **BeginConnect** 和 **EndConnect** 方法一起使用的值是不相关的。



## 示例


```JavaScript
/*本示例将两个矩形添加到活动演示文稿的第一张幻灯片，用曲线连接符连接两个矩形，然后重置连接符使两个矩形间采用最短的路径。*/
function test() {
    let shapes = ActivePresentation.Slides(1).Shapes
    let firstRect = shapes.AddShape(msoShapeRectangle, 100, 50, 200, 100)
    let secondRect = shapes.AddShape(msoShapeRectangle, 300, 300, 200, 100)
    let newConnector = shapes.AddConnector(msoConnectorCurve, 0, 0, 100, 100)
    newConnector.ConnectorFormat.BeginConnect(firstRect, 1)
    newConnector.ConnectorFormat.EndConnect(secondRect, 1)
    newConnector.RerouteConnections()
}
```


```JavaScript
/*本示例将平行四边形和六边形添加到活动演示文稿的第一张幻灯片，用直线连接符连接两个形状，然后重排连接符使两个形状间采用最短的路径。*/
function test() {
    let shapes = ActivePresentation.Slides(1).Shapes
    let shape1 = shapes.AddShape(msoShapeParallelogram, 100, 50, 100, 80)
    let shape2 = shapes.AddShape(msoShapeHexagon, 200, 300, 100, 80)
    let newConnector = shapes.AddConnector(msoConnectorCurve, 0, 0, 100, 100)
    newConnector.ConnectorFormat.Type = msoConnectorStraight
    newConnector.ConnectorFormat.BeginConnect(shape1, 2)
    newConnector.ConnectorFormat.EndConnect(shape2, 3)
    newConnector.RerouteConnections()
}
```
