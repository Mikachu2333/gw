# WorkbookConnection.Description

返回或设置 **WorkbookConnection** 对象的简要说明。可读/写 **String** 类型。



## 语法

express.**Description**

express   一个代表 **WorkbookConnection** 对象的变量。

## 类型

string

## 说明


在 **“连接属性”** 对话框中，用户可以编辑连接的名称和/或说明。在该对话框中更改名称和说明只会更改 ET 连接对象中的相应字段。  

说明的最大长度为 255 个字符。如果用户指定的连接文件的说明长于 255 个字符，则说明会被截断，以满足 255 个字符的限制。



## 示例


```JavaScript
/*本示例显示活动工作簿上第一个连接的简要说明。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    alert(connection.Description)
}
```


```JavaScript
/*本示例设置活动工作表上第一张查询表的连接的简要说明。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    connection.Description = "example"
}
```
