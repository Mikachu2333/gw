# Cell.VerticalAlignment

返回或设置表格中一个或多个单元格中文字的垂直对齐方式。 **WdCellVerticalAlignment** 类型，可读写。



## 语法

express.**VerticalAlignment**

express   一个代表 **Cell** 对象的变量。

## 类型

WdCellVerticalAlignment

## 示例


```JavaScript
/*本示例在一个新文档中创建一个 3x3 表格，并为表格中的每个单元格分配连续的单元格号，然后将第一行单元格的高度设置为 20 磅，并在顶端垂直对齐文本。*/
function test() {
    let newDoc = Application.Documents.Add()
    let newTable = newDoc.Tables.Add(Selection.Range, 3, 3)
    for (let i = 1; i <= newTable.Range.Cells.Count; i++) {
        newTable.Range.Cells.Item(i).Range.InsertAfter("cell" + i)
    }
    let row = newTable.Rows.Item(1)
    for (let j = 1; j <= row.Cells.Count; j++) {
        row.Cells.Item(j).Height = 20
        row.Cells.Item(j).VerticalAlignment = wdAlignVerticalTop
    }
}
```


```JavaScript
/*本示例显示活动文档中第一张表格的第一个单元格文本对齐方式是否为中心垂直对齐。*/
function test() {
    let table = ActiveDocument.Tables.Item(1)
    alert(table.Cell(1, 1).VerticalAlignment == wdCellAlignVerticalCenter)
}
```
