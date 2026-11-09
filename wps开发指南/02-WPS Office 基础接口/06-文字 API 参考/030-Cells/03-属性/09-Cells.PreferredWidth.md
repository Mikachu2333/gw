# Cells.PreferredWidth

返回或设置指定单元格的首选宽度（以磅为单位或表示为窗口宽度的百分比）。 **Single** 类型，可读写。



## 语法

express.**PreferredWidth**

express   一个代表 **Cells** 对象的变量。

## 类型

number（float 精度）

## 说明


如果 **PreferredWidthType** 属性设置为 **wdPreferredWidthPoints** ，则 **PreferredWidth** 属性返回或设置宽度（以磅为单位）。如果 **PreferredWidthType** 属性设置为 **wdPreferredWidthPercent** ，则 **PreferredWidth** 属性返回或设置宽度（以窗口宽度的百分比表示）。



## 示例


```JavaScript
/*本示例将WPS设置为以窗口宽度的百分比来表示宽度，然后将选中的单元格PreferredWidth设置为50%*/
function test() {
    Application.Selection.Cells.PreferredWidthType = wdPreferredWidthPercent
    Application.Selection.Cells.PreferredWidth = 50
}
```


```JavaScript
/*本示例将活动文档上第一张表格的第一行单元格的宽度度量单位设置为wdPreferredWidthPoints，并将PreferredWidth设置为20磅。*/
function test() {
    let cells = Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Cells
    cells.PreferredWidthType = wdPreferredWidthPoints
    cells.PreferredWidth = 20
}
```
