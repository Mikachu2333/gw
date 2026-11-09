# WorkbookConnection.RefreshWithRefreshAll

确定在执行“全部刷新”时是否应刷新连接。 可读/写 **Boolean** 类型。



## 语法

express.**RefreshWithRefreshAll**

express   一个代表 **WorkbookConnection** 对象的变量。

## 类型

boolean

## 说明


如果返回 **True** ，则刷新连接。 如果返回 **False** ，则不刷新连接。 默认值为 **True** 。



## 示例


```JavaScript
/*本示例显示活动工作簿上名为“test1”的连接执行“全部刷新”时是否应刷新连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item("test1")
    alert(connection.RefreshWithRefreshAll)
}
```


```JavaScript
/*本示例将活动工作簿上第一个连接的设置为执行“全部刷新”时不刷新连接，并刷新该连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    connection.RefreshWithRefreshAll = false
    connection.Refresh()
}
```
