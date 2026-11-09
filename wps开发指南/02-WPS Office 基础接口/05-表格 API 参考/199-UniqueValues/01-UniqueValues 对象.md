# UniqueValues 对象

 **UniqueValues** 对象使用 **DupeUnique** 属性返回或设置一个枚举，该枚举确定规则是查找区域中的重复值还是唯一值。


## 示例


```JavaScript
/*本示例通过条件格式规则生成一个动态数据集并对重复值应用颜色。*/
function test() {
    Application.Range("A1").Value2 = "Name"
    Application.Range("B1").Value2 = "Number"
    Application.Range("A2").Value2 = "Agent1"
    Application.Range("A2").AutoFill(Application.Range("A2:A26"), xlFillDefault)
    Application.Range("B2:B26").FormulaArray = "=INT(RAND()*101)"
    Application.Range("B2:B26").Select()

    Application.Selection.FormatConditions.AddUniqueValues()
    Application.Selection.FormatConditions.Item(Application.Selection.FormatConditions.Count).SetFirstPriority()
    Application.Selection.FormatConditions.Item(1).DupeUnique = xlDuplicate

    let font = Application.Selection.FormatConditions.Item(1).Font
    font.ColorIndex = 3
    font.TintAndShade = 0
    let interior = Application.Selection.FormatConditions.Item(1).Interior
    interior.PatternColorIndex = xlAutomatic
    interior.ColorIndex = 5
    interior.TintAndShade = 0
}
```


```JavaScript
/*本示例设置第一张工作表上单元格区域 C1:C10 的第一个（UniqueValues）条件格式所应用于的单元格区域，并设置该条件格式内部唯一值的颜色。*/
function test() {
    let uniqueValues = Application.Worksheets.Item(1).Range("C1:C10").FormatConditions.Item(1)
    uniqueValues.ModifyAppliesToRange(Range("C7:C10"))
    uniqueValues.DupeUnique = xlUnique
    uniqueValues.Interior.ColorIndex = 7
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/Delete) | 删除指定的条件格式规则对象。 |
| [ModifyAppliesToRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/ModifyAppliesToRange) | 设置此格式规则所应用于的单元格区域。 |
| [SetFirstPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/SetFirstPriority) | 将此条件格式规则的优先级值设置为“1”，以便在工作表上的所有其他规则之前计算此规则。 |
| [SetLastPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/SetLastPriority) | 为此条件格式规则设置求值顺序，以便在工作表上的所有其他规则之后计算此规则。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象。只读。 |
| [AppliesTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/AppliesTo) | 返回一个 **Range** 对象，指定格式规则将应用于的单元格区域。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/Borders) | 返回一个 **Borders** 集合，该集合在条件格式规则的计算结果为 **True** 时指定单元格边框的格式。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DupeUnique](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/DupeUnique) | 返回或设置 **XlDupeUnique** 枚举的常量之一，指定条件格式规则是查找唯一的值还是查找重复的值。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/Font) | 返回一个 **Font** 对象，该对象在条件格式规则的计算结果为 **True** 时指定字体格式。只读。 |
| [Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/Interior) | 返回一个 **Interior** 对象，该对象在条件格式规则的计算结果为 **True** 时指定单元格的内部属性。只读。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/NumberFormat) | 在条件格式规则的计算结果为 **True** 时返回或设置应用于单元格的数字格式。 **Variant** 型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/Parent) | 返回指定对象的父对象。只读。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/Priority) | 返回或设置条件格式规则的优先级值。当工作表中存在多个条件格式规则时，优先级确定求值的顺序。 |
| [StopIfTrue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/StopIfTrue) | 返回或设置一个 **Boolean** 值，该值确定在当前规则的计算结果为 **True** 时是否应计算单元格上的其他格式规则。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UniqueValues/member/Type) | 返回 **XlFormatConditionType** 枚举的常量之一，该常量指定条件格式的类型。只读。 |