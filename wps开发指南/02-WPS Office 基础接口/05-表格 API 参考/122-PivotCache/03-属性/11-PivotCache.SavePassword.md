# PivotCache.SavePassword

如果将 ODBC 连接字符串中的密码信息与指定查询一起保存，则为 **True** 。如果不保存密码信息，则该值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**SavePassword**

express   一个代表 **PivotCache** 对象的变量。

## 类型

boolean

## 说明


此属性由数据透视表和查询表在 ODBC 和 OLEDB 查询中使用。



## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表缓存的连接字符串中的密码信息是否与指定查询一起保存。*/
function test() {
    let pvtCache = ActiveSheet.Range("A1").PivotTable.PivotCache()
    alert(pvtCache.SavePassword)
}
```


```JavaScript
/*本示例为活动工作簿中第一个数据透视表缓存的连接字符串中的密码信息与指定查询一起保存。*/
function test() {
    let pvtCache = ActiveWorkbook.PivotCaches().Item(1)
    pvtCache.SavePassword = true
}
```
