# Style 对象

代表区域的样式说明。

## 说明


 **Style** 对象包含样式的所有属性（字体、数字格式、对齐方式，等等）。有几种内置样式，包括“常规”、“货币”和“百分比”。同时对多个单元格修改单元格格式属性时，使用 **Style** 对象是快捷高效的方法。

对于 [ **Workbook** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/obj) 对象， **Style** 对象是 [ **Styles** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/obj) 集合的成员。 **Styles** 集合包含该工作簿的所有已定义样式。

通过更改应用于单元格的样式的属性可更改单元格的外观。但要记住，更改样式的属性将影响所有以该样式格式化了的单元格。

样式按照名称的字母顺序排序。样式编号表明指定样式在样式名排序列表中的位置。`Styles(1)` 是排序列表中的第一个样式，而 `Styles(Styles.Count)` 是最后一个。

有关创建和修改样式的详细信息，请参阅 [ **Styles** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/obj) 对象。

使用 **Style** 属性可返回一个用于 **Range** 对象的 **Style** 对象。


## 示例


```JavaScript
/*本示例将“百分比”样式应用于 Sheet1 中的单元格区域 A1:A10。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1:A10").Style = "Percent"
}
```
使用 **Styles** (*index*)（其中 *index* 是样式索引号或名称）可从工作簿的 **Style** 集合中返回一个 **Styles** 对象。



```JavaScript
/*本示例通过设置样式的 Bold 属性来更改活动工作簿的 Normal 样式。*/
function test() {
    Application.ActiveWorkbook.Styles.Item("Normal").Font.Bold = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Delete) | 删除对象样式。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AddIndent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/AddIndent) | 返回或设置一个 **Boolean** 值，它指明当单元格中文本的对齐方式为水平或垂直等距分布时，文本是否为自动缩进。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Borders) | 返回一个 **Borders** 集合，它代表样式或单元格区域（包括定义为条件格式一部分的区域）的边框。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Font) | 返回一个[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj) 对象，它代表指定对象的字体。 |
| [FormulaHidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/FormulaHidden) | 返回或设置一个 **Boolean** 值，它指明在工作表处于保护状态时是否隐藏公式。 |
| [HorizontalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/HorizontalAlignment) | 返回或设置一个 [XlHAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlHAlign) 值，它代表指定对象的水平对齐方式。 |
| [IncludeAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/IncludeAlignment) | 如果样式包含 **AddIndent** 、 **HorizontalAlignment** 、 **VerticalAlignment** 、 **WrapText** 、 **IndentLevel** 和 **Orientation** 属性，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IncludeBorder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/IncludeBorder) | 如果指定样式中包含 **Color** 、 **ColorIndex** 、 **LineStyle** 和 **Weight** 边框属性，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IncludeFont](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/IncludeFont) | 如果样式包含 **[Background](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Background)** 、 **[Bold](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Bold)** 、 **Color** 、 **[ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/ColorIndex)** 、 **[FontStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/FontStyle)** 、 **[Italic](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Italic)** 、 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Name/obj)** 、 **Size** 、 **[Strikethrough](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Strikethrough)** 、 **[Subscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Subscript)** 、 **[Superscript](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Superscript)** 和 **[Underline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/member/Underline)** 字体属性，则此属性为 **True** 。 **Boolean** 类型，可读写。 |
| [IncludeNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/IncludeNumber) | 如果样式中包含 **NumberFormat** 属性，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IncludePatterns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/IncludePatterns) | 如果指定样式中包含 **Color** 、 **ColorIndex** 、 **InvertIfNegative** 、 **Pattern** 、 **PatternColor** 和 **PatternColorIndex** 对象的内部属性，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IncludeProtection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/IncludeProtection) | 如果指定样式中包含 **FormulaHidden** 和 **Locked** 保护属性，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IndentLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/IndentLevel) | 返回或设置一个 **Long** 值，它代表样式的缩进量。 |
| [Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Interior) | 返回一个 **Interior** 对象，它代表指定对象的内部。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Locked) | 返回或设置一个 **Boolean** 值，它指明对象是否已被锁定。 |
| [MergeCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/MergeCells) | 如果样式包含合并的单元格，则为 **True** 。 **Variant** 型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/NumberFormat) | 返回或设置一个 **String** 值，它代表对象的格式代码。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/NumberFormatLocal) | 以采用用户语言字符串的形式返回或设置一个 **String** 值，它代表对象的格式代码。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Orientation) | 返回或设置一个 **[XlOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlOrientation)** 值，它代表文本方向。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Parent) | 返回指定对象的父对象。只读。 |
| [ReadingOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/ReadingOrder) | 返回或设置指定对象的阅读次序。可为以下常量之一： **xlRTL** （从右到左）、 **xlLTR** （从左到右）或 **xlContext** 。 **Long** 类型，可读写。 |
| [ShrinkToFit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/ShrinkToFit) | 返回或设置一个 **Boolean** 值，它指明文本是否可以自动收缩为适当尺寸以适应可用列宽。 |
| [Value](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/Value) | 返回一个 **String** 值，它代表指定样式的名称。 |
| [VerticalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/VerticalAlignment) | 返回或设置一个 **[XlVAlign](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlVAlign)** 值，它代表指定对象的垂直对齐方式。 |
| [WrapText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/WrapText) | 返回或设置一个 **Boolean** 值，它指明 ET 是否为对象中的文本自动换行。 |