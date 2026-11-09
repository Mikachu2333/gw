# PivotTable.MergeLabels

如果指定的数据透视表的外部行项、列项、分类汇总和总计标志使用合并单元格，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MergeLabels**

express   一个代表 **PivotTable** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使第一张工作表上的第一个数据透视表使用合并单元格外部行项、列项、分类汇总和总计的标志。*/
function test() {
    Application.Worksheets.Item(1).PivotTables(1).MergeLabels = true
}
```


```JavaScript
/*本示例显示数据透视表 MergeLabels 属性的数据类型，并设置为 false。*/
function test() {
    alert(typeof ActiveSheet.PivotTables(1).MergeLabels)
    ActiveSheet.PivotTables(1).MergeLabels = false
}
```
