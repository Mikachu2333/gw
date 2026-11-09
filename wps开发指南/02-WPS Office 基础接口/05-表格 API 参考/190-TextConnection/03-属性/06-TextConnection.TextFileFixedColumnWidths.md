# TextConnection.TextFileFixedColumnWidths

返回或设置一个整数数组，该数组对应于要导入到工作簿连接中的文本文件中 (以字符) 的列的宽度。 有效的宽度为 1 到 32767 个字符。 可读/写 **Variant** 类型。



## 语法

express.**TextFileFixedColumnWidths**

express   一个代表 **TextConnection** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将活动工作簿上第一个文本连接的列宽（按字符）赋值给 I1 单元格。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    Range("I1").Value2 = connection.TextFileFixedColumnWidths.toString()
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的文本连接的列宽（按字符），并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileFixedColumnWidths = [4, 4]
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
