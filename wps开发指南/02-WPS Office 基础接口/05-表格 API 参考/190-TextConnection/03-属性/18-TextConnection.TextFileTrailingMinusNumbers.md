# TextConnection.TextFileTrailingMinusNumbers

如果为 **True** ，ET 会将导入的数字视为以 - (减) 符号开头的文本作为负号。 如果为 **False** ，则将导入的数字视为以 - 符号开头的文本作为文本。 **Boolean** 类型，可读写。



## 语法

express.**TextFileTrailingMinusNumbers**

express   一个代表 **TextConnection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接是否将数字开头的“-”符号按负号处理。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileTrailingMinusNumbers)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接设置为数字开头的“-”符号按文本处理，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileTrailingMinusNumbers = false
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
