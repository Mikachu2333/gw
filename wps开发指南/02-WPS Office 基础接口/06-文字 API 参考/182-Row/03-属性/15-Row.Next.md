# Row.Next

返回一个 **Row** 对象，该对象代表表格中行的集合中的下一个表格行。只读。



## 语法

express.**Next**

express   一个代表 **Row** 对象的变量。

## 类型

Row

## 示例


```JavaScript
/*本示例判断如果所选内容位于表格中，则选择所选内容第一行的下一个表格行的内容。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.Item(1).Next.Select()
    }
}
```


```JavaScript
/*本示例判断如果所选内容位于表格中，则删除所选内容第二行的下一个表格行。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Rows.Item(2).Next.Delete()
    }
}
```
