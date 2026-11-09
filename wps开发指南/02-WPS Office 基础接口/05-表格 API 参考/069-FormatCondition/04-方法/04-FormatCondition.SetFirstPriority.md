# FormatCondition.SetFirstPriority

将此条件格式规则的优先级值设置为“1”，以便在工作表上的所有其他规则之前计算此规则。



## 语法

express.**SetFirstPriority()**

express   一个代表 **FormatCondition** 对象的变量。

## 返回值

void

## 说明


当工作表中有多个条件格式规则时，如果之前未将此规则设置为优先级“1”，此方法将导致工作表上的所有其他现有规则的优先级都增加 1。

将在工作表级别应用条件格式规则的优先级。



## 示例


```JavaScript
/*本示例将活动工作表上区域 A1:A10 中第三个条件格式的优先级值设置为“1”。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(3)
    formatCondition.SetFirstPriority()
}
```


```JavaScript
/*本示例将工作表 Sheet1 上区域 A1:A10 中第二个条件格式的优先级设置为“1”，并显示区域 A4:A6 中第一个条件格式的优先级值。*/
function test() {
    let formatCondition = Worksheets.Item("Sheet1").Range("A1:A10").FormatConditions.Item(2)
    formatCondition.SetFirstPriority()
    alert(Range("A4:A6").FormatConditions.Item(1).Priority)
}
```
