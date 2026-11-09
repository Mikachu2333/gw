# CanvasShapes.AddConnector

返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象，该对象代表画布上两个形状间的连线。



## 语法

express.**AddConnector(Type, BeginX, BeginY, EndX, EndY)**

express   一个代表 **CanvasShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 必选 | MsoConnectorType | 连接符的类型。 |
| BeginX | 必选 | number（float 精度） | 标记连接符的起点的水平位置。 |
| BeginY | 必选 | number（float 精度） | 标记连接符的起点的垂直位置。 |
| EndX | 必选 | number（float 精度） | 标记连接符的终点的水平位置。 |
| EndY | 必选 | number（float 精度） | 标记连接符的终点的垂直位置。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例在新文档的新画布上添加一个直接连接符，并设置该直线的线条背景色。*/
function test() {
    let document = Application.Documents.Add()
    // Add drawing canvas to new document
    let shape = document.Shapes.AddCanvas(150, 150, 200, 300)
    // Add connector to the drawing canvas
    shape.CanvasItems.AddConnector(msoConnectorStraight, 150, 150, 200, 200).Line.BackColor.RGB = RGB(0, 0, 0)
}
```


```JavaScript
/*本示例在活动文档上第一个绘图画布中添加一个曲线连接符，并设置该曲线的线条背景色和前景色。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1).CanvasItems.AddConnector(msoConnectorCurve, 100, 100, 200, 200)
    shape.Line.BackColor.RGB = RGB(255, 255, 0)
    shape.Line.ForeColor.RGB = RGB(255, 0, 0)
}
```
