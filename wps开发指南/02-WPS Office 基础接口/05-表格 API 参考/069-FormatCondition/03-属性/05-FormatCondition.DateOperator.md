# FormatCondition.DateOperator

指定格式条件中所用的日期运算符。可读/写。



## 语法

express.**DateOperator**

express   一个代表 **FormatCondition** 对象的变量。

## 类型

XlTimePeriods

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上区域 B1:B10 中第一个条件格式所用的日期运算符是否为xlThisWeek。*/
function test() {
    let formatCondition = Application.Worksheets.Item("Sheet1").Range("B1:B10").FormatConditions.Item(1)
    alert(formatCondition.DateOperator == xlThisWeek)
}
```


```JavaScript
/*本示例设置活动工作表上区域 B1:B10 中第一个条件格式所用的日期运算符。*/
function test() {
    let formatCondition = ActiveSheet.Range("B1:B10").FormatConditions.Item(1)
    formatCondition.DateOperator = xlToday
}
```
