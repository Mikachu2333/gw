# PivotTable.PivotColumnAxis

返回 **PivotAxis** 对象，该对象表示整个列轴。只读 **PivotAxis** 类型。



## 语法

express.**PivotColumnAxis**

express   一个代表 **PivotTable** 对象的变量。

## 类型

PivotAxis

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 中第一张数据透视表中列轴上行的数量。*/
function test() {
    let ptb = Worksheets.Item("Sheet1").PivotTables(1)
    alert(ptb.PivotColumnAxis.PivotLines.Count)
}
```


```JavaScript
/*本示例显示活动工作表中名为“数据透视表1”的数据透视表中列轴上第一行的位置。*/
function test() {
    let ptb = Application.ActiveSheet.PivotTables("数据透视表1")
    alert(ptb.PivotColumnAxis.PivotLines.Item(1).Position)
}
```
