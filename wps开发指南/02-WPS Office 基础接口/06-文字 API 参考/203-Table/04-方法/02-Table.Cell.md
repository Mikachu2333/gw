# Table.Cell

返回一个 **Cell** 对象，该对象代表表格中的一个单元格。



## 语法

express.**Cell(Row, Column)**

express   一个代表 **Table** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Row | 必选 | number（int4 精度） | 要返回的表格行数。可以是介于 1 和表格行数之间的任意整数。 |
| Column | 必选 | number（int4 精度） | 要返回的表格列数。可以是介于 1 和表格列数之间的任意整数。 |

## 返回值

Cell

## 示例


```JavaScript
/*本示例在新文档中创建一个 3x3 表格，并在表格的第一个和最后一个单元格中插入文本*/
function test() {
    let newDocument = Application.Documents.Add()
    let newTable = newDocument.Tables.Add(Selection.Range, 3, 3)
    newTable.Cell(1, 1).Range.InsertAfter("First cell")
    newTable.Cell(newTable.Rows.Count, newTable.Columns.Count).Range.InsertAfter("Last Cell")
}
```


```JavaScript
/*本示例删除活动文档的第一个表格中的第一个单元格*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        ActiveDocument.Tables.Item(1).Cell(1, 1).Delete()
    }
}
```
