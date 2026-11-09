# Worksheet.ConsolidationFunction

返回当前合并计算所使用的函数代码。可以是 **[XlConsolidationFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlConsolidationFunction)** 常量之一。 **Long** 类型，只读。



## 语法

express.**ConsolidationFunction**

express   一个代表 **Worksheet** 对象的变量。

## 类型

XlConsolidationFunction

## 示例


```JavaScript
/*如果当前合并计算所使用的函数为 SUM 函数，本示例将显示一消息框。*/
function test() {
    if (Worksheets.Item("Sheet1").ConsolidationFunction == xlSum) {
        MsgBox("Sheet1 使用 SUM 函数合并。")
    }
}
```


```JavaScript
/*本示例判断如果当前合并计算所使用的函数不是 Count 函数，则通知用户活动工作表合并计算所使用的函数代码。*/
function test() {
    if (ActiveSheet.ConsolidationFunction != xlCount) {
        alert(ActiveSheet.ConsolidationFunction)
    }
}
```
