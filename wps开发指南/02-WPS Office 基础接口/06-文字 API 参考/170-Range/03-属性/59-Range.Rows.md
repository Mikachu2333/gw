# Range.Rows

返回一个 **Rows** 集合，该集合代表范围中的所有表格行。只读。



## 语法

express.**Rows**

express   一个代表 **Range** 对象的变量。

## 类型

Rows

## 示例


```JavaScript
/*本示例删除活动文档的第一个表格的最后一行。*/
function test() {
    let range = ActiveDocument.Tables.Item(1).Range
    range.Rows.Last.Delete()
}
```


```JavaScript
/*本示例判断如果所选范围位于表格中，则设置该范围中的所有表格行的高度。*/
function test() {
    if (Selection.Range.Information(wdWithInTable)) {
        Selection.Range.Rows.SetHeight(InchesToPoints(1), wdRowHeightExactly)
    }
}
```
