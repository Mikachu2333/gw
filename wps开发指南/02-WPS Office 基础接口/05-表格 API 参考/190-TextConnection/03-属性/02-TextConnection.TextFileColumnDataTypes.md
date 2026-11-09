# TextConnection.TextFileColumnDataTypes

返回或设置一个有序的常量数组，这些常量指定应用于要导入到工作簿连接中的文本文件中相应列的数据类型。 每一列的默认常量为 **xlGeneral** 。可读/写 **Variant** 类型。



## 语法

express.**TextFileColumnDataTypes**

express   一个代表 **TextConnection** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接各列的数据类型。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileColumnDataTypes.toString())
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的文本连接相应列的数据类型，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileColumnDataTypes = [xlTextFormat, xlGeneralFormat, xlDMYFormat, xlGeneralFormat]
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
