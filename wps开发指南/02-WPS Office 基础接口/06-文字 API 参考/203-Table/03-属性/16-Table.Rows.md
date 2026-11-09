# Table.Rows

返回一个 **Rows** 集合，该集合代表表格中所有的表格行。只读。



## 语法

express.**Rows**

express   一个代表 **Table** 对象的变量。

## 类型

Rows

## 示例


```JavaScript
/*本示例删除活动文档中第一个表格的第二行。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(2).Delete()
}
```


```JavaScript
/*本示例显示第一个文档上第一个表格的行数。*/
function test() {
    let tables = Documents.Item(1).Tables
    if (tables.Count >= 1) {
        alert(tables.Item(1).Rows.Count)
    }
}
```
