# PivotField.Name

返回或设置一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **PivotField** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的第一个字段的名称。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields(1).Name)
}
```


```JavaScript
/*本示例将第一张工作表中数据透视表的字段“id”的名称修改为“学号”。*/
function test() {
    let pvtField = Worksheets.Item(1).Range("I1").PivotTable.PivotFields("id")
    pvtField.Name = "学号"
}
```
