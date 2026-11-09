# PivotLine.PivotLineCellsFull

检索所有数据透视线单元格，包括以压缩形式隐藏的单元格。 此为只读属性。



## 语法

express.**PivotLineCellsFull**

express   一个代表 **PivotLine** 对象的变量。

## 类型

PivotLineCells

## 示例


```JavaScript
/*本示例显示活动工作表上数据透视表中列轴上第一条数据透视线检索单元格的数量。*/
function test() {
    let pvtLine = ActiveSheet.Range("I1").PivotTable.PivotColumnAxis.PivotLines(1)
    alert(pvtLine.PivotLineCellsFull.Count)
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上第一张数据透视表中行轴上第二条数据透视线是否检索所有隐藏的单元格。*/
function test() {
    let pvtLine = Worksheets.Item("Sheet1").PivotTables(1).PivotRowAxis.PivotLines(2)
    alert(pvtLine.PivotLineCellsFull.Full)
}
```
