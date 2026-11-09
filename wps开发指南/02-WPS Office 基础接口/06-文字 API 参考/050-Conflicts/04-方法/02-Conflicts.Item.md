# Conflicts.Item

返回集合中的单个 **Conflicts** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Conflicts** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。 |

## 返回值

Conflict

## 示例


```JavaScript
/*本示例显示活动文档中的第一个 Conflict 对象的类型是否为无修订。*/
function test() {
    alert(ActiveDocument.CoAuthoring.Conflicts.Item(1).Type == wdNoRevision)
}
```


```JavaScript
/*本示例接受第一个文档中的第一个冲突。*/
function test() {
    Documents.Item(1).CoAuthoring.Conflicts.Item(1).Accept()
}
```
