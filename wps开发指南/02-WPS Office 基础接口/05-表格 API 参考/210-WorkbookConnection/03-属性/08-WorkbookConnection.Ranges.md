# WorkbookConnection.Ranges

返回指定的 **WorkbookConnection** 对象的对象区域。只读 **Ranges** 类型。



## 语法

express.**Ranges**

express   一个代表 **WorkbookConnection** 对象的变量。

## 类型

Ranges

## 示例


```JavaScript
/*本示例显示基于活动工作簿上第一个连接的第一个范围的地址。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    alert(connection.Ranges.Item(1).Address())
}
```


```JavaScript
/*本示例选中基于活动工作表上第一张查询表的连接的第一个范围。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection
    connection.Ranges.Item(1).Select()
}
```
