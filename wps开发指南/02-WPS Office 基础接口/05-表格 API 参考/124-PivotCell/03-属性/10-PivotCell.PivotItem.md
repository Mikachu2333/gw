# PivotCell.PivotItem

返回一个 **PivotItem** 对象，它代表指定区域左上角所在的数据透视表项。



## 语法

express.**PivotItem**

express   一个代表 **PivotCell** 对象的变量。

## 类型

PivotItem

## 示例


```JavaScript
/*此示例显示包含 Sheet1 中活动单元格的数据透视项的名称.*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    alert("The active cell is in the item " + ActiveCell.PivotCell.PivotItem.Name)
}
```


```JavaScript
/*本示例将工作表 Sheet1 上第一张数据透视表行轴上第一条数据透视线PivotLineCells属性的第二个PivotCell对象中透视项设置为不可见。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotRowAxis.PivotLines(1)
    pvtLine.PivotLineCells.Item(2).PivotItem.Visible = false
}
```
