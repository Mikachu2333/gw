# Rows.Delete

删除指定的表格行



## 语法

express.**Delete()**

express   一个代表 **Rows** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除选中表格的表格行。*/
function test() {
    Selection.Rows.Delete()
}
```


```JavaScript
/*本示例删除活动文档第一个表格的表格行。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Delete()
}
```
