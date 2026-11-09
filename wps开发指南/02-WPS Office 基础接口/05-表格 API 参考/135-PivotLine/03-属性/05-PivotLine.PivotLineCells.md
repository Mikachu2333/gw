# PivotLine.PivotLineCells

返回 PivotLine 中 **PivotCell** 对象的集合。只读。



## 语法

express.**PivotLineCells**

express   一个代表 **PivotLine** 对象的变量。

## 类型

PivotLineCells

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表中行轴上第一条数据透视线“PivotCell”对象的数量。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotRowAxis.PivotLines(1)
    alert(pvtLine.PivotLineCells.Count)
}
```


```JavaScript
/*本示例显示活动工作表上数据透视表中列轴上第一条数据透视线的PivotLineCells属性中第一个PivotCell应用区域的值。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotColumnAxis.PivotLines(1)
    alert(pvtLine.PivotLineCells.Item(1).Range.Value2)
}
```
