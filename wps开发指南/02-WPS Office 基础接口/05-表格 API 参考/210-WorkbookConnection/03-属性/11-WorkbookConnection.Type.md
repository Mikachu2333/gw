# WorkbookConnection.Type

返回工作簿连接类型。只读 **XlConnectionType** 类型。



## 语法

express.**Type**

express   一个代表 **WorkbookConnection** 对象的变量。

## 类型

XlConnectionType

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个连接的类型。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    switch (connection.Type) {
        case xlConnectionTypeODBC:
            alert("数据库连接的类型为ODBC")
            break
        case xlConnectionTypeOLEDB:
            alert("数据库连接的类型为OLEDB")
            break
        case xlConnectionTypeTEXT:
            alert("数据库连接的类型为TEXT")
            break
        case xlConnectionTypeWEB:
            alert("数据库连接的类型为Web")
            break
        default:
            alert("其它数据库连接类型")
    }
}
```


```JavaScript
/*本示例显示活动工作表上第一张查询表的连接类型是否为xlConnectionTypeOLEDB。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    alert(connection.Type == xlConnectionTypeOLEDB)
}
```
