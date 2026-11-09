# Table.Columns

返回一个 **Columns** 集合，该集合代表表格中的所有列。只读。



## 语法

express.**Columns**

express   一个代表 **Table** 对象的变量。

## 类型

Columns

## 示例


```JavaScript
/*本示例显示活动文档的第一个表格中的列数。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        alert(ActiveDocument.Tables.Item(1).Columns.Count)
    }
}
```


```JavaScript
/*本示例将选中的第一个表格的所有列宽设置为 1.5 英寸*/
function test() {
    let columns = Selection.Tables.Item(1).Columns
    columns.Width = InchesToPoints(1.5)
}
```
