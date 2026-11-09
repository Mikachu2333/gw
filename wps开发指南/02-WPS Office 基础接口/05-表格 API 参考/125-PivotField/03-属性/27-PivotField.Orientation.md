# PivotField.Orientation

返回或设置一个 **XlPivotFieldOrientation** 值，它代表字段在指定的数据透视表中的位置。



## 语法

express.**Orientation**

express   一个代表 **PivotField** 对象的变量。

## 类型

XlPivotFieldOrientation

## 说明


对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。）数据源，当设置某一层中的一个字段的此属性值时，也会同时设置同一层中所有其他字段的方向。维字段只能在数据透视表的行、列和页字段区域中进行定向。度量字段则只能在数据区域中进行定向。将某一层或数据字段设置为 **xlHidden** 时，会将该层或字段从数据透视表中移出。



## 示例


```JavaScript
/*本示例显示“name”字段的方向。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("I1").PivotTable
    let pvtField = pvtTable.PivotFields("name")
    switch (pvtField.Orientation) {
        case xlHidden:
            alert("Hidden field")
            break
        case xlRowField:
            alert("Row field")
            break
        case xlColumnField:
            alert("Column field")
            break
        case xlPageField:
            alert("Page field")
            break
        case xlDataField:
            alert("Data field")
    }
}
```


```JavaScript
/*本示例将活动工作表中第一张数据透视表的字段“score”的在该透视表的位置设置为“xlDataField”。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields("score").Orientation = xlDataField
}
```
