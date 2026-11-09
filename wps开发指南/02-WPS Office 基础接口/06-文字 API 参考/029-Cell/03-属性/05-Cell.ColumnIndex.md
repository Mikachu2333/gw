# Cell.ColumnIndex

返回包含指定单元格的表格列数。 **Long** 类型，只读。



## 语法

express.**ColumnIndex**

express   一个代表 **Cell** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例在新文档中创建表格，选择第一行中的每个单元格，然后显示包含所选单元格的列数。*/
function test() {
    let document = Application.Documents.Add()
    let table = document.Tables.Add(Selection.Range, 3, 3)
    let cells = table.Rows.Item(1).Cells
    for (let i = 1; i <= cells.Count; i++) {
        cells.Item(i).Select()
        alert("这是列 " + cells.Item(i).ColumnIndex)
    }
}
```


```JavaScript
/*本示例显示选中内容的第一个单元格的表格列数。*/
function test() {
    alert(Application.Selection.Cells.Item(1).ColumnIndex)
}
```
