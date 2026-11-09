# TextConnection.TextFileTextQualifier

返回或设置向工作簿连接中导入文本文件时的文本识别符。 文本识别符用于指定包含的数据是文本格式。 可读/写 **XlTextQualifier** 类型。



## 语法

express.**TextFileTextQualifier**

express   一个代表 **TextConnection** 对象的变量。

## 类型

XlTextQualifier

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的文本识别符是否为 xlTextQualifierNone。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileTextQualifier == xlTextQualifierNone)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的文本识别符设置为单引号，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileTextQualifier = xlTextQualifierSingleQuote
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
