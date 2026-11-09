# ShapeNodes.SetEditingType

设置由 _Index_ 指定的结点的编辑类型。如果该结点是一个曲线的控制点，本方法将对其设置相邻结点的编辑属性，该属性连接两个段。请注意，由于编辑类型的不同，本方法可能影响相邻结点的位置。



## 语法

express.**SetEditingType(Index, EditingType)**

express   一个代表 **ShapeNodes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 需要设置编辑类型的顶点。 |
| EditingType | 必选 | MsoEditingType | 顶点的编辑属性。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将第一张工作表中第三个形状中的所有结点更改为光滑结点。第三个形状必须是任意多边形。*/
function test() {
    let nodes = Application.Worksheets.Item(1).Shapes.Item(3).Nodes
    for (let i = 1; i <= nodes.Count; i++) {
        nodes.SetEditingType(i, msoEditingSmooth)
    }
}
```


```JavaScript
/*本示例将活动工作表中第一个形状的第二个结点更改为对称的曲线结点。*/
function test() {
    let nodes = ActiveSheet.Shapes.Item(1).Nodes
    nodes.SetEditingType(2, msoEditingSymmetric)
}
```
