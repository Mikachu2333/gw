# IconSets 对象

代表用于图标集条件格式规则的图标集的集合。

## 说明


条件格式的图标集通过使用 **[IconSetCondition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSetCondition/obj)** 对象的 **[IconSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSetCondition/member/IconSet)** 属性来分配。通过以 **[Workbook](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj)** 对象的 **[IconSets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/IconSets)** 属性的索引形式传递 **[XlIconSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlIconSet)** 枚举的其中一个常量，您可以将此属性设置为其中的一个内置图标集。有关详细信息，请参阅示例。


## 示例


```JavaScript
/*本示例创建了一个代表测试分数的数字范围，然后对该范围应用了图标集条件格式规则。图标集的类型将从默认图标变为五箭头图标集。最后，将阈值类型从百分点修改为硬编码数字。*/
function test() {
    // Fill cells with sample data from 1 to 10
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

    // Change the icon set to a 5-arrow icon set
    iconSet.IconSet = ActiveWorkbook.IconSets.Item(xl5Arrows)

    //The IconCriterion collection contains all of IconCriteria
    //By indexing into the collection you can modify each criteria
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
/*本示例显示第一张工作簿上图标集的数目。*/
function test() {
    let iconSets = Application.Workbooks.Item(1).IconSets
    alert(`图标集的数目：${iconSets.Count}`)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSets/member/Item) | 从 **IconSets** 集合中返回单个 **[IconSet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSet/obj)** 对象。只读。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/IconSets/member/Count) | 返回一个 **Long** 值，该值指定可用于工作簿的图标集的数目。只读。 |