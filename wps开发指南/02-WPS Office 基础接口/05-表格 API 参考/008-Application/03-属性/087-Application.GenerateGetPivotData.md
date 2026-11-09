# Application.GenerateGetPivotData

当 ET 能够获取数据透视表数据时，返回 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**GenerateGetPivotData**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为 ET 确定获取数据透视表数据的状态，并通知用户。本示例假定数据透视表位于活动工作表上。*/
function test() {
    // Determine the ability to get PivotTable report data and notify user.
    if (Application.GenerateGetPivotData) {
        alert("The ability to get PivotTable report data is enabled.")
    } else {
        alert("The ability to get PivotTable report data is disabled.")
    }
}
```


```JavaScript
/*本示例将 ET 设置为不能获取数据透视表数据。*/
function test() {
    Application.GenerateGetPivotData = false
}
```
