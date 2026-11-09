# IconCriterion.Type

返回或设置 **[XlConditionValueTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlConditionValueTypes)** 枚举的常量之一，该常量指定如何确定图标集的阈值。可读写。



## 语法

express.**Type**

express   一个代表 **IconCriterion** 对象的变量。

## 类型

XlConditionValueTypes

## 说明


图标集的阈值类型可以是数字、百分比、公式或百分点值。如果将类型设置为百分点值，将使用 ET 中的 Percentile 函数确定阈值。



## 示例


```JavaScript
/*本示例显示第一张工作表上区域 A1:A10 中第一个图标集条件格式的第一个图标的类型是否为xlConditionValuePercent。*/
function test() {
    let iconSet = Application.Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    alert(iconSet.IconCriteria.Item(1).Type == xlConditionValuePercent)
}
```


```JavaScript
/*本示例将活动工作表上区域 A1:A10 中第一个图标集条件格式的第二个图标的类型设置为xlConditionValueNumber。*/
function test() {
    let iconSet = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    iconSet.IconCriteria.Item(2).Type = xlConditionValueNumber
}
```
