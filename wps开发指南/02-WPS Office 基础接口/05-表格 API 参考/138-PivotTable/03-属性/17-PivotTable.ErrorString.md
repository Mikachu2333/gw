# PivotTable.ErrorString

返回或设置一个 **String** 值，它代表 **DisplayErrorString** 属性为 **True** 时如果单元格中有错误而显示的字符串。



## 语法

express.**ErrorString**

express   一个代表 **PivotTable** 对象的变量。

## 类型

string

## 说明


该属性的默认值是个空字符串 ("")。



## 示例


```JavaScript
/*对于指定数据透视表中有错误的单元格，本示例将在单元格中显示连字符。*/
function test() {
    Application.Worksheets.Item(1).PivotTables("Pivot1").ErrorString = "-"
    Application.Worksheets.Item(1).PivotTables("Pivot1").DisplayErrorString = true
}
```


```JavaScript
/*本示例指定数据透视表中有错误的单元格值显示为 error，并弹框展示该属性的值*/
function test() {
    ActiveSheet.PivotTables("Pivot1").DisplayErrorString = true
    ActiveSheet.PivotTables("Pivot1").ErrorString = "error"
    alert(ActiveSheet.PivotTables("Pivot1").ErrorString)
}
```
