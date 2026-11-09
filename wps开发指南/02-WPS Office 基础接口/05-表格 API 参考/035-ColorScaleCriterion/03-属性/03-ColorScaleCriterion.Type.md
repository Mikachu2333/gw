# ColorScaleCriterion.Type

返回 **[XlConditionValueTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlConditionValueTypes)** 枚举的常量之一，该常量指定如何确定数据栏或色标条件格式的阈值。只读。



## 语法

express.**Type**

express   一个代表 **ColorScaleCriterion** 对象的变量。

## 类型

XlConditionValueTypes

## 说明


数据条或色阶的阈值类型可以是数字、百分比、公式或百分点值。如果将类型设置为百分点值，将使用 ET 中的 Percentile 函数确定阈值。



## 示例


```JavaScript
/*本示例显示第一张工作表上单元格区域 A1:A5 的第一个色阶条件格式的第二个阈值条件的类型是否为xlConditionValuePercentile。*/
function test() {
    let colorScale = Worksheets.Item(1).Range("A1:A5").FormatConditions.Item(1)
    let criterion = colorScale.ColorScaleCriteria.Item(2)
    alert(criterion.Type == xlConditionValuePercentile)
}
```


```JavaScript
/*本示例判断如果活动工作表上单元格区域 A1:A10 的第二个色阶条件格式的阈值条件的类型为xlConditionValueNumber，则通知用户。*/
function test() {
    let colorScale = ActiveSheet.Range("A1:A10").FormatConditions.Item(2)
    for (let i = 1; i <= colorScale.ColorScaleCriteria.Count; i++) {
        let criterion = colorScale.ColorScaleCriteria.Item(i)
        if (criterion.Type == xlConditionValueNumber) {
            alert(`第 ${i} 个阈值条件的类型为 xlConditionValueNumber。`)
        }
    }
}
```
