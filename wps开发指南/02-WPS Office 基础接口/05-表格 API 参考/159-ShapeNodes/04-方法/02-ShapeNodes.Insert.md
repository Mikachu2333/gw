# ShapeNodes.Insert

在任意多边形形状中插入节点。



## 语法

express.**Insert(Index, SegmentType, EditingType, X1, Y1, X2, Y2, X3, Y3)**

express   一个代表 **ShapeNodes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | **Long** 型。形状节点的编号，将在该节点后插入新节点。 |
| SegmentType | 必选 | MsoSegmentType | 线段类型。 |
| EditingType | 必选 | MsoEditingType | 编辑的类型。 |
| X1 | 必选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingAuto** ，那么此参数就以磅为单位指定文档的左上角与新线段的终点之间的水平距离。如果新节点的 _EditingType_ 为 **msoEditingCorner** ，那么此参数就以磅为单位指定文档的左上角与新线段的第一个控制点之间的水平距离。 |
| Y1 | 必选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingAuto** ，则此参数就以磅为单位指定从文档左上角到新线段终点的垂直距离。如果新节点的 _EditingType_ 属性为 **msoEditingCorner** ，则此参数就以磅为单位指定从文档左上角到新线段第一个控制点的垂直距离。 |
| X2 | 可选 | number（float 精度） | 如果新线段的 _EditingType_ 属性为 **msoEditingCorner** ，则此参数就以磅为单位指定从文档左上角到新线段第二个控制点的水平距离。如果新线段的 _EditingType_ 为 **msoEditingAuto** ，则不用为此参数指定值。 |
| Y2 | 可选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingCorner** ，则此参数就以磅为单位指定从文档左上角到新线段第二个控制点的垂直距离。如果新线段的 _EditingType_ 为 **msoEditingAuto** ，则不用为此参数指定值。 |
| X3 | 可选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingCorner** ，则此参数就以磅为单位指定从文档的左上角到新线段终点之间的水平距离。如果新线段的 _EditingType_ 为 **msoEditingAuto** ，则不用为此参数指定值。 |
| Y3 | 可选 | number（float 精度） | 如果新线段的 _EditingType_ 为 **msoEditingCorner** ，则此参数就以磅为单位指定从文档左上角到新线段终点的垂直距离。如果新线段的 _EditingType_ 为 **msoEditingAuto** ，则不用为此参数指定值。 |

## 返回值

void

## 示例


```JavaScript
/*此示例选择活动工作表的第三个形状，检查该形状是否是一个任意多边形对象，如果是，则插入一个节点。此示例假定在活动工作表中存在三个形状。*/
function test() {
    ActiveSheet.Shapes.Item(3).Select()
    if (Selection.ShapeRange.Type == msoFreeform) {
        Selection.ShapeRange.Nodes.Insert(3, msoSegmentCurve, msoEditingSymmetric, 35, 100)
        Selection.ShapeRange.Fill.ForeColor.RGB = RGB(0, 0, 200)
        Selection.ShapeRange.Fill.Visible = msoTrue
    } else {
        alert("This shape is not a Freeform object.")
    }
}
```


```JavaScript
/*本示例在第一张工作表中第二个形状末尾插入新的形状节点。*/
function test() {
    let nodes = Application.Worksheets.Item(1).Shapes.Item(2).Nodes
    nodes.Insert(nodes.Count + 1, msoSegmentLine, msoEditingAuto, 90, 100)
}
```
