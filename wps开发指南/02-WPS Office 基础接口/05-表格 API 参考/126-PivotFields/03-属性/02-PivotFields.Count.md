# PivotFields.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **PivotFields** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示第一张工作表中数据透视表的字段数量。*/
function test() {
    alert(Worksheets.Item(1).Range("I1").PivotTable.PivotFields().Count)
}
```


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的字段数量。*/
function test() {
    alert(`字段数量：${ActiveSheet.PivotTables(1).PivotFields().Count}`)
}
```
