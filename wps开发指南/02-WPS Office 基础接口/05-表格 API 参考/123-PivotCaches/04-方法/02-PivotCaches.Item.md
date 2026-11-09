# PivotCaches.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **PivotCaches** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | any | 对象的名称或索引号。 |

## 返回值

包含在集合中的一个 PivotCache 对象。

## 示例


```JavaScript
/*本示例刷新第一个数据透视缓存。*/
function test() {
    ActiveWorkbook.PivotCaches().Item(1).Refresh()
}
```


```JavaScript
/*本示例显示第一个数据透视缓存的数据源。*/
function test() {
    alert(ActiveWorkbook.PivotCaches().Item(1).SourceData)
}
```
