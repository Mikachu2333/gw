# ShapeNodes.Delete

删除对象。



## 语法

express.**Delete(Index)**

express   一个代表 **ShapeNodes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int 精度） | 要删除对象的索引。 |

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动工作表中第一个形状的第二个节点。*/
function test() {
    let shapes = ActiveSheet.Shapes
    shapes.Item(1).Nodes.Delete(2)
}
```


```JavaScript
/*本示例删除第一张工作表中第二个形状的最后一个节点。*/
function test() {
    let nodes = Application.Worksheets.Item(1).Shapes.Item(2).Nodes
    nodes.Delete(nodes.Count)
}
```
