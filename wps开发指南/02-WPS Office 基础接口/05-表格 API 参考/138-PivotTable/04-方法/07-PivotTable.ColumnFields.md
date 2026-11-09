# PivotTable.ColumnFields

返回一个对象，该对象表示单个的数据透视表字段（ **PivotField** 对象）或当前显示为列字段的所有字段的集合（ **PivotFields** 对象）。只读。



## 语法

express.**ColumnFields(Index)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 字段的名称或编号（可为指定多个字段的数组）。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例将数据透视表的列字段名称添加到一张新工作表上的数据清单中。*/
function test() {
    let nwSheet = Worksheets.Add()
    nwSheet.Activate()
    let pvtTable = Worksheets.Item("Sheet1").Range("A4").PivotTable
    let rw = 0
    for (let i = 1; i <= pvtTable.ColumnFields().Count; i++) {
        rw++
        nwSheet.Cells.Item(rw, 1).Value2 = pvtTable.ColumnFields(i).Name
    }
}
```


```JavaScript
/*本示例显示活动工作表中第一个数据透视表的列字段数量*/
function test() {
    alert(ActiveSheet.PivotTables(1).ColumnFields().Count)
}
```
