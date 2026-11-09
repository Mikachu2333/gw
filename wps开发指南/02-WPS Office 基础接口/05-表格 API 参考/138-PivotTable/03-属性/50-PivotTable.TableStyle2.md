# PivotTable.TableStyle2

 **TableStyle2** 属性指定当前应用于数据透视表的数据透视表样式。可读/写。



## 语法

express.**TableStyle2**

express   一个代表 **PivotTable** 对象的变量。

## 类型

any

## 说明


由于存在名为 **TableStyle** 的属性，因此该属性称为 TableStyle2。



## 示例


```JavaScript
/*本示例设置活动工作表第一张数据透视表的样式。*/
function test() {
    ActiveSheet.PivotTables(1).TableStyle2 = "PivotStyleLight17"
}
```


```JavaScript
/*本示例设置工作表 Sheet1 中数据透视表的样式为“PivotStyleLight6”。*/
function test() {
    Worksheets.Item("Sheet1").Range("I1").PivotTable.TableStyle2 = "PivotStyleLight6"
}
```
