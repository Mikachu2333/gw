# WorkbookConnection.TextConnection

返回一个 **[TextConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TextConnection/obj)** 对象，该对象包含有关文本文件查询的信息。 此为只读属性。



## 语法

express.**TextConnection**

express   一个代表 **WorkbookConnection** 对象的变量。

## 类型

TextConnection

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的视觉布局是否从右到左。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileVisualLayout == xlTextVisualRTL)
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
