# ConnectorFormat.EndDisconnect

将指定连接符的末端从连接到的形状中分离出来。该方法不改变连接符的大小或位置，连接符的终点仍保持在连接位置上，但已不再连接。可以使用 **BeginDisconnect** 方法使连接符的起点与某一形状分离。



## 语法

express.**EndDisconnect()**

express   一个代表 **ConnectorFormat** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例向第一张工作表中添加两个矩形，用一个连接符连接这两个矩形，并自动将连接符路径修改为最短路径，然后断开矩形间的连接符。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    let s = worksheet.Shapes
    let firstRect = s.AddShape(msoShapeRectangle, 100, 50, 200, 100)
    let secondRect = s.AddShape(msoShapeRectangle, 300, 300, 200, 100)
    let c = s.AddConnector(msoConnectorCurve, 0, 0, 0, 0)
    c.ConnectorFormat.BeginConnect(firstRect, 1)
    c.ConnectorFormat.EndConnect(secondRect, 1)
    c.RerouteConnections()
    c.ConnectorFormat.BeginDisconnect()
    c.ConnectorFormat.EndDisconnect()
}
```


```JavaScript
/*本示例使活动工作表中第四个形状（连接符）的终点与其所连接的形状脱离*/
function test() {
    let shapes = ActiveSheet.Shapes
    let shape4 = shapes.Item(4)
    shape4.ConnectorFormat.EndDisconnect()
}
```
