# TextConnection.Connection

返回或设置一个字符串，其中包含使 ET 能够连接到文本数据源的文本文件名称。 可读/写 **Variant** 类型。



## 语法

express.**Connection**

express   一个代表 **TextConnection** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的数据源的文本文件名。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.Connection)
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的文本连接的数据源的文本文件名，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.Connection = "TEXT;D:\\示例\\test3.txt"
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
