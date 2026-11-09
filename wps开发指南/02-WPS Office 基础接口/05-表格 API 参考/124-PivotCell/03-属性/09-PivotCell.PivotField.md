# PivotCell.PivotField

返回一个 **PivotField** 对象，它代表指定区域左上角所在的数据透视表字段。



## 语法

express.**PivotField**

express   一个代表 **PivotCell** 对象的变量。

## 类型

PivotField

## 示例


```JavaScript
/*此示例显示包含活动单元格的数据透视项的数据透视表字段的名称。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    alert("The active cell is in the field " + ActiveCell.PivotCell.PivotField.Name)
}
```


```JavaScript
/*本示例将工作表 Sheet1 上第一张数据透视表行轴上第一条数据透视线PivotLineCells属性的第一个PivotCell对应透视表字段的区域选中。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotRowAxis.PivotLines(1)
    pvtLine.PivotLineCells.Item(1).PivotField.DataRange.Select()
}
```
