# ConnectorFormat.BeginDisconnect

断开指定连接符的起点与其连接的形状之间的连接。



## 语法

express.**BeginDisconnect()**

express   一个代表 **ConnectorFormat** 对象的变量。

## 返回值

void

## 说明


此方法不改变该连接符的大小或位置：该连接符起点仍然在连接结点上，但已不再相连。使用 **[EndDisconnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/EndDisconnect)** 方法可将连接符的终点与形状断开连接。



## 示例


```JavaScript
/*本示例向当前演示文稿的第一张幻灯片中添加两个矩形框，并用连接符连接它们，且自动地把连接符的路径修改为最短路径，然后断开连接符与矩形框之间的连接。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let shape1 = shapes.AddShape(msoShapeRectangle, 100, 50, 200, 100)
    let shape2 = shapes.AddShape(msoShapeRectangle, 300, 300, 200, 100)
    let shape3 = shapes.AddConnector(msoConnectorCurve, 0, 0, 0, 0)
    let connectorFormat = shape3.ConnectorFormat
    connectorFormat.BeginConnect(shape1, 1)
    connectorFormat.EndConnect(shape2, 1)
    shape3.RerouteConnections()
    connectorFormat.BeginDisconnect()
    connectorFormat.EndDisconnect()
}
```


```JavaScript
/*本示例断开活动窗口选定的连接符的起点与其连接的形状之间的连接。*/
function test() {
    let connectorFormat = ActiveWindow.Selection.ShapeRange.Item(1).ConnectorFormat
    connectorFormat.BeginDisconnect()
}
```
