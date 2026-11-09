# PivotTable.DataFields

返回一个对象，该对象表示单个数据透视表字段（ **PivotField** 对象）或当前显示为数据字段的所有字段集合（ **PivotFields** 对象）。只读。



## 语法

express.**DataFields(Index)**

express   一个代表 **PivotTable** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Index | 可选 | any | 字段的名称或编号（可为指定多个字段的数组）。 |

## 返回值

Object

## 示例


```JavaScript
/*本示例向一张新工作表中添加数据透视表数据字段的名称列表。*/
function test() {
    let nwSheet = Worksheets.Add()
    nwSheet.Activate()
    let pvtTable = Worksheets.Item("Sheet1").Range("A4").PivotTable
    let rw = 0
    for (let i = 1; i <= pvtTable.DataFields().Count; i++) {
        rw++
        nwSheet.Cells.Item(rw, 1).Value2 = pvtTable.DataFields(i).Name
    }
}
```


```JavaScript
/*本示例显示活动工作表中第一张数据透视表数据字段的数量*/
function test() {
    alert(ActiveSheet.PivotTables(1).DataFields().Count)
}
```
