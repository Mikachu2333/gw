# Range.ConvertToTable

将范围内的文本转换为表格。将该表格作为一个 **Table** 对象返回。



## 语法

express.**ConvertToTable(Separator, NumRows, NumColumns, InitialColumnWidth, Format, ApplyBorders, ApplyShading, ApplyFont, ApplyColor, ApplyHeadingRows, ApplyLastRow, ApplyFirstColumn, ApplyLastColumn, AutoFit, AutoFitBehavior, DefaultTableBehavior)**

express   一个代表 **Range** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Separator | 可选 | any | 指定用于将文本分隔为多个单元格的字符。可以是一个字符，也可以是 **WdTableFieldSeparator** 常量之一。如果省略此参数，则使用 **DefaultTableSeparator** 属性的值。 |
| NumRows | 可选 | any | 表格中的行数。如果省略此参数，WPS 将根据该范围的内容设置行数。 |
| NumColumns | 可选 | any | 表格中的列数。如果省略此参数，WPS 将根据该范围的内容设置列数。 |
| InitialColumnWidth | 可选 | any | 每一列的初始宽度，以磅为单位。如果省略此参数，WPS 将计算并调整列宽，以使表格填满页面。 |
| Format | 可选 | any | 指定 **“表格自动套用格式”** 对话框中列出的一种预定义格式。可以是 **WdTableFormat** 常量之一。 |
| ApplyBorders | 可选 | any | 如果该参数值为 **True** ，则应用指定格式的边框属性。 |
| ApplyShading | 可选 | any | 如果该参数值为 **True** ，则应用指定格式的底纹属性。 |
| ApplyFont | 可选 | any | 如果该参数值为 **True** ，则应用指定格式的字体属性。 |
| ApplyColor | 可选 | any | 如果该参数值为 **True** ，则应用指定格式的颜色属性。 |
| ApplyHeadingRows | 可选 | any | 如果该参数值为 **True** ，则应用指定格式的标题行属性。 |
| ApplyLastRow | 可选 | any | 如果该参数值为 **True** ，则应用指定格式的最后一行的属性。 |
| ApplyFirstColumn | 可选 | any | 如果该参数值为 **True** ，则应用指定格式的第一列的属性。 |
| ApplyLastColumn | 可选 | any | 如果该参数值为 **True** ，则应用指定格式的最后一列的属性。 |
| AutoFit | 可选 | any | 如果该参数值为 **True** ，则在不改变单元格内文字的换行方式的前提下尽可能缩小表格列宽。 |
| AutoFitBehavior | 可选 | any | 设置 WPS 调整表格大小的“自动调整”规则。可以是 **WdAutoFitBehavior** 常量之一。如果_DefaultTableBehavior_ 为 **wdWord8TableBehavior** ，则忽略此参数。 |
| DefaultTableBehavior | 可选 | any | 设置用于指定 WPS 是否会自动调整表格中单元格的尺寸以适应内容（自动调整）的值。可以是 **WdDefaultTableBehavior** 常量之一。 |

## 返回值

Table

## 示例


```JavaScript
/*本示例将活动文档的前三段转换为一个表格。*/
function test() {
    let paragraphs = ActiveDocument.Paragraphs
    let range = ActiveDocument.Range(paragraphs.Item(1).Range.Start, paragraphs.Item(3).Range.End)
    range.ConvertToTable(wdSeparateByParagraphs)
}
```


```JavaScript
/*本示例将所选内容的文本转换为表格。*/
function test() {
    Selection.Range.ConvertToTable(wdSeparateByCommas, 3, 3, 10, wdTableFormatGrid2, true, false, true, true, null, false, true, false, false, wdAutoFitFixed, wdWord9TableBehavior)
}
```
