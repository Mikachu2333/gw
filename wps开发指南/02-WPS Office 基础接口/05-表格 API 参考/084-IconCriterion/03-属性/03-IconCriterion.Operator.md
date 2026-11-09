# IconCriterion.Operator

返回或设置 **[XlFormatConditionOperator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionOperator)** 枚举的常量之一，该常量指定阈值是“大于”还是“大于或等于”该阈值。



## 语法

express.**Operator**

express   一个代表 **IconCriterion** 对象的变量。

## 类型

number（int4 精度）

## 说明


对于图标集条件格式规则，此属性只能设置为以下两个常量之一： **xlGreater** 或 **xlGreaterEqual** 。



## 示例


```JavaScript
/*本示例显示活动工作表上区域 A1:A10 中第一个图标集条件格式的第一个图标的运算符是否为xlGreaterEqual。*/
function test() {
    let iconSet = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    alert(iconSet.IconCriteria.Item(1).Operator == xlGreaterEqual)
}
```


```JavaScript
/*本示例将第一张工作表上区域 A1:A10 中第一个图标集条件格式的第三个图标的运算符设置为xlGreater。*/
function test() {
    let iconSet = Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    iconSet.IconCriteria.Item(3).Operator = xlGreater
}
```
