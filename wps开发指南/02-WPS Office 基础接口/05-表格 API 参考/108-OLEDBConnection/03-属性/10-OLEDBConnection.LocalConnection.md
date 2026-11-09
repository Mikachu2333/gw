# OLEDBConnection.LocalConnection

返回或设置脱机多维数据集文件的连接字符串。可读/写 **String** 类型。



## 语法

express.**LocalConnection**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

any

## 说明


对于非 OLAP 数据源， **LocalConnection** 属性的值为空字符串，并且 **UseLocalConnection** 属性设置为 **False** 。

设置 **LocalConnection** 属性并不会立即初始化到数据源的连接。必须首先使用 **Refresh** 方法建立连接并检索数据。

如果 **UseLocalConnection** 属性设置为 **True** ，则使用 **LocalConnection** 属性的值。如果 **UseLocalConnection** 属性设置为 **False** ，则 **Connection** 属性将为基于源而不是基于本地多维数据集文件的查询表指定连接字符串。



## 示例


```JavaScript
/*本示例设置活动工作簿上第一个 OLEDB 连接的脱机多维数据集文件的连接字符串。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    connection.UseLocalConnection = true
    connection.LocalConnection = "OLEDB;Provider=MSOLAP;Data Source=D:\\DataCube.cub"
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的 OLEDB 连接的脱机多维数据集文件的连接字符串，并显示该 OLEDB 连接字符串。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    connection.UseLocalConnection = true
    connection.LocalConnection = "OLEDB;Provider=MSOLAP;Data Source=D:\\test1.cub"
    alert(connection.LocalConnection)
}
```
