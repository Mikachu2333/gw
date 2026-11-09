# ConditionValue.Value

针对数据条条件格式返回最短或最长的数据条的阈值。只读 **Variant** 类型。



## 语法

express.**Value**

express   一个代表 **ConditionValue** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例显示第一张工作表上区域 A1:A10 中第二个（数据条）条件格式的最长的数据条的阈值。*/
function test() {
    let conditionValue = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(2).MaxPoint
    alert(conditionValue.Value)
}
```


```JavaScript
/*本示例判断如果活动工作表上区域 A1:A10 中第一个（数据条）条件格式的最短的数据条的类型为xlConditionValueNumber，则显示该数据条的阈值。*/
function test() {
    let conditionValue = ActiveSheet.Range("A1:A10").FormatConditions.Item(1).MinPoint
    if (conditionValue.Type == xlConditionValueNumber) {
        alert(conditionValue.Value)
    }
}
```
