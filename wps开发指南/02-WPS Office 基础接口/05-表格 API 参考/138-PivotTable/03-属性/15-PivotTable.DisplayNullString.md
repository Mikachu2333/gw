# PivotTable.DisplayNullString

如果数据透视表在包含空值的单元格中显示用户自定义的字符串，则该值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayNullString**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 说明


使用 **NullString** 属性可设置自定义空字符串。



## 示例


```JavaScript
/*本示例使数据透视表在包含空值的单元格中显示“NA”。*/
function test() {
    Application.Worksheets.Item(1).PivotTables("Pivot1").NullString = "NA"
    Application.Worksheets.Item(1).PivotTables("Pivot1").DisplayNullString = true
}
```


```JavaScript
/*本示例使数据透视表在包含空值的单元格中显示零 (0)。*/
function test() {
    Application.Worksheets.Item(1).PivotTables("Pivot1").DisplayNullString = false
}
```
