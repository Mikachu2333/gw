# CanvasShapes.BuildFreeform

建立任意多边形对象。返回一个 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/obj)** 对象，该对象表示正在建立的任意多边形。



## 语法

express.**BuildFreeform(EditingType, X1, Y1)**

express   一个代表 **CanvasShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EditingType | 必选 | MsoEditingType | _EditingType_ 参数可以是 **msoEditingAuto** 或 **msoEditingCorner** ；不能是 **msoEditingSmooth** 或 **msoEditingSymmetric** 。 |
| X1 | 必选 | number（float 精度） | 任意多边形第一个顶点相对于文档左边缘的位置（以磅为单位）。 |
| Y1 | 必选 | number（float 精度） | 任意多边形第一个顶点相对于文档顶端的位置（以磅为单位）。 |

## 返回值

FreeformBuilder

## 说明


使用 **[AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/member/AddNodes)** 方法将段添加到任意多边形。向该多边形添加至少一个段后，可使用 **ConvertToShape** 方法将 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/obj)** 对象转换为具有在 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/obj)** 对象中定义的几何形状描述的 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Shape/obj)** 对象。



## 示例


```JavaScript
/*本示例将一个具有五个顶点的任意多边形添加到活动文档上第一个绘图画布中，并将其转换为形状，然后设置该形状的前景填充色。*/
function test() {
    let builder = ActiveDocument.Shapes.Item(1).CanvasItems.BuildFreeform(msoEditingCorner, 360, 200)
    builder.AddNodes(msoSegmentCurve, msoEditingCorner, 380, 230, 400, 250, 450, 300)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 200)
    builder.AddNodes(msoSegmentLine, msoEditingAuto, 480, 400)
    builder.AddNodes(msoSegmentLine, msoEditingAuto, 360, 200)
    builder.ConvertToShape().Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例在第一个文档上第一个绘图画布中创建一个具有三个顶点的黄色任意多边形。*/
function test() {
    let builder = Documents.Item(1).Shapes.Item(1).CanvasItems.BuildFreeform(msoEditingSmooth, 380, 220)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 460, 260)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 320)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 380, 220)
    builder.ConvertToShape().Fill.ForeColor.RGB = RGB(255, 255, 0)

}
```
