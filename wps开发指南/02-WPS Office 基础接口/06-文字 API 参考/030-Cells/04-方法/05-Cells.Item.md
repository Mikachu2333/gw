# Cells.Item

返回集合中的单个 **Cell** 对象。



## 语法

express.**Item(Index)**

express   一个代表 **Cells** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 必选 | number（int4 精度） | 要返回的单个对象。可以是代表单个对象序号位置的 **Long** 类型值。 |

## 返回值

Cell

## 示例


```JavaScript
/*本示例判断如果活动文档上表格的数量大于等于1，则选中第一张表格的第一行的第一个单元格。*/
function test() {
    let tables = Application.ActiveDocument.Tables
    if (tables.Count >= 1) {
        let cell = tables.Item(1).Rows.Item(1).Cells.Item(1)
        cell.Select()
    }
}
```


```JavaScript
/*本示例将活动文档中第一个表格的第二列的所有单元格的外部边框设置为红色。*/
function test() {
    let table = Application.ActiveDocument.Tables.Item(1)
    let cells = table.Columns.Item(2).Cells
    for (let i = 1; i <= cells.Count; i++) {
        cells.Item(i).Borders.OutsideColor = RGB(255, 0, 0)
    }
}
```
