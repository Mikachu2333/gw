# PivotTable.RowFields

返回一个对象，该对象表示数据透视表中的单个字段（ **PivotField** 对象），或者当前未显示为行字段的所有字段的一个集合（ **PivotFields** 对象）。只读。



## 语法

express.**RowFields(Index)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 要返回的字段的名称或编号（可以是指定多个字段的数组）。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例在新工作表上的清单中添加数据透视表的行字段名称。*/
function test() {
    let nwSheet = Application.Worksheets.Add()
    nwSheet.Activate()
    let pvtTable = Worksheets("Sheet1").Range("F1").PivotTable
    let rw = 0
    for (let i = 1; i <= pvtTable.RowFields().Count; i++) {
        rw = rw + 1
        nwSheet.Cells.Item(rw, 1).Value2 = pvtTable.RowFields(i).Name
    }
}
```


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的行字段数量*/
function test() {
    alert(ActiveSheet.PivotTables(1).RowFields().Count)
}
```
