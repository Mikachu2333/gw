# ColorScaleCriterion.Value

返回或设置色阶条件格式的最小、中点或最大阈值。可读/写 **Variant** 类型。



## 语法

express.**Value**

express   一个代表 **ColorScaleCriterion** 对象的变量。

## 类型

any

## 说明


仅当条件格式的 **[ColorScaleCriterion.Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/member/Type)** 属性设置为常量 **xlConditionValueNumber** 、 **xlConditionValuePercent** 、 **xlConditionValuePercentile** 或 **xlConditionValueFormula** 时，才能设置该值。

如果阈值类型为公式，则可以将公式设置为 **String** 类型。而公式必须返回单个数字。



## 示例


```JavaScript
/*本示例显示活动工作表上单元格区域 A1:A10 的第一个色阶条件格式的第一个阈值条件的值。*/
function test() {
    let colorScale = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    let criterion = colorScale.ColorScaleCriteria.Item(1)
    alert(criterion.Value)
}
```


```JavaScript
/*本示例判断如果第一张工作表上单元格区域 A1:A5 的第一个色阶条件格式的第三个阈值条件的类型为xlConditionValueNumber，则将该阈值条件的值设置为5。*/
function test() {
    let colorScale = Worksheets.Item(1).Range("A1:A5").FormatConditions.Item(1)
    let criterion = colorScale.ColorScaleCriteria.Item(3)
    if (criterion.Type == xlConditionValueNumber) {
        criterion.Value = 5
    }
}
```
