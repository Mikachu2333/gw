# PivotField.RepeatLabels

返回或设置在数据透视表中是否对指定的透视字段重复项目标签。可读/写



## 语法

express.**RepeatLabels**

express   一个代表 **PivotField** 对象的变量。

## 类型

boolean

## 说明


如果对指定的透视字段重复项目标签，则为 **True** ；否则为 **False** 。

 **RepeatLabels** 属性的设置对应于数据透视表中的字段的 **“字段设置”** 对话框 **“布局和打印”** 选项卡上的 **“重复项目标签”** 复选框。

若要指定是否在单次操作中对数据透视表内的所有透视字段重复项目标签，请使用 **RepeatAllLabels** 方法。



## 示例


```JavaScript
/*本示例显示活动工作表中第一张数据透视表的字段“name”是否重复项目标签。*/
function test() {
    alert(ActiveSheet.PivotTables(1).PivotFields("name").RepeatLabels)
}
```


```JavaScript
/*本示例将第一张工作表中数据透视表的字段“score”设置为重复项目标签。*/
function test() {
    let pvtField = Worksheets.Item(1).Range("I1").PivotTable.PivotFields("score")
    pvtField.RepeatLabels = true
}
```
