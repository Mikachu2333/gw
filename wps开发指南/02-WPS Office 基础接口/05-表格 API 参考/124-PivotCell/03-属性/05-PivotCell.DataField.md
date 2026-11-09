# PivotCell.DataField

返回一个 **PivotField** 对象，该对象与所选数据字段相对应。



## 语法

express.**DataField**

express   一个代表 **PivotCell** 对象的变量。

## 类型

PivotField

## 说明


如果 **PivotCell** 对象不是 **XlPivotCellType** 允许的常量： **xlPivotCellTypeDataField** 、 **xlPivotCellTypeSubtotal** 或 **xlPivotCellTypeGrandTotal** 之一，那么该属性将返回一个错误。



## 示例


```JavaScript
/*本示例确定单元格 I2 是否在数据透视表的数据字段中，然后通过通知用户来返回对应于该单元格的数据透视表字段的值，或处理运行错误。本示例假定数据透视表位于活动工作表上。*/
function test() {
    try {
        alert(Application.Range("I2").PivotCell.DataField.Value)
    } catch (exception) {
        alert("The selected range is not in the data field of the PivotTable.")
    }
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表行轴上第一条数据透视线PivotLineCells属性的第一个PivotCell对象对应字段汇总时所使用的函数是否为 xlSum。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotRowAxis.PivotLines(1)
    alert(pvtLine.PivotLineCells.Item(1).DataField.Function == xlSum)
}
```
