# Worksheet.EnableCalculation

如果在必要的情况下 ET 自动重新计算工作表，则该值为 **True** 。如果 ET 不重新计算工作表，则该值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**EnableCalculation**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 说明


当本属性的值为 **False** 时，则不能请求重新计算。如果将其值从 **False** 更改为 **True** ，则 ET 将重新计算工作表。



## 示例


```JavaScript
/*本示例将 WPS表格 设置为不自动重新计算第一个工作表。*/
function test() {
    Application.Worksheets.Item(1).EnableCalculation = false
}
```


```JavaScript
/*本示例判断活动工作表是否开启自动重新计算，并通知用户。*/
function test() {
    if (Application.ActiveSheet.EnableCalculation) {
        alert("活动工作表开启自动重新计算")
    } else {
        alert("活动工作表未开启自动重新计算")
    }
}
```
