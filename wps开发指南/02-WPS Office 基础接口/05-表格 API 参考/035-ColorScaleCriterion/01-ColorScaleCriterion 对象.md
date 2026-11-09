# ColorScaleCriterion 对象

代表颜色格式条件格式的最小、中点或最大阈值的条件。

## 说明


每个 **ColorScaleCriterion** 都是 **[ColorScaleCriteria](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriteria/obj)** 集合的一部分。使用 **ColorScaleCriteria** (_index_) 可以返回单独的条件。

您可以设置色阶的每个阈值的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/member/Type)** 、 **[Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/member/Value)** 和 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/member/FormatColor)** 。


## 示例


```JavaScript
/*本示例创建了一个数字范围，然后将双色色阶条件格式规则应用于该范围。然后通过在ColorScaleCriteria集合中编制索引来设置单独的条件，从而指定最小阈值的颜色为红色，最大阈值的颜色为蓝色。*/
function test() {
    // Fill cells with sample data from 1 to 10
    ActiveSheet.Range("C1").Value2 = 1
    ActiveSheet.Range("C2").Value2 = 2
    ActiveSheet.Range("C1:C2").AutoFill(Range("C1:C10"))
    Range("C1:C10").Select()

    // Create a two-color ColorScale object for the created sample data range
    let colorScale = Selection.FormatConditions.AddColorScale(2)

    // Set the minimum threshold to red and maximum threshold to blue
    colorScale.ColorScaleCriteria.Item(1).FormatColor.Color = RGB(255, 0, 0)
    colorScale.ColorScaleCriteria.Item(2).FormatColor.Color = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例判断如果第一张工作表上单元格区域 A1:A10 的第一个色阶条件格式的第一个阈值条件的类型为xlConditionValueNumber，则设置该阈值条件的值和填充颜色。*/
function test() {
    let colorScale = Worksheets.Item(1).Range("A1:A10").FormatConditions.Item(1)
    let criterion = colorScale.ColorScaleCriteria.Item(1)
    if (criterion.Type == xlConditionValueNumber) {
        criterion.Value = 2
        criterion.FormatColor.ColorIndex = 8
    }
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/member/FormatColor) | 返回一个 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象，该对象指定分配给色阶条件格式的阈值的颜色。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/member/Index) | 返回一个 **Long** 值，该值表示条件代表的阈值。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/member/Type) | 返回 **[XlConditionValueTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlConditionValueTypes)** 枚举的常量之一，该常量指定如何确定数据栏或色标条件格式的阈值。只读。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/member/Value) | 返回或设置色阶条件格式的最小、中点或最大阈值。可读/写 **Variant** 类型。 |