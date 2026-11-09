# FreeformBuilder 对象

代表构建任意多边形时的几何形状。

## 说明


使用 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shapes/obj)** 或 **[CanvasShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/CanvasShapes/obj)** 对象的 **BuildFreeform** 方法可返回 **FreeformBuilder** 对象。使用 **[AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/member/AddNodes)** 方法可向任意多边形添加顶点。使用 **[ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/member/ConvertToShape)** 方法可创建在 **FreeformBuilder** 对象中定义的形状并将其添加到 **Shapes** 集合。


## 示例


```JavaScript
/*本示例将一个具有五个顶点的任意多边形添加到活动文档中，并设置该图像的前景填充色。*/
function test() {
    let freeformBuilder = ActiveDocument.Shapes.BuildFreeform(msoEditingCorner, 360, 200)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingCorner, 380, 230, 400, 250, 450, 300)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 200)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 480, 400)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 360, 200)
    freeformBuilder.ConvertToShape().Fill.ForeColor.RGB = RGB(0, 0, 0)
}
```


```JavaScript
/*本示例在第一个文档中创建一个蓝色任意多边形。*/
function test() {
    let freeformBuilder = Documents.Item(1).Shapes.BuildFreeform(msoEditingSmooth, 370, 230)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 470, 260)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 490, 330)
    freeformBuilder.ConvertToShape().Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/member/AddNodes) | 将新线段插入到正在创建的任意多边形的尾部，并添加顶点以定义此线段。 |
| [ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/member/ConvertToShape) | 创建一个图形，该图形具有指定对象的几何图形特征。返回一个 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象，该对象代表新图形。 |