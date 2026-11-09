# TextConnection.TextFileSemicolonDelimiter

如果在将文本文件导入工作簿连接中时分号是分隔符，并且 **TextFileParseType** 属性的值为 **xlDelimited** ，则该属性值为 **True** 。 默认值为 **False** 。 可读/写 **Boolean** 类型。



## 语法

express.**TextFileSemicolonDelimiter**

express   一个代表 **TextConnection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接是否将分号作为分隔符。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileSemicolonDelimiter)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的分隔符设置为分号，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileSemicolonDelimiter = true
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
