# Shapes.AddConnector

创建一个连接符。返回一个代表新连接符的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。添加连接符时，它没有连接任何对象。使用 **BeginConnect** 和 **EndConnect** 方法可将连接符的头和尾连接到文档中的其他形状上。



## 语法

express.**AddConnector(Type, BeginX, BeginY, EndX, EndY)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | MsoConnectorType | 连接符的类型。 |
| BeginX | 必选 | number（float 精度） | 连接符的起点相对于幻灯片左边缘的水平位置（以磅为单位）。 |
| BeginY | 必选 | number（float 精度） | 连接符的起点相对于幻灯片上边缘的垂直位置（以磅为单位）。 |
| EndX | 必选 | number（float 精度） | 连接符的终点相对于幻灯片左边缘的水平位置（以磅为单位）。 |
| EndY | 必选 | number（float 精度） | 连接符的终点相对于幻灯片上边缘的垂直位置（以磅为单位）。 |

## 返回值

Shape

## 说明


将一个连接符连接到某个形状时，如果必要，该连接符的长度和位置会自动调整。因此，如果要将一个连接符连接到其他形状，则与添加该连接符时指定的位置和长度无关。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加两个矩形，然后用曲线连接符将它们连接起来。请注意，将连接符连接到矩形上时，连接符的长度和位置会自动调整；因此，它与添加标注时指定的位置和长度是无关的（长度不能为零）。*/
function test() {
    let shapes = ActivePresentation.Slides.Item(1).Shapes
    let shpFirst = shapes.AddShape(msoShapeRectangle, 100, 50, 200, 100)
    let shpSecond = shapes.AddShape(msoShapeRectangle, 300, 300, 200, 100)
    let shape = shapes.AddConnector(msoConnectorCurve, 0, 0, 100, 100)
    shape.ConnectorFormat.BeginConnect(shpFirst, 1)
    shape.ConnectorFormat.EndConnect(shpSecond, 1)
    shape.RerouteConnections()
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片中第一个和第二个形状用连接符将它们连接起来。*/
function test() {
    let shapes = Presentations.Item(1).Slides.Item(1).Shapes
    let shape = shapes.AddConnector(msoConnectorStraight, 100, 100, 200, 200)
    shape.ConnectorFormat.BeginConnect(shapes.Item(1), 2)
    shape.ConnectorFormat.EndConnect(shapes.Item(2), 2)
}
```
