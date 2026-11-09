# ShapeRange.ConnectorFormat

返回 **[ConnectorFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ConnectorFormat/obj)** 对象，包含连接符格式属性。适用于代表连接符的 **Shape** 或 **ShapeRange** 对象。只读。



## 语法

express.**ConnectorFormat**

express   一个代表 **ShapeRange** 对象的变量。

## 类型

ConnectorFormat

## 示例


```JavaScript
/*本示例向活动演示文稿第一张幻灯片中添加两个矩形，并用一个连接符连接这两个矩形，然后断开矩形间的连接符。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let shape1 = shapes.AddShape(msoShapeRectangle, 100, 50, 200, 100)
    let shape2 = shapes.AddShape(msoShapeRectangle, 300, 300, 200, 100)
    let connectorShape = shapes.AddConnector(msoConnectorCurve, 0, 0, 0, 0)
    let connectorFormat = shapes.Range(connectorShape.Name).ConnectorFormat
    connectorFormat.BeginConnect(shape1, 1)
    connectorFormat.EndConnect(shape2, 1)
    connectorFormat.BeginDisconnect()
    connectorFormat.EndDisconnect()
}
```


```JavaScript
/*本示例显示活动窗口上选中连接符的类型是否为msoConnectorCurve。*/
function test() {
    alert(ActiveWindow.Selection.ShapeRange.ConnectorFormat.Type == msoConnectorCurve)
}
```
