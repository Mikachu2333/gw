# PivotTable.DisplayFieldCaptions

控制是否在网格中显示筛选器按钮以及行和列的透视字段标题。可读/写。



## 语法

express.**DisplayFieldCaptions**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 说明


默认值为 **True** 。



## 示例


```JavaScript
/*本示例隐藏第一张工作表中第一张数据透视表筛选器按钮以及行和列的透视字段标题*/
function test() {
    Worksheets.Item(1).PivotTables(1).DisplayFieldCaptions = false
}
```


```JavaScript
/*本示例显示活动工作表中数据透视表1的 DisplayFieldCaptions 的数据类型，并设置为 true*/
function test() {
    alert(typeof ActiveSheet.PivotTables("数据透视表1").DisplayFieldCaptions)
    ActiveSheet.PivotTables("数据透视表1").DisplayFieldCaptions = true
}
```
