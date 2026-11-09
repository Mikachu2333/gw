# TextConnection.TextFileParseType

返回或设置要导入到工作簿连接中的文本文件中的数据的列格式。可读/写 **[XlTextParsingType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlTextParsingType)** 类型。



## 语法

express.**TextFileParseType**

express   一个代表 **TextConnection** 对象的变量。

## 类型

XlTextParsingType

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的列格式是否为 xlDelimited。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileParseType == xlDelimited)
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的文本连接的列格式，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileParseType = xlFixedWidth
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
