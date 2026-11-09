# Column.Delete

删除指定列。



## 语法

express.**Delete()**

express   一个代表 **Column** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档第一张表格的第一列。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Item(1).Delete()
}
```


```JavaScript
/*本示例删除所选表格列的第二列。*/
function test() {
    Selection.Columns.Item(2).Delete()
}
```
