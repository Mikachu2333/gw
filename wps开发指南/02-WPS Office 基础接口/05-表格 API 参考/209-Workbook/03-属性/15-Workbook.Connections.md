# Workbook.Connections

 **Connections** 属性在工作簿和 ODBC 或 OLEDB 数据源之间建立连接，并在不提示用户的情况下刷新数据。只读。



## 语法

express.**Connections**

express   一个代表 **Workbook** 对象的变量。

## 类型

Connections

## 示例


```JavaScript
/*本示例分别刷新活动工作簿上第二个ODBC连接和第一个OLEDB连接。*/
function test() {
    ActiveWorkbook.Connections.Item(2).ODBCConnection.Refresh()
    ActiveWorkbook.Connections.Item(1).OLEDBConnection.Refresh()
}
```


```JavaScript
/*本示例在活动工作簿上创建新的工作簿连接，并显示该工作簿上连接的数量。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let sql = "SELECT * FROM `student`"
    ActiveWorkbook.Connections.Add2("connection_1", "example", connection, sql, xlCmdSql)
    alert(ActiveWorkbook.Connections.Count)
}
```
