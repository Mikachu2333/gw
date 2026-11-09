# GroupShapes.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **GroupShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 Shape 对象。

## 示例


```JavaScript
/*本示例对 GroupShapes 集合中第二个形状的 OnAction 属性进行设置。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    shape.GroupItems.Item(2).OnAction = "ShapeAction"
}
```


```JavaScript
/*本示例显示 GroupShapes 集合中第一个形状的高度。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    alert(shape.GroupItems.Item(1).Height)
}
```
