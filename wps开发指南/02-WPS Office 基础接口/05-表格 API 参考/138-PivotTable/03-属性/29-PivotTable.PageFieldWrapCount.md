# PivotTable.PageFieldWrapCount

返回或设置数据透视表中每行或每列的页字段数目。 **Long** 类型，可读写。



## 语法

express.**PageFieldWrapCount**

express   一个代表 **PivotTable** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例使数据透视表先在一行中显示三个页字段，然后再显示下一个新行。*/
function test() {
    let pTab = Application.Worksheets.Item(1).PivotTables("Pivot1")
    pTab.PageFieldOrder = xlOverThenDown
    pTab.PageFieldWrapCount = 3
}
```


```JavaScript
/*本示例将数据透视表的 PageFieldWrapCount 属性设置为 5，并弹窗显示该属性的值*/
function test() {
    ActiveSheet.PivotTables(1).PageFieldWrapCount = 5
    alert(ActiveSheet.PivotTables(1).PageFieldWrapCount)
}
```
