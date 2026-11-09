# FreeformBuilder.AddNodes

在当前形状中添加一点，然后绘制一个从当前节点到添加的最后一个节点的线条。



## 语法

express.**AddNodes(SegmentType, EditingType, X1, Y1, X2, Y2, X3, Y3)**

express   一个代表 **FreeformBuilder** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SegmentType | 必选 | MsoSegmentType | 要添加的线段的类型。 |
| EditingType | 必选 | MsoEditingType | 顶点的编辑属性。 |
| X1 | 必选 | number（float 精度） | 如果新线段的 EditingType 为 msoEditingAuto，则此参数指定从文档左上角到新线段终点的水平距离（以磅为单位）。 如果新节点的 EditingType 为 msoEditingCorner，则此参数指定从文档左上角到新线段的第一个控制点的水平距离（以磅为单位）。 |
| Y1 | 必选 | number（float 精度） | 如果新线段的 EditingType 为 msoEditingAuto，则此参数指定从文档左上角到新线段终点的水平距离（以磅为单位）。 如果新节点的 EditingType 为 msoEditingCorner，则此参数指定从文档左上角到新线段的第一个控制点的水平距离（以磅为单位）。 |
| X2 | 可选 | any | 如果新线段的 EditingType 为 msoEditingCorner，则此参数指定从文档左上角到新线段的第二个控制点的水平距离（以磅为单位）。 如果新线段的 EditingType 为 msoEditingAuto，则不为该参数指定值。 |
| Y2 | 可选 | any | 如果新线段的 EditingType 为 msoEditingCorner，则此参数指定从文档左上角到新线段的第二个控制点的水平距离（以磅为单位）。 如果新线段的 EditingType 为 msoEditingAuto，则不为该参数指定值。 |
| X3 | 可选 | any | 如果新线段的 EditingType 为 msoEditingCorner，则此参数指定从文档左上角到新线段的第二个控制点的水平距离（以磅为单位）。 如果新线段的 EditingType 为 msoEditingAuto，则不为该参数指定值。 |
| Y3 | 可选 | any | 如果新线段的 EditingType 为 msoEditingCorner，则此参数指定从文档左上角到新线段的第二个控制点的水平距离（以磅为单位）。 如果新线段的 EditingType 为 msoEditingAuto，则不为该参数指定值。 |

## 返回值

void

## 说明


| **MsoSegmentType** 可以是下列 **MsoSegmentType** 常量之一。 |
| ------------------------------------------------- |
| **msoSegmentLine**                                |
| **msoSegmentCurve**                               |

| **MsoEditingType** 可以是下列 **MsoEditingType** 常量之一。                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| **msoEditingAuto**                                                                                                                 |
| **msoEditingCorner**                                                                                                               |
| 不能是 **msoEditingSmooth** 或 **msoEditingSymmetric** 如果 *SegmentType* 为 **msoSegmentLine** ，那么 *EditingType* 就必须是 **msoEditingAuto** 。 |



## 示例


```JavaScript
/*本示例向第一张工作表中添加带有四条线段的任意多边形。*/
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
/*本示例在活动工作表中创建一个具有三个顶点的蓝色任意多边形。*/
function test() {
    let builder = ActiveSheet.Shapes.BuildFreeform(msoEditingSmooth, 370, 230)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 470, 260)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 490, 330)
    builder.AddNodes(msoSegmentCurve, msoEditingAuto, 370, 230)
    let s = builder.ConvertToShape()
    s.Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```
