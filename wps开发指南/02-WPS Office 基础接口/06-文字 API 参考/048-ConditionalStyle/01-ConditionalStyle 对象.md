# ConditionalStyle 对象

用指定的表格样式设置选定表格的格式时，该对象代表应用于表格中指定区域的特殊格式。

## 说明


使用 **[TableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/obj)** 对象的 **[Condition](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TableStyle/member/Condition)** 方法返回 **ConditionalStyle** 对象。 **Shading** 属性可用来将底纹应用于表格中的指定区域。


## 示例


```JavaScript
/*本示例选定活动文档上第一个表格，然后分别设置名为“普通表格”的表格样式中奇数列和奇数行的底纹背景颜色。*/
function test() {
    ActiveDocument.Tables.Item(1).Select()
    let tableStyle = ActiveDocument.Styles.Item("普通表格").Table
    tableStyle.Condition(wdOddColumnBanding).Shading.BackgroundPatternColor = wdColorGray10
    tableStyle.Condition(wdOddRowBanding).Shading.BackgroundPatternColor = wdColorGray10
}
```
使用 **[Borders](#TODO)** 属性将边框应用于表格中的指定区域。



```JavaScript
/*本示例选中活动文档上第一个表格，然后设置名为“普通表格”的表格样式中第一行、第一列和最后一行的表格边框线型。*/
function test() {
    ActiveDocument.Tables.Item(1).Select()
    let tableStyle = ActiveDocument.Styles.Item("普通表格").Table
    tableStyle.Condition(wdFirstRow).Borders.Item(wdBorderBottom).LineStyle = wdLineStyleDouble
    tableStyle.Condition(wdFirstColumn).Borders.Item(wdBorderRight).LineStyle = wdLineStyleDouble
    tableStyle.Condition(wdLastRow).Borders.Item(wdBorderTop).LineStyle = wdLineStyleDouble
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ConditionalStyle/member/Font) | 返回或设置一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Font/obj)** 对象，该对象代表指定对象的字符格式。可读写。 |
| [ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ConditionalStyle/member/ParagraphFormat) | 返回或设置代表指定条件样式的段落设置的 **[ParagraphFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ParagraphFormat/obj)** 对象。可读/写。 |