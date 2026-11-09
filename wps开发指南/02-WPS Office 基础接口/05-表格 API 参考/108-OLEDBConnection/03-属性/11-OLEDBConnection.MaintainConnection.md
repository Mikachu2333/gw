# OLEDBConnection.MaintainConnection

如果从刷新操作开始直至关闭工作簿，都一直保留与指定数据源的连接，则返回 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**MaintainConnection**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

boolean

## 说明


默认值是 **True** 。如果预计会频繁对服务器进行查询，则可以将此属性设置为 **True** ，这样能减少重新连接的时间，因而可提高性能。如果将此属性设置为 **False** ，则会使打开的连接关闭。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接是否一直保留指向数据源的连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.MaintainConnection)
}
```


```JavaScript
/*本示例开启活动工作表上第一张查询表的 OLEDB 连接一直保留指向数据源的连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    connection.MaintainConnection = true
}
```
