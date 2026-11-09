# PivotField.NumberFormat

返回或设置一个 **String** 值，它代表对象的格式代码。



## 语法

express.**NumberFormat**

express   一个代表 **PivotField** 对象的变量。

## 类型

string

## 说明


只能对数据字段设置 **NumberFormat** 属性。

格式代码与 **“设置单元格格式”** 对话框中的 **“格式代码”** 选项是同一个字符串。 **Format** 函数使用的格式代码字符串与 **NumberFormat** 和 **NumberFormatLocal** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例显示第一张工作表中数据透视表的字段“id”的格式代码。*/
function test() {
    let pvtField = Worksheets.Item(1).Range("I1").PivotTable.PivotFields("id")
    alert(pvtField.NumberFormat)
}
```


```JavaScript
/*本示例设置活动工作表中第一张数据透视表的字段“score”的格式代码。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields("score").NumberFormat = "0.00"
}
```
