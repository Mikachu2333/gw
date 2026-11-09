# Cell.RowIndex

返回指定单元格所在行的行数。 **Long** 类型，只读。



## 语法

express.**RowIndex**

express   一个代表 **Cell** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在新文档中创建一个 3x3 表格，选定第一列的每个单元格，然后显示包含所选单元格的行的行号。*/
function test() {
    let newDoc = Application.Documents.Add()
    let newTable = newDoc.Tables.Add(Selection.Range, 3, 3)
    for (let i = 1; i <= newTable.Columns.Item(1).Cells.Count; i++) {
        newTable.Columns.Item(1).Cells.Item(i).Select()
        alert("This is row " + newTable.Columns.Item(1).Cells.Item(i).RowIndex)
    }
}
```


```JavaScript
/*本示例显示选定内容第一行的行号。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        alert(Application.Selection.Cells.Item(1).RowIndex)
    }
}
```
