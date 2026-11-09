# Cells.PreferredWidthType

返回或设置用于指定单元格的宽度的首选度量单位。 **WdPreferredWidthType** 类型，可读写。



## 语法

express.**PreferredWidthType**

express   一个代表 **Cells** 对象的变量。

## 类型

WdPreferredWidthType

## 示例


```JavaScript
/*本示例将活动文档上第一张表格的第一行单元格的宽度度量单位设置为wdPreferredWidthPercent，并将PreferredWidth设置为窗口宽度的50%。*/
function test() {
    let cells = Application.ActiveDocument.Tables.Item(1).Rows.Item(1).Cells
    cells.PreferredWidthType = wdPreferredWidthPercent
    cells.PreferredWidth = 50
}
```


```JavaScript
/*本示例显示第一个文档上第一张表格的第一列单元格的宽度度量单位是否为wdPreferredWidthPoints。*/
function test() {
    let cells = Application.Documents.Item(1).Tables.Item(1).Columns.Item(1).Cells
    alert(cells.PreferredWidthType == wdPreferredWidthPoints)
}
```
