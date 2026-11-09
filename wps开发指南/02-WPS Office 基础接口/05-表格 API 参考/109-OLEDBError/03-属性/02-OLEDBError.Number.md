# OLEDBError.Number

返回用于指定错误号的数值。该错误号对应于某个唯一的陷阱，而该陷阱又对应于最近一次 OLE DB 查询所产生的错误条件。 **Long** 类型，只读。



## 语法

express.**Number**

express   一个代表 **OLEDBError** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示最近一次 OLEDB 查询返回的本地错误号和其他错误信息。*/
function test() {
    let error = Application.OLEDBErrors.Item(1)
    alert(`The following error occurred: ${error.Number},${error.ErrorString}:${error.SqlState}`)
}
```


```JavaScript
/*本示例显示第一个 OLEDB 错误的错误号。*/
function test() {
    alert(Application.OLEDBErrors.Item(1).Number)
}
```
