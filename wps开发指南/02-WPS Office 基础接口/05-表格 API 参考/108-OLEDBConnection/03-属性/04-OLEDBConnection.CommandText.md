# OLEDBConnection.CommandText

返回或设置指定数据源的命令字符串。可读/写 **Variant** 类型。



## 语法

express.**CommandText**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

any

## 说明


应使用 **CommandText** 属性，而不应使用 **SQL** 属性，现在 SQL 属性的存在主要是为了与 ET 的早期版本兼容。如果您同时使用这两个属性，则 **CommandText** 属性的值优先。

 **CommandType** 属性描述了 **CommandText** 属性的值。



## 示例


```JavaScript
/*本示例为第一张工作表中第一张查询表的 OLEDB 连接的数据源设置命令字符串，并刷新该 OLEDB 连接。*/
function test() {
    let connection = Worksheets.Item(1).QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    connection.CommandType = xlCmdSql
    connection.CommandText = "SELECT * FROM `student` WHERE `ID` > 3"
    connection.Refresh()
}
```


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接的命令串。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.CommandText)
}
```
