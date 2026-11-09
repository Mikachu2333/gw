# AboveAverage 对象

代表条件格式规则的高于平均值的视图。对某一区域或选定内容应用颜色或填充有助于您查看与其他单元格相关的单元格的值。

## 说明


所有条件格式对象均包含在 **[FormatConditions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/obj)** 集合对象中，该集合对象是 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 集合的子项。您可以使用 **FormatConditions** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/Add)** 或 **[AddAboveAverage](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/member/AddAboveAverage)** 方法创建高于平均值格式规则。


## 示例


```JavaScript
/*本示例通过条件格式规则生成一个动态数据集并对高于平均值的值应用颜色。*/
function test() {
    //Building data for Melanie
    Range("A1").Value2 = "Name"
    Range("B1").Value2 = "Number"
    Range("A2").Value2 = "Melanie-1"
    Range("A2").AutoFill(Range("A2:A26"), xlFillDefault)
    Range("B2:B26").FormulaArray = "=INT(RAND()*101)"
    Range("B2:B26").Select()

    //Applying Conditional Formatting to items above the average.  Should appear green fill and dark green font.
    Selection.FormatConditions.AddAboveAverage()
    Selection.FormatConditions(Selection.FormatConditions.Count).SetFirstPriority()
    Selection.FormatConditions(1).AboveBelow = xlAboveAverage
    let font = Selection.FormatConditions(1).Font
    font.Color = RGB(0, 155, 115)
    font.TintAndShade = 0
    let interior = Selection.FormatConditions(1).Interior
    interior.PatternColorIndex = xlAutomatic
    interior.Color = RGB(5, 185, 115)
    interior.TintAndShade = 0
    alert("Added an Above Average Conditional Format to Melanie's data.  Press F9 to update values.")
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上区域 C1:C10 中第一个（AboveAverage）条件格式的AboveBelow属性，并设置该条件格式的内部颜色。*/
function test() {
    let aboveAverage = Application.Worksheets.Item("Sheet1").Range("C1:C10").FormatConditions.Item(1)
    aboveAverage.AboveBelow = xlEqualBelowAverage
    aboveAverage.Interior.ColorIndex = 10
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/Delete) | 删除指定的条件格式规则对象。 |
| [ModifyAppliesToRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/ModifyAppliesToRange) | 设置此格式规则所应用于的单元格区域。 |
| [SetFirstPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/SetFirstPriority) | 将此条件格式规则的优先级值设置为“1”，以便在工作表上的所有其他规则之前计算此规则。 |
| [SetLastPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/SetLastPriority) | 为此条件格式规则设置求值顺序，以便在工作表上的所有其他规则之后计算此规则。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AboveBelow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/AboveBelow) | 返回或设置 **[XlAboveBelow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlAboveBelow)** 枚举的常量之一，指定条件格式规则是否查找高于或低于区域的平均值或标准偏差的单元格值。 |
| [AppliesTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/AppliesTo) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，指定格式规则将应用于的单元格区域。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/Borders) | 返回一个 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Borders/obj)** 集合，该集合在条件格式规则的计算结果为 **True** 时指定单元格边框的格式。只读。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/Font) | 返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，该对象在条件格式规则的计算结果为 **True** 时指定字体格式。只读。 |
| [Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/Interior) | 返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，该对象在条件格式规则的计算结果为 **True** 时指定单元格的内部属性。只读。 |
| [NumStdDev](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/NumStdDev) | 返回或设置 **AboveAverage** 对象的数字标准偏差。可读/写 **Long** 类型。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/NumberFormat) | 在条件格式规则的计算结果为 **True** 时返回或设置应用于单元格的数字格式。 **Variant** 型，可读写。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/Priority) | 返回或设置条件格式规则的优先级值。当工作表中存在多个条件格式规则时，优先级确定求值的顺序。 |
| [StopIfTrue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/StopIfTrue) | 返回或设置一个 **Boolean** 值，该值确定在当前规则的计算结果为 **True** 时是否应计算单元格上的其他格式规则。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/AboveAverage/member/Type) | 返回 **[XlFormatConditionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionType)** 枚举的常量之一，该常量指定条件格式的类型。只读。 |