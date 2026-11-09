# PivotFormula.Value

返回或设置一个 **String** 值，它代表数据透视表中指定的公式的名称。



## 语法

express.**Value**

express   一个代表 **PivotFormula** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表第一个公式的名称。*/
function test() {
    let pvtFormula = ActiveSheet.PivotTables(1).PivotFormulas(1)
    alert(pvtFormula.Value)
}
```


```JavaScript
/*本示例显示第一张工作表中数据透视表第二个公式的名称。*/
function test() {
    let pvtFormula = Worksheets.Item(1).Range("I1").PivotTable.PivotFormulas(2)
    alert(pvtFormula.Value)
}
```
