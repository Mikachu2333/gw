# ConnectorFormat 对象

包含应用于连接符的属性和方法。

## 说明


连接符是用于连接其他两个形状的线，所连接的位置叫做连接结点。如果重新排列已连接的形状，那么连接符的几何形状将自动调整，以使重新排列的形状仍保持连接。

连接结点通常按下表所示的规则进行编号。

| 形状类型                | 连接结点标号方案           |
| ------------------- | ------------------ |
| 自选形状、艺术字、图片和 OLE 对象 | 连接结点从顶部开始按逆时针进行编号。 |
| 任意多边形               | 连接结点为顶点，与顶点编号相对应。  |

使用 **ConnectorFormat** 属性可返回 **ConnectorFormat** 对象。使用 **BeginConnect** 和 **EndConnect** 方法可将连接符的两端连到文档中的其他形状。使用 **RerouteConnections** 方法可自动查找通过连接符连接的两个形状间的最短路径。使用 **Connector** 属性可查看形状是否为连接符。

请注意，虽然向 **Shapes** 集合添加连接符时，对其设置了大小和位置，但将连接符的起点和终点连接到其他形状时，连接符的大小和位置将会自动调整。因而，如果打算用连接符连接其他形状，那么对其设置的初始大小和位置就没有什么实际意义。同样，用连接符连接其他形状时，将指定要连接的形状上的连接结点，但将连接符连接好之后，用 **RerouteConnections** 方法可能会改变连接符所连接的连接结点，使开始时选定的连接结点变得没有意义。  

要算出一个复杂形状上各连接结点的编号，可以打开宏录制器并对形状进行试验操作，然后查看录下的代码；也可以创建一个形状并选中它，然后运行以下示例。这段代码将对每个连接结点进行编号并连接一个连接符。


## 示例


```JavaScript
/*本示例将对活动工作表所选形状的每个连接结点进行编号并连接一个连接符。*/
function test() {
    ActiveSheet.Shapes.SelectAll()
    let shape = Selection.ShapeRange.Item(1)
    let bx = shape.Left + shape.Width + 50
    let by = shape.Top + shape.Height + 50
    let count = shape.ConnectionSiteCount
    for (let j = 1; j <= count; j++) {
        let connector = ActiveSheet.Shapes.AddConnector(msoConnectorStraight, bx, by, bx + 50, by + 50)
        connector.ConnectorFormat.EndConnect(shape, j)
        connector.ConnectorFormat.Type = msoConnectorElbow
        connector.Line.ForeColor.RGB = RGB(255, 0, 0)
        let l = connector.Left
        let t = connector.Top
        let textbox = ActiveSheet.Shapes.AddTextbox(msoTextOrientationHorizontal, l, t, 36, 14)
        textbox.Fill.Visible = false
        textbox.Line.Visible = false
        textbox.TextFrame.Characters().Text = j
    }
}
```


```JavaScript
/*下例向第一张工作表中添加两个矩形并且用曲线连接符连接矩形。*/
function test() {
    let worksheet = Application.Worksheets.Item(1)
    let s = worksheet.Shapes
    let firstRect = s.AddShape(msoShapeRectangle, 100, 50, 200, 100)
    let secondRect = s.AddShape(msoShapeRectangle, 300, 300, 200, 100)
    let c = s.AddConnector(msoConnectorCurve, 0, 0, 0, 0)
    c.ConnectorFormat.BeginConnect(firstRect, 1)
    c.ConnectorFormat.EndConnect(secondRect, 1)
    c.RerouteConnections()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [BeginConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/BeginConnect) | 将指定的连接符的起点连接到指定的形状上。如果在连接符的起点与其他形状之间已经有了连接，那么该已有的连接将中断。如果连接符的起点不在所需的连接结点上，本方法将把连接符的起点移到该连接结点，并对连接符的大小和位置作相应的调整。可用 **EndConnect** 方法将连接符的终点连接到某一形状上。 |
| [BeginDisconnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/BeginDisconnect) | 使指定的连接符的起点与其所连接的形状脱离。本方法并不修改连接符的尺寸和位置：连接符的起点仍保留在原来所连接的连接结点的位置，但与该连接结点之间不再有连接。可用 **EndDisconnect** 方法使连接符的终点与某一形状脱离。 |
| [EndConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/EndConnect) | 将指定的连接符的终点连接到指定的形状上。如果在连接符的终点与其他形状之间已经有了连接，那么该已有的连接将中断。如果连接符的终点不在所需的连接结点，本方法将把连接符的终点移到该连接结点，并对连接符的大小和位置作相应的调整。可用 **BeginConnect** 方法将连接符的起点连接到某一形状上。 |
| [EndDisconnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/EndDisconnect) | 将指定连接符的末端从连接到的形状中分离出来。该方法不改变连接符的大小或位置，连接符的终点仍保持在连接位置上，但已不再连接。可以使用 **BeginDisconnect** 方法使连接符的起点与某一形状分离。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [BeginConnected](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/BeginConnected) | 如果指定的连接符的起点已连接到了某一形状上，则该属性值为 **msoTrue** 。 **MsoTriState** 类型，只读。 |
| [BeginConnectedShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/BeginConnectedShape) | 返回一个 **Shape** 对象，该对象代表指定连接符的起点所连到的形状。只读。 |
| [BeginConnectionSite](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/BeginConnectionSite) | 返回一个整数，该整数指定连接符起点的连接结点。 **Long** 类型，只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [EndConnected](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/EndConnected) | 如果该属性值为 **msoTrue** ，则指定的连接符的终点已连接到了某一形状上。 **MsoTriState** 类型，只读。 |
| [EndConnectedShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/EndConnectedShape) | 返回一个 **Shape** 对象，该对象表示指定连接符的终点所连到的形状。只读。 |
| [EndConnectionSite](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/EndConnectionSite) | 返回一个整数，该整数指定连接符终点的连接结点。 **Long** 类型，只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConnectorFormat/member/Type) | 返回或设置一个 **MsoConnectorType** 值，它代表连接符格式类型。 |