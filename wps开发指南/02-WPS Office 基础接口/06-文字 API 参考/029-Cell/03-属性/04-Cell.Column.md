# Cell.Column

返回一个 **Column** 对象，该对象代表包含指定单元格的表格列。只读。



## 语法

express.**Column**

express   一个代表 **Cell** 对象的变量。

## 类型

Column

## 示例


```JavaScript
/*本示例创建一个 3x5 表格并为偶数列设置宽度。*/
function test() {
    Application.Selection.Collapse(wdCollapseStart)
    let newTable = Application.ActiveDocument.Tables.Add(Selection.Range, 3, 5)
    for (let i = 1; i <= newTable.Rows.Item(1).Cells.Count; i++) {
        if ((newTable.Rows.Item(1).Cells.Item(i).ColumnIndex) % 2 == 0) {
            newTable.Rows.Item(1).Cells.Item(i).Column.SetWidth(36, wdAdjustNone)
        }
    }
}
```


```JavaScript
/*本示例创建一个 4x4 表格并将奇数列的单元格内边框设置为红色双线。*/
function test() {
    Application.Selection.Collapse(wdCollapseStart)
    let newTable = Application.ActiveDocument.Tables.Add(Selection.Range, 4, 4)
    let cells = newTable.Rows.Item(1).Cells
    for (let i = 1; i <= cells.Count; i++) {
        if ((cells.Item(i).ColumnIndex) % 2 == 1) {
            cells.Item(i).Column.Borders.InsideLineStyle = wdLineStyleDouble
            cells.Item(i).Column.Borders.InsideColor = wdColorRed
        }
    }
}
```
