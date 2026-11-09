# IconCriterion.Value

返回或设置条件格式中图标的阈值。可读/写 **Variant** 类型。



## 语法

express.**Value**

express   一个代表 **IconCriterion** 对象的变量。

## 类型

any

## 说明


仅当条件格式的 **[IconCriterion.Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriterion/member/Type)** 属性设置为常量 **xlConditionValueNumber** 、 **xlConditionValuePercent** 、 **xlConditionValuePercentile** 或 **xlConditionValueFormula** 时，才能设置该值。

如果阈值类型为公式，则可以将公式设置为 **String** 类型。而公式必须返回单个数字。



## 示例


```JavaScript
/*本示例判断如果活动工作表上区域 A1:A10 中第一个图标集条件格式的第二个图标的类型为xlConditionValuePercent，则显示该图标的阈值。*/
function test() {
    let iconSet = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    let iconCriterion = iconSet.IconCriteria.Item(2)
    if (iconCriterion.Type == xlConditionValuePercent) {
        alert(iconCriterion.Value)
    }
}
```


```JavaScript
/*本示例将第一张工作表上区域 A1:A10 中第一个图标集条件格式的第三个图标的阈值设置为60。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    iconSet.IconCriteria.Item(3).Value = 60
}
```
