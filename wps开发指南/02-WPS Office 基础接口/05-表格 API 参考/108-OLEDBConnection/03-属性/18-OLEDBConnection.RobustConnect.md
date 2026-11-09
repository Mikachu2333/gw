# OLEDBConnection.RobustConnect

返回或设置 OLE DB 连接与其数据源连接的方式。可读/写 **XlRobustConnect** 类型。



## 语法

express.**RobustConnect**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

XlRobustConnect

## 说明


如果您使用可靠的连接，那么当 ET 无法使用工作簿连接信息建立连接时， ET 将检查工作簿连接是否具有外部连接文件的路径。如果有， ET 将打开外部连接文件并尝试使用外部连接文件中包含的信息进行连接。如果在使用外部连接文件之后能够建立连接，则 ET 将更新工作簿的连接对象。

在信息技术部门在一个中央位置维护和更新连接的情况下，这可以提供可靠的连接，每当上一版本的连接（缓存在工作簿中）失败时，允许用户的工作簿自动获取那些更新。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接与其数据源连接的方式。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    switch (connection.RobustConnect) {
        case xlAlways:
            alert("数据透视表缓存或查询表始终使用由 SourceConnectionFile 或 SourceDataFile 属性定义的外部源信息重新连接。")
            break
        case xlAsRequired:
            alert("数据透视表缓存或查询表使用外部源信息通过 Connection 属性重新连接。")
            break
        case xlNever:
            alert("数据透视表缓存或查询表永远不会使用源信息重新连接。")
            break
    }
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的 OLEDB 连接与其数据源连接的方式，并刷新该 OLEDB 连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    connection.RobustConnect = xlNever
    connection.Refresh()
}
```
