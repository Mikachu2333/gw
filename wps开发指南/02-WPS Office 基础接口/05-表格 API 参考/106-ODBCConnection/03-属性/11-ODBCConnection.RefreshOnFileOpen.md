# ODBCConnection.RefreshOnFileOpen

如果每次打开工作簿都自动更新连接，则为 **True** 。默认值为 **False** 。可读/写 **Boolean** 类型。



## 语法

express.**RefreshOnFileOpen**

express   一个代表 **ODBCConnection** 对象的变量。

## 类型

boolean

## 说明


在 JavaScript 中使用 **Open** 方法打开工作簿时，不会自动刷新连接。打开工作簿后，可使用 **Refresh** 方法刷新数据。



## 示例


```JavaScript
/*本示例显示活动工作表上第一张查询表的 ODBC 连接在每次工作簿被打开时是否自动更新连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.ODBCConnection
    alert(connection.RefreshOnFileOpen)
}
```


```JavaScript
/*本示例将该工作簿上第一个 ODBC 连接设置为每次工作簿被打开时自动更新连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).ODBCConnection
    connection.RefreshOnFileOpen = true
}
```
