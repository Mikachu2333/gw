# Workbooks.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Workbooks** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Workbook

## 示例


```JavaScript
/*此示例将变量 wb 设置为 Myaddin.xla 的工作簿。*/
function test() {
    let wb = Application.Workbooks.Item("myaddin.xla")
}
```


```JavaScript
/*本示例演示第一个工作簿的名称。*/
function test() {
    alert(Application.Workbooks.Item(1).Name)
}
```
