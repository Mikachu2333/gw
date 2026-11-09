# OLEDBError.ErrorString

返回一个 **String** 值，它代表 OLEDB 错误字符串。



## 语法

express.**ErrorString**

express   一个代表 **OLEDBError** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示第一个 OLEDB 错误的字符串。*/
function test() {
    alert(Application.OLEDBErrors.Item(1).ErrorString)
}
```


```JavaScript
/*本示例将第一个 OLEDB 错误的字符串赋值给 I1 单元格。*/
function test() {
    Range("I1").Value2 = Application.OLEDBErrors.Item(1).ErrorString
}
```
