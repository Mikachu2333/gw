# TableStyle 对象

代表可应用于表格的单个样式。

## 说明


使用 **Style** 对象的 **Table** 属性可返回一个 **TableStyle** 对象。使用 **Borders** 属性可对整张表格应用边框。使用 **Condition** 方法可仅对表格的指定部分应用边框或底纹。


## 示例


```JavaScript
/*本示例创建一个新的表格样式，将特殊边框和底纹应用于首行、末行和末列。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Add("TableStyle 1", wdStyleTypeTable).Table
    // Apply a double border to the heading row
    tableStyle.Condition(wdFirstRow).Borders.Item(wdBorderBottom).LineStyle = wdLineStyleDouble

    // Apply a double border to the last column
    tableStyle.Condition(wdLastColumn).Borders.Item(wdBorderLeft).LineStyle = wdLineStyleDouble

    // Apply shading to last row
    tableStyle.Condition(wdLastRow).Shading.BackgroundPatternColor = wdColorGray125
}
```


```JavaScript
/*本示例显示活动文档上名为“普通表格”的表格样式的对齐方式是否为wdAlignRowCenter。*/
function test() {
    let tableStyle = ActiveDocument.Styles.Item("普通表格").Table
    alert(tableStyle.Alignment == wdAlignRowCenter)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Condition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/Condition) | 返回表示表格某个部分的特殊样式格式设置的 **[ConditionalStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ConditionalStyle/obj)** 对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Alignment](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/Alignment) | 返回或设置一个 **WdRowAlignment** 常量，该常量代表指定表格样式的对齐方式，可读写。 |
| [AllowBreakAcrossPage](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/AllowBreakAcrossPage) | 设置或返回一个 **Long** 类型的值，表明设置为特定样式的表格行中的文本行是否可以跨页断行。可读写。 |
| [BottomPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/BottomPadding) | 返回或设置在表格中单独的单元格或所有单元格内容的下方添加的间距（以磅为单位）。 **Single** 类型，可读写。 |
| [ColumnStripe](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/ColumnStripe) | 返回或设置一个 **Long** 类型的值，当样式指定奇数或偶数列成组时，该属性代表组中的列数。可读写。 |
| [LeftPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/LeftPadding) | 返回或设置在表格中所有单元格的内容左侧要增加的间距（以磅为单位）。可读写 **Single** 类型。 |
| [RightPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/RightPadding) | 返回或设置在表格的所有单元格的内容右侧要增加的间距（以磅为单位）。可读写 **Single** 类型。 |
| [RowStripe](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/RowStripe) | 返回或设置一个 **Long** 类型的值，当样式指定奇数或偶数行成组时，代表组中包含的行数。可读/写。 |
| [Spacing](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/Spacing) | 返回或设置采用表格样式的单元格的间距（以磅为单位）。可读写 **Single** 类型。 |
| [TopPadding](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/TopPadding) | 返回或设置表格中所有单元格的内容上方要增加的间距（以磅为单位）。可读写 **Single** 类型。 |