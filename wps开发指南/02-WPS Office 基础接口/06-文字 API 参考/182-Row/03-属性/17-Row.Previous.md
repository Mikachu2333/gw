# Row.Previous

返回一个 **Row** 对象，该对象代表指定行的前一个表格行。只读。



## 语法

express.**Previous**

express   一个代表 **Row** 对象的变量。

## 类型

Row

## 示例


```JavaScript
/*本示例判断如果所选内容位于表格中，则选择所选内容前一行的内容。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.Item(1).Previous.Select()
    }
}
```


```JavaScript
/*本示例删除活动文档上第一个表格的第一行。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.Item(2).Previous.Delete()
}
```
