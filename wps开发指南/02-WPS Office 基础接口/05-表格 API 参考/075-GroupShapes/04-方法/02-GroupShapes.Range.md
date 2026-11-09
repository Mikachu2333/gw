# GroupShapes.Range

返回一个 **ShapeRange** 对象，它代表 **Shapes** 集合中形状的子集。



## 语法

express.**Range(Index)**

express   一个代表 **GroupShapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 包含在该区域中的各单个形状。可以是指定形状索引号的整数、指定形状名称的字符串，也可以是包含整数或字符串的数组。 |

## 返回值

ShapeRange

## 说明


虽然使用 **Range** 属性可返回任意数量的形状，但如果要返回集合的单个成员，用 **Item** 方法更加简单。例如，`GroupItems(1)` 比 `GroupItems.Range(1)` 简单。



## 示例


```JavaScript
/*本示例显示 GroupShapes 集合中第一个形状的名称。*/
function test() {
    let shape = Application.Worksheets.Item(1).Shapes.Item(1)
    alert(shape.GroupItems.Range(1).Name)
}
```


```JavaScript
/*本示例选中 GroupShapes 集合中第一个形状。*/
function test() {
    let shape = ActiveSheet.Shapes.Item(1)
    shape.GroupItems.Range(1).Select()
}
```
