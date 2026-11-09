# OLEDBConnection.AlwaysUseConnectionFile

如果连接文件始终用于建立与数据源的连接，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**AlwaysUseConnectionFile**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

boolean

## 说明


当此属性为 **True** 时，连接文件将始终用于建立与数据源的连接。如果在工作簿中嵌入的连接不同于外部连接文件，嵌入的连接将被忽略，外部连接文件将是唯一考虑的版本。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接的文件是否始终用于建立与数据源的连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.AlwaysUseConnectionFile)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的 OLEDB 连接的文件设置为始终用于建立与数据源的连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    connection.AlwaysUseConnectionFile = true
}
```
