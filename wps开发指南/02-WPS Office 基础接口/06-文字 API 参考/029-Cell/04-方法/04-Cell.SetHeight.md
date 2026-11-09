# Cell.SetHeight

设置表格单元格的高度。



## 语法

express.**SetHeight(RowHeight, HeightRule)**

express   一个代表 **Cell** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| RowHeight | 必选 | any | 一行或多行的高度，以磅为单位。 |
| HeightRule | 必选 | WdRowHeightRule | 用于确定指定单元格高度的方法。 |

## 返回值

void

## 说明


设置 **Cell** 对象的 **SetHeight** 属性可自动为整行设置该属性。



## 示例


```JavaScript
/*本示例判断如果选中内容位于表格，则将选定内容中第一个单元格的行高设置为至少 18 磅。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        let cell = Application.Selection.Cells.Item(1)
        cell.SetHeight(18, wdRowHeightAtLeast)
    } else {
        alert("The insertion point is not in a table.")
    }
}
```


```JavaScript
/*本示例将活动文档上第一个表格的所有单元格的高度设置为 50 磅。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    for (let i = 1; i <= table.Rows.Count; i++) {
        for (let j = 1; j <= table.Columns.Count; j++) {
            table.Cell(i, j).SetHeight(50, wdRowHeightExactly)
        }
    }
}
```
