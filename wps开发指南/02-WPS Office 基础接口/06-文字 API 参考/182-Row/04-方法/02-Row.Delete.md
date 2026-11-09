# Row.Delete

删除指定的表格行



## 语法

express.**Delete()**

express   一个代表 **Row** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除所选表格的第一行。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.Item(1).Delete()
    }
}
```


```JavaScript
/*本示例删除活动文档的第一个表格的第二行。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(2).Delete()
}
```
