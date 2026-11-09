# PivotTable.NullString

返回或设置当 **DisplayNullString** 为 **True** 时，在包含 null 值的单元格中显示的字符串。默认值为空字符串 ("")。 **String** 类型，可读写。



## 语法

express.**NullString**

express   一个代表 **PivotTable** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例使数据透视表在包含空值的单元格中显示“NA”。*/
function test() {
    Application.Worksheets.Item(1).PivotTables("Pivot1").NullString = "NA"
    Application.Worksheets.Item(1).PivotTables("Pivot1").DisplayNullString = true
}
```


```JavaScript
/*本示例使数据透视表在包含空值的单元格中显示 NULL，并弹窗显示此属性*/
function test() {
    ActiveSheet.PivotTables("Pivot1").DisplayNullString = true
    ActiveSheet.PivotTables("Pivot1").NullString = "NULL"
    alert(ActiveSheet.PivotTables("Pivot1").NullString)
}
```
