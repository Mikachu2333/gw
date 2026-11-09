# Worksheets.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **Worksheets** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

Object

## 说明


有关返回集合中单个成员的详细信息，请参阅返回集合中的对象。



## 示例


```JavaScript
/*此示例删除第一张工作表*/
function test() {
    Application.Worksheets.Item(1).Delete()
}
```


```JavaScript
/*本示例显示第三个工作表的名称。*/
function test() {
    alert(Application.Worksheets.Item(3).Name)
}
```
