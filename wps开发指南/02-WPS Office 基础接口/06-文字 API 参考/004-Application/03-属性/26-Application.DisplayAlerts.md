# Application.DisplayAlerts

返回或设置运行宏时产生的一些警告和消息的处理方式。 **WdAlertLevel** 类型，可读写。



## 语法

express.**DisplayAlerts**

express   一个代表 **Application** 对象的变量。

## 类型

WdAlertLevel

## 示例


```JavaScript
/*本示例将 WPS 设置为在运行宏时显示所有警告和消息框。*/
function test() {
    Application.DisplayAlerts = wdAlertsAll
}
```


```JavaScript
/*本示例显示 DisplayAlerts 属性的当前设置是否为wdAlertsMessageBox。*/
function test() {
    alert(Application.DisplayAlerts == wdAlertsMessageBox)
}
```
