# GroupShapes.Item

返回集合中的单个 **Shape** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **GroupShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例显示活动文档上第一个形状组中第一个形状的名称。*/
function test() {
    let groupShapes = ActiveDocument.Shapes.Item(1).GroupItems
    alert(groupShapes.Item(1).Name)
}
```


```JavaScript
/*本示例选中第一个文档上第一个形状组中最后一个形状。*/
function test() {
    let groupShapes = Documents.Item(1).Shapes.Item(1).GroupItems
    groupShapes.Item(groupShapes.Count).Select()
}
```
