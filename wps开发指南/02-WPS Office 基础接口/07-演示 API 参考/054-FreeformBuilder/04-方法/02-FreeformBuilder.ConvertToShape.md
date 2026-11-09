# FreeformBuilder.ConvertToShape

创建一个具有指定 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/obj)** 对象的几何特性的形状。返回一个代表新形状的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象。



## 语法

express.**ConvertToShape()**

express   一个代表 **FreeformBuilder** 对象的变量。

## 返回值

Shape

## 说明


对于 **FreeformBuilder** 对象，至少要应用一次 [ **AddNodes** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/AddNodes) 方法，然后才能使用 **ConvertToShape** 方法。



## 示例


```JavaScript
/*本示例将一个具有五个顶点的任意多边形添加到活动演示文稿的第一张幻灯片中，并设置该图像的前景填充色。*/
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
/*本示例在活动窗口所选的第一张幻灯片中创建一个具有三个顶点的蓝色任意多边形。*/
function test() {
    let freeformBuilder = ActiveWindow.Selection.SlideRange.Item(1).Shapes.BuildFreeform(msoEditingSmooth, 370, 230)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 470, 260)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 490, 330)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 370, 230)
    freeformBuilder.ConvertToShape().Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```
