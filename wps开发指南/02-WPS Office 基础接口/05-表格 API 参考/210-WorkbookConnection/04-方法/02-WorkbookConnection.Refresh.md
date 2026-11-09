# WorkbookConnection.Refresh

刷新工作簿连接。



## 语法

express.**Refresh()**

express   一个代表 **WorkbookConnection** 对象的变量。

## 返回值

void

## 说明


如果 **DisplayAlerts** 属性为 **False** ，则不显示对话框， **Refresh** 方法将失败，并引发“连接信息无效”异常。  

刷新连接失败对刷新其他操作没有任何影响。



## 示例


```JavaScript
/*本示例设置活动工作簿上第一个连接的名称，并刷新该连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1)
    connection.Name = "connnection_1"
    connection.Refresh()
}
```


```JavaScript
/*本示例刷新活动工作簿上名为“test1”的连接。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item("test1")
    connection.Refresh()
}
```
