# ShapeNodes.SetSegmentType

设置 _Index_ 指定的结点后面的段的段类型。如果该结点为一条曲线段的控制点，则该方法设置该曲线的段类型。请注意，该方法可能由于插入或删除相邻的结点而影响结点总数。



## 语法

express.**SetSegmentType(Index, SegmentType)**

express   一个代表 **ShapeNodes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 要设置段类型的顶点。 |
| SegmentType | 必选 | MsoSegmentType | 指定是直线段还是曲线段。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表中第三个形状的所有线段更改为曲线段。 第三个形状必须是任意多边形。*/
function test() {
    let nodes = Application.Worksheets.Item(1).Shapes.Item(3).Nodes
    for (let i = 1; i <= nodes.Count; i++) {
        nodes.SetSegmentType(i, msoSegmentCurve)
    }
}
```


```JavaScript
/*本示例将活动工作表中第二个形状的第二个节点的线段类型设置为直线。*/
function test() {
    let nodes = ActiveSheet.Shapes.Item(2).Nodes
    nodes.SetSegmentType(2, msoSegmentLine)
}
```
