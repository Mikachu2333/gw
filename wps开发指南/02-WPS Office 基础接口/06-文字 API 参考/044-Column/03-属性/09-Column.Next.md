# Column.Next

返回表格列集合中的下一列。只读。



## 语法

express.**Next**

express   一个代表 **Column** 对象的变量。

## 类型

Column

## 示例


```JavaScript
/*本示例判断如果所选内容位于表格中，则选择所选内容第一列的下一个表格列的内容。*/
function test() {
    if (Selection.Information(wdWithInTable)) {
        Selection.Columns.Item(1).Next.Select()
    }
}
```


```JavaScript
/*本示例删除活动文档第一个表格的第二列。*/
function test() {
    ActiveDocument.Tables.Item(1).Columns.Item(1).Next.Delete()
}
```
