# OLEDBConnection.OLAP

如果 OLE DB 连接与联机分析处理 (OLAP) 服务器相连，则返回 **True** ，只读 **Boolean** 类型。



## 语法

express.**OLAP**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接是否与联机分析处理 (OLAP) 服务器相连。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.OLAP)
}
```


```JavaScript
/*本示例判断活动工作表上第一张查询表的 OLEDB 连接是否与联机分析处理 (OLAP) 服务器相连，并通知用户。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    if (connection.OLAP) {
        alert("OLEDB 连接与联机分析处理 (OLAP) 服务器相连")
    } else {
        alert("OLEDB 连接未与联机分析处理 (OLAP) 服务器相连")
    }
}
```
