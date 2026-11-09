# Table.Delete

删除指定的表格。



## 语法

express.**Delete()**

express   一个代表 **Table** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中的第一个表格。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        ActiveDocument.Tables.Item(1).Delete()
    }
}
```


```JavaScript
/*本示例将删除第一个文档中所有行数为3的表格。*/
function test() {
    let tables = Documents.Item(1).Tables
    for (let i = 1; i <= tables.Count; i++) {
        let table = tables.Item(i)
        if (table.Rows.Count === 3) {
            table.Delete()
            i--
        }
    }
}
```
