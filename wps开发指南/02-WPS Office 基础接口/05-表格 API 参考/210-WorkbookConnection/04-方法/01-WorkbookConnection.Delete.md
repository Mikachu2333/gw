# WorkbookConnection.Delete

删除工作簿连接。



## 语法

express.**Delete()**

express   一个代表 **WorkbookConnection** 对象的变量。

## 返回值

void

## 说明


使用此方法可以删除一个外部数据连接。此方法不适用于与其他工作簿之间的链接。  

删除连接将不会删除正在使用该连接的任何对象。删除连接将不会导致从文件系统中删除任何连接文件。如果编辑任何这些对象以使用另一个连接，则一切都将重新开始工作。

那些使用已删除链接的对象所表现出的行为就好像无法建立连接一样。



## 示例


```JavaScript
/*本示例删除活动工作簿上第一个连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    connection.Delete()
}
```


```JavaScript
/*本示例删除活动工作表上第一张查询表的连接。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    connection.Delete()
}
```
