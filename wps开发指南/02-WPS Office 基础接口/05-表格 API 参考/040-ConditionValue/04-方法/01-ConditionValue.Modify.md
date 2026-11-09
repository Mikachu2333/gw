# ConditionValue.Modify

修改数据条条件格式规则计算最长数据条或最短数据条的方法。



## 语法

express.**Modify(newtype, newvalue)**

express   一个代表 **ConditionValue** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NewType | 必选 | XlConditionValueTypes | 指定最短数据条或最长数据条的计算方法。最短数据条的默认值是 **xlConditionLowestValue** ；最长数据条的默认值是 **xlConditionHighestValue** 。 |
| NewValue | 可选 | any | 分配给最短或最长数据条的值。取决于 NewType 参数，此值可以是数字，也可以是计算结果为数字的公式。 |

## 返回值

void

## 说明


下表描述了每种计算类型的可接受阈值。

| NewType 参数                 | NewValue 参数     |
| -------------------------- | --------------- |
| xlConditionLowestValue     | 忽略参数            |
| xlConditionHighestValue    | 忽略参数            |
| xlConditionValueNumber     | 任何数字            |
| xlConditionValuePercent    | 0 到 100 之间的任何数字 |
| xlConditionValuePercentile | 0 到 100 之间的任何数字 |
| xlConditionValueFormula    | 一个返回单一数字的公式     |



## 示例


```JavaScript
/*本示例修改活动工作表上区域 A1:A10 中第一个（数据条）条件格式的最长数据条的计算方法。*/
function test() {
    let conditionValue = ActiveSheet.Range("A1:A10").FormatConditions.Item(1).MaxPoint
    conditionValue.Modify(xlConditionValuePercent, 200)
}
```


```JavaScript
/*本示例修改第一张工作表上区域 A1:A10 中第二个（数据条）条件格式的最短的数据条的计算方法。*/
function test() {
    let conditionValue = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(2).MinPoint
    conditionValue.Modify(xlConditionValueNumber, -1)
}
```
