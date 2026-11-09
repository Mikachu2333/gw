# OLEDBConnection.RefreshPeriod

返回或设置两次刷新之间的时间间隔（单位为分钟）。可读/写 **Long** 类型。



## 语法

express.**RefreshPeriod**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

number（int4 精度）

## 说明


将时间段设置为 0（零）会禁用定时自动刷新，等同于将此属性设置为 **Null** 。 **RefreshPeriod** 属性的值可以是从 0 到 32767 的整数。



## 示例


```JavaScript
/*本示例显示活动工作表上第一张查询表的 OLEDB 连接两次刷新之间的时间间隔。*/
function test() {
    let connection = ActiveSheet.QueryTables.Item(1).WorkbookConnection.OLEDBConnection
    alert(connection.RefreshPeriod)
}
```


```JavaScript
/*本示例将活动工作簿上第一个 OLEDB 连接两次刷新之间的时间间隔设置为 15 分钟。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    connection.RefreshPeriod = 15
}
```
