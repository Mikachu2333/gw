# Cell.PreferredWidthType

返回或设置用于指定单元格的宽度的首选度量单位。 **WdPreferredWidthType** 类型，只读。



## 语法

express.**PreferredWidthType**

express   一个代表 **Cell** 对象的变量。

## 类型

WdPreferredWidthType

## 示例


```JavaScript
/*本示例将 WPS 设置为以窗口宽度的百分比来表示宽度，然后将文档中第一张表格的第一个单元格宽度设置为窗口宽度的 20%。*/
function test() {
    let cell = Application.ActiveDocument.Tables.Item(1).Cell(1, 1)
    cell.PreferredWidthType = wdPreferredWidthPercent
    cell.PreferredWidth = 20
}
```


```JavaScript
/*本示例显示活动文档上第一张表格的第一列的第二个单元格的宽度度量单位是否为wdPreferredWidthPercent。*/
function test() {
    let cell = Application.ActiveDocument.Tables.Item(1).Columns.Item(1).Cells.Item(2)
    alert(cell.PreferredWidthType == wdPreferredWidthPercent)
}
```
