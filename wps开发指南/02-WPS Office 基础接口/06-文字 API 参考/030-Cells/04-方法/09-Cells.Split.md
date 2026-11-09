# Cells.Split

拆分表格单元格范围。



## 语法

express.**Split(NumRows, NumColumns, MergeBeforeSplit)**

express   一个代表 **Cells** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| NumRows | 可选 | any | 一个单元格或多个单元格拆分成的行数。 |
| NumColumns | 可选 | any | 一个单元格或多个单元格拆分成的列数。 |
| MergeBeforeSplit | 可选 | any | 如果该参数值为 **True** ，则在拆分多个单元格前会将它们相互合并。 |

## 返回值

void

## 示例


```JavaScript
/*本示例首先将选定单元格合并为一个单元格，然后将该单元格拆分为同一行中的三个单元格。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        Application.Selection.Cells.Split(1, 3, true)
    }
}
```


```JavaScript
/*本示例将活动文档上第一张表格的第二行单元格的拆分为6个单元格。*/
function test() {
    let cells = Application.ActiveDocument.Tables.Item(1).Rows.Item(2).Cells
    cells.Split(1, 2, false)
}
```
