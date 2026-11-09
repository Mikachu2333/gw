# FreeformBuilder.AddNodes

将新线段插入到正在创建的任意多边形的尾部，并添加顶点以定义此线段。



## 语法

express.**AddNodes(SegmentType, EditingType, X1, Y1, X2, Y2, X3, Y3)**

express   一个代表 **FreeformBuilder** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SegmentType | 必选 | MsoSegmentType | 要添加的线段的类型。 |
| EditingType | 必选 | MsoEditingType | 顶点的编辑属性。如果 _SegmentType_ 为 **msoSegmentLine** ，那么 _EditingType_ 就必须是 **msoEditingAuto** 。 |
| X1 | 必选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingAuto** ，则该参数指定从文档左上角到新线段终点的水平距离（以磅为单位）。如果新节点的 _EditingType_ 为 **msoEditingCorner** ，则该参数指定从文档左上角到新线段第一个控制点的水平距离（以磅为单位）。 |
| Y1 | 必选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingAuto** ，则该参数指定从文档左上角到新线段终点的垂直距离（以磅为单位）。如果新节点的 _EditingType_ 为 **msoEditingCorner** ，则该参数指定从文档左上角到新线段第一个控制点的垂直距离（以磅为单位）。 |
| X2 | 可选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingCorner** ，则该参数指定从文档左上角到新线段第二个控制点的水平距离（以磅为单位）。如果新线段的 _EditingType_ 为 **msoEditingAuto** ，请不要指定该参数值。 |
| Y2 | 可选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingCorner** ，则该参数指定从文档左上角到新线段第二个控制点的垂直距离（以磅为单位）。如果新线段的 _EditingType_ 为 **msoEditingAuto** ，请不要指定该参数值。 |
| X3 | 可选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingCorner** ，则该参数指定从文档左上角到新线段终点的水平距离（以磅为单位）。如果新线段的 _EditingType_ 为 **msoEditingAuto** ，请不要指定该参数值。 |
| Y3 | 可选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingCorner** ，则该参数指定从文档左上角到新线段终点的垂直距离（以磅为单位）。如果新线段的 _EditingType_ 为 **msoEditingAuto** ，请不要指定该参数值。 |

## 返回值

void

## 说明


可以根据需要多次使用该方法向正在创建的任意多边形添加节点。添加完节点后，使用 **ConvertToShape** 方法创建刚才定义的任意多边形。要向创建好的任意多边形添加节点，请使用 **[ShapeNodes](#TODO)** 集合的 **Insert** 方法。



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
/*本示例在第一个文档上新建一个多边形，并设置该图形的前景填充色和名称。*/
function test() {
    let freeformBuilder = Documents.Item(1).Shapes.BuildFreeform(msoEditingSmooth, 360, 350)
    freeformBuilder.AddNodes(msoSegmentCurve, msoEditingSmooth, 380, 230, 400, 250, 450, 300)
    freeformBuilder.AddNodes(msoSegmentLine, msoEditingAuto, 480, 400, 380, 400, 510, 360)
    let shape = freeformBuilder.ConvertToShape()
    shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
    shape.Name = "shape_1"
}
```
