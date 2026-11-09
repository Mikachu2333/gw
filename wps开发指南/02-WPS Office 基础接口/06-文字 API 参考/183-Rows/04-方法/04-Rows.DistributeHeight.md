# Rows.DistributeHeight

将指定行或单元格的高度调整为相等。



## 语法

express.**DistributeHeight()**

express   一个代表 **Rows** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例将活动文档的第一张表格的高度调整为相等。*/
function test() {
    ActiveDocument.Tables.Item(1).Rows.DistributeHeight()
}
```


```JavaScript
/*本示例将活动文档中第一张表格的前三行高度调整为相等。*/
function test() {
    if (ActiveDocument.Tables.Count >= 1) {
        let rows = ActiveDocument.Tables.Item(1).Rows
        let range = ActiveDocument.Range(rows.Item(1).Range.Start, rows.Item(3).Range.End)
        range.Rows.DistributeHeight()
    }
}
```
