# PivotItemList.Count

返回一个 **Long** 值，它代表集合中对象的数量。



## 语法

express.**Count**

express   一个代表 **PivotItemList** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示包含活动单元格的数据透视项行轴上项目的数量。*/
function test() {
    alert(ActiveCell.PivotCell.RowItems.Count)
}
```
