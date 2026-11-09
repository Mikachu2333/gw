# PivotFormula.Index

返回或设置一个 **Long** 值，它代表 **PivotFormula** 对象在 **PivotFormulas** 集合中的索引号。



## 语法

express.**Index**

express   一个代表 **PivotFormula** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表中数据透视表名为“公式1”的公式的索引。*/
function test() {
    let pvtFormula = Worksheets.Item(1).Range("I1").PivotTable.PivotFormulas("公式1")
    alert(pvtFormula.Index)
}
```


```JavaScript
/*本示例将第一张工作表的第一张数据透视表中第二个公式的索引设置为 1 并显示。*/
function test() {
    let pvtFormula = Worksheets.Item(1).PivotTables(1).PivotFormulas.Item(2)
    pvtFormula.Index = 1
    alert(pvtFormula.Index)
}
```
