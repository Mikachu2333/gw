# TextConnection.TextFileConsecutiveDelimiter

当向工作簿连接中导入文本文件时，如果将连续分隔符看作是一个分隔符，则该值为 **True** 。 默认值为 **False** 。 可读/写 **Boolean** 类型。



## 语法

express.**TextFileConsecutiveDelimiter**

express   一个代表 **TextConnection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接是否将连续分隔符看作是一个分隔符。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileConsecutiveDelimiter)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接中连续分隔符作为单个分隔符处理，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileConsecutiveDelimiter = true
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
