# Shapes.Item

返回集合中的单个 **Shape** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Shapes** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例选中活动文档形状集合中的第一个形状*/
function test() {
    Application.ActiveDocument.Shapes.Item(1).Select()
}
```


```JavaScript
/*本示例将第一个文档第一个形状的格式应用于其它形状。*/
function test() {
    let shapes = Documents.Item(1).Shapes
    shapes.Item(1).PickUp()
    for (let i = 2; i <= shapes.Count; i++) {
        shapes.Item(i).Apply()
    }
}
```
