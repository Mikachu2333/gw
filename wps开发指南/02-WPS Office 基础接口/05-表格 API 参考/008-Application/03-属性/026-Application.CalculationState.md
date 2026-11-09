# Application.CalculationState

返回一个 **[XlCalculationState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlCalculationState)** 常量，该常量针对 ET 中正在执行的任意计算指示应用程序的计算状态。只读。



## 语法

express.**CalculationState**

express   一个代表 **Application** 对象的变量。

## 类型

XlCalculationState

## 示例


```JavaScript
/*在本示例中，ET 检查是否存在正在执行的计算。如果没有，则将计算状态消息显示为“Done”。否则就将其显示为“Not Done”。*/
function test() {
    if (Application.CalculationState == xlDone) {
        MsgBox("Done")
    } else {
        MsgBox("Not Done")
    }
}
```


```JavaScript
/*本示例检查ET是否在执行计算，并通知用户。*/
function test() {
    if (Application.CalculationState == xlCalculating) {
        alert("正在计算！")
    }
}
```
