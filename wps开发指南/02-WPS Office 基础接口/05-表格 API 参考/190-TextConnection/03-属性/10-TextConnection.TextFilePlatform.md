# TextConnection.TextFilePlatform

返回或设置要导入到工作簿连接中的文本文件的来源。 该属性确定在数据导入过程中使用何种代码页。 可读/写 **XlPlatform** 类型。



## 语法

express.**TextFilePlatform**

express   一个代表 **TextConnection** 对象的变量。

## 类型

XlPlatform

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的来源是否为 xlWindows。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFilePlatform == xlWindows)
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的文本连接的列格式和来源，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileParseType = xlFixedWidth
    textConnection.TextFilePlatform = xlMSDOS
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
