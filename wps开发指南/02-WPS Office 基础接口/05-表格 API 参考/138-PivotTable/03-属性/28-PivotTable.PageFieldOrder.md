# PivotTable.PageFieldOrder

返回或设置页字段在数据透视表布局上的顺序。可为以下 **XlOrder** 常量之一： **xlDownThenOver** 或 **xlOverThenDown** 。默认常量是 **xlDownThenOver** 。 **Long** 类型，可读写。



## 语法

express.**PageFieldOrder**

express   一个代表 **PivotTable** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例使数据透视表先在一行中显示三个页字段，然后再显示下一个新行。*/
function test() {
    Application.Worksheets.Item(1).PivotTables("Pivot1").PageFieldOrder = xlOverThenDown
    Application.Worksheets.Item(1).PivotTables("Pivot1").PageFieldWrapCount = 3
}
```


```JavaScript
/*本示例将数据透视表布局上的顺序设置为：向下处理行，然后向右逐个处理页或页面字段；并弹窗显示此属性。*/
function test() {
    ActiveSheet.PivotTables("Pivot1").PageFieldOrder = xlDownThenOver
    if (ActiveSheet.PivotTables("Pivot1").PageFieldOrder == xlDownThenOver) {
        alert("数据透视表布局上的顺序为：向下处理行，然后向右逐个处理页或页面字段。")
    }
}
```
