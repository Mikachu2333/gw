# Column.Index

返回一个 **Long** 类型的值，该值代表项目在集合中的位置。只读。



## 语法

express.**Index**

express   一个代表 **Column** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示所选表格列的第一列的索引。*/
function test() {
    alert(Selection.Columns.Item(1).Index)
}
```


```JavaScript
/*本示例显示活动文档第一张表格最后一列的索引*/
function test() {
    columns = ActiveDocument.Tables.Item(1).Columns
    alert(columns.Item(columns.Count).Index)
}
```
