# PivotField.ClearValueFilters

调用此方法将删除透视字段的 **PivotFilters** 集合中的所有值筛选。



## 语法

express.**ClearValueFilters()**

express   一个代表 **PivotField** 对象的变量。

## 返回值

void

## 说明


下表列出了此方法将删除的各种值筛选类型。  

| **xlTopCount**                    |
| --------------------------------- |
| **xlBottomCount**                 |
| **xlTopPercent**                  |
| **xlBottomPercent**               |
| **xlTopSum**                      |
| **xlBottomSum**                   |
| **xlValueEquals**                 |
| **xlValueDoesNotEqual**           |
| **xlValueIsGreaterThan**          |
| **xlValueIsGreaterThanOrEqualTo** |
| **xlValueIsLessThan**             |
| **xlValueIsLessThanOrEqualTo**    |
| **xlValueIsBetween**              |
| **xlValueIsNotBetween**           |



## 示例


```JavaScript
/*本示例删除活动工作表中第一张数据透视表的第三个字段的所有值筛选器。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields(3).ClearValueFilters()
}
```


```JavaScript
/*本示例删除工作表 Sheet1 中数据透视表应用于字段“id”的所有值筛选器。*/
function test() {
    let pvtfield = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("id")
    pvtfield.ClearValueFilters()
}
```
