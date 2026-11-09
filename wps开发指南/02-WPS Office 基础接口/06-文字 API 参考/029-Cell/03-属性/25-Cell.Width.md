# Cell.Width

返回或设置指定表格单元格的宽度（以磅为单位）。 **Long** 类型，可读写。



## 语法

express.**Width**

express   一个代表 **Cell** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示插入点所在单元格的宽度（以英寸为单位）。*/
function test() {
    if (Application.Selection.Information(wdWithInTable)) {
        alert(Application.PointsToInches(Selection.Cells.Item(1).Width))
    }
}
```


```JavaScript
/*本示例设置活动文档中第一张表格第一个单元格的宽度*/
function test() {
    Application.ActiveDocument.Tables.Item(1).Cell(1, 1).Width = 40
}
```
