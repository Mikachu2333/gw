# AboveAverage.Priority

返回或设置条件格式规则的优先级值。当工作表中存在多个条件格式规则时，优先级确定求值的顺序。



## 语法

express.**Priority**

express   一个代表 **AboveAverage** 对象的变量。

## 类型

number（int4 精度）

## 说明


设置优先级时，值必须为介于 1 和工作表上条件格式规则总数之间的正整数。对于工作表上的所有规则，优先级必须为唯一值，因此，如果更改指定条件格式规则的优先级，将可能会导致工作表上其他规则的优先级值移位。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 C1:C10 中第一个（AboveAverage）条件格式的优先级值。*/
function test() {
    let aboveAverage = ActiveSheet.Range("C1:C10").FormatConditions.Item(1)
    alert(aboveAverage.Priority)
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上区域 C1:C10 中第一个（AboveAverage）条件格式的优先级值。*/
function test() {
    let aboveAverage = Worksheets.Item("Sheet1").Range("C1:C10").FormatConditions.Item(1)
    aboveAverage.Priority = 2
}
```
