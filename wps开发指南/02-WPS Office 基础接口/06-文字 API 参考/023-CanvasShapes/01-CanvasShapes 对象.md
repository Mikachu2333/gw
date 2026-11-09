# CanvasShapes 对象

使用 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 或 **[ShapeRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ShapeRange/obj)** 对象的 **CanvasItems** 属性返回 **CanvasShapes** 集合。

## 说明


要在画布上添加形状，请使用 **CanvasShapes** 集合的下列方法： **[AddCallout](#TODO)** 、 **[AddConnector](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddConnector)**  **[AddCurve](#TODO)** 、 **[AddLabel](#TODO)** 、 **[AddLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddLine)** 、 **[AddPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddPicture)** 、 **[AddPolyline](#TODO)** 、 **[AddShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddShape)** 、 **[AddTextbox](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddTextbox)** 、 **[AddTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddTextEffect)** 或 **[BuildFreeform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/BuildFreeform)** 。


## 示例


```JavaScript
/*本示例先将画布添加到活动文档中，然后将三个形状添加到画布上。*/
function test() {
    //Adds a new canvas to the document
    let shape = ActiveDocument.Shapes.AddCanvas(100, 75, 50, 75)
    let canvasShapes = shape.CanvasItems

    //Adds shapes to the CanvasShapes collection
    canvasShapes.AddShape(msoShapeRectangle, 0, 0, 50, 50)
    canvasShapes.AddShape(msoShapeOval, 5, 5, 40, 40)
    canvasShapes.AddShape(msoShapeIsoscelesTriangle, 0, 25, 50, 50)
}
```
使用 **CanvasItems** (_index_) 返回 **CanvasShapes** 集合中的单个形状（其中 _index_ 为名称或索引编号）。



```JavaScript
/*本示例设置活动文档上第一个绘图画布中第二个形状的前景填充色和边框前景色，然后垂直翻转该形状。*/
function test() {
    let shape = ActiveDocument.Shapes.Item(1).CanvasItems.Item(2)
    shape.Line.ForeColor.RGB = RGB(50, 0, 255)
    shape.Fill.ForeColor.RGB = RGB(50, 0, 255)
    shape.Flip(msoFlipVertical)
}
```
每个形状在被创建时即获得一个默认名称。例如，如果在文档中添加三个不同形状，其名称可能是“矩形 2”、“文本框 3”和“椭圆 4”。可使用 **Name** 属性来引用默认名称或给形状赋予一个更有意义的名称。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddConnector](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddConnector) | 返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象，该对象代表画布上两个形状间的连线。 |
| [AddLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddLine) | 在绘图画布上添加一条直线。返回一个代表该直线的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象，并将其添加到 **CanvasShapes** 集合。 |
| [AddPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddPicture) | 在绘图画布上添加一幅图片。返回一个 **Shape** 对象，该对象代表图片并将其添加至 **CanvasShapes** 集合。 |
| [AddShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddShape) | 在绘图画布上添加一个自选图形。返回一个代表该自选图形的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象。 |
| [AddTextEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddTextEffect) | 在绘图画布上添加一个艺术字形状。返回一个表示该艺术字的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象。 |
| [AddTextbox](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/AddTextbox) | 在绘图画布上添加一个文本框。返回一个表示该文本框的 **Shape** 对象。 |
| [BuildFreeform](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/BuildFreeform) | 建立任意多边形对象。返回一个 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/obj)** 对象，该对象表示正在建立的任意多边形。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/Item) | 返回集合中的单个 **Shape** 对象。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/Range) | 返回一个 **ShapeRange** 对象。 |
| [SelectAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/SelectAll) | 选择画布中的所有形状。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/member/Count) | 返回一个 **Long** 类型的值，该值代表指定集合中画布图形的数量。只读。 |