# ConditionValue.Type

返回 **XlConditionValueTypes** 枚举的常量之一，该常量指定如何确定数据栏、色标或图标集条件格式的阈值。只读。



## 语法

express.**Type**

express   一个代表 **ConditionValue** 对象的变量。

## 类型

XlConditionValueTypes

## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个（数据条）条件格式的最短的数据条的类型是否为xlConditionValueAutomaticMin。*/
function test() {
    let conditionValue = ActiveSheet.Range("A1:A10").FormatConditions.Item(1).MinPoint
    alert(conditionValue.Type == xlConditionValueAutomaticMin)
}
```


```JavaScript
/*本示例判断第一张工作表上区域 A1:A10 中第二个（数据条）条件格式的最长的数据条的类型，并通知用户。*/
function test() {
    let conditionValue = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(2).MaxPoint
    if (conditionValue.Type == xlConditionValueHighestValue) {
        alert("最长数据条的类型为xlConditionValueHighestValue")
    } else {
        alert("最长数据条的类型不为xlConditionValueHighestValue")
    }
}
```
