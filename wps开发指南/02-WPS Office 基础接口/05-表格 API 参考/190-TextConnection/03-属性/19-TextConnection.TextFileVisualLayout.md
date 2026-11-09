# TextConnection.TextFileVisualLayout

返回或设置一个 **XlTextVisualLayoutType** 枚举，该枚举表示导入的文本的可见布局是从左到右还是从右到左。可读写。



## 语法

express.**TextFileVisualLayout**

express   一个代表 **TextConnection** 对象的变量。

## 类型

XlTextVisualLayoutType

## 示例


```JavaScript
/*本示例显示活动工作簿上第一个文本连接的视觉布局是否从右到左。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).TextConnection
    alert(connection.TextFileVisualLayout == xlTextVisualRTL)
}
```


```JavaScript
/*本示例将活动工作表上第一张查询表的文本连接的视觉布局设置为从左到右，并设置该连接的TextFilePromptOnRefresh属性。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    let textConnection = connection.TextConnection
    textConnection.TextFileVisualLayout = xlTextVisualLTR
    textConnection.TextFilePromptOnRefresh = false
    connection.Refresh()
}
```
