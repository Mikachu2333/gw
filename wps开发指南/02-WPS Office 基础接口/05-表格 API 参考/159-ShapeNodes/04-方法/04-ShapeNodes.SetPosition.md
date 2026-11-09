# ShapeNodes.SetPosition

设置由 _Index_ 指定的顶点位置。注意：由于顶点的编辑类型不同，此方法可能影响相邻顶点的位置。



## 语法

express.**SetPosition(Index, X1, Y1)**

express   一个代表 **ShapeNodes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 要设置位置的顶点。 |
| X1 | 必选 | number（float 精度） | 新顶点相对于文档左上角的位置（以磅为单位）。 |
| Y1 | 必选 | number（float 精度） | 新顶点相对于文档左上角的位置（以磅为单位）。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表中第三个形状中的节点 2 移至距离工作表左侧 200 磅，距离工作表顶部 300 磅。第三个形状必须是任意多边形。*/
function test() {
    let nodes = Application.Worksheets.Item(1).Shapes.Item(3).Nodes
    nodes.SetPosition(2, 200, 300)
}
```


```JavaScript
/*本示例将活动工作表中所有形状的节点 1 移至距离工作表左侧 100 磅，距离工作表顶部 200 磅。所有形状必须是任意多边形。*/
function test() {
    let shapes = ActiveSheet.Shapes
    for (let i = 1; i <= shapes.Count; i++) {
        shapes.Item(i).Nodes.SetPosition(1, 100, 200)
    }
}
```
