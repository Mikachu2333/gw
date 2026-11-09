# OLEDBConnection.CommandType

返回或设置 **XlCmdType** 常量之一。可读/写 **XlCmdType** 。



## 语法

express.**CommandType**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

XlCmdType

## 说明


返回或设置的常量描述了 **CommandText** 属性的值。默认值是 **xlCmdSql** 。



## 示例


```JavaScript
/*本示例为第一张工作表中第一张查询表的 OLEDB 连接的数据源设置CommandType和CommandText属性，并刷新该 OLEDB 连接。*/
function test() {
    let connection = Worksheets.Item(1).QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    connection.CommandType = xlCmdSql
    connection.CommandText = "SELECT * FROM `student` WHERE `name` = '张三'"
    connection.Refresh()
}
```


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接的 CommandType 属性是否为 xlCmdCube。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.CommandType == xlCmdCube)
}
```
