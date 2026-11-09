# OLEDBConnection.IsConnected

如果 **MaintainConnection** 属性为 **True** ，则返回 **True** ，如果它当前未与其源相连，则返回 **False** 。只读 **Boolean** 类型。



## 语法

express.**IsConnected**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

boolean

## 说明


 **IsConnected** 属性不检查是否建立了连接。即使该属性返回 **True** ，如果连接不再有效，则向提供程序发送命令将导致错误



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接当前是否与其源相连。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.IsConnected)
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的OLEDB连接的MaintainConnection属性，并判断该OLEDB连接当前是否与其源相连，然后通知用户。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    connection.MaintainConnection = true
    if (connection.IsConnected) {
        alert("OLEDB连接与其源相连")
    } else {
        alert("OLEDB连接未与其源相连")
    }
}
```
