# PivotField.CalculatedItems

返回一个 **CalculatedItems** 集合，该集合表示指定数据透视表中的所有计算项。只读。



## 语法

express.**CalculatedItems()**

express   一个代表 **PivotField** 对象的变量。

## 返回值

CalculatedItems

## 说明


对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源，该方法返回一个长度为零的集合。



## 示例


```JavaScript
/*本示例创建计算项及其公式的列表。*/
function test() {
    let pt = Application.Worksheets.Item(1).PivotTables(1)
    let r = 0
    for (let i = 1; i <= pt.PivotFields("name").CalculatedItems().Count; i++) {
        r++
        Application.Worksheets.Item(2).Cells.Item(r, 1).Value2 = pt.PivotFields("name").CalculatedItems().Item(i).Name
        Application.Worksheets.Item(2).Cells.Item(r, 2).Value2 = "'" + pt.PivotFields("name").CalculatedItems().Item(i).Formula
    }
}
```


```JavaScript
/*本示例为工作表 Sheet1 上数据透视表的字段“id”添加计算项。*/
function test() {
    let pvtField = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("id")
    pvtField.CalculatedItems().Add("张四的期末成绩", "='4'+10")
}
```
