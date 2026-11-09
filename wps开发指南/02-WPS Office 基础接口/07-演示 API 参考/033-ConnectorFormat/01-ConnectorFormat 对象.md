# ConnectorFormat 对象

包含应用于连接符的属性和方法。

## 说明


连接符是用于连接其他两个形状的线，所连接的位置叫做连接结点。如果重新排列已连接的形状，那么连接符的几何形状将自动调整，以使重新排列的形状仍保持连接。

使用 **ConnectorFormat** 属性返回一个 **ConnectorFormat** 对象。使用 **[BeginConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/BeginConnect)** 和 **[EndConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/EndConnect)** 方法将连接符的两端连到文档中的其他形状。使用 **[RerouteConnections](#TODO)** 方法自动查找通过连接符相连的两个形状间的最短路径。使用 **[Connector](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ShapeRange/member/Connector)** 属性查看形状是否为连接符。

请注意，向 **Shapes** 集合添加一个连接符时会指定大小和位置，但当连接符的两端连到集合中的其他形状后，它的大小和位置会自动调整。因此，如果要将连接符连到其他形状，则最初指定的大小和位置是无用的。同样地，当连接一个连接符时，指定了形状上的连接位置；但在连接符连到形状后使用 **RerouteConnections** 方法会改变连接位置，使得最初选择的连接位置无用。

连接结点通常按下表所示的规则进行编号。

| **形状类型**                | **连接结点编号方案**           |
| ------------------- | ------------------ |
| 自选形状、艺术字、图片和 OLE 对象 | 连接结点从顶部开始按逆时针进行编号。 |
| 任意多边形               | 连接结点为顶点，与顶点编号相对应。  |


## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加两个矩形并且用曲线连接符连接二者。*/
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
}
```
要算出一个复杂形状上各连接结点的编号，可以打开宏录制器并对形状进行试验操作，然后查看录下的代码；也可以创建一个形状并选中它，然后运行以下示例。



```JavaScript
/*本示例将对活动窗口选定的第一个形状每个连接结点进行编号并连接一个连接符。*/
function test() {
    let shape = ActiveWindow.Selection.ShapeRange.Item(1)
    let x = shape.Left + shape.Width + 50
    let y = shape.Top + shape.Height + 50
    let slide = ActivePresentation.Slides.Item(1)
    for (let j = 1; j <= shape.ConnectionSiteCount; j++) {
        let connector = slide.Shapes.AddConnector(msoConnectorStraight, x, y, x + 50, y + 50)
        connector.ConnectorFormat.EndConnect(shape, j)
        connector.ConnectorFormat.Type = msoConnectorElbow
        connector.Line.ForeColor.RGB = RGB(255, 0, 0)
        let left = connector.Left
        let top = connector.Top
        let textbox = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, left, top, 36, 14)
        textbox.Fill.Visible = msoFalse
        textbox.Line.Visible = msoFalse
        textbox.TextFrame.TextRange.Text = j
    }
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [BeginConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/BeginConnect) | 将指定的连接符的起点连接到指定的形状上。 |
| [BeginDisconnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/BeginDisconnect) | 断开指定连接符的起点与其连接的形状之间的连接。 |
| [EndConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/EndConnect) | 将指定的连接符的终点连接到指定的形状上。 |
| [EndDisconnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/EndDisconnect) | 将指定的连接符终点与所连接的形状断开。该方法不改变该连接符的大小或位置。该连接符终点仍然在连接结点上，但已不再相连。使用 **[BeginDisconnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/BeginDisconnect)** 方法可将连接符的起点与形状断开。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |
| [BeginConnected](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/BeginConnected) | 决定指定连接符的始端是否与形状相连。只读。 |
| [BeginConnectedShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/BeginConnectedShape) | 返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象，该对象代表指定连接符的起点所连到的形状。只读。 |
| [BeginConnectionSite](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/BeginConnectionSite) | 返回一个整数，该整数指定连接符的始端所连接的连接结点。只读。 |
| [EndConnected](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/EndConnected) | 决定指定连接符的末端是否连接到形状。只读。 |
| [EndConnectedShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/EndConnectedShape) | 返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象，该对象表示指定连接符的末端所连到的形状。只读。 |
| [EndConnectionSite](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/EndConnectionSite) | 返回用于指定连接符末端所连接的连接结点的整数。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/member/Type) | 代表连接符的类型。可读/写。 |