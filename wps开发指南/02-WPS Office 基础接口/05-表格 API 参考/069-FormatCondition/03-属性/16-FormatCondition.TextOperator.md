# FormatCondition.TextOperator

返回或设置一个 **[XlContainsOperator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlContainsOperator)** 枚举常量，该常量指定条件格式规则执行的文本搜索。



## 语法

express.**TextOperator**

express   一个代表 **FormatCondition** 对象的变量。

## 类型

XlContainsOperator

## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个条件格式执行的文本搜索是否为xlContains。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(formatCondition.TextOperator == xlContains)
}
```


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个条件格式执行的文本搜索。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    formatCondition.TextOperator = xlDoesNotContain
}
```
