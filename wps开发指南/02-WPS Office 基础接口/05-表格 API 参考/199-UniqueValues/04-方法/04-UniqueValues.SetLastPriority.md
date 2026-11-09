# UniqueValues.SetLastPriority

为此条件格式规则设置求值顺序，以便在工作表上的所有其他规则之后计算此规则。



## 语法

express.**SetLastPriority()**

express   一个代表 **UniqueValues** 对象的变量。

## 返回值

void

## 说明


优先级的实际值将等于工作表上条件格式规则的总数。当工作表中有多个条件格式规则时，此方法将导致优先级值大于此规则的规则的优先级降低 1。

将在工作表级别应用条件格式规则的优先级。



## 示例


```JavaScript
/*本示例设置活动工作表上区域 B1:B10 中第一个（UniqueValues）条件格式的求值顺序，然后设置该区域中第二个（UniqueValues）条件格式的内部颜色。*/
function test() {
    let formatConditions = ActiveSheet.Range("B1:B10").FormatConditions
    formatConditions.Item(1).SetLastPriority()
    formatConditions.Item(2).Interior.ColorIndex = 4
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上区域 B1:B10 中第一个（UniqueValues）条件格式的求值顺序，并显示该条件格式的优先级值。*/
function test() {
    let uniqueValues = Worksheets.Item("Sheet1").Range("B1:B10").FormatConditions.Item(1)
    uniqueValues.SetLastPriority()
    alert(uniqueValues.Priority)
}
```
