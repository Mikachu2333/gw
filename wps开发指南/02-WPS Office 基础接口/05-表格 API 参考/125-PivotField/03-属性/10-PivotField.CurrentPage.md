# PivotField.CurrentPage

返回或设置页字段的当前页显示（仅对页字段有效）。 **PivotItem** 类型，可读写。



## 语法

express.**CurrentPage**

express   一个代表 **PivotField** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例将 Sheet1 上数据透视表中字段“id”的当前页名称返回到字符串变量 `strPgName` 中并显示。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("I2").PivotTable
    let strPgName = pvtTable.PivotFields("id").CurrentPage
    alert(strPgName)
}
```


```JavaScript
/*本示例将活动工作表第一张数据透视表的页字段“id”显示的当前页设置为“5”。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields("id").CurrentPage = "5"
}
```
