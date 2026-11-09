# ODBCErrors.Item

从集合中返回一个对象。



## 语法

express.**Item(Index)**

express   一个代表 **ODBCErrors** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 对象的索引号。 |

## 返回值

包含在集合中的一个 ODBCError 对象。

## 示例


```JavaScript
/*本示例显示一个 ODBC 错误。*/
function test() {
    let error = Application.ODBCErrors.Item(1)
    alert(`The following error occurred: ${error.ErrorString} : ${error.SqlState}`)
}
```


```JavaScript
/*本示例将第一个 ODBC 错误赋值给G1单元格。*/
function test() {
    let error = Application.ODBCErrors.Item(1)
    Range("G1").Value2 = error.ErrorString
}
```
