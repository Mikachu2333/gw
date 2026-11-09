# Application.ShowStartupDialog

如果显示 ET 应用程序的“新建工作簿”任务窗格，则返回 **True** （默认值为 **False** ）。 **Boolean** 类型，可读写。



## 语法

express.**ShowStartupDialog**

express   一个代表 **Application** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例判断ET是否显示了“新建工作簿”任务窗格，并通知用户。*/
function test() {
    // Determine if the New Workbook task pane is enabled.
    if (!Application.ShowStartupDialog) {
        alert("ShowStartupDialog is set to False.")
    } else {
        alert("ShowStartupDialog is set to True.")
    }
}
```


```JavaScript
/*本示例将ET设置为显示“新建工作簿”任务窗格。*/
function test() {
    Application.ShowStartupDialog = true
}
```
