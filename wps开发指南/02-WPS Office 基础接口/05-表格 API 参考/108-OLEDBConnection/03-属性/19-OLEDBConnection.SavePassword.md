# OLEDBConnection.SavePassword

如果将 OLE DB 连接字符串中的密码信息保存在连接字符串中，则为 **True** 。如果删除密码，则为 **False** 。可读/写 **Boolean** 类型。



## 语法

express.**SavePassword**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

boolean

## 说明


此属性由数据透视表和查询表在 ODBC 和 OLEDB 查询中使用。



## 示例


```JavaScript
/*本示例显示活动工作表上第一张查询表的 OLEDB 连接字符串中的密码信息是否保存在连接字符串中。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    alert(connection.SavePassword)
}
```


```JavaScript
/*本示例删除活动工作簿上第一个 OLEDB 连接字符串中的密码信息。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    connection.SavePassword = false
}
```
