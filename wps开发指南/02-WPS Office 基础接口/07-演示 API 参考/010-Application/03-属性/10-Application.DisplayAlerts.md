# Application.DisplayAlerts

设置或返回 **PpAlertLevel** 常量，该常量代表 WPP 在运行宏时是否显示警告。可读/写。



## 语法

express.**DisplayAlerts**

express   一个代表 **Application** 对象的变量。

## 类型

PpAlertLevel

## 说明


宏停止运行后， **DisplayAlerts** 属性的值不会重新设置；该值将在会话过程中保持不变。在会话过程之间不会保存该值，所以在 WPP 开始运行时，该值重新设置为 **ppAlertsNone** 。

 **DisplayAlerts** 属性的值可以是下列 **PpAlertLevel** 常量之一：

| 常量 | 说明 |
| ---------------------------- | ----------------------------- |
| **ppAlertsAll** | 显示所有的消息框和警告；将错误返回宏。                        |
| **ppAlertsNone** | 默认值。不显示任何警告或消息框。如果运行宏时遇到消息框，则选中默认值并继续运行宏。 |



## 示例


```JavaScript
/*本示例指示 WPP 显示所有的消息框和警告，并将错误返回宏。*/
function test() {
    Application.DisplayAlerts = ppAlertsAll
}
```


```JavaScript
/*本示例将当前WPP进程设置为不显示任何警告*/
function test() {
    if (Application.DisplayAlerts == ppAlertsAll) {
        Application.DisplayAlerts = ppAlertsNone
        alert("已设置为不显示任何警告")
    } else {
        alert("之前已设置为不显示任何警告")
    }
}
```
