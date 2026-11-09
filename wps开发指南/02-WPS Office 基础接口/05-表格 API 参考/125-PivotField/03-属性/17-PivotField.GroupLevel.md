# PivotField.GroupLevel

返回一组字段中指定字段的位置（如果该字段是分组字段集合中的成员）。只读。



## 语法

express.**GroupLevel**

express   一个代表 **PivotField** 对象的变量。

## 类型

any

## 说明


该属性对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源无效。

处于最高级的父字段（即最左侧的父字段）为第一级，其子字段为第二级，依此类推。



## 示例


```JavaScript
/*本示例检查包含活动单元格的字段是否为最高一级的父字段，如果是则显示一个消息框。*/
function test() {
    Worksheets.Item("Sheet1").Activate()
    if (ActiveCell.PivotField.GroupLevel == 1) {
        alert("This is the highest-level parent field.")
    }
}
```


```JavaScript
/*本示例显示工作表 Sheet1 中数据透视表的字段“score”的位置。*/
function test() {
    let pvtField = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("score")
    alert(pvtField.GroupLevel)
}
```
