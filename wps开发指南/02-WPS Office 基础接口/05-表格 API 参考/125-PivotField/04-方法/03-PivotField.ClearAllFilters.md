# PivotField.ClearAllFilters

调用此方法将删除当前应用于透视字段的所有筛选。包括从透视字段的 **PivotFilters** 集合中删除所有筛选以及删除应用于透视字段的所有手动筛选。如果透视字段位于报表筛选区域中，则所选项将被设置为默认项。



## 语法

express.**ClearAllFilters()**

express   一个代表 **PivotField** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动工作表中第一张数据透视表应用于字段“id”的所有筛选。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields("id").ClearAllFilters()
}
```


```JavaScript
/*本示例删除工作表 Sheet1 中数据透视表应用于字段“grades”的所有筛选。*/
function test() {
    let pvtfield = Worksheets.Item("Sheet1").Range("I1").PivotTable.PivotFields("grades")
    pvtfield.ClearAllFilters()
}
```
