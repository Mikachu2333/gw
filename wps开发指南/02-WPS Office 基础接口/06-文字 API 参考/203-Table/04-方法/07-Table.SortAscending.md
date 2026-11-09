# Table.SortAscending

按字母数字升序对段落或表格行进行排序。



## 语法

express.**SortAscending()**

express   一个代表 **Table** 对象的变量。

## 返回值

void

## 说明


将表格第一行视为域名记录，不进行排序。可用 **Sort** 方法将首行包括在排序中。此方法提供针对包含数据列的邮件合并数据源进行排序的一种简化形式。对于大多数排序任务，请使用 **Sort** 方法。



## 示例


```JavaScript
/*本示例以升序排列包含所选内容的表格。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Tables.Item(1).SortAscending()
    } else {
        MsgBox('The insertion point is not in a table.')
    }
}
```


```JavaScript
/*本示例在新文档中创建一张 4x4 表格，将文本插入每个单元格，然后以字母数字升序对表格排序。*/
function test() {
    let newDocument = Documents.Add()
    let newTable = newDocument.Tables.Add(Selection.Range, 4, 4)
    for (let i = 1; i <= newTable.Rows.Count; i++) {
        for (let j = 1; j <= newTable.Columns.Count; j++) {
            let range = newTable.Rows.Item(newTable.Rows.Count - i + 1).Cells.Item(newTable.Columns.Count - j + 1).Range
            range.InsertAfter('Cell ' + i + ',' + j)
        }
    }
    newTable.SortAscending()
}
```
