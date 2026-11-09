# Databar 对象

代表数据条条件格式规则。通过对范围应用数据条，有助于查看相对于其他单元格的单元格的值。

## 说明


所有条件格式对象都包含在 **[FormatConditions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/obj)** 集合对象中，该集合对象是 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 集合的子项。可以使用 **FormatConditions** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Add)** 或 **[AddDatabar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/AddDatabar)** 方法创建数据条格式设置规则。

可以使用 **Databar** 对象的 **[MinPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/MinPoint)** 和 **[MaxPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/MaxPoint)** 属性设置数据范围的最短和最长数据条的值。这些属性会返回 **[ConditionValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConditionValue/obj)** 对象，使用该对象可指定如何计算阈值。

 **Databar** 对象还提供了另外一些属性，使用这些属性可指定在存在负值时显示的轴线，以及指定数据条的颜色和格式设置。


## 示例


```JavaScript
/*本示例将在活动工作表创建一个数据范围，然后对该范围应用数据条。为了明确显示中间值，使用ConditionValue对象将阈值的计算方式更改为百分点。*/
function test() {
    // Create a range of data with a couple of extreme values
    ActiveSheet.Range("D1").Value2 = 1
    ActiveSheet.Range("D2").Value2 = 45
    ActiveSheet.Range("D3").Value2 = 50
    ActiveSheet.Range("D2:D3").AutoFill(Range("D2:D8"))
    ActiveSheet.Range("D9").Value2 = 500
    Range("D1:D9").Select()

    // Create a data bar with default behavior
    let dataBar = Selection.FormatConditions.AddDatabar()
    alert("Because of the extreme values, middle data bars are very similar")

    // The MinPoint and MaxPoint properties return a ConditionValue object
    // which you can use to change threshold parameters
    dataBar.MinPoint.Modify(xlConditionValuePercentile, 5)
    dataBar.MaxPoint.Modify(xlConditionValuePercentile, 75)
}
```


```JavaScript
/*本示例将活动工作表上区域 A1:A10 中第一个条件格式（数据条）的填充色设置为渐变色，并设置该数据条的展示方向。*/
function test() {
    let databar = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    databar.BarFillType = xlDataBarFillGradient
    databar.Direction = xlRTL
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/Delete) | 删除指定的条件格式规则对象。 |
| [ModifyAppliesToRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/ModifyAppliesToRange) | 设置此格式规则所应用于的单元格区域。 |
| [SetFirstPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/SetFirstPriority) | 将此条件格式规则的优先级值设置为“1”，以便在工作表上的所有其他规则之前计算此规则。 |
| [SetLastPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/SetLastPriority) | 为此条件格式规则设置求值顺序，以便在工作表上的所有其他规则之后计算此规则。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AppliesTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/AppliesTo) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，指定格式规则将应用于的单元格区域。 |
| [AxisColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/AxisColor) | 返回条件格式为数据条的单元格的坐标轴颜色。只读。 |
| [AxisPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/AxisPosition) | 返回或设置由条件格式规则指定的数据条的坐标轴位置。可读/写。 |
| [BarBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/BarBorder) | 返回指定数据条边框的对象。只读。 |
| [BarColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/BarColor) | 返回一个可用于修改数据条条件格式中的数据条颜色的 **[FormatColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatColor/obj)** 对象。 |
| [BarFillType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/BarFillType) | 返回或设置数据条如何填充颜色。可读/写。 |
| [Direction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/Direction) | 返回或设置数据条的显示方向。可读/写。 |
| [MaxPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/MaxPoint) | 返回一个 **[ConditionValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConditionValue/obj)** 对象，该对象指定如何针对数据条条件格式对最长的数据条进行求值。 |
| [MinPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/MinPoint) | 返回一个 **[ConditionValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ConditionValue/obj)** 对象，该对象指定如何针对数据条条件格式对最短的数据条进行求值。 |
| [NegativeBarFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/NegativeBarFormat) | 返回与数据条条件格式规则关联的 **[NegativeBarFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/NegativeBarFormat/obj)** 对象。只读。 |
| [PercentMax](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/PercentMax) | 返回或设置一个以单元格宽度百分比形式指定最长数据条长度的 **Long** 值。 |
| [PercentMin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/PercentMin) | 返回或设置一个以单元格宽度百分比形式指定最短数据条长度的 **Long** 值。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/Priority) | 返回或设置条件格式规则的优先级值。当工作表中存在多个条件格式规则时，优先级确定求值的顺序。 |
| [ShowValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/ShowValue) | 返回或设置一个 **Boolean** 值，该值指定数据条条件格式应用于区域时是否显示单元格中的值。 |
| [StopIfTrue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/StopIfTrue) | 返回一个 **Boolean** 值，该值确定在当前规则的计算结果为 **True** 时是否应计算单元格上的其他格式规则，只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Databar/member/Type) | 返回 **[XlFormatConditionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionType)** 枚举的常量之一，该常量指定条件格式的类型。只读。 |