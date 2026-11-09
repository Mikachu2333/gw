# Workbook.DefaultPivotTableStyle

从 **TableStyles** 集合中指定表样式，该表样式将用作数据透视表的默认样式。可读/写。



## 语法

express.**DefaultPivotTableStyle**

express   一个代表 **Workbook** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例演示替换活动工作簿数据透视表的默认样式*/
function test() {
    alert("原样式:" + ActiveWorkbook.DefaultPivotTableStyle)
    ActiveWorkbook.DefaultPivotTableStyle = "PivotStylePreset3_Accent2"
    alert("替换为:" + ActiveWorkbook.DefaultPivotTableStyle)
}
```


```JavaScript
/*本示例演示向活动工作簿的 TableStyles 集合中添加 pivotTable_style1 样式，并指定 pivotTable_style1 为数据透视表默认样式*/
function test() {
    ActiveWorkbook.TableStyles.Add("pivotTable_style1")
    ActiveWorkbook.DefaultPivotTableStyle = "pivotTable_style1"
}
```
