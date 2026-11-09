# FormatCondition 对象

代表条件格式。

## 说明


 **FormatCondition** 对象是 **[FormatConditions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatConditions/obj)** 集合的成员。对于给定区域， **FormatConditions** 集合中包含的条件格式不能超过三个。

使用 **Add** 方法可新建条件格式。如果区域内存在多种格式，则可使用 **Modify** 方法更改其中一种格式，或使用 **Delete** 方法删除一种格式，然后使用 **Add** 方法创建一种新格式。

使用 **FormatCondition** 对象的 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Font)** 、 **[Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Borders)** 和 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Interior)** 属性可控制已设置格式的单元格的外观。条件格式对象模型不支持这些对象的某些属性。下表列出所有可与条件格式一起使用的属性。

| 对象           | 属性                                                                                                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Font**     | **Bold**  **Color**  **ColorIndex**  **FontStyle**  **Italic**  **Strikethrough**  **Underline**  无法使用会计用下划线样式。                                                                                                                                                                |
| **Border**   | **Bottom**  **Color**  **Left**  **Right**  **Style**  可使用下列边框样式（其他均不可用）： **xlNone** 、 **xlSolid** 、 **xlDash** 、 **xlDot** 、 **xlDashDot** 、 **xlDashDotDot** 、 **xlGray50** 、 **xlGray75** 和 **xlGray25** 。 **Top**  **Weight**  可使用下列边框粗细（其他均不可用）： **xlWeightHairline** 和 **xlWeightThin** 。 |
| **Interior** | **Color**  **ColorIndex**  **Pattern**  **PatternColorIndex**                                                                                                                                                                                                               |

使用 **FormatConditions** (*index*)（其中 *index* 为条件格式的索引号）可返回 **FormatCondition** 对象。


## 示例


```JavaScript
/*本示例设置第一张工作表上 E1:E10 单元格的现有条件格式的格式属性。*/
function test() {
    let formatCondition = Application.Worksheets.Item(1).Range("E1:E10").FormatConditions.Item(1)
    let boders = formatCondition.Borders
    boders.LineStyle = xlContinuous
    boders.Weight = xlThin
    boders.ColorIndex = 6
    let font = formatCondition.Font
    font.Bold = true
    font.ColorIndex = 3
}
```


```JavaScript
/*本示例设置活动工作表上单元格区域 A1:A10 的第一个条件格式所应用于的单元格区域，并修改现有条件格式。*/
function test() {
    let formatCondition = ActiveSheet.Range("A1:A10").FormatConditions.Item(1)
    formatCondition.ModifyAppliesToRange(Range("A2:A9"))
    formatCondition.Modify(xlCellValue, xlBetween, "=4", "=7")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Delete) | 删除对象。 |
| [Modify](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Modify) | 更改现有条件格式。 |
| [ModifyAppliesToRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/ModifyAppliesToRange) | 设置此格式规则所应用于的单元格区域。 |
| [SetFirstPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/SetFirstPriority) | 将此条件格式规则的优先级值设置为“1”，以便在工作表上的所有其他规则之前计算此规则。 |
| [SetLastPriority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/SetLastPriority) | 为此条件格式规则设置求值顺序，以便在工作表上的所有其他规则之后计算此规则。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AppliesTo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/AppliesTo) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，指定格式规则将应用于的单元格区域。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Borders) | 返回一个 **Borders** 集合，它代表样式或单元格区域（包括定义为条件格式一部分的区域）的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DateOperator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/DateOperator) | 指定格式条件中所用的日期运算符。可读/写。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Font) | 返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，它代表指定对象的字体。 |
| [Formula1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Formula1) | 返回与条件格式或者数据有效性相关联的值或表达式。可为常量值、字符串值、单元格引用或公式。 **String** 型，只读。 |
| [Formula2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Formula2) | 返回与条件格式或数据有效性验证第二部分相关联的值或表达式。仅用于数据有效性条件格式 **[Operator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Operator)** 属性为 **xlBetween** 或 **xlNotBetween** 的情况。可为常量值、字符串值、单元格引用或公式。 **String** 类型，只读。 |
| [Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Interior) | 返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，它代表指定对象的内部。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/NumberFormat) | 在条件格式规则的计算结果为 **True** 时返回或设置应用于单元格的数字格式。 **Variant** 型，可读写。 |
| [Operator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Operator) | 返回一个 **Long** 值，它代表条件格式的操作符。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Parent) | 返回指定对象的父对象。只读。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Priority) | 返回或设置条件格式规则的优先级值。当工作表中存在多个条件格式规则时，优先级确定求值的顺序。 |
| [StopIfTrue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/StopIfTrue) | 返回或设置一个 **Boolean** 值，该值确定在当前规则的计算结果为 **True** 时是否应计算单元格上的其他格式规则。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Text) | 返回或设置一个 **String** 类型的值，该值指定条件格式规则所用的文本字符串。 |
| [TextOperator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/TextOperator) | 返回或设置一个 **[XlContainsOperator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlContainsOperator)** 枚举常量，该常量指定条件格式规则执行的文本搜索。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FormatCondition/member/Type) | 返回一个包含 **[xlFormatConditionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFormatConditionType)** 值的 **Long** 值，它代表对象类型。 |