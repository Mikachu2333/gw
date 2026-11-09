# FreeformBuilder 对象

代表在创建任意多边形时使用的几何形状。

## 说明


使用 [ **BuildFreeform** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/member/BuildFreeform) 方法可返回一个 **FreeformBuilder** 对象。使用 [ **AddNodes** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/AddNodes) 方法可为任意多边形添加节点。使用 [ **ConvertToShape** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/ConvertToShape) 方法可创建在 **FreeformBuilder** 对象中定义的形状并将其添加到 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shapes/obj)** 集合中。


## 示例


```JavaScript
/*本示例将一个具有四段的任意多边形添加到活动演示文稿的第一张幻灯片中，并设置该图像的前景填充色。*/
function test() {
    let freeformBuilder = ActivePresentation.Slides.Item(1).Shapes.BuildFreeform(msoEditingCorner, 360, 200)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingCorner, 380, 230, 400, 255, 450, 300)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 200)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 480, 400)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 360, 200)
    freeformBuilder.ConvertToShape().Fill.ForeColor.RGB = RGB(0, 0, 0)
}
```


```JavaScript
/*本示例向活动窗口所选的第一张幻灯片中创建一个蓝色任意多边形。*/
function test() {
    let freeformBuilder = ActiveWindow.Selection.SlideRange.Item(1).Shapes.BuildFreeform(msoEditingSmooth, 370, 230)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 470, 260)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 490, 330)
    freeformBuilder.ConvertToShape().Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/AddNodes) | 将新线段插入到正在创建的任意多边形的尾部，并添加顶点以定义此线段。可以多次使用该方法向正在创建的任意多边形添加节点。添加完节点后，使用 **[ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/ConvertToShape)** 方法创建刚才定义的任意多边形。要向创建好的任意多边形添加节点，请使用 **[ShapeNodes](#TODO)** 集合的 **[Insert](#TODO)** 方法。 |
| [ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/ConvertToShape) | 创建一个具有指定 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/obj)** 对象的几何特性的形状。返回一个代表新形状的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Application/obj)** 对象，该对象表示指定对象的创建者。 |