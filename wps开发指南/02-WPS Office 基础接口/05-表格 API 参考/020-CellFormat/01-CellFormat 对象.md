# CellFormat 对象

代表单元格格式的搜索条件。

## 说明


使用 [ **Application** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj) 对象的 **FindFormat** 或 **ReplaceFormat** 属性可返回 **CellFormat** 对象。

使用 **CellFormat** 对象的 **Borders** 、 **Font** 属性或 **CellFormat** 对象的 **Interior** 属性可定义单元格格式的搜索条件。


## 示例


```JavaScript
/*本示例设置单元格格式内部的搜索条件。*/
function test() {
    // Set the interior of cell A1 to yellow.
    Application.Range("A1").Select()
    Application.Selection.Interior.ColorIndex = 36
    alert("The cell format for cell A1 is a yellow interior.")

    // Set the CellFormat object to replace yellow with green.
    Application.FindFormat.Interior.ColorIndex = 36
    Application.ReplaceFormat.Interior.ColorIndex = 35

    // Find and replace cell A1's yellow interior with green.
    ActiveCell.Replace("", "", xlPart, xlByRows, false, null, true, true)
    alert("The cell format for cell A1 is replaced with a green interior.")
}
```


```JavaScript
/*本示例将替换条件中单元格边框的粗细设置为 xlThick 。*/
function test() {
    Application.ReplaceFormat.Borders.Weight = xlThick
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/Clear) | 清除 **FindFormat** 和 **ReplaceFormat** 属性中的条件集。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [Borders](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/Borders) | 返回或设置一个 **Borders** 集合，它代表基于单元格边框格式的搜索条件。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/Font) | 返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，该对象允许用户根据单元格的字体格式设置或返回搜索条件。 |
| [FormulaHidden](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/FormulaHidden) | 返回或设置一个 **Variant** 值，它指明在工作表处于保护状态时是否隐藏公式。 |
| [HorizontalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/HorizontalAlignment) | 返回或设置一个 **Variant** 值，它代表指定对象的水平对齐方式。 |
| [IndentLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/IndentLevel) | 返回或设置一个 **Variant** 值，它代表单元格或单元格区域的缩进量。可为 0 到 15 之间的整数。 |
| [Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/Interior) | 返回一个 **[Interior](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Interior/obj)** 对象，该对象允许用户根据单元格内部格式设置或返回搜索条件。 |
| [Locked](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/Locked) | 返回或设置一个 **Variant** 值，它指明对象是否已被锁定。 |
| [MergeCells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/MergeCells) | 如果区域或样式包含合并单元格，则为 **True** 。 **Variant** 。可读写。 |
| [NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/NumberFormat) | 返回或设置一个 **Variant** 值，它代表对象的格式代码。 |
| [NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/NumberFormatLocal) | 以采用用户语言字符串的形式返回或设置一个 **Variant** 值，它代表对象的格式代码。 |
| [Orientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/Orientation) | 返回或设置一个 **Variant** 值，它代表文本方向。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/Parent) | 返回指定对象的父对象。只读。 |
| [ShrinkToFit](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/ShrinkToFit) | 返回或设置一个 **Variant** 值。该值表示文本是否自动缩小以适应可用列宽 |
| [VerticalAlignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/VerticalAlignment) | 返回或设置一个 **Variant** 值，它代表指定对象的垂直对齐方式。 |
| [WrapText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CellFormat/member/WrapText) | 返回或设置一个 **Variant** 值，它指明 ET 是否为对象中的文本自动换行。 |