# PivotField.DataRange

返回一个 **Range** 对象，如下表所示。只读。



## 语法

express.**DataRange**

express   一个代表 **PivotField** 对象的变量。

## 类型

Range

## 说明


| 对象       | 数据区域        |
| -------- | ----------- |
| “数据”字段   | 字段中包含的数据    |
| 行、列或者页字段 | 字段中的数据项     |
| 数据项      | 数据项规范所限定的数据 |



## 示例


```JavaScript
/*本示例选中工作表 Sheet1 中数据透视表字段“name”的数据透视表项。*/
function test() {
    let pvtTable = Worksheets.Item("Sheet1").Range("I1").PivotTable
    pvtTable.PivotFields("name").DataRange.Select()
}
```


```JavaScript
/*本示例显示活动工作表中数据透视表字段“grades”的数据透视表项。*/
function test() {
    let pvtField = ActiveSheet.PivotTables(1).PivotFields("grades")
    alert(pvtField.DataRange.Value2.toString())
}
```
