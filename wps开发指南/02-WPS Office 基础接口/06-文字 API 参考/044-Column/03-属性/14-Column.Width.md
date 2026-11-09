# Column.Width

返回或设置指定列的宽度，以磅为单位。可读/写 **Long** 类型。



## 语法

express.**Width**

express   一个代表 **Column** 对象的变量。

## 类型

number（float 精度）

## 示例


```JavaScript
/*本示例显示活动文档第一张表格的第一列的宽度。*/
function test() {
    alert(`${ActiveDocument.Tables.Item(1).Columns.Item(1).Width} 磅`)
}
```


```JavaScript
/*本示例将所选表格列的第二列宽度设置为 72 磅。*/
function test() {
    Selection.Columns.Item(2).Width = 72
}
```
