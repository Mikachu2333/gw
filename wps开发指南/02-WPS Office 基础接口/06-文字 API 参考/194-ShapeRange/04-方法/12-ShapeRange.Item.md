# ShapeRange.Item

返回集合中的单个 **Shape** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **ShapeRange** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Shape

## 示例


```JavaScript
/*本示例将活动文档中第二个形状的前景填充色设置为红色。*/
function test() {
    let shape = ActiveDocument.Content.ShapeRange.Item(2)
    shape.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例删除选中形状中名称为 “Rectangle 1” 的形状。*/
function test() {
    Selection.ShapeRange.Item("Rectangle 1").Delete()
}
```
