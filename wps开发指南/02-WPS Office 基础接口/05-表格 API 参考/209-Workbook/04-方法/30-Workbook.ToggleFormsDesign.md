# Workbook.ToggleFormsDesign

 **ToggleFormsDesign** 方法用于在使用表单控件时将 ET 切换到设计模式。



## 语法

express.**ToggleFormsDesign()**

express   一个代表 **Workbook** 对象的变量。

## 返回值

void

## 说明


如果再次调用此方法，此方法将不会从设计模式切换回原来的模式。当宏结束后，它将自动从设计模式还原成原来的模式。



## 示例


```JavaScript
/*本示例将ET切换到设计模式。*/
function test() {
    ActiveWorkbook.ToggleFormsDesign()
}
```


```JavaScript
/*本示例判断如果活动工作簿窗口不受保护，则将ET切换到设计模式，并通知用户。*/
function test() {
    if (!ActiveWorkbook.ProtectWindows) {
        ActiveWorkbook.ToggleFormsDesign()
        alert("已切换到设计模式。")
    }
}
```
