# OLEDBConnection.Refreshing

如果正在进行指定 OLE DB 连接的后台 OLE DB 查询，则为 **True** 。只读 **Boolean** 类型。



## 语法

express.**Refreshing**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

boolean

## 说明


使用 **CancelRefresh** 方法可取消后台查询。



## 示例


```JavaScript
/*本示例显示活动工作表上第一张查询表的 OLEDB 连接是否正在进行后台查询。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    alert(connection.Refreshing)
}
```


```JavaScript
/*本示例判断如果活动工作簿上第一个 OLEDB 连接正在进行后台查询，则取消该连接的后台查询。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    if (connection.Refreshing) {
        connection.CancelRefresh()
    }
}
```
