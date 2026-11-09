# IconCriterion 对象

代表图标集中单个图标的条件。此条件指定了值的范围以及与图标集条件格式规则中的图标关联的阈值类型。

## 说明


图标集条件格式的所有条件均包含在 **[IconCriteria](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriteria/obj)** 集合中。通过将索引传递到集合中，您可以访问集合中的每个 **IconCriterion** 对象。有关详细信息，请参阅示例。


## 示例


```JavaScript
/*本示例创建了一个代表测试分数的数字范围，然后对该范围应用了图标集条件格式规则。图标集的类型将从默认图标变为五箭头图标集。最后，将阈值类型从百分点修改为硬编码数字。*/
function test() {
    // Fill cells with sample data
    ActiveSheet.Range("C1").Value2 = 55
    ActiveSheet.Range("C2").Value2 = 92
    ActiveSheet.Range("C3").Value2 = 88
    ActiveSheet.Range("C4").Value2 = 77
    ActiveSheet.Range("C5").Value2 = 66
    ActiveSheet.Range("C6").Value2 = 93
    ActiveSheet.Range("C7").Value2 = 76
    ActiveSheet.Range("C8").Value2 = 80
    ActiveSheet.Range("C9").Value2 = 79
    ActiveSheet.Range("C10").Value2 = 83
    ActiveSheet.Range("C11").Value2 = 66
    ActiveSheet.Range("C12").Value2 = 74
    Range("C1:C12").Select()

    // Create an icon set conditional format for the created sample data range
    let iconSet = Selection.FormatConditions.AddIconSetCondition()

    // Change the icon set to a five-arrow icon set
    iconSet.IconSet = ActiveWorkbook.IconSets(xl5Arrows)

    // The IconCriterion collection contains all IconCriteria
    // By indexing into the collection you can modify each criterion
    let iconCriteria1 = iconSet.IconCriteria.Item(1)
    iconCriteria1.Type = xlConditionValueNumber
    iconCriteria1.Value = 0
    iconCriteria1.Operator = 7

    let iconCriteria2 = iconSet.IconCriteria.Item(2)
    iconCriteria2.Type = xlConditionValueNumber
    iconCriteria2.Value = 60
    iconCriteria2.Operator = 7

    let iconCriteria3 = iconSet.IconCriteria.Item(3)
    iconCriteria3.Type = xlConditionValueNumber
    iconCriteria3.Value = 70
    iconCriteria3.Operator = 7

    let iconCriteria4 = iconSet.IconCriteria.Item(4)
    iconCriteria4.Type = xlConditionValueNumber
    iconCriteria4.Value = 80
    iconCriteria4.Operator = 7

    let iconCriteria5 = iconSet.IconCriteria.Item(5)
    iconCriteria5.Type = xlConditionValueNumber
    iconCriteria5.Value = 90
    iconCriteria5.Operator = 7
}
```


```JavaScript
/*本示例将第一张工作表上区域 A1:A10 中第一个图标集条件格式的第二个图标的类型设置为xlConditionValueNumber，并将该图标的阈值设置为30。*/
function test() {
    let iconSet = Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    iconSet.IconCriteria.Item(2).Type = xlConditionValueNumber
    iconSet.IconCriteria.Item(2).Value = 30
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Icon](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriterion/member/Icon) | 返回或指定图标集条件格式规则中某个条件的图标。可读/写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriterion/member/Index) | 返回一个 **Long** 值，该值表示条件代表的阈值。只读。 |
| [Operator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriterion/member/Operator) | 返回或设置 **[XlFormatConditionOperator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionOperator)** 枚举的常量之一，该常量指定阈值是“大于”还是“大于或等于”该阈值。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriterion/member/Type) | 返回或设置 **[XlConditionValueTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlConditionValueTypes)** 枚举的常量之一，该常量指定如何确定图标集的阈值。可读写。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconCriterion/member/Value) | 返回或设置条件格式中图标的阈值。可读/写 **Variant** 类型。 |