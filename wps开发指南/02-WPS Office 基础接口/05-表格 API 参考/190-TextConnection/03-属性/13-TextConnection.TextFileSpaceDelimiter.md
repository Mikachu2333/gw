# TextConnection.TextFileSpaceDelimiter

如果向工作簿连接中导入文本文件时，使用空格字符作为分隔符，则该值为 **True** 。 默认值为 **False** 。 可读/写 **Boolean** 类型。



## 语法

express.**TextFileSpaceDelimiter**

express   一个代表 **TextConnection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接是否将空格字符作为分隔符。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileSpaceDelimiter)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的空格字符作为分隔符，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileSpaceDelimiter = true
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
