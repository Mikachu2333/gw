# TextConnection.TextFileStartRow

返回或设置向工作簿连接中导入文本文件时进行文本分列的起始行号。 其有效值为 1 到 32767 之间的整数。 默认值为 1。 可读/写 **Long** 类型。



## 语法

express.**TextFileStartRow**

express   一个代表 **TextConnection** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接文本分列的起始行号。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileStartRow)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的文本分列的起始行号设置为2，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileStartRow = 2
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
