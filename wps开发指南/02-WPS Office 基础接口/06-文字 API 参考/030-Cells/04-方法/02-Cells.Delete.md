# Cells.Delete

删除一个或多个表格单元格并可选择控制如何移动剩余的单元格。



## 语法

express.**Delete(ShiftCells)**

express   一个代表 **Cells** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| ShiftCells | 可选 | any | 剩余单元格移动的方向。可以是任意 **WdDeleteCells** 常量。如果省略，最后删除的单元格的右侧单元格向左移动。 |

## 返回值

void

## 示例


```JavaScript
/*本示例判断如果活动文档上表格的数量大于等于1，则将第一张表格的第二行单元格删除。*/
function test() {
    let tables = Application.ActiveDocument.Tables
    if (tables.Count >= 1) {
        tables.Item(1).Rows.Item(2).Cells.Delete(wdDeleteCellsEntireRow)
    }
}
```


```JavaScript
/*本示例将表格中选中的单元格删除，并将剩余的单元格左移。*/
function test() {
    let cells = Application.Selection.Cells
    cells.Delete(wdDeleteCellsShiftLeft)
}
```
