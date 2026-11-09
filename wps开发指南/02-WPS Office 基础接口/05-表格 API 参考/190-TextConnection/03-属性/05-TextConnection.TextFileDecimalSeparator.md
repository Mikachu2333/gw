# TextConnection.TextFileDecimalSeparator

返回或设置小数分隔符，在将文本文件导入工作簿连接中时，ET 将使用小数分隔符。 默认值为系统小数分隔符。 可读/写 **String** 类型。



## 语法

express.**TextFileDecimalSeparator**

express   一个代表 **TextConnection** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的小数分隔符。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileDecimalSeparator)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的小数分隔符设置为逗号，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileDecimalSeparator = ","
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
