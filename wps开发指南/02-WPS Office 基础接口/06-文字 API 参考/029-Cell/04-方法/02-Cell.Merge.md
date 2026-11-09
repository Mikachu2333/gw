# Cell.Merge

将指定单元格与另一表格单元格合并，成为一个单独的表格单元格。



## 语法

express.**Merge(MergeTo)**

express   一个代表 **Cell** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| MergeTo | 必选 | Cell | 要合并的单元格。 |

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档中第一张表格的前两个单元格合并，然后删除表格的边框。*/
function test() {
    let tables = Application.ActiveDocument.Tables
    if (tables.Count >= 1) {
        tables.Item(1).Cell(1, 1).Merge(tables.Item(1).Cell(1, 2))
        tables.Item(1).Borders.Enable = false
    }
}
```


```JavaScript
/*本示例在活动文档中新建一个 3x3 的表格，再将第二行前两个单元格合并。*/
function test() {
    let newTable = Application.ActiveDocument.Tables.Add(Selection.Range, 3, 3)
    newTable.Cell(2, 1).Merge(newTable.Cell(2, 2))
}
```
