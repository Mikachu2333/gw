# FormatCondition.SetLastPriority

为此条件格式规则设置求值顺序，以便在工作表上的所有其他规则之后计算此规则。



## 语法

express.**SetLastPriority()**

express   一个代表 **FormatCondition** 对象的变量。

## 返回值

void

## 说明


优先级的实际值将等于工作表上条件格式规则的总数。当工作表中有多个条件格式规则时，此方法将导致优先级值大于此规则的规则的优先级降低 1。

将在工作表级别应用条件格式规则的优先级。



## 示例


```JavaScript
/*本示例设置活动工作表上区域 A1:A10 中第一个条件格式的求值顺序。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    formatCondition.SetLastPriority()
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上区域 A1:A10 中第一个条件格式的求值顺序，并显示该条件格式的优先级值。*/
function test() {
    let formatCondition = Worksheets.Item("Sheet1").Range("A1:A10").FormatConditions.Item(1)
    formatCondition.SetLastPriority()
    alert(formatCondition.Priority)
}
```
