# PivotTable.DataBodyRange

返回一个 **Range** 对象，它代表数据透视表中数值区域。只读。



## 语法

express.**DataBodyRange**

express   一个代表 **PivotTable** 对象的变量。

## 类型

Range

## 示例


```JavaScript
/*本示例将活动工作表中第一张数据透视表数值区域的第一个单元格内容改为KingSoft*/
function test() {
    ActiveSheet.PivotTables(1).DataBodyRange.Item(1).Value2 = "KingSoft"
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张数据透视表数值区域的地址*/
function test() {
    alert(Worksheets.Item("Sheet1").PivotTables(1).DataBodyRange.Address())
}
```
