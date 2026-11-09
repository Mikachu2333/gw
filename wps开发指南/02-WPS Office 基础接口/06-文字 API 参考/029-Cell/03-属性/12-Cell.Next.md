# Cell.Next

返回一个 **Cell** 对象，该对象代表 **Cells** 集合中的下一个表格单元格。只读。



## 语法

express.**Next**

express   一个代表 **Cell** 对象的变量。

## 类型

Cell

## 示例


```JavaScript
/*如果选定内容位于表格之中，则本示例选定表格中下一个单元格的内容。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        Application.Selection.Cells.Item(1).Next.Select()
    }
}
```


```JavaScript
/*本示例新建一个 3x3 的表格，在新建表格的第2行第2列单元格写入test_next，并选中下一个单元格。*/
function test() {
    let newtable = Application.ActiveDocument.Tables.Add(Selection.Range, 3, 3)
    let cell = newtable.Cell(2, 2)
    cell.Range.Text = "test_next"
    cell.Next.Select()
}
```
