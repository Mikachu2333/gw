# TextConnection.TextFileCommaDelimiter

如果将文本文件导入工作簿连接中时，以逗号作为分隔符，则该值为 **True** 。 如果以其他字符作为分隔符，则该值为 **False** 。 默认值为 **False** 。 可读/写 **Boolean** 类型。



## 语法

express.**TextFileCommaDelimiter**

express   一个代表 **TextConnection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接是否以逗号作为分隔符。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileCommaDelimiter)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的分割符设置为逗号。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    connection.TextConnection.TextFileCommaDelimiter = true
    connection.Refresh()
}
```
