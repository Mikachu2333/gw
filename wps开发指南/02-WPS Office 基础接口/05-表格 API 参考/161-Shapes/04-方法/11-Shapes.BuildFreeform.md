# Shapes.BuildFreeform

建立一个任意多边形对象。返回一个 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/obj)** 对象，该对象代表正在创建的任意多边形。用 **[AddNodes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/AddNodes)** 方法向任意多边形添加线段。如果任意多边形中已包含了一个以上的线段，则可用 **[ConvertToShape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FreeformBuilder/member/ConvertToShape)** 方法将 **FreeformBuilder** 对象转换为 **[Shape](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shape/obj)** 对象，该对象将具有在 **FreeformBuilder** 对象中定义的几何属性。



## 语法

express.**BuildFreeform(EditingType, X1, Y1)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EditingType | 必选 | MsoEditingType | 第一个节点的编辑属性。 |
| X1 | 必选 | number（float 精度） | 任意图形中第一个节点相对于文档左上角的位置（以磅为单位）。 |
| Y1 | 必选 | number（float 精度） | 任意图形中第一个节点相对于文档左上角的位置（以磅为单位）。 |

## 返回值

FreeformBuilder

## 示例


```JavaScript
/*本示例将一个有五个顶点的黑色任意多边形添加到第一张工作表中。*/
function test() {
    let builder = Worksheets.Item(1).Shapes.BuildFreeform(msoEditingCorner, 360, 200)
    builder.AddNodes(msoSegmentCurve, msoEditingCorner, 380, 230, 400, 250, 450, 300)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 200)
    builder.AddNodes(msoSegmentLine, msoEditingAuto, 480, 400)
    builder.AddNodes(msoSegmentLine, msoEditingAuto, 360, 200)
    let s = builder.ConvertToShape()
    s.Fill.ForeColor.RGB = RGB(0, 0, 0)
}
```


```JavaScript
/*本示例在活动工作表中创建一个具有三个顶点的红色任意多边形。*/
function test() {
    let builder = ActiveSheet.Shapes.BuildFreeform(msoEditingSmooth, 380, 220)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 460, 260)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 320)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 380, 220)
    let s = builder.ConvertToShape()
    s.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```
