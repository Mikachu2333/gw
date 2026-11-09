# OLEDBConnection.UseLocalConnection

如果 **LocalConnection** 属性用于指定使 ET 能够连接到数据源的字符串，则为 **True** 。如果使用 **Connection** 属性指定的连接字符串，则为 **False** 。可读/写 **Boolean** 类型。



## 语法

express.**UseLocalConnection**

express   一个代表 **OLEDBConnection** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动工作簿上第一个 OLEDB 连接的UseLocalConnection属性，并设置该连接的脱机多维数据集文件的连接字符串。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    connection.UseLocalConnection = true
    connection.LocalConnection = "OLEDB;Provider=MSOLAP;Data Source=D:\\DataCube.cub"
}
```


```JavaScript
/*本示例显示活动工作簿上第一个 OLEDB 连接的UseLocalConnection属性。*/
function test() {
    let connection = ActiveWorkbook.Connections.Item(1).OLEDBConnection
    alert(connection.UseLocalConnection)
}
```
