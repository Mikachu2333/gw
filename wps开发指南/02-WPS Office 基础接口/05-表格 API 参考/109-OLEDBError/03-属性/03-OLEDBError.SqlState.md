# OLEDBError.SqlState

返回 SQL 状态错误。 **String** 型，只读。



## 语法

express.**SqlState**

express   一个代表 **OLEDBError** 对象的变量。

## 类型

string

## 说明


有关特定错误的解释，请参阅 SQL 文档。



## 示例


```JavaScript
/*本示例显示第一个 OLEDB 错误的 SQL 状态错误。*/
function test() {
    alert(Application.OLEDBErrors.Item(1).SqlState)
}
```


```JavaScript
/*本示例将第一个 OLEDB 错误的 SQL 状态错误赋值给 I1 单元格。*/
function test() {
    Range("I1").Value2 = Application.OLEDBErrors.Item(1).SqlState
}
```
