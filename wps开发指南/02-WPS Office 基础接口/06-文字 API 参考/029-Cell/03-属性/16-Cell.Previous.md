# Cell.Previous

返回一个 **Cell** 对象，该对象代表 **Cells** 集合中的前一个表格单元格。只读。



## 语法

express.**Previous**

express   一个代表 **Cell** 对象的变量。

## 类型

Cell

## 示例


```JavaScript
/*如果选定内容位于表格中，则本示例选定其前一个单元格的内容。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        Application.Selection.Cells.Item(1).Previous.Select()
    }
}
```


```JavaScript
/*本示例新建一个 3x3 的表格，在新建表格的第2行第2列单元格写入test_Previous，并选定前一个单元格。*/
function test() {
    let newTable = Application.ActiveDocument.Tables.Add(Selection.Range, 3, 3)
    let cell = newTable.Cell(2, 2)
    cell.Range.Text = "test_Previous"
    cell.Previous.Select()
}
```
