# TextConnection.TextFilePromptOnRefresh

如果每次刷新工作簿连接时都要指定导入文本文件的名称，则该属性值为 **True** 。 **“导入文本文件”** 对话框允许用户指定路径和文件名。 默认值为 **False** 。 可读/写 **Boolean** 类型。



## 语法

express.**TextFilePromptOnRefresh**

express   一个代表 **TextConnection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFilePromptOnRefresh)
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
