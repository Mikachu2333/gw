# WorkbookConnection.Name

返回或设置工作簿连接对象的名称。可读/写 **String** 类型。



## 语法

express.**Name**

express   一个代表 **WorkbookConnection** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置活动工作簿上第一个连接的名称，并刷新该连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    connection.Name = "WorkbookConnnection_1"
    connection.Refresh()
}
```


```JavaScript
/*本示例判断如果活动工作表上第一张查询表的连接的名称为“test1”，则删除该连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    if (connection.Name == "test1") {
        connection.Delete()
    }
}
```
