# PivotTable.PivotFormulas

返回一个 **PivotFormulas** 对象，该对象表示指定数据透视表的公式集合。只读。



## 语法

express.**PivotFormulas**

express   一个代表 **PivotTable** 对象的变量。

## 类型

PivotFormulas

## 说明


对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源，该属性将返回一个空集合。



## 示例


```JavaScript
/*本示例将活动工作表中第一张数据透视表的公式赋值到单元格中。*/
function test() {
    let r = 10
    for (let i = 1; i <= Application.ActiveSheet.PivotTables(1).PivotFormulas.Count; i++) {
        r++
        Cells.Item(r, 1).Value2 = Application.ActiveSheet.PivotTables(1).PivotFormulas.Item(i).Formula
    }
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中第一张数据透视表的第一个公式的名称*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").PivotTables(1)
    alert(pvtTable.PivotFormulas.Item(1).Value)
}
```
