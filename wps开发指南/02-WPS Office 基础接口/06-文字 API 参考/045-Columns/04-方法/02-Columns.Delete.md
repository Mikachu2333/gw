# Columns.Delete

删除指定列。



## 语法

express.**Delete()**

express   一个代表 **Columns** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档第一个表格中所有的列。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Delete()
}
```


```JavaScript
/*本示例将第一个窗口上所选内容中表格的列删除。*/
function test() {
    Windows.Item(1).Selection.Columns.Delete()
}
```
