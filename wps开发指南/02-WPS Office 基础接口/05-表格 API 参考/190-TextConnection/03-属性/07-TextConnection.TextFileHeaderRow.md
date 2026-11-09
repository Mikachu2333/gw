# TextConnection.TextFileHeaderRow

返回或设置一个值，该值指定是否应将起始行（的第一行）视为标题行。 可读/写 **Boolean** 类型。



## 语法

express.**TextFileHeaderRow**

express   一个代表 **TextConnection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的第一行是否为标题行。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileHeaderRow)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的第一行设置为标题行，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileHeaderRow = true
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
