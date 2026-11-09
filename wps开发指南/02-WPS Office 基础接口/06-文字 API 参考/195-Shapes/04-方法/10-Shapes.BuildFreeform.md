# Shapes.BuildFreeform

建立任意多边形对象。



## 语法

express.**BuildFreeform(EditingType, X1, Y1)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| EditingType | 必选 | MsoEditingType | 第一个顶点的编辑属性。 |
| X1 | 必选 | number（float 精度） | 任意多边形第一个顶点相对于文档左边缘的位置（以磅为单位）。 |
| Y1 | 必选 | number（float 精度） | 任意多边形第一个顶点相对于文档上边缘的位置（以磅为单位）。 |

## 返回值

**[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/obj)** 

## 说明


使用 **AddNodes** 方法将段添加到任意多边形。向该多边形添加至少一个段后，可使用 **ConvertToShape** 方法将 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/obj)** 对象转换为具有在 **[FreeformBuilder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FreeformBuilder/obj)** 对象中定义的几何形状描述的 **Shape** 对象。



## 示例


```JavaScript
/*本示例将一个具有五个顶点的任意多边形添加到活动文档中。*/
function test() {
    let freeformBuilder = ActiveDocument.Shapes.BuildFreeform(msoEditingCorner, 360, 200)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingCorner, 380, 230, 400, 260, 450, 300)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 200)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 480, 400)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 360, 200)
    let shape = freeformBuilder.ConvertToShape()
    shape.Line.Visible = msoTrue
}
```


```JavaScript
/*本示例在第一个文档上创建一个具有三个顶点的黄色任意多边形。*/
function test() {
    let builder = Documents.Item(1).Shapes.BuildFreeform(msoEditingSmooth, 380, 220)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 460, 260)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 480, 320)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 380, 220)
    builder.ConvertToShape().Fill.ForeColor.RGB = RGB(255, 255, 0)
}
```
