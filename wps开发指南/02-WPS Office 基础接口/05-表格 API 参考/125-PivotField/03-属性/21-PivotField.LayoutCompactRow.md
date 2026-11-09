# PivotField.LayoutCompactRow

指定在选择行时是否压缩透视字段（在一列中显示多个透视字段的项目）。可读/写 **Boolean** 类型。



## 语法

express.**LayoutCompactRow**

express   一个代表 **PivotField** 对象的变量。

## 类型

boolean

## 说明


如果 **LayoutForm** 属性设置为 **xlTabular** ，则将此属性设置为 **True** （默认值）将不会立即在数据透视表中产生可看到的效果，但可以独立地设置此属性。



## 示例


```JavaScript
/*本示例为活动工作表的第一个数据透视表的字段“age”在选择行时压缩透视字段。*/
function test() {
    ActiveSheet.PivotTables(1).PivotFields("age").LayoutCompactRow  = true
}
```


```JavaScript
/*本示例显示第一张工作表的数据透视表的字段“score”在选择行时是否压缩透视字段。*/
function test() {
    alert(Worksheets.Item(1).Range("I1").PivotTable.PivotFields("score").LayoutCompactRow)
}
```
