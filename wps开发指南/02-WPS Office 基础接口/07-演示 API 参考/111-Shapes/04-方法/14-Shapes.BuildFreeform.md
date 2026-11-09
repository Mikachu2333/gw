# Shapes.BuildFreeform

建立一个任意多边形对象。返回一个 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/obj)** 对象，该对象代表正在建立的任意多边形。



## 语法

express.**BuildFreeform(EditingType, X1, Y1)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EditingType | 必选 | MsoEditingType | 第一个节点的编辑属性。 |
| X1 | 必选 | number（float 精度） | 任意多边形第一个节点相对于幻灯片左边缘的水平位置（以磅为单位）。 |
| Y1 | 必选 | number（float 精度） | 任意多边形第一个节点相对于幻灯片上边缘的垂直位置（以磅为单位）。 |

## 返回值

FreeformBuilder

## 说明


使用 **[AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/AddNodes)** 方法可向任意多边形添加线段。当您向任意多边形中添加了至少一条线段后，就可以用 **[ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FreeformBuilder/member/ConvertToShape)** 方法将 **FreeformBuilder** 对象转化成 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Shape/obj)** 对象，该对象具有已在 **FreeformBuilder** 对象中定义的几何形状描述。



## 示例


```JavaScript
/*本示例向活动演示文稿的第一张幻灯片中添加带有四条线段的任意多边形。*/
function test() {
    let slide = ActivePresentation.Slides.Item(1)
    let freeformBuilder = slide.Shapes.BuildFreeform(msoEditingCorner, 360, 200)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingCorner, 380, 230, 400, 250, 450, 300)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 200)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 480, 400)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 360, 200)
    freeformBuilder.ConvertToShape().Fill.BackColor.RGB = RGB(0, 255, 0)
}
```


```JavaScript
/*本示例向第一个演示文稿的第二张幻灯片中添加带有三条线段的任意多边形。*/
function test() {
    let slide = Presentations.Item(1).Slides.Item(2)
    let freeformBuilder = slide.Shapes.BuildFreeform(msoEditingAuto, 100, 100)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 200, 100)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 200, 200)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 100, 100)
    let shape = freeformBuilder.ConvertToShape()
    shape.Fill.BackColor.RGB = RGB(0, 100, 0)
}
```
