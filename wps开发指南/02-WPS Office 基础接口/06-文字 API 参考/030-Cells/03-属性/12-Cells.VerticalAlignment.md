# Cells.VerticalAlignment

返回或设置表格中一个或多个单元格中文字的垂直对齐方式。 **WdCellVerticalAlignment** 类型，可读写。



## 语法

express.**VerticalAlignment**

express   一个代表 **Cells** 对象的变量。

## 类型

WdCellVerticalAlignment

## 示例


```JavaScript
/*本示例在一个新文档中创建一个 3x3 表格，并为表格中的每个单元格分配连续的单元格号。然后将第一行的高度设置为 100 磅，并在单元格的顶端垂直对齐文本。*/
function test() {
    let newDoc = Application.Documents.Add()
    let table = newDoc.Tables.Add(Selection.Range, 3, 3)
    for (let i = 1; i <= table.Range.Cells.Count; i++) {
        table.Range.Cells.Item(i).Range.InsertAfter("Cell " + i)
    }
    let rng = table.Rows.Item(1)
    rng.Height = 100
    rng.Cells.VerticalAlignment = wdAlignVerticalTop
}
```


```JavaScript
/*本示例在一个新文档中创建一个 2x2 表格，并为表格中的每个单元格分配连续的单元格号。然后将第二行的高度设置为 40 磅，并在单元格的底端垂直对齐文本。*/
function test() {
    let newDoc = Application.Documents.Add()
    let table = newDoc.Tables.Add(Selection.Range, 2, 2)
    for (let i = 1; i <= table.Range.Cells.Count; i++) {
        table.Range.Cells.Item(i).Range.InsertAfter("Cell " + i)
    }
    let rng = table.Rows.Item(2)
    rng.Height = 40
    rng.Cells.VerticalAlignment = wdAlignVerticalBottom
}
```
