# ConnectorFormat.EndConnect

将指定的连接符的终点连接到指定的形状上。



## 语法

express.**EndConnect(ConnectedShape, ConnectionSite)**

express   一个代表 **ConnectorFormat** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ConnectedShape | 必选 | Shape | 要连接到连接符终点的形状。指定的 **Shape** 对象必须与连接符在同一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合中。 |
| ConnectionSite | 必选 | number（int 精度） | 由 _ConnectedShape_ 指定的形状上的连接结点。必须是一个介于 1 和指定形状的 **ConnectionSiteCount** 属性的返回值之间的整数。如果希望连接符自动查找它所连接的两个形状间的最短路径，请为此参数指定一个有效整数，并且在连接符的两端连接到形状之后使用 **RerouteConnections** 方法。 |

## 返回值

void

## 说明


如果该连接符的终点已经连接到另一个形状，则断开该连接；如果该连接符的终点没有位于指定的连接位置，此方法将它移到该位置，并调整连接符的大小和位置。使用 **BeginConnect** 方法可将连接符的起点连到形状上。

将连接符连接到某个对象以后，该连接符的大小和位置将在必要时进行自动调整。



## 示例


```JavaScript
/*本示例向当前演示文稿的第一张幻灯片中添加两个矩形框，并用曲线连接符连接它们。请注意，对 RerouteConnections 方法的调用使得在 EndConnect 方法和 BeginConnect 方法中所指定的 ConnectionSite 参数值不相关联。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let shapes = slide.Shapes
    let shape1 = shapes.AddShape(msoShapeRectangle, 100, 50, 200, 100)
    let shape2 = shapes.AddShape(msoShapeRectangle, 300, 300, 200, 100)
    let shape3 = shapes.AddConnector(msoConnectorCurve, 0, 0, 100, 100)
    let connectorFormat = shape3.ConnectorFormat
    connectorFormat.BeginConnect(shape1, 1)
    connectorFormat.EndConnect(shape2, 1)
    shape3.RerouteConnections()
}
```


```JavaScript
/*本示例将新建的连接符的终点附加到活动窗口选定的第一张幻灯片的第一个形状。*/
function test() {
    let slide = ActiveWindow.Selection.SlideRange.Item(1)
    let shape1 = slide.Shapes.Item(1)
    let shape2 = slide.Shapes.AddConnector(msoConnectorElbow, 0, 0, 80, 80)
    shape2.ConnectorFormat.EndConnect(shape1, 1)
}
```
