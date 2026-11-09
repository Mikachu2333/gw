# TextConnection.TextFileOtherDelimiter

返回或设置在向工作簿连接中导入文本文件时用作分隔符的字符。 默认值为 **null** 。 可读/写 **String** 类型。



## 语法

express.**TextFileOtherDelimiter**

express   一个代表 **TextConnection** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接用作分隔符的字符。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileOtherDelimiter)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的分隔符设置为井号 (#)，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileOtherDelimiter = "#"
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
