# TextConnection.TextFileThousandsSeparator

返回或设置 ET 在将文本文件导入工作簿连接中时使用的千位分隔符。 默认为系统千位分隔符。 可读/写 **String** 类型。



## 语法

express.**TextFileThousandsSeparator**

express   一个代表 **TextConnection** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的千位分隔符。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileThousandsSeparator)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的千位分隔符设置为句号，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileThousandsSeparator = "."
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
