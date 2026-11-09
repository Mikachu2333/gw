# Column.PreferredWidthType

返回或设置用于指定表格列的宽度的首选度量单位。可读/写 **WdPreferredWidthType** 类型。



## 语法

express.**PreferredWidthType**

express   一个代表 **Column** 对象的变量。

## 类型

WdPreferredWidthType

## 示例


```JavaScript
/*本示例将活动文档第一张表格的第一列的宽度度量单位设置为磅。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Item(1).PreferredWidthType = wdPreferredWidthPoints
}
```


```JavaScript
/*本示例显示所选表格列的第一列的宽度度量单位是否为百分比。*/
function test() {
    alert(Selection.Columns.Item(1).PreferredWidthType == wdPreferredWidthPercent)
}
```
