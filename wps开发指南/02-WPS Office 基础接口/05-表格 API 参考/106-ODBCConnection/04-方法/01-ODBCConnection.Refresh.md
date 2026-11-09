# ODBCConnection.Refresh

刷新 ODBC 连接。



## 语法

express.**Refresh()**

express   一个代表 **ODBCConnection** 对象的变量。

## 返回值

void

## 说明


与 ODBC 数据源建立连接时，ET 使用 **Connection** 属性指定的连接字符串。如果指定的连接字符串缺少必需的值，将显示对话框，提示用户提供必需的信息。如果 **DisplayAlerts** 属性为 **False** ，则不显示对话框， **Refresh** 方法失败并导致“连接信息无效”异常。

在 ET 成功建立一个连接之后，将存储完整的连接字符串，以便以后在同一编辑会话中调用 **Refresh** 方法时将不再显示提示。通过检查 **Connection** 属性的值可以获得完整的连接字符串。

建立数据库连接后，将检查 SQL 查询的有效性。如果该查询无效， **Refresh** 方法将失败并导致“SQL 语法错误”异常。

如果查询需要参数，则必须在调用 **Refresh** 方法之前，用参数绑定信息初始化 **Parameters** 集合。如果未绑定足够的参数， **Refresh** 方法将失败并导致“参数错误”异常。如果将参数设置为提示用户输入参数值，则无论 **DisplayAlerts** 属性的设置如何，都会向用户显示对话框。如果用户取消参数对话框， **Refresh** 方法将停止并返回 **False** 。如果对 **Parameters** 集合绑定了额外的参数，则这些额外参数将被忽略。

如果成功地完成或启动查询，则 **Refresh** 方法将返回 **True** ；如果用户取消连接或参数对话框，则该方法返回 **False** 。

要查看取回的行数是否超过了工作表中的可用行数，请检查 **FetchedRowOverflow** 属性。每次调用 **Refresh** 方法之前，该属性都将被初始化。



## 示例


```JavaScript
/*本示例判断如果活动工作簿上第一个ODBC连接的CommandType属性为xlCmdSql，则刷新该ODBC连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).ODBCConnection
    if (connection.CommandType == xlCmdSql) {
        connection.Refresh()
    }
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的 ODBC 连接的Connection、CommandType和CommandText属性，并刷新该 ODBC 连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.ODBCConnection
    let conString = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\示例数据.accdb;DefaultDir=D:\\示例;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    connection.Connection = conString
    connection.CommandType = xlCmdSql
    connection.CommandText = "SELECT * FROM `specialized` WHERE `评级` = '优秀'"
    connection.Refresh()
}
```
