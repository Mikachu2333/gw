# ColorScale 对象

代表色阶条件格式规则。

## 说明


所有条件格式对象均包含在 **[FormatConditions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/obj)** 集合对象中，该集合对象是 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 集合的子项。您可以使用 **FormatConditions** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Add)** 或 **[AddColorScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/AddColorScale)** 方法创建色阶格式规则。

色阶是直观的参照，可以帮助您了解数据的分布和变化。您可以对数据范围、表中的数据或数据透视表中的数据应用双色或三色色阶。对于双色色阶条件格式，您可以将值、类型和颜色分配给范围的最小和最大阈值。三色色阶还具有中点阈值。

通过设置 **[ColorScaleCriteria](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriteria/obj)** 对象的属性，可以确定其中的每个阈值。 **ColorScaleCriteria** 对象是 **ColorScale** 对象的子项，也是色阶的所有 **[ColorScaleCriterion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/obj)** 对象的集合。


## 示例


```JavaScript
/*本示例创建了一个数字范围，然后将双色色阶条件格式规则应用于该范围。然后指定最小阈值的颜色为红色，最大阈值的颜色为蓝色。*/
function test() {
    // Fill cells with sample data from 1 to 10
    ActiveSheet.Range("C1").Value2 = 1
    ActiveSheet.Range("C2").Value2 = 2
    ActiveSheet.Range("C1:C2").AutoFill(Range("C1:C10"))
    Range("C1:C10").Select()

    // Create a two-color ColorScale object for the created sample data range
    let colorScale = Selection.FormatConditions.AddColorScale(2)

    // Set the minimum threshold to red and maximum threshold to blue
    colorScale.ColorScaleCriteria(1).FormatColor.Color = RGB(255, 0, 0)
    colorScale.ColorScaleCriteria(2).FormatColor.Color = RGB(0, 0, 255)
}
```


```JavaScript
/*本示例设置活动工作表上单元格区域 A1:A10 的第一个色阶条件格式所应用于的单元格区域，并设置该条件格式的第一个阈值条件的颜色和亮度。*/
function test() {
    let colorScale = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    colorScale.ModifyAppliesToRange(Range("A7:A8"))
    colorScale.ColorScaleCriteria.Item(1).FormatColor.ColorIndex = 7
    colorScale.ColorScaleCriteria.Item(1).FormatColor.TintAndShade = 0.5
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScale/member/Delete) | 删除指定的条件格式规则对象。 |
| [ModifyAppliesToRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScale/member/ModifyAppliesToRange) | 设置此格式规则所应用于的单元格区域。 |
| [SetFirstPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScale/member/SetFirstPriority) | 将此条件格式规则的优先级值设置为“1”，以便在工作表上的所有其他规则之前计算此规则。 |
| [SetLastPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScale/member/SetLastPriority) | 为此条件格式规则设置求值顺序，以便在工作表上的所有其他规则之后计算此规则。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AppliesTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScale/member/AppliesTo) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，指定格式规则将应用于的单元格区域。 |
| [ColorScaleCriteria](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScale/member/ColorScaleCriteria) | 返回一个 **[ColorScaleCriteria](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriteria/obj)** 对象，该对象是单个 **[ColorScaleCriterion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScaleCriterion/obj)** 对象的集合。 **ColorScaleCriterion** 对象指定用于色阶条件格式的阈值条件的类型、值和颜色。只读。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScale/member/Priority) | 返回或设置条件格式规则的优先级值。当工作表中存在多个条件格式规则时，优先级确定求值的顺序。 |
| [StopIfTrue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScale/member/StopIfTrue) | 返回一个 **Boolean** 值，该值确定在当前规则的计算结果为 **True** 时是否应计算单元格上的其他格式规则，只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ColorScale/member/Type) | 返回 **[XlFormatConditionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionType)** 枚举的常量之一，该常量指定条件格式的类型。只读。 |