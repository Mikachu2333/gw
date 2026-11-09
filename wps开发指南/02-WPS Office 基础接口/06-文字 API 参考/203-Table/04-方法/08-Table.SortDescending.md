# Table.SortDescending

以字母数字降序排列表格行。



## 语法

express.**SortDescending()**

express   一个代表 **Table** 对象的变量。

## 返回值

void

## 说明


将表格第一行视为域名记录，不进行排序。使用 **Sort** 方法将域名记录包含在排序中。

此方法提供针对包含数据列的邮件合并数据源进行排序的一种简化形式。对于大多数排序任务，请使用 **Sort** 方法。



## 示例


```JavaScript
/*本示例在新文档中创建一张 5x5 表格，将文本插入每个单元格，然后以字母数字降序对表格排序。*/
function test() {
    let newDoc = Documents.Add()
    let newTable = newDoc.Tables.Add(Selection.Range, 5, 5)
    for (let i = 1; i <= newTable.Rows.Count; i++) {
        for (let j = 1; j <= newTable.Columns.Count; j++) {
            let range = newTable.Cell(i, j).Range
            range.InsertAfter(`Cell ${i},${j}`)
        }
    }
    MsgBox('Click OK to sort in descending order.')
    newTable.SortDescending()
}
```


```JavaScript
/*本示例以字母数字降序排列插入点所在的表格。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Tables.Item(1).SortDescending()
    } else {
        MsgBox('The insertion point is not in a table.')
    }
}
```
