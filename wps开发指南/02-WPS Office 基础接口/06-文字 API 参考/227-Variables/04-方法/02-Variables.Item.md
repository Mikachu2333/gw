# Variables.Item

返回集合中的单个 **Variable** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Variables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 要返回的单个对象。可以是代表序号位置的 **Long** 类型值，或代表单个对象名称的 **String** 类型值。 |

## 返回值

Variable

## 示例


```JavaScript
/*本示例显示活动文档中所有的文档变量的名称。*/
function test() {
    for (let i = 1; i <= ActiveDocument.Variables.Count; i++) {
        alert(ActiveDocument.Variables.Item(i).Name)
    }
}
```


```JavaScript
/*本示例显示第一个文档上第二个文档变量的值。*/
function test() {
    let variable = Documents.Item(1).Variables.Item(2)
    alert(variable.Value)
}
```
