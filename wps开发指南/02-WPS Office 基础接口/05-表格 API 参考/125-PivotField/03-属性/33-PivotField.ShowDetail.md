# PivotField.ShowDetail

获取或设置指定的 **PivotField** 是否显示明细数据。可读/写 **Boolean** 类型。



## 语法

express.**ShowDetail**

express   一个代表 **PivotField** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将第一张工作表中第一张数据透视表的字段“name”的详细信息设置为可见。*/
function test() {
    Worksheets.Item(1).PivotTables(1).PivotFields("name").ShowDetail = true
}
```


```JavaScript
/*本示例将活动工作表中数据透视表的第一个字段的详细信息设置为不可见。*/
function test() {
    ActiveSheet.Range("I1").PivotTable.PivotFields(1).ShowDetail = false
}
```
